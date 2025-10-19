# Website API - Simple Message Relay
# Copyright (c) 2025 YuriODev
# File: src/main.py
# Created: 2025-10-19

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from datetime import datetime
import httpx
import logging
import json
from pathlib import Path

# Simple request/response models
class ChatRequest(BaseModel):
    message: str
    customer_id: Optional[str] = None

class ChatResponse(BaseModel):
    response: str
    timestamp: datetime = datetime.utcnow()

# Create app (no docs)
app = FastAPI(
    title="Website API",
    docs_url=None,  # No Swagger here
    redoc_url=None   # No Redoc here
)

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://yuriodev.co.uk", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)

# Setup logging
Path("logs").mkdir(exist_ok=True)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.post("/api/chat")
async def relay_message(request: ChatRequest):
    """Simply relay message to Agent Engine and return response."""
    
    # Log request
    with open("logs/requests.jsonl", "a") as f:
        f.write(json.dumps({
            "timestamp": datetime.utcnow().isoformat(),
            "message": request.message,
            "customer_id": request.customer_id
        }) + "\n")
    
    try:
        # Forward to Agent Engine
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "http://agent-engine:8001/process",  # Internal Docker network
                json=request.dict(),
                timeout=30.0
            )
            result = response.json()
        
        return ChatResponse(response=result["response"])
        
    except httpx.ConnectError:
        # Agent Engine not ready yet - return mock response
        logger.warning("Agent Engine not available, returning mock response")
        return ChatResponse(
            response=f"[Mock] Echo: {request.message}"
        )
    except Exception as e:
        logger.error(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail="Processing error")

@app.get("/health")
async def health():
    """Simple health check."""
    return {"status": "ok", "service": "website-api"}
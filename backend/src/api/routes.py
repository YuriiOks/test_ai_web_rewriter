# Website API Routes
# Copyright (c) 2025 YuriODev
# File: src/api/routes.py
# Created: 2025-10-19

from fastapi import APIRouter, HTTPException
from src.core.schemas import ChatRequest, ChatResponse, ErrorResponse
from src.utils.logging import logger, log_request, log_response
from src.core.config import settings
import httpx
from datetime import datetime

router = APIRouter(prefix="/api", tags=["chat"])

@router.post("/chat", response_model=ChatResponse)
async def process_chat(request: ChatRequest):
    """
    Process chat message from frontend.
    
    Flow:
    1. Receive message from terminal UI
    2. Log the request
    3. Forward to Agent Engine (when ready)
    4. Return response to frontend
    """
    
    # Log incoming request
    logger.info(f"📨 Received message: {request.message[:50]}...")
    log_request(request.message, request.customer_id)
    
    try:
        # For now: echo back (will forward to Agent Engine later)
        # TODO: Replace with actual Agent Engine call
        if settings.agent_engine_url and False:  # Disabled for now
            async with httpx.AsyncClient() as client:
                agent_response = await client.post(
                    f"{settings.agent_engine_url}/infer",
                    json=request.dict(),
                    timeout=30.0
                )
                response_text = agent_response.json()["response"]
        else:
            # Temporary echo response for testing
            response_text = f"[API Echo] Received: '{request.message}'"
        
        # Log response
        log_response(response_text, "success")
        logger.info("✅ Response sent successfully")
        
        return ChatResponse(
            response=response_text,
            status="success"
        )
        
    except httpx.TimeoutException:
        logger.error("⏱️ Agent Engine timeout")
        log_response("Timeout error", "error")
        raise HTTPException(status_code=504, detail="Processing timeout")
        
    except Exception as e:
        logger.error(f"❌ Error: {str(e)}")
        log_response(str(e), "error")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/health")
async def health_check():
    """Health check endpoint for monitoring."""
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow().isoformat(),
        "service": "website-api"
    }
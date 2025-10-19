# Website API Schemas
# Copyright (c) 2025 YuriODev
# File: src/core/schemas.py
# Created: 2025-10-19

from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class ChatRequest(BaseModel):
    """Incoming chat message from frontend."""
    message: str = Field(..., min_length=1, max_length=1000)
    customer_id: Optional[str] = None
    session_id: Optional[str] = None
    
class ChatResponse(BaseModel):
    """Response to send back to frontend."""
    response: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = "success"
    
class ErrorResponse(BaseModel):
    """Error response format."""
    error: str
    status: str = "error"
    timestamp: datetime = Field(default_factory=datetime.utcnow)
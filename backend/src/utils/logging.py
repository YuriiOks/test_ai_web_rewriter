# Website API Logging
# Copyright (c) 2025 YuriODev
# File: src/utils/logging.py
# Created: 2025-10-19
# Updated to match Claude's structured logging architecture

import logging
import json
from pathlib import Path
from datetime import datetime
from typing import Optional, Dict
from rich.logging import RichHandler

# --- EMOJI Class as per Claude's suggestion ---
class EMOJI:
    """Emoji constants for logging clarity."""
    SUCCESS = "✅"
    FAILURE = "❌"
    INFO = "💡"
    WARNING = "⚠️"
    FETCH = "📡"
    TRANSFORM = "✨"
    SAVE = "💾"
    VALIDATE = "🔍"
    REJECT = "🚫"
    AI = "🤖"
    CLOCK = "⏱️"

# --- Main Logger Setup ---
def setup_logging(level: int = logging.INFO) -> logging.Logger:
    """Configure Rich-based console logging."""
    logging.basicConfig(
        level=level,
        format="%(message)s",
        datefmt="[%X]",
        handlers=[RichHandler(rich_tracebacks=True, markup=True)]
    )
    # Ensure the logs directory exists
    Path("logs").mkdir(exist_ok=True)
    return logging.getLogger("api_logger")

logger = setup_logging()

# --- Structured JSONL Logging Functions ---

def log_request(
    customer_id: Optional[str],
    query: str,
    intent: str,
    model: str,
    latency_ms: int,
    tokens: Dict[str, int],
    status: str = "success"
) -> None:
    """Log successful request to requests.jsonl."""
    log_entry = {
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "customer_id": customer_id,
        "query": query,
        "intent": intent,
        "model_used": model,
        "latency_ms": latency_ms,
        "tokens": tokens,
        "status": status,
        "log_level": "INFO",
        "emoji": EMOJI.SUCCESS
    }
    with open("logs/requests.jsonl", "a") as f:
        f.write(json.dumps(log_entry) + "\n")

def log_rejection(
    customer_id: Optional[str],
    query: str,
    reason: str
) -> None:
    """Log rejected query to rejections.jsonl."""
    log_entry = {
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "customer_id": customer_id,
        "query": query,
        "reason": reason,
        "status": "rejected",
        "log_level": "WARNING",
        "emoji": EMOJI.REJECT
    }
    with open("logs/rejections.jsonl", "a") as f:
        f.write(json.dumps(log_entry) + "\n")

def log_error(
    customer_id: Optional[str],
    query: str,
    error_type: str,
    error_message: str,
    model_attempted: Optional[str] = None
) -> None:
    """Log system error to errors.jsonl."""
    log_entry = {
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "customer_id": customer_id,
        "query": query,
        "error_type": error_type,
        "error_message": error_message,
        "model_attempted": model_attempted,
        "status": "error",
        "log_level": "ERROR",
        "emoji": EMOJI.FAILURE
    }
    with open("logs/errors.jsonl", "a") as f:
        f.write(json.dumps(log_entry) + "\n")
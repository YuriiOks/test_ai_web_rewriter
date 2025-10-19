# Website API Configuration
# Copyright (c) 2025 YuriODev
# File: src/core/config.py
# Created: 2025-10-19

from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    """API configuration settings."""
    
    # API Settings
    api_title: str = "YuriODev Website API"
    api_version: str = "0.1.0"
    api_prefix: str = "/api"
    
    # CORS Settings  
    cors_origins: list = ["https://yuriodev.co.uk", "http://localhost:3000"]
    
    # Agent Engine URL (internal)
    agent_engine_url: str = "http://localhost:8001"
    
    # Security
    swagger_password: Optional[str] = "shawbrook2025"
    
    # Logging
    log_level: str = "INFO"
    
    class Config:
        env_file = ".env"

settings = Settings()
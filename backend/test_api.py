import httpx
import asyncio

async def test_chat_endpoint():
    """Test the chat endpoint."""
    
    # Test data
    request_data = {
        "message": "Hello, this is a test message",
        "customer_id": "12345"
    }
    
    # Make request
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "http://localhost:8000/api/chat",
            json=request_data
        )
        
    print(f"Status: {response.status_code}")
    print(f"Response: {response.json()}")

if __name__ == "__main__":
    asyncio.run(test_chat_endpoint())
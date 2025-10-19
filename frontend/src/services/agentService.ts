/**
 * Agent Service - API Communication for Banking Assistant
 */

// This interface now matches the simplified FastAPI backend request
interface ChatRequest {
  message: string;
  customer_id?: string; // Kept for future use, but can be managed by backend state
  session_id?: string;
}

// This interface matches the simplified FastAPI backend response
interface ChatResponse {
  response: string;
  timestamp: string; // Assuming ISO string from backend
  status: 'success' | 'error';
}

/**
 * Sends a raw message string to the backend API.
 * The backend is responsible for parsing and handling the command.
 */
export const sendMessage = async (
  message: string,
  sessionId?: string
): Promise<ChatResponse> => {
  // The API endpoint remains the same
  const API_ENDPOINT = '/api/chat'; 

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message,
        session_id: sessionId,
      } as ChatRequest),
    });

    if (!response.ok) {
      // Handle HTTP errors like 404, 500 etc.
      return {
        status: 'error',
        response: `[ERROR] HTTP error! Status: ${response.status}`,
        timestamp: new Date().toISOString(),
      };
    }

    const data: ChatResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Agent service error:', error);
    return {
      status: 'error',
      response: `[ERROR] Network failure. Unable to connect to the API.`,
      timestamp: new Date().toISOString(),
    };
  }
};
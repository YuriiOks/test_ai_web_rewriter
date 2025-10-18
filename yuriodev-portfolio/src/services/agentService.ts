/**
 * Agent Service - API Communication for Banking Assistant
 *
 * Handles communication with the backend API for banking queries
 * Backend URL: https://api.yuriodev.co.uk
 */

interface QueryRequest {
  customer_id: number;
  query: string;
  session_id?: string;
}

interface QueryResponse {
  status: 'success' | 'error';
  data?: {
    message: string;
    metadata?: {
      customer_name: string;
      product_type: string;
      processing_time: number;
    };
  };
  error?: {
    code: string;
    message: string;
  };
}

/**
 * Send a banking query to the AI agent
 */
export const sendQuery = async (
  customerId: number,
  query: string,
  sessionId?: string
): Promise<QueryResponse> => {
  try {
    const response = await fetch('/api/agent/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customer_id: customerId,
        query,
        session_id: sessionId,
      } as QueryRequest),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: QueryResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Agent service error:', error);
    return {
      status: 'error',
      error: {
        code: 'NETWORK_ERROR',
        message: error instanceof Error ? error.message : 'Failed to connect to API',
      },
    };
  }
};

/**
 * Validate customer ID format
 */
export const validateCustomerId = (id: number): boolean => {
  return Number.isInteger(id) && id > 0 && id < 1000000;
};

/**
 * Validate query text
 */
export const validateQuery = (query: string): boolean => {
  return query.trim().length > 0 && query.length <= 500;
};

/**
 * Parse structured command
 */
export const parseCommand = (
  rawCommand: string
): { command: string; customerId?: number; query?: string; error?: string } => {
  const trimmed = rawCommand.trim();

  // Match: query --id 123 "question text"
  const queryMatch = trimmed.match(/^query\s+--id\s+(\d+)\s+"([^"]+)"/);
  if (queryMatch) {
    const customerId = parseInt(queryMatch[1]);
    const query = queryMatch[2];

    if (!validateCustomerId(customerId)) {
      return {
        command: 'query',
        error: 'Invalid customer ID. Must be between 1 and 999999.',
      };
    }

    if (!validateQuery(query)) {
      return {
        command: 'query',
        error: 'Invalid query. Must be between 1 and 500 characters.',
      };
    }

    return {
      command: 'query',
      customerId,
      query,
    };
  }

  // Other commands (help, clear, exit, info)
  return { command: trimmed.toLowerCase() };
};

export default {
  sendQuery,
  validateCustomerId,
  validateQuery,
  parseCommand,
};

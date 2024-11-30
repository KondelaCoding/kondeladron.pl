// utils/send-email.ts

import { FormData } from '../components/Contact';

// Ensure that your API endpoint path is correct. Adjust if necessary.
const API_ENDPOINT = '/api/email';

export async function sendEmail(data: FormData): Promise<string> {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Important to set the content type
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      // If the response is not ok, throw an error with the message from the server
      throw new Error(result.error || 'Nie udało się wysłać wiadomości');
    }

    // Return the success message from the server
    return result.message;
  } catch (error: any) {
    // Re-throw the error to be caught in the calling function
    throw new Error(error.message || 'Coś poszło nie tak');
  }
}
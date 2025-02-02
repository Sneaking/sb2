import OpenAI from 'openai';

export async function getAIResponse(message, maxTokens = 200) {
  // Detect environment and retrieve the API key.
  const apiKey =
    typeof process !== 'undefined' && process.env.OPENAI_API_KEY
      ? process.env.OPENAI_API_KEY
      : import.meta.env.VITE_OPENAI_API_KEY;

  console.log('Loaded API Key:', apiKey ? 'Key Loaded' : 'No Key Found');

  if (!apiKey) {
    return { error: 'OpenAI API key not found in environment variables.' };
  }

  try {
    // Make the API call to OpenAI's chat completions endpoint using GPT-4.
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: message }],
        max_tokens: maxTokens  // Dynamic token count limit
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API Error:', errorData);
      return { error: errorData.error?.message || 'Failed to fetch AI response.' };
    }

    const data = await response.json();
    return { content: data.choices[0].message.content };
  } catch (error) {
    console.error('Error during OpenAI API call:', error);
    return { error: 'An unexpected error occurred while processing the AI response.' };
  }
}            return { error: errorData.error?.message || 'Failed to fetch AI response.' };
        }

        // Parse and return the response data
        const data = await response.json();
        return { content: data.choices[0].message.content };
    } catch (error) {
        // Log and return any unexpected errors
        console.error('Error during OpenAI API call:', error);
        return { error: 'An unexpected error occurred while processing the AI response.' };
    }
}

import OpenAI from 'openai';

export async function getAIResponse(message) {
    const apiKey = process.env.OPENAI_API_KEY || import.meta.env.VITE_OPENAI_API_KEY;

    if (!apiKey) {
        return { error: 'OpenAI API key not found in environment variables.' };
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: message }],
                max_tokens: 200,
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
    console.error('Error during OpenAI API call:', error); // Logs detailed error to console
    return { error: `Unexpected error: ${error.message}` }; // Includes error message in response
    }
}

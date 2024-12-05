import OpenAI from 'openai';

export async function getAIResponse(message) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        throw new Error('OpenAI API key not found');
    }

    const openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true
    });

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }]
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error('OpenAI API Error:', error);
        throw error;
    }
}
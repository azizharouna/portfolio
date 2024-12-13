// functions/api/chat.js

export async function onRequest(context) {
  const { request } = context;

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let data;
  try {
    data = await request.json();
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const userMessage = data.message;
  if (!userMessage) {
    return new Response(JSON.stringify({ error: 'No message provided' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const OPENAI_API_KEY = context.env.OPENAI_API_KEY;
  if (!OPENAI_API_KEY) {
    return new Response(JSON.stringify({ error: 'Server configuration error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // Specify your desired model
        messages: [{ role: 'user', content: userMessage }],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return new Response(JSON.stringify({ error: errorData }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const responseData = await response.json();
    const aiMessage = responseData.choices[0].message.content;

    return new Response(JSON.stringify({ response: aiMessage }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error communicating with OpenAI' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

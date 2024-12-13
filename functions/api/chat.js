// functions/api/chat.js

export async function onRequest(context) {
  const { request } = context;

  console.log('Received request method:', request.method);

  if (request.method !== 'POST') {
    console.log('Method not allowed:', request.method);
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let data;
  try {
    data = await request.json();
    console.log('Received data:', data);
  } catch (error) {
    console.log('Invalid JSON:', error);
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const userMessage = data.message;
  console.log('User message:', userMessage);

  if (!userMessage) {
    console.log('No message provided');
    return new Response(JSON.stringify({ error: 'No message provided' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const OPENAI_API_KEY = context.env.OPENAI_API_KEY;
  console.log('OPENAI_API_KEY:', OPENAI_API_KEY);

  if (!OPENAI_API_KEY) {
    console.log('Server configuration error: OPENAI_API_KEY not set');
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
      console.log('OpenAI API error:', errorData);
      return new Response(JSON.stringify({ error: errorData }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const responseData = await response.json();
    const aiMessage = responseData.choices[0].message.content;
    console.log('AI message:', aiMessage);

    return new Response(JSON.stringify({ response: aiMessage }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log('Error communicating with OpenAI:', error);
    return new Response(JSON.stringify({ error: 'Error communicating with OpenAI' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

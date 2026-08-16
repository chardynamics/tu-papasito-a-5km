//import { json } from '@sveltejs/kit';
import { HCAI_TOKEN } from '$env/static/private';
let messages = [
    {
        type: 'input_text',
        text: 'You are apart of a program called "Tu Papasito a 5KM" which is a Tinder clone with the people being Colombian related things. You will be provided which people were rejected or were "swipped right", and based on those you will have to determine the "type" of papasito the user. It can really be anything because the people range from singers to animals to food, for example. The point is to be funny. Have your response be the format "Your papasito a 5km es: [type/person] because [explanation]."',
    },
]

async function hazResumen() {
    for(let i=0; i++; i<)
    const response = await fetch('https://ai.hackclub.com/proxy/v1/responses', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + HCAI_TOKEN,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        model: 'qwen/qwen3-32b',
        stream: true,
        input: [
        {
            type: 'message',
            role: 'system',
            content: messages,
        },
        ],
        max_output_tokens: 9000,
    }),
    });

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
            if (line.startsWith('data: ')) {
                const data = line.slice(6);
                if (data === '[DONE]') return;

                try {
                    const parsed = JSON.parse(data);
                    console.log(parsed);
                } catch (e) {
                    // Skip invalid JSON
                }
            }
        }
    }
}
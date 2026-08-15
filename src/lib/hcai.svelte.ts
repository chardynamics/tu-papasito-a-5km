
import { HCAI_TOKEN } from '$env/static/private'
import { OpenRouter } from "@openrouter/sdk";

const client = new OpenRouter({
	apiKey: "YOUR_API_KEY",
	serverURL: "https://ai.hackclub.com/proxy/v1",
});

const response = await client.chat.send({
	model: "qwen/qwen3-32b",
	messages: [
		{ role: "user", content: "Tell me a joke." },
	],
	stream: false,
});
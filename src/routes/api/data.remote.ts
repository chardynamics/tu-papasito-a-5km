import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText } from "ai";
import z from "zod";
import { query } from "$app/server";
import { HCAI_TOKEN } from "$env/static/private";

const hackclub = createOpenRouter({
	apiKey: HCAI_TOKEN,
	baseURL: "https://ai.hackclub.com/proxy/v1",
});

export const getCharacter = query(
	z.object({
		accepted: z.array(z.number()),
		rejected: z.array(z.number()),
	}),
	async (choices) => {
        const { accepted, rejected } = choices;

        // this works
		// const response = await generateText({
		// 	model: hackclub("qwen/qwen3-32b"),
		// 	messages: [{ role: "user", content: "Tell me a joke." }],
		// });

		return "placeholder";
	},
);

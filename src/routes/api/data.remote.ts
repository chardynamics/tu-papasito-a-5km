import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText } from "ai";
import z from "zod";
import { query } from "$app/server";
import { HCAI_TOKEN } from "$env/static/private";
import { characters } from "$lib/characters.svelte";

const history = [
    {
        role: 'user' as const,
        content: 'You are apart of a program called "Tu Papasito a 5KM" which is a Tinder clone with the people being Colombian related things. You will be provided which people were rejected or were "swipped right" by just jsonifying our character list and each object has an attribute "accepted" which is whether it was accepted or not, and based on those you will have to determine the "type" of papasito the user. It can really be anything because the people range from singers to animals to food, for example. The point is to be funny. Have your response be the format "Your papasito a 5km es: [type/person] because [explanation]." Output in markdown and don\'t exceed 700 characters',
    },

];

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

		const filtered = characters.map((e) => ({
			...e, accepted: accepted.includes(e.id)
		}))

		history.push({
			role: 'user' as const,
			content: JSON.stringify(filtered)
		});

		console.log(history)

		const response = await generateText({
		 	model: hackclub("google/gemini-3.5-flash-lite"),
		 	messages: history,
		});

		console.log(history)

		return response.text;
	},
);

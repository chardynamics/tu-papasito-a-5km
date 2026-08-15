import { rollCharacter } from "$lib/utils.svelte";

export const globalState: {
    character?: {
        id: number;
        name: string;
        age: string;
        height: string;
        description: string;
        image: string;
        depends?: number;
    };
    accepted: number[];
    denied: number[];
} = $state({
    character: rollCharacter(),
    accepted: [],
    denied: [],
});

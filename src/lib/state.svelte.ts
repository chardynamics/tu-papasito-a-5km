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
    result?: string;

    acceptedSwipe: boolean;
    rejectedSwipe: boolean;
} = $state({
    character: rollCharacter(),
    accepted: [],
    denied: [],
    acceptedSwipe: false,
    rejectedSwipe: false
});

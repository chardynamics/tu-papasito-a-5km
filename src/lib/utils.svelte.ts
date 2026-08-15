import { browser } from "$app/environment";
import { remainingCharacters } from "$lib/characters.svelte";

export function rollCharacter() {
    if (!browser) return;

	const i = Math.floor(Math.random() * remainingCharacters.length);
	const character = remainingCharacters[i];

	if (character.depends === undefined) return character;

	const dependsOn = remainingCharacters.find((c) => c.id === character.depends);
	if (!dependsOn) return character;

	return rollCharacter();
}

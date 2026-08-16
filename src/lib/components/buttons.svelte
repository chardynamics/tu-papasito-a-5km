<script>
import { rollCharacter } from "$lib/utils.svelte";
import { characters, remainingCharacters } from "$lib/characters.svelte";
import { globalState } from "$lib/state.svelte";
import { getCharacter } from "../../routes/api/data.remote";

function changeCharacter() {
	if (remainingCharacters.length === 1) return;
	const currentIndex = remainingCharacters.findIndex(
		(c) => c.name === globalState.character?.name,
	);
	remainingCharacters.splice(currentIndex, 1);

	const character = rollCharacter();
	globalState.character = character;
}

</script>

<div class="flex w-75 justify-between">
	<button
		title="reject"
		type="button"
		onclick={async () => {
			if (globalState.character?.id !== undefined) {
				globalState.rejectedSwipe = true;
				setTimeout(() => {
					globalState.rejectedSwipe = false;
				}, 1000)
				const set = new Set(globalState.denied);
				set.add(globalState.character.id);
				globalState.denied = Array.from(set);
			}
			changeCharacter()

			if (globalState.accepted.length + globalState.denied.length === characters.length) {
				globalState.result = await getCharacter({ accepted: globalState.accepted, rejected: globalState.denied })
			}
        }}
		class="rounded-full size-25 hover:cursor-pointer flex justify-center items-center"
	>

        <img
            src="/assets/nope.png"
            alt="favicon"
            width="100"
            height="100"
            style="display:block; width:100px; height:100px; image-rendering: pixelated; image-rendering: crisp-edges;"
        />
	</button>

	<button
		title="accept"
		type="button"
		onclick={async () => {
			if (globalState.character?.id !== undefined) {
				globalState.acceptedSwipe = true;
				setTimeout(() => {
					globalState.acceptedSwipe = false;
				}, 1000)
				const set = new Set(globalState.accepted);
				set.add(globalState.character.id);
				globalState.accepted = Array.from(set);
			}
            changeCharacter()

			if (globalState.accepted.length + globalState.denied.length === characters.length) {
				globalState.result = await getCharacter({ accepted: globalState.accepted, rejected: globalState.denied })
			}
        }}
		class="rounded-full size-25 hover:cursor-pointer flex justify-center items-center"
	>
        <img
            src="/assets/caliente.png"
            alt="favicon"
            width="100"
            height="100"
            style="display:block; width:100px; height:100px; image-rendering: pixelated; image-rendering: crisp-edges;"
        />
	</button>
</div>

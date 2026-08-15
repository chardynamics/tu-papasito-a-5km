<script>
import { rollCharacter } from "$lib/utils.svelte";
import { remainingCharacters } from "$lib/characters.svelte";
import { globalState } from "$lib/state.svelte";

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
		onclick={() => {
            changeCharacter()
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
		onclick={() => {
            changeCharacter()
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

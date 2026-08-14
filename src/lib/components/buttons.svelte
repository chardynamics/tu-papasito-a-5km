<script>
    import { remainingCharacters } from "$lib/characters.svelte";
import { globalState } from "$lib/state.svelte";

function changeCharacter() {
    globalState.character = remainingCharacters[Math.floor(Math.random() * remainingCharacters.length)]
}
</script>

<div class="flex w-75 justify-between">
    <button
        onclick={() => {
            changeCharacter()
        }}
        class="rounded-full border-3 size-25 border-red-500 hover:cursor-pointer flex justify-center items-center"
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x stroke-red-500"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    </button>

    <button
        onclick={() => {
            changeCharacter()
        }}
        class="rounded-full border-3 size-25 border-green-500 hover:cursor-pointer flex justify-center items-center"
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart stroke-green-500 fill-green-500"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
    </button>
</div>

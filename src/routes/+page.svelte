<script>
    import Buttons from '../lib/components/buttons.svelte'
    import NameDescription from '../lib/components/name-description.svelte'
    import { globalState } from '$lib/state.svelte'
</script>

<div class="flex justify-center items-center min-h-screen">
    <div class="child">
        <NameDescription name={globalState.character.name} age={globalState.character.age} height={globalState.character.height} description={globalState.character.description}/>
        <Buttons />
    </div>
</div>
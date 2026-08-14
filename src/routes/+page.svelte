<script>
    import Buttons from '../lib/components/buttons.svelte'
    import NameDescription from '../lib/components/name-description.svelte'
    import { globalState } from '$lib/state.svelte'
</script>

<div class="grid w-full">
    <div class="col-start-1 row-start-1 flex justify-center items-center">
        <img src="/assets/bg.png" alt="background">
    </div>

    <div class="col-start-1 row-start-1 flex justify-center items-center min-h-screen z-10">
        <div class="child">
            <NameDescription name={globalState.character.name} age={globalState.character.age} height={globalState.character.height} description={globalState.character.description}/>
            <Buttons />
        </div>
    </div>
</div>
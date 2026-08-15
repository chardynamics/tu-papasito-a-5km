<script>
    import Buttons from '../lib/components/buttons.svelte'
    import NameDescription from '../lib/components/name-description.svelte'
    import TopBar from '../lib/components/top-bar.svelte'
    import Logo from '../lib/components/logo.svelte'
    import { globalState } from '$lib/state.svelte'
</script>

<div class="grid min-h-screen w-full place-items-center">
    <img class="col-start-1 row-start-1 w-full h-full object-none object-center" src="/assets/bg.png" alt="background">
    <div class="col-start-1 row-start-1 flex justify-center items-center w-full h-full min-h-screen z-10">
        <div class="w-125 h-195.25">
            <div class="flex justify-center items-center">
                <TopBar />
            </div>
            <div class="flex justify-center items-center">
                <Logo />
            </div>
            <div class="flex justify-center items-center">
                <div class="relative overflow-hidden rounded-lg">
                    <img class="w-125 h-105 block" src="/assets/person.png" alt="background">
                    <img class="w-125 h-105" src="/assets/person.png" alt="background">
                </div>
            </div>
            <div class="mb-4">
                <NameDescription name={globalState.character.name} age={globalState.character.age} height={globalState.character.height} description={globalState.character.description}/>
            </div>
            <div class="flex justify-center items-center">
                <Buttons />
            </div>
        </div>
    </div>
</div>

<script>
    import Buttons from '../lib/components/buttons.svelte'
    import NameDescription from '../lib/components/name-description.svelte'
    import TopBar from '../lib/components/top-bar.svelte'
    import Logo from '../lib/components/logo.svelte'
    import { globalState } from '$lib/state.svelte'
    import { characters } from '$lib/characters.svelte';
</script>

<div class="grid w-screen place-items-center h-screen overflow-hidden">
    <img class="col-start-1 row-start-1 w-full h-full object-none object-center" src="/assets/bg.gif" alt="background">
    <div class="col-start-1 row-start-1 flex justify-center items-center w-full h-full min-h-screen z-10 font-display">
        <div class="w-125 h-195.25">
            <div class="flex justify-center items-center">
                <TopBar />
            </div>
            <div class="flex justify-center items-center">
                <Logo />
            </div>
            {#if globalState.accepted.length + globalState.denied.length !== characters.length}
                <div class="flex justify-center items-center mb-4">
                    <div class="relative overflow-hidden rounded-lg w-125 h-125">
                        <!-- The sharp base image -->
                        {#if globalState.character?.image}
                            <img class="w-125 h-125 block object-cover" src={"/assets/characters/" + globalState.character?.image} alt="background">
                        {/if}

                        <!-- The Blur Layer (Blurs everything directly underneath it) -->
                        <div
                            class="absolute bottom-0 left-0 right-0 h-2/5 backdrop-blur-[24px] bg-gradient-to-b from-transparent via-black to-black"
                            style="mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%); -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);"
                        ></div>

                        <div class="absolute bottom-0 left-0 right-0 h-2/9 flex flex-col justify-center items-center px-4 text-white">
                            <div class="w-full">
                                <NameDescription name={globalState.character?.name} age={globalState.character?.age} height={globalState.character?.height} description={globalState.character?.description}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <Buttons />
                </div>
            {:else}
                {#if globalState.result === undefined}
                    <div class="h-150 flex flex-col gap-1 justify-center items-center text-white">
                        <p class="text-3xl">Finished!</p>
                        <p class="text-xl">
                            Loading results...
                        </p>
                        <div class="flex justify-center items-center animate-spin">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-circle-icon lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                        </div>
                    </div>
                {:else}
                    <div class="h-150 flex flex-col gap-1 justify-center items-center text-white">
                        <p>Llegaste a tu papasito! This is it!</p>
                        <p>{globalState.result}</p>
                    </div>
                {/if}
            {/if}
        </div>
    </div>
</div>

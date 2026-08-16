<script>
    import Buttons from '../lib/components/buttons.svelte'
    import NameDescription from '../lib/components/name-description.svelte'
    import TopBar from '../lib/components/top-bar.svelte'
    import Logo from '../lib/components/logo.svelte'
    import LogoStartup from '../lib/components/logostartup.svelte'
    import { globalState } from '$lib/state.svelte'
    import { characters } from '$lib/characters.svelte';
    import SvelteMarkdown from 'svelte-marked'
    import confetti from 'canvas-confetti';

    $effect(() => {
        if (globalState.result) {
            confetti({
                particleCount: 180,
                spread: 90,
                origin: { y: 0.6 },
                colors: ['#ff4d6d', '#ff9f1c', '#ffe66d', '#2ec4b6', '#4cc9f0', '#b5179e'],
                scalar: 1.1
            });

            confetti({
                particleCount: 90,
                angle: 60,
                spread: 80,
                origin: { x: 0, y: 0.7 },
                colors: ['#ff4d6d', '#2ec4b6', '#ffe66d']
            });

            confetti({
                particleCount: 90,
                angle: 120,
                spread: 80,
                origin: { x: 1, y: 0.7 },
                colors: ['#4cc9f0', '#b5179e', '#ff9f1c']
            });
        }
    });
</script>

<div class="grid w-screen place-items-center h-screen overflow-hidden">
    <img class="col-start-1 row-start-1 w-full h-full object-none object-center" src="/assets/bg.gif" alt="background">
    <div class="col-start-1 row-start-1 flex justify-center items-center w-full h-full min-h-screen z-10 font-display">
        <div class="w-125 h-205">
            <div class="flex justify-center items-center">
                <TopBar />
            </div>
            {#if globalState.accepted.length == 0 && globalState.denied.length == 0 && globalState.started == false}
                <div class="flex justify-center items-center">
                    <LogoStartup />
                </div>
                <div class="w-125 place-items-center text-white">
                    <p class="text-3xl p-3">¡¡Bienvenidos a Tu Papasito a 5km!!</p>
                    <p class="text-center">Rate everyone as "Caliente" or "Nope" based on your preferences. You are located in Colombia, so your options will be based about Colombian culture.</p>
                    <p class="text-3xl p-3">¡¡START BELOW!!</p>
                </div>
                <div class="flex w-full justify-center items-center">
                    <button
                        title="accept"
                        type="button"
                        onclick={async () => {
                            globalState.started = true;
                        }}
                        class="rounded-full size-50 hover:cursor-pointer flex justify-center items-center"
                    >
                        <img
                            src="/assets/caliente.png"
                            alt="favicon"
                            width="200"
                            height="200"
                            style="display:block; width:200px; height:200px; image-rendering: pixelated; image-rendering: crisp-edges;"
                        />
                    </button>
                </div>
            {:else}
                <div class="flex justify-center items-center">
                    <Logo />
                </div>
                {#if globalState.accepted.length + globalState.denied.length !== characters.length}
                    <div class="flex justify-center items-center mb-4">
                        <div class="relative overflow-hidden rounded-lg w-125 h-125">
                            <!-- The sharp base image -->
                            {#if globalState.character?.image}
                                <img class="w-125 h-125 block object-cover" src="/assets/characters/{globalState.character?.image}" alt="background">
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
                        <div class="h-150 flex flex-col gap-1 items-center text-white">
                            <div class="marquee-wrap">
                                <div class="marquee-track">
                                    <span>¡Felicidades! ¡Ya lo conoces! ¡Súper chévere! ¡Chimba!!!! </span>
                                    <span> ¡Felicidades! ¡Ya lo conoces! ¡Súper chévere! ¡Chimba!!!! </span>
                                </div>
                            </div>

                            <img class="w-50 h-50" src="/assets/winnie-the.gif" alt="background">
                            
                            <p>
                                <SvelteMarkdown source={globalState.result} />
                            </p>
                        </div>
                    {/if}
                {/if}
            {/if}
        </div>
    </div>

    {#if globalState.rejectedSwipe == true}
        <div class="col-start-1 row-start-1 flex justify-center items-center w-full h-full min-h-screen z-11 font-display">
            <img class="col-start-1 row-start-1 w-full h-full object-none object-center" src="/assets/hellnah.gif" alt="background">
        </div>
        {:else if globalState.acceptedSwipe == true }
        <div class="col-start-1 row-start-1 flex justify-center items-center w-full h-full min-h-screen z-12 font-display">
            <img class="col-start-1 row-start-1 object-none object-center" src="/assets/calienteanim.gif" alt="background">
        </div>
    {/if}
</div>

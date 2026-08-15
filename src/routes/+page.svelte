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
            <div class="flex justify-center items-center mb-4">
                <div class="relative overflow-hidden rounded-lg w-125 h-125">
                    <!-- The sharp base image -->
                    <img class="w-125 h-125 block object-cover" src="/assets/characters/{globalState.character.image}" alt="background">
                    
                    <!-- The Blur Layer (Blurs everything directly underneath it) -->
                    <div 
                        class="absolute bottom-0 left-0 right-0 h-2/5 backdrop-blur-[24px] bg-gradient-to-b from-transparent via-black to-black" 
                        style="mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%); -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);"
                    ></div>


                    <div class="absolute bottom-0 left-0 right-0 h-1/6 flex flex-col justify-center items-center px-4 text-white">
                        <div class="w-full">
                            <NameDescription name={globalState.character.name} age={globalState.character.age} height={globalState.character.height} description={globalState.character.description}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <Buttons />
            </div>
        </div>
    </div>
</div>

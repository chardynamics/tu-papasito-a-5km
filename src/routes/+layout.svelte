<script lang="ts">
    export const prerender = false;
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>Tu Papasito a 5km</title>
</svelte:head>
{@render children()}

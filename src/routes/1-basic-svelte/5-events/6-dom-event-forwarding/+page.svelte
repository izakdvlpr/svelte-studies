<script lang="ts">
	import { onMount } from 'svelte';

	import Button from './Button.svelte';
	import music from './mc-cidinho-e-doca-cheiro-de-pneu-queimado.mp3';

	let audio: HTMLAudioElement;

	onMount(() => {
		audio = new Audio(music);
	});

	function handleClick() {
		audio.load();
		audio.play();
	}
</script>

<Button on:click={handleClick} />

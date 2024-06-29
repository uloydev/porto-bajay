<script lang="ts">
	import * as Icon from 'svelte-boxicons';
	import Logo from '$lib/images/components/svg-icon/Logo.svelte';
	import song from '$lib/audio/song.mp3';
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let show = false;
	export let path = '';

    let navbarMode: Writable<string> = getContext('navbarMode');

    $: textColor = $navbarMode === 'dark' ? 'text-black' : 'text-white';
    $: borderColor = $navbarMode === 'dark' ? 'border-black' : 'border-white';
    $: logoColor = $navbarMode === 'dark' ? 'fill-black' : 'fill-white';
    $: iconColor = $navbarMode === 'dark' ? 'black' : 'white';


	let songPlaying = true;

	const onLogoHover = () => {
		const audioControl = document.getElementById('audioControl') as HTMLDivElement;
		audioControl.classList.remove('translate-x-[-100%]');
	};

	const onLogoLeave = () => {
		const audioControl = document.getElementById('audioControl') as HTMLDivElement;
		audioControl.classList.add('translate-x-[-100%]');
	};

	const toggleSong = () => {
		const audio = document.getElementById('audio') as HTMLAudioElement;
		if (songPlaying) {
			audio.pause();
			songPlaying = false;
		} else {
			audio.play();
			songPlaying = true;
		}
	};

    onMount(() => {
        setInterval(() => {
            console.log('navbarMode from navbar: ', $navbarMode);
        }, 3000);
    });
</script>

<!-- navbar -->
<nav
	class="w-full h-[75px] fixed top-0 left-0 flex justify-between items-center px-20 transition-all z-50"
	class:hidden={!show}
>
	<audio id="audio" src={song} class="hidden" autoplay></audio>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="cursor-pointer flex items-center tracking-wider" on:mouseleave={onLogoLeave}>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="inline-block" on:mouseenter={onLogoHover}>
			<a href="/">
				<Logo
					className="transition-all duration-500 w-[50px] h-[50px] {logoColor} hover:fill-thejak hover:-rotate-180"
				/>
			</a>
		</div>
		<div class="overflow-hidden ml-4">
			<button
				id="audioControl"
				class="{textColor} flex items-center transition-all duration-500 translate-x-[-100%]"
				on:click={toggleSong}
			>
				<span class:hidden={!songPlaying}>
					<Icon.BxVolumeFull color={iconColor} size="24" />
				</span>
				<span class:hidden={songPlaying}>
					<Icon.BxVolumeMute name="volume-mute" color={iconColor} size="24" />
				</span>
				<div class="inline-block ml-2 text-start">
					<p class="font-normal text-lg -mb-2">BOB MARLEY</p>
					<p>THREE LITLE BIRDS</p>
				</div>
			</button>
		</div>
	</div>

	<!-- nav links -->
	<div class="font-familjen">
		<ul class="flex items-center font-normal tracking-wider gap-8 uppercase {textColor}">
			<li
				class="relative cursor-pointer hover:border-b-2 hover: {borderColor}"
				class:active={path == '/resume'}
			>
				<a href="/resume">Resume</a>
			</li>
			<li
				class="cursor-pointer hover:border-b-2 hover: {borderColor}"
				class:active={path == '/works'}
			>
				Works
			</li>
			<li
				class="cursor-pointer rounded-full px-4 py-1 {borderColor} border flex items-center gap-2 transition-colors duration-500 hover:bg-thejak"
			>
				CONTACT ME
				<svg
					class="{logoColor} inline w-3 h-3"
					viewBox="0 0 13 13"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect x="11.3452" y="1" width="1" height="10.8896" stroke-width="0.5" />
					<rect
						x="11.8896"
						y="1"
						width="1"
						height="10.8896"
						transform="rotate(90 11.8896 1)"
						stroke-width="0.5"
					/>
					<rect
						x="11.395"
						y="1"
						width="1"
						height="14.701"
						transform="rotate(45 11.395 1)"
						stroke-width="0.5"
					/>
				</svg>
			</li>
		</ul>
	</div>
</nav>

<style>
	.active {
		@apply text-thejak;
	}

	.active:hover {
		@apply border-none text-thejak;
	}

	.active::after {
		@apply block w-1/2 h-1 bg-thejak absolute left-1/2 -translate-x-[50%];
		content: '';
	}
</style>

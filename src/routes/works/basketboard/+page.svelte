<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	// images
	import bg1 from '$lib/images/basketboard/bg-1.png';
	import bg2 from '$lib/images/basketboard/bg-2.png';
	import bg3 from '$lib/images/basketboard/bg-3.png';
	import bg4 from '$lib/images/basketboard/bg-4.png';
	import bg5 from '$lib/images/basketboard/bg-5.png';
	import posts from '$lib/images/basketboard/posts.png';
	import longPosts from '$lib/images/basketboard/long-posts.png';
	import phone1 from '$lib/images/basketboard/phone-1.png';
	import phone2 from '$lib/images/basketboard/phone-2.png';
	import phone3 from '$lib/images/basketboard/phone-3.png';
	import phone4 from '$lib/images/basketboard/phone-4.png';
	import phone5 from '$lib/images/basketboard/phone-5.png';

	let phoneScreens = [phone1, phone2, phone3, phone4, phone5];
	let currentPhoneScreen = 0;

	let navbarMode: Writable<string> = getContext('navbarMode');

	onMount(() => {
		navbarMode.set('dark');
		setInterval(() => {
			currentPhoneScreen =
				currentPhoneScreen === phoneScreens.length - 1 ? 0 : currentPhoneScreen + 1;
		}, 1000);
	});

	const setNavbarMode = (mode: string) => {
		navbarMode.set(mode);
	};
</script>

<div class="overflow-hidden">
	<div class="flex overflow-x-scroll overflow-y-hidden h-screen snap-x snap-mandatory">
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('dark')}
		>
			<img class="object-cover w-full h-full" src={bg1} alt="basketboard bg" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="flex-shrink-0 snap-start w-screen h-screen bg-black text-white"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<div class="flex flex-col h-full justify-between pt-24 px-20 pb-16">
				<div class="flex justify-between items-end">
					<p class="text-2xl leading-none">
						2023 - present<br />
						graphic designer
					</p>
					<p class="text-9xl">004</p>
				</div>
				<p class="text-[150px] leading-none">
					social media design<br />
					event key visual
				</p>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-fill w-full h-full" src={bg2} alt="basketboard bg" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start h-screen max-w-[100vw] bg-transparent"
			on:mouseenter={() => setNavbarMode('dark')}
		>
			<img class=" absolute object-cover w-full h-full -z-10" src={bg3} alt="basketboard bg 2" />
			<div class="grid-cols-9 grid gap-2 h-full py-20 relative">
				<div class="col-span-3 bg-transparent h-full w-full pt-4">
					{#each phoneScreens as phone, i}
						<img
							src={phone}
							alt="phone screen {i}"
							class="h-[850px] object-cover"
							class:hidden={i != currentPhoneScreen}
						/>
					{/each}
				</div>
				<div class="col-span-6 h-full pt-10 overflow-x-scroll -ml-20">
					<div class="h-full w-[1750px]">
						<img src={longPosts} alt="hoops dept post feeds" class=" object-cover h-full" />
					</div>
				</div>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-cover w-full h-full" src={bg4} alt="basketboard bg" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-cover w-full h-full" src={bg5} alt="basketboard bg" />
			<img
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 opacity-100"
				src={posts}
				alt="logo basketboard"
			/>
		</div>
	</div>

	<!-- footer -->
	<div
		class="absolute z-50 bottom-8 text-center uppercase w-full font-familjen {$navbarMode == 'light'
			? 'text-white'
			: 'text-black'}"
	>
		this user interface also designed by <strong>ME.</strong>
		<span class="absolute right-20">&copy;2024</span>
	</div>
</div>

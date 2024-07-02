<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	// images
	import bg1 from '$lib/images/other/bg-1.png';
	import bg2 from '$lib/images/other/bg-2.png';
	import bg3 from '$lib/images/other/bg-3.png';
	import bg4 from '$lib/images/other/bg-4.png';
	import bg5 from '$lib/images/other/bg-5.png';
	import bg6 from '$lib/images/other/bg-6.png';
	import bg7 from '$lib/images/other/bg-7.png';
	import tokopedia from '$lib/images/other/tokopedia.png';
	import phoneTokopedia from '$lib/images/other/phone-tokopedia.png';
	import SlideNumber from '$lib/components/SlideNumber.svelte';

	let navbarMode: Writable<string> = getContext('navbarMode');

	onMount(() => {
		navbarMode.set('light');
	});

	const setNavbarMode = (mode: string) => {
		navbarMode.set(mode);
	};
</script>

<div class="overflow-hidden">
	<div class="flex overflow-x-scroll overflow-y-hidden h-screen snap-x snap-mandatory">
		<SlideNumber 
			navbar="light" 
			number="005" 
			workDate="2022 - present<br/>graphic designer"
			workRole="poster<br/>design"
			containerClass="bg-black text-white"
			/>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-cover w-full h-full" src={bg1} alt="others bg" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-fill w-full h-full" src={bg2} alt="others bg" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-cover w-full h-full" src={bg3} alt="others bg" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-fill w-full h-full" src={bg4} alt="others bg" />
		</div>
		<SlideNumber 
			navbar="dark" 
			number="005" 
			workDate="2022 - present<br/>graphic designer"
			workRole="visual<br/>booth design"
			containerClass="bg-white"
			/>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('dark')}
		>
			<img class="object-fill w-full h-full" src={bg5} alt="others bg" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-fill w-full h-full" src={bg6} alt="others bg" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-fill w-full h-full" src={bg7} alt="others bg" />
		</div>
		<SlideNumber 
			navbar="light" 
			number="005" 
			workDate="2022 - present<br/>talent"
			workRole="talent"
			containerClass="bg--hite"
			/>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-[#42B549]"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2"
				src={tokopedia}
				alt="tokopedia logo"
			/>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-white"
			on:mouseenter={() => setNavbarMode('dark')}
		>
			<img
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5"
				src={phoneTokopedia}
				alt="tokopedia images"
			/>
		</div>
	</div>
	<!-- #42B549 -->

	<!-- footer -->
	<div
		class="absolute z-50 bottom-8 text-center uppercase w-full font-familjen text-[1vw] {$navbarMode == 'light'
			? 'text-white'
			: 'text-black'}"
	>
		this user interface also designed by <strong>ME.</strong>
		<span class="absolute right-20">&copy;2024</span>
	</div>
</div>

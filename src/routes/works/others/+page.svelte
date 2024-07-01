<script lang="ts">
	import { getContext, onMount, onDestroy } from 'svelte';
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

	let navbarMode: Writable<string> = getContext('navbarMode');

	onMount(() => {
		navbarMode.set('light');
	});

	const setNavbarMode = (mode: string) => {
		navbarMode.set(mode);
	};
</script>

<div class="overflow-hidden">
	<div
		class="flex overflow-x-scroll overflow-y-hidden h-screen snap-x snap-mandatory"
		id="hoppsDept"
	>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="flex-shrink-0 snap-start w-screen h-screen bg-black text-white"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<div class="flex flex-col h-full justify-between pt-24 px-20 pb-16">
				<div class="flex justify-between items-end">
					<p class="text-2xl leading-none">
						2022 - present<br />
						graphic designer
					</p>
					<p class="text-9xl">005</p>
				</div>
				<p class="text-[150px] leading-none">
					poster<br />
					design
				</p>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-cover w-full h-full" src={bg1} alt="hopps dept bg" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-cover w-full h-full" src={bg2} alt="hopps dept bg" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-cover w-full h-full" src={bg3} alt="hopps dept bg" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-cover w-full h-full" src={bg4} alt="hopps dept bg" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="flex-shrink-0 snap-start w-screen h-screen bg-white"
			on:mouseenter={() => setNavbarMode('dark')}
		>
			<div class="flex flex-col h-full justify-between pt-24 px-20 pb-16">
				<div class="flex justify-between items-end">
					<p class="text-2xl leading-none">
						2022 - present<br />
						graphic designer
					</p>
					<p class="text-9xl">005</p>
				</div>
				<p class="text-[150px] leading-none">
					visual<br />
					booth design
				</p>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('dark')}
		>
			<img class="object-cover w-full h-full" src={bg5} alt="hopps dept bg" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-cover w-full h-full" src={bg6} alt="hopps dept bg" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-cover w-full h-full" src={bg7} alt="hopps dept bg" />
		</div>

		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="flex-shrink-0 snap-start w-screen h-screen bg-white"
			on:mouseenter={() => setNavbarMode('dark')}
		>
			<div class="flex flex-col h-full justify-between pt-24 px-20 pb-16">
				<div class="flex justify-between items-end">
					<p class="text-2xl leading-none">
						2022 - present<br />
						talent
					</p>
					<p class="text-9xl">005</p>
				</div>
				<p class="text-[150px] leading-none">talent</p>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-[#42B549]"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2"
				src={tokopedia}
				alt="logo hopps dept"
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
            alt="logo hopps dept"
        />
    </div>
	</div>
	<!-- #42B549 -->

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

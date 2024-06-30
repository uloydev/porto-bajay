<script lang="ts">
	import { getContext, onMount, onDestroy } from 'svelte';
	import type { Writable } from 'svelte/store';
	import logoHoppsDept from '$lib/images/hopps-dept/logo.png';
	import bgHoppsDept from '$lib/images/hopps-dept/bg.png';
	import posterHoppsDept from '$lib/images/hopps-dept/poster.png';
	import bg2HoppsDept from '$lib/images/hopps-dept/bg-2.png';
	import phone1 from '$lib/images/hopps-dept/phone1.png';
	import phone2 from '$lib/images/hopps-dept/phone2.png';
	import phone3 from '$lib/images/hopps-dept/phone3.png';
	import posterFeeds from '$lib/images/hopps-dept/poster-feeds.png';

	let navbarMode: Writable<string> = getContext('navbarMode');
	let phoneScreens = [phone1, phone2, phone3];
	let currentPhoneScreen = 0;
    let intervals: number[] = [];

	onMount(() => {
		navbarMode.set('light');
        intervals.push(setInterval(() => {
            currentPhoneScreen =
                currentPhoneScreen === phoneScreens.length - 1 ? 0 : currentPhoneScreen + 1;
        }, 1000));
	});

	const setNavbarMode = (mode: string) => {
		navbarMode.set(mode);
	};

    onDestroy(() => {
        intervals.forEach(interval => clearInterval(interval));
    });
</script>

<div class="overflow-hidden">
	<div
		class="flex overflow-x-scroll overflow-y-hidden h-screen snap-x snap-mandatory"
		id="hoppsDept"
	>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-cover w-full h-full" src={bgHoppsDept} alt="hopps dept bg" />
			<div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
			<img
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] aspect-square opacity-100"
				src={logoHoppsDept}
				alt="logo hopps dept"
			/>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="flex-shrink-0 snap-start w-screen h-screen bg-[#471973] text-white"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<div class="flex flex-col h-full justify-between pt-24 px-20 pb-16">
				<div class="flex justify-between items-end">
					<p class="text-2xl leading-none">
						2022 - present<br />
						graphic designer
					</p>
					<p class="text-9xl">002</p>
				</div>
				<p class="text-[150px] leading-none">
					social media<br />
					design
				</p>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="w-full h-full object-fill aspect-video" src={posterHoppsDept} alt="hopps dept bg" />
            <p class="absolute bottom-20 leading-none text-right w-full px-20 text-3xl text-white">
                hoops<br>department
            </p>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start h-screen max-w-[100vw] bg-transparent"
			on:mouseenter={() => setNavbarMode('dark')}
		>
            <p class="absolute right-0 top-1/2 -translate-y-1/2 leading-none text-3xl rotate-90">
            designed by<br>
            aji fandhi fatahillah
            </p>
			<img
				class=" absolute object-cover w-full h-full -z-10"
				src={bg2HoppsDept}
				alt="hopps dept bg 2"
			/>
			<div class="grid-cols-9 grid gap-2 h-full py-16 relative pl-20">
				<div class="col-start-1 col-span-6 h-full pt-10 overflow-x-scroll">
					<div class="h-full w-screen">
						<img src={posterFeeds} alt="hoops dept post feeds" class=" object-cover w-full" />
					</div>
				</div>
				<div class="col-start-7 col-span-3 bg-transparent h-full w-full">
                    {#each phoneScreens as phone, i}
					    <img src={phone} alt="phone screen {i}" class="h-[870px] object-cover -ml-10 pt-4" class:hidden={i != currentPhoneScreen} />
                    {/each}
				</div>
			</div>
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

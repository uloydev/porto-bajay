<script lang="ts">
	import sliderHome1 from '$lib/images/slider-home-1.png';
	import sliderHome2 from '$lib/images/slider-home-2.png';
	import sliderHome3 from '$lib/images/slider-home-3.png';
	import sliderHome4 from '$lib/images/slider-home-4.png';
	import sliderHome5 from '$lib/images/slider-home-5.png';
	import sliderHome6 from '$lib/images/slider-home-6.png';

	import moment from 'moment';

	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	let navbarMode: Writable<string> = getContext('navbarMode');

	let sliderItems = [sliderHome1, sliderHome2, sliderHome3, sliderHome4, sliderHome5, sliderHome6];

	let showSliderIndex = 0;

	const today = moment();

	let todayDate = today.format('dddd, DD MMMM YYYY');
	let now = today.format('HH:mm:ss');

	onMount(() => {
		navbarMode.set('light');
		setInterval(() => {
			showSliderIndex = showSliderIndex === sliderItems.length - 1 ? 0 : showSliderIndex + 1;
		}, 3000);

		setInterval(() => {
			let currentTime = moment();
			todayDate = currentTime.format('dddd, DD MMMM YYYY');
			now = currentTime.format('HH:mm:ss');
		}, 1000);
	});
</script>

<!-- slider -->
<div class="h-full w-full overflow-hidden relative">
	<!-- overlay -->
	{#each sliderItems as sliderItem, i}
		<img
			src={sliderItem}
			class="absolute top-0 left-0 object-cover h-full w-full transition-opacity duration-1000"
			class:opacity-0={i !== showSliderIndex}
			alt="slider-home-{i}"
		/>
	{/each}
	<div class="absolute h-full w-full bg-black opacity-35"></div>
</div>

<div class="absolute h-full w-full top-0 left-0 z-10 overflow-hidden">
	<h1 class="text-[30vw] text-center text-white -mt-20 max-w-full">portfolio</h1>
	<div class="flex justify-center -mt-32">
		<a
			href="/works"
			class="uppercase border border-white rounded-full relative text-white px-8 py-2 font-familjen text-[1vw] flex items-center hover:bg-thejak transition-colors duration-500"
		>
			Let's start
			<svg
				class="fill-white inline w-5 h-5 ml-4"
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
		</a>
	</div>
	<div
		class="grid grid-cols-3 justify-between font-familjen uppercase text-white px-20 font-normal text-[1vw] mt-36"
	>
		<div>
			<p>my name is <strong>Aji Fandhi Fatahillah</strong></p>
			<p class="-mt-2">And it would be amazing if we could</p>
			<p class="-mt-2">unite our minds and collaborate.</p>
		</div>
		<div class="text-center">
			<p>{todayDate}</p>
			<p class="-mt-2">{now}</p>
		</div>
		<div class="flex justify-end">
			<div class="max-w-fit">
				<p>This Website Design</p>
				<p class="-mt-2">also Designed</p>
				<p class="-mt-2">By <strong>Me</strong></p>
			</div>
		</div>
	</div>
</div>

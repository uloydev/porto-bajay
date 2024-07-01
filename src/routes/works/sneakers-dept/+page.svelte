<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import sneakersDept1 from '$lib/images/sneakers-dept-1.png';
	import logoSneakersDept from '$lib/images/logo-sneakers-dept.png';
	import phoneSlider1 from '$lib/images/phone-slider-1.png';
	import phoneSlider2 from '$lib/images/phone-slider-2.png';
	import phoneSlider3 from '$lib/images/phone-slider-3.png';

	// images
	import post1 from '$lib/images/ig-posts/post-1.png';
	import post2 from '$lib/images/ig-posts/post-2.png';
	import post3 from '$lib/images/ig-posts/post-3.png';
	import post4 from '$lib/images/ig-posts/post-4.png';
	import postRaw1 from '$lib/images/ig-posts/post-raw-1.png';
	import postRaw2 from '$lib/images/ig-posts/post-raw-2.png';
	import postRaw3 from '$lib/images/ig-posts/post-raw-3.png';
	import postRaw4 from '$lib/images/ig-posts/post-raw-4.png';
	import postRaw5 from '$lib/images/ig-posts/post-raw-5.png';
	import postRaw6 from '$lib/images/ig-posts/post-raw-6.png';
	import postRaw7 from '$lib/images/ig-posts/post-raw-7.png';
	import postRaw8 from '$lib/images/ig-posts/post-raw-8.png';
	import postRaw9 from '$lib/images/ig-posts/post-raw-9.png';
	import postRaw10 from '$lib/images/ig-posts/post-raw-10.png';
	import posterSneakersDept from '$lib/images/poster-sneakers-dept.png';

	let posts = [post1, post2, post3, post4];
	let postsRaw = [
		postRaw1,
		postRaw2,
		postRaw3,
		postRaw4,
		postRaw5,
		postRaw6,
		postRaw7,
		postRaw8,
		postRaw9,
		postRaw10
	];
	let currentPostSlider = 0;

	let phoneSlider = [phoneSlider1, phoneSlider2, phoneSlider3];
	let currentPhoneSlider = 0;

	let navbarMode: Writable<string> = getContext('navbarMode');

	onMount(() => {
		navbarMode.set('light');
		setInterval(() => {
			currentPhoneSlider =
				currentPhoneSlider === phoneSlider.length - 1 ? 0 : currentPhoneSlider + 1;
			currentPostSlider = currentPostSlider === posts.length - 1 ? 0 : currentPostSlider + 1;

			console.log(currentPostSlider);
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
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-cover w-full h-full" src={sneakersDept1} alt="sneakers dept bg" />
			<div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
			<img
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[250px] opacity-100"
				src={logoSneakersDept}
				alt="logo sneakers dept"
			/>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="flex-shrink-0 snap-start w-screen h-screen bg-thejak"
			on:mouseenter={() => setNavbarMode('dark')}
		>
			<div class="flex flex-col h-full justify-between pt-24 px-20 pb-16">
				<div class="flex justify-between items-end">
					<p class="text-2xl leading-none">
						2021 - present<br />
						graphic designer
					</p>
					<p class="text-9xl">001</p>
				</div>
				<p class="text-[150px] leading-none">
					digital imaging<br />
					social media design
				</p>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-[#d9d9d9]"
			on:mouseenter={() => setNavbarMode('dark')}
		>
			<div class="flex flex-col h-full justify-center pt-24 px-20 pb-16">
				<p class="text-[350px] text-center">sneakers dept</p>
			</div>
			{#each phoneSlider as phone, index}
				<img
					class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-3/4 opacity-0"
					class:opacity-100={index == currentPhoneSlider}
					src={phone}
					alt="phone slider {index}"
				/>
			{/each}

			<div class="flex justify-between w-full px-20 absolute bottom-20">
				<p class="text-6xl">2021</p>
				<p class="leading-none text-3xl">
					biggest sneakers<br />
					seller in tokopedia
				</p>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="flex-shrink-0 snap-start w-screen h-screen bg-[#202020]"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<div class="w-full h-full px-16 pt-20 grid grid-cols-10">
				<div class="relative col-span-3 h-full pl-8 font-familjen text-white overflow-visible">
					<h1 class="text-2xl font-bold">Sneakersdept - 2021</h1>
					<p class="leading-none">
						it is currently the largest sneakers retailer on Tokopedia,<br />
						with striking visuals and promotions that set it apart<br />
						from other sneakers store.
					</p>
					<div class="absolute block w-[150%] -left-20 -bottom-40 z-20">
						{#each posts as post, i}
							<img
								class="object-cover"
								class:hidden={i != currentPostSlider}
								src={post}
								alt="post ig {i}"
							/>
						{/each}
					</div>
				</div>
				<div class="col-span-7 h-screen p-4 relative">
					<div
						class="absolute left-0 w-full h-40 top-0 bg-gradient-to-b from-[#202020] to-transparent"
					></div>
					<div
						class="absolute left-0 w-full h-40 bottom-20 bg-gradient-to-t from-[#202020] to-transparent"
					></div>
					<div class="w-full h-full grid grid-cols-2 gap-4 overflow-y-auto">
						{#each postsRaw as post, i}
							<img class="object-cover aspect-square" src={post} alt="post ig raw {i}" />
						{/each}
					</div>
				</div>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="flex-shrink-0 snap-end h-screen relative"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<div
				class="flex justify-between w-screen px-20 sticky top-[calc(100vh-8rem)] text-white left-0 h-0"
			>
				<p class="text-6xl">2021</p>
				<p class="leading-none text-3xl">
					biggest sneakers<br />
					seller in tokopedia
				</p>
			</div>
			<div class="h-screen overflow-x-auto">
				<img class="h-full w-full" src={posterSneakersDept} alt="poster-sneakers-dept" />
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

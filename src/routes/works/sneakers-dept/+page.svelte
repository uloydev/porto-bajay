<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import sneakersDept1 from '$lib/images/sneakers-dept/sneakers-dept-1.png';
	import logoSneakersDept from '$lib/images/sneakers-dept/logo-sneakers-dept.png';
	import phoneSlider1 from '$lib/images/sneakers-dept/phone-slider-1.png';
	import phoneSlider2 from '$lib/images/sneakers-dept/phone-slider-2.png';
	import phoneSlider3 from '$lib/images/sneakers-dept/phone-slider-3.png';

	// images
	import post1 from '$lib/images/sneakers-dept/ig-posts/post-1.png';
	import post2 from '$lib/images/sneakers-dept/ig-posts/post-2.png';
	import post3 from '$lib/images/sneakers-dept/ig-posts/post-3.png';
	import post4 from '$lib/images/sneakers-dept/ig-posts/post-4.png';
	import postRaw1 from '$lib/images/sneakers-dept/ig-posts/post-raw-1.png';
	import postRaw2 from '$lib/images/sneakers-dept/ig-posts/post-raw-2.png';
	import postRaw3 from '$lib/images/sneakers-dept/ig-posts/post-raw-3.png';
	import postRaw4 from '$lib/images/sneakers-dept/ig-posts/post-raw-4.png';
	import postRaw5 from '$lib/images/sneakers-dept/ig-posts/post-raw-5.png';
	import postRaw6 from '$lib/images/sneakers-dept/ig-posts/post-raw-6.png';
	import postRaw7 from '$lib/images/sneakers-dept/ig-posts/post-raw-7.png';
	import postRaw8 from '$lib/images/sneakers-dept/ig-posts/post-raw-8.png';
	import postRaw9 from '$lib/images/sneakers-dept/ig-posts/post-raw-9.png';
	import postRaw10 from '$lib/images/sneakers-dept/ig-posts/post-raw-10.png';
	import posterSneakersDept from '$lib/images/sneakers-dept/poster-sneakers-dept.png';
	import SlideNumber from '$lib/components/SlideNumber.svelte';
	import { DragScrollHandler, HorizontalScrollHandler } from '$lib/utils/scroll';

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
	let scrollContainer: HTMLElement;
	let horizontalScroll: HorizontalScrollHandler;
	let postScrollContainer: HTMLElement;
	let postDragScroll: DragScrollHandler;
	let posterScrollContainer: HTMLElement;
	let posterDragScroll: DragScrollHandler;

	onMount(() => {
		navbarMode.set('light');
		setInterval(() => {
			currentPhoneSlider =
				currentPhoneSlider === phoneSlider.length - 1 ? 0 : currentPhoneSlider + 1;
			currentPostSlider = currentPostSlider === posts.length - 1 ? 0 : currentPostSlider + 1;
		}, 1000);
		horizontalScroll = new HorizontalScrollHandler(scrollContainer, 400);
		postDragScroll = new DragScrollHandler(postScrollContainer);
		posterDragScroll = new DragScrollHandler(scrollContainer);
	});

	const setNavbarMode = (mode: string) => {
		navbarMode.set(mode);
	};
</script>

<div class="overflow-hidden">
	<div bind:this={scrollContainer} class="flex overflow-x-scroll overflow-y-hidden h-screen" on:mousewheel={horizontalScroll.handleScroll}>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 w-screen h-screen bg-transparent  overflow-y-hidden"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-cover w-full h-full" src={sneakersDept1} alt="sneakers dept bg" />
			<div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
			<img
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[15vw] opacity-100"
				src={logoSneakersDept}
				alt="logo sneakers dept"
			/>
		</div>
		<SlideNumber 
			navbar="dark" 
			number="001" 
			workDate="2021 - present<br/>graphic designer"
			workRole="digital imaging<br/>social media design"
			containerClass="bg-thejak  overflow-y-hidden"
			/>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 w-screen h-screen bg-[#d9d9d9]  overflow-y-hidden"
			on:mouseenter={() => setNavbarMode('dark')}
		>
			<div class="flex flex-col h-full justify-center pt-[6vh] px-[5vw] pb-16">
				<p class="text-[18vw] text-center">sneakers dept</p>
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
			class="flex-shrink-0 w-screen h-screen bg-[#202020]  overflow-y-hidden"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<div class="w-full h-full px-16 pt-20 grid grid-cols-10">
				<div class="relative col-span-3 h-full pl-8 font-familjen text-white overflow-visible">
					<h1 class="text-[1.5vw] font-bold">Sneakersdept - 2021</h1>
					<p class="leading-none text-[1vw]">
						it is currently the largest sneakers retailer on Tokopedia,<br />
						with striking visuals and promotions that set it apart<br />
						from other sneakers store.
					</p>
					<div class="absolute block w-[150%] -left-20 -bottom-[10vh] z-20">
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
					<div class="w-full h-full grid grid-cols-2 gap-4 overflow-y-scroll" bind:this={postScrollContainer} on:mousedown={postDragScroll.dragMouseDown} on:mouseup={postDragScroll.dragMouseUp} on:mousemove={postDragScroll.dragMouseScroll} on:mousewheel={(e) => e.preventDefault()}>
						{#each postsRaw as post, i}
							{#if i == 0}
							<img class="object-cover aspect-square" src={post} alt="post ig raw {i}" />
							{:else if i == postsRaw.length - 1}
							<img class="object-cover aspect-square" src={post} alt="post ig raw {i}" />
							{:else}
							<img class="object-cover aspect-square" src={post} alt="post ig raw {i}" />
							{/if}
							
						{/each}
					</div>
				</div>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="flex-shrink-0 h-screen relative  overflow-y-hidden"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<div
				class="flex justify-between w-screen px-20 sticky top-[calc(100vh-8rem)] text-white left-0 h-0"
			>
				<p class="text-[3.75vw]">2021</p>
				<p class="leading-none text-[1.875vw]">
					biggest sneakers<br />
					seller in tokopedia
				</p>
			</div>
			<div id="posterScrollContainer" class="h-screen overflow-x-auto" on:mousedown={posterDragScroll.dragMouseDown} on:mouseup={posterDragScroll.dragMouseUp} on:mousemove={posterDragScroll.dragMouseScroll}>
				<img class="h-full w-full" src={posterSneakersDept} alt="poster-sneakers-dept"/>
			</div>
		</div>
	</div>

	<!-- footer -->
	<div
		class="absolute z-50 bottom-8 text-center uppercase w-full font-familjen text-[1vw]  {$navbarMode == 'light'
			? 'text-white'
			: 'text-black'}"
	>
		this user interface also designed by <strong>ME.</strong>
		<span class="absolute right-20">&copy;2024</span>
	</div>
</div>

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
	import SlideNumber from '$lib/components/SlideNumber.svelte';
	import { DragScrollHandler, HorizontalScrollHandler } from '$lib/utils/scroll';


	let phoneScreens = [phone1, phone2, phone3, phone4];
	let currentPhoneScreen = 0;
	let scrollContainer: HTMLElement;
	let horizontalScroll: HorizontalScrollHandler;
	let postScrollContainer: HTMLElement;
	let postDragScroll: DragScrollHandler;

	let navbarMode: Writable<string> = getContext('navbarMode');

	onMount(() => {
		navbarMode.set('dark');
		setInterval(() => {
			currentPhoneScreen =
				currentPhoneScreen === phoneScreens.length - 1 ? 0 : currentPhoneScreen + 1;
		}, 1000);
		horizontalScroll = new HorizontalScrollHandler(scrollContainer, 400);
		postDragScroll = new DragScrollHandler(postScrollContainer);
	});

	const setNavbarMode = (mode: string) => {
		navbarMode.set(mode);
	};
</script>

<div class="overflow-hidden">
	<div class="flex overflow-x-scroll overflow-y-hidden h-screen" bind:this={scrollContainer} on:mousewheel={horizontalScroll.handleScroll}>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('dark')}
		>
			<img class="object-cover w-full h-full" src={bg1} alt="basketboard bg" />
		</div>
		<SlideNumber 
			navbar="light" 
			number="004" 
			workDate="2023 - present<br/>graphic designer"
			workRole="social media design<br/>event key visual"
			containerClass="bg-black text-white"
			/>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-fill w-full h-full" src={bg2} alt="basketboard bg" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 h-screen max-w-[100vw] bg-transparent"
			on:mouseenter={() => setNavbarMode('dark')}
		>
			<img class=" absolute object-cover w-full h-full -z-10" src={bg3} alt="basketboard bg 2" />
			<div class="grid-cols-9 grid gap-2 h-full py-[5vw]">
				<div class="col-span-3 bg-transparent h-full w-full pt-[1vh] -mr-[5vw]">
					{#each phoneScreens as phone, i}
						<img
							src={phone}
							alt="phone screen {i}"
							class="h-[90%] object-cover"
							class:hidden={i != currentPhoneScreen}
						/>
					{/each}
				</div>
				<div 
					class="col-span-6 h-full overflow-x-scroll"
					bind:this={postScrollContainer}
					on:mousedown={postDragScroll.dragMouseDown}
					on:mouseup={postDragScroll.dragMouseUp}
					on:mousemove={postDragScroll.dragMouseScroll}
				>
					<div class="h-full w-[100vw]">
						<img src={longPosts} alt="hoops dept post feeds" class=" object-cover h-[90%]" />
					</div>
				</div>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 w-screen h-screen bg-transparent"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img class="object-cover w-full h-full" src={bg4} alt="basketboard bg" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 w-screen h-screen bg-transparent"
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
		class="absolute z-50 bottom-8 text-center uppercase w-full font-familjen text-[1vw] {$navbarMode == 'light'
			? 'text-white'
			: 'text-black'}"
	>
		this user interface also designed by <strong>ME.</strong>
		<span class="absolute right-20">&copy;2024</span>
	</div>
</div>

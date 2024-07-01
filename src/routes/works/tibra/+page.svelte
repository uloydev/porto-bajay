<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	// images
	import logo from '$lib/images/tibra/logo.png';
    import posts from '$lib/images/tibra/posts.png';
    import bgTexture from '$lib/images/tibra/bg-texture.png';
    import longPosts from '$lib/images/tibra/long-posts.png';
    import phone1 from '$lib/images/tibra/phone-1.png';
    import phone2 from '$lib/images/tibra/phone-2.png';
    import phone3 from '$lib/images/tibra/phone-3.png';
    import phone4 from '$lib/images/tibra/phone-4.png';

    let phoneScreens = [phone1, phone2, phone3, phone4];
    let currentPhoneScreen = 0;

	let navbarMode: Writable<string> = getContext('navbarMode');

	onMount(() => {
		navbarMode.set('light');
        setInterval(() => {
            currentPhoneScreen = currentPhoneScreen === phoneScreens.length - 1 ? 0 : currentPhoneScreen + 1;
        }, 1000);
	});

	const setNavbarMode = (mode: string) => {
		navbarMode.set(mode);
	};
</script>

<div class="overflow-hidden">
	<div
		class="flex overflow-x-scroll overflow-y-hidden h-screen snap-x snap-mandatory"
	>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-[#000aff]"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<img
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[250px] opacity-100"
				src={logo}
				alt="logo tibra"
			/>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative flex-shrink-0 snap-start w-screen h-screen bg-thejak text-white"
			on:mouseenter={() => setNavbarMode('light')}
		>
			<div class="flex flex-col h-full justify-between pt-24 px-20 pb-16">
				<div class="flex justify-between items-end">
					<p class="text-2xl leading-none">
						2022 - present<br />
						graphic designer
					</p>
					<p class="text-9xl">003</p>
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
			on:mouseenter={() => setNavbarMode('dark')}
		>
			<img class="object-cover w-full h-full" src={posts} alt="tibra bg" />
		</div>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
        class="relative flex-shrink-0 snap-start h-screen max-w-[100vw] bg-transparent"
        on:mouseenter={() => setNavbarMode('light')}
    >
        <img
            class=" absolute object-cover w-full h-full -z-10"
            src={bgTexture}
            alt="hopps dept bg 2"
        />
        <div class="h-full pt-20 relative">
            <div class="h-full pt-10 overflow-x-scroll">
                <div class="h-full w-[2500px]">
                    <img src={longPosts} alt="tibra post feeds" class=" object-cover h-full" />
                </div>
            </div>
            <div class="absolute left-1/2 bottom-0 -translate-x-1/2 bg-transparent h-[90%]">
                {#each phoneScreens as phone, i}
                    <img src={phone} alt="phone screen {i}" class="h-full object-cover mt-auto" class:hidden={i != currentPhoneScreen} />
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

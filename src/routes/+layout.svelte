<script>
	import '../app.css';

	import Logo from '$lib/components/Logo.svelte';
	import { onMount, setContext } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';

	
	// stores
	const navbarMode = writable();
	navbarMode.set('light');
	setContext('navbarMode', navbarMode);
	
	let isPhone = false;
	let showDialog = false;
	let finishLoading = false;
	let hideLoading = false;
	let LoadingAnimation = 'animate-loading';

	// change animation when finish loading
	$: LoadingAnimation = finishLoading ? 'animate-finish-loading' : 'animate-loading';
	$: showContentClass = finishLoading ? 'opacity-100' : 'opacity-0';
	$: path = $page.url.pathname;

	onMount(() => {
		setTimeout(() => {
			finishLoading = true;
			setTimeout(() => {
				hideLoading = true;
			}, 1000);
		}, 2000);

		// Check if the user is on a phone
		const userAgent = navigator.userAgent;
		isPhone = /android|iphone|ipad|ipod/i.test(userAgent);
		if (isPhone) {
			showDialog = true;
		}
	});
</script>

<div class="app font-sans">
	<main>
		<!-- loading screen -->
		<div
			class="h-screen w-screen flex justify-center items-center overflow-hidden absolute -z-10"
			class:hidden={hideLoading}
		>
			<Logo className="w-[100px] h-[100px] transition-all absolute {LoadingAnimation}" />
		</div>
		{#if !showDialog}
			<Navbar show={finishLoading} {path} />
		{/if}
		<div class="h-screen w-screen transition-all duration-1000 {showContentClass}">
			{#if showDialog}
				<div class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center px-4">
					<div class="bg-thejak p-8 rounded-lg flex items-center">
						<p class="text-center text-3xl text-white">This website is not optimized for mobile. Please use a desktop browser for the best experience.</p>
					</div>
				</div>
			{:else}
				<slot></slot>
			{/if}
		</div>
	</main>
</div>

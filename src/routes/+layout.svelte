<script>
	import '../app.css';

	import Logo from '$lib/images/components/svg-icon/Logo.svelte';
	import { onMount, setContext } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import {page} from '$app/stores';
	import { writable } from 'svelte/store';

	// stores
	const navbarMode = writable();
	navbarMode.set('light');
	setContext('navbarMode', navbarMode);

	let finishLoading = false;
	// let showHome = false;
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
		console.log(path);
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
		<Navbar show={finishLoading} path={path}/>
		<div class="h-screen w-screen transition-all duration-1000 {showContentClass}">
			<slot></slot>
		</div>
	</main>
</div>

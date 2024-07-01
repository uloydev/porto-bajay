<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Logo from '$lib/components/Logo.svelte';
	import WorksLink from '$lib/components/WorksLink.svelte';

	let navbarMode: Writable<string> = getContext('navbarMode');
	onMount(() => {
		navbarMode.set('dark');
	});
</script>

<div class="relative w-screen h-screen bg-transparent overflow-hidden bg-[#D9D9D9]">
	<!-- background -->
	<Logo
		className="absolute -bottom-[400px] -left-[500px] w-[1300px] h-[1300px] fill-thejak animate-[spin_8s_linear_infinite] transition-transform z-[1]"
	/>

	<div
		class="absolute w-full h-full grid grid-rows-12 px-20 uppercase text-[160px] leading-none z-[2]"
	>
		<WorksLink
			href="/works/sneakers-dept"
			number="01"
			text="sneakers.dept"
			additionalClass="row-start-2"
		/>
		<WorksLink href="/works/hopps-dept" number="02" text="hopps.dept" />
		<WorksLink href="/works/tibra" number="03" text="tibra" />
		<WorksLink href="/works/basketboard" number="04" text="basketboard" />
		<WorksLink href="/works/others" number="05" text="others" />
	</div>

	<!-- footer -->
	<p class="z-[2] absolute bottom-8 text-center uppercase w-full font-familjen">
		this user interface also designed by <strong>ME.</strong>
		<span class="absolute right-20">&copy;2024</span>
	</p>
</div>

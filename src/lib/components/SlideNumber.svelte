<script lang="ts">
    import { getContext, onMount } from 'svelte';
    import type { Writable } from 'svelte/store';

    // props
    export let navbar = 'dark';
    export let number = '';
    export let workDate = '';
    export let workRole = '';
    export let containerClass = '';

    let navbarMode: Writable<string> = getContext('navbarMode');

    onMount(() => {
        navbarMode.set(navbar);
    });

    const setNavbarMode = (mode: string) => {
        navbarMode.set(mode);
    };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="flex-shrink-0 snap-start w-screen h-screen {containerClass}"
	on:mouseenter={() => setNavbarMode(navbar)}
>
	<div class="flex flex-col h-full justify-between pt-[6vh] px-20 pb-16">
		<div class="flex justify-between items-center">
			<p class="text-[1.5vw] leading-none">
				{@html workDate}
			</p>
			<p class="text-[8vw]">{number}</p>
		</div>
		<p class="text-[9vw] leading-none">
			{@html workRole}
		</p>
	</div>
</div>

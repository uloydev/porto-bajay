<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
    import sneakersDept1 from '$lib/images/sneakers-dept-1.png';
    import logoSneakersDept from '$lib/images/logo-sneakers-dept.png';
    import phoneSlider1 from '$lib/images/phone-slider-1.png';
    import phoneSlider2 from '$lib/images/phone-slider-2.png';
    import phoneSlider3 from '$lib/images/phone-slider-3.png';

	let navbarMode: Writable<string> = getContext('navbarMode');
    let phoneSlider = [phoneSlider1, phoneSlider2, phoneSlider3];
    let currentPhoneSlider = 0;
    

	onMount(() => {
		navbarMode.set('light');
        setInterval(() => {
            currentPhoneSlider = currentPhoneSlider === phoneSlider.length - 1 ? 0 : currentPhoneSlider + 1;
        }, 1000);
	});

    const setNavbarMode = (mode: string) => {
        navbarMode.set(mode);
    };
</script>

<div class="overflow-hidden">
	<div class="flex overflow-x-scroll overflow-y-hidden h-screen snap-x snap-mandatory" id="sneakersDept">
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="relative flex-shrink-0 snap-start w-screen h-screen bg-transparent" on:mouseenter={() => setNavbarMode("light")}>
            <img class="object-cover w-full h-full" src={sneakersDept1} alt="sneakers dept bg">
            <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
            <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[250px] opacity-100" src={logoSneakersDept} alt="logo sneakers dept">
        </div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex-shrink-0 snap-start w-screen h-screen bg-thejak" on:mouseenter={() => setNavbarMode("dark")}>
            <div class="flex flex-col h-full justify-between pt-24 px-20 pb-16">
                <div class="flex justify-between items-end">
                    <p class="text-2xl leading-none">
                        2021 - present<br>
                        graphic designer
                    </p>
                    <p class="text-9xl">001</p>
                </div>
                <p class="text-[150px] leading-none">
                    digital imaging<br>
                    social media design
                </p>

            </div>
        </div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="relative flex-shrink-0 snap-start w-screen h-screen bg-[#d9d9d9]" on:mouseenter={() => setNavbarMode("dark")}>
            <div class="flex flex-col h-full justify-center pt-24 px-20 pb-16">
                <p class="text-[350px] text-center">sneakers dept</p>
            </div>
            {#each phoneSlider as phone, index}
                <img class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-3/4 opacity-0" class:opacity-100={index == currentPhoneSlider} src={phone} alt="phone slider {index}"/>
            {/each}
            
            <div class="flex justify-between w-full px-20 absolute bottom-20">
                <p class="text-6xl">2021</p>
                <p class="leading-none text-3xl">
                    biggest sneakers<br>
                    seller in tokopedia
                </p>
            </div>
            
        </div>
		<div class="flex-shrink-0 snap-start w-screen h-screen bg-cyan-500">
            
        </div>
	</div>
    
    <!-- footer -->
    <div class="absolute bottom-8 text-center uppercase w-full font-familjen {$navbarMode == "light" ? "text-white" : "text-black"}">this user interface also designed by <strong>ME.</strong> <span class="absolute right-20">&copy;2024</span></div>
</div>

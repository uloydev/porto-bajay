<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	let navbarMode: Writable<string> = getContext('navbarMode');
	onMount(() => {
		navbarMode.set('dark');
	});
</script>

<div class="bg-white w-full h-full pt-40 font-familjen">
	<div class="grid grid-cols-12 px-32">
		<div class="col-span-4">
			<div class="mb-20">
				<h2 class="text-4xl font-bold flex gap-20 mb-8"><span>About</span><span>Me</span></h2>
				<p class="text-lg text-justify leading-none">
					Hi there! I'm <strong>Aji Fandhi Fatahillah,</strong> I'm a bit of a wanderer, always up for
					a challenge that will help me grow and become even better. I've been a graphic designer for
					about 2 years now, and it's amazing to know that the world of creativity is endless, which
					makes it even more exciting to explore it even deeper. I love collaborating, brainstorming,
					and a bit of improvisation. It would be so much fun to do all of that with you.
				</p>
			</div>
			<div class="text-lg mb-20">
				<h2 class="font-bold mb-4">Education</h2>
				<p class="text-justify leading-none">
					Jurnalism Studies at Syarif Hidayatullah State Islamic University Jakarta
				</p>
				<p class="flex gap-3"><strong>2019</strong> - <strong>Present</strong></p>
			</div>
			<div class="text-lg">
				<h2 class="font-bold mb-4">Skill</h2>
				<p class="text-justify leading-none">
					Adobe Photoshop, Adobe Illustrator<br />
					Creativity, Problem Solving, Team Work
				</p>
			</div>
		</div>
		<div class="col-start-6 col-span-4">
			<div class="mb-20">
				<h2 class="text-4xl font-bold flex gap-20 mb-8">Experience</h2>
				<div class="mb-3">
					<p class="leading-none">
						Tibra Communication<br />
						Graphic Designer (2022 - Present)
					</p>
				</div>
				<div class="mb-3">
					<p class="leading-none">
						Sneakers Dept<br />
						Graphic Designer (2022 - 2023)
					</p>
				</div>
				<div>
					<p class="leading-none">
						Sekutu Sekota Media<br />
						Graphic Designer (2019 - 2021)
					</p>
				</div>
			</div>
			<div>
				<h2 class="text-4xl font-bold flex gap-20 mb-8">Other Experience</h2>
				<div>
					<p class="leading-none">
						Talent at Tokopedia<br />
						Social Media Talent as <strong>Bang Toto</strong><br />
						<strong>Graphic Designer (2022 - Present)</strong>
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="text-right text-lg px-32 pt-20">
		<p class="font-bold">Aji Fandhi's Portfolio</p>
		<p>2022 - 2024</p>
	</div>

	<p class="absolute bottom-8 text-center uppercase w-full">
		this user interface also designed by <strong>ME.</strong>
		<span class="absolute right-20">&copy;2024</span>
	</p>
</div>

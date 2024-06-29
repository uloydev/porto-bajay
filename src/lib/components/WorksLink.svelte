<script lang="ts">
    export let href: string = '/';
    export let number: string = '';
    export let text: string = '';
    export let additionalClass: string = '';
    let isMenuActive = false;
</script>

<a href={href} class="{additionalClass} row-span-2 flex justify-between" class:hovering={isMenuActive} on:mouseenter={() => isMenuActive = true} on:mouseleave={() => isMenuActive = false}>
    <span>{number}</span>
    <p>{text}</p>
</a>

<style>
    .hovering span {
        @apply text-white;
    }

    .hovering p {
        @apply text-thejak;
    }
</style>
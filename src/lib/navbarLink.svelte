<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;
	$: selected = href === $page.url.pathname;
	// TODO: Figure out how to get post css working and style dark mode as well
	$: style = selected ? 'background-color: rgba(var(--color-surface-700) / 1) !important;' : '';
</script>

<a {href} class="btn variant-filled-surface" {style} aria-current="page"><slot /></a>

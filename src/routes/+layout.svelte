<script>
	import Shell from '$lib/components/Shell.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Shell>
	{@render children()}
</Shell>

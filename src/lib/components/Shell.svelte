<script>
	// import { configStore } from '$lib/stores/config';
	import Header from './Header.svelte';
	import * as config from '../../site-config.json';

	// console.log('config', config);
	import Footer from './Footer.svelte';
	let { children } = $props();
</script>

<Header {config} />
<div id="wrapper flex-grow">
	<div class="prose">
		{@render children()}
	</div>
</div>
<Footer company={config.company} />

<style>
	div.prose {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 200px;
		margin-top: 2em;
		min-height: calc(100vh);
	}
</style>

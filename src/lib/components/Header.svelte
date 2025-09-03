<script>
	let { config } = $props();
	import { themeChange } from 'theme-change';
	import { onMount } from 'svelte';
	import ThemeController from './widgets/ThemeController.svelte';
	onMount(() => {
		themeChange(false);
	});
	import Icon from '@iconify/svelte';
</script>

<div class="navbar bg-base-content text-base-100 shadow-sm">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/>
				</svg>
			</div>
			<ul
				class="menu menu-sm dropdown-content bg-base-content rounded-box z-1 mt-3 w-52 p-2 shadow"
			>
				<li><a href="/">Homepage</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a href="/" class="btn btn-ghost text-xl">
			<Icon icon={config.company.logo} inline={true} height="3em" />
			<span class="company-name">{config.company.name}</span>
		</a>
	</div>
	<div class="navbar-end">
		<ThemeController />

		<!--  -->
	</div>
</div>

<style>
	.navbar {
		min-height: 7em;
	}

	.company-name {
		font-size: 3em;
	}
</style>

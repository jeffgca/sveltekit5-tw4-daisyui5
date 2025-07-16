<script>
	let { config } = $props();
	import { themeChange } from 'theme-change';
	import { onMount } from 'svelte';
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
		<!-- <label class="flex cursor-pointer gap-2">
			<span class="label-text">Acid</span>
			<input
				data-toggle-theme="synthwave,acid"
				type="checkbox"
				value="dark"
				class="toggle theme-controller"
			/>
			<span class="label-text">Synthwave</span>
		</label> -->

		<button aria-label="XXX" class="btn btn-ghost btn-circle">
			<div class="indicator">
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
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/>
				</svg>
				<span class="badge badge-xs badge-primary indicator-item"></span>
			</div>
		</button>
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

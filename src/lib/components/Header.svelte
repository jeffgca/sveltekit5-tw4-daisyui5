<script>
	let { config } = $props();
	import { page } from '$app/env';
</script>

<header class="bg-gray-800 text-white">
	<div class="container mx-auto flex items-center justify-between px-4 py-4">
		<a href="/" class="text-lg font-bold">{config.company.name}</a>
		<nav>
			<ul class="flex space-x-4">
				<li>
					<a href="/" class="hover:text-gray-400">Home</a>
				</li>
				<li>
					<a href="/signin" class="hover:text-gray-400">Sign Out</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

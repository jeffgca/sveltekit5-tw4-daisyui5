<script>
	let { company } = $props();
</script>

<footer class="bg-gray-800 text-white">
	<div class="container mx-auto px-4 py-8">
		<div class="flex flex-col items-center justify-between md:flex-row">
			<div class="mb-4 md:mb-0">
				<p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
			</div>
		</div>
	</div>
</footer>

<script>
	import { SignIn, SignOut } from '@auth/sveltekit/components';
	import { page } from '$app/state';
</script>

<h1>This is <code>/signin</code></h1>

<div>
	{#if page.data.session}
		<h2>Signed in</h2>
		<p>{page.data.session?.user?.name}</p>
		<p>{page.data.session?.user?.email}</p>
		<SignOut signOutPage="signin" />
	{:else}
		<h2>Not signed in</h2>
		<SignIn provider="github" signInPage="signin" />
	{/if}
</div>

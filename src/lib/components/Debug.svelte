<script>
	import { page } from '$app/state';
	let _sessionJSON = { message: 'no session' };
	if (page.data.session) {
		console.log('session', page.data.session);
		JSON.stringify(page.data.session, null, '  ');
	} else {
		console.log('no session');
	}
</script>

<div>
	<h1>Debug</h1>
	<pre>{_sessionJSON}</pre>
</div>

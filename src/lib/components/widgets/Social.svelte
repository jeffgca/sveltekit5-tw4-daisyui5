<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';
	import _ from 'lodash-es';
	let { socials } = $props();

	let supportedIcons = {
		bluesky: 'lucide-lab:butterfly',
		mastodon: 'lucide-lab:elephant-face',
		github: 'lucide:github',
		twitter: 'lucide:twitter',
		youtube: 'lucide:youtube',
		instagram: 'lucide:instagram',
		emaail: 'lucide:at-sign',
		default: 'lucide:at-sign'
	};

	let hydrated = _.map(socials, (social) => {
		social.icon = supportedIcons[social.name] || supportedIcons.default;
		return social;
	});
</script>

<nav>
	<h6 class="footer-title">Social</h6>
	<div class="grid grid-flow-col gap-4">
		{#each hydrated as social}
			<a class="social-item text-lg" aria-label={social.handle} href={social.link}>
				<Icon icon={social.icon} inline={true} height="1.5em" />
				<span>{social.handle}</span>
			</a>
		{/each}
	</div>
</nav>

<style>
</style>

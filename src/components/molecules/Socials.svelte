<script>
	import Social from '../atoms/Social.svelte';
	// import { user } from '../../util/discord';

	import { GitHubIcon } from '@indaco/svelte-iconoir/github';
	import { LinkedInIcon } from '@indaco/svelte-iconoir/linkedin';
	// import { DiscordIcon } from '@indaco/svelte-iconoir/discord';
	import { MailIcon } from '@indaco/svelte-iconoir/mail';
	import { CodeIcon } from '@indaco/svelte-iconoir/code';
</script>

<div class="socials-container">
	<Social tip="kanusowi" link="https://github.com/kanusowi">
		<GitHubIcon color="var(--accent)" />
	</Social>

	<!-- <Social tip={user.username} link={`https://discord.com/users/${user.id}`}>
		<DiscordIcon color="var(--accent)" />
	</Social> -->

	<Social tip="LinkedIn" link="https://www.linkedin.com/in/solomon-williams/">
		<LinkedInIcon color="var(--accent)" />
	</Social>

	<Social tip="Email" link="mailto:kanumalasolomon@gmail.com">
		<MailIcon color="var(--accent)" />
	</Social>

	<Social tip="LeetCode" link="https://leetcode.com/u/kansowi/">
		<CodeIcon color="var(--accent)" />
	</Social>
</div>

<style>
	.socials-container {
		display: flex;
		gap: 0.75rem;
	}
</style>

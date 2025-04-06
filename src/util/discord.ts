class DiscordUser {
	constructor(
		public username: string,
		public id: string
	) {}
}

export let user = new DiscordUser('kansowi', import.meta.env.DISCORD_USER || '478976315199062016');

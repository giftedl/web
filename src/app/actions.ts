'use server';

export async function getDiscordAccountData(): Promise<DiscordAccountData> {
    const res = await fetch('https://discord.com/api/v10/users/' + process.env.DISCORD_ACCOUNT_ID, {
        headers: {
            'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`
        }
    })

    const data = await res.json();

    return {
        avatar: `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`,
        banner: data.banner ? `https://cdn.discordapp.com/banners/${data.id}/${data.banner}.png` : undefined
    }
}

export type DiscordAccountData = {
    banner?: string;
    avatar: string;
}
import { ClientOptions, ClientPresenceStatus, Collection, Intents, UserResolvable } from "discord.js";
export const sysoption: ClientOptions = {
    allowedMentions: { parse: [] },
    intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MEMBERS],
    makeCache: () => new Collection(),
    restTimeOffset: 300,
    retryLimit: 4
};

import { ClientOptions, Collection, Intents } from "discord.js";
/**
 * The configuration Intents for the bot.
 * @type {Intents}
 * @readonly
 * @memberof Config
 */
export const sysoption: ClientOptions = {
    allowedMentions: { parse: [] },
    intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MEMBERS],
    makeCache: () => new Collection(),
    restTimeOffset: 300,
    retryLimit: 4
};
export const ConfigVersion = "1.0.0";

process.on("unhandledRejection", err => {
    console.error(err);
});
process.on("uncaughtException", err => {
    console.error(err);
});

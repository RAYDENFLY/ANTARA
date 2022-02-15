import Discord from "discord.js";
import fs from "fs";
import { Core } from "..";

Core.commands = new Discord.Collection();
Core.aliases = new Discord.Collection();

fs.readdir("./src/commands/", (err, categories) => {
    if (err) console.log(err); // it will send you an error, if there was something went wrong.
    console.info(`Found total ${categories.length} categories.`);
});



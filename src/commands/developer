import { Message } from 'discord.js';

import Command from '../../core/CommandLoader';
import sys from '../..//core/sys';

export default class TestCommand extends Command {
    constructor(client: sys) {
        super(client, {
            name: 'test',
            group: 'Developer',
            description: 'Test command for developers',
            require: {
                developer: true
            }
        });
    }

    async run(message: Message, args: string[]) {
        await message.reply('Test command working!');
    }
}

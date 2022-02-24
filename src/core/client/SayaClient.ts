
  
import {AkairoClient, CommandHandler, ListenerHandler} from 'discord-akairo'
import {join} from 'path'




declare module 'discord-akairo' {
    interface AkairoClient {
        commandHandler: CommandHandler,
        listenerHandler: ListenerHandler,
    }
}


interface Options {
    token: string,
    ownerID: string,
}

export default class SayaClient extends AkairoClient {
    public config: Options
    


    constructor(
        config: Options,
    ) {
        super({
            ownerID: config.ownerID
        });
        this.config = config;
        
    }
    public commandHandler = new CommandHandler(this, {
        prefix: (message => {
            if(message.guild) {
                return this.GuildSettings.get(message.guild.id, 'prefix', '$');
            }
            return '$';
        }),
        directory: join(__dirname, '..', '..', 'commands'),
        blockClient: true,
        blockBots: true,
        allowMention: true,
        automateCategories: true,
        commandUtil: true,
        defaultCooldown: 2500,
        handleEdits: true

    })
    public listenerHandler = new ListenerHandler(this, {
        directory: join(__dirname, '..', 'listeners')
    })

   
    private async _init(): Promise<void> {
        this.commandHandler.useListenerHandler(this.listenerHandler)
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler
        })
        this.listenerHandler.loadAll()
        this.commandHandler.loadAll()
    }

    public async start(): Promise<string> {
        await this._init()
        return this.login(this.config.token)

    }
}

import { Listener } from "discord-akairo";

export default class ReadyListener extends Listener {
    constructor() {
        super('CReady', {
            event: 'ready',
            emitter: 'client'
        });
    }

    public exec(): void {
        this.client.user.setActivity('ANTARA PROJECTS', { type: 'PLAYING'})
        console.log(`[✔] SayaClient Ready `)
    }
}

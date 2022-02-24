import SayaClient from "./core/client/SayaClient";
require('dotenv').config()



const Client = new SayaClient({
    ownerID: process.env.OWNER_ID,
    token: process.env.TOKEN
})

/**
 * Login the bot with the token.
 */

Client.start()
    .then(() => console.log('[✔] Login successful!!'))


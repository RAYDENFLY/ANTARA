import { Sys } from "./Core/Client/SayaClient";
import { sysoption } from "./config/config";
import { token } from "./config/token";
export const Core = new Sys(sysoption);

import "./core/CommandLoader";


Core.on("error", console.error);
Core.on("warn", console.warn);

/**
 * Login the bot with the token.
 */
Core.login(token)
    .then(() => {
        console.log("Login successful!");
    })
    .catch(err => {
        console.error(err);
    });

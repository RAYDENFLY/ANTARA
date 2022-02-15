import { Sys } from "./core/sys";
import { sysoption } from "./config/config";
import { token } from "./config/token";
export const Core = new Sys(sysoption);


Core.login(token)
    .then(() => {
        console.log("Login successful!");
    })
    .catch(err => {
        console.error(err);
    });

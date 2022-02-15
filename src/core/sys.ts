import { Client } from "discord.js";
import * as config from "../config/config";
export class Sys extends Client {
    public readonly config = config;
    public commands: any;
    public aliases: any;
}

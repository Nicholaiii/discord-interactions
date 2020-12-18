interface ApplicationCommandOption {
  name: string;
  description: string;
  type: number;
  required: boolean;
  choices?: { name: string; value: string }[];
}

interface ApplicationCommand {}

interface ApplicationOptions {
  name: string;
  description: string;
  options?: ApplicationCommandOption[];
}

declare module "discord-slash-commands-client" {
  export class Client {
    constructor(token: string, clientID: string);
    private token: string;
    private clientID: string;
    public getCommands(
      commandID?: string,
      guildID?: string
    ): Promise<ApplicationCommand>;
    public createCommand(
      options: ApplicationOptions,
      guildID?: string
    ): Promise<ApplicationCommand>;
    public editCommand(
      options: ApplicationOptions,
      commandID: string,
      guildID?: string
    ): Promise<ApplicationCommand>;
    public deleteCommand(
      commandID: string,
      guildID?: string
    ): Promise<ApplicationCommand[]>;
  }
}

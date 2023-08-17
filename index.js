import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  else {
    if (message.content.startsWith("create")) {
      const url = message.content.split(" ")[1];
      message.reply(`Shorten url is ${url}`);
      return;
    }
    message.reply(`Hey ${message.author.username}, I'm Bot`);
  }
});

client.on("interactionCreate", (interaction) => {
  if (interaction.commandName === "ping") {
    interaction.reply("Pong!");
  }
});

client.login(
  "MTE0MTY3NTUwOTA4NDg2ODY0OA.Ge2Mye.W7PkmvHV6Q-ccmQmCT5p2yFvro8eC99FKt30vI"
);


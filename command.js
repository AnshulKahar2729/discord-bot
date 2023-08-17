import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTE0MTY3NTUwOTA4NDg2ODY0OA.Ge2Mye.W7PkmvHV6Q-ccmQmCT5p2yFvro8eC99FKt30vI");

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1141675509084868648"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
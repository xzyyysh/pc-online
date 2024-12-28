const { Client } = require('discord.js-selfbot-v13');
const config = require('./config.json');

const client = new Client({
  ws: { properties: { $browser: "discord.js" } }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus(config.status);
});

client.on('error', (error) => {
  console.error('An error occurred:', error);
});

client.login(config.token).catch(console.error);
const Discord = require("discord.io");
const dotenv = require('dotenv').config();

// INITIALIZE BOT
var bot = new Discord.Client({
	token: process.env.DISCORD_BOT_TOKEN,
	autorun: true
});

// ON CONNECT - Bot is ready for commands
bot.on("ready", function(event) {
	console.log("Connected.")
	console.log("Logged in as: ");
	console.log(`${bot.username}#${bot.discriminator}`);
	console.log(`ID: ${bot.id}`)
});

// ON MESSAGE - Listens for messages sent in the guild
bot.on("message", function(user, userID, channelID, message, event) {
	var commands = require("./commands.js");
	commands.messageCommand(message, channelID, user, userID);
});

bot.on("guildMemberAdd", function(member) {
	console.log(member);
});

bot.on("guildMemberRemove", function(member) {
	console.log(member);
});

module.exports = {
	bot
}
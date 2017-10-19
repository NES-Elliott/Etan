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

// bot.on('any', function(event) { // redo to use js instead of websockets
// 	switch (event.t) {
// 		// ADDED TO THE SERVER
// 		case "GUILD_MEMBER_ADD":
// 			bot.sendMessage({
// 				to: "369307507983777794",
// 				message: `<@!${event.d.user.id}> has joined the server! Welcome them!`
// 			});
// 			console.log(`${event.d.user.username} has joined the server`);
// 		break;
// 		// LEAVES THE SERVER
// 		case "GUILD_MEMBER_REMOVE":
// 			bot.sendMessage({
// 				to: "369307507983777794",
// 				message: `<@!${event.d.user.id}> has left the server. RIP`
// 			});
// 			console.log(`${event.d.user.username} has left the server`);
// 		break;
// 		// BANNED FROM SERVER
// 	}
// });

module.exports = {
	bot
}
const request = require("request");
const Discord = require("discord.io");
const env = require('dotenv').config();
// INITIALIZE BOT
var bot = new Discord.Client({
	token: process.env.DISCORD_BOT_TOKEN,
	autorun: true
});

// ON CONNECT - listener
bot.on("ready", function(event) {
	console.log("Connected.")
	console.log("Logged in as: ");
	console.log(`${bot.username}#${bot.discriminator}`); // ES6 strings
	console.log(`ID: ${bot.id}`)
	bot.sendMessage({
		to: "369307507983777794",
		message: "Etan-Bot is online and ready for commands. Type '!help' for list of commands"
	});
});

// ON MESSAGE - listener
bot.on("message", function(user, userID, channelID, message, event) {
	// Our bot needs to know if it will execute a command
	// It will listen for messages that start with !
	if (message.substring(0,1) == "!") {
		var args = message.substring(1).split(" ");
		var cmd = args[0];
		args = args.splice(1);

		switch (cmd) {
			case "help":
				bot.sendMessage({
					to: channelID,
					message: "ping \n gimmeUser \n gimmeUserID \n gimmeChannelID \n mentionMe"
				});
			break;

			case "ping":
				bot.sendMessage({
					to: channelID,
					message: "Pong!"
				});
			break;

			case "gimmeUser":
				bot.sendMessage({
					to: channelID,
					message: user
				})
			break;

			case "gimmeUserID":
				bot.sendMessage({
					to: channelID,
					message: userID
				})
			break;

			case "gimmeChannelID":
				bot.sendMessage({
					to: channelID,
					message: channelID
				})
			break;

			case "mentionMe":
				bot.sendMessage({
					to: channelID,
					message: `<@!${userID}>`
				})
			break;

			case "ani":
			giphy(message);
			break;
		}
	}
});

// ON STATUS CHANGE - listener
bot.on('presence', function(user, userID, status, game, event) {
	switch (status) {
		case "online":
			bot.sendMessage({
				to: "369887217184931840",
				message: user + " is now online"
			})
			console.log(user + " is now online");
		break;

		case "idle":
			bot.sendMessage({
				to: "369887217184931840",
				message: user + " is now afk"
			})
			console.log(user + " is now afk");
		break;

		case "dnd":
			bot.sendMessage({
				to: "369887217184931840",
				message: user + " is now busy"
			})
			console.log(user + " is now busy");
		break;

		case "offline":
			bot.sendMessage({
				to: "369887217184931840",
				message: user + " is now offline"
			})
			console.log(user + " is now offline");
		break;
	}
});

bot.on('any', function(event) {
	switch (event.t) {
		// ADDED TO THE SERVER
		case "GUILD_MEMBER_ADD":
			bot.sendMessage({
				to: "369307507983777794",
				message: `<@!${event.d.user.id}> has joined the server! Welcome them!`
			});
			console.log(`${event.d.user.username} has joined the server`);
		break;
		// LEAVES THE SERVER
		case "GUILD_MEMBER_REMOVE":
			bot.sendMessage({
				to: "369307507983777794",
				message: `<@!${event.d.user.id}> has left the server. RIP`
			});
			console.log(`${event.d.user.username} has left the server`);
		break;
		// BANNED FROM SERVER
	}
});

function giphy(arg) {
	var querySearch;
	var gifUrl;
	var reaction = arg.slice(4).trim();
	switch (reaction) {
		case "mad":
		querySearch = "angry";
		break;

		case "happy":
		querySearch = "happy";
		break;
	}
	var queryURL = `http://api.giphy.com/v1/gifs/search?q=anime ${querySearch}&api_key=7af03a14897144248f7d442eee09987a&limit=1`;

	request(queryURL, function (err, response, body) {
		if (err) console.log('statusCode:', response && response.statusCode + " --- Error: " + err);
		gifUrl = body.slice(body.indexOf("url"), body.indexOf(',"bitly_gif_url"'));
		botSpeech(gifUrl);
	});
};

function botSpeech(text) {
	var gifUrl = text.slice(text.indexOf("https"), -1);
	String.prototype.replaceAll = function(target, replacement) {
		return this.split(target).join(replacement);
	};
	bot.sendMessage({
		to: "369307507983777794",
		message: gifUrl.replaceAll("\\", "")
	});
};

bot.on('messageCreate', function(username, userID, channelID, message) {
	console.log(message);
});
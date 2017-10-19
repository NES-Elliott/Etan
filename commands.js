var gif = require("./giphy.js");

function greetingCommand(username, userID) { // Includes both greetings and farewells.
	console.log(username);
	console.log(userID);
} 

function kickCommand() {}

function banCommand() {}

function messageCommand(messCmd, chanID, user, userID) {
	if (messCmd.substring(0,1) === "~") {
		var cmd = messCmd.split(" ")[0].slice(1);
		var searchArray = messCmd.split(" ").slice(1);

		switch (cmd) {
			case "ani":
			gif.giphySearch("anime", searchArray, chanID);
			break;

			default:
			console.log("Your command does not match any of the available.");
			console.log("Bot will message to the channel it was called in.");
			var disBot = require("./bot.js");
			disBot.bot.sendMessage({
				to: chanID,
				message: "Your command does not match any of the available."
			});
			break;
		}
	}
}

module.exports = {
	greetingCommand,
	messageCommand
};
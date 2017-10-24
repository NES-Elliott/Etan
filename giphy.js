const giphy = require('giphy-api')();

function giphySearch(queryGenre, queryTerm, chanID) {
	var term = queryTerm[0];
	switch (term) {
		case "happy":
		case "jolly":
		giphyRequest(queryGenre, "happy", chanID);
		break;

		case "mad":
		case "angry":
		giphyRequest(queryGenre, "angry", chanID);
		break;

		case "sad":
		case "cry":
		giphyRequest(queryGenre, "sad", chanID);
		break;

		case "any":
		console.log("Feature is not yet implemented.");
		console.log("Bot will message to the channel it was called in.");
		var disBot = require("./bot.js");
		disBot.bot.sendMessage({
			to: chanID,
			message: "Feature is not yet implemented."
		});
		break;

		default:
		console.log("Cannot search that term.");
		console.log("Bot will message to the channel it was called in.");
		var disBot = require("./bot.js");
		disBot.bot.sendMessage({
			to: chanID,
			message: "Cannot search that term."
		});
		break;
	}
};

function giphyRequest(queryGenre, queryTerm, chanID) { // TEST WHEN YOU HAVE INTERNET CONNECTION
	giphy.random({
		tag: `${queryGenre} ${queryTerm}`,
		fmt: "json"
	}).then(function(res, err) {
		if (err) console.log(`ERROR: ${err}`);
		console.log(JSON.stringify(res.data.image_mp4_url));
		var disBot = require("./bot.js");
		disBot.bot.sendMessage({
			to: chanID,
			message: res.data.image_mp4_url
		});
	});
};

module.exports = {
	giphySearch,
	giphyRequest
};
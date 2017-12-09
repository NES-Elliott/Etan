# Etan-Bot for the Discord App

## Getting Start
This bot is not able to be added to your server yet. Currently the bot is deployed to heroku, which does not allow me to run it full-time unless I pay for their services. In the future, I will find a more suitable hosting site that is able to keep a reliable uptime on the bot.

However, check out the rest of this Github for examples on what this bot can do for you. It has some pretty neat features and some really cool ones planned down the road.

To get started with Etan-Bot, you're going to want to type in 'help' and that's going to give you a list of the different commands that Etan will react to.

Typing 'help (COMMAND NAME)' will give you a short description of what the command does and who can use it.

### Some things the bot just knows to do...
... Like greeting new users to the server, or wishing them a farewell when they part ways.
And don't worry about accidently entering a command to the bot or an invalid command, it will only listen to statements that have a '~' in front of them or commands that it knows.

You also don't have to worry about certain commands being accessable to everyone, like banning or kicking a user. These are only commands that can be used by those with permissions on the server. Why would you want to use a kick commmand instead of doing it yourself? Well we have a soft ban feature, which allows you to kick a user for a certain amount of time.

### Commands
#### Moderator Commands
##### CAN ONLY BE USED BY SPECIFIED MEMBERS
+ ~kick @[USERNAME#IDENTIFIER] [MESSAGE] - You would call this command just like you would mention someone using discord's mention feature, '@'. The bot can kick people from the server and message them a reason. This still allows the user in question to be added back to the server at anytime.
+ ~softban [NUMBER VALUE] @[USERNAME#IDENTIFIER] [MESSAGE] - You would call this command just like you would mention someone using discord's mention feature, '@'. The bot can soft ban people from the server and message them a reason. Users kicked with this feature will be given an invite link after a set amount of time (in minutes).
+ ~ban @[USERNAME#IDENTIFIER] [MESSAGE] - You would call this command just like you would mention someone using discord's mention feature, '@'. The bot can ban people from the server and message them a reason. Users banned with this feature will NOT be allowed back into the server by normal means.

#### Reaction Commands
##### USABLE BY ANYONE
+ ~react [REACTION] - This is the basic reaction command. It uses the giphy api to find gifs tailored to your command. Just typing '~react' will give a short description and the available arguments.
+ ~ani [REACTION] - As a special request, I added a command specific to anime related gifs, because sometimes you want to be even less serious than normal gifs. Just typing '~ani' will give a short description and the available arguments.

### Future Features

+ Able to post anime from MAL using either the english or japanese title - My friends and I are always trying to find different things to do together, anime happens to be one. We will sit down, and decide what to watch together and often times, the sessions will consist of links from MyAnimeList flooding the server chat. Instead of preventing this flood, we are enabling it! This command will help you find your anime by searching for a genre or specific anime that suites your taste.

+ Able to post gaming news from any source you want (Steam, Kotaku, etc.) - Games are fun, no matter what age. I, as well as all of my friends, love discovering new games to play together and compete. Having a command that shows gaming news from different sources would be lovely and very useful to me and friends.

+ Cleverbot using the cleverbot-node package - Wouldn't it be amazing to have a conversation with the bot when none of your friends are around? Using the cleverbot technology, you would be able to hold a conversation with the bot. If possible, I would also like users to be able to access different commands through the cleverbot conversation, similar to SIRI.

+ Able to play audio from youtube, soundcloud or spotify (if spotify will let me).

### Suggestions
Please send me suggestions for different features that would be cool for the bot! This is an on-going project. The project was born out of my need for something like this that is very responsive, so suggestions on other features that either make it easier to use or better to use, suggest it!
const Discord = require('discord.js');
const client = new Discord.Client();
//const member = new Discord.
//const request = require('request');
const fs = require('fs');
const privateConfig = require("./privateConfig.json");
const prefix = '!';
const PingEmbed =
{
  "title": "Pinged",
  "color": 1040996
};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`);
});

client.login(privateConfig.TOKEN) // This would be how you get something from .env - the name of the .env variable is TOKEN, so you would get it with process.env.TOKEN
/*
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./cmds', (err, files) => {
  if (err) console.log(err);

  let jsscript = files.filter(f => f.split(".").pop() == "js")
  if (jsscript.lenght <= 0) return console.log('[Commands, no commands found!]')

  jsscript.ForEach((f, i) => {
    let pull = require('./cmds/${f}');
    Client.commands
    pull.config.aliases.ForEach(alias => {
      Client.aliases.set(alias, pull.config.name)
    });
  });
});
*/
client.on('message', msg => {
  //let guild = member.guild;
  //let memberTag = member.user.tag;
  if (!msg.content.startsWith(prefix)) return;
  const args = msg.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();

  /*let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
if(commandfile) commandfile.run(bot,message,args)
*/
  if (command == 'help')
  {
    msg.channel.bulkDelete(1);
    msg.channel.send
                    ( '>>>'
                    + '!ping - pong'
                    + '\n!thonk - thonk!'
                    + '\n!clean up - Deletes 20 messages'
                    + '\n!nuke - Clears all messages in a channel'
                    + '\n!kill-me - Let the bot kill you (gif included)'
                     )


  }
  if (command == 'join') {
    // Only try to join the sender's voice channel if they are in one themselves
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}
  }
  if (command == 'ping') {
    msg.channel.send({ embed: PingEmbed}
)}
  if (command == 'clean')
  {
    msg.channel.bulkDelete(20);
    msg.channel.send('Deleted 20 messages!');
  }
  if (command == 'thonk')
    {
      msg.react("🤔");
    }
  if (command == 'nuke')
  {
    async function NukeChat() {
      msg.delete()
      const fetched = await msg.channel.fetchMessages({limit: 99});
      msg.channel.bulkDelete(fetched);
    }
    NukeChat();
    msg.channel.send('Chat has been nuked! https://imgur.com/LIyGeCR');
  }
  if (command == 'kill-me')
    {
      msg.reply(' has been killed by Exrar. https://tenor.com/view/dies-cat-dead-died-gif-13827091');
    }
  if (command == 'avatar')
  {
    if (!msg.mentions.users.size)
    {
    			msg.channel.send(`Your avatar: <${msg.author.displayAvatarURL}>`);
    }
  }
  if (command == 'bite')
  {
    if (msg.mentions.users.size == 1)
    {
    msg.channel.send('${msg.author.displayname} has bitten ${args}');
    }
  }
  if (command == 'terminate')
  {
    msg.channel.bulkDelete(1)
    async function StopBot(){
      msg.channel.bulkDelete(1);
      await msg.channel.send(':warning: Terminating process :warning:');
      await msg.channel.bulkDelete(1);
      await msg.channel.send(':x: Bot process has been terminated! :x:');
      return process.exit();
    }

    StopBot();
  }
});

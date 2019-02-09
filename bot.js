const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("541275433811968022")
setInterval(function() {
channel.send(`amk 87bh`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
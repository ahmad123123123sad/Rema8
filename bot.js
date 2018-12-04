const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', async() => {
var server = "515469920784482306"; 
var channel = "515469982008868865";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: **')
    },305);
})








client.login(process.env.BOT_TOKEN);

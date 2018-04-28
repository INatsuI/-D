const Discord = require ('discord.js');
const queue = new Map();
const bot = new Discord.Client();


var prefix = ("O!");

var autorole = ("🌀- Visiteur");

var servers = {};


bot.on("guildMemberAdd", member =>{
    member.addRole(member.guild.roles.find('name', "🌀- Visiteur"));
})

bot.on('ready', function() {
    bot.user.setGame("OyoRi | " + (bot.users.size - 1) + " Membre(s) | " + bot.guilds.size + " Serveur(s) !", "https://www.twitch.tv/Méliodas")
    console.log("Go");


bot.on("guildMemberAdd", member => {
    bot.user.setGame("OyoRi | " + (bot.users.size - 1) + " Membre(s) | " + bot.guilds.size + " Serveur(s) !", "https://www.twitch.tv/Méliodas")

})

bot.on("guildMemberAdd", member => {
    const embed = new Discord.RichEmbed()
      .setColor('#77B5FE')
      .setAuthor(member.user.tag, member.user.avatarURL)
      .setTitle("Un nouvel utilisateur vient d'arriver", `Il s'agit de [${member.user.tag}](https://discordapp.com/)`, true)
      .addField("Comment connaitre mon fonctionnement ? ", "Je t'invite a exécuter la command : " + prefix )
      .addField(`Nombre de membres après l'arrivée de ${member.user.tag}`, member.guild.memberCount)
      .setTimestamp()
member.guild.channels.find("name", "bienvenue").send({embed})

})

bot.on("guildMemberRemove", member => {
    const embed = new Discord.RichEmbed()
    bot.user.setGame("OyoRi | " + (bot.users.size - 1) + " Membre(s) | " + bot.guilds.size + " Serveur(s) !", "https://www.twitch.tv/Méliodas")
    .setColor('#77B5FE')
    .setAuthor(member.user.tag, member.user.avatarURL)
    .setTitle("Départ d'un utilisateur")
    .addField("Il s'agit de : ", `[${member.user.tag}](https://discordapp.com/)`, true)
    .addField(`Nombre de membres après le départ de ${member.user.tag}`, member.guild.memberCount)
    .setTimestamp()
    member.guild.channels.find("name", "bienvenue").send({embed})
})

});

bot.login(process.env.TOKEN);


bot.on("message", async function(message) {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.length).split(/ +/);
    command = args.shift().toLowerCase();


    if(message.content.startsWith(prefix + "kick")) {
        let Perm = message.guild.members.get(message.author.id).permissions.has('ADMINISTRATOR');
        var member= message.mentions.members.first();

        if(!Perm) {
            var help_embed = new Discord.RichEmbed()
            .setAuthor("❌ Erreur : ❌")
            .addField("Erreur :", "Permission Refusé !")
            .setColor("#850606")
            message.channel.sendEmbed(help_embed);
        }
    
        if(!member) {
            var help_embed = new Discord.RichEmbed()
            .setAuthor("❌ Erreur : ❌")
            .addField("Erreur :", "Utilisateur non mentionner / Invalide !")
            .setColor("#850606")
            message.channel.sendEmbed(help_embed);
        }
        if(Perm) {

        member.kick().then((member) => {
            var help_embed = new Discord.RichEmbed()
            .addField("Commande :", "Kick")
            .addField("Utilisateur :", member.displayName)
            .addField("Modérateur :", message.member)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#77B5FE")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            message.channel.sendEmbed(help_embed);
        
        }).catch(() => {
        }
        )
    }
    }


    if(message.content.startsWith(prefix + "Aide")){
        var help_embed = new Discord.RichEmbed()
        .setAuthor("✔ Tu vien de recevoir l'aide en message privé !")
        .setColor("#3AF24B")
        message.channel.sendEmbed(help_embed);
        var help_embed = new Discord.RichEmbed()
            .setColor('#77B5FE')
            .setAuthor(message.author.username, message.author.avatarURL)
            .setDescription("Voici les commandes du bot !")
            .addField("O!ban (@Utilisateur) (Raison)", "Permet de bannir un utilisateur de votre discord !")
            .addField("O!kick (@Utilisateur) (Raison)", "Permet d'expulser un utilisateur de votre discord !")
            .addField("O!mute (@Utilisateur) (Raison)", "Permet de rendre muet un utilisateur de votre serveur discord !")
            .addField("O!unmute (@Utilisateur) (Raison)", "Permet de rendre unmuet un utilisateur de votre serveur discord !")
            .addField("O!Sondage (ex : Aimez-vous les pommes ?)", "Permet de faire des sondages ! - En maintenance !")
            .addField("O!InfoDiscord ", "Permet de vous donner les info du discord !")
            .addField("O!ping ", "Permet d'avoir le ping du discord ")
            .setTimestamp()
            message.author.sendEmbed(help_embed); 
    
    }

    if(message.content.startsWith(prefix + "ban")) {
        let Perm = message.guild.members.get(message.author.id).permissions.has('ADMINISTRATOR');
        var member= message.mentions.members.first();

        if(!Perm) {
            var help_embed = new Discord.RichEmbed()
            .setAuthor("❌ Erreur : ❌")
            .addField("Erreur :", "Permission Refusé !")
            .setColor("#850606")
            message.channel.sendEmbed(help_embed);
        }
    
        if(!member) {
            var help_embed = new Discord.RichEmbed()
            .setAuthor("❌ Erreur : ❌")
            .addField("Erreur :", "Utilisateur non Mentionner / Invalide !")
            .setColor("#850606")
            message.channel.sendEmbed(help_embed);
        }
        if(Perm) {
        // Ban
        member.ban().then((member) => {
        // Successmessage
        var help_embed = new Discord.RichEmbed()
        .addField("Commande :", "Ban")
        .addField("Utilisateur :", member.displayName)
        .addField("Modérateur :", message.member)
        .addField("Heure:", message.channel.createdAt)
        .setColor("#77B5FE")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        message.channel.sendEmbed(help_embed);
        }).catch(() => {

        })
    }

}});

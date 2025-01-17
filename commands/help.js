const {Client,MessageEmbed,Attachment} = require("discord.js")
let pagecount = 3
const paginationEmbed = require('discord.js-pagination');

let pages = [
   new MessageEmbed()
.setColor('#fe5953')
  .setTitle('Commands')
 .setDescription('Prefix: `p!`')
 .addFields(
    { name: 'catalog-search [Text to search]', value: '└ Search Catalog Item',inline: false },
    { name: 'random-game [id limit(optional)]', value: '└ Find Random game on polytoria',inline: false },
    { name: 'random-catalog [id limit(optional)]', value: '└ Find Random Catalog Item on polytoria',inline: false },
    { name: 'lookup [username]', value: '└ Lookup User Infomation',inline: false },
    { name: 'leaderboard [Category(optional)] [page number(optional)]', value: '└ Fetch Leaderboard',inline: false },

    ),

    new MessageEmbed()
.setColor('#fe5953')
  .setTitle('Commands')
 .setDescription('Prefix: `p!`')
 .addFields(
    { name: 'inspect-avatar [Username]', value: '└ Give details about user avatar',inline: false },
    { name: '404-random-catalog [id limit(optional)]', value: '└ Gives random Hidden Catalog item(It will be old render mostly)',inline: false },
    { name: 'random-user [id limit(optional)]', value: '└ Random Users in Polytoria',inline: false },
    { name: 'stud2brick [Amount]', value: '└ Convert Currency from Studs to Bricks',inline: false },
    { name: 'brick2stud [Amount]', value: '└ Convert Currency from Bricks to Studs',inline: false },

    ),

    new MessageEmbed()
.setColor('#fe5953')
  .setTitle('Commands')
 .setDescription('Prefix: `p!`')
 .addFields(
    { name: 'information', value: '└ Information about the bot',inline: false },
        { name: 'invite', value: '└ Link to invite the bot to your server',inline: false },

    )

]

module.exports = function(message,args) {
   paginationEmbed(message, pages, ["◀","▶"], 60 * 1000);
}

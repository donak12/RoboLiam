const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "changelog",
  aliases: ["updates"],
  description: "Send the changelog to the most recent update.",
  category: "Other",
  execute(message, args) {
    const Embed = new MessageEmbed()
      .setTitle("**Changelog**\nv3.4.0")
      .setDescription(
        "```diff\n+ Attempt to fix incorrect status statistics\n+ Change exactimage command category```"
      )
      .setFooter("Updated 11/2/2020 PDT")
      .setColor(0xffa500);
    message.channel.send(Embed);
  },
};

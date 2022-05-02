const { autoresponse } = require("../db")

module.exports = (client) => {
  client.on("messageCreate", async (message) => {
    if (message.author?.bot) return
    if (!message.guild?.id) return
    let check = message.content.toLowerCase()

    console.log(`[Autocomplete] Source phrase: ${check}`)

    let responses = await autoresponse.find({ guild: message.guild.id, deleted: false })
    responses.forEach((x) => {
      console.log(`[Autocomplete] Checking against: ${x.trigger}`)
      if (check.includes(x.trigger)) {
        console.log(`[Autocomplete] Found match: ${x.trigger}`)
        channel.send({ content: `${response}` })
      }
    })
  })
}

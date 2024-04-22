const { cmd } = require('../lib')
const { IOSNEWS } = require('ios-news')

cmd({
        pattern: "ios",
        category: "news",
        react: "📰",

        filename: __filename
    },
    async(Void, citel,text) => {
            try { const data = await IOSNEWS();
                  const ios = data.latest();
      

      const kushan = `🗞️ *DARK SHAN MD IOS NEWS*\n
      ⌨️ TITLE ${ios.result.title}\n\n
      💎 DESCRIPTION ${ios.result.desc}\n\n
      🎗️ LINK ${ios.result.link}\n\n
©️ POWER BY DARK SHAN MD`

    await Void.sendMessage(citel.chat, { image: { url: ios.result.images }, caption: kushan }, { quoted: citel })
         } catch (e) {
    console.log(e)
    citel.reply("❗ *" + e + "*")
  }
    })

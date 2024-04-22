const {fetchJson,cmd, tlang } = require('../lib')
const nima = require("tech-news-scraper")

cmd({
        pattern: "ttnews",
        category: "news",
        react: "📰",
        filename: __filename
    },
    async(Void, citel,text) => {
      
      const news = await nima.allNews()
      
      let textw = `◉┉❮❮ 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙽 𝙼𝙳 𝚃𝙴𝙲𝙷 𝙽𝙴𝚆𝚂 ❯❯┉◉\n\n`;
for (let i=0; i<16; i++){
  textw +=`❒ 𝐍𝐎 ${news.result[i].no}\n`
  textw +=`❒ 𝐂𝐀𝐓𝐍𝐀𝐌𝐄: ${news.result[i].catname}\n`
  textw +=`❒ 𝐓𝐈𝐓𝐋𝐄: ${news.result[i].title}\n`
  textw +=`❒ 𝐃𝐀𝐓𝐄: ${news.result[i].date}\n\n`
} 
        return await citel.reply(textw );
      await Void.sendMessage(citel.chat,  { image: { url: news.result[i].img}, caption : textw}, { quoted: citel })        
    })


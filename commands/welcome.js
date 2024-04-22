const { cmd } =require('..lib')
const nima = require("tech-news-scraper")

cmd({
        pattern: "tech",
        category: "news",
        react: "📰",

        filename: __filename
    },
    async(Void, citel,text) => {
   
      const news = await nima.allNews(
      
      let textw = `◉┉❮❮ 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙽 𝙼𝙳 𝚃𝙴𝙲𝙷 𝙽𝙴𝚆𝚂 ❯❯┉◉\n\n`;
for (let i=1; i<16; i++){
  textw +=`❒ 𝐍𝐎 ${news.result.no}\n`
  textw +=`❒ 𝐂𝐀𝐓𝐍𝐀𝐌𝐄: ${news.result.catname}\n`
  textw +=`❒ 𝐓𝐈𝐓𝐋𝐄: ${news.result.title}\n`
  textw +=`❒ 𝐃𝐀𝐓𝐄: ${news.result.date}\n`

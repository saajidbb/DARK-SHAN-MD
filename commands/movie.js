const { cmd, fetchJson, prefix } = require('../lib');
const { SinhalaSub }  = require('@sl-code-lords/movie-dl')

cmd(
    {
        pattern: "subdl",
        category:"downloader",
        react: "📽️",
        filename: __filename
    },
    async (Void, citel, text) => {
        if (!text) return
try {
let movie = await SinhalaSub.get_list.by_search(text)
    const sub = movie.results.title
      
      const cap `movie search results ${sub} echcharai`
      
      await Void.sendMessage(citel.chat, { caption: cap }, { quoted: citel })
        }
    }
 )

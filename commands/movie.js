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
let movie SinhalaSub.get_list.by_search(text)
      
      const cap `movie search results ${movie.results.title} echcharai`
      
      await Void.sendMessage(citel.chat, { caption: cap }, { quoted: citel })
        }
    }
 )

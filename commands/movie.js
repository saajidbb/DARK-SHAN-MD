const { cmd, fetchJson, prefix } = require('../lib');
const { SinhalaSub }  = require('@sl-code-lords/movie-dl')

cmd(
    {
        pattern: "movie",
        category:"downloader",
        react: "📽️",
        filename: __filename
    },
    async (Void, citel, text) => {
const input = `${text}` //movie or tvshow name
const movie await SinhalaSub.get_list.by_search(input)
      
      const cap `movie search results ${movie.results.title} echcharai`
      
      await Void.sendMessage(citel.chat, { caption: cap }, { quoted: citel })
      })

const { cmd } = require('../lib')
const wabetainfo = require("@sl-code-lords/wabetainfo")

cmd({
    pattern: 'wabeta',
    alias: ['wabetainfo'],
    desc: 'whatsapp beta infomation.',
    category: '🗞️news',
    react: "📃",
    use: '<wbi>',
  },
    async(Void, citel,text) => {
    const wbeta = await wabetainfo.latest();
    const cap = `*DARK SHAN MD WABETA INFO*\n\n
💎 *TITLE:* ${wbeta.title}\n
📅 *DATE:* ${wbeta.date}\n
📉 *PLATFORM:* ${wbeta.platform}\n
🪔 *URL:* ${wbeta.url}\n\n
📜 *DESCRIPTION:* ${wbeta.fulldesc}`

await Void.sendMessage(citel.chat, { image: { url: wbeta.image}, caption: cap},
                       { quoted: citel })
})

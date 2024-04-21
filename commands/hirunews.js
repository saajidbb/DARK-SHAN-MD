const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const Hiru = require('hirunews-scrap');
var api = new Hiru()

cmd({
    pattern: 'puka',
    desc: 'whatsapp beta infomation.',
    category: 'news',
    react: "📃",
  },
        async(Void, citel, text) => {

       try { const dswa = await api.MainNews();
             const res = dswa.results
             const descr = res.title
             const shan = res.news
             const time = res.date
             const img = res.thumb;

          const txt3 = await Void.sendMessage(citel.chat, {image: {url: img}, caption:  `📍➣*${descr}* 
●━━━━━━━━━━━━━━━━━━━━━●  
📃➣${shan} 
●━━━━━━━━━━━━━━━━━━━━━● 
📅➣${time}
●━━━━━━━━━━━━━━━━━━━━━●

🗞️ *News From hirunews.lk*

🔗 *Create By kushansewmina*

📍 *SL News*

👤 *Owner Number* :- http://wa.me/94772108460


●━━━━━━━━━━━━━━━━━━━━━●`}, { quoted: citel });
            

    await Void.sendMessage(citel.chat, { react: {
        text: "📰",
        key: txt3.key,
            } } );

    } catch (e) {
    console.log(e)
    citel.reply("❗ *" + e + "*")
  }
})

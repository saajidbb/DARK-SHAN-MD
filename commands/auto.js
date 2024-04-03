const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const {GDriveDl} = require('../lib/scraper.js')
const fbInfoVideo = require('fb-info-video'); 
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const cheerio = require('cheerio')
const fs  = require('fs-extra');
const axios= require('axios');
var videotime = 36000 // 300 min
var dlsize = 1000 // 1000mb

cmd({
            pattern: "test1",
            react: "🎧",
            desc: "Downloads audio from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            
                       let buttonMessaged ={
             image: {
                    url: anu.thumbnail,
               },
                caption: `

🎧 𝗞𝗜𝗡𝗚 𝗩𝗔𝗝𝗜𝗥𝗔 𝗡𝗢𝗡 🎧

🚨 *Youtube Player* 🌿
 ◨┉━━━━╚◭☬◮╝━━━━━┉◧


◯┉━━┅━━━━━━━━━┅━━━┉◯
*ඔබට අවශය අංකය පහතින් තෝරා මෙයට tag කර එවන්න *
 ◍┈─┈──┈─◈❁◈─┈─┈─┈─◍

*5.1 ╏ AUDIO* 🎧
*6.1 ╏ DOCUMENT* 📂

*👑 ©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ 👑* 
`,
                footer: tlang().footer,
                headerType: 4,
            };
            await Void.sendMessage(citel.chat, buttonMessaged, {
                quoted: citel,
            });

            

            


        }
    )
cmd({

            pattern: "5",           
            desc: "menu cmdlist",
            category: "_help",
            react: "👨‍💻",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

		try{
var msg = citel	
if(!msg.quoted) return 
if (!msg.quoted.isBaileys ) return 
if(!msg.quoted.caption) return console.log('ew')
text = msg.quoted.caption
if (!text.includes('🎧 𝗞𝗜𝗡𝗚 𝗩𝗔𝗝𝗜𝗥𝗔 𝗡𝗢𝗡 🎧'))  return 
text = text.split('╏📡 *Url* : ')[1].split('\n')[0]		
if(!text) return 
                    
                let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: 'https://telegra.ph/file/ac571cca14a9157f8e523.jpg',
                },

                caption: `
*Hi ! ඔයාට කොහොමද ඉතින්*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )


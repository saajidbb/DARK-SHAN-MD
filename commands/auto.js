const os = require('os');
const { tlang, botpic,cmd, runtime,Config,formatp } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')


cmd({

            pattern: "hi",           
            desc: "menu cmdlist",
            category: "_help",
            react: "👨‍💻",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
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


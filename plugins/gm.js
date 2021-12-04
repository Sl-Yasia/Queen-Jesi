/* Coded by @Sl-Yasia
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Queen-Jesi - Sl-Yasia
*/

const Jesi = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const GM = "it sends good morning message"
const GN = "it sends good night message"
const Config = require('../config');



if (Config.WORKTYPE == 'private') {
Jesi.adCmd({pattern: 'gm', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "❀🍃Good❀ ❀morning❀🥰❀";
    r_text[2] ="☘️𝐺𝑜𝑜𝑑 🌅𝑚𝑜𝑟𝑛𝑖𝑛𝑔 💐";
    r_text[3] ="🍃𝙶𝚘𝚘𝚍 🌻𝚖𝚘𝚛𝚗𝚒𝚗𝚐 🥰";
    r_text[4] ="🍀𝗚𝗼𝗼𝗱 😘𝗺𝗼𝗿𝗻𝗶𝗻𝗴 🌸";
    r_text[5] ="🌻𝓖𝓸𝓸𝓭 𝓶𝓸𝓻𝓷𝓲𝓷𝓰 💞";
    r_text[6] ="🌼🅖🅞🅞🅓 🅜🅞🅡🅝🅘🅝🅖 🐶";
    r_text[7] ="🍃Ⓖⓞⓞⓓ 🌈ⓜⓞⓡⓝⓘⓝⓖ 🥰";
    r_text[8] ="🔮𝙶𝚘𝚘𝚍 𝙼𝚘𝚛𝚗𝚒𝚗𝚐😘";
    r_text[9] ="🌺𝑮𝒐𝒐𝒅 𝑴𝒐𝒓𝒏𝒊𝒏𝒈🌺";
    r_text[10] ="𝔾𝕠𝕠𝕕 𝕄𝕠𝕣𝕟𝕚𝕟𝕘💫💫";
    r_text[11] ="💌𝕲𝖔𝖔𝖉 𝕸𝖔𝖗𝖓𝖎𝖓𝖌💌";


    var i = Math.floor(12*Math.random())

    await message.client.sendMessage(
        message.jid,(r_text[i]), MessageType.text);

    }));


Jesi.adCmd({pattern: 'gn', fromMe: true, deleteCommand: true, desc: GN,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "😘𝙂𝙤𝙤𝙙 🙈𝙣𝙞𝙜𝙝𝙩 💫✨";
        r_text[2] ="🤗𝓖𝓸𝓸𝓭 🧚‍♀𝓷𝓲𝓰𝓱𝓽 ❄️✨";
        r_text[3] ="🌌❡០០ᖱ 🌙⩎ɨ❡ϦƬ 🌎";
        r_text[4] ="😘ցօօժ ⭐️ղíցհԵ 💝";
        r_text[5] ="🌃Ꮐᝪᝪᗞ 🙈ᑎᏆᏀᕼᎢ 💫✨";
        r_text[6] ="🔮𝐆𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭🔮";
        r_text[7] ="🌺𝑮𝒐𝒐𝒅 𝑵𝒊𝒈𝒉𝒕🌺";
        r_text[8] ="💫𝘎𝘰𝘰𝘥 𝘕𝘪𝘨𝘩𝘵💫";
        r_text[9] ="💌Ⓖ︎Ⓞ︎Ⓞ︎Ⓓ︎ Ⓝ︎Ⓘ︎Ⓖ︎Ⓗ︎Ⓣ︎💌";
        r_text[10] ="💐🅶🅾🅾🅳 🅽🅸🅶🅷🆃💐";
        r_text[11] ="♕𝘎𝘰𝘰𝘥 𝘕𝘪𝘨𝘩𝘵♕";
        r_text[12] ="💟🄶🄾🄾🄳 🄽🄸🄶🄷🅃💟";
        r_text[13] ="❣ɢᴏᴏᴅ ɴɪɢʜᴛ❣";        

      
    
        var i = Math.floor(14*Math.random())
    
        await message.client.sendMessage(
            message.jid,(r_text[i]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        Jesi.adCmd({pattern: 'gm', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {
        
            var r_text = new Array ();
        
            r_text[1] = "❀🍃Good❀ ❀morning❀🥰❀";
            r_text[2] ="☘️𝐺𝑜𝑜𝑑 🌅𝑚𝑜𝑟𝑛𝑖𝑛𝑔 💐";
            r_text[3] ="🍃𝙶𝚘𝚘𝚍 🌻𝚖𝚘𝚛𝚗𝚒𝚗𝚐 🥰";
            r_text[4] ="🍀𝗚𝗼𝗼𝗱 😘𝗺𝗼𝗿𝗻𝗶𝗻𝗴 🌸";
            r_text[5] ="🌻𝓖𝓸𝓸𝓭 𝓶𝓸𝓻𝓷𝓲𝓷𝓰 💞";
            r_text[6] ="🌼🅖🅞🅞🅓 🅜🅞🅡🅝🅘🅝🅖 🐶";
            r_text[7] ="🍃Ⓖⓞⓞⓓ 🌈ⓜⓞⓡⓝⓘⓝⓖ 🥰";
            r_text[8] ="🔮𝙶𝚘𝚘𝚍 𝙼𝚘𝚛𝚗𝚒𝚗𝚐😘";
            r_text[9] ="🌺𝑮𝒐𝒐𝒅 𝑴𝒐𝒓𝒏𝒊𝒏𝒈🌺";
            r_text[10] ="𝔾𝕠𝕠𝕕 𝕄𝕠𝕣𝕟𝕚𝕟𝕘💫💫";
            r_text[11] ="💌𝕲𝖔𝖔𝖉 𝕸𝖔𝖗𝖓𝖎𝖓𝖌💌"; 
         
        
            var i = Math.floor(12*Math.random())
        
            await message.client.sendMessage(
                message.jid,(r_text[i]), MessageType.text);
        
            }));
        
        
        Jesi.adCmd({pattern: 'gn', fromMe: false, deleteCommand: true, desc: GN,}, (async (message, match) => {
        
                var r_text = new Array ();
            
                r_text[1] = "😘𝙂𝙤𝙤𝙙 🙈𝙣𝙞𝙜𝙝𝙩 💫✨";
                r_text[2] ="🤗𝓖𝓸𝓸𝓭 🧚‍♀𝓷𝓲𝓰𝓱𝓽 ❄️✨";
                r_text[3] ="🌌❡០០ᖱ 🌙⩎ɨ❡ϦƬ 🌎";
                r_text[4] ="😘ցօօժ ⭐️ղíցհԵ 💝";
                r_text[5] ="🌃Ꮐᝪᝪᗞ 🙈ᑎᏆᏀᕼᎢ 💫✨";
                r_text[6] ="🔮𝐆𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭🔮";
                r_text[7] ="🌺𝑮𝒐𝒐𝒅 𝑵𝒊𝒈𝒉𝒕🌺";
                r_text[8] ="💫𝘎𝘰𝘰𝘥 𝘕𝘪𝘨𝘩𝘵💫";
                r_text[9] ="💌Ⓖ︎Ⓞ︎Ⓞ︎Ⓓ︎ Ⓝ︎Ⓘ︎Ⓖ︎Ⓗ︎Ⓣ︎💌";
                r_text[10] ="💐🅶🅾🅾🅳 🅽🅸🅶🅷🆃💐";
                r_text[11] ="♕𝘎𝘰𝘰𝘥 𝘕𝘪𝘨𝘩𝘵♕";
                r_text[12] ="💟🄶🄾🄾🄳 🄽🄸🄶🄷🅃💟";
                r_text[13] ="❣ɢᴏᴏᴅ ɴɪɢʜᴛ❣";                

              
            
                var i = Math.floor(14*Math.random())
            
                await message.client.sendMessage(
                    message.jid,(r_text[i]), MessageType.text);
            
                }));
}   

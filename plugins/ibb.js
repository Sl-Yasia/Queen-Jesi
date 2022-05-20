/* Coded by @Sl-Yasia.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

const Jesi = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');

const yasi = "*ɪɴʙᴏx ᴍᴇꜱꜱᴀɢᴇ ɴᴏᴛ ᴀʟʟᴏᴡᴇᴅ! 🚫*"
const sl = ".block"

const Config = require('../config')
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;
async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
var inboxblock_var = ''
async function blockib() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        inboxblock_var = vars.INBOX_BLOCK
    });
}
blockib()

Jesi.adCmd({on: 'text', fromMe: false, onlyPm: true , deleteCommand: false}, (async (message, match) => {
    if (inboxblock_var == 'true' && message.jid !== '94741745737-1616356915@g.us') {
        let regex1 = new RegExp('.')
        let regex2 = new RegExp('a')
        let regex3 = new RegExp('e')
        let regex4 = new RegExp('i')
        let regex5 = new RegExp('o')
        let regex6 = new RegExp('u')
        
        if (regex1.test(message.message)) {
            await message.client.sendMessage(message.jid,yasi, MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,sl, MessageType.text);            
        } 
        else if (regex2.test(message.message)) {
            await message.client.sendMessage(message.jid,yasi, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);        
            await message.client.sendMessage(message.jid,sl, MessageType.text);            
        } 
        else if (regex3.test(message.message)) {
            await message.client.sendMessage(message.jid,yasi, MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,sl, MessageType.text);            
        } 
        else if (regex4.test(message.message)) {
            await message.client.sendMessage(message.jid,yasi, MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,sl, MessageType.text);
        } 
        else if (regex5.test(message.message)) {
            await message.client.sendMessage(message.jid,yasi, MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,sl, MessageType.text);                     
        } 
        else if (regex6.test(message.message)) {
            await message.client.sendMessage(message.jid,yasi, MessageType.text, {quoted: message.data })
            await message.client.sendMessage(message.jid,sl, MessageType.text);
        
      }
    }
}));

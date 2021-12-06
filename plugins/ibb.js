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
const Config = require('../config')

const IBB = "👑━━☽【♥️ ```Don't Come My Inbox...✧``` ♥️】☾━━👑"
 if (Config.IBB == 'true') {
Jesi.adCmd({on: 'text', fromMe: false, deleteCommand: false, onlyPm: true}, (async (message, match) => {
        let regexb1 = new RegExp('.')
        let regexb2 = new RegExp('a')
        let regexb3 = new RegExp('e')
        let regexb4 = new RegExp('i')
        let regexb5 = new RegExp('o')
        let regexb6 = new RegExp('u')

          if (regexb1.test(message.message)) {           
            await message.client.sendMessage(message.jid, '' + IBB + '', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          } 
        else if (regexb2.test(message.message)) {         
           await message.client.sendMessage(message.jid, '' + IBB + '', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb3.test(message.message)) {          
            await message.client.sendMessage(message.jid, '' + IBB + '', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
        else if (regexb4.test(message.message)) {         
            await message.client.sendMessage(message.jid, '' + IBB + '', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb5.test(message.message)) {           
            await message.client.sendMessage(message.jid, '' + IBB + '', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb6.test(message.message)) {           
            await message.client.sendMessage(message.jid, '' + IBB + '', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          
}));


}
     

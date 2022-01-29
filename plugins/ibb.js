/* Coded by @Sl-Yasia.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

const Jesi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')

const INBOX = "♥️```Don't Come My Inbox...✧```♥️"
if (Config.IBB == 'true') {
Jesi.adCmd({on: 'text', fromMe: false, onlyPm: true }, (async (message, match) => {
        let regexb1jesi = new RegExp('.')
        let regexb2jesi = new RegExp('a')
        let regexb3jesi = new RegExp('e')
        let regexb4jesi = new RegExp('i')
        let regexb5jesi = new RegExp('o')
        let regexb6jesi = new RegExp('u')
// Inbox Blocking System
          if (regexb1jesi.test(message.message)) {           
            await message.client.sendMessage(message.jid, '' + INBOX + '', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          } 
          else if (regexb2jesi.test(message.message)) {         
            await message.client.sendMessage(message.jid, '' + INBOX + '', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb3jesi.test(message.message)) {          
            await message.client.sendMessage(message.jid, '' + INBOX + '', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb4jesi.test(message.message)) {         
            await message.client.sendMessage(message.jid, '' + INBOX + '', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb5jesi.test(message.message)) {           
            await message.client.sendMessage(message.jid, '' + INBOX + '', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb6jesi.test(message.message)) {           
            await message.client.sendMessage(message.jid, '' + INBOX + '', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          
}));


}
     

/* Codded By @Sl-Yasia.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

const Jesi = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');
const Config = require('../config');
const LanguageDetect = require('languagedetect');
const QueenJesiStack = require('queenjesi-npm');
let wk = Config.WORKTYPE == 'public' ? false : true
const exec = require('child_process').exec;
const os = require("os");
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

var img_on = ''
async function imgon() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        img_on = vars.IMG_ON
    });
}
imgon()
Jesi.adCmd({pattern: 'img ?(.*)', fromMe: wk, desc: Lang.IMG_DESC}, (async (message, match) => {
    if (img_on == 'true' && message.jid !== '94741745737-1616356915@g.us') { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        
        var img_list = await QueenJesiStack.search_image(match[1])
        await message.client.sendMessage(message.jid, Lang.IMG.format(5, match[1]), MessageType.text);
        try {
          var img1 = await axios.get(img_list.link1, {responseType: 'arraybuffer'})
          await message.sendMessage(Buffer.from(img1.data), MessageType.image, { mimetype: Mimetype.png })
        } catch {
          return;
        }

        try {
          var img2 = await axios.get(img_list.link2, {responseType: 'arraybuffer'})
          await message.sendMessage(Buffer.from(img2.data), MessageType.image, { mimetype: Mimetype.png })
        } catch {
          return;
        }

        try {
          var img3 = await axios.get(img_list.link3, {responseType: 'arraybuffer'})
          await message.sendMessage(Buffer.from(img3.data), MessageType.image, { mimetype: Mimetype.png })
        } catch {
          return;
        }

        try {
          var img4 = await axios.get(img_list.link4, {responseType: 'arraybuffer'})
          await message.sendMessage(Buffer.from(img4.data), MessageType.image, { mimetype: Mimetype.png })
        } catch {
          return;
        }
      
        try {
          var img5 = await axios.get(img_list.link5, {responseType: 'arraybuffer'})
          await message.sendMessage(Buffer.from(img5.data), MessageType.image, { mimetype: Mimetype.png })
        } catch {
          return;
        }
    }));

/* Copyright (C) 2021 Sl-Yasia.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

let Jesi = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let request = require('request');
let got = require("got");
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('unvoice');
let wk = Config.WORKTYPE == 'public' ? false : true

   Jesi.adCmd({pattern: 'spdf ?(.*)', fromMe: wk, desc: 'Converts Site to PDF.' }, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, '*You must enter a link!*', MessageType.text);

    var webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, '```Converting Site to PDF```', MessageType.text);

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf, filename: 'queen-jesi.pdf'});

    }));    

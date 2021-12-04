/* Copyright (C) 2021 Sl-Yasia.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

const Jesi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');
const QueenJesiStack = require('queenjesi-npm')
const Language = require('../language');
const Lang = Language.getString('webss');
let wk = Config.WORKTYPE == 'public' ? false : true

Jesi.adCmd({pattern: 'ss ?(.*)', fromMe: wk, desc: Lang.SS_DESC}, (async (message, match) => {
  if (match[1] == '') return await message.client.sendMessage(message.jid,Lang.LİNK, MessageType.text);
  var bufferdata = ''
  try {
    var enc = await QueenJesiStack.shot(match[1])
    bufferdata = enc
  } catch {
    return await message.client.sendMessage(message.jid,'*❌ Error!*', MessageType.text);
  }
  await message.sendMessage(Buffer.from(bufferdata), MessageType.image, {mimetype: Mimetype.png, caption: Config.CPK})
}));

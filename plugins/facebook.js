/* Copyright (C) 2021 Sl-Yasia.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const Jesi = require('../events');
const Config = require('../config');
const QueenJesiStack = require('queenjesi-npm');
const axios = require('axios')
let wk = Config.WORKTYPE == 'public' ? false : true

var CLR_DESC = ''
var wr = ''
if (Config.LANG == 'EN') CLR_DESC = 'Downloads videos from Facebook.', wr = '*Please Enter a Valid Video Link!*'

Jesi.adCmd({pattern: 'fb ?(.*)', fromMe: wk, desc: CLR_DESC, usage: 'fb https://www.facebook.com/Google/videos/10156367314197838'}, (async (message, match) => {
  var reg = new RegExp(/^http(?:s?):\/\/(?:www\.|web\.|m\.)?facebook\.com\/([A-z0-9\.]+)\/videos(?:\/[0-9A-z].+)?\/(\d+)(?:.+)?$/, 'gm')
  var is_valid = reg.test(match[1])
  if (!is_valid) return await message.client.sendMessage(message.jid, wr, MessageType.text)
  var payload = await QueenJesiStack.facebook(match[1])
  var auth_message = await QueenJesiStack.facebook_message(Config.LANG)

  var video = await axios.get(payload.video, { responseType: 'arraybuffer'})
  var caption_message = auth_message.username + payload.username + '\n' +
    auth_message.title + payload.title + '\n' +
    auth_message.caption + payload.caption + '\n' +
    auth_message.play + payload.plays + '\n' +
    auth_message.like + payload.like + '\n' +
    auth_message.share + payload.share + '\n' +
    auth_message.comment + payload.comment + '\n' +
    auth_message.creation + payload.created_at
  await message.sendMessage(Buffer.from(video.data), MessageType.video, { caption: caption_message, mimetype: Mimetype.mp4 })
}));

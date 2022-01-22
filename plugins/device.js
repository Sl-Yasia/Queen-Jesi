/* Copyright (C) 2021 Sl-Yasia.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

const Jesi = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require ('axios')
const LOAD_ING = "*Searching details*"
const Config = require('../config');
const DEV = "It shows the details of device"

const Language = require('../language');
const Lang = Language.getString('scrapers');

if (Config.WORKTYPE == 'private') {
Jesi.adCmd({pattern: 'device ?(.*)', fromMe: true, desc: DEV , dontAddCommandList: true }, async (message, match) => {
    
const {data} = await axios(`https://zenzapi.xyz/api/gsmarena?query=${match[1]}&apikey=530eeb16e9`)
const { status, result } = data
if(!status) return await message.sendMessage('not found')
await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
let msg = '```'
msg +=  `NAME          :${result.judul}\n\n`
msg +=  `DATE          :${result.rilis}\n\n`
msg +=  `WEIGHT        :${result.ukuran}\n\n`
msg +=  `VERSION       :${result.type}\n\n`
msg +=  `ROM           :${result.storage}\n\n`
msg +=  `DISPLAY       :${result.display}\n\n`
msg +=  `RAM           :${result.ram}\n\n`
msg += `BATTERY        :${result.batrai}\n\n`
msg += `CPU            :${result.chipset}\n\n`
msg += `INCH           :${result.inchi}\n\n`
msg += `VIDEO MP       :${result.videoPixel}\n\n`
msg += `PIC            :${result.thumb}\n\n`
msg += `CAMERA MP      :${result.pixel}\n\n`
msg += '```'
 return await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
});
}
else if (Config.WORKTYPE == 'public') {
    Jesi.adCmd({pattern: 'device ?(.*)', fromMe: false, desc: DEV , dontAddCommandList: true }, async (message, match) => {
    
        const {data} = await axios(`https://zenzapi.xyz/api/gsmarena?query=${match[1]}&apikey=530eeb16e9`)
        const { status, result } = data
        if(!status) return await message.sendMessage('not found')
        await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
        let msg = '```'
        msg +=  `NAME          :${result.judul}\n\n`
        msg +=  `DATE          :${result.rilis}\n\n`
        msg +=  `WEIGHT        :${result.ukuran}\n\n`
        msg +=  `VERSION       :${result.type}\n\n`
        msg +=  `ROM           :${result.storage}\n\n`
        msg +=  `DISPLAY       :${result.display}\n\n`
        msg +=  `RAM           :${result.ram}\n\n`
        msg += `BATTERY        :${result.batrai}\n\n`
        msg += `CPU            :${result.chipset}\n\n`
        msg += `INCH           :${result.inchi}\n\n`
        msg += `VIDEO MP       :${result.videoPixel}\n\n`
        msg += `PIC            :${result.thumb}\n\n`
        msg += `CAMERA MP      :${result.pixel}\n\n`
        msg += '```'
         return await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
        });
    }

/* Copyright (C) 2021 Sl-Yasia

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

const Jesi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Jesi.adCmd({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "🎼━ 𝓠𝓾𝓮𝓮𝓷 𝓙𝓮𝓼𝓲  ━🎼\n\n\n➣ *Version:* ```2.0 Public```\n\n➣ *Branch:* ```Master```\n\n➣ *Host:* ```Aws```\n\n➣ *Developer:* ```Yasiya```\n\n➣ *For Help:* ```t.me/y_a_s_i_y_a```\n\n\n```╚╌»♥️ 𝓠𝓾𝓮𝓮𝓷 𝓙𝓮𝓼𝓲  ♥️«╌╝```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n   *𝙿𝚘𝚠𝚎𝚛𝚍 𝙱𝚢 𝚀𝚞𝚎𝚎𝚗𝙹𝚎𝚜𝚒*' })
     }
    }));

    Jesi.adCmd({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Jesi.adCmd({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "🎼━ 𝓠𝓾𝓮𝓮𝓷 𝓙𝓮𝓼𝓲  ━🎼\n\n\n➣ *Version:* ```2.0 Public```\n\n➣ *Branch:* ```Master```\n\n➣ *Host:* ```Aws```\n\n➣ *Developer:* ```Yasiya```\n\n➣ *For Help:* ```t.me/y_a_s_i_y_a```\n\n\n```╚╌»♥️ 𝓠𝓾𝓮𝓮𝓷 𝓙𝓮𝓼𝓲  ♥️«╌╝```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n   *𝙿𝚘𝚠𝚎𝚛𝚍 𝙱𝚢 𝚀𝚞𝚎𝚎𝚗𝙹𝚎𝚜𝚒*' })
     }
    }));

    Jesi.adCmd({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
} 

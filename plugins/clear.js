/* Copyright (C) 2021 Sl-Yasia.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const Jesi = require('../events');
const Config = require('../config');
const QueenJesiStack = require('queenjesi-npm');

var CLR_DESC = ''
lif (Config.LANG == 'EN') CLR_DESC = 'Clears all the messages from the chat.'

Jesi.adCmd({pattern: 'clear ?(.*)', fromMe: true, desc: CLR_DESC, usage: '.clear // .clear 947xxx // .clear 9474xxx-12345@g.us'}, (async (message, match) => {
    if (message.reply_message) {
        var client_id = message.reply_message.data.participant
        var payload = await QueenJesiStack.clear(Config.LANG, message.client.user.jid)
        await message.client.sendMessage(client_id, payload.Action, MessageType.text);
        await message.client.modifyChat(client_id, ChatModification.delete);
        await message.client.sendMessage(client_id, payload.Finish, MessageType.text);
    } else {
        if (match[1] == '') {
            var client_id = message.jid
            var payload = await QueenJesiStack.clear(Config.LANG, message.client.user.jid)
            await message.client.sendMessage(client_id, payload.Action, MessageType.text);
            await message.client.modifyChat(client_id, ChatModification.delete);
            await message.client.sendMessage(client_id, payload.Finish, MessageType.text);
        } else if (match[1] !== '') {
            let if_group = message.jid.includes('-') ? '' : '@s.whatsapp.net'
            var client_id = match[1] + if_group
            var payload = await QueenJesiStack.clear(Config.LANG, message.client.user.jid)
            await message.client.sendMessage(client_id, payload.Action, MessageType.text);
            await message.client.modifyChat(client_id, ChatModification.delete);
            await message.client.sendMessage(client_id, payload.Finish, MessageType.text);
        }
    }
}));

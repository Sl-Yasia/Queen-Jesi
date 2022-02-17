/* Copyright (C) 2021 Sl-Yasia.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

const Jesi = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const logo = fs.readFileSync('./media/menu.png')

const Language = require('../language');
const Lang = Language.getString('_jesi');

if (Config.WORKTYPE == 'private') {

    Jesi.adCmd({pattern: 'jesi ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            Jesi.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP +='' + Config.CMD_EMOJI+ ' *Cmd :* ' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '\n' : '\n');
                    if (command.desc !== '') CMD_HELP += Config.DESC_EMOJI+ ' *Desc :* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                    if (command.usage !== '') CMD_HELP += '*🀄️ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ' + command.warn + '\n\n';
                }
            );

            var MENUNW = '+Config.MENUMSG+'\n\n'+ CMD_HELP
            await message.client.sendMessage(message.jid,logo, MessageType.image, {mimetype: logo.png, caption: MENUNW} );

        } else {
            var CMD_HELP = '';
            Jesi.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.pattern];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP +='' + Config.CMD_EMOJI+ ' *Cmd :* ' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '\n' : '\n');
                        if (command.desc !== '') CMD_HELP += Config.DESC_EMOJI+ ' *Desc :* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                        if (command.usage !== '') CMD_HELP += '*🀄️ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                        if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ' + command.warn + '\n\n';
                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            var MENUNW = '+Config.MENUMSG+'\n\n'+ CMD_HELP
            await message.client.sendMessage(message.jid,logo, MessageType.image, {mimetype: logo.png, caption: MENUNW} );

        }
    }));
}
else if (Config.WORKTYPE == 'public') {

    Jesi.adCmd({pattern: 'jesi ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            Jesi.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP +='' + Config.CMD_EMOJI+ ' *Cmd :* ' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '\n' : '\n');
                    if (command.desc !== '') CMD_HELP += Config.DESC_EMOJI+ ' *Desc :* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                    if (command.usage !== '') CMD_HELP += '*🀄️ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ' + command.warn + '\n\n';
                }
            );
            var MENUNW = '+Config.MENUMSG+'\n\n'+ CMD_HELP
            await message.client.sendMessage(message.jid,logo, MessageType.image, {mimetype: logo.png, caption: MENUNW} );
        } else {
            var CMD_HELP = '';
            Jesi.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.pattern];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP +='' + Config.CMD_EMOJI+ ' *Cmd :* ' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '\n' : '\n');
                        if (command.desc !== '') CMD_HELP += Config.DESC_EMOJI+ ' *Desc :* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                        if (command.usage !== '') CMD_HELP += '*🀄️ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                        if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ' + command.warn + '\n\n';
                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            var MENUNW = '+Config.MENUMSG+'\n\n'+ CMD_HELP
            await message.client.sendMessage(message.jid,logo, MessageType.image, {mimetype: logo.png, caption: MENUNW} );
        }
    }));
}

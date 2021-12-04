/* Copyright (C) 2021 Sl-Yasia.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

const Jesi = require('../events');
const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('locate');


    Jesi.adCmd({pattern: 'locate', fromMe: true, desc: Lang.L_DESC, warn: Lang.L_WARN}, (async (message, match) => {

        var r_text = new Array ();
        r_text[0] = "degreesLatitude: 24.121231, degreesLongitude: 55.1121221";
        r_text[1] = "degreesLatitude: 8.838637, degreesLongitude: -13.721434";

        var i = Math.floor(2*Math.random())

        await message.sendMessage(`My Location! ${r_text[i]}`, MessageType.location);

}));

/* Copyright (C) 2022 Sl-Yasia.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

const Jesi = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var BGM_on = ''
    var BGM_off = ''
    if (config.LANG == 'EN') {
        l_dsc = 'Spam Kick Only Group Command'
        alr_on = '*Spam Kick Already Open!*'
        alr_off = '*Spam Kick is Currently Closed!*'
        BGM_on = '*Spam Kick Open Successfully 🎭*'
        BGM_off = '*Spam Kick Close Successfully ♥️*'
    }
    Jesi.adCmd({pattern: 'skick ?(.*)', fromMe: true, desc: l_dsc, usage: '.skick on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['SPAM_KICK']: 'false'
                    } 
                });
                await message.sendMessage(BGM_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['SPAM_KICK']: 'true'
                    } 
                });
                await message.sendMessage(BGM_on)
        }
    }));

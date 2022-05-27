/* Codded By @Sl-Yasia.

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
        l_dsc = 'Image Download Command On Off'
        alr_on = '*Image Download Already Open!*'
        alr_off = '*Image Download Currently Closed!*'
        BGM_on = '*Image Download Open Successfully 🎭*'
        BGM_off = '*Image Download Close Successfully ♥️*'
    }
    Jesi.adCmd({pattern: 'image ?(.*)', fromMe: true, desc: l_dsc, usage: '.image on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['IMG_ON']: 'false'
                    } 
                });
                await message.sendMessage(BGM_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['IMG_ON']: 'true'
                    } 
                });
                await message.sendMessage(BGM_on)
        }
    }));

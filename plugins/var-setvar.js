const Stefanie = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''
    var BGM_on = ''
    var BGM_off = ''
    var STICKER_on = ''
    var STICKER_off = ''

    if (config.LANG == 'EN') {
        l_dsc = 'turn on and turn off bgm. -bot owner command'
        Y_dsc = 'turn on and turn off bgm. -bot owner command'
        BGM_on = 'bgm option turned on!'
        BGM_off = 'bgm option turned off'
        STICKER_on = 'STICKER option turned on!'
        STICKER_off = 'STICKER option turned off'
        P_dsc = 'turn on & off anti-badword To remove members when they use bad words'        
    }
    if (config.LANG == 'TR') {
        l_dsc = 'bgm ഓണാക്കുക അല്ലെങ്കിൽ ഓഫ് ചെയ്യുക. -ബോട്ട് ഉടമ കമാൻഡ്'
        Y_dsc = 'bgm ഓണാക്കുക അല്ലെങ്കിൽ ഓഫ് ചെയ്യുക. -ബോട്ട് ഉടമ കമാൻഡ്'        
        BGM_on = 'bgm ഓപ്ഷൻ ഓണാക്കി'
        BGM_off = 'bgm ഓപ്ഷൻ ഓഫാക്കി'
        STICKER_on = 'STICKER option turned on!'
        STICKER_off = 'STICKER option turned off'
        
    }
    Stefanie.addCommand({pattern: 'voice ?(.*)', fromMe: true, desc: l_dsc, usage: '.voice on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGM_FILTER']: 'false'
                    } 
                });
                await message.sendMessage(BGM_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGM_FILTER']: 'true'
                    } 
                });
                await message.sendMessage(BGM_on)
        }
    }));

    Stefanie.addCommand({pattern: 'autosticker ?(.*)', fromMe: true, desc: Y_dsc, usage: '.autosticker on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_STICKER']: 'false'
                    } 
                });
                await message.sendMessage(STICKER_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_STICKER']: 'true'
                    } 
                });
                await message.sendMessage(STICKER_on)
        }
    }));

    Stefanie.addCommand({ pattern: 'caption ?(.*)', fromMe: true, desc: 'changes all captions', usage: '.caption *Made by Queen Stefanie*' }, (async (message, match) => {
        if (match[1] == '') return await message.sendMessage('NEED cA CAPTION')
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['ALL_CAPTION']: match[1]
            }
        });
        await message.sendMessage("NEW CAPTION UPDATED")
    }));

    Stefanie.addCommand({ pattern: 'handlers ?(.*)', fromMe: true, desc: 'changes handlers', usage: '.handler ^[.!] ' }, (async (message, match) => {
        if (match[1] == '') return await message.sendMessage('NEED A CAPTION')
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['ALL_CAPTION']: match[1]
            }
        });
        await message.sendMessage("NEW HANDLER UPDATED")
    }));


    Stefanie.addCommand({ pattern: 'botname ?(.*)', fromMe: true, desc: 'change your bot name', usage: '.botname *name* ' }, (async (message, match) => {
        if (match[1] == '') return await message.sendMessage('TYPE YOUR NEW BOT NAME')
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['BOT_NAME']: match[1]
            }
        });
        await message.sendMessage("NEW BOT NAME UPDATED")
    }));

Stefanie.addCommand({ pattern: 'theri  ?(.*)', fromMe: true, desc: 'change your theri commands', usage: '.theri command,command' }, (async (message, match) => {
        if (match[1] == '') return await message.sendMessage('TYPE YOUR NEW BOT NAME')
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['THERI_LIST']: match[1]
            }
        });
        await message.sendMessage("THERI LIST UPDATED")
    }));

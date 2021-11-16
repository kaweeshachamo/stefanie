/* Copyright (C) 2021 ws virus Fucker.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
VIRUS - FUCKER
*/

const Stefanie = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const Language = require('../language');
const Lang = Language.getString('stefanie');

const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;


 var W_PUB = ''
 var W_PRI = ''
 var W_ADM = ''
  if (config.LANG == 'EN') {

    W_ADM = '.tag Queen Stefanie Special Antispam opinion started❗\n\n✅1 :- WhatsApp Group link remover started\n✅2 :- Antispam option started\n✅3 :- Bad Word remover started\n✅4 :- special Inbox block opion started' 
    W_PUB = '.tag Queen Stefanie Special Antispam opinion started❗\n\n✅1 :- WhatsApp Group link remover started\n✅2 :- Antispam option started\n✅3 :- Bad Word remover started\n✅4 :- special Inbox block opion started'
    W_PRI = '.tag Queen Stefanie Special Antispam opinion started❗\n\n✅1 :- WhatsApp Group link remover started\n✅2 :- Antispam option started\n✅3 :- Bad Word remover started\n✅4 :- special Inbox block opion started'
    }

    if (config.LANG == 'SI') {

      W_ADM = '👩‍🦰ඔබේ Bot ඇඩ්මින් ලෙස ක්‍රියාකරයි.'
      W_PUB = '👩‍🦰ඔබේ Bot පොදු ආකාරයට ක්‍රියාකරයි.'
      W_PRI = '👩‍🦰ඔබේ Bot පෞද්ගලික ආකාරයට ක්‍රියාකරයි.'
    }

 Stefanie.addCommand({pattern: 'spoption ?(.*)', fromMe: true, dontAddCommandList: false, desc: Lang.WORK}, (async (message, match) => {
        if (match[1] == 'start') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['SUPER_OPINION']: 'true'
                    } 
                });
                await message.sendMessage(W_PUB)
        } else if (match[1] == 'stop') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['SUPER_OPINION']: 'false'
                    } 
                });
                await message.sendMessage(W_PRI)
         } else if (match[1] == 'private') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['SUPER_OPINION']: 'admin'
                    } 
                });
                await message.sendMessage(W_ADM)
        }
    }));

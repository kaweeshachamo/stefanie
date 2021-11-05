/* Copyright (C) 2021 srezz.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated*/

const Asena = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const got = require('got');
const { fetchJson, getBuffer } = require('./fetcher')

const Language = require('../language')
const Lang = Language.getString('search')

Asena.addCommand({ pattern: 'mod ?(.*)', fromMe: false, desc: "Finds mod verssion." },  (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a app name.```', MessageType.text, { quoted: message.data });
    var reply = await message.client.sendMessage(message.jid, '```searching```', MessageType.text, {quoted: message.data});
    
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/moddroid?apikey=https://github.com/BlackAmda&query=${match[1]}`)
                    get_result = get_result.result
                    ini_txt = "" 
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Link : ${x.link}\n\n` 
    
        }
    
   await message.client.sendMessage(message.jid,ini_txt,MessageType.text, {quoted: message.data });  
   
}));   

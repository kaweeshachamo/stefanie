const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('evaluators');
const SLang = Language.getString('conventer');
const NLang = Language.getString('scrapers');
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);

}
var alllink_var = ''
async function megalink() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        alllink_var = vars.WHATS_LINK_BLOCK
    });
}
megalink()
var ldc = ''
if (Config.LANG == 'AZ') ldc = '*Ba臒lant谋 A艧karland谋!*'
if (Config.LANG == 'TR') ldc = '*鈥嶭ink Tespit Edildi!*'
if (Config.LANG == 'EN') ldc = '*Link Detected!  link Not allowed here\n Action:Kick \n\n 馃晩馃晩*'
if (Config.LANG == 'SI') ldc = '*<===馃懇鈥嶐煢Stefanie===>*\n*馃鈥嶁檧锔廮Whatsapp Group Link Block System_\n\n*鉀斷穭喾氞董喾斷穩: 喾冟陡喾栢穭喽亨窔 Whatsapp Group Link 喽穭喽编陡喾� 喽氞痘 喽囙董.*\n*鈿∴稓喾娾€嵿痘喾掄逗喾忇陡喾忇痘喾娻稖喽�:喽夃穩喽穵 喽氞窉喽秽窊喽�.*'
if (Config.LANG == 'ID') ldc = '*Tautan Terdeteksi!*'
if (Config.LANG == 'PT') ldc = '*Link Detectado!*'
if (Config.LANG == 'RU') ldc = '*小褋褘谢泻邪 芯斜薪邪褉褍卸械薪邪!*'
if (Config.LANG == 'HI') ldc = '*啶侧た啶傕 啶曕ぞ 啶い啶� 啶氞げ啶�!*'
if (Config.LANG == 'ES') ldc = '*Enlace Detectado!*'
Asena.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (alllink_var == 'true') {
        let regex1 = new RegExp('bitly.com')
        let regex2 = new RegExp('https://chat.whatsapp.com')
        if (regex1.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        } 
        else if (regex2.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
        else if (message.message.match(/((?:[.]tyyfdr)\b)/i)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);
        }
    }
}));

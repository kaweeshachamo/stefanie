const WhataAlexa = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('evaluators');
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const unclespam = ('WarnWarnWarnWarnWarnWarnWarnWarnWarn\n\n\n_WarnWarnWarnWarnWarnWarnWarnWarnWarn_\n\n\n    Group    ' + Config.CK + '\n       \n\n\n\nWarnWarnWarnWarnWarnWarnWarnWarnWarn\n\nWarnWarnWarnWarnWarnWarnWarnWarnWarn            \n         ' + Config.CK + '\n    \n    \n\n\n\n\n\n\n1\n\n\n\n\n2\n            \n\n\n\n\n\n3\n\n\n\n\n\n' + Config.CK + '\n    \n\n\n\n             \nWarnWarnWarnWarnWarnWarnWarnWarnWarn\n          \n  WarnWarnWarnWarnWarnWarnWarnWarnWarn_\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nWarnWarnWarnWarnWarnWarnWarnWarnWarn');
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
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

WhatsAlexa.addCommand({on: 'text', fromMe: false, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    if (badkick_var == 'true' && message.jid !== '905524317852-1612300121@g.us') {
        let regex1 = new RegExp('ท้เึางืผ')
        let regex2 = new RegExp('๒')
        let regex3 = new RegExp('৭')
        let regex4 = new RegExp('୧')
        let regex5 = new RegExp('୪')
        let regex6 = new RegExp('୨')
        let regex7 = new RegExp('ดุ')
        let regex8 = new RegExp('ۦོ͢⇣͢✰͢↬Â')
        let regex9 = new RegExp('๑')
        let regex10 = new RegExp('ห')
        let regex11 = new RegExp('ฬ')
        let regex12 = new RegExp('ฆ')
        let regex13 = new RegExp('ۦོ͢⇣͢✰͢↬')
        let regex14 = new RegExp('๓')
        let regex15 = new RegExp('ฤ')
        let regex16 = new RegExp('ຼ์๘ຼ์')
        let regex17 = new RegExp('໒')
        let regex18 = new RegExp('๕')
        let regex19 = new RegExp('๘')
        let regex20 = new RegExp('ค')
        let regex21 = new RegExp('Ꮛ')
        let regex22 = new RegExp('cng=true?')
        let regex24 = new RegExp('ᾌᾋ')
        let regex25 = new RegExp('๑๑ภᏎ๒ฆ๗ฅฬ')
        let regex26 = new RegExp('send?phone=+6285920689754')
        let regex27 = new RegExp('B闦a闦n闦g闦O闦n闦e闦S闦T闦W闦')
        let regex28 = new RegExp('*☠️ Bang One Corona ☠️*  *☠️ Bang One Corona ☠️*')
        let regex29 = new RegExp('๘๘๘๘๘๘๘๘')
        let regex30 = new RegExp('*𝟵𝟵𝟵𝟵𝟵𝟵𝟵**𝟵𝟵𝟵𝟵𝟵𝟵𝟵*')
        let regex31 = new RegExp('*-*৪৪৪৪৪৪৪৪*-*')
        let regex32 = new RegExp('http://๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์๘ຼ์.li')
        let regex33 = new RegExp('8207 8206 8207')
        let regex34 = new RegExp('android:idowneradmin')
        let regex35 = new RegExp('㊠㊠㊠㊠㊠㊠㊠㊠㊠㊠㊠㊠㊠㊠㊠㊠')
        let regex36 = new RegExp('ཀྵཹ𒀮ྒྷ𒄅𒃯ᡃᡃᡃᡃཀྵమਘ')
        let regex37 = new RegExp('Ψ⒗蜇')
        

        if (regex1.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        } 
        else if (regex2.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
         else if (regex3.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex4.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex5.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex6.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex7.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex8.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex9.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex10.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex11.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex12.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex13.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex14.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex15.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex16.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex17.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex18.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex19.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex20.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex21.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex22.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex23.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex24.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex25.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex26.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex27.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex28.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex29.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex30.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex31.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex32.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex33.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex34.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex35.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex36.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }
        else if (regex37.test(message.message)) {
            var im = await checkImAdmin(message)
            if (!im) return;
            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {quoted: message.data })
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,unclespam, MessageType.text )
        }

    }
}));

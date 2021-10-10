                                                                                                                                                                      /*
**********************************************************************************
* This is Codded by Phaticusthiccy for Eva Artificial Intelligence on WhatsAsena *
* TOXIC DEVIL Has Now Re-Coded it to Alexa Artificial Intelligence on WhatsAlexa *
* With new Brain Cells. A Special Thanks to Phaticusthiccy                       *
* And Asena Team for Developing Asena and an AI called Eva for WhatsAsena.       *
* We are just recoding it with our own AI called Alexa                           *
* So the half credit of this File/Code is to Phaticusthiccy/WhatsAsena           *
**********************************************************************************
                                                                                                                                                                     */
let WhatsAlexa = require('../events');
let ffmpeg = require('fluent-ffmpeg');
let fs = require('fs');
let https = require('https');
let googleTTS = require('google-translate-tts');
let { MessageType, Mimetype, MessageOptions } = require('@adiwajshing/baileys');
let Language = require('../language');
let Lang = Language.getString('voicy');
let conf = require('../config');
let axios = require('axios')
let axiosdef = require("axios").default;
let os = require('os')
let translatte = require('translatte');
let LanguageDetect = require('languagedetect');
let lngDetector = new LanguageDetect();
let Heroku = require('heroku-client');
const heroku = new Heroku({
    token: conf.HEROKU.API_KEY
});
let baseURI = '/apps/' + conf.HEROKU.APP_NAME;

let wk = conf.WORKTYPE == 'public' ? false : true
var voicechat_dsc = ''
var reply_alexa = ''
if (conf.LANG == 'EN') voicechat_dsc = 'Starts Voice Chat to Alexa Artificial Intelligence.', reply_alexa = '*Reply to Any Voice Message!*'
if (conf.LANG == 'ML') voicechat_dsc = 'Alexa വോയ്‌സ് ചാറ്റിലേക്ക് ആരംഭിക്കുന്നു.', reply_alexa = '*ഏത് വോയ്‌സ് സന്ദേശത്തിനും മറുപടി നൽകുക!*'
if (conf.LANG == 'ID') voicechat_dsc = 'Mulai obrolan suara Alexa.', reply_alexa = '*Balas Pesan Suara Apapun!*'

const recognizeAudio = () => {
    const headers = new Headers({
        'Content-Type': 'audio/wav',
        "Authorization": `Bearer ${conf.WITAI_API}`,
        'Cache-Control': 'no-cache',
        'Transfer-Encoding': 'chunked'
    })
    const requestBody = {
        method: "POST",
        body: fs.readFileSync('output.wav'),
        headers: headers
    }
    return fetch("https://api.wit.ai/speech?v=20200219", requestBody)
        .then(response => response.json())
        .then(json => json._text)
}
const convertToWav = file => {
    return ffmpeg(file)
        .audioCodec('pcm_s16le')
        .format('wav')
        .save('output.wav')
}
var alexa_functionality = ''
async function alexa_functionality_f() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        alexa_functionality = vars.FULL_ALEXA
    });
}
alexa_functionality_f()

WhatsAlexa.addCommand({on: 'text', fromMe: wk, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    if (message.message.startsWith('Alexa') && conf.FULLALEXA !== 'true') {        
        var unique_ident = ''
        if (conf.WORKTYPE == 'private') {
            unique_ident = message.client.user.jid.split('@')[0]
        } else if (conf.WORKTYPE == 'public') {
            unique_ident = message.client.user.jid.split('@')[0] + 'PUBLIC' + message.data.participant.split('@')[0]
        }
        let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
        let aitalk_mode = ''
        if (message.message.includes('{normal}')) {
            aitalk_mode = 'raw'
        } else if (message.message.includes('{humanoid}')) {
            aitalk_mode = 'human'
        } else if (message.message.includes('{anime}')) {
            aitalk_mode = 'waifu'
        } else if (message.message.includes('{robot}')) {
            aitalk_mode = 'robo'
        } else if (message.message.includes('{private}')) {
            aitalk_mode = 'secret'
        }
        var finm = ''
        if (conf.WORKTYPE == 'private') {
            finm = message.message.replace('Alexa', '').replace(' ', '')
        } else if (conf.WORKTYPE == 'public') {
            finm = message.message.replace('Alexa', '').replace(' ', '').replace('@' + message.client.user.jid.split('@')[0], '')
        }
        var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
        if (ainame !== 'Asena') return;
        var ldet = lngDetector.detect(finm)
        var trmsg = ''
        if (ldet[0][0] !== 'english') {
            ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
            if ('text' in ceviri) {
                trmsg = ceviri.text
            }
        } else { trmsg = finm }
        var uren = encodeURI(trmsg)
        await axios.get('http://api.brainshop.ai/get?bid=160119&key=9plKqzmpWBGsKnKC&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
            var fins = ''                           
            if (conf.LANG !== 'EN') {
                ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                if ('text' in ceviri) {
                    fins = ceviri.text
                }
            } else { fins = response.data.cnt }
            await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
        })
    }
}));
WhatsAlexa.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
        if (conf.FULLALEXA == 'true' && ((!message.jid.includes('-')) || (message.jid.includes('-') && 
            (( message.mention !== false && message.mention.length !== 0 ) || message.reply_message !== false)))) {
            if (message.jid.includes('-') && (message.mention !== false && message.mention.length !== 0)) {
                message.mention.map(async (jid) => {
                    if (message.client.user.jid.split('@')[0] === jid.split('@')[0]) {
                        var unique_ident = ''
                        unique_ident = message.client.user.jid.split('@')[0] + 'PUBLIC' + message.data.participant.split('@')[0]
                        let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                        let aitalk_mode = message.message.includes('{normal}') ? 'raw' : 'waifu'                       
                        var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                        if (ainame !== 'Asena') return;
                        var finm = message.message
                        var ldet = lngDetector.detect(finm)
                        var trmsg = ''
                        if (ldet[0][0] !== 'english') {
                            ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                            if ('text' in ceviri) {
                                trmsg = ceviri.text
                            }
                        } else { trmsg = finm }
                        var uren = encodeURI(trmsg)
                        await axios.get('http://api.brainshop.ai/get?bid=160119&key=9plKqzmpWBGsKnKC&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                            var fins = ''                           
                            if (conf.LANG !== 'EN') {
                                ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                                if ('text' in ceviri) {
                                    fins = ceviri.text
                                }
                            } else { fins = response.data.cnt }
                            await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                        })
                    }
                })
            } else if (message.jid.includes('-') && message.reply_message !== false) {
                if (message.reply_message.jid.split('@')[0] === message.client.user.jid.split('@')[0]) {
                    var unique_ident = ''
                    unique_ident = message.client.user.jid.split('@')[0] + 'PUBLIC' + message.data.participant.split('@')[0]
                    let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                    var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                    if (ainame !== 'Asena') return;
                    var finm = message.message
                    var ldet = lngDetector.detect(finm)
                    var trmsg = ''
                    if (ldet[0][0] !== 'english') {
                        ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                        if ('text' in ceviri) {
                            trmsg = ceviri.text
                        }
                    } else { trmsg = finm }
                    var uren = encodeURI(trmsg)
                    await axios.get('http://api.brainshop.ai/get?bid=160119&key=9plKqzmpWBGsKnKC&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                        var fins = ''                           
                        if (conf.LANG !== 'EN') {
                            ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                            if ('text' in ceviri) {
                                fins = ceviri.text
                            }
                        } else { fins = response.data.cnt }
                        await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                    })
                }
            } else {
                var unique_ident = ''
                unique_ident = message.client.user.jid.split('@')[0] + 'PUBLIC' + message.data.participant.split('@')[0]     
                let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                if (ainame !== 'Asena') return;
                var finm = message.message
                var ldet = lngDetector.detect(finm)
                var trmsg = ''
                if (ldet[0][0] !== 'english') {
                    ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                    if ('text' in ceviri) {
                        trmsg = ceviri.text
                    }
                } else { trmsg = finm }
                var uren = encodeURI(trmsg)
                await axios.get('http://api.brainshop.ai/get?bid=160119&key=9plKqzmpWBGsKnKC&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                    var fins = ''                           
                    if (conf.LANG !== 'EN') {
                        ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                        if ('text' in ceviri) {
                            fins = ceviri.text
                        }
                    } else { fins = response.data.cnt }
                    await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                })
            }
        }

}));
WhatsAlexa.addCommand({ pattern: 'voicechat$', desc: voicechat_dsc, fromMe: wk }, (async (message, match) => {
    if (!message.reply_message) return await message.client.sendMessage(message.jid,reply_eva, MessageType.text, { quoted: message.data }) 
    try {
        const file = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        })
        
        convertToWav(file)
            .on('end', async () => {
                const recognizedText = await recognizeAudio()           
                var ssc = ''
                ceviri = await translatte(recognizedText, {from: 'auto', to: 'EN' });
                if ('text' in ceviri) {
                    ssc = ceviri.text
                }
                var unique_ident = ''
                if (conf.WORKTYPE == 'private') {
                    unique_ident = message.client.user.jid.split('@')[0]
                } else if (conf.WORKTYPE == 'public') {
                    unique_ident = message.client.user.jid.split('@')[0] + 'PUBLIC' + message.data.participant.split('@')[0]
                }
                let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Asena' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'       
                var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                if (ainame !== 'Asena') return;

                var son = encodeURI(ssc)
                await axios.get('http://api.brainshop.ai/get?bid=160119&key=9plKqzmpWBGsKnKC&uid=' + unique_ident + '&msg=' + son).then(async (response) => {
                    var trmsg = ''
                    cevir = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                    if ('text' in cevir) {
                        trmsg = cevir.text
                    }

                    let 
                        LANG = conf.LANG.toLowerCase(),
                        ttsMessage = trmsg,
                        SPEED = 1.0
                    var buffer = await googleTTS.synthesize({
                        text: ttsMessage,
                        voice: LANG
                    });

                    await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data})
                }).catch(async (error) => {
	            console.log(error)
                });
        });
    } catch (err) { console.log(err) }
}));
var fullalexa_dsc = ''
var already_on = ''
var already_off = ''
var succ_on = ''
var succ_off = ''
var wr_cmd = ''
if (conf.LANG == 'EN') {
    fullalexa_dsc = 'Turn your account into an Alexa Artificial Intelligence chatbot!'
    already_on = 'Alexa Artificial Intelligence was Already On.'
    already_off = 'Alexa artificial intelligence was Already Off.'
    succ_on = 'Successfully Turned on Alexa Artificial Intelligence! Please wait a bit! ✅'
    succ_off = 'Successfully Turned off Alexa Artificial Intelligence! Please wait a bit! ☑️'
    wr_cmd = "*You must enter 'on' to turn on & 'off' to turn off!*"
}
if (conf.LANG == 'ML') {
    fullalexa_dsc = 'നിങ്ങളുടെ അക്കൗണ്ട് ഒരു Alexa ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ് ചാറ്റ്ബോട്ടാക്കി മാറ്റുക!'
    already_on = 'Alexa ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ് ഇതിനകം ഓണായിരുന്നു..'
    already_off = 'Alexa ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ് ഇതിനകം ഓഫ് ആയിരുന്നു.'
    succ_on = 'Alexa ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ് ഓണാക്കി! ദയവായി അൽപ്പം കാത്തിരിക്കൂ! ✅'
    succ_off = 'Alexa ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ് വിജയകരമായി ഓഫാക്കി! ദയവായി അൽപ്പം കാത്തിരിക്കൂ! ☑️'
    wr_cmd = "*ഓണാക്കാൻ നിങ്ങൾ 'on' നൽകുകയും ഓഫാക്കാൻ 'off' നൽകുകയും വേണം!*"
}
if (conf.LANG == 'ID') {
    fullalexa_dsc = 'Ubah akun Anda menjadi chatbot Kecerdasan Buatan Alexa!'
    already_on = 'Kecerdasan Buatan Alexa Sudah Aktif.'
    already_off = 'Kecerdasan buatan Alexa Sudah Mati.'
    succ_on = 'Berhasil Mengaktifkan Kecerdasan Buatan Alexa! Harap tunggu sebentar! ✅'
    succ_off = 'Berhasil Mematikan Kecerdasan Buatan Alexa! Harap tunggu sebentar! ☑️'
    wr_cmd = "*Anda harus memasukkan 'on' untuk menghidupkan & 'off' untuk mematikan!*"
}

WhatsAlexa.addCommand({ pattern: 'fullalexa ?(.*)', desc: fullalexa_dsc, fromMe: true}, (async (message, match) => {
    if (match[1] == 'on') {
        if (alexa_functionality == 'true') {
            return await message.client.sendMessage(message.jid, '*' + already_on + '*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['FULL_ALEXA']: 'true'
                } 
            });
            await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text)
        }
    }
    else if (match[1] == 'off') {
        if (alexa_functionality !== 'true') {
            return await message.client.sendMessage(message.jid, '*' + already_off + '*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['FULL_ALEXA']: 'false'
                } 
            });
            await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
        }
    } else {
        return await message.client.sendMessage(message.jid, wr_cmd, MessageType.text)
    }
}));

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');

const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const ffmpeg = require('fluent-ffmpeg');

Asena.addCommand({pattern: 'sha', fromMe: false, desc: 'Find an unknown song'}, (async (message, match) => {
    if (message.reply_message === false) return await message.client.sendMessage(message.jid, '```REPLY TO A AUDIO!```  \n\n :Alpha', MessageType.text);
    var filePath = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
    var form = new FormData();
    ffmpeg(filePath).format('mp3').save('music.mp3').on('end', async () => {
        form.append('api_token', '04980e888fmshf7cc71dd321ef56p1b8033jsn7d33a926e8d8);
        form.append('file', fs.createReadStream('./music.mp3'));
        form.append('return', 'apple_music, spotify');
        var configs = {
            headers: {
                ...form.getHeaders()
            }
        }
        await axios.post('https://shazam.p.rapidapi.com/songs/detect/', form, configs).then(async (response) => {
            var res = response.data
            if (res === 'success') {
                await message.client.sendMessage(message.jid, `Title: ${res.title}\nArtist: ${res.artist}`, MessageType.text);
            } else {
                await message.client.sendMessage(message.jid, '```I COULDN`T FIND ANYTHING!``` \n\n :Alpha', MessageType.text);
            }
        }).catch((error) =>  {
            console.log(error);
        });
    });

}));

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const Ln = "Esthetic Photos"
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'esthetic ?(.*)', fromMe: false,dontaddCommandList: true }, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/estetikpic?apikey=${Config.TH}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));

}

else if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'esthetic ?(.*)', fromMe: true,dontaddCommandList: true }, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://api.${Config.CCRUN}.xyz/api/estetikpic?apikey=${Config.TH}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));

}

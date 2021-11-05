/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX API එකක් හරි උස්සලා තිබ්බොත් රෙපෝ එකටම Coppyright ගහනවා
*/

const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
let am = Config.WORKTYPE == 'public' ? false : true
const EFFECT_DESC = "*Change Text to effective images.*"
const NEED_WORD = "*You must inter some words...*"

Asena.addCommand({pattern: 'glitch ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/gtext?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

 Asena.addCommand({pattern: 'freefire ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikeyVI6j4t4wCbwoc6Deh5wgrJL2Kt1=&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'cfire ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
  
      }));

Asena.addCommand({pattern: 'light ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

Asena.addCommand({pattern: 'cslogo ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
  
    }));

Asena.addCommand({pattern: 's3d ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({ pattern: 'nlogo ?(.*)', fromMe: am,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://dynamic.brandcrowd.com/asset/logo/7f0254b2-49ae-4819-9107-47728665a65f/logo?v=4&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'neonlight ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'pornhub ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'bld ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: '3dtext ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

   }));

Asena.addCommand({pattern: 'nfire ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'ninjalogo ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'nglow ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'nleaves ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'nsky ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'buttonyt ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'bcwall ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'anony ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=2270813be0bf2e3fbf0415cc&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'vtext ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: Config.BOT_NAME})

    }));

    Asena.addCommand({pattern: 'ptext ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: Config.BOT_NAME})

    }));

    Asena.addCommand({pattern: 'colortext ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'emoji ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
        
    var uri = encodeURI(match[1])
    
    var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&emoji=' + uri, { responseType: 'arraybuffer' })
    
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'nsky ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/skytext?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'silk ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/silktext?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'sand ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/sandw?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'glowtext ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/glowtext?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'flametext ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/flametext?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'flowertext ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.${Config.ZLOCK}.xyz/api/flowertext?apikey=${Config.ZA}&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'blood ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/blood?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'luxury ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/luxury?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'xmas ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/xmas?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'toxic ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/toxic?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'njoker ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/joker?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'glossy ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/glossy-carbon?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'nethu ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/blood?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'metald ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/metal-dark?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'marvel ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/marvel?text1=${topText}&text2=${bottomText}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'space3d ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/space-3d?text1=${topText}&text2=${bottomText}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'horror ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/horror?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'dgold ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/deluxe-gold?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'nwolf ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/wolf?text1=Neotrox&text2=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'nxwolf ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/textprome/wolf2?text1=Neotrox&text2=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'halloween ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/ephoto/halloween?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
Asena.addCommand({pattern: 'galaxyangel ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/ephoto/galaxyangel?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'galaxysprout ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/ephoto/galaxysprout?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: '2sand ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/ephoto/sand?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'lightgerm ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/ephoto/lightgerm?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'yasuo ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/ephoto/yasuo?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'writegalaxy ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/ephoto/writegalaxy?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
Asena.addCommand({pattern: 'firedragon ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/ephoto/firedragon?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'viettel ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/ephoto/viettel?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'angelwing ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/ephoto/angelwing?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: 'galaxystyle ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/ephoto/galaxystyle?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Asena.addCommand({pattern: '06 ?(.*)', fromMe: am, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    var webimage = await axios.get(`https://${Config.A_HACKER}.herokuapp.com/api/ephoto/galaxystyle?text=${match[1]}&apikey=${Config.HACKER}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

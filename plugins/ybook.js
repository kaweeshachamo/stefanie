/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
Codded BY teenuX
Wa.me/+94766598862
*/

const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
const XN_UP = "*Please Wait Little Bit Im Uploding Your PDF⏱*"
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ Ebook URL එකක් ඇතුළත් කළ යුතුය*"
const XN_D = "*Downloading Your PDF📑*"

Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}58508`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '2book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}58511`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '3book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}58513`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '4book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}58514`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '5book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}58517`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '6book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}58519`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '7book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}58520`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '8book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}58523`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '9book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}58525`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '10book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}58528`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '11book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}58530`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '12book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}58533`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '13book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}58535`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '14book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}58536`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '15book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}58538`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '16book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}58543`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '17book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
     await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}58505`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '18book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}58503`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '19book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}59005`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '20book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}59009`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '21book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.client.sendMessage(message.jid,XN_D,MessageType.text);
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '22book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '23book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '24book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '25book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '26book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '27book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '28book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '29book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '30book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '31book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '31book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '32book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '33book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '34book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '35book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '36book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '37book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '38book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '39book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '40book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '41book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '42book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '43book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '44book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '45book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

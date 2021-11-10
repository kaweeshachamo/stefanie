const Stefanie = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')

// Inbox Block System
// kaweesha chamod

const INBO1 = "◁══👩‍🦰ꜱᴛᴇꜰᴀɴɪᴇ ʙᴏᴛ👩‍🦰══▷\n_Auto Block System_\n\n⏱Stataus:Active\n🚀Action:Block\n📑Description :-The owner of this account is operating automatic blocking system, so you are blocked...\n\nɢᴏᴏᴅ ʙʏᴇ"
 if (Config.INBOX_BLOCK == 'true') {
Stefanie.addCommand({on: 'text', fromMe: false, onlyPm: true }, (async (message, match) => {
        let regexb1ichu = new RegExp('.a')
        let regexb2ichu = new RegExp('.s')
        let regexb3ichu = new RegExp('.y')
        let regexb4ichu = new RegExp('.h')
        let regexb5ichu = new RegExp('sew')
        let regexb6ichu = new RegExp('.v')
        let regexb7ichu = new RegExp('.i')
        let regexb8ichu = new RegExp('.m')

          if (regexb1ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          } 
        else if (regexb2ichu.test(message.message)) {
          
           await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb3ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
        else if (regexb4ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb5ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb6ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb6ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb7ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb8ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + INBO1 + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          
}));


}

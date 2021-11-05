/* # Exclusively from VIRUS FUCKER Project 
# Do not use this fore any commercial thing
# Do not edit (Respect to the Devaoloper) 
# All rights reserved VIRUS FUCKER https://Wa.me/94779529221
# Credit : usufusta-whatsappAsena
*/

const Stefanie = require('../events');
const {MessageType,mimetype,Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('scrapers');
const ALang = Language.getString('amazone');
const capt = "*Stefanie bot Tiktok Downloader* 🕊"

if (Config.WORKTYPE == 'public') {
	
Stefanie.addCommand({ pattern: 'tiktok ?(.*)', fromMe: false, desc: ALang.TIKTOk}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Tiktok Link* ")

    await message.sendMessage('👻 *Tiktok Video Downloader* 🕊 \n'+Lang.DOWNLOADING_VIDEO)

				await axios
					.get(`https://zenzapi.xyz/api/downloader/tiktok?url=${link}&apikey=5c3ceca04a58`)
					.then(async(response) => {
						const {
							nowatermark
						} = response.data.result

						const linkdata = await axios.get(nowatermark, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
								caption: capt,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID TIKTOK LINK*"),
							)
					})
					
}) //pattern close
  
  Stefanie.addCommand({ pattern: 'tiktok ?(.*)', fromMe: true, dontAddCommandList:true}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Tiktok Link* ")

    await message.sendMessage('👻 *Tiktok Video Downloader* 🕊 \n'+Lang.DOWNLOADING_VIDEO)

				await axios
					.get(`https://zenzapi.xyz/api/downloader/tiktok?url=${link}&apikey=5c3ceca04a58`)
					.then(async(response) => {
						const {
							nowatermark
						} = response.data.result

						const linkdata = await axios.get(nowatermark, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
								caption: capt,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID TIKTOK LINK*"),
							)
					})
					
}) //pattern close
  
} /* public close*/

else if (Config.WORKTYPE == 'private') {
  
  Stefanie.addCommand({ pattern: 'tiktok ?(.*)', fromMe: true, dontaddCommandList:false}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Tiktok Link* ")

    await message.sendMessage('👻 *Tiktok Video Downloader* 🕊 \n'+Lang.DOWNLOADING_VIDEO)

				await axios
					.get(`https://zenzapi.xyz/api/downloader/tiktok?url=${link}&apikey=5c3ceca04a58`)
					.then(async(response) => {
						const {
							nowatermark
						} = response.data.result

						const linkdata = await axios.get(nowatermark, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
								caption: capt,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID TIKTOK LINK*"),
							)
					})
					
}) //pattern close
  
} 

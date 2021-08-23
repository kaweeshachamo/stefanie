const JessiApi = require('api-jessi');
const XTroid = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var desc_msg = ''
if (Config.LANG == 'EN') desc_msg = 'Make logos with unlimited access.'
if (Config.LANG == 'ID') desc_msg = 'Menampilkan alat pembuat teks dengan akses tak terbatas.'
if (Config.LANG == 'ML') desc_msg = 'പരിധിയില്ലാത്ത ആക്സസ് ഉള്ള ടെക്സ്റ്റ് മേക്കർ ഉപകരണങ്ങൾ കാണിക്കുന്നു.'
let wk = Config.WORKTYPE == 'public' ? false : true





WhatsAlexa.addCommand({pattern: 'cup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    LASIapi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/cup.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/cup.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

WhatsAlexa.addCommand({pattern: 'cemet ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    LASIapi.photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/cmth.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/cmth.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

WhatsAlexa.addCommand({pattern: 'cfl ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    LASIapi.photooxy("https://photooxy.com/art-effects/flower-typography-text-effect-164.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/cgs.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/cgs.jpg'), MessageType.image, { caption: Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true } })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));


WhatsAlexa.addCommand({pattern: 'cmg ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/cmg.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/cmg.jpg'), MessageType.image, { caption:  Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));


WhatsAlexa.addCommand({pattern: 'cgl ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/cgl.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/cgl.jpg'), MessageType.image, { caption:  Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));



WhatsAlexa.addCommand({pattern: 'cstn ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/cstn.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/cstn.jpg'), MessageType.image, { caption:  Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));


WhatsAlexa.addCommand({pattern: 'crod ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/road-warning-text-effect-878.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/crod.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/crod.jpg'), MessageType.image, { caption:  Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));


WhatsAlexa.addCommand({pattern: 'cgem ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/blue-gem-text-effect-830.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAlexa/cgem.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/cgem.jpg'), MessageType.image, { caption:  Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));



WhatsAlexa.addCommand({pattern: 'cbery ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
   if (match[1] === '') return await message.sendMessage(need);
   LASIapi.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html",
       `${match[1]}`
       ).then(async (data) => { 
         try { 
             var download = async(uri, filename, callback) => {
                 await request.head(uri, async(err, res, body) => {    
                     await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                 });
             };
             await download(`${data}`, '/root/WhatsAlexa/cbery.jpg', async() => {                          
                 await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/cbery.jpg'), MessageType.image, { caption:  Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
             })
         } catch(err) { 
             console.log(err)
         } 
   });
}));


WhatsAlexa.addCommand({pattern: 'ctrn ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
   if (match[1] === '') return await message.sendMessage(need);
   LASIapi.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html",
       `${match[1]}`
       ).then(async (data) => { 
         try { 
             var download = async(uri, filename, callback) => {
                 await request.head(uri, async(err, res, body) => {    
                     await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                 });
             };
             await download(`${data}`, '/root/WhatsAlexa/ctrn.jpg', async() => {                          
                 await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/ctrn.jpg'), MessageType.image, { caption:  Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
             })
         } catch(err) { 
             console.log(err)
         } 
   });
}));


WhatsAlexa.addCommand({pattern: 'cdem ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
   if (match[1] === '') return await message.sendMessage(need);
   LASIapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
       `${match[1]}`
       ).then(async (data) => { 
         try { 
             var download = async(uri, filename, callback) => {
                 await request.head(uri, async(err, res, body) => {    
                     await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                 });
             };
             await download(`${data}`, '/root/WhatsAlexa/cdem.jpg', async() => {                          
                 await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/cdem.jpg'), MessageType.image, { caption:  Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
             })
         } catch(err) { 
             console.log(err)
         } 
   });
}));



WhatsAlexa.addCommand({pattern: 'crob ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
   if (match[1] === '') return await message.sendMessage(need);
   LASIapi.textpro("https://textpro.me/robot-r2-d2-text-effect-903.html",
       `${match[1]}`
       ).then(async (data) => { 
         try { 
             var download = async(uri, filename, callback) => {
                 await request.head(uri, async(err, res, body) => {    
                     await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                 });
             };
             await download(`${data}`, '/root/WhatsAlexa/crob.jpg', async() => {                          
                 await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/crob.jpg'), MessageType.image, { caption:  Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
             })
         } catch(err) { 
             console.log(err)
         } 
   });
}));


WhatsAlexa.addCommand({pattern: 'cpink ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
   if (match[1] === '') return await message.sendMessage(need);
   LASIapi.textpro("https://textpro.me/online-3d-gradient-text-effect-generator-1020.html",
       `${match[1]}`
       ).then(async (data) => { 
         try { 
             var download = async(uri, filename, callback) => {
                 await request.head(uri, async(err, res, body) => {    
                     await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                 });
             };
             await download(`${data}`, '/root/WhatsAlexa/cpink.jpg', async() => {                          
                 await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/cpink.jpg'), MessageType.image, { caption:  Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
             })
         } catch(err) { 
             console.log(err)
         } 
   });
}));


WhatsAlexa.addCommand({pattern: 'csl ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
   if (match[1] === '') return await message.sendMessage(need);
   LASIapi.textpro("https://textpro.me/metal-dark-gold-text-effect-984.html",
       `${match[1]}`
       ).then(async (data) => { 
         try { 
             var download = async(uri, filename, callback) => {
                 await request.head(uri, async(err, res, body) => {    
                     await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                 });
             };
             await download(`${data}`, '/root/WhatsAlexa/csl.jpg', async() => {                          
                 await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/csl.jpg'), MessageType.image, { caption:  Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
             })
         } catch(err) { 
             console.log(err)
         } 
   });
}));


WhatsAlexa.addCommand({pattern: 'csand ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
   if (match[1] === '') return await message.sendMessage(need);
   LASIapi.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html",
       `${match[1]}`
       ).then(async (data) => { 
         try { 
             var download = async(uri, filename, callback) => {
                 await request.head(uri, async(err, res, body) => {    
                     await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                 });
             };
             await download(`${data}`, '/root/WhatsAlexa/csand.jpg', async() => {                          
                 await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/csand.jpg'), MessageType.image, { caption:  Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
             })
         } catch(err) { 
             console.log(err)
         } 
   });
}));



WhatsAlexa.addCommand({pattern: 'csun ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
   if (match[1] === '') return await message.sendMessage(need);
   LASIapi.textpro("https://textpro.me/1917-style-text-effect-online-980.html",
       `${match[1]}`
       ).then(async (data) => { 
         try { 
             var download = async(uri, filename, callback) => {
                 await request.head(uri, async(err, res, body) => {    
                     await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                 });
             };
             await download(`${data}`, '/root/WhatsAlexa/csun.jpg', async() => {                          
                 await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/csun.jpg'), MessageType.image, { caption:  Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
             })
         } catch(err) { 
             console.log(err)
         } 
   });
}));


WhatsAlexa.addCommand({pattern: 'cgrass ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
   if (match[1] === '') return await message.sendMessage(need);
   LASIapi.textpro("https://textpro.me/natural-leaves-text-effect-931.html",
       `${match[1]}`
       ).then(async (data) => { 
         try { 
             var download = async(uri, filename, callback) => {
                 await request.head(uri, async(err, res, body) => {    
                     await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                 });
             };
             await download(`${data}`, '/root/WhatsAlexa/cgrass.jpg', async() => {                          
                 await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/cgrass.jpg'), MessageType.image, { caption:  Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
             })
         } catch(err) { 
             console.log(err)
         } 
   });
}));

WhatsAlexa.addCommand({pattern: 'cchoco ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
   if (match[1] === '') return await message.sendMessage(need);
   LASIapi.textpro("https://textpro.me/chocolate-cake-text-effect-890.html",
       `${match[1]}`
       ).then(async (data) => { 
         try { 
             var download = async(uri, filename, callback) => {
                 await request.head(uri, async(err, res, body) => {    
                     await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                 });
             };
             await download(`${data}`, '/root/WhatsAlexa/cchoco.jpg', async() => {                          
                 await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlexa/cchoco.jpg'), MessageType.image, { caption:  Config.CK, contextInfo: { forwardingScore: 1000, isForwarded: true }})
             })
         } catch(err) { 
             console.log(err)
         } 
   });
}));

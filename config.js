const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_30_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgODAsXG4gICAgICAgIDEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI4LFxuICAgICAgICA2LFxuICAgICAgICA2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjMsXG4gICAgICAgIDM1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAzNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDU4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgODAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzMsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM3LFxuICAgICAgICA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTExLFxuICAgICAgICA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNCxcbiAgICAgICAgNzksXG4gICAgICAgIDczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDksXG4gICAgICAgIDE4NixcbiAgICAgICAgNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNMbEJXNEliVTdkSE5xS0x6TVNoZ08yV3JQMGtwNjhOVFlLVnJQajFxQkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInd4WnQ0TVhXUU15TWNSZzc5TGhTd1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjU0ZWQ3MDgtZDZlNi00OGM1LTgxZjgtY2FhYTAwNzc1NjE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNyxcbiAgICAgIDExMyxcbiAgICAgIDEzOCxcbiAgICAgIDE5LFxuICAgICAgOTQsXG4gICAgICA3NCxcbiAgICAgIDYxLFxuICAgICAgODcsXG4gICAgICAyMDAsXG4gICAgICAyMTYsXG4gICAgICAxOTksXG4gICAgICAyMTgsXG4gICAgICAxOSxcbiAgICAgIDc5LFxuICAgICAgMTc1LFxuICAgICAgMTE4LFxuICAgICAgMjQ3LFxuICAgICAgMTQzLFxuICAgICAgMTM3LFxuICAgICAgNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICA3OCxcbiAgICAgIDIyNCxcbiAgICAgIDE5NCxcbiAgICAgIDEyOCxcbiAgICAgIDE3MSxcbiAgICAgIDMyLFxuICAgICAgMjA5LFxuICAgICAgMjM2LFxuICAgICAgMjEyLFxuICAgICAgMjQ3LFxuICAgICAgMjIyLFxuICAgICAgODcsXG4gICAgICAxNDEsXG4gICAgICAxODIsXG4gICAgICAyMzYsXG4gICAgICA3NSxcbiAgICAgIDE1NixcbiAgICAgIDQ1LFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4UTJMTEVTN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwMDQ4NjU5MjoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInVtbXUgd2FsZWVkYSBEaWFtb25kIEdsb2JhbCBWZW50dXJlXCIsXG4gICAgXCJsaWRcIjogXCI5NjI2NzQ5NzY2ODc4ODoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJN0ltZDRHRU5qTDlia0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNQVHhCdmZneUkzQ2tJZVBiVXV4OSt1K3lWelh4S1cxTFArQ0ZFV2N4Z289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRy9TclQ0SUZIaDdOMUhpbGcvWER6K3AwU2FzUlo1RUFTOTFweFo0T3JkbFc3QWhVSk42RmZ2VGkvdzJubDAwS3NiTlkycWlnWHRnK2prZTB0Vnh5Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiLytJRXN3SGpvSFc0NzE5UUgyTlpBQ1VybEhaT0FFZkJLbkpORlloL3pLd0VOVSsvdDB4akROMkIwaUVabnAyM1NSQjZIRUNTekJZcEFBMk9HaUszRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMDQ4NjU5MjoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIwNzcwMjNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

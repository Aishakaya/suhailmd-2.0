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


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "SUHAIL_15_35_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM0LFxuICAgICAgICA2NyxcbiAgICAgICAgODYsXG4gICAgICAgIDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM4LFxuICAgICAgICA1NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MCxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQxLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2LFxuICAgICAgICA2OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM5LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDM0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI5LFxuICAgICAgICA4MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRGdybTJMWlVFVlh6Rmh4S0ZKSSsyQzc4VWcxc01xM0JWSzJDY05WNHBhYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMTZUZnBBVktTWHVyVXpNODRhWXd0d1wiLFxuICBcInBob25lSWRcIjogXCJjOTQ4Nzk3Yi00Yzk4LTQxYmQtYTM2MS1lZWZhMDhkODI5MmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMTExLFxuICAgICAgODYsXG4gICAgICA4NSxcbiAgICAgIDExMSxcbiAgICAgIDE5NyxcbiAgICAgIDIxMSxcbiAgICAgIDE5OSxcbiAgICAgIDE2OCxcbiAgICAgIDc0LFxuICAgICAgMTM2LFxuICAgICAgNDcsXG4gICAgICAyMDgsXG4gICAgICA4NixcbiAgICAgIDI1MSxcbiAgICAgIDIzNyxcbiAgICAgIDQxLFxuICAgICAgMjQyLFxuICAgICAgODIsXG4gICAgICAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY3LFxuICAgICAgMTc3LFxuICAgICAgMzQsXG4gICAgICAxMTUsXG4gICAgICAyNDgsXG4gICAgICA1MyxcbiAgICAgIDEwLFxuICAgICAgMTc4LFxuICAgICAgODYsXG4gICAgICAxMjIsXG4gICAgICA3NSxcbiAgICAgIDYsXG4gICAgICAxMDQsXG4gICAgICAyMjIsXG4gICAgICAzMSxcbiAgICAgIDU4LFxuICAgICAgMTAsXG4gICAgICA0LFxuICAgICAgMTAwLFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRKNDhOSFZWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAwNDg2NTkyOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwidW1tdSB3YWxlZWRhIERpYW1vbmQgR2xvYmFsIFZlbnR1cmVcIixcbiAgICBcImxpZFwiOiBcIjk2MjY3NDk3NjY4Nzg4OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kvSW1kNEdFS2Z2dGJzR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic1BUeEJ2Zmd5STNDa0llUGJVdXg5K3UreVZ6WHhLVzFMUCtDRkVXY3hnbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuQ0ltQUpJRzhWd2JaQkduOEorTzUxSzRNaExHYjAzd0RJUEx5b1hvSXc4VkFjZE9rdzh4d04vY2FINld0alF6RkNYcG44TWNjTlFQc05mMkREcmJDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUeU11ZXJTTkZGb3ZiOGxVNGs1QncySzIxMEt2bXQ3ZGtndkZBM3U0eUZhRUZ6eGk4aVhwUzl6aE1BYS9JN1JjYzJSZmNRZlVXVU9ZcWc5OVVTcGxoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTAwNDg2NTkyOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTIyNzMxMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",
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

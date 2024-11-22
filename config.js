//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "samkelvin1050@gmail.com";
global.location = "Accra, Ghana";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github = process.env.GITHUB || "https://github.com/Reverseking1/ReverseKing";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/QXbR0M0/IMG-2996.jpg";
global.devs = "233257514504";
global.sudo = process.env.SUDO || "233257514504";
global.owner = process.env.OWNER_NUMBER || "233257514504";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://imgur.com/a/p3Mb4qL.mp4";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "233257514504";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://reverseking-paircode.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0lQWVl5dUpFdUxXN3c4T29DWG9EQ2lRR3oyUkN3NnZHU3RQa0JWNU9sWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOG12cWNYNjFmVzN2K1VXNjVHUVlqb1VRSytmd01NWFpCTnUvZUVUbVh3TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSUM2NDZ6YzcwNDJqUUFhV2VpM0VkN01jMDR1THZhVUp5ZTB0eThMb25FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVU3NSaElTYVM4eGxVVkQ4cWpqcjhKZ1hQQ014aUFPR2FhTHhjQTl0RTJBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhEaGc0eVdhYlBNc2gxTGNFdWpyMExDT3MrNUZIL2JsbDhRcXpWcWVUME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNJOFNuZkpINVZna285cnNHUkt6V0dqaXdBU29IeENHcDFPN3NGakw4QUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUVCeEJnR0tyOUhsZUR3NVYzbWx0bmJnTU42M216elVlOUN4YVBtR3JGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0w1UFhQMW8zUnBGS1BLbVVZWGtud0FQdlkxaHNiYnV5Mmk2OXdlTWExVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml5TG13Vng0ZVQyMU9rTG9VNHkrempTMnFwbDk0bklBTG14QW1Fakc5S0R3UEdhbktVQXdnUzhCdDlOUEdhMmEva0FFaWdZcVIwV3g4dUFjMHFxSEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJheVZpQVdEU0xIUExGWThveEdDd0Vsem93a2l6YkNwLzdVMzZFR09IbEowPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4c3ZZQm43N1NtZUZhaU1JVWJjMnVBIiwicGhvbmVJZCI6IjJkYWVkYjNjLTdiYTktNDFiNC1hNjRiLTA0NGM5MWI5ODY3MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TkJieHdISVNIRDBuYlN6dUluQ2s1MEFKb0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXBESVZTUHRrdEk2NkFHbWZRTUpsQmhXL2gwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iks2RzJTU1ZBIiwibWUiOnsiaWQiOiIyMzQ4MTAxNjYwNDQwOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoidmljdG9yIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJMnh6NEVDRUlERWc3b0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0S2lGZVpGL3owcnIvTW5PT0Q2cndtVXVZbloyUXdzbjlnMUN6S3lncVg4PSIsImFjY291bnRTaWduYXR1cmUiOiI4SHFFYXoxOC91emU1dFhBNDg3amdMT3JSZUo2K012L1lIYVhIaGo5UTgxUDBDVVRJLzVZRTRFbndDYmxNa09rTnZTZzhiZS83ZmpQUDArcFVjdy9BZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTFZSRXlONG1PTTZmSDBhMzJVL3p0SFYrSkxKVEVUMDFaZ3hpVTRQamNWNkRJTlBjQlltcDRBSnZ0eXBuN2VGS3NMNmQzVld5cm1DKy81ellvSVl2Q1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTAxNjYwNDQwOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlNvaFhtUmY4OUs2L3pKempnK3E4SmxMbUoyZGtNTEovWU5Rc3lzb0tsLyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjMwNTQyM30=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`REVERSEKING™`",
  author: process.env.PACK_AUTHER || "REVERSEKING",
  packname: process.env.PACK_NAME || "REVERSEKING",
  botname: process.env.BOT_NAME || "ReverseKing",
  ownername: process.env.OWNER_NAME || "REVERSEKING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "R E V E R S E K I N G").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

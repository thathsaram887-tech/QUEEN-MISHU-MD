const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/fbr9zh.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "*𝓗ᴇʟʟᴏᴡ (ᴍɪꜱʜᴜ-ᴍᴅ) ᴀɴɪᴠᴇ ɴᴏᴡ 😻*",
BOT_OWNER: '94771043762',  // Replace with the owner's phone number



};

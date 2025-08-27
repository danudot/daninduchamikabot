const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Kc8RWACa#H6cg2bD0vHsDa8NDIe_3If0Q-szjiIMHtcXmGgkOBEA",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/danudot/daninduchamikabot/blob/main/IMAGES/WhatsApp%20Image%202025-08-27%20at%2018.42.55_5284b2b4.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 KING-DANU Is Alive Now😍*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};

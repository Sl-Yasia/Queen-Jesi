/* Copyright (C) 2021 Sl-Yasia.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen-Jesi - Sl-Yasia
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './queenjesi.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v2.0.0 Public Stable',
    CHANNEL: 'https://t.me/SLYASIYA',
    SESSION: process.env.A_JESI_SESSION === undefined ? '' : process.env.A_JESI_SESSION,
    ANTILINK: process.env.ANTI_LINK === undefined ? 'false' : process.env.ANTI_LINK,
    ANTILINKMSG: process.env.ANTILINK_MESSAGE === undefined ? 'default' : process.env.ANTILINK_MESSAGE,
    AUTOBIO: process.env.AUTO_BIO === undefined ? 'false' : process.env.AUTO_BIO,
    PROXY: process.env.PROXY === undefined ? 'false' : process.env.PROXY,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://i.imgur.com/Z5fxCpm.jpg' : process.env.ALIVE_LOGO,
    CPK: process.env.CPK === undefined ? '✰◉𝓒𝓻𝓮𝓪𝓽𝓮𝓭 𝓑𝓽 𝓠𝓾𝓮𝓮𝓷 𝓙𝓮𝓼𝓲◉✰' : process.env.CPK,
    VCPK: process.env.VCPK === undefined ? '🎼━ ♥️ 𝓠𝓾𝓮𝓮𝓷 𝓙𝓮𝓼𝓲 ♥️ ━🎼' : process.env.VCPK,
    MENUMSG: process.env.MENU_NAME === undefined ? '♚◉𝓠𝓾𝓮𝓮𝓷 𝓙𝓮𝓼𝓲◉♚' : process.env.MENU_NAME,
    WEL_GIF: process.env.WELCOME_GIF === undefined ? 'https://telegra.ph/file/8e40b48744f52b20b2264.mp4' : process.env.WELCOME_GIF,
    BYE_GIF: process.env.GOODBYE_GIF === undefined ? 'https://telegra.ph/file/3628de591df2f2b1e91ee.mp4' : process.env.GOODBYE_GIF,
    SONG_UP: process.env.SONGUP_MSG === undefined ? '*Uploading Your Song...*' : process.env.SONGUP_MSG,
    SONG_DL: process.env.SONGDOWN_MSG === undefined ? '*Downloding Your Song...*' : process.env.SONGDOWN_MSG,
    VID_UP: process.env.VIDEOUP_MSG === undefined ? '*Uploading Your Video...*' : process.env.VIDEOUP_MSG,
    VID_DL: process.env.VIDEODOWN_MSG === undefined ? '*Downloding Your Video...*' : process.env.VIDEODOWN_MSG,
    IBB: process.env.INBOX_BLOCK === undefined ? 'false' : process.env.INBOX_BLOCK,
    VIRUSKICK: process.env.SPAM_KICK === undefined ? 'false' :process.env.SPAM_KICK,
    BADKICK: process.env.BAD_KICK === undefined ? 'false' :process.env.BAD_KICK,
    LINKBAN: process.env.LINK_BAN === undefined ? 'false' :process.env.LINK_BAN,
    CMD_EMOJI: process.env.CMD_EMOJI === undefined ? '♥️' :process.env.CMD_EMOJI,
    DESC_EMOJI: process.env.DESC_EMOJI === undefined ? '🔮' :process.env.DESC_EMOJI,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    AIJESI: process.env.AI_JESI === undefined ? 'false' : process.env.AI_JESI,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './queenjesi.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "94741745737-1612300121",
    SUPPORT2: "94741745737-1617736751",
    SUPPORT3: "94741745737-1621015274",
    SUPPORT4: "94741745737-1625319286"
};

const telegramApi = require('node-telegram-bot-api');
const token = '5636675071:AAErQXS-JvZhbLOIYYno5JmNqLzKy-FzE_E';

const bot = telegramApi(token, {polling: true});

import TeleBot from "telebot";

const bot2 = telegramApi(token, {polling: true});

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot.on('text', msg => msg.reply.text(msg.text))

export default bot


bot2.on('message', msg => {
    console.log(msg);
});

bot2.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if(text === '/start') {
        bot.sendMessage(chatId, 'привет мир')
    }
});

const telegramApi = require('node-telegram-bot-api');
const token = '5636675071:AAErQXS-JvZhbLOIYYno5JmNqLzKy-FzE_E';
import TeleBot from "telebot";

const bot = telegramApi(token, {polling: true});

const bot2 = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot2.on('text', msg => msg.reply.text(msg.text))

export default bot2

bot.on('message', msg => {
    console.log(msg);
});

bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if(text === '/start') {
        bot.sendMessage(chatId, 'привет мир')
    }
});

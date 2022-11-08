const telegramApi = require('node-telegram-bot-api');
const token = '5636675071:AAErQXS-JvZhbLOIYYno5JmNqLzKy-FzE_E';

const bot = telegramApi(token, {polling: true});


bot.on('message', msg => {
    console.log(msg);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var telegraf_1 = require("telegraf");
require("dotenv/config");
var bot = new telegraf_1.Telegraf(process.env.VITE_BOT_TOKEN);
bot.start(function (ctx) {
    ctx.reply("https://t.me/dailySync_bot/DailySync");
});
bot.launch();

import { Telegraf, Context } from "telegraf";
import 'dotenv/config'

interface MyContext extends Context {
  myProp?: string;
  myOtherProp?: number;
}

const bot = new Telegraf<MyContext>(process.env.VITE_BOT_TOKEN as string);

bot.start((ctx) => {
  ctx.reply("https://t.me/dailySync_bot/DailySync");
});

bot.launch();

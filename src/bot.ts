import { Telegraf, Context, Markup } from "telegraf";
import 'dotenv/config'

interface MyContext extends Context {
  myProp?: string;
  myOtherProp?: number;
}

const bot = new Telegraf<MyContext>(process.env.VITE_BOT_TOKEN as string);

bot.start((ctx) => {
  ctx.reply("https://t.me/dailySync_bot/DailySync");
});

bot.command("quit", async (ctx) => {
  // Explicit usage
  await ctx.telegram.leaveChat(ctx.message.chat.id);

  // Using context shortcut
  await ctx.leaveChat();
});

bot.on('message', async (ctx) => {
  await ctx.telegram.sendMessage(
    ctx.message.chat.id,
    `Hello ${ctx.from.username}`,
    {
      reply_markup: Markup.inlineKeyboard([
        Markup.button.callback("Click me", "hey_there"),
      ]).reply_markup,
    }
  );
});

bot.action("hey_there", async (ctx) => {
  await ctx.reply("Hey Natasha!");
});

bot.on("callback_query", async (ctx) => {
  // Explicit usage
  await ctx.telegram.answerCbQuery(ctx.callbackQuery.id);

  // Using context shortcut
  await ctx.answerCbQuery();
});

bot.launch();

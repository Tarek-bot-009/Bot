const fs = require("fs-extra");
module.exports = {
config: {
		name: "goibot",
    version: "1.0",
		author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
		countDown: 5,
		role: 0,
		shortDescription: "badol",
		longDescription: "Bot Will Reply You In Engish/Bangla Language",
		category: "no prefix",
		guide: {
      en: "{p}{n}",
    }
	},

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {
  
  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var Messages = ["আরেক জনের ইনবক্সে সালাম না দিয়ে, রাস্তা ঘাটে মুরব্বিদের সালাম দিস ভাই সওয়াব পাবি🙂🙂", "যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.!🙂", "Yes Dear, I Am Here...😗", "এমন না'রী হও যেনো কোনো পুরুষ তোমাকে পেয়ে শতবার রবের দর'বারে শুক'রিয়া আদায় করে", "-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস তারেক সরকার  ধরতে পারছে না-🐸🥲", "- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস Tarek কে সন্দেহ করে.!🐸", "নে আমার বস তারেক এর মেসেঞ্জার লিংক ওরে মেসেজ দে https://m.me/tarek.20.king", "সানিলিওন  আফারে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি য়ামারে খেয়ে দিবা সেই ভয় দেখাও ননসেন বেডি..!🥱", "পেঁপে আম জাম 10-12 টা প্রেম করাই মেয়েদের কাম", "- বন্ধুর সাথে ছেকা খাওয়া গান শুনতে শুনতে-🤧 -এখন আমিও বন্ধুর 𝙴𝚇 কে অনেক 𝙼𝙸𝚂𝚂 করি-🤕🥺", "আমাকে এতো না ডেকে আমার বস তারেক কে একটা গার্লফ্রেন্ড দেও", "°°💜🌸আ‌‌পনি যেটা হারাইছেন ?সেটা নিয়ে যদি আফসোস করেন তাহলে সব হারাইতে হবে🙂", "ভেঙে মোর ঘরের তালা কেউ তারেক কে নিয়ে পালা", "~লিখতে পারি না বলে তোমাকে তুলি না কলমে, যে ব্যথা যায় না দেখা তা কি করে সারাবে মলমে!🙂", "পুরুষের ভালোবাসা বুজতে গেলে নারী তোমাকে হাজার বার জন্ম নিতে হবে..!😅🥺🥀", "আমার সব কমান্ড দেখতে *help টাইপ করুন ✅", "জান মেয়ে হলে চিপায় আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-", "আদেশ করুন যাহাপানা 😎", "আবার যদি আমারে বট কইয়া ডাক দেছ তাইলে তোর বিয়ে হবে না 🫤😏", "ami tarek er personal assistant", "তুই বট তোর নানি বট 😤 তোর কত বড় সাহস তুই আমারে বট কস 😤 তোর টা খাই নাকি পড়ি যে তুই আমারে বট কস 😤", "আপনার কি চরিত্রে সমস্যা যে এতো বার আমাকে ডাকতেছেন 🤨", "ডাকছোত কেন ফাস্ট কো 😒", "জান তোমার অলিতে গলিতে চিপায় চুপাই উম্মাহ 🫦🥵"];

    var B4D9L = Messages[Math.floor(Math.random() * Messages.length)]
  
  if (event.body.indexOf("Bot") == 0 || (event.body.toLowerCase() == "বট") || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: ` ${B4D9L}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};

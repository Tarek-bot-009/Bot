module.exports = {
 config: {
	 name: "i miss you",
	 version: "1.0",
	 author: "♕𝙼𝟿𝙷𝟺𝙼𝙼𝟺𝙳☞𝙱𝟺𝙳𝟿𝙻♕",//**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "i miss you") {
 return message.reply({
 body: "I Miss You To Baby🥰",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/5BQZ5mW.jpeg")
 });
 }
 }
}

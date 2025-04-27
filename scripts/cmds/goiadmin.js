const encodedAuthor = "QmFZaWppZA=="; // "BaYjid" in Base64
const decodedAuthor = Buffer.from(encodedAuthor, 'base64').toString('utf-8');

// Optional Warning Only (No throw)
if (decodedAuthor !== "BaYjid") {
	console.warn("⚠️ Warning: Author mismatch. Only 'BaYjid' is original author of this module.");
}

const config = {};
Object.defineProperties(config, {
	name: { value: "goiadmin", writable: true, enumerable: true },
	author: { value: decodedAuthor, writable: false, enumerable: true, configurable: false },
	role: { value: 0, writable: true },
	shortDescription: { value: "Owner Mention Protection", writable: true },
	longDescription: { value: "Prevents unnecessary mentions of BaYjid", writable: true },
	category: { value: "BOT", writable: true },
	guide: { value: "{pn}", writable: true }
});

module.exports = {
	config,

	onChat: function({ api, event }) {
		const authorID = "61550691880141"; // BaYjid's ID

		if (event.senderID !== authorID) {
			const mentionedIDs = Object.keys(event.mentions || {});
			if (mentionedIDs.includes(authorID)) {
				const replies = [
					"╔════════════════════╗\n║ 🌟 বস, ♡ Safwan ♡ একটু ব্যস্ত আছেন! ⏳\n║ 🕶️ ডাইরেক্ট আসুন, পরে কথা বলবো! 💬\n╚════════════════════╝",
					"╔════════════════════╗\n║ 😎 ♡ Safwan ♡ এখন বিজি! 📌\n║ 🙄 মেনশন না দিয়ে কথা বলো! 😏\n╚════════════════════╝",
					"╔════════════════════╗\n║ 💌 ♡ Safwan ♡ কে ইনবক্স করুন! 💕\n║ 💢 মেনশন না করলেই প্যাঁচ! 😎\n╚════════════════════╝",
					"╔════════════════════╗\n║ ⏳ ♡ Safwan ♡ এখন ব্যস্ত! ⚡\n║ 👨‍💻 দয়া করে অপেক্ষা করুন! 🕒\n╚════════════════════╝",
					"╔════════════════════╗\n║ 🚀 ♡ Safwan ♡ is working! 💻\n║ 📌 Try again later! 😊\n╚════════════════════╝"
				];

				const randomReply = replies[Math.floor(Math.random() * replies.length)];
				return api.sendMessage({ body: randomReply }, event.threadID, event.messageID);
			}
		}
	},

	onStart: async function() {
		console.log("✅ goiadmin Module Loaded Successfully!");
	}
};

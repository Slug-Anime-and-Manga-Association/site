// why is this not a .json? fetch() is too much work
const artistInfo = {
	janchii: {
		name: "jam.chii_",
		bio: "",
		artworkCount: 3,
		socials: {
			instagram: "https://www.instagram.com/jam.chii_/",
		},
	},
	infatrash: {
		name: "InfiniteTra5h",
		bio: "",
		artworkCount: 4,
		socials: {
			instagram: "https://www.instagram.com/infinitetra5h",
		},
	},
	wightfox: {
		name: "alittlewightfox",
		bio:
			"Hey I’m Elia or ALittleWightFox! I’m an amateur artist who’s in it for the love of the game. I’m into a lot of mainstream stuff but also like to play into niches a little. If you see me come say hi!",
		artworkCount: 6,
		socials: {
			twitter: "https://x.com/alittlewightfox",
			tumblr: "https://www.tumblr.com/alittlewightfox",
			instagram: "https://www.instagram.com/alittlewightfox",
		},
	},
	oerin: {
		name: "03RIN",
		bio: "hi im 03RIN, i love drinking matcha and reading fanfiction (๑˃̵ᴗ˂̵)",
		artworkCount: 4,
		socials: {
			twitter: "https://x.com/03rin__",
		},
	},
	steelfirns: {
		name: "Steelfirns",
		bio:
			"I draw pretty pictures on my computer for games, zines, and comics. Often about machines and other monstrous things.",
		artworkCount: 4,
		socials: {
			instagram: "https://www.instagram.com/steelfirns",
		},
	},
	oats: {
		name: "Oats",
		bio:
			`"Hi! I'm Andrew/Oats, a merch artist and game developer :) I like to make keychains based off of my favorite games and anime! I especially like making keychains that are interactive and have weird materials.
			
			Reach out if you want to talk about art, game development (especially technical art, which is my craft), fashion, politics, or anything else :3"`,
		artworkCount: 4,
		socials: {
			bluesky: "https://bsky.app/profile/oatvercast.bsky.social",
		},
	},
	oiya: {
		name: "Oiya / Chickenpoiya",
		bio:
			"I'm Oiya!! This will be my 4th slugcon, and I'm very excited to be tabling both days! I look forward to sharing my art at this event every year and getting to talk with other slugs who share my interests :)",
		artworkCount: 6,
		socials: {},
	},
	avante: {
		name: "AvanteInkling",
		bio:
			"Hello! I'm Madison, an alumni who graduated in 2025. I'm a hobbyist artist who loves to draw my OCs, and I'm also a huge fan of Vocaloid and RPGMaker! Feel free to chat with me about anything!",
		artworkCount: 5,
		socials: {
			bluesky: "https://bsky.app/profile/avanteinkling.bsky.social",
		},
	},
	lux: {
		name: "blittergots",
		bio: `Hi! I'm Lux Morgan. I like to play and draw :) 
		I'm a generalist artist and game designer with a love for color, texture, and character design. I love creatures and robots and goobers of any variety more than anything else. I'm so happy to be a part of SlugCon this year, and I'm looking forward to seeing you there! (Oh, and if you're interested, commissions are open!)`,
		artworkCount: 5,
		socials: {
			bluesky: "https://bsky.app/profile/blittergots.bsky.social",
			tumblr: "https://www.tumblr.com/blittergots",
			instagram: "https://www.instagram.com/blittergots",
		},
	},
	potatodog: {
		name: "potato dog studio",
		bio:
			"Hi everyone! My name is Gillian, and I'm the artist behind potato dog studio. It's been awhile since I've been to SlugCon, and I'm excited to come back and see everyone again. In my spare time, I like making art + comics of my mascot potato dog, along with drawing anime fan art—some examples include Frieren and Bocchi the Rock. I will also be selling some novelty items this time such as UCSC and Year of the Horse-themed post cards. Looking forward to seeing everyone again!",
		artworkCount: 2,
		socials: {
			instagram: "https://www.instagram.com/potatodogstudio/",
			bluesky: "https://bsky.app/profile/potatodogstudio.bsky.social",
		},
	},
	starlotties: {
		name: "starlotties",
		bio:
			"I'm starlotties! I'm really into Vocaloid and Utaite!! I hope to spread joy with my art :D",
		artworkCount: 6,
		socials: {
			personal: "https://starlotties.carrd.co/",
			twitter: "https://twitter.com/starlotties",
			instagram: "https://www.instagram.com/starlotties_/",
			tumblr: "http://starlotties.tumblr.com/",
			youtube: "https://m.youtube.com/channel/UClPg6A7kWHEADpe8_hiiPGQ",
		},
	},
	rowan: {
		name: "RowanDownAStream",
		bio:
			`Hi, I am Rowan. I have been drawing a lot since middle school and a big video game fan, my favorite being The Legend of Zelda series. Currently drawing a lot of my Warrior of Light from FFXIV. 
		I am most active on blue sky: <a href="https://bsky.app/profile/rowandownastream.bsky.social" target="_blank">https://bsky.app/profile/rowandownastream.bsky.social</a>
		I also sell my wares on Etsy: <a href="https://rowandownastream.etsy.com" target="_blank">https://rowandownastream.etsy.com</a>`,
		artworkCount: 6,
		socials: {
			personal: "https://rowandownastream.etsy.com",
			bluesky: "https://bsky.app/profile/rowandownastream.bsky.social",
		},
	},
	ari: {
		name: "Parade Animals",
		bio:
			"Hello I'm Ari I'm an oc and fan-artist and I like Fern Frieren and Warrior cats and Cammy Street Fighter!!",
		artworkCount: 10,
		socials: {
			instagram: "https://instagram.com/parade.animals",
		},
	},
	lumiekko: {
		name: "Lumiekko",
		bio: "I like collage, paint, and lineart. Check out my stuff <º )))><",
		artworkCount: 5,
		socials: {
			instagram:
				"https://www.instagram.com/lumiekko?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr",
			tumblr: "https://lumiekko.tumblr.com/",
		},
	},
	aiaalina: {
		name: "aiaalina",
		bio:
			"Hello I’m Alina, a first year AGPM student from Merrill College! I like drawing anime characters in a bright and colorful art style.",
		artworkCount: 10,
		socials: {
			twitter: "https://x.com/aiaalina?s=21",
		},
	},
	em: {
		name: "emiree_draws",
		bio: "Howdy! My name is Em (they/them), but I go by emiree_draws! I am UCSC alumni who lives in LA! I am interested in cartoon shows, webtoons, video games, and digital art. I plan on selling MOSTLY stickers (most are waterproof except my older stock) and some leftover prints from previous events! See you there~",
		artworkCount: 10,
		socials: {
			instagram:
				"https://www.instagram.com/emiree_draws?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr",
		},
	},
	cypress: {
		name: "cypr35s",
		bio: "Yo, I'm cyp35s! I’m a digital artist and professional enjoyer of women loving women. I mostly draw ship art (yes, it’s primarily yuri), with a focus on soft moments, dramatic feelings, and characters who probably deserve better. I’m heavily inspired by Madoka Magica, Dungeon Meshi, Look Back, and Alien Stage. If you like yearning, doomed vibes, and girls who are a little too in love, my stuff might be for you..!",
		artworkCount: 4,
		socials: {
			instagram: "https://www.instagram.com/cypr35s/",
		},
	},
	stella: {
		name: "lalalumii",
		bio: "Helloo!! My name is Stella Nguyen(@lalalumii), and I am a first year AGPM major. I am a digital artist of 8 years, and draw mostly in a painterly-like style. You will often see me snooping around projects or participating in events, that is mostly where you will see most of my art. Outside of that, I'm a fella with a wizard hat on, so don't be afraid to come and talk with me :D ",
		artworkCount: 4,
		socials: {
			instagram: "https://www.instagram.com/lalalumiii__/",
		},
	},
	kiiyori: {
		name: "kiiyori_",
		bio: "My name is Keanna Honda, I am a 2026 graduating AGPM senior! I love video games, anime, KPOP and comic books! Some of my favorites are XMEN, Batman, TWICE, ATEEZ and Resident Evil!",
		artworkCount: 2,
		socials: {
			instagram: "https://www.instagram.com/kiiyori_/",
		},
	},
	antzz: {
		name: "antzz",
		bio: "I'm antzz, and I'm a CS + (soon) AGPM major! I made digital art for things I like! *ahem* gacha games *ahem*.",
		artworkCount: 2,
		socials: {
			twitter: "https://x.com/ant_zz1",
		},
	},
	// name: {
	// 	name: "",
	// 	bio: "",
	// 	artworkCount: 0,
	// 	socials: {},
	// },
	// cabij: {
	// 	name: "phantomCabij",
	// 	bio:
	// 		"I'm Marlo/Cabij, digital and traditional artist who loves making little fandom trinkets! I'm a 4th year astrophysics major, art is mainly my hobby but I like to share what I make with others and hopefully they'll like my trinkets and pngs as much as I do!!",
	// 	artworkCount: 0,
	// 	socials: {
	// 		tumblr: "https://www.tumblr.com/blog/phantomcabij",
	// 		bluesky: "https://bsky.app/profile/phantomcabij.bsky.social",
	// 		twitter: "https://x.com/phantomCabij",
	// 	},
	// },
};

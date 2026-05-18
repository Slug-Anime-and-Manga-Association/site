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
		artworkCount: 9,
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
		bio:
			"Howdy! My name is Em (they/them), but I go by emiree_draws! I am UCSC alumni who lives in LA! I am interested in cartoon shows, webtoons, video games, and digital art. I plan on selling MOSTLY stickers (most are waterproof except my older stock) and some leftover prints from previous events! See you there~",
		artworkCount: 10,
		socials: {
			instagram:
				"https://www.instagram.com/emiree_draws?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr",
		},
	},
	cypress: {
		name: "cypr35s",
		bio:
			"Yo, I'm cyp35s! I’m a digital artist and professional enjoyer of women loving women. I mostly draw ship art (yes, it’s primarily yuri), with a focus on soft moments, dramatic feelings, and characters who probably deserve better. I’m heavily inspired by Madoka Magica, Dungeon Meshi, Look Back, and Alien Stage. If you like yearning, doomed vibes, and girls who are a little too in love, my stuff might be for you..!",
		artworkCount: 4,
		socials: {
			instagram: "https://www.instagram.com/cypr35s/",
		},
	},
	stella: {
		name: "lalalumii",
		bio:
			"Helloo!! My name is Stella Nguyen(@lalalumii), and I am a first year AGPM major. I am a digital artist of 8 years, and draw mostly in a painterly-like style. You will often see me snooping around projects or participating in events, that is mostly where you will see most of my art. Outside of that, I'm a fella with a wizard hat on, so don't be afraid to come and talk with me :D ",
		artworkCount: 4,
		socials: {
			instagram: "https://www.instagram.com/lalalumiii__/",
		},
	},
	kiiyori: {
		name: "kiiyori_",
		bio:
			"My name is Keanna Honda, I am a 2026 graduating AGPM senior! I love video games, anime, KPOP and comic books! Some of my favorites are XMEN, Batman, TWICE, ATEEZ and Resident Evil!",
		artworkCount: 2,
		socials: {
			instagram: "https://www.instagram.com/kiiyori_/",
		},
	},
	antzz: {
		name: "antzz",
		bio:
			"I'm antzz, and I'm a CS + (soon) AGPM major! I made digital art for things I like! *ahem* gacha games *ahem*.",
		artworkCount: 2,
		socials: {
			twitter: "https://x.com/ant_zz1",
		},
	},
	klq: {
		name: "KLQ Draws",
		bio:
			"Hi hi! I’m Q, a UCSC alumni and local freelance illustrator and character designer. I work in a style that is a unique blend of anime and cartoon and draw pretty much anything I personally enjoy!",
		artworkCount: 5,
		socials: {
			bluesky: "https://bsky.app/profile/klqdraws.bsky.social",
		},
	},
	shweep: {
		name: "orpharax.shweep",
		bio:
			"Hi! I’m an independent artist focusing on sculptures and paintings! Feel free to reach out for custom sculpts before the event!!",
		artworkCount: 1,
		socials: {},
	},
	chucklenutsjr: {
		name: "Chucklenutsjr",
		bio: "An artist dabbling in many mediums! ✍️👾🧵",
		artworkCount: 8,
		socials: {},
	},
	wildwolf: {
		name: "Its_WildWolf",
		bio:
			`Hiii! :D My name is Cece (its_wildwolf), and this is my first year at Slugcon!
I’m a fan artist who loves creating work inspired by fandoms like Genshin Impact, HSR, ALNST, and many more.

I’ll be bringing a variety of merch including prints, charms, and photocards—feel free to stop by and take a look. I’d love to meet you!`,
		artworkCount: 5,
		socials: {
			instagram: "https://www.instagram.com/its_wildwolf/",
		},
	},
	nyanroki: {
		name: "nyanroki",
		bio: "Character illustrator",
		artworkCount: 1,
		socials: {
			instagram: "https://www.instagram.com/nyanrokiz/",
		},
	},
	henn: {
		name: "Astro Hen",
		bio:
			"hi! I’m hen, an astrophysics student who mostly draws fanart and/or original artworks of my persona.",
		artworkCount: 8,
		socials: {},
	},
	yahuri: {
		name: "Yahuri",
		bio: "im buny 🐇",
		artworkCount: 9,
		socials: {},
	},
	syllin: {
		name: "Syllin Xiloscient (@silly.syllin.arts)",
		bio:
			"Hello, I'm a third-year AGPM student! I love Twisted Wonderland and Genshin Impact, but I like plenty of other things (like Black Butler). My favorite characters are Malleus Draconia and Neuvillette. Sorry I don't have a lot of products to show; I'm still trying to make more stuff as I haven't sold my work much before. I hope you enjoy my art, at least!",
		artworkCount: 3,
		socials: {
			instagram:
				"https://www.instagram.com/silly.syllin.arts?igsh=MzRlODBiNWFlZA==",
		},
	},
	isabelldexigns: {
		name: "isabelldexigns",
		bio:
			"Hi hi, my name is Audrey and I am a jewelry designer and artist. I am a second year FDM and AGPM student. I am the founder of the small jewelry business, isabelldexigns. I love to create work that reflects who I am, and am so excited to share it with all of you!! :)",
		artworkCount: 1,
		socials: {
			instagram: "https://www.instagram.com/Isabelldexigns/",
		},
	},
	luke: {
		name: "lukremium",
		bio:
			"hi!! :D i'm luke and i love homestuck and sonic!! im still a newbie when it comes to artist alley, but i'm excited to meet everyone! i got hella sonic merch.... HELLA",
		artworkCount: 9,
		socials: {
			instagram: "https://www.instagram.com/lukremium/",
			twitter: "https://x.com/lukremium",
		},
	},
	sockwearer: {
		name: "sockwearer",
		bio:
			"i'm jesse! i make weird stories, ocs, and fanart stuff. i'm a biology major but i like to make time for art where i can because it's really important to me. thanks for appreciating my work!",
		artworkCount: 6,
		socials: {},
	},
	snek: {
		name: "Snek",
		bio:
			"Hello~ I'm a UCSC alumni that do mostly illustrations of characters from Type-Moon",
		artworkCount: 5,
		socials: {},
	},
	mzbljack: {
		name: "mzbljack",
		bio:
			"hello, am jack and exists sometimes. much like triangles and clicking buttons. :]",
		artworkCount: 5,
		socials: {
			instagram: "https://www.instagram.com/mzbljack/",
			bluesky: "https://bsky.app/profile/mzbljack.bsky.social",
		},
	},
	noname: {
		name: "noname",
		bio:
			"I'm Jaxon, in the past I've mainly done pen on paper drawings, but am trying to experiment more with digital illustration and other stuffs. I generally have too scattered interests which aren't always printable, but I enjoy visual arts when I get around to them :D",
		artworkCount: 7,
		socials: {
			instagram: "https://www.instagram.com/NonNamed.Art/",
		},
	},
	seefu: {
		name: "Dragonseefu",
		bio:
			"Hi! I’m Seefu and I’m a digital illustrator based in Bay Area. I love to draw fanart (especially for the Creepypasta, Twisted Wonderland, and Honkai Star Rail fandoms) as well as original art and characters. My main oc is my alien lizard, Sifu!",
		artworkCount: 8,
		socials: {
			instagram:
				"https://www.instagram.com/dragonseefu?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr",
		},
	},
	sevalopod: {
		name: "sevalopod",
		bio: `hello!
my name is sev, i'm a third year MCD bio major, and i love to draw! i like games like zzz, genshin, dmmd, and others :-)`,
		artworkCount: 8,
		socials: {
			instagram: "https://www.instagram.com/ihearttoxicyaoi/",
		},
	},
	pits: {
		name: "Puppy in the Stars",
		bio:
			"Puppy in the Stars is a space meant to feature cute critters that remind you of kinder times. I create mostly original art showcasing animals like dogs and cats with a dreamcore vibe and a few fanart pieces sprinkled in. ♡ Life can be hard, but it's a little less difficult when you have cute creatures by your side! ♡",
		artworkCount: 0,
		socials: {
			instagram:
				"https://www.instagram.com/puppyinthestars?igsh=MzRlODBiNWFlZA==",
		},
	},
	princeofcacti: {
		name: "princeofcacti",
		bio:
			"My name is Peter, I am a trans mexican artist based out of Watsonville and have been drawing for most of my life, I love collecting art and attending art events as much as I love making my own art, getting to participate in local artist events is super meaningful. ",
		artworkCount: 7,
		socials: {
			personal: "https://princeofcacti.carrd.co",
			instagram: "https://www.instagram.com/princeofcacti",
			youtube: "https://www.youtube.com/@princeofcacti",
		},
	},
	cabij: {
		name: "phantomCabij",
		bio:
			"I'm Marlo/Cabij, digital and traditional artist who loves making little fandom trinkets! I'm a 4th year astrophysics major, art is mainly my hobby but I like to share what I make with others and hopefully they'll like my trinkets and pngs as much as I do!!",
		artworkCount: 11,
		socials: {
			tumblr: "https://www.tumblr.com/blog/phantomcabij",
			bluesky: "https://bsky.app/profile/phantomcabij.bsky.social",
			twitter: "https://x.com/phantomCabij",
		},
	},
	rani: {
		name: "PexeLukive",
		bio:
			"Hello! I'm Rani (they/them), a fourth year AGPM major and SAMA's Social Media Coordinator! I make stickers, prints, pins/keychains, and more of various anime/games/media including Another Eden (my all time favorite game, please yap with me about it if you play it/want to know more about it), Project Sekai, and Genshin Impact!",
		artworkCount: 10,
		socials: {
			personal: "https://linktr.ee/pexelukive",
			twitter: "https://x.com/PexeLukive",
			bluesky: "https://bsky.app/profile/pexelukive.bsky.social",
		},
	},
	brooke: {
		name: "willow_x0",
		bio:
			"Hi there! I go by Brooke (or Willow on socials), I’m a 4th year Art & AGPM major with a focus on creating fan illustrations for the media I enjoy. I’ve got lots of prints & other trinkets for a variety of fandoms, please feel free to stop by if something catches your eye ! ♡⸜(｡˃ ᵕ ˂ )⸝",
		artworkCount: 10,
		socials: {},
	},
	azumi: {
		name: "azureazumi",
		bio:
			"Hello! I’m Azumi (she/they). I started drawing traditionally about 7 years ago before fully switching to digital in the past 5 years. I love playing around with distinct, directional mood-lighting, with an emphasis on warm-toned colors such as oranges, yellows, and pinks. Apart from making original content with my DND characters, I am also currently engaged in fandoms such as TADC, Persona, Hazbin Hotel, and Minecraft Youtube — and make fanart (full pieces and animatics) based off of songs or other ideas floating around in my head. ",
		artworkCount: 10,
		socials: {
			instagram:
				"https://www.instagram.com/azureazumii?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr",
		},
	},
	lazuli: {
		name: "sion_lazuli",
		bio:
			`Hobby artist, mainly doodling OCs with occasional fanart. 2021 UCSC Biology alumni. Very very tired.

Main interests are Vocaloid/FF14/Limbus Company`,
		artworkCount: 5,
		socials: {
			instagram: "https://www.instagram.com/sigma_sion/",
			twitter: "https://twitter.com/sion_lazuli",
			bluesky: "https://bsky.app/profile/sionlazuli.bsky.social",
		},
	},
	fishwizard: {
		name: "Fish Wizard",
		bio: "I am the Fish Wizard. I craft so much stuff that it’s too much for me to keep for myself. I love collaging and making kandi. Art and creation is  how I express myself and I adore sharing those rich emotions with others.",
		artworkCount: 10,
		socials: {
			instagram: "https://www.instagram.com/fishwizard0_0/",
		},
	},
	daglona: {
		name: "dalgona.clip",
		bio: "Hello hello!!! I'm June, or dalgona.clip on Instagram! I'm a student illustrator attending UCSC and I'm a big fan of Undertale and Deltarune (if it wasn't already obvious from my catalog LOL), as well as a handful of other indie games and Pokemon! Outer Wilds has been a recent favorite of mine-- please please come talk to me about it :^D Thanks for stopping by and taking a peek at my work!",
		artworkCount: 4,
		socials: {
			instagram: "https://www.instagram.com/dalgona.clip/",
		},
	},
	papajon: {
		name: "papajon546",
		bio: "",
		artworkCount: 9,
		socials: {},
	},
	marisa: {
		name: "Marisa Wong",
		bio: "Come playtest our game: Hyper Rush!",
		artworkCount: 3,
		socials: {
			personal: "https://sites.google.com/view/wwyee/home",
		},
	},
};

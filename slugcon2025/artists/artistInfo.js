// why is this not a .json? fetch() is too much work
const artistInfo = {
	adamA: {
		name: "inari.artstuff",
		bio: "Hello! I am inari.artstuff, a 4th year AGPM major! As you can see I am in the One Piece phase...I hope you check out my stuff!",
		artworkCount: 9,
		socials: {
			personal: "https://adamaviles2003.wixstudio.com/abaviles"
		}
	},
	alexaMedina: {
		name: "aletriz_art",
		bio: "Hallo! I love the Pikmin franchise and drawing little guys! My name is Alexa Medina and I draw and specialize in VFX heres some more of my game design work: https://albmedin.myportfolio.com/",
		artworkCount: 4,
		socials: {
			personal: "https://sites.google.com/view/alexa-medina/home?authuser=1",
			instagram: "https://www.instagram.com/aletriz_alex/",
			artstation: "https://aletrizart.artstation.com/"
		}
	},
	alexisHuang: {
		name: "ishugo.co",
		bio: "ishugo.co creates cute resin-printed keycap fidgets, figurines, stickers, and keychains! everything is designed and handmade by us with care.",
		artworkCount: 10,
		socials: {
			instagram: "https://www.instagram.com/ishugo.co?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
		}
	},
	aliAli: {
		name: "aloosh",
		bio: "hello I am ali I like drawing characters that I fancy thank you for your time bowing emoji",
		artworkCount: 8,
		socials: {
			twitter: "https://x.com/uhloosh"
		}
	},
	andrewDunne: {
		name: "Oatvercast",
		bio: "Hi I'm Andrew, a game maker and digital artist who like to create shiny and unique keychains. ",
		artworkCount: 3,
		socials: {
			bluesky: "https://bsky.app/profile/oatvercast.bsky.social"
		}
	},
	appleSketch: {
		name: "Sketch",
		bio: "Hey there :wave: my online shop is now open so please check it out and order stuff there!",
		artworkCount: 7,
		socials: {
			instagram: "https://www.instagram.com/applesketchz/"
		}
	},
	athena: {
		name: "anxious_arsonist",
		bio: "Hi there! I’m a recent graduate of UCSC! I’m really into making comics, colorful illustrations, and the occasional fan art! Come chat with me about Legend of Zelda, The Owl House, and whatever else you’d wanna talk about! ",
		artworkCount: 3,
		socials: {
			instagram: "https://www.instagram.com/anxious_arsonist?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
		}
	},
	baileyDelReal: {
		name: "Bailey, B, HHound",
		bio: "Hi y'all! Name's Bailey, or HHound! I'm an artist studying Creative Writing and Game Design! This festival will be my last one here at UCSC and I'm excited at the opportunity to sell my work one last time before graduation! Looking forward to seeing everyone ^-^",
		artworkCount: 2,
		socials: {
			instagram: "https://www.instagram.com/hhound_art/"
		}
	},
	brookeTaylor: {
		name: "willow_x0",
		bio: "Hello !! I'm an artist running off of dreams & energy drinks, with a focus on creating fan works for media I enjoy. I hope to bring a positive impact to those in fandom spaces, through prints, keychains, and other trinkets I create! ˶ˆᗜˆ˵ ",
		artworkCount: 10,
		socials: {
			twitter: "https://x.com/willow_x0",
			instagram: "https://www.instagram.com/willow.x0/"
		}
	},
	caitlinMorgan: {
		name: "AspenCate",
		bio: "Hi! I’m Catie, a 5th year Art and AGPM double major who specializes in Illustration, Visual Development, Game Design, and Production. I enjoy drawing the critters that live around campus, love experimenting with different color palattes, and have used some of the illustrations you’ve seen here as concept art for various video game projects.  It’s my last SlugCon event before graduation, and I wanted to say thank you to everyone who’s supported me and my work over the years - seeing people enjoy my art means the world to me, and it’s been great getting to know so many familiar faces from these events over the years. ty:)",
		artworkCount: 6,
		socials: {
			artstation: "https://www.artstation.com/caitlinmorgan",
			instagram: "https://www.instagram.com/aspenarts.2020"
		}
	},
	carlyHunter: {
		name: "cypr35s",
		bio: "Hey there!!! I’m Cypress, a digital artist and second-year AGPM major with an Education Minor, passionate about character design and expressive storytelling. My art thrives on obsession—whether it’s Madoka Magica, Dungeon Meshi, or Honkai Star Rail and many more. I love bringing my favorite worlds to life. Fanart is my love language, but original creations sneak in too! Let’s geek out over colors, concepts, and creative chaos together.",
		artworkCount: 10,
		socials: {
			instagram: "https://www.instagram.com/cypr35s?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
		}
	},
	chibbunly: {
		name: "Chi",
		bio: "Hello, I'm Chi (they/she)! A digital and traditional art hobbyist — lover of all things space and OCs ⁎⁺˳⟡༚ This is my 4th year of tabling at SlugCon, and I'm super happy to be back! I'll be offering limited shikishi commissions in both mini and regular size. Feel free to stop by, whether for art or a chat! ♡",
		artworkCount: 4,
		socials: {
			personal: "https://chibbunly.carrd.co/",
			instagram: "https://www.instagram.com/chibbunly/",
			bluesky: "https://bsky.app/profile/chibbunly.bsky.social"
		}
	},
	chickenpoiya: {
		name: "Oiya",
		bio: "Hi! I’m Oiya, I draw oc art and fanart, and I’m also very interested in botanical and natural history illustration :) I’m a big fan of Fire Emblem, Dungeon Meshi, and D&D.",
		artworkCount: 5,
		socials: {
			personal: "https://cara.app/oiya",
			instagram: "https://www.instagram.com/chickenpoiya/"
		}
	},
	chloeRoldan: {
		name: "sparkleface",
		bio: "",
		artworkCount: 2,
		socials: {
			instagram: "https://www.instagram.com/sparkleface.815?igsh=NTc4MTIwNjQ2YQ==",
			youtube: "https://youtube.com/@sparkleface"
		}
	},
	daisyLy: {
		name: "Beom, Syllin Xiloscient",
		bio: "Hi!! I'm going to be selling random things I make, so I may end up having more [various] stuff in person. I can't guarantee that there'll be a lot of things nor guarantee that everything will be perfect, but I'll try my best! The crochet especially will be very simplified.",
		artworkCount: 3,
		socials: {
			instagram: "https://www.instagram.com/silly.syllin.arts?igsh=NTc4MTIwNjQ2YQ=="
		}
	},
	emilyTran: {
		name: "emiree_draws",
		bio: "Howdy! My name is Emily (they/them), but I go by emiree_draws! I am a 4th year AGPM and History major at UCSC. I am interested in cartoon shows (steven universe, inside job, owl house, etc), webtoons, video games (catch me playing stardew valley), and drawing digitally. This is going to be my last time selling my art at UCSC so I am quite excited! I plan on selling MOSTLY stickers (most are waterproof except my older stock) and some leftover prints from previous events! See you there~",
		artworkCount: 10,
		socials: {
			personal: "https://emilytranbusiness.wixsite.com/emilytran",
			instagram: "https://www.instagram.com/emiree_draws",
			kofi: "https://ko-fi.com/emiree_draws/commissions"
		}
	},
	erikaStewart: {
		name: "torii",
		bio: "Hi! I'm Erika, and I'll be tabling with my friends at SlugCon! I'm bringing in some pixelart prints & handdrawn stickers (I recently got ahold of some hand-laminate-able sticker paper), feel free to drop by and hang out with me :3",
		artworkCount: 1,
		socials: {
			twitter: "https://x.com/k_npeit"
		}
	},
	franUhm: {
		name: "Fran",
		bio: "Hi! I’m Fran, and I love drawing little critters!!",
		artworkCount: 6,
		socials: {
		}
	},
	gloriaHwang: {
		name: "judah",
		bio: "Hey, I'm Judah! I make art all the time, but finish pieces only sometimes. Though most of my personal work is oc art, I enjoy making fanart of any media that captures my hyperfixated interest. I don't post much on my socials, but I plan on being more active in sharing my art to the wider world.",
		artworkCount: 3,
		socials: {
			instagram: "https://www.instagram.com/socksorstockingz/",
			tumblr: "https://www.tumblr.com/socksorstockingz"
		}
	},
	helwaHalloum: {
		name: "KnotXenos",
		bio: "Hi! I’m Helwa! A 4th year AGPM major and this will be my last time tabling for SlugCon!! I love video games so a lot of my art I’ll be having are video game art!! I’m looking forward to seeing y'all at SlugCon, it’s definitely going to be a good one.",
		artworkCount: 4,
		socials: {
			instagram: "https://www.instagram.com/knotxenos/",
			toyhouse: "https://toyhou.se/KnotXenos"
		}
	},
	isabelleLin: {
		name: "nyanroki",
		bio: "Hello! I go by the tag nyanroki and I make keychains, prints, and stickers of Genshin, Valorant, Star Rail, slug-themed Miffy/Snoopy, and Nezha (Aobing) merch. Looking forward to the event!",
		artworkCount: 6,
		socials: {
			instagram: "https://www.instagram.com/nyanrokiz/"
		}
	},
	janiceChi: {
		name: "jam.chii_",
		bio: "Hi I'm jam.chii_!! I'm a first year psych major, and I enjoy sculpting cute little things and making digital art! I will be primarily selling clay trinkets, art prints, and stickers! Hope to see you there! ⸜(｡˃ ᵕ ˂ )⸝♡",
		artworkCount: 1,
		socials: {
			instagram: "https://www.instagram.com/jam.chii_"
		}
	},
	jasperLin: {
		name: "7ixuan",
		bio: "My name is Jasper, I started SHAYXPEAR as a way for me to sell my prints, but I'm slowly evolving it into a fashion brand.",
		artworkCount: 5,
		socials: {
			instagram: "https://www.instagram.com/shayxpear?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
		}
	},
	jayoKuo: {
		name: "atalina",
		bio: "Hi, I'm atalina! I'm an digital illustrator who creates comics, games, and interactive fiction. Feel free to stop by my table and browse some prints and handmade accessories (not pictured here), play one of my games, or talk to me about webcomics ᯓ★",
		artworkCount: 7,
		socials: {
			personal: "https://atalinaart.wixsite.com/portfolio",
			instagram: "https://www.instagram.com/atalina.art/"
		}
	},
	jesseJohnson: {
		name: "sockwearer",
		bio: "Hi!! I'm Jesse, I'm a 2nd year marine bio major. I like drawing in my free time, usually my or others' original characters or fanart for stuff I like. I also like birdwatching, robots, baking, writing, and playing video games.",
		artworkCount: 10,
		socials: {
			toyhouse: "https://toyhou.se/sockwearer",
			bluesky: "https://bsky.app/profile/sockwearer.bsky.social"
		}
	},
	joseBarrera: {
		name: "PapaPaint546",
		bio: "Add my socials : @PapaPaint546",
		artworkCount: 8,
		socials: {
			instagram: "https://www.instagram.com/papapaint546?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
		}
	},
	justtheblueberry: {
		name: "justtheblueberry",
		bio: "hi! i'm blueberry, and i draw! i love making fanart, currently my main fandoms include genshin and nezha but i also do some original art! (my commissions are open so if you're interested shoot me a DM on any of my social media~) if you're going to slugcon feel free to stop by my table and chat :)",
		artworkCount: 7,
		socials: {
			instagram: "https://www.instagram.com/justtheblueberry/",
			tumblr: "https://justheblueberry.tumblr.com/",
			bluesky: "https://bsky.app/profile/justtheblueberry.bsky.social",
			artstation: "https://justtheblueberry.artstation.com/"
		}
	},
	lilyChen: {
		name: "Tudoumi",
		bio: "Hi! My name is Lily, I'm a 4th year CSGD student who really likes art and gacha games unfortunately.",
		artworkCount: 5,
		socials: {
			instagram: "https://www.instagram.com/tudou.mi/?hl=en"
		}
	},
	longzhengYe: {
		name: "snek",
		bio: "Hello UCSC alumni here! I draw characters from type-moon ",
		artworkCount: 8,
		socials: {
			twitter: "https://x.com/sushisnek"
		}
	},
	lucasNguyen: {
		name: "Luke",
		bio: "hi!!! im just a little guy whos obsessed with sonic and kingdom hearts...... heheh",
		artworkCount: 5,
		socials: {
			instagram: "https://www.instagram.com/lukremium/",
			twitter: "https://x.com/lukremium"
		}
	},
	madisonLi: {
		name: "AvanteInkling",
		bio: "Hello! I'm Madison (any/all), a 4th year CS:GD major! I'm a big fan of Vocaloid and RPGMaker, and I love to draw original characters primarily <3",
		artworkCount: 4,
		socials: {
			bluesky: "https://bsky.app/profile/avanteinkling.bsky.social"
		}
	},
	maiaWashburn: {
		name: "Maipaia",
		bio: "Heya everyone! I’m Maia (Maipaia) I’m a sucker for plants and flowers, and I like to draw pokemon and cute animals! I also love to crochet, I’m hoping to make a few new amigurumi pieces in the future! Sewing, baking, and gaming are a few other hobbies that I enjoy! Thanks for looking at my art <3",
		artworkCount: 6,
		socials: {
			instagram: "https://www.instagram.com/maipaia.art?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
		}
	},
	metaToshi: {
		name: "MetaToshi",
		bio: "Heya! The name's Gloria Chim (alias: MetaToshi) - I'm a digital artist and game developer/artist that likes to draw original characters and the occasional fanart. Talk to me about comic work, game development, life in general, and more!",
		artworkCount: 5,
		socials: {
			instagram: "https://www.instagram.com/metatoshi.doodles/"
		}
	},
	michaelaBarker: {
		name: "kitroseink",
		bio: "hihi! i'm kayla (she/they) and i'm an artist who loves old anime and drawing women ",
		artworkCount: 10,
		socials: {
			instagram: "https://www.instagram.com/kitroseink/"
		}
	},
	michaelMannik: {
		name: "micheal",
		bio: "Hi! I'm Micheal a 4th year cs student!",
		artworkCount: 5,
		socials: {
			instagram: "https://www.instagram.com/ink_toaster/"
		}
	},
	mokaTsukino: {
		name: "Moka",
		bio: "",
		artworkCount: 10,
		socials: {
			instagram: "https://www.instagram.com/m.o.ka4rts/"
		}
	},
	mzbljack: {
		name: "mzbljack",
		bio: "hello, am jack and exists sometimes. much like triangles and clicking buttons. :]",
		artworkCount: 4,
		socials: {
			instagram: "https://www.instagram.com/mzbljack/",
			bluesky: "https://bsky.app/profile/mzbljack.bsky.social"
		}
	},
	normanZhu: {
		name: "fid",
		bio: "Hi, I'm .fid, I'm a senior in CSGD and going to be tabling for the first time at slugcon! I'll be selling prints and maybe doing live drawing. See you at slugcon!",
		artworkCount: 5,
		socials: {
			twitter: "https://x.com/theheckisafid"
		}
	},
	rafa17: {
		name: "captainedgeart",
		bio: "Hey everyone! I'm Vika, an AGPM graduate who loves anime (mostly jojo), and horror games! If you're into horror, come by so we can chat :) I've been cooking up some visual novels you might enjoy!",
		artworkCount: 10,
		socials: {
			instagram: "https://www.instagram.com/captainedgeart/",
			steam: "https://store.steampowered.com/curator/45279750-Captain-Edge-Studios/",
			youtube: "https://www.youtube.com/@CaptainEdgeStudios"
		}
	},
	raniYeh: {
		name: "PexeLukive",
		bio: "Hello! I'm Rani, a third year AGPM major and current SAMA officer! I make stickers, prints, pins/charms, and crochet items of various games/anime/media including Another Eden (my all time favorite game, please yap with me about it if you play it/want to know more about it), Genshin Impact, Wuthering Waves, and Hololive!",
		artworkCount: 5,
		socials: {
			personal: "https://linktr.ee/pexelukive"
		}
	},
	ronanTsoi: {
		name: "Ronan",
		bio: "Hello everyone! My name is Ronan (he/him) and I’m an artist making prints, stickers, and charms with metallic foil designs. I’m your certified local robot/mecha enjoyer so stuff like FLCL, NGE, Ultrakill, TF, etc. are a significant portion of my goods alongside other miscellaneous indie games that I really like!",
		artworkCount: 1,
		socials: {
		}
	},
	rubyH: {
		name: "peanut_squares",
		bio: "Hi! My name is Ruby, I'm a fourth year AGPM student and this will be my last time selling :') I like crocheting, sewing, and embroidery! I am planning on selling cat hats, some Vocaloid plushies, bags, and more! If you're interested feel free to stop by and I look forward to meeting everyone! ",
		artworkCount: 4,
		socials: {
			instagram: "https://www.instagram.com/embroifeats2/"
		}
	},
	sairaHamid: {
		name: "walinblue",
		bio: "Hi! I’m Sai. I'm a CS: Game Design sophomore, an author, & an artist. I like dark mode, primary colors, bass-heavy music, and late-night vibes. The overarching goal of my work is to bring my viewers an energetic experience. I want my stories to read like movies and for my art to look like stories. I want my content as a whole to be known for being deep, dark, and devilishly fun. In the future, I aim in creative direction within the game industry. I also want to write professionally, share more of my art with the world, and continue building a community for people with similar interests to bond. Thank you for supporting my work!",
		artworkCount: 10,
		socials: {
			personal: "https://walinblue.carrd.co/",
			instagram: "https://www.instagram.com/walinblue/",
			twitter: "https://x.com/walinblue"
		}
	},
	simonNadler: {
		name: "srsurchin",
		bio: "serious urchin",
		artworkCount: 7,
		socials: {
			instagram: "https://www.instagram.com/srsurchin?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
		}
	},
	sJohansen: {
		name: "sevalopod",
		bio: "Hello! My name is Sev Johansen, known online as @sevalopod! I’m a semi-active digital artist and I love Persona 5, MHA, Genshin Impact, Haikyuu, HxH, and various other dorky interests… I’m also a Sophomore at UCSC for MCD Bio!",
		artworkCount: 4,
		socials: {
			personal: "https://sevalopod.carrd.co/#portfolio",
			twitter: "https://x.com/sevalopod"
		}
	},
	tinyTabby: {
		name: "parade.animals, tiny.tabby",
		bio: "Hello I'm Ari I'm an oc and fan-artist and I like playing guitar, and Cammy Street Fighter!!  I hope you enjoy my work!",
		artworkCount: 10,
		socials: {
			twitter: "https://x.com/parade_animals",
			instagram: "https://www.instagram.com/parade.animals/#"
		}
	},
	typeNo: {
		name: "typo",
		bio: "uhh i like splatoon",
		artworkCount: 5,
		socials: {
			twitter: "https://x.com/TypoPpt",
			bluesky: "https://bsky.app/profile/typoppt.bsky.social"
		}
	},
	chikisan: {
		name: "chikisan",
		bio: "Hazelle is a visual development artist snd illustrator who specializes in fantasy art and visual storytelling. On their spare time, they love to read books and spend time with their dog.",
		artworkCount: 5,
		socials: {
			artstation: "https://www.artstation.com/chikisan",
			instagram: "https://www.instagram.com/chikisan_"
		}
	},
	weiyanChiang: {
		name: "wchiang3",
		bio: "Silly crochet plushies and wears by two friends that enjoy crocheting!",
		artworkCount: 1,
		socials: {
			instagram: "https://www.instagram.com/lunardinoshop/"
		}
	},
	kaiZapata: {
		name: "LunarDinoShop",
		bio: "My name is Sophia Chin. I am a 21-year-old artist, game designer, and filmmaker. My primary mediums are oil paint, watercolor, and experimental animation. I create work to tell a story and capture the emotions of an experience. One of my greatest motivations for pursuing art is climate activism. With my climate justice artwork, I aim to harness the inherent power of art to capture attention and evoke emotion, thereby inspiring our communities to take action toward an improved collective future. ",
		artworkCount: 3,
		socials: {
			instagram: "https://www.instagram.com/wy_0w0?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
		}
	},
	sophiaChin: {
		name: "cerulean.sprout",
		bio: "My name is Sophia Chin. I am a 21-year-old artist, game designer, and filmmaker. My primary mediums are oil paint, watercolor, and experimental animation. I create work to tell a story and capture the emotions of an experience. One of my greatest motivations for pursuing art is climate activism. With my climate justice artwork, I aim to harness the inherent power of art to capture attention and evoke emotion, thereby inspiring our communities to take action toward an improved collective future. ",
		artworkCount: 6,
		socials: {
			instagram: "https://www.instagram.com/cerulean.sprout?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
		}
	},
	halberd69: {
		name: "HALBERD",
		bio: "hi! i'm hal and i will be tabling at SlugCon! i'm a fourth year AGPM major and i've been making art ever since i can remember. my favorite anime is code geass and i am currently watching soul eater. you can find me on twitter, instagram, and newgrounds @6halberd9.",
		artworkCount: 2,
		socials: {
			instagram: "https://www.instagram.com/6halberd9/",
			twitter: "https://x.com/6halberd9",
		}
	}
}

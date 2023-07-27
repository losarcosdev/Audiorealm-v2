export interface SeedProduct {
  description: string;
  title: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  category: ICategory;
  metaDescription: string;
  metaKeywords: string;
}

export type ICategory = "earphone" | "headphone" | "speaker";

export interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    // !HEADPHONES
    {
      title: "Sennheiser HD458BT",
      description:
        "Like a new version of a successful melody or a director's cut of a favorite movie, there's nothing like a remix to add some magic. The HD 458BT gives the HD 450BT a fresh look. The headphones shine with familiar features, while red accents give it a cool yet minimalist design.",
      images: [
        "/products/HD_458BT_1__83332.jpg",
        "/products/HD_458BT_2__65725.jpg",
        "/products/HD_458BT_3__15566.jpg",
      ],
      inStock: 30,
      price: 49.99,
      slug: "sennheiser_hd458bt",
      category: "headphone",
      metaDescription:
        "The HD 458BT is an upgraded version of the successful HD 450BT, with a minimalist design accentuated with red accents.These headphones offer familiar features with a touch of freshness that makes them unique. Discover the magic of a remix in your hands with the HD 458BT.",
      metaKeywords:
        "HD 458BT, HD 450BT, headphones, remix, minimalist design, red accents.",
    },
    {
      title: "Sennheiser HD350BT",
      description:
        "Thanks to Bluetooth® 5.0, support for high-quality codecs (AAC, aptX™ Low Latency), and an excellent 30-hour battery life, these stylish and durable wireless headphones are your versatile companion for experiencing better audio wherever you are.",
      images: [
        "/products/HD350BT_4__43188.jpg",
        "/products/HD350BT_2__72457.jpg",
        "/products/HD350BT_3__32807.jpg",
      ],
      inStock: 25,
      price: 79.99,
      slug: "sennheiser_hd350bt",
      category: "headphone",
      metaKeywords:
        "Bluetooth 5.0, high quality codec support, AAC, aptX Low Latency, wireless headphones, 30 hour battery life, versatile companion, better audio",
      metaDescription:
        "Experience better audio wherever you go with these sleek and durable wireless headphones. With Bluetooth 5.0, high quality codec support (AAC, aptX™ Low Latency), and a remarkable 30-hour battery life, these headphones are your versatile companion for immersive sound.",
    },
    {
      title: "Sennheiser Momentum 4",
      description:
        "The Sennheiser Momentum 4 Wireless follows in the footsteps of the well-known Momentum range from the German brand, with a redefined acoustic system inspired by music. Available in black and white finishes, these closed-back Bluetooth headphones with active noise cancellation offer superior sound where clarity and musicality are the stars.",
      images: [
        "/products/momentum_4_black_case_headphone_v1_1200x1200__18026.jpg",
        "/products/momentum_4_isofront_v1_1200x1200__81643.jpg",
        "/products/Momentum_4_Wireless__13150.jpg",
      ],
      inStock: 0,
      price: 99.99,
      slug: "sennheiser_momentum_4",
      category: "headphone",
      metaKeywords:
        "Sennheiser Momentum 4 Wireless, acoustic system, closed design, active noise cancellation, Bluetooth headphones, superior sound, clarity, musicality.",
      metaDescription:
        "Experience superior sound quality with the Sennheiser Momentum 4 Wireless headphones. With a redesigned acoustic system inspired by music, these closed-design Bluetooth headphones come in black and white finishes and feature active noise cancellation for clarity and musicality in your audio experience.",
    },
    {
      title: "Shure Aonic 40",
      description:
        "Made with top-quality materials and designed by the brand trusted by musicians and content creators, the AONIC 40 wireless noise-canceling headphones offer studio-quality sound in a portable format. Wherever you go, enjoy the unbeatable combination of comfort, audio performance, and durability.",
      images: [
        "/products/Shure_Aonic_40_1__98237.jpg",
        "/products/Shure_Aonic_40_2__65375.jpg",
        "/products/Shure_Aonic_40_3__40774.jpg",
      ],
      inStock: 20,
      price: 59.99,
      slug: "shure_aonic_40",
      category: "headphone",
      metaKeywords:
        "AONIC 40, wireless headphones, noise cancellation, studio-quality sound, portable, high-quality materials, musician's choice, content creator's choice, comfort, audio performance, durability",
      metaDescription:
        "Experience studio-quality sound in a portable format with the AONIC 40 wireless headphones. Made with high-quality materials and designed by a brand trusted by musicians and content creators, these noise-cancelling headphones offer unparalleled comfort, audio performance, and durability wherever you go.",
    },
    {
      title: "Edifier W820NB",
      description:
        "The Edifier W820NB are closed-back headphones with built-in active noise cancellation. They stand out for being designed based on a high-resolution audio standard for a rich and balanced audio experience, with all the clarity that their large titanium driver offers. In addition to incorporating ANC, they are also capable of achieving up to 48 hours of continuous playback and a DNN noise cancellation type to ensure your phone calls are crystal clear. With low latency in game mode and the good finish of its physical components, providing the headphones with lightness and comfort, these Edifier W820NB are a good alternative for the most restless.",
      images: [
        "/products/Edifier_W860NB_1__02825.jpg",
        "/products/Edifier_W860NB_2__43944.jpg",
        "/products/Edifier_W860NB_3__61178.jpg",
        "/products/Edifier_W860NB_4__47041.jpg",
      ],
      inStock: 20,
      price: 99.99,
      slug: "edifier_w820nb",
      category: "headphone",
      metaKeywords:
        "Edifier W820NB, closed design, active noise cancellation, high-resolution audio, titanium driver, 48-hour battery life, DNN noise cancellation, crystal clear calls, low latency, gaming mode, lightweight, comfortable",
      metaDescription:
        "Experience rich and balanced audio with the Edifier W820NB noise-cancelling headphones. These closed-design headphones feature high-resolution audio and a titanium driver for superior sound quality. With up to 48 hours of battery life, DNN noise cancellation for crystal clear calls, low latency gaming mode, and a lightweight and comfortable design, the W820NB is a great choice for anyone on the go.",
    },
    {
      description:
        "The ATH-PG1 headphones are designed with gamers in mind, providing an extraordinarily immersive sound and long-lasting comfort that allows you to fully immerse yourself in the game for as long as you want. The large 44mm drivers deliver powerful and lively sound, finely tuned to accentuate every sound detail in the gaming environment. The closed-back headphones are made of lightweight materials and feature soft leather earpads and headband, allowing you to play without experiencing fatigue.",
      title: "ATH-PG1",
      images: [
        "/products/ath-pg1_01__58649.jpg",
        "/products/ath-pg1_02__22968.jpg",
        "/products/ath-pg1_03__53836.jpg",
      ],
      inStock: 15,
      price: 129.99,
      slug: "ath-pg1",
      category: "headphone",
      metaKeywords:
        "ATH-PG1, gaming headphones, immersive sound, comfortable, lightweight materials, soft leather earpads, adjustable headband",
      metaDescription:
        "Designed with gamers in mind, the ATH-PG1 headphones provide an extraordinarily immersive sound and long-lasting comfort that will keep you in the game for as long as you want. With large 44 mm drivers, these closed-back headphones are expertly tuned to accentuate every sound detail in your gaming environment. Made of lightweight materials and featuring soft leather earpads and an adjustable headband, the ATH-PG1 lets you play without experiencing fatigue.",
    },
    {
      description:
        "The Edifier K800 is a cutting-edge headphone with an ergonomic and touch design that allows you to easily control your music and calls. In addition, its noise cancellation and high-quality sound make it ideal for any situation.",
      title: "Edifier K800",
      images: [
        "/products/Edifier_USB_K800_1__90648.jpg",
        "/products/Edifier_USB_K800_2__45102.jpg",
      ],

      inStock: 10,
      price: 89.99,
      slug: "edifier_k800",
      category: "headphone",
      metaKeywords:
        "Edifier K800, headphones, wireless, noise-cancelling, high-quality sound, touch control, ergonomic design",
      metaDescription:
        "Experience cutting-edge technology with the Edifier K800 headphones. With a sleek, ergonomic design and touch controls, these wireless headphones offer high-quality sound and noise-cancelling capabilities for any situation.",
    },
    {
      description:
        "The ATH-ANC900BT QuietPoint® wireless circumaural headphones use hybrid digital active noise-cancellation technology, providing the highest level of noise reduction of any QuietPoint® model. This allows you to listen to music, watch videos, and answer phone calls in extremely noisy locations without any unwanted sound details interfering with what you really want to hear. That said, the headphones also feature a switchable function that lets you hear voices when you want to, so you can maintain conversations and hear important announcements without having to take them off.",
      title: "ATH-ANC900BT",
      images: [
        "/products/ath-anc900bt_01__12958.jpg",
        "/products/ath-anc900bt_06__97327.jpg",
        "/products/ath-anc900bt_08__64455.jpg",
        "/products/ath-anc900bt_09__56098.jpg",
        "/products/ath-anc900bt_10__29949.jpg",
      ],
      inStock: 8,
      price: 119.99,
      slug: "ath-anc900bt",
      category: "headphone",
      metaKeywords:
        "ATH-ANC900BT QuietPoint®, wireless headphones, noise-cancellation, hybrid noise-cancelling technology, ambient mode",
      metaDescription:
        "Experience the highest level of noise-cancellation with the ATH-ANC900BT QuietPoint® wireless circumaural headphones. Featuring digital hybrid noise-cancelling technology, you can enjoy your music, videos, and phone calls without any unwanted noise. Switch to ambient mode to hear voices and important announcements without taking them off.",
    },
    {
      description:
        "The Pioneer S9 features active noise cancellation technology that fully immerses you in music without being bothered by ambient noise. Additionally, the Ambient Awareness mode allows the appropriate amount of outside sound to enter. With the new assistant button, you can skip or pause songs, receive notifications about new messages, and search using voice control without having to take out your phone. Bluetooth® technology is compatible with Qualcomm® aptX™ HD* sound, allowing for high-quality playback with all the freedom of a wireless connection. Thanks to a high-capacity integrated battery, continuous music playback is possible for 24 hours a day, making it ideal for long flights. The premium finish with aluminum housings and the use of textured and comfortable materials add a quality accent to your daily style.",
      title: "Pioneer SE-MS9BN",
      images: [
        "/products/Pioneer_MS9BN_1__19623.jpg",
        "/products/Pioneer_MS9BN_2__40096.jpg",
        "/products/Pioneer_MS9BN_4__56006.jpg",
      ],
      inStock: 12,
      price: 49.99,
      slug: "pioneer_se-ms9bn",
      category: "headphone",
      metaKeywords:
        "Pioneer S9, active noise cancelling, Ambient Awareness, Bluetooth, Qualcomm aptX, 24-hour battery, premium design",
      metaDescription:
        "The Pioneer S9 with active noise cancelling technology immerses you in music without disruptions. Use the Ambient Awareness mode for the right amount of outside sound. With the assistant button, skip songs, receive message notifications, and use voice control. Bluetooth technology with aptX HD* sound allows high-quality playback with wireless freedom. A high-capacity battery enables 24-hour continuous music playback, perfect for long flights. The premium finish with aluminum housings and textured materials add quality to your style.",
    },
    {
      description:
        "The ATH-WS660BT wireless circumaural headphones combine exclusive 53mm Deep Motion drivers with Bluetooth technology to generate clear full-range sound with powerful bass. The exclusive dual-layer memory foam earpads contribute to the sound quality, with a rigid inner layer and a soft outer layer providing excellent sound isolation and comfort.",
      title: "ATH-WS660BT",
      images: [
        "/products/ATH-WS660BT__47432.jpg",
        "/products/ath_ws660bt_brd_1_sq__04036.jpg",
      ],
      inStock: 14,
      price: 59.99,
      slug: "ath-ws660bt",
      category: "headphone",
      metaKeywords:
        "wireless headphones, ATH-WS660BT, Deep Motion, Bluetooth, full-range sound, powerful bass, memory foam earpads",
      metaDescription:
        "Experience clear, full-range sound with powerful bass with the ATH-WS660BT wireless over-ear headphones. Featuring exclusive 53mm Deep Motion drivers and Bluetooth technology, these headphones also offer excellent sound isolation and comfort with their unique dual-layer memory foam earpads.",
    },
    {
      description:
        "The high-quality ATH-G1 gaming headphones feature 45mm large-diameter drivers, specially tuned with a maximum input capacity of 1300 mW to deliver vibrant, studio-quality sound to any gaming environment. In addition, they come equipped with a state-of-the-art flexible (and detachable) boom microphone that allows you to communicate with your gaming teammates and streaming audience – the highly directional mic pickup ensures that you're always heard loud and clear.",
      title: "ATH-G1",
      images: [
        "/products/ath_g1_1_sq__22108.jpg",
        "/products/ath_g1_2_sq__69743.jpg",
        "/products/ath_g1_3_sq__18745.jpg",
        "/products/ath_g1_5_sq__76835.jpg",
        "/products/ath_g1_9_sq__74380.jpg",
      ],
      inStock: 0,
      price: 89.99,
      slug: "ath-g1",
      category: "headphone",
      metaKeywords:
        "ATH-G1, gaming headphones, high-quality sound, 45mm drivers, detachable microphone",
      metaDescription:
        "Experience high-quality sound with the ATH-G1 gaming headphones featuring 45mm drivers and a maximum input capacity of 1300mW. Communicate clearly with a flexible and detachable microphone designed for directional pickup. Perfect for any gaming environment.",
    },
    // !SPEAKERS:
    {
      description:
        "With the XT15 monitor, you'll enjoy your music, movies, TV shows, and games to the fullest with dynamic, natural-sounding high-resolution sound full of bass. With Hi-Res Audio certification, compatibility with Dolby Atmos and DTS:X, an affordable price, and a compact design that allows it to be placed virtually anywhere, the MXT15 delivers on Polk's promise of great sound for everyone.",
      title: "Polk XT15",
      images: [
        "/products/Polk_XT15_1__06036.jpg",
        "/products/Polk_XT15_2__02143.jpg",
        "/products/Polk_XT15_3__14498.jpg",
      ],
      inStock: 25,
      price: 199.99,
      slug: "polk_xt15",
      category: "speaker",
      metaKeywords:
        "XT15 monitor, high-resolution sound, Hi-Res Audio, Dolby Atmos, DTS:X, natural bass, Polk",
      metaDescription:
        "Experience high-resolution dynamic sound with the XT15 monitor. With Hi-Res Audio certification, Dolby Atmos and DTS:X compatibility, and natural bass, the MXT15 delivers on Polk's promise of great sound for everyone at an affordable price.",
    },
    {
      description:
        "With the XT20 monitor, you'll enjoy your music, movies, TV shows, and games with the exciting energy of dynamic, realistic high-resolution sound full of natural bass. With Hi-Res Audio certification, compatibility with Dolby Atmos and DTS:X, an affordable price, and a modern design, the MXT20 bookshelf speaker delivers on Polk's promise of great sound for everyone.",
      title: "Polk XT20",
      images: [
        "/products/Polk_XT20_1__24664.jpg",
        "/products/Polk_XT20_2__75107.jpg",
        "/products/Polk_XT20_3__46204.jpg",
      ],
      inStock: 20,
      price: 249.99,
      slug: "polk_xt20",
      category: "speaker",
      metaKeywords:
        "XT20 monitor, high-resolution sound, Hi-Res Audio, Dolby Atmos, DTS:X, natural bass, Polk, bookshelf speaker",
      metaDescription:
        "Experience the exciting energy of dynamic and realistic high-resolution sound with the XT20 monitor. With Hi-Res Audio certification, Dolby Atmos and DTS:X compatibility, natural bass, an affordable price, and modern design, the MXT20 bookshelf speaker delivers on Polk's promise of great sound for everyone.",
    },
    {
      title: "KEF LS50",
      description:
        "The KEF LS50 Wireless II is more than a high-performance speaker, it's the perfect all-in-one speaker system, streaming from any source thanks to wireless compatibility with AirPlay 2, Chromecast, and more, as well as wired connections for your TV, gaming console, and turntable. Great sound, no strings attached.",
      images: [
        "/products/KEF_LS50W_II_1__10150.jpg",
        "/products/KEF_LS50W_II_2__34975.jpg",
        "/products/KEF_LS50W_II_3__28638.jpg",
        "/products/KEF_LS50W_II_4__78682.jpg",
      ],
      inStock: 8,
      price: 99.99,
      slug: "kef_ls50",
      category: "speaker",
      metaKeywords:
        "KEF LS50 Wireless II, high-performance speaker, all-in-one system, wireless compatibility, AirPlay 2, Chromecast, wired connections, TV, gaming console, turntable",
      metaDescription:
        "Experience great sound without limitations with the KEF LS50 Wireless II, the perfect all-in-one speaker system that streams from any source with wireless compatibility for AirPlay 2, Chromecast, and more, as well as wired connections for your TV, gaming console, and turntable.",
    },
    {
      title: "KEF LS50Meta",
      description:
        "Big speakers disappear to let the music take center stage. LS50 Meta is one of those speakers. Incredibly immersive sound allows you to lose yourself in your favorite music. You'll feel every nuance of layer upon layer of instruments with exceptional acoustic precision from anywhere in the room.",
      images: [
        "/products/KEF_LS50Meta_Azul_1__38003.jpg",
        "/products/KEF_LS50Meta_Azul_5__96472.jpg",
        "/products/KEF_LS50Meta_Azul_2__32094.jpg",
      ],
      inStock: 15,
      price: 129.99,
      slug: "kef_ls50meta",
      category: "speaker",
      metaKeywords:
        "LS50 Meta speaker, immersive sound, music experience, acoustic precision, layer by layer instruments, room-filling sound",
      metaDescription:
        "Experience an immersive music experience with the LS50 Meta speaker, where the room-filling sound allows you to get lost in your favorite music. With exceptional acoustic precision, you can feel every layer-by-layer of instruments from anywhere in the room.",
    },
    {
      title: "Magnat Signature 703",
      description:
        "Take your favorite songs to a whole new level with SoundSurges. With surround sound and powerful bass, these speakers are the perfect companion for any party or event.",
      images: [
        "/products/Magnat_Signature_703_Black_1__45096.jpg",
        "/products/Magnat_Signature_703_Black_2__61745.jpg",
        "/products/Magnat_Signature_703_Black_3__42820.jpg",
      ],
      inStock: 10,
      price: 149.99,
      slug: "magnat_signature_703",
      category: "speaker",
      metaKeywords:
        "SoundSurges speakers, powerful sound, surround sound, deep bass, party speaker, event speaker",
      metaDescription:
        "Take your favorite songs to a whole new level with SoundSurges. With surround sound and powerful deep bass, these speakers are the perfect companion for any party or event.",
    },
    {
      title: "Magnat Signature 503",
      description:
        "The Signature 503 is the most compact bookshelf speaker of the new 500 series. As a three-way system, it combines the high-resolution dual tweeter module with a 17 cm bass-midrange driver. It all fits into a surface area smaller than an A4 sheet of paper and a height of 365 mm. The solid MDF housing is available in two stylish finishes in black ash or mocha. As a compact stereo solution, it can also be used as a surround sound speaker in a home theater setup. With identical equipment to the front systems, it provides an absolutely homogeneous sound spectrum. The Signature 503 is the best proof that perfect sound doesn't necessarily require huge speakers",
      images: [
        "/products/Magnat_Signature_503_Black_1__57068.jpg",
        "/products/Magnat_Signature_503_Black_2__90858.jpg",
        "/products/Magnat_Signature_503_Black_3__83923.jpg",
      ],
      inStock: 5,
      price: 199.99,
      slug: "magnat_signature_503",
      category: "speaker",
      metaKeywords:
        "Signature 503 speaker, compact size, three-way system, high-resolution tweeter, 17cm mid-bass driver, MDF housing, black ash, mocha finish, stereo solution, surround sound speaker, home theater",
      metaDescription:
        "Experience high-quality sound with the compact Signature 503 speaker from the new 500 series. Its three-way system combines a high-resolution dual tweeter module with a 17cm mid-bass driver, all packed into a surface smaller than an A4 sheet of paper and a height of 365mm. With a solid MDF housing available in black ash or mocha finish, it can be used as a compact stereo solution or a surround sound speaker for a home theater setup, providing a homogeneous sound spectrum with front system identical equipment.",
    },
    {
      title: "Magnat Monitor Supreme 102",
      description:
        "The Monitor Supreme 102 is the particularly compact 2-way bookshelf speaker of the series. Its solid MDF housing provides a high-quality working environment for both precision drivers.",
      images: [
        "/products/Magnat_Monitor_Supreme_102_Black_1__63345.jpg",
        "/products/Magnat_Monitor_Supreme_102_Black_2__70259.jpg",
        "/products/Magnat_Monitor_Supreme_102_Black_3__89437.jpg",
      ],
      inStock: 20,
      price: 179.99,
      slug: "magnat_monitor_supreme_102",
      category: "speaker",
      metaKeywords:
        "Monitor Supreme 102 speaker, compact size, 2-way system, MDF housing, precision drivers, high-quality environment",
      metaDescription:
        "Experience high-quality sound in a compact size with the Monitor Supreme 102 speaker, the specially compact 2-way bookshelf speaker from the series. Its solid MDF housing provides a high-quality environment for both precision drivers, ensuring exceptional sound quality.",
    },
    {
      description:
        "The Edifier R1700BTs are versatile and powerful speakers for an unparalleled audio experience. With a modern and elegant design, these speakers combine sound quality and aesthetics. Connect your favorite devices and listen to music, podcasts, videos, and more in high quality.",
      title: "Edifier R1700BTs",
      images: [
        "/products/R1700BTs_1__47324.jpg",
        "/products/R1700bts_2__84764.jpg",
        "/products/ZM-CMYK-R1700BTs__24367.jpg",
        "/products/CM-1-CMYK-R1700BTs__30414.jpg",
      ],
      inStock: 6,
      price: 49.99,
      slug: "edifier_r1700bts",
      category: "speaker",
      metaKeywords:
        "Edifier R1700BTs speakers, versatile, powerful, high-quality sound, modern design, aesthetics, device connectivity, music, podcast, videos, audio experience",
      metaDescription:
        "Experience unparalleled audio with the versatile and powerful Edifier R1700BTs speakers. With a modern and elegant design, these speakers combine high-quality sound with aesthetics. Connect your favorite devices and listen to music, podcasts, videos, and more in high quality.",
    },
    {
      description:
        "The Edifier R1280DBs are the great renewal of the R1280DB, the entry-level Bluetooth speakers. Among its most interesting improvements is the integration of Bluetooth 5.0 and an advanced front-facing bass reflex port. Of course, it maintains its multiple inputs, including optical, coaxial, and dual RCA, and in its output section, it incorporates a subwoofer output.",
      title: "Edifier R1280DBs",
      images: [
        "/products/edifier-r1280ts-altavoces-estanteria__37405.jpg",
        "/products/Edifier_R1280DBs_Madera_4__40110.jpg",
        "/products/r1280dbs-edifier-marron__43039.jpg",
      ],
      inStock: 7,
      price: 79.99,
      slug: "edifier_r1280dbs",
      category: "speaker",
      metaKeywords:
        "Edifier R1280DBs, Bluetooth 5.0, bass reflex port, multiple inputs, subwoofer output, entry-level speakers, advanced features",
      metaDescription:
        "Experience the great upgrade of the entry-level Edifier R1280DBs speakers, featuring Bluetooth 5.0 integration and an advanced front bass reflex port. With multiple inputs including optical, coaxial, and dual RCA, and a subwoofer output, these speakers have advanced features for a superior audio experience.",
    },
    {
      description:
        "The Gold 100 acoustic box has been carefully designed to be placed in small rooms. The high-level electroacoustic technology inherited from our reference range, the Platinum II Series, and the beautiful construction of its enclosure ensure maximum level sound and appearance no matter where it is installed.",
      title: "Monitor Audio Gold 100",
      images: [
        "/products/MA_Gold_100_Ebony_1__00093.jpg",
        "/products/MA_Gold_100_Ebony_4__34497.jpg",
        "/products/MA_Gold_100_Ebony_5__36879.jpg",
      ],
      inStock: 9,
      price: 99.99,
      slug: "monitor_audio_gold_100",
      category: "speaker",
      metaKeywords:
        "Gold 100, compact speaker, high-performance electroacoustic technology, Platinum II range, small rooms, expertly designed",
      metaDescription:
        "Discover the Gold 100 compact speaker, expertly designed for small rooms with high-performance electroacoustic technology inherited from our Platinum II range.",
    },
    {
      description:
        "Imagine a bookshelf speaker that provides richer sound and deeper bass than your old floor-standing speaker. This is what the Monitor Audio Silver 100 7G offers. On the outside, several carefully selected genuine wood veneers allow it to achieve the perfect look. Inside there is a real concentrate of technologies, including metal cone speakers and Rigid Surface Technology II, a newly designed tweeter, and a new frequency divider that intelligently combines the two transducers used. If all this sounds like noise to you, don't worry. You'll hear the difference the moment you hit “play”.",
      title: "Monitor Audio Silver 100 7G",
      images: [
        "/products/MA_Silver_100_7G_Natural_Walnut_3__89671.jpg",
        "/products/MA_Silver_100_7G_Natural_Walnut_4__86996.jpg",
        "/products/MA_Silver_100_7G_Natural_Walnut_5__14579.jpg",
      ],
      inStock: 45,
      price: 149.99,
      slug: "monitor_audio_silver_100_7g",
      category: "speaker",
      metaKeywords:
        "Monitor Audio Silver 100 7G, bookshelf speaker, metal cone speakers, Rigid Surface Technology, new frequency crossover, authentic wood veneer",
      metaDescription:
        "Upgrade your home audio experience with the Monitor Audio Silver 100 7G bookshelf speaker. With metal cone speakers, Rigid Surface Technology, a new frequency crossover, and authentic wood veneer, you'll hear the difference as soon as you hit play.",
    },
    // !EARPHONES
    {
      description:
        "The FiiO FD3 is part of the FD range of the brand, with a renewed aesthetic but maintaining the DNA of charming sound. Inside rests a DLC diamond dynamic driver, which in turn combines with a semi-open acoustic design to provide sound quality far superior to its competitors. With this, and if you want to get the maximum definition, the FiiO FD3 is the headphones you need",
      title: "FiiO FD3",
      images: [
        "/products/FiiO_FD3_1__68818.jpg",
        "/products/FiiO_FD3_2__37848.jpg",
        "/products/FiiO_FD3_3__11732.jpg",
      ],
      inStock: 25,
      price: 99.99,
      slug: "fiio_fd3",
      category: "earphone",
      metaKeywords:
        "FiiO FD3, in-ear headphones, diamond DLC dynamic driver, semi-open acoustic design, high definition audio",
      metaDescription:
        "Experience superior audio quality with the FiiO FD3 in-ear headphones, featuring a diamond DLC dynamic driver and semi-open acoustic design. Upgrade to high definition audio and make the FiiO FD3 your go-to headphones.",
    },
    {
      title: "Sennheiser Momentum 3",
      description:
        "With MOMENTUM True Wireless 3, perfection has been redefined: the best sound in its class thanks to Sennheiser's TrueResponse extra-wide band transducer and state-of-the-art adaptive noise cancellation, which adapts perfectly to the environment to ensure a truly immersive listening experience.",
      images: [
        "/products/Momentum_True_Wireless_3_1__31703.jpg",
        "/products/Momentum_True_Wireless_3_2__84980.jpg",
        "/products/Momentum_True_Wireless_3_3__15232.jpg",
      ],
      inStock: 8,
      price: 69.99,
      slug: "sennheiser_momentum_3",
      category: "earphone",
      metaKeywords:
        "Sennheiser MOMENTUM True Wireless 3, TrueResponse transducer, adaptive noise cancellation, immersive audio experience",
      metaDescription:
        "Experience true perfection with Sennheiser MOMENTUM True Wireless 3 earbuds. Enjoy the best sound in its class with the TrueResponse transducer and cutting-edge adaptive noise cancellation that adjusts to your environment for a truly immersive audio experience.",
    },
    {
      title: "Sennheiser Sport",
      description:
        "The new Sennheiser SPORT True Wireless feature a 7mm dynamic audio driver for a high-quality sound experience with deep bass. With the Smart Control app, you can adjust the experience with presets and an intuitive equalizer. Its sleek and sturdy design has an IP54 rating to withstand sweat, rain, and outdoor workouts. Additionally, they provide up to 9 hours of playtime and an additional 18 hours with their charging case, for a total of 27 hours. With two styles of ear tips, the Sennheiser SPORT True Wireless are perfect for different types of workouts.",
      images: [
        "/products/Sport_True_Wireless_1__72299.jpg",
        "/products/Sport_True_Wireless_2__20360.jpg",
        "/products/Sport_True_Wireless_3__11564.jpg",
        "/products/Sport_True_Wireless_4__52637.jpg",
      ],
      inStock: 15,
      price: 109.99,
      slug: "sennheiser_sport",
      category: "earphone",
      metaKeywords:
        "Sennheiser SPORT True Wireless, 7mm dynamic audio driver, Smart Control app, IP54 rating, 9-hour battery life, sweat-resistant, multiple earbud sizes",
      metaDescription:
        "Get high-quality sound with deep bass and a durable design with Sennheiser SPORT True Wireless earbuds. With a 7mm dynamic audio driver and the Smart Control app, you can customize your listening experience. These sweat-resistant earbuds have an IP54 rating, provide up to 9 hours of playback time, and come with multiple earbud sizes for different workouts.",
    },
    {
      title: "FiiO JH3 Drivers",
      description:
        "The JH3 headphones offer exceptional performance thanks to their combination of one dynamic driver and two balanced armature drivers. With an extra-large 13.6mm dynamic driver, they achieve powerful and natural bass. State-of-the-art engineering and a new magnetic structure improve magnetic flux by 20%, resulting in superior sound quality.",
      images: [
        "/products/FiiO_JH3_1__58871.jpg",
        "/products/FiiO_JH3_3__75480.jpg",
        "/products/FiiO_JH3_4__34608.jpg",
        "/products/FiiO_JH3_5__32622.jpg",
      ],
      inStock: 0,
      price: 99.99,
      slug: "fiio_jh3_drivers",
      category: "earphone",
      metaKeywords:
        "JH3 headphones, dynamic driver, balanced armature drivers, powerful bass, 13.6mm driver, superior sound quality",
      metaDescription:
        "Experience exceptional audio performance with JH3 headphones, featuring a combination of dynamic and balanced armature drivers. With a large 13.6mm dynamic driver, these headphones deliver powerful and natural bass. The latest engineering and a new magnetic structure improve magnetic flux by 20%, resulting in superior sound quality.",
    },
    {
      description:
        "The FiiO FA7s are the new in-ear headphones with 6 balanced armature drivers and third-generation industrial design, as well as a high-purity monocrystalline cable. Their stainless steel construction and interchangeable connector options make the FA7s an ideal choice for dedicated use.",
      title: "FiiO FA7 6 Drivers",
      images: [
        "/products/FiiO_FA7s_1__62599.jpg",
        "/products/FiiO_FA7s_2__86015.jpg",
        "/products/FiiO_FA7s_3__23162.jpg",
      ],
      inStock: 6,
      price: 49.99,
      slug: "fiio_fa7s_6_drivers",
      category: "earphone",
      metaKeywords:
        "FiiO FA7, in-ear headphones, 6 drivers, Balanced-Armature, industrial design, stainless steel, monocrystalline cable, interchangeable connectors, dedicated use",
      metaDescription:
        "Discover the new FiiO FA7 in-ear headphones with 6 Balanced-Armature drivers, a third-generation industrial design, and a high-purity monocrystalline cable. Made of stainless steel and with the option to interchange connectors, the FA7s are an ideal alternative for dedicated use",
    },
    {
      description:
        "The FiiO FH9s are the new top-of-the-range hybrid in-ear headphones from the brand, developed over two years by FiiO engineers to achieve maximum definition and comfort for your listening sessions.",
      title: "FiiO FH9 7 Drivers",
      images: [
        "/products/FiiO_FH9_1__24691.jpg",
        "/products/FiiO_FH9_2__33478.jpg",
        "/products/FiiO_FH9_3__06009.jpg",
      ],
      inStock: 7,
      price: 79.99,
      slug: "fiio_fh9_7_drivers",
      category: "earphone",
      metaKeywords:
        "FiiO, FH9, in-ear, headphones, hybrid, flagship, maximum definition, comfort, listening sessions",
      metaDescription:
        "Discover the FiiO FH9, the new flagship hybrid in-ear headphones designed to deliver maximum definition and comfort during your listening sessions.",
    },
  ],
};

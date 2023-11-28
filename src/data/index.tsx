import { useTranslations } from "next-intl";

export function getBoycottList() {
    const food = useTranslations("Food");
    const boycottList = [ 

    // ------------------------------------ Start Food Data ---------------------------------------------------------
    {
        "id" : 1,
        "name": "Nestle",
        "img_url": "https://ucarecdn.com/377f782d-28e4-4991-9aef-fdabdb698a79/NestleLogo2015.png",
        "categories": food("FoodData.categoriesNestle").split(',').map(category => category.trim()),
        "desc" : food("FoodData.descNestle"),
        "proof_link" :'https://en.wikipedia.org/wiki/Osem_(company)',
        "alternatives" : food("FoodData.alternativesNestle").split(',').map(alternative => alternative.trim())
    },
    {
        "id" : 2,
        "name": "Cadbury",
        "img_url": "https://ucarecdn.com/5003df5a-584b-4861-9da0-f7359efd6e7e/0_unnamed.png",
        "categories" : ["food", ],
        "desc" : "The owner of Cadbury, Mondelez, invests in Israeli start ups in Occupied Palestine.",
        "proof_link" : 'https://ir.mondelezinternational.com/news-releases/news-release-details/mondelez-international-snackfutures-makes-seed-investment',
        "alternatives" : ["Supermarket own brand options"]
    },
    {
        "id" : 3,
        "name": "Maggi",
        "img_url": "https://ucarecdn.com/3c01fce2-c7ed-4da1-a967-686ffff01522/MaggiLogo1987.png",
        "categories" : [ "food", ],
        "desc" : "Avoid Nestle products until they divest all operations in Occupied Palestine. Especially avoid any Osem brands such as Sabra Salads and others which can be found via the wikipedia page in the source.",
        "proof_link" : 'https://en.wikipedia.org/wiki/Osem_(company)',
        "alternatives" : ["Supermarket own brand options"]
    },
    {
        "id" : 4,
        "name": "Lipton",
        "img_url": "https://ucarecdn.com/d7fcdecf-2bb1-4e08-a6a1-0b46c19fd7c6/liptonlogoDCDE1598CBseeklogocom.png",
        "categories" : ["drinks", ],
        "desc" : `Lipton, a renowned tea brand under the ownership of PepsiCo, holds a significant presence in the global tea market. However, recent discussions have emerged concerning PepsiCo’s affiliations and investments in companies connected to Israel, prompting scrutiny into Lipton’s stance on geopolitical issues`,
        "proof_link" : 'https://www.mayniaga.com/liptons-support-for-israel-examining-the-details/',
        "alternatives" : ["Supermarket own brand options"]
    },
    {
        "id" : 5,
        "name": "Nescafe",
        "img_url": "https://ucarecdn.com/54d9fffd-dae3-4850-86af-62d77a3f7a20/cca37b12ba6f2258cc055202ceccc2f9.jpg",
        "categories" : ["drinks","coffee",],
        "desc" : `Avoid Nestle products until they divest all operations in Occupied Palestine. Especially avoid any Osem brands such as Sabra Salads and others which can be found via the wikipedia page in the source.`,
        "proof_link" : 'https://en.wikipedia.org/wiki/Osem_(company)',
        "alternatives" : ["Supermarket own brand options"]
    },
    {
        "id" : 6,
        "name": "Kitkat",
        "img_url": "https://ucarecdn.com/d9983eac-b750-479b-a4c0-d271efb0e419/kitkatlogoEF483A34CAseeklogocom.png",
        "categories" : ["food",],
        "desc" : `The owner of the KitKat brand, Nestle, owns a controlling stake in Osem. Osem is an Israeli food manufacturer which operates in Occupied Palestine.`,
        "proof_link" : 'https://en.wikipedia.org/wiki/Osem_(company)',
        "alternatives" : ["Supermarket own brand options"]
    },
    {
        "id": 7,
        "name": "Oreo",
        "img_url": "https://ucarecdn.com/d735c627-e16b-47f8-8fd6-905ad7a41b2c/Oreo_Logo_Design_History_Evolution_0_1024x1024.jpg",
        "categories" : ["food"],
        "desc" : `The owner of Oreo, Mondelez, invests in Israeli start ups in Occupied Palestine.`,
        "proof_link" : 'https://ir.mondelezinternational.com/news-releases/news-release-details/mondelez-international-snackfutures-makes-seed-investment',
        "alternatives" : ["Supermarket own brand options"]
    },
    {
        "id": 8,
        "name": "Mars",
        "img_url": "https://ucarecdn.com/7a2a6373-b060-433b-b7ab-f0f8ab55a6a3/336bb5073a4947ebbb6c8851ba34eee0_rw_1920.jpg",
        "categories" : ["food",],
        "desc" : `Mars supports the zionist state by investing heavily in the foodtech startup scene through venture capital partner JVC.`,
        "proof_link" : 'https://aus.mars.com/news-and-stories/press-releases/mars-partners-with-jerusalem-venture-partners',
        "alternatives" : ["Supermarket own brand options"]
    },
    {
        "id": 9,
        "name": "Snickers",
        "img_url": "https://ucarecdn.com/0abbf635-a49b-4a8a-b886-2513bc465ac4/SnickersLogo.jpg",
        "categories" : ["food",],
        "desc" : `The owner of Snickers, Mars, supports the zionist state by investing heavily in the foodtech startup scene through venture capital partner JVC.`,
        "proof_link" : 'https://aus.mars.com/news-and-stories/press-releases/mars-partners-with-jerusalem-venture-partners',
        "alternatives" : ["Supermarket own brand options"]
    },
    {
        "id": 10,
        "name": "Pringles",
        "img_url": "https://ucarecdn.com/5afb7229-b1cc-4462-9dee-5cd275dd9df8/PringlesLogo2009.png",
        "categories" : ["food",],
        "desc" : `Pringles Expansion Into Israel`,
        "proof_link" : 'https://www.slideshare.net/RyanACC/pringles-expansion-into-israel',
        "alternatives" : ["Supermarket own brand options"]
    },
    {
        "id": 11,
        "name": "Milo",
        "img_url": "https://ucarecdn.com/eb709c15-161c-473a-8f11-9bc10a83ee4d/14a8b2fb25797e6b31a3254f5673b5ed.jpg",
        "categories" : ["food",],
        "desc" : `Avoid Nestle products until they divest all operations in Occupied Palestine. Especially avoid any Osem brands such as Sabra Salads and others which can be found via the wikipedia page in the source.`,
        "proof_link" : 'https://en.wikipedia.org/wiki/Osem_(company)',
        "alternatives" : ["Supermarket own brand options"]
    },
    {
        "id": 12,
        "name": "Toblerone",
        "img_url": "https://ucarecdn.com/0a56082c-6ab5-48f2-bfa6-29340375d158/tobleroneemblem.jpg",
        "categories" : ["food",],
        "desc" : `The owner of Toblerone, Mondelez, invests in Israeli start ups in Occupied Palestine.`,
        "proof_link" : 'https://ir.mondelezinternational.com/news-releases/news-release-details/mondelez-international-snackfutures-makes-seed-investment',
        "alternatives" : ["Supermarket own brand options"]
    },
    {
        "id": 13,
        "name": "Nestum",
        "img_url": "https://ucarecdn.com/7ea8edbf-8ee9-469c-b9c1-31cb126c0e12/Nestum.png",
        "categories": ["food"],
        "desc": "Avoid Nestle products until they divest all operations in Occupied Palestine.", 
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)", 
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 14,
        "name": "MatKool",
        "img_url": "https://ucarecdn.com/eff25cf4-d876-4d6c-b1fd-4cdd00ddb6d0/matkool.png",
        "categories": ["food"],
        "desc": "Avoid Nestle products until they divest all operations in Occupied Palestine.", 
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 15,
        "name": "Nutella",
        "img_url": "https://ucarecdn.com/1f783abf-282e-4fd0-8d9f-5fdfcee15279/Nutella_Logo_Design_History_Evolution_0.jpg",
        "categories": ["food"],
        "desc": "Nutella is a chocolate product belonging to the Italian company Ferrero, which was founded in 1963, and is sold in more than 100 countries around the world.",
        "proof_link": "https://us.firenews.video/culture-and-trends/does-nutella-support-israel-fasil-news/",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 16,
        "name": "Coca-Cola",
        "img_url": "https://ucarecdn.com/a1517af7-d942-460c-809c-c8583e311a4e/KOb23a2a5e.png",
        "categories": ["drinks"],
        "desc": "Coca-Cola operates a factory in the illegal Israeli settlement of Atarot, which is built in Occupied Palestine.",
        "proof_link": "https://www.foa.org.uk/campaign/boycottcocacola",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 17,
        "name": "Nestea",
        "img_url": "https://ucarecdn.com/4d6ab0c4-c597-4158-b3af-5b5d162bf5c1/NestealogoAAB34A76C2seeklogocom.png",
        "categories": ["drinks"],
        "desc": "Nestea, known for its iced tea offerings, holds a significant place among beverage choices, particularly under the Nestle umbrella",
        "proof_link": "https://www.mayniaga.com/nesteas-support-for-israel-examining-the-details/",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 18,
        "name": "Knorr",
        "img_url": "https://ucarecdn.com/1bcdbc9d-4ff5-4800-8863-a55cdc6482fd/KnorrLogo2004.jpg",
        "categories": ["food"],
        "desc": "Knorr is owned by Unilever. Ben & Jerry's is also owned by Unilever. When Ben & Jerry's decided to stop selling its products in Israel, Unilever sold off the Israeli distribution rights to Avi Zinger to circumvent their decision and to force Ben & Jerry's brand name to continue selling in Israel.",
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 19,
        "name": "Hershey",
        "img_url": "https://ucarecdn.com/c7655acd-2985-4227-a180-dee3596f0193/HersheyLogo.png",
        "categories": ["food"],
        "desc": "HERSHEY, AND MARS SUPPORTING ISRAEL",
        "proof_link": "https://www.instagram.com/p/CzH9038LwYF/",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 20,
        "name": "M&M",
        "img_url": "https://ucarecdn.com/43e82f69-ead2-4c06-8589-7f688fdb6ac1/M_M_s_Logo_Design_History_Evolution_0_1024x1024.jpg",
        "categories": ["food"],
        "desc": "The owner of M&M's, Mars, supports the zionist state by investing heavily in the foodtech startup scene through venture capital partner JVC.",
        "proof_link": "https://aus.mars.com/news-and-stories/press-releases/mars-partners-with-jerusalem-venture-partners",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 21,
        "name": "La Cremeria",
        "img_url": "https://ucarecdn.com/d041d9b1-ed49-40b3-9703-8d7bbf193fc7/NestleLaCremeriaIndulgentPeanutButterIceCream750ml.jpg",
        "categories": ["food"],
        "desc": "Avoid Nestle products until they divest all operations in Occupied Palestine",
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 22,
        "name": "Haagen-Dazs",
        "img_url": "https://ucarecdn.com/be3de9f8-03ff-426f-a3d1-65a5198d9065/E75JRWNXsAY9ZRQ.jpg",
        "categories": ["food"],
        "desc": "the Mattus family directed their focus towards supporting Jewish, Israeli, and Zionist causes.",
        "proof_link": "https://www.mayniaga.com/haagen-dazss-support-for-israel-examining-the-details/#:~:text=Legacy%20and%20Controversies&text=After%20selling%20H%C3%A4agen%2DDazs%20to,and%20cultural%20projects%20in%20Israel.",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 23,
        "name": "Magnum",
        "img_url": "https://ucarecdn.com/9cdfec82-ea59-4e97-877e-dac99f09c4b1/image.jpg",
        "categories": ["food"],
        "desc": "Magnum Ice Creams is owned by Unilever. Ben & Jerry's is also owned by Unilever. When Ben & Jerry's decided to stop selling its products in Israel, Unilever sold off the Israeli distribution rights to Avi Zinger to circumvent their decision and to force Ben & Jerry's brand name to continue selling in Israel.",
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 24,
        "name": "Lady's Choice",
        "img_url": "https://ucarecdn.com/f00ee510-b213-4035-b05f-6770efd1be83/Ladyschoice2014.png",
        "categories": ["food"],
        "desc": "Lady's Choice has any affiliation with Jewish companies or supports the Zionist occupation of Palestine.",
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 25,
        "name": "Horlicks",
        "img_url": "https://ucarecdn.com/85821d6b-666e-4389-bc1d-bbe0da9cd0aa/e1b7c27166f30acad542fdbd54cecdd5.jpg",
        "categories": ["food", "drinks"],
        "desc": "Horlicks has any affiliation with Jewish companies or supports the Zionist occupation of Palestine.",
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 26,
        "name": "Cornetto",
        "img_url": "https://ucarecdn.com/0d01b285-0655-466d-b8ce-1ee545e0f8f3/CornettoLogo.jpg",
        "categories": ["food"],
        "desc": "Wall's Ice Creams is owned by Unilever. Ben & Jerry's is also owned by Unilever. When Ben & Jerry's decided to stop selling its products in Israel, Unilever sold off the Israeli distribution rights to Avi Zinger to circumvent their decision and to force Ben & Jerry's brand name to continue selling in Israel.",
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 27,
        "name": "Wall's",
        "img_url": "https://ucarecdn.com/22959541-d15a-4a8a-bad5-d1bdf2cded4a/1517239.png",
        "categories": ["food"],
        "desc": "Wall's Ice Creams is owned by Unilever. Ben & Jerry's is also owned by Unilever. When Ben & Jerry's decided to stop selling its products in Israel, Unilever sold off the Israeli distribution rights to Avi Zinger to circumvent their decision and to force Ben & Jerry's brand name to continue selling in Israel.",
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 28,
        "name": "Fanta",
        "img_url": "https://ucarecdn.com/6400e2e4-f353-4034-af39-fe3aa7408c75/fantalogosvg.png",
        "categories": ["drinks"],
        "desc": "Coca-Cola Company which owns Fanta, operates a factory in the illegal Israeli settlement of Atarot, which is built in Occupied Palestine.",
        "proof_link": "https://www.foa.org.uk/campaign/boycottcocacola",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 29,
        "name": "Sprite",
        "img_url": "https://ucarecdn.com/58db866f-d72d-4158-b643-431de544f801/spritelogo0FD1748C65seeklogocom.png",
        "categories": ["drinks"],
        "desc": "Coca-Cola Company which owns Appletiser, operates a factory in the illegal Israeli settlement of Atarot, which is built in Occupied Palestine.",
        "proof_link": "https://www.foa.org.uk/campaign/boycottcocacola",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 30,
        "name": "Pepsi",
        "img_url": "https://ucarecdn.com/787ea55e-6767-4587-9059-5114dd69ee39/Pepsi_logo_2014svg.png",
        "categories": ["drinks"],
        "desc": "PepsiCo owns SodaStream and 50% of Sabra both of which had taken advantage of the Israeli occupation of Palestine.", 
        "proof_link": "https://www.bloomberg.com/view/articles/2018-08-22/pepsico-s-sodastream-purchase-is-sweet-news-for-israelis?leadSource=uverify%20wall",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 31,
        "name": "Jacob's",
        "img_url": "https://ucarecdn.com/0c2fcccc-0fcd-48c4-8090-72320d0aae73/eojroOLChOeyyheHSUCU0ge94J1MDN0mp5QJZzAV.png",
        "categories": ["food"],
        "desc": "Jacob has any affiliation with Jewish companies or supports the Zionist occupation of Palestine.",
        "proof_link": "https://mediavariasi.com/2023/10/boikot-ketahui-jenama-produk-support-israel/",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 32,
        "name": "7up",
        "img_url": "https://ucarecdn.com/e0c06499-f45b-41a8-9d84-3e3162155871/7upcover.jpg",
        "categories": ["drinks"],
        "desc": "The international distributer of 7up, PepsiCo, bought SodaStream for $3.2bn and owns 50% of Sabra both of which had taken advantage of the Israeli occupation of Palestine.",
        "proof_link": "https://www.bloomberg.com/view/articles/2018-08-22/pepsico-s-sodastream-purchase-is-sweet-news-for-israelis?leadSource=uverify%20wall",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 33,
        "name": "Coffee Mate",
        "img_url": "https://ucarecdn.com/1aa1bcfc-5a17-4720-95ce-344a3d61ce7a/CoffeeMate_logo.png",
        "categories": ["food", "coffee"],
        "desc": "The owner of the Coffee Mate brand, Nestle, owns a controlling stake in Osem. Osem is an Israeli food manufacturer which operates in Occupied Palestine.",
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 34,
        "name": "Costa Coffee",
        "img_url": "https://ucarecdn.com/4697e947-21c8-4163-afa4-7e50b26fd4cf/Costa_CoffeelogoDC0FF384B3seeklogocom.png",
        "categories": ["food", "coffee"],
        "desc": "The owner of the Coffee Mate brand, Nestle, owns a controlling stake in Osem. Osem is an Israeli food manufacturer which operates in Occupied Palestine.",
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 35,
        "name": "Dasani Water",
        "img_url": "https://ucarecdn.com/04198210-6653-4160-bc97-1c91c8f31cc9/small_d5eed8a5e3b449628a80ad5e45a49bd6.jpg",
        "categories": ["drinks", "water"],
        "desc": "Coca-Cola Company which owns Dasani Water, operates a factory in the illegal Israeli settlement of Atarot, which is built in Occupied Palestine.",
        "proof_link": "https://www.foa.org.uk/campaign/boycottcocacola",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 36,
        "name": "Gatorade",
        "img_url": "https://ucarecdn.com/c0794cde-ed1b-4434-b39b-5d612d5481da/GatoradeLogo20042009.png",
        "categories": ["drinks"],
        "desc": "The owner of Gatorade, PepsiCo, bought SodaStream for $3.2bn and owns 50% of Sabra both of which had taken advantage of the Israeli occupation of Palestine.",
        "proof_link": "https://www.bloomberg.com/view/articles/2018-08-22/pepsico-s-sodastream-purchase-is-sweet-news-for-israelis?leadSource=uverify%20wall",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 37,
        "name": "Halls",
        "img_url": "https://ucarecdn.com/077b3981-53cd-4ee4-ab41-752573024c77/sl1600.jpg",
        "categories": ["food"],
        "desc": "The owner of Halls, Mondelez, invests in Israeli start ups in Occupied Palestine.",
        "proof_link": "https://ir.mondelezinternational.com/news-releases/news-release-details/mondelez-international-snackfutures-makes-seed-investment",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 38,
        "name": "Mondelez",
        "img_url": "https://ucarecdn.com/7ca3cecd-655c-4103-a2ad-383938c86947/b0c43d171172425Y3JvcCw4MDgsNjMyLDAsMA.png",
        "categories": ["food"],
        "desc": "Mondelez invests in Israeli start ups in Occupied Palestine.",
        "proof_link": "https://ir.mondelezinternational.com/news-releases/news-release-details/mondelez-international-snackfutures-makes-seed-investment",
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 39,
        "name": "Unilever",
        "img_url": "https://ucarecdn.com/b0349f6f-d550-4db3-8efa-463b750aa96b/cz20NOydunilever.jpg",
        "categories": ["food",'drinks','cosmetics'],
        "desc": "Ben & Jerry's is owned by Unilever. When Ben & Jerry's decided to stop selling its products in Israel, Unilever sold off the Israeli distribution rights to Avi Zinger to circumvent their decision and to force Ben & Jerry's brand name to continue selling in Israel.", 
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/", 
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 40,
        "name": "Belvita",
        "img_url": "https://ucarecdn.com/029c6878-2181-4fd6-a85c-feeb95d44b1e/232652518.jpeg",
        "categories": ["food"],
        "desc": "The owner of Belvita, Mondelez, invests in Israeli start ups in Occupied Palestine.", 
        "proof_link": "https://ir.mondelezinternational.com/news-releases/news-release-details/mondelez-international-snackfutures-makes-seed-investment", 
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 41,
        "name": "Nesquik",
        "img_url": "https://ucarecdn.com/306b2910-c1ff-47eb-b8ed-c9fd500adffc/5536529041_1ee6d2a329_b.jpg",
        "categories": ["food"],
        "desc": "The owner of the Nesquik brand, Nestle, owns a controlling stake in Osem. Osem is an Israeli food manufacturer which operates in Occupied Palestine.", 
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)", 
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 42,
        "name": "Koko Krunch",
        "img_url": "https://ucarecdn.com/4584db39-fa4f-43d9-b2ec-2e1acca0f2e1/KokoKrunch.png",
        "categories": ["food"],
        "desc": "Avoid Nestle products until they divest all operations in Occupied Palestine", 
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)", 
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 43,
        "name": "Honey Stars",
        "img_url": "https://ucarecdn.com/5cd53361-a58f-4414-ab1e-3750afa2f2cd/HoneyStars.png",
        "categories": ["food"],
        "desc": "Avoid Nestle products until they divest all operations in Occupied Palestine", 
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)", 
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 44,
        "name": "Fitnesse",
        "img_url": "https://ucarecdn.com/d58d556d-3eb5-4673-b565-a7cb871cf7bf/Fitness_logo.png",
        "categories": ["food"],
        "desc": "Avoid Nestle products until they divest all operations in Occupied Palestine", 
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)", 
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 45,
        "name": "Sjora",
        "img_url": "https://ucarecdn.com/4c9427ee-8818-4980-8995-4e25912d43e5/images",
        "categories": ["drinks"],
        "desc": "Avoid Nestle products until they divest all operations in Occupied Palestine", 
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)", 
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 46,
        "name": "Quaker Oats",
        "img_url": "https://ucarecdn.com/93b8f808-8d0e-49d4-9286-929d3c09f37b/quakeroats3827.jpg",
        "categories": ["food"],
        "desc": "The owner of Quaker Oats, PepsiCo, bought SodaStream for $3.2bn and owns 50% of Sabra both of which had taken advantage of the Israeli occupation of Palestine.", 
        "proof_link": "https://www.bloomberg.com/view/articles/2018-08-22/pepsico-s-sodastream-purchase-is-sweet-news-for-israelis?leadSource=uverify%20wall", 
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 47,
        "name": "Smarties",
        "img_url": "https://ucarecdn.com/4d177283-83a1-4212-ab76-fde2798626e2/smartieslogosquare2022.png",
        "categories": ["food"],
        "desc": "The owner of the Smarties brand, Nestle, owns a controlling stake in Osem. Osem is an Israeli food manufacturer which operates in Occupied Palestine.", 
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)", 
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 48,
        "name": "Lays",
        "img_url": "https://ucarecdn.com/acbbff52-ad60-42c4-9f81-4a685861fed3/7e3b53fe9e058ceca8d15abc464b30ff.jpg",
        "categories": ["food"],
        "desc": "The owner of Lay's, PepsiCo, bought SodaStream for $3.2bn and owns 50% of Sabra both of which had taken advantage of the Israeli occupation of Palestine.", 
        "proof_link": "https://www.bloomberg.com/view/articles/2018-08-22/pepsico-s-sodastream-purchase-is-sweet-news-for-israelis?leadSource=uverify%20wall", 
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 49,
        "name": "Carnation",
        "img_url": "https://ucarecdn.com/18ccf555-9a30-47bd-978b-f1d172cf5771/Carnation.png",
        "categories": ["food"],
        "desc": "The owner of the Carnation brand, Nestle, owns a controlling stake in Osem. Osem is an Israeli food manufacturer which operates in Occupied Palestine.", 
        "proof_link": "https://www.bloomberg.com/view/articles/2018-08-22/pepsico-s-sodastream-purchase-is-sweet-news-for-israelis?leadSource=uverify%20wall", 
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 50,
        "name": "Mountain Dew",
        "img_url": "https://ucarecdn.com/29d4f25a-3262-4f84-aa0e-8abeee97923c/Mountain_Dewlogo59462AD228seeklogocom.png",
        "categories": ["drinks"],
        "desc": "The owner of Mountain Dew, PepsiCo, bought SodaStream for $3.2bn and owns 50% of Sabra both of which had taken advantage of the Israeli occupation of Palestine.", 
        "proof_link": "https://www.bloomberg.com/view/articles/2018-08-22/pepsico-s-sodastream-purchase-is-sweet-news-for-israelis?leadSource=uverify%20wall", 
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 51,
        "name": "Mcdonalds",
        "img_url": "https://ucarecdn.com/1e684066-891c-4132-8423-cb71826abad1/mcdonaldslogo2325D6C1EFseeklogocom.png",
        "categories": ["food","drinks"],
        "desc": "McDonalds Israel supports IDF by providing free food and drinks to Israeli militants. See tweet (click translate) for reference.", 
        "proof_link": "https://twitter.com/McDonaldsIL/status/1715047104895230153", 
        "alternatives": ["Marrybrown" , "The Chicken Rice Shop" , "Ramly's Burger" , "Ayamas" ,"The Manhattan Fish Market"]
    },
    {
        "id": 52,
        "name": "Starbucks",
        "img_url": "https://ucarecdn.com/e186b021-06af-46ba-9214-ad6ef7afc57b/starbuckscoffeelogopngtransparent.png",
        "categories": ["food", "coffee","drinks"],
        "desc": "Howard Shultz is the largest private owner of Starbucks shares and is a staunch zionist who invests heavily in Israels economy including a recent $1.7 Billion investment in cybersecurity startup Wiz.", 
        "proof_link": "https://fortune.com/2021/04/07/wiz-howard-schultz-investment-fundraising-cybersecurity-startups-starbucks-ceo/", 
        "alternatives": ["Zus Coffee" , "Kopi Saigon" , "Tealive" , "Bask Bear","Cool Blog","GIGI Coffee" , "Richiamo"]
    },
    {
        "id": 53,
        "name": "Domino",
        "img_url": "https://ucarecdn.com/8632c1f2-8879-4090-8fd7-c6369077aa05/Dominos_pizza_logosvg.png",
        "categories": ["food"],
        "desc": "Domino Pizza has not publicaly voiced support for Israel but people in Arab countries are calling for its boycott.", 
        "proof_link": "https://www.mayniaga.com/dominos-support-for-israel-examining-the-details/", 
        "alternatives": ["Marrybrown" , "The Chicken Rice Shop" , "Ramly's Burger" , "Ayamas" ,"The Manhattan Fish Market"]
    },
    {
        "id": 54,
        "name": "Omega",
        "img_url": "https://ucarecdn.com/d545e8f5-c3f8-4b3a-82a8-aded7d7ff9f7/product1.png",
        "categories": ["food"],
        "desc": "Avoid Nestle products until they divest all operations in Occupied Palestine", 
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)", 
        "alternatives": ["Supermarket own brand options"]
    },
    {
        "id": 55,
        "name": "Pizza Hut",
        "img_url": "https://ucarecdn.com/16c71307-c9dd-41d4-bc40-bda54c31d125/PizzaHutLogo1999.jpg",
        "categories": ["food"],
        "desc": "Parent company Yum Brands is an investor in Israeli start ups.", 
        "proof_link": "https://www.calcalistech.com/ctech/articles/0,7340,L-3901254,00.html", 
        "alternatives": ["Marrybrown" , "The Chicken Rice Shop" , "Ramly's Burger" , "Ayamas" ,"The Manhattan Fish Market"]
    },
    {
        "id": 56,
        "name": "Burger King",
        "img_url": "https://ucarecdn.com/ce0bc5b9-a3c6-49b1-a4f3-cf08194e4dae/Burger_KinglogoEB00FAD8D3seeklogocom.png",
        "categories": ["food"],
        "desc": "Burger King purported support for the Israel Defense Forces through the provision of complimentary food and beverages to Israeli militants raises ethical concerns and prompts discussions about the implications of corporate actions in geopolitical contexts.",
        "proof_link": "https://www.mayniaga.com/the-burger-king-israel-connection-unraveled/",
        "alternatives": ["Marrybrown" , "The Chicken Rice Shop" , "Ramly's Burger" , "Ayamas" ,"The Manhattan Fish Market"]
    },
    {
        "id": 57,
        "name": "Subway",
        "img_url": "https://ucarecdn.com/73ec986b-b69d-4697-a703-e8d30e666325/ColorSubwayLogo.jpg",
        "categories": ["food"],
        "desc": "Subway, a globally recognized food chain, finds itself entangled in controversy due to its association with supporting Israel during the ongoing turmoil in Palestine.",
        "proof_link": "https://www.mayniaga.com/subway-israel-support-what-you-need-to-know/#:~:text=Subway%2C%20a%20globally%20recognized%20food,that%20has%20garnered%20global%20attention.",
        "alternatives": ["Marrybrown" , "The Chicken Rice Shop" , "Ramly's Burger" , "Ayamas" ,"The Manhattan Fish Market"]
    },
    {
        "id": 58,
        "name": "Baskin Robbins",
        "img_url": "https://ucarecdn.com/6a08c6fc-c83a-4477-82a6-c60fd1450916/BaskinRobbins_logosvg.png",
        "categories": ["food"],
        "desc": "Baskin-Robbins, the household name synonymous with delicious ice cream, holds a captivating narrative steeped in the entrepreneurial genius of its Jewish founders, Burt Baskin and Irv Robbins.",
        "proof_link": "https://www.mayniaga.com/baskin-robbins-israel-support-what-you-need-to-know/",
        "alternatives": ["Local ice cream shops or other ice cream brands"]
    },
    {
        "id": 59,
        "name": "KFC",
        "img_url": "https://ucarecdn.com/c2cf3615-da1f-466f-877d-87b0477f29a0/KFC_logosvg.png",
        "categories": ["food"],
        "desc": "Parent company Yum Brands is an investor in Israeli start ups.",
        "proof_link": "https://www.calcalistech.com/ctech/articles/0,7340,L-3901254,00.html",
        "alternatives": ["Marrybrown" , "The Chicken Rice Shop" , "Ramly's Burger" , "Ayamas" ,"The Manhattan Fish Market"]
    },
    {
        "id": 60,
        "name": "Papa Johns",
        "img_url": "https://ucarecdn.com/1de6b41e-73c5-4425-a4aa-61dddea7089e/papajohns_def_img_large.jpg",
        "categories": ["food"],
        "desc": "Papa John's restaurant has joined the list of restaurants supporting Israel.",
        "proof_link": "https://www.instagram.com/papajohnsisrael/",
        "alternatives": ["Marrybrown" , "The Chicken Rice Shop" , "Ramly's Burger" , "Ayamas" ,"The Manhattan Fish Market"]
    },
    {
        "id": 61,
        "name": "EveryDay",
        "img_url": "https://ucarecdn.com/d342cbf2-065e-452d-a455-bb7bd4879563/NestleEverydayMilkPowderPouches80gMockup.jpg",
        "categories": ["food", "drinks"],
        "desc": "Avoid Nestle products until they divest all operations in Occupied Palestine",
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": ["Other milk powder brands or local dairy products"]
    },
    {
        "id": 62,
        "name": "Lactogrow",
        "img_url": "https://ucarecdn.com/a42cdd40-9a2d-45ee-aaea-51d3b042acaf/lactogrowaktifbrandpagepackshot_0.png",
        "categories": ["food", "drinks"],
        "desc": "Avoid Nestle products until they divest all operations in Occupied Palestine",
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": ["Other baby formula brands or nutrition options"]
    },
    {
        "id": 63,
        "name": "Lactokid",
        "img_url": "https://ucarecdn.com/abb68329-117e-4032-a208-1b7f9337c0a4/lacktokid_comfortis_front.png",
        "categories": ["food", "drinks"],
        "desc": "Avoid Nestle products until they divest all operations in Occupied Palestine",
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": ["Alternative baby formula brands"]
    },
    {
        "id": 64,
        "name": "Cerelac",
        "img_url": "https://ucarecdn.com/18dd8d89-9363-454e-aa90-087c99625ee7/c9ca2e176355781Y3JvcCw4MDgsNjMyLDAsMA.jpg",
        "categories": ["food"],
        "desc": "Avoid Nestle products until they divest all operations in Occupied Palestine",
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": ["Other baby cereal brands or homemade baby food"]
    },

    // ------------------------------------ Start Household Data ---------------------------------------------------------




    // ------------------------------------ Start Cosmetics Data ---------------------------------------------------------





    // ------------------------------------ Start Brand Data -------------------------------------------------------------





    // ------------------------------------ Start Car Data ---------------------------------------------------------------






    // ------------------------------------ Start Energy Data -------------------------------------------------------------





    
    // ------------------------------------ Start Pet Data ----------------------------------------------------------------
    
]

return boycottList;
}
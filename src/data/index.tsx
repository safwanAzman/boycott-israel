import { useTranslations } from "next-intl";

export function useBoycottList() {
    const t = useTranslations("Data");
    const boycottList = [ 
    {
        "id" : 1,
        "name": "Nestle",
        "img_url": "https://ucarecdn.com/377f782d-28e4-4991-9aef-fdabdb698a79/NestleLogo2015.png",
        "categories": t("boycottData.Nestle.categories").split(',').map(category => category.trim()),
        "desc" : t("boycottData.Nestle.desc"),
        "proof_link" :'https://en.wikipedia.org/wiki/Osem_(company)',
        "alternatives" : t("boycottData.Nestle.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id" : 2,
        "name": "Cadbury",
        "img_url": "https://ucarecdn.com/5003df5a-584b-4861-9da0-f7359efd6e7e/0_unnamed.png",
        "categories": t("boycottData.Cadbury.categories").split(',').map(category => category.trim()),
        "desc" : t("boycottData.Cadbury.desc"),
        "proof_link": "https://ir.mondelezinternational.com/news-releases/news-release-details/mondelez-international-snackfutures-makes-seed-investment",
        "alternatives": t("boycottData.Cadbury.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id" : 3,
        "name": "Maggi",
        "img_url": "https://ucarecdn.com/3c01fce2-c7ed-4da1-a967-686ffff01522/MaggiLogo1987.png",
        "categories": t("boycottData.Maggi.categories").split(',').map(category => category.trim()),
        "desc" : t("boycottData.Maggi.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Maggi.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id" : 4,
        "name": "Lipton",
        "img_url": "https://ucarecdn.com/d7fcdecf-2bb1-4e08-a6a1-0b46c19fd7c6/liptonlogoDCDE1598CBseeklogocom.png",
        "categories": t("boycottData.Lipton.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Lipton.desc"),
        "proof_link": 'https://www.mayniaga.com/liptons-support-for-israel-examining-the-details/',
        "alternatives": t("boycottData.Lipton.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id" : 5,
        "name": "Nescafe",
        "img_url": "https://ucarecdn.com/54d9fffd-dae3-4850-86af-62d77a3f7a20/cca37b12ba6f2258cc055202ceccc2f9.jpg",
        "categories": t("boycottData.Nescafe.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Nescafe.desc"),
        "proof_link": 'https://en.wikipedia.org/wiki/Osem_(company)',
        "alternatives": t("boycottData.Nescafe.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id" : 6,
        "name": "Kitkat",
        "img_url": "https://ucarecdn.com/d9983eac-b750-479b-a4c0-d271efb0e419/kitkatlogoEF483A34CAseeklogocom.png",
        "categories": t("boycottData.Kitkat.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Kitkat.desc"),
        "proof_link": 'https://en.wikipedia.org/wiki/Osem_(company)',
        "alternatives": t("boycottData.Kitkat.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 7,
        "name": "Oreo",
        "img_url": "https://ucarecdn.com/d735c627-e16b-47f8-8fd6-905ad7a41b2c/Oreo_Logo_Design_History_Evolution_0_1024x1024.jpg",
        "categories": t("boycottData.Oreo.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Oreo.desc"),
        "proof_link": 'https://ir.mondelezinternational.com/news-releases/news-release-details/mondelez-international-snackfutures-makes-seed-investment',
        "alternatives": t("boycottData.Oreo.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 8,
        "name": "Mars",
        "img_url": "https://ucarecdn.com/7a2a6373-b060-433b-b7ab-f0f8ab55a6a3/336bb5073a4947ebbb6c8851ba34eee0_rw_1920.jpg",
        "categories": t("boycottData.Mars.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Mars.desc"),
        "proof_link": 'https://aus.mars.com/news-and-stories/press-releases/mars-partners-with-jerusalem-venture-partners',
        "alternatives": t("boycottData.Mars.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 9,
        "name": "Snickers",
        "img_url": "https://ucarecdn.com/0abbf635-a49b-4a8a-b886-2513bc465ac4/SnickersLogo.jpg",
        "categories": t("boycottData.Snickers.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Snickers.desc"),
        "proof_link": 'https://aus.mars.com/news-and-stories/press-releases/mars-partners-with-jerusalem-venture-partners',
        "alternatives": t("boycottData.Snickers.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 10,
        "name": "Pringles",
        "img_url": "https://ucarecdn.com/5afb7229-b1cc-4462-9dee-5cd275dd9df8/PringlesLogo2009.png",
        "categories": t("boycottData.Pringles.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Pringles.desc"),
        "proof_link": 'https://www.slideshare.net/RyanACC/pringles-expansion-into-israel',
        "alternatives": t("boycottData.Pringles.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 11,
        "name": "Milo",
        "img_url": "https://ucarecdn.com/eb709c15-161c-473a-8f11-9bc10a83ee4d/14a8b2fb25797e6b31a3254f5673b5ed.jpg",
        "categories": t("boycottData.Milo.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Milo.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Milo.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 12,
        "name": "Toblerone",
        "img_url": "https://ucarecdn.com/0a56082c-6ab5-48f2-bfa6-29340375d158/tobleroneemblem.jpg",
        "categories": t("boycottData.Toblerone.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Toblerone.desc"),
        "proof_link": "https://ir.mondelezinternational.com/news-releases/news-release-details/mondelez-international-snackfutures-makes-seed-investment",
        "alternatives": t("boycottData.Toblerone.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 13,
        "name": "Nestum",
        "img_url": "https://ucarecdn.com/7ea8edbf-8ee9-469c-b9c1-31cb126c0e12/Nestum.png",
        "categories": t("boycottData.Nestum.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Nestum.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Nestum.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 14,
        "name": "MatKool",
        "img_url": "https://ucarecdn.com/eff25cf4-d876-4d6c-b1fd-4cdd00ddb6d0/matkool.png",
        "categories": t("boycottData.MatKool.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.MatKool.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.MatKool.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 15,
        "name": "Nutella",
        "img_url": "https://ucarecdn.com/1f783abf-282e-4fd0-8d9f-5fdfcee15279/Nutella_Logo_Design_History_Evolution_0.jpg",
        "categories": t("boycottData.Nutella.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Nutella.desc"),
        "proof_link": "https://us.firenews.video/culture-and-trends/does-nutella-support-israel-fasil-news/",
        "alternatives": t("boycottData.Nutella.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 16,
        "name": "Coca-Cola",
        "img_url": "https://ucarecdn.com/a1517af7-d942-460c-809c-c8583e311a4e/KOb23a2a5e.png",
        "categories": t("boycottData.Coca-Cola.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Coca-Cola.desc"),
        "proof_link": "https://www.foa.org.uk/campaign/boycottcocacola",
        "alternatives": t("boycottData.Coca-Cola.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 17,
        "name": "Nestea",
        "img_url": "https://ucarecdn.com/4d6ab0c4-c597-4158-b3af-5b5d162bf5c1/NestealogoAAB34A76C2seeklogocom.png",
        "categories": t("boycottData.Nestea.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Nestea.desc"),
        "proof_link": "https://www.mayniaga.com/nesteas-support-for-israel-examining-the-details/",
        "alternatives": t("boycottData.Nestea.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 18,
        "name": "Knorr",
        "img_url": "https://ucarecdn.com/1bcdbc9d-4ff5-4800-8863-a55cdc6482fd/KnorrLogo2004.jpg",
        "categories": t("boycottData.Knorr.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Knorr.desc"),
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": t("boycottData.Knorr.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 19,
        "name": "Hershey",
        "img_url": "https://ucarecdn.com/c7655acd-2985-4227-a180-dee3596f0193/HersheyLogo.png",
        "categories": t("boycottData.Hershey.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Hershey.desc"),
        "proof_link": "https://www.instagram.com/p/CzH9038LwYF/",
        "alternatives": t("boycottData.Hershey.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 21,
        "name": "La Cremeria",
        "img_url": "https://ucarecdn.com/d041d9b1-ed49-40b3-9703-8d7bbf193fc7/NestleLaCremeriaIndulgentPeanutButterIceCream750ml.jpg",
        "categories": t("boycottData.La Cremeria.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.La Cremeria.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.La Cremeria.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 22,
        "name": "Haagen-Dazs",
        "img_url": "https://ucarecdn.com/be3de9f8-03ff-426f-a3d1-65a5198d9065/E75JRWNXsAY9ZRQ.jpg",
        "categories": t("boycottData.Haagen-Dazs.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Haagen-Dazs.desc"),
        "proof_link": "https://www.mayniaga.com/haagen-dazss-support-for-israel-examining-the-details/#:~:text=Legacy%20and%20Controversies&text=After%20selling%20H%C3%A4agen%2DDazs%20to,and%20cultural%20projects%20in%20Israel.",
        "alternatives": t("boycottData.Haagen-Dazs.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 23,
        "name": "Magnum",
        "img_url": "https://ucarecdn.com/9cdfec82-ea59-4e97-877e-dac99f09c4b1/image.jpg",
        "categories": t("boycottData.Magnum.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Magnum.desc"),
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": t("boycottData.Magnum.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 24,
        "name": "Lady's Choice",
        "img_url": "https://ucarecdn.com/f00ee510-b213-4035-b05f-6770efd1be83/Ladyschoice2014.png",
        "categories": t("boycottData.Lady's Choice.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Lady's Choice.desc"),
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": t("boycottData.Lady's Choice.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 25,
        "name": "Horlicks",
        "img_url": "https://ucarecdn.com/85821d6b-666e-4389-bc1d-bbe0da9cd0aa/e1b7c27166f30acad542fdbd54cecdd5.jpg",
        "categories": t("boycottData.Horlicks.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Horlicks.desc"),
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": t("boycottData.Horlicks.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 26,
        "name": "Cornetto",
        "img_url": "https://ucarecdn.com/0d01b285-0655-466d-b8ce-1ee545e0f8f3/CornettoLogo.jpg",
        "categories": t("boycottData.Cornetto.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Cornetto.desc"),
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": t("boycottData.Cornetto.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 27,
        "name": "Wall's",
        "img_url": "https://ucarecdn.com/22959541-d15a-4a8a-bad5-d1bdf2cded4a/1517239.png",
        "categories": t("boycottData.Wall's.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Wall's.desc"),
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": t("boycottData.Wall's.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 28,
        "name": "Fanta",
        "img_url": "https://ucarecdn.com/6400e2e4-f353-4034-af39-fe3aa7408c75/fantalogosvg.png",
        "categories": t("boycottData.Fanta.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Fanta.desc"),
        "proof_link": "https://www.foa.org.uk/campaign/boycottcocacola",
        "alternatives": t("boycottData.Fanta.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 29,
        "name": "Sprite",
        "img_url": "https://ucarecdn.com/58db866f-d72d-4158-b643-431de544f801/spritelogo0FD1748C65seeklogocom.png",
        "categories": t("boycottData.Sprite.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Sprite.desc"),
        "proof_link": "https://www.foa.org.uk/campaign/boycottcocacola",
        "alternatives": t("boycottData.Sprite.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 30,
        "name": "Pepsi",
        "img_url": "https://ucarecdn.com/787ea55e-6767-4587-9059-5114dd69ee39/Pepsi_logo_2014svg.png",
        "categories": t("boycottData.Pepsi.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Pepsi.desc"),
        "proof_link": "https://www.bloomberg.com/view/articles/2018-08-22/pepsico-s-sodastream-purchase-is-sweet-news-for-israelis?leadSource=uverify%20wall",
        "alternatives": t("boycottData.Pepsi.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 31,
        "name": "Jacob's",
        "img_url": "https://ucarecdn.com/0c2fcccc-0fcd-48c4-8090-72320d0aae73/eojroOLChOeyyheHSUCU0ge94J1MDN0mp5QJZzAV.png",
        "categories": t("boycottData.Jacob's.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Jacob's.desc"),
        "proof_link": "https://mediavariasi.com/2023/10/boikot-ketahui-jenama-produk-support-israel/",
        "alternatives": t("boycottData.Jacob's.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 32,
        "name": "7up",
        "img_url": "https://ucarecdn.com/e0c06499-f45b-41a8-9d84-3e3162155871/7upcover.jpg",
        "categories": t("boycottData.7up.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.7up.desc"),
        "proof_link": "https://www.bloomberg.com/view/articles/2018-08-22/pepsico-s-sodastream-purchase-is-sweet-news-for-israelis?leadSource=uverify%20wall",
        "alternatives": t("boycottData.7up.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 33,
        "name": "Coffee Mate",
        "img_url": "https://ucarecdn.com/1aa1bcfc-5a17-4720-95ce-344a3d61ce7a/CoffeeMate_logo.png",
        "categories": t("boycottData.Coffee Mate.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Coffee Mate.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Coffee Mate.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 34,
        "name": "Costa Coffee",
        "img_url": "https://ucarecdn.com/4697e947-21c8-4163-afa4-7e50b26fd4cf/Costa_CoffeelogoDC0FF384B3seeklogocom.png",
        "categories": t("boycottData.Costa Coffee.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Costa Coffee.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Costa Coffee.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 35,
        "name": "Dasani Water",
        "img_url": "https://ucarecdn.com/04198210-6653-4160-bc97-1c91c8f31cc9/small_d5eed8a5e3b449628a80ad5e45a49bd6.jpg",
        "categories": t("boycottData.Dasani Water.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Dasani Water.desc"),
        "proof_link": "https://www.foa.org.uk/campaign/boycottcocacola",
        "alternatives": t("boycottData.Dasani Water.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 36,
        "name": "Gatorade",
        "img_url": "https://ucarecdn.com/c0794cde-ed1b-4434-b39b-5d612d5481da/GatoradeLogo20042009.png",
        "categories": t("boycottData.Gatorade.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Gatorade.desc"),
        "proof_link": "https://www.bloomberg.com/view/articles/2018-08-22/pepsico-s-sodastream-purchase-is-sweet-news-for-israelis?leadSource=uverify%20wall",
        "alternatives": t("boycottData.Gatorade.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 37,
        "name": "Halls",
        "img_url": "https://ucarecdn.com/077b3981-53cd-4ee4-ab41-752573024c77/sl1600.jpg",
        "categories": t("boycottData.Halls.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Halls.desc"),
        "proof_link": "https://ir.mondelezinternational.com/news-releases/news-release-details/mondelez-international-snackfutures-makes-seed-investment",
        "alternatives": t("boycottData.Halls.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 38,
        "name": "Mondelez",
        "img_url": "https://ucarecdn.com/7ca3cecd-655c-4103-a2ad-383938c86947/b0c43d171172425Y3JvcCw4MDgsNjMyLDAsMA.png",
        "categories": t("boycottData.Mondelez.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Mondelez.desc"),
        "proof_link": "https://ir.mondelezinternational.com/news-releases/news-release-details/mondelez-international-snackfutures-makes-seed-investment",
        "alternatives": t("boycottData.Mondelez.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 39,
        "name": "Unilever",
        "img_url": "https://ucarecdn.com/b0349f6f-d550-4db3-8efa-463b750aa96b/cz20NOydunilever.jpg",
        "categories": t("boycottData.Unilever.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Unilever.desc"),
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": t("boycottData.Unilever.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 40,
        "name": "Belvita",
        "img_url": "https://ucarecdn.com/029c6878-2181-4fd6-a85c-feeb95d44b1e/232652518.jpeg",
        "categories": t("boycottData.Belvita.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Belvita.desc"),
        "proof_link": "https://ir.mondelezinternational.com/news-releases/news-release-details/mondelez-international-snackfutures-makes-seed-investment",
        "alternatives": t("boycottData.Belvita.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 41,
        "name": "Nesquik",
        "img_url": "https://ucarecdn.com/306b2910-c1ff-47eb-b8ed-c9fd500adffc/5536529041_1ee6d2a329_b.jpg",
        "categories": t("boycottData.Nesquik.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Nesquik.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Nesquik.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 42,
        "name": "Koko Krunch",
        "img_url": "https://ucarecdn.com/4584db39-fa4f-43d9-b2ec-2e1acca0f2e1/KokoKrunch.png",
        "categories": t("boycottData.Koko Krunch.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Koko Krunch.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Koko Krunch.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 43,
        "name": "Honey Stars",
        "img_url": "https://ucarecdn.com/5cd53361-a58f-4414-ab1e-3750afa2f2cd/HoneyStars.png",
        "categories": t("boycottData.Honey Stars.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Honey Stars.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Honey Stars.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 44,
        "name": "Fitnesse",
        "img_url": "https://ucarecdn.com/d58d556d-3eb5-4673-b565-a7cb871cf7bf/Fitness_logo.png",
        "categories": t("boycottData.Fitnesse.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Fitnesse.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Fitnesse.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 45,
        "name": "Sjora",
        "img_url": "https://ucarecdn.com/4c9427ee-8818-4980-8995-4e25912d43e5/images",
        "categories": t("boycottData.Sjora.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Sjora.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Sjora.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 46,
        "name": "Quaker Oats",
        "img_url": "https://ucarecdn.com/93b8f808-8d0e-49d4-9286-929d3c09f37b/quakeroats3827.jpg",
        "categories": t("boycottData.Quaker Oats.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Quaker Oats.desc"),
        "proof_link": "https://www.bloomberg.com/view/articles/2018-08-22/pepsico-s-sodastream-purchase-is-sweet-news-for-israelis?leadSource=uverify%20wall",
        "alternatives": t("boycottData.Quaker Oats.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 47,
        "name": "Smarties",
        "img_url": "https://ucarecdn.com/4d177283-83a1-4212-ab76-fde2798626e2/smartieslogosquare2022.png",
        "categories": t("boycottData.Smarties.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Smarties.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Smarties.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 48,
        "name": "Lays",
        "img_url": "https://ucarecdn.com/acbbff52-ad60-42c4-9f81-4a685861fed3/7e3b53fe9e058ceca8d15abc464b30ff.jpg",
        "categories": t("boycottData.Lays.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Lays.desc"),
        "proof_link": "https://www.bloomberg.com/view/articles/2018-08-22/pepsico-s-sodastream-purchase-is-sweet-news-for-israelis?leadSource=uverify%20wall",
        "alternatives": t("boycottData.Lays.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 49,
        "name": "Carnation",
        "img_url": "https://ucarecdn.com/18ccf555-9a30-47bd-978b-f1d172cf5771/Carnation.png",
        "categories": t("boycottData.Carnation.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Carnation.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Carnation.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 50,
        "name": "Mountain Dew",
        "img_url": "https://ucarecdn.com/29d4f25a-3262-4f84-aa0e-8abeee97923c/Mountain_Dewlogo59462AD228seeklogocom.png",
        "categories": t("boycottData.Mountain Dew.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Mountain Dew.desc"),
        "proof_link": "https://www.bloomberg.com/view/articles/2018-08-22/pepsico-s-sodastream-purchase-is-sweet-news-for-israelis?leadSource=uverify%20wall",
        "alternatives": t("boycottData.Mountain Dew.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 51,
        "name": "Mcdonalds",
        "img_url": "https://ucarecdn.com/1e684066-891c-4132-8423-cb71826abad1/mcdonaldslogo2325D6C1EFseeklogocom.png",
        "categories": t("boycottData.Mcdonalds.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Mcdonalds.desc"),
        "proof_link": "https://twitter.com/McDonaldsIL/status/1715047104895230153",
        "alternatives": t("boycottData.Mcdonalds.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 52,
        "name": "Starbucks",
        "img_url": "https://ucarecdn.com/e186b021-06af-46ba-9214-ad6ef7afc57b/starbuckscoffeelogopngtransparent.png",
        "categories": t("boycottData.Starbucks.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Starbucks.desc"),
        "proof_link": "https://fortune.com/2021/04/07/wiz-howard-schultz-investment-fundraising-cybersecurity-startups-starbucks-ceo/",
        "alternatives": t("boycottData.Starbucks.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 53,
        "name": "Domino",
        "img_url": "https://ucarecdn.com/8632c1f2-8879-4090-8fd7-c6369077aa05/Dominos_pizza_logosvg.png",
        "categories": t("boycottData.Domino.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Domino.desc"),
        "proof_link": "https://www.mayniaga.com/dominos-support-for-israel-examining-the-details/",
        "alternatives": t("boycottData.Domino.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 54,
        "name": "Omega",
        "img_url": "https://ucarecdn.com/d545e8f5-c3f8-4b3a-82a8-aded7d7ff9f7/product1.png",
        "categories": t("boycottData.Omega.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Omega.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Omega.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 55,
        "name": "Pizza Hut",
        "img_url": "https://ucarecdn.com/16c71307-c9dd-41d4-bc40-bda54c31d125/PizzaHutLogo1999.jpg",
        "categories": t("boycottData.Pizza Hut.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Pizza Hut.desc"),
        "proof_link": "https://www.calcalistech.com/ctech/articles/0,7340,L-3901254,00.html",
        "alternatives": t("boycottData.Pizza Hut.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 56,
        "name": "Burger King",
        "img_url": "https://ucarecdn.com/ce0bc5b9-a3c6-49b1-a4f3-cf08194e4dae/Burger_KinglogoEB00FAD8D3seeklogocom.png",
        "categories": t("boycottData.Burger King.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Burger King.desc"),
        "proof_link": "https://www.mayniaga.com/the-burger-king-israel-connection-unraveled/",
        "alternatives": t("boycottData.Burger King.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 57,
        "name": "Subway",
        "img_url": "https://ucarecdn.com/73ec986b-b69d-4697-a703-e8d30e666325/ColorSubwayLogo.jpg",
        "categories": t("boycottData.Subway.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Subway.desc"),
        "proof_link": "https://www.mayniaga.com/subway-israel-support-what-you-need-to-know/#:~:text=Subway%2C%20a%20globally%20recognized%20food,that%20has%20garnered%20global%20attention.",
        "alternatives": t("boycottData.Subway.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 58,
        "name": "Baskin Robbins",
        "img_url": "https://ucarecdn.com/6a08c6fc-c83a-4477-82a6-c60fd1450916/BaskinRobbins_logosvg.png",
        "categories": t("boycottData.Baskin Robbins.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Baskin Robbins.desc"),
        "proof_link": "https://www.mayniaga.com/baskin-robbins-israel-support-what-you-need-to-know/",
        "alternatives": t("boycottData.Baskin Robbins.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 59,
        "name": "KFC",
        "img_url": "https://ucarecdn.com/c2cf3615-da1f-466f-877d-87b0477f29a0/KFC_logosvg.png",
        "categories": t("boycottData.KFC.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.KFC.desc"),
        "proof_link": "https://www.calcalistech.com/ctech/articles/0,7340,L-3901254,00.html",
        "alternatives": t("boycottData.KFC.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 60,
        "name": "Papa Johns",
        "img_url": "https://ucarecdn.com/1de6b41e-73c5-4425-a4aa-61dddea7089e/papajohns_def_img_large.jpg",
        "categories": t("boycottData.PapaJohns.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.PapaJohns.desc"),
        "proof_link": "https://www.instagram.com/papajohnsisrael/",
        "alternatives": t("boycottData.PapaJohns.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 61,
        "name": "EveryDay",
        "img_url": "https://ucarecdn.com/d342cbf2-065e-452d-a455-bb7bd4879563/NestleEverydayMilkPowderPouches80gMockup.jpg",
        "categories": t("boycottData.EveryDay.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.EveryDay.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.EveryDay.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 62,
        "name": "Lactogrow",
        "img_url": "https://ucarecdn.com/a42cdd40-9a2d-45ee-aaea-51d3b042acaf/lactogrowaktifbrandpagepackshot_0.png",
        "categories": t("boycottData.Lactogrow.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Lactogrow.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Lactogrow.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 63,
        "name": "Lactokid",
        "img_url": "https://ucarecdn.com/abb68329-117e-4032-a208-1b7f9337c0a4/lacktokid_comfortis_front.png",
        "categories": t("boycottData.Lactokid.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Lactokid.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Lactokid.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 64,
        "name": "Cerelac",
        "img_url": "https://ucarecdn.com/18dd8d89-9363-454e-aa90-087c99625ee7/c9ca2e176355781Y3JvcCw4MDgsNjMyLDAsMA.jpg",
        "categories": t("boycottData.Cerelac.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Cerelac.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Cerelac.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 65,
        "name": "Colgate",
        "img_url": "https://ucarecdn.com/6239d9cf-0dc2-400c-9599-079ec3a1b130/",
        "categories": t("boycottData.Colgate.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Colgate.desc"),
        "proof_link": "https://www.drbicuspid.com/dental-hygiene/hygiene-tools/article/15375888/israeli-court-investigates-colgate-distributor",
        "alternatives": t("boycottData.Colgate.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 66,
        "name": "Listerine",
        "img_url": "https://ucarecdn.com/f553871d-8040-4e4e-adbf-3a2538b76e34/",
        "categories": t("boycottData.Listerine.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Listerine.desc"),
        "proof_link": "https://www.theblushinggiraffe.com/p/ethical-beauty.html",
        "alternatives": t("boycottData.Listerine.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 67,
        "name": "Darlie",
        "img_url": "https://ucarecdn.com/c3004deb-c372-40c1-9f01-3a05e10ad3af/",
        "categories": t("boycottData.Darlie.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Darlie.desc"),
        "proof_link": "https://www.aljazeera.com/economy/2020/6/19/colgate-reviewing-toothpaste-darlie-branding-amid-race-debate",
        "alternatives": t("boycottData.Darlie.alternatives").split(',').map(alternative => alternative.trim())
    },    
    {
        "id": 68,
        "name": "Pepsodent",
        "img_url": "https://ucarecdn.com/0a95a83e-1a78-4821-a86e-26b8fa9afa7b/",
        "categories": t("boycottData.Pepsodent.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Pepsodent.desc"),
        "proof_link": "https://www.unilever.co.za/brands/beauty-wellbeing/pepsodent/",
        "alternatives": t("boycottData.Pepsodent.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 70,
        "name": "Dove",
        "img_url": "https://ucarecdn.com/2f5d8d42-9280-4d45-89b4-6ed672103f5d/",
        "categories": t("boycottData.Dove.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Dove.desc"),
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": t("boycottData.Dove.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 71,
        "name": "Palmolive",
        "img_url": "https://ucarecdn.com/077cd131-333e-4e64-8de1-34f8fe06a291/",
        "categories": t("boycottData.Palmolive.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Palmolive.desc"),
        "proof_link": "https://www.drbicuspid.com/dental-hygiene/hygiene-tools/article/15375888/israeli-court-investigates-colgate-distributor",
        "alternatives": t("boycottData.Palmolive.alternatives").split(',').map(alternative => alternative.trim())
    },    
    {
        "id": 72,
        "name": "Clean & Clear",
        "img_url": "https://ucarecdn.com/101aee86-33b5-4c1c-81f9-2aa0657292b8/",
        "categories": t("boycottData.CleanAndClear.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.CleanAndClear.desc"),
        "proof_link": "https://www.theblushinggiraffe.com/p/ethical-beauty.html",
        "alternatives": t("boycottData.CleanAndClear.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 73,
        "name": "Vaseline",
        "img_url": "https://ucarecdn.com/264c207c-80e0-47ac-964a-2be31c61345f/",
        "categories": t("boycottData.Vaseline.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Vaseline.desc"),
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": t("boycottData.Vaseline.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 74,
        "name": "Vick's",
        "img_url": "https://ucarecdn.com/bf325bca-8ea7-4ae2-9458-d5a4dfcd176a/",
        "categories": t("boycottData.Vicks.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Vicks.desc"),
        "proof_link": "https://www.forbes.com/sites/ricardogeromel/2012/05/16/procter-and-gamble-israel-startup/?sh=7c66a09a11f5",
        "alternatives": t("boycottData.Vicks.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 75,
        "name": "Breeze",
        "img_url": "https://ucarecdn.com/34b80a89-4743-4602-ba23-db3856d5eaed/",
        "categories": t("boycottData.Breeze.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Breeze.desc"),
        "proof_link": "https://www.unilever.com.my/brands/home-care/breeze/",
        "alternatives": t("boycottData.Breeze.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 76,
        "name": "Joy",
        "img_url": "https://ucarecdn.com/4e77d7f9-f9c7-470d-bcab-6b86963a2287/",
        "categories": t("boycottData.Joy.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Joy.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Joy_(dishwashing_liquid)",
        "alternatives": t("boycottData.Joy.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 77,
        "name": "Downy",
        "img_url": "https://ucarecdn.com/f84b1267-a3eb-4d52-91c0-197f59508854/",
        "categories": t("boycottData.Downy.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Downy.desc"),
        "proof_link": "https://www.mayniaga.com/downys-support-for-israel-examining-the-details/",
        "alternatives": t("boycottData.Downy.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 78,
        "name": "Axion",
        "img_url": "https://ucarecdn.com/44f9df75-b62a-473a-9b17-1ddb24dff223/",
        "categories": t("boycottData.Axion.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Axion.desc"),
        "proof_link": "https://www.drbicuspid.com/dental-hygiene/hygiene-tools/article/15375888/israeli-court-investigates-colgate-distributor",
        "alternatives": t("boycottData.Axion.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 79,
        "name": "Sunlight",
        "img_url": "https://ucarecdn.com/0bad37f6-915d-4787-a742-b86d0e0e3c7f/",
        "categories": t("boycottData.Sunlight.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Sunlight.desc"),
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": t("boycottData.Sunlight.alternatives").split(',').map(alternative => alternative.trim())
    },    
    {
        "id": 80,
        "name": "Kotex",
        "img_url": "https://ucarecdn.com/7469cf51-66c8-4c4f-ba51-c1cdd8b55ea6/",
        "categories": t("boycottData.Kotex.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Kotex.desc"),
        "proof_link": "https://www.nextstepmalaysia.com/israel-cukup-takut-dengan-tindakan-ini-senarai-produk-israel-wajib-diboikot/",
        "alternatives": t("boycottData.Kotex.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 84,
        "name": "Huggies",
        "img_url": "https://ucarecdn.com/50df3609-3160-40b5-9749-355baa297e36/",
        "categories": t("boycottData.Huggies.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Huggies.desc"),
        "proof_link": "http://www.inminds.com/article.php?id=10435",
        "alternatives": t("boycottData.Huggies.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 86,
        "name": "Lux",
        "img_url": "https://ucarecdn.com/2b05cbe0-6bbb-4d25-aee5-2ee81a22f5bb/",
        "categories": t("boycottData.Lux.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Lux.desc"),
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": t("boycottData.Lux.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 87,
        "name": "Febreze",
        "img_url": "https://ucarecdn.com/171ffad1-277b-4af6-b0b2-b1a1bc3b9d7e/",
        "categories": t("boycottData.Febreze.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Febreze.desc"),
        "proof_link": "https://www.forbes.com/sites/ricardogeromel/2012/05/16/procter-and-gamble-israel-startup/?sh=7c66a09a11f5",
        "alternatives": t("boycottData.Febreze.alternatives").split(',').map(alternative => alternative.trim())
    },    
    {
        "id": 88,
        "name": "Lifebuoy",
        "img_url": "https://ucarecdn.com/5afcfd11-1e91-48f9-b49a-5708f2b4320c/",
        "categories": t("boycottData.Lifebuoy.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Lifebuoy.desc"),
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": t("boycottData.Lifebuoy.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 89,
        "name": "Rexona",
        "img_url": "https://ucarecdn.com/0527c853-6f5e-4a16-827d-7038d35d96fd/",
        "categories": t("boycottData.Rexona.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Rexona.desc"),
        "proof_link": "https://www.unilever.com/news/press-and-media/press-releases/2022/unilever-reaches-new-business-arrangement-for-ben-jerrys-in-israel/",
        "alternatives": t("boycottData.Rexona.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 90,
        "name": "Maybelline",
        "img_url": "https://ucarecdn.com/0c11f5a7-e4b3-4ecd-a767-4ee0c654e793/",
        "categories": t("boycottData.Maybeline.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Maybeline.desc"),
        "proof_link": "https://www.mayniaga.com/is-maybelline-supportive-of-israel-explained/",
        "alternatives": t("boycottData.Maybeline.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 91,
        "name": "Loreal",
        "img_url": "https://ucarecdn.com/1779efa7-54e0-4743-bee3-68cce8b00c27/",
        "categories": t("boycottData.Loreal.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Loreal.desc"),
        "proof_link": "https://bdsmovement.net/news/l%E2%80%99oreal-makeup-israeli-apartheid",
        "alternatives": t("boycottData.Loreal.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 92,
        "name": "Garnier",
        "img_url": "https://ucarecdn.com/6ca868a5-3bc9-41c9-888e-548929176ace/",
        "categories": t("boycottData.Garnier.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Garnier.desc"),
        "proof_link": "https://bdsmovement.net/news/l%E2%80%99oreal-makeup-israeli-apartheid",
        "alternatives": t("boycottData.Garnier.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 93,
        "name": "Clinique",
        "img_url": "https://ucarecdn.com/1b7ccf62-dbf8-4073-8f21-a8f65177f913/",
        "categories": t("boycottData.Clinique.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Clinique.desc"),
        "proof_link": "https://www.jnf.org/menu-3/speakers-bureau/bio-page?id=830973c9-caae-67a8-a4cf-ff000038378d",
        "alternatives": t("boycottData.Clinique.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 94,
        "name": "Gillette",
        "img_url": "https://ucarecdn.com/95b547d4-6b45-484c-9387-615318f60756/",
        "categories": t("boycottData.Gillete.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Gillete.desc"),
        "proof_link": "https://www.mayniaga.com/gillettes-support-for-israel-examining-the-details/",
        "alternatives": t("boycottData.Gillete.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 95,
        "name": "Louis Vuitton",
        "img_url": "https://ucarecdn.com/75cfa2d7-b639-4c76-8263-5cd445786e59/",
        "categories": t("boycottData.Louis Vuitton.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Louis Vuitton.desc"),
        "proof_link": "https://www.timesofisrael.com/luxury-goods-magnate-bernard-arnault-invests-in-israeli-cybersecurity-firm-wiz/",
        "alternatives": t("boycottData.Louis Vuitton.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 96,
        "name": "Giorgio Armani",
        "img_url": "https://ucarecdn.com/67ad42aa-e124-4bc2-881a-07adb39139ee/",
        "categories": t("boycottData.Giorgio Armani.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Giorgio Armani.desc"),
        "proof_link": "https://bdsmovement.net/news/l%E2%80%99oreal-makeup-israeli-apartheid",
        "alternatives": t("boycottData.Giorgio Armani.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 97,
        "name": "Johnson n Johnson",
        "img_url": "https://ucarecdn.com/2f775677-1636-427f-b5fc-65999187edd0/",
        "categories": t("boycottData.Johnson n Johnson.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Johnson n Johnson.desc"),
        "proof_link": "http://www.inminds.co.uk/boycott-johnson-and-johnson.html",
        "alternatives": t("boycottData.Johnson n Johnson.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 98,
        "name": "Bath & Body Works",
        "img_url": "https://ucarecdn.com/d7c382aa-8078-4fa0-8b2c-7a7f69fd4d1f/",
        "categories": t("boycottData.Bath & Body Works.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Bath & Body Works.desc"),
        "proof_link": "https://www.timesofisrael.com/the-relationship-between-epstein-and-jewish-philanthropist-wexner-explained/",
        "alternatives": t("boycottData.Bath & Body Works.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 100,
        "name": "Herbal Essence",
        "img_url": "https://ucarecdn.com/b89ab582-30ff-4585-889a-2dade49105cc/",
        "categories": t("boycottData.Herbal Essence.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Herbal Essence.desc"),
        "proof_link": "https://www.forbes.com/sites/ricardogeromel/2012/05/16/procter-and-gamble-israel-startup/?sh=7c66a09a11f5",
        "alternatives": t("boycottData.Herbal Essence.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 101,
        "name": "Victoria Secret",
        "img_url": "https://ucarecdn.com/01b27fbd-fb2e-41d9-88c7-a6d86ba6fa3a/",
        "categories": t("boycottData.Victoria Secret.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Victoria Secret.desc"),
        "proof_link": "http://www.palestineinformation.org/Victorias_Secret_handbill",
        "alternatives": t("boycottData.Victoria Secret.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 102,
        "name": "Estee Lauder",
        "img_url": "https://ucarecdn.com/681870e8-1afc-47c6-b211-6cc3063d989c/",
        "categories": t("boycottData.Estee Lauder.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Estee Lauder.desc"),
        "proof_link": "https://www.jnf.org/menu-3/speakers-bureau/bio-page?id=830973c9-caae-67a8-a4cf-ff000038378d",
        "alternatives": t("boycottData.Estee Lauder.alternatives").split(',').map(alternative => alternative.trim())
    },    
    {
        "id": 103,
        "name": "Ralph Lauren",
        "img_url": "https://ucarecdn.com/342b636f-7ef6-4d7e-a6af-83bfac0e6414/",
        "categories": t("boycottData.Ralph Lauren.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Ralph Lauren.desc"),
        "proof_link": "https://bdsmovement.net/news/l%E2%80%99oreal-makeup-israeli-apartheid",
        "alternatives": t("boycottData.Ralph Lauren.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 104,
        "name": "Neutrogena",
        "img_url": "https://ucarecdn.com/282540e4-360a-4cba-9796-8d7ac51f3575/",
        "categories": t("boycottData.Neutrogena.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Neutrogena.desc"),
        "proof_link": "https://www.chicagojewishnews.com/neutrogenas-position-on-israel-unveiling-the-connection/",
        "alternatives": t("boycottData.Neutrogena.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 105,
        "name": "Valentino Beauty",
        "img_url": "https://ucarecdn.com/a5ab0392-4ebe-4aab-8d6e-c6b5acfacb9f/",
        "categories": t("boycottData.Valentino Beauty.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Valentino Beauty.desc"),
        "proof_link": "https://bdsmovement.net/news/l%E2%80%99oreal-makeup-israeli-apartheid",
        "alternatives": t("boycottData.Valentino Beauty.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 106,
        "name": "YSL Beauty",
        "img_url": "https://ucarecdn.com/3938f119-5345-447b-9f97-c683fda7f855/",
        "categories": t("boycottData.YSL Beauty.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.YSL Beauty.desc"),
        "proof_link": "https://bdsmovement.net/news/l%E2%80%99oreal-makeup-israeli-apartheid",
        "alternatives": t("boycottData.YSL Beauty.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 107,
        "name": "Tommy Hilfiger",
        "img_url": "https://ucarecdn.com/6a161385-c7f9-42f8-a747-ce20c2ea262a/",
        "categories": t("boycottData.Tommy Hilfiger.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Tommy Hilfiger.desc"),
        "proof_link": "https://www.mayniaga.com/navigating-tommy-hilfiger-allegiances-israel-or-palestine/",
        "alternatives": t("boycottData.Tommy Hilfiger.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 108,
        "name": "Kerastase",
        "img_url": "https://ucarecdn.com/8887fd70-e0bb-47f2-94c3-dfbc491cbcb3/",
        "categories": t("boycottData.Kerastase.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Kerastase.desc"),
        "proof_link": "https://bdsmovement.net/news/l%E2%80%99oreal-makeup-israeli-apartheid",
        "alternatives": t("boycottData.Kerastase.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 109,
        "name": "Lancome",
        "img_url": "https://ucarecdn.com/ad57db6d-75b8-4896-9a93-407b079f55f1/",
        "categories": t("boycottData.Lancome.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Lancome.desc"),
        "proof_link": "https://bdsmovement.net/news/l%E2%80%99oreal-makeup-israeli-apartheid",
        "alternatives": t("boycottData.Lancome.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 110,
        "name": "Revlon",
        "img_url": "https://ucarecdn.com/85ec1622-c7b9-407b-b78e-0bd132d70fce/",
        "categories": t("boycottData.Revlon.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Revlon.desc"),
        "proof_link": "https://www.theblushinggiraffe.com/p/ethical-beauty.html",
        "alternatives": t("boycottData.Revlon.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 111,
        "name": "Chanel",
        "img_url": "https://ucarecdn.com/66d01ed4-ee27-4ebd-b3f0-9d3f9b59def7/",
        "categories": t("boycottData.Chanel.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Chanel.desc"),
        "proof_link": "https://www.universityoffashion.com/blog/#:~:text=Chanel%20was%20donating%20%244%20million",
        "alternatives": t("boycottData.Chanel.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 112,
        "name": "Cerave",
        "img_url": "https://ucarecdn.com/2fa50aac-00f3-4120-94dd-fa6b24eceec6/",
        "categories": t("boycottData.Cerave.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Cerave.desc"),
        "proof_link": "https://bdsmovement.net/news/l%E2%80%99oreal-makeup-israeli-apartheid",
        "alternatives": t("boycottData.Cerave.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 113,
        "name": "Kenzo",
        "img_url": "https://ucarecdn.com/ffea8ef0-05ff-4adb-8683-74632a51f7ea/",
        "categories": t("boycottData.Kenzo.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Kenzo.desc"),
        "proof_link": "https://www.timesofisrael.com/luxury-goods-magnate-bernard-arnault-invests-in-israeli-cybersecurity-firm-wiz/",
        "alternatives": t("boycottData.Kenzo.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 114,
        "name": "Kiehl's",
        "img_url": "https://ucarecdn.com/35f8a71e-fd01-42a6-b1f2-b07bbfcf0abc/",
        "categories": t("boycottData.Kiehl.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Kiehl.desc"),
        "proof_link": "https://bdsmovement.net/news/l%E2%80%99oreal-makeup-israeli-apartheid",
        "alternatives": t("boycottData.Kiehl.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 115,
        "name": "Olay",
        "img_url": "https://ucarecdn.com/f84dda2e-bb17-4df3-8cea-24df2fa9a53d/",
        "categories": t("boycottData.Olay.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Olay.desc"),
        "proof_link": "https://www.forbes.com/sites/ricardogeromel/2012/05/16/procter-and-gamble-israel-startup/?sh=7c66a09a11f5",
        "alternatives": t("boycottData.Olay.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 116,
        "name": "Dior",
        "img_url": "https://ucarecdn.com/b859115e-9044-4037-96af-a5c1825ca34c/",
        "categories": t("boycottData.Dior.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Dior.desc"),
        "proof_link": "https://www.timesofisrael.com/luxury-goods-magnate-bernard-arnault-invests-in-israeli-cybersecurity-firm-wiz/",
        "alternatives": t("boycottData.Dior.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 117,
        "name": "MAC",
        "img_url": "https://ucarecdn.com/a91bfddf-7d57-4e2d-9823-47688d7ae5d9/",
        "categories": t("boycottData.MAC.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.MAC.desc"),
        "proof_link": "https://www.jnf.org/menu-3/speakers-bureau/bio-page?id=830973c9-caae-67a8-a4cf-ff000038378d",
        "alternatives": t("boycottData.MAC.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 118,
        "name": "La Mer",
        "img_url": "https://ucarecdn.com/8358e8ee-e172-41c2-b35e-9ec31f72a6f7/",
        "categories": t("boycottData.La Mer.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.La Mer.desc"),
        "proof_link": "https://www.jnf.org/menu-3/speakers-bureau/bio-page?id=830973c9-caae-67a8-a4cf-ff000038378d",
        "alternatives": t("boycottData.La Mer.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 119,
        "name": "Agoda",
        "img_url": "https://ucarecdn.com/1bfc7242-052a-4a31-977e-2277ab0c333e/",
        "categories": t("boycottData.Agoda.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Agoda.desc"),
        "proof_link": "https://www.aljazeera.com/news/2022/10/5/is-booking-com-reversal-palestine-corporate-hypocrisy",
        "alternatives": t("boycottData.Agoda.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 120,
        "name": "Airbnb",
        "img_url": "https://ucarecdn.com/1a287b8d-5056-4672-ba8d-cc9464bae62e/",
        "categories": t("boycottData.Airbnb.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Airbnb.desc"),
        "proof_link": "https://www.aljazeera.com/news/2022/10/5/is-booking-com-reversal-palestine-corporate-hypocrisy",
        "alternatives": t("boycottData.Airbnb.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 121,
        "name": "Amazon",
        "img_url": "https://ucarecdn.com/e60bbe05-477b-4bf9-b6f7-41e9342f3319/",
        "categories": t("boycottData.Amazon.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Amazon.desc"),
        "proof_link": "https://www.reuters.com/technology/amazon-invest-72-bln-israel-launches-aws-cloud-region-2023-08-01/",
        "alternatives": t("boycottData.Amazon.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 122,
        "name": "AXA",
        "img_url": "https://ucarecdn.com/7993ffd5-561b-43fb-aa01-a86c65b44647/",
        "categories": t("boycottData.AXA.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.AXA.desc"),
        "proof_link": "https://bdsmovement.net/news/axa-continues-investments-in-israeli-apartheid-boycott-axa-now",
        "alternatives": t("boycottData.AXA.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 123,
        "name": "Booking.com",
        "img_url": "https://ucarecdn.com/e22e89b0-7ec5-4f44-b1c8-aae9ee1c7a08/",
        "categories": t("boycottData.Booking.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Booking.desc"),
        "proof_link": "https://www.aljazeera.com/news/2022/10/5/is-booking-com-reversal-palestine-corporate-hypocrisy",
        "alternatives": t("boycottData.Booking.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 124,
        "name": "Carrefour",
        "img_url": "https://ucarecdn.com/d0c1c804-e294-479e-aee7-966b810b66aa/",
        "categories": t("boycottData.Carrefour.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Carrefour.desc"),
        "proof_link": "https://www.carrefour.com/en/news/2023/arrivee-de-carrefour-en-israel",
        "alternatives": t("boycottData.Carrefour.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 125,
        "name": "Tesco",
        "img_url": "https://ucarecdn.com/0495b839-e10f-4217-aa12-82c6d687f40b/",
        "categories": t("boycottData.Tesco.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Tesco.desc"),
        "proof_link": "https://www.businesswire.com/news/home/20211018005203/en/Trigo-Powers-Fully-Autonomous-Tesco-Grocery-Store-in-Central-London",
        "alternatives": t("boycottData.Tesco.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 126,
        "name": "Disney",
        "img_url": "https://ucarecdn.com/0d8bdc01-6869-423b-9eeb-1699485472a3/",
        "categories": t("boycottData.Disney.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Disney.desc"),
        "proof_link": "https://www.yahoo.com/entertainment/disney-pledges-2-million-donation-032004758.html?guccounter=1&guce_referrer=aHR0cHM6Ly9ib3ljb3R0LnRoZXdpdG5lc3MubmV3cy8&guce_referrer_sig=AQAAAMnahQziOyW5xyBa9-lg7RfFkwzQg0i1KtyHiwcbpYWuOHOnypn6cf0mzvxpJbHgE5cH9wdF3IZM7QhK59D6wM3VTUvrpzL6SJfzyv6o6IBSnLTLjGQdnZygcCUApBK7oZztt6zqQRXCl6zzURKTaqCN_uLmTqgZtEcyB7EoF-HD",
        "alternatives": t("boycottData.Disney.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 127,
        "name": "Fiverr",
        "img_url": "https://ucarecdn.com/b8a9ada7-f8cf-4f81-b8f0-f221538e284b/",
        "categories": t("boycottData.Fiverr.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Fiverr.desc"),
        "proof_link": "https://twitter.com/michakaufman",
        "alternatives": t("boycottData.Fiverr.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 128,
        "name": "HP",
        "img_url": "https://ucarecdn.com/6efab425-8d19-4dcc-80c3-a559e8a7d3c2/",
        "categories": t("boycottData.HP.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.HP.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Hewlett-Packard_Israel",
        "alternatives": t("boycottData.HP.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 129,
        "name": "HSBC",
        "img_url": "https://ucarecdn.com/6893d78f-a440-433c-b3f8-4abb02bdc46d/",
        "categories": t("boycottData.HSBC.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.HSBC.desc"),
        "proof_link": "https://www.ethicalconsumer.org/money-finance/israel-deadly-investments",
        "alternatives": t("boycottData.HSBC.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 130,
        "name": "Motorola",
        "img_url": "https://ucarecdn.com/16a781da-ee74-4bea-a77d-81e0b76a9614/",
        "categories": t("boycottData.Motorola.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Motorola.desc"),
        "proof_link": "http://www.inminds.co.uk/boycott-motorola.php",
        "alternatives": t("boycottData.Motorola.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 131,
        "name": "Movenpick",
        "img_url": "https://ucarecdn.com/67ee972e-5c70-4f1b-9b8c-01f317e08616/",
        "categories": t("boycottData.Movenpick.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Movenpick.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Movenpick.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 132,
        "name": "PUMA",
        "img_url": "https://ucarecdn.com/81da9903-4426-453a-92f2-a76b897c2a3e/",
        "categories": t("boycottData.PUMA.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.PUMA.desc"),
        "proof_link": "https://thisispuma.com/",
        "alternatives": t("boycottData.PUMA.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 133,
        "name": "Tag Heuer",
        "img_url": "https://ucarecdn.com/01fcbb0d-23f8-4a92-aa89-12272df25a74/",
        "categories": t("boycottData.Tag Heuer.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Tag Heuer.desc"),
        "proof_link": "https://www.timesofisrael.com/luxury-goods-magnate-bernard-arnault-invests-in-israeli-cybersecurity-firm-wiz/",
        "alternatives": t("boycottData.Tag Heuer.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 134,
        "name": "Waze",
        "img_url": "https://ucarecdn.com/a4646949-348a-4f71-9980-d181c767af07/",
        "categories": t("boycottData.Waze.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Waze.desc"),
        "proof_link": "https://twitter.com/UriLevine1",
        "alternatives": t("boycottData.Waze.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 135,
        "name": "Nokia",
        "img_url": "https://ucarecdn.com/cee7d61c-2913-4a6c-9c07-9d46a636c104/",
        "categories": t("boycottData.Nokia.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Nokia.desc"),
        "proof_link": "http://www.inminds.co.uk/boycott-nokia.html",
        "alternatives": t("boycottData.Nokia.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 136,
        "name": "Nike",
        "img_url": "https://ucarecdn.com/6a0fc6e0-ea96-488a-876a-879aa91dadf2/",
        "categories": t("boycottData.Nike.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Nike.desc"),
        "proof_link": "https://www.mayniaga.com/does-nike-stand-with-palestine-or-israel-explore-the-truth/",
        "alternatives": t("boycottData.Nike.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 137,
        "name": "Skechers",
        "img_url": "https://ucarecdn.com/eefefbaf-f2ee-4446-aa0c-4b9f0b75be15/",
        "categories": t("boycottData.Skechers.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Skechers.desc"),
        "proof_link": "https://twitter.com/thinkaboutwhe/status/1730201358543020273",
        "alternatives": t("boycottData.Skechers.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 138,
        "name": "Adidas",
        "img_url": "https://ucarecdn.com/fa3a4893-3477-4723-8d05-f1a5052f9b47/",
        "categories": t("boycottData.Adidas.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Adidas.desc"),
        "proof_link": "https://adidasunderwear.com/pages/adidas-underwear-partnership/",
        "alternatives": t("boycottData.Adidas.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 139,
        "name": "Hyundai",
        "img_url": "https://ucarecdn.com/5f5e3c29-f377-47c1-83b2-315113181ad0/",
        "categories": t("boycottData.Hyundai.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Hyundai.desc"),
        "proof_link": "",
        "alternatives": t("boycottData.Hyundai.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 140,
        "name": "Mercedes Benz",
        "img_url": "https://ucarecdn.com/55c520e1-208a-4b0f-a02e-2accca0a9dd6/",
        "categories": t("boycottData.Mercedes Benz.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Mercedes Benz.desc"),
        "proof_link": "https://www.timesofisrael.com/mercedes-benz-opens-tech-hub-in-tel-aviv-to-secure-lead-in-connected-cars/",
        "alternatives": t("boycottData.Mercedes Benz.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 141,
        "name": "Rentalcars.com",
        "img_url": "https://ucarecdn.com/0b7113a5-f5a8-4b7e-b528-5fa20c2598cd/",
        "categories": t("boycottData.Rentalcars.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Rentalcars.desc"),
        "proof_link": "https://www.aljazeera.com/news/2022/10/5/is-booking-com-reversal-palestine-corporate-hypocrisy",
        "alternatives": t("boycottData.Rentalcars.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 142,
        "name": "Volvo",
        "img_url": "https://ucarecdn.com/bc242eb0-221c-4efc-a8e2-560ade6f03a8/",
        "categories": t("boycottData.Volvo.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Volvo.desc"),
        "proof_link": "http://www.inminds.co.uk/article.php?id=10424",
        "alternatives": t("boycottData.Volvo.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 143,
        "name": "Shell",
        "img_url": "https://ucarecdn.com/5eb1a600-eb2d-4377-8c45-ec044f0d7321/",
        "categories": t("boycottData.Shell.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Shell.desc"),
        "proof_link": "https://www.offshore-technology.com/news/shell-shares-hit-record-high-amid-israel-palestine-war-driving-up-oil-prices/",
        "alternatives": t("boycottData.Shell.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 144,
        "name": "Caltex",
        "img_url": "https://ucarecdn.com/9d4903a6-8805-486a-895c-b9a9b6fed7ad/",
        "categories": t("boycottData.Caltex.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Caltex.desc"),
        "proof_link": "https://bdsmalaysia.com/boikot-caltex/",
        "alternatives": t("boycottData.Caltex.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 145,
        "name": "Purina",
        "img_url": "https://ucarecdn.com/226af8b2-b640-40df-9e68-9ef42302a128/",
        "categories": t("boycottData.Purina.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Purina.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/Osem_(company)",
        "alternatives": t("boycottData.Purina.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 146,
        "name": "Friskies",
        "img_url": "https://ucarecdn.com/cb044e3f-2aa0-4a9a-872f-8f1962659dca/",
        "categories": t("boycottData.Friskies.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Friskies.desc"),
        "proof_link": "https://paketmu.com/friskies-support-for-israel-examining-the-nestle-connection/",
        "alternatives": t("boycottData.Friskies.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 147,
        "name": "Whiskas",
        "img_url": "https://ucarecdn.com/d4a3cec7-7629-4559-bbeb-46abc31cc998/",
        "categories": t("boycottData.Whiskas.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Whiskas.desc"),
        "proof_link": "https://aus.mars.com/news-and-stories/press-releases/mars-partners-with-jerusalem-venture-partners",
        "alternatives": t("boycottData.Whiskas.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 148,
        "name": "Unicef",
        "img_url": "https://ucarecdn.com/8a56124d-37b0-4766-96fb-2ad742f2534e/",
        "categories": t("boycottData.Unicef.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Unicef.desc"),
        "proof_link": "https://aus.mars.com/news-and-stories/press-releases/mars-partners-with-jerusalem-venture-partners",
        "alternatives": t("boycottData.Unicef.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 149,
        "name": "Labour party",
        "img_url": "https://ucarecdn.com/da929e8e-8ba2-485e-9653-e716eefa2dae/",
        "categories": t("boycottData.Labour party.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Labour party.desc"),
        "proof_link": "https://labour.org.uk/updates/press-releases/keir-starmers-statement-to-the-commons-on-israel-gaza/",
        "alternatives": t("boycottData.Labour party.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 150,
        "name": "Conservative party",
        "img_url": "https://ucarecdn.com/6acc58e0-e035-4aea-8f37-e69c19ba68aa/",
        "categories": t("boycottData.Conservative party.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Conservative party.desc"),
        "proof_link": "https://www.theguardian.com/world/2023/oct/14/sunak-promises-israel-unqualified-support-in-face-of-evil-but-fails-to-mention-plight-of-gaza",
        "alternatives": t("boycottData.Conservative party.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 151,
        "name": "G4S",
        "img_url": "https://ucarecdn.com/909d0368-eea4-4417-b7ed-08c97fd621c0/",
        "categories": t("boycottData.G4S.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.G4S.desc"),
        "proof_link": "https://peoplesdispatch.org/2023/06/05/private-security-firm-g4s-to-divest-from-israel-after-years-long-campaign-by-bds-activists/",
        "alternatives": t("boycottData.G4S.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 152,
        "name": "A&W",
        "img_url": "https://ucarecdn.com/f7b7e36c-c552-4fa4-a269-10d03934c158/",
        "categories": t("boycottData.A&W.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.A&W.desc"),
        "proof_link": "https://en.wikipedia.org/wiki/A%26W_Restaurants",
        "alternatives": t("boycottData.A&W.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 153,
        "name": "Taco Bell",
        "img_url": "https://ucarecdn.com/3337ca2d-9378-40e2-a0e0-3cc1b5701c36/",
        "categories": t("boycottData.Taco Bell.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Taco Bell.desc"),
        "proof_link": "https://www.calcalistech.com/ctech/articles/0,7340,L-3901254,00.html",
        "alternatives": t("boycottData.Taco Bell.alternatives").split(',').map(alternative => alternative.trim())
    },
    {
        "id": 154,
        "name": "Meta",
        "img_url": "https://ucarecdn.com/cfa9a0a4-9265-47c7-a603-43e194e07ebb/",
        "categories": t("boycottData.Meta.categories").split(',').map(category => category.trim()),
        "desc": t("boycottData.Meta.desc"),
        "proof_link": "https://www.ndtv.com/world-news/israel-palestine-war-thank-you-meta-israel-after-mark-zuckerberg-calls-hamas-attacks-pure-evil-4483335",
        "alternatives": t("boycottData.Meta.alternatives").split(',').map(alternative => alternative.trim())
    }
]

return boycottList;
}
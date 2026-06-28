export const BUSINESS = {
  name: "Başak Aile Çay Bahçesi",
  shortName: "Başak Kafe",
  address: "Servergazi, Koza Sk. No:1, 20040 Merkezefendi/Denizli",
  phone: "0536 814 77 91",
  phoneHref: "tel:+905368147791",
  whatsappHref: "https://wa.me/905368147791",
  hours: "Her gün, gece 01:00'e kadar",
  rating: 4.6,
  reviewCount: 9,
  description:
    "Çay bahçemizde sizi sıcak bir keyif serüvenine davet ediyoruz. Sevdiklerinizle birlikte keyifli bir mola vermek, stres dolu günlerden uzaklaşmak için en ideal çay bahçesi.",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d781.8034879756063!2d29.053991!3d37.7550971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c73fc80e2af77b%3A0x42dd5de4e52c4c2a!2zQmHFn2FrIEFpbGUgw4dheQ!5e0!3m2!1str!2str!4v1750000000000",
  realMapUrl:
    "https://www.google.com/maps/place/Ba%C5%9Fak+Aile+%C3%87ay+Bah%C3%A7esi/@37.7545966,29.0524782,17z/data=!4m6!3m5!1s0x14c73f8b0b90b89d:0xaece739653de9919!8m2!3d37.7550971!4d29.053991!16s%2Fg%2F11kqxljmsh",
};

export const FEATURES = [
  {
    icon: "Users",
    title: "Aile Ortamı",
    description: "Sevdiklerinizle huzur içinde vakit geçirebileceğiniz sıcak, samimi bir aile atmosferi.",
  },
  {
    icon: "Leaf",
    title: "Taze Lezzetler",
    description: "Günlük taze malzemelerle hazırlanan ev yapımı tostlar, kumrular ve dönerler.",
  },
  {
    icon: "TreePine",
    title: "Çocuk Parkı",
    description: "Yanımızdaki çocuk parkı sayesinde minikler oynarken siz keyfinize bakın.",
  },
  {
    icon: "Banknote",
    title: "Uygun Fiyat",
    description: "Kaliteli malzeme ve lezzetli yemekleri cüzdan dostu fiyatlarla sunuyoruz.",
  },
];

export const MENU_CATEGORIES = [
  {
    id: "doner",
    name: "Tavuk Dönerler",
    icon: "🌯",
    items: [
      {
        name: "Eski Usul Tavuk Döner",
        price: 240,
        description: "Yarım somun ekmek, tavuk döner, domates, soğan, yeşillik",
      },
      {
        name: "Kaşarlı Tavuk Döner",
        price: 260,
        description: "Yarım somun ekmek, ince dilim tavuk döner, kaşar, domates, soğan",
      },
    ],
  },
  {
    id: "tost",
    name: "Tostlar",
    icon: "🥪",
    items: [
      {
        name: "Karışık Sanayi Tost",
        price: 210,
        description: "Kırma yumurta, sucuk, kaşar, salça",
      },
      { name: "Sucuklu Yumurtalı Tost", price: 195, description: "" },
      { name: "Kaşarlı Tost", price: 180, description: "" },
      { name: "Sucuklu Kaşarlı Tost", price: 195, description: "" },
      { name: "Sucuklu Tost", price: 180, description: "" },
      { name: "Karışık Tost", price: 210, description: "" },
      { name: "Özel Sanayi Tost", price: 210, description: "" },
      {
        name: "Bazlama Tost",
        price: 280,
        description: "Izgara sucuk, eritilmiş kaşar",
      },
    ],
  },
  {
    id: "sandvic",
    name: "Sandviçler",
    icon: "🥖",
    items: [
      { name: "İzmir Kumru Sandviç", price: 374.99, description: "" },
      { name: "Yengen Kumru", price: 240, description: "" },
      { name: "Patso Sandviç", price: 230, description: "" },
    ],
  },
  {
    id: "kizartma",
    name: "Kızartmalar",
    icon: "🍟",
    items: [
      { name: "Patates Kızartması (Büyük)", price: 200, description: "" },
      { name: "Patates Kızartması (Küçük)", price: 120, description: "" },
    ],
  },
  {
    id: "menu",
    name: "Avantajlı Menüler",
    icon: "🍽️",
    items: [
      {
        name: "Sucuklu Kaşarlı Tost Menü",
        price: 220,
        description: "Tost + Patates + Ayran",
      },
    ],
  },
  {
    id: "icecek",
    name: "İçecekler",
    icon: "🥤",
    items: [
      { name: "Fuse Tea (çeşitli)", price: 99, description: "" },
      { name: "Coca-Cola / Fanta", price: 99, description: "" },
      { name: "Monster Energy", price: 95, description: "" },
      { name: "Şalgam Suyu", price: 70, description: "" },
      { name: "Damla Soda", price: 50, description: "" },
      { name: "Ayran", price: 40, description: "" },
      { name: "Su", price: 20, description: "" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Ramazan M.",
    text: "Çok sıcak bir aile ortamı var çayı, tostu ve kumrusu harika. Yanında çok güzel bir park var çocukların oynayabileceği.",
    rating: 5,
  },
  {
    name: "Murat T.",
    text: "Ailecek oturulup günün stresini atabileceğiniz bir yer.",
    rating: 5,
  },
  {
    name: "Mehmet T.",
    text: "Tostu on numara.",
    rating: 5,
  },
  {
    name: "Ömer A.",
    text: "Ailecek oturulacak güzel bir yer, sessiz sakin, tostu kumrusu güzel.",
    rating: 5,
  },
  {
    name: "Yağızhan A.",
    text: "Yemekler harika, ailenizle kesinlikle gelmeniz gereken bir yer.",
    rating: 5,
  },
];

export const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Menü", href: "#menu" },
  { label: "Rezervasyon", href: "#special-events" },
  { label: "Yorumlar", href: "#testimonials" },
  { label: "Hakkımızda", href: "#about" },
  { label: "İletişim", href: "#contact" },
];

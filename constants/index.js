const navLinks = [
  {
    id: "coffees",
    title: "Kahveler",
  },
  {
    id: "about",
    title: "Hakkımızda",
  },
  {
    id: "work",
    title: "The Art",
  },
  {
    id: "contact",
    title: "İletişim",
  },
];

const hotCoffeeLists = [
  {
    name: "Elvet Espresso",
    subtitle: "Arabica",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Caramel Macchiato",
    subtitle: "Vanilla",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Artisan Flat White",
    subtitle: "Ristretto",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Mocha Dark Roast",
    subtitle: "Espresso",
    detail: "600 ml",
    price: "$29",
  },
];

const coldCoffeeLists = [
  {
    name: "Vanilla Cold Brew",
    subtitle: "Creamy",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Iced Pistachio Latte",
    subtitle: "Iced",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Honey Oat Latte",
    subtitle: "Non-Dairy",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Hazelnut Frappe",
    subtitle: "Whipped Cream",
    detail: "600 ml",
    price: "$29",
  },
];

const profileLists = [
  { imgPath: "/images/profile1.png" },
  { imgPath: "/images/profile2.png" },
  { imgPath: "/images/profile3.png" },
  { imgPath: "/images/profile4.png" },
];

const featureLists = [
  "Perfectly balanced roasts",
  "Micro-foamed to perfection",
  "Rich aroma in every cup",
  "Expertly brewed & extracted",
];

const goodLists = [
  "Handpicked premium beans",
  "Artisan roasting methods",
  "Barista craftsmanship",
  "Freshly brewed aromatics",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(123) 456-7890",
    email: "hello@kahveland.com",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "11:00am – 12am" },
  { day: "Fri", time: "11:00am – 2am" },
  { day: "Sat", time: "9:00am – 2am" },
  { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
  { name: "Instagram", icon: "/images/insta.png", url: "#" },
  { name: "X (Twitter)", icon: "/images/x.png", url: "#" },
  { name: "Facebook", icon: "/images/fb.png", url: "#" },
];

const allCoffees = [
  {
    id: 1,
    name: "Elvet Espresso",
    image: "/images/drink1.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Yüksek basınç altında demlenen ince öğütülmüş Arabica çekirdeklerinden gelen yoğun ve altın sarısı krema dokusu.",
  },
  {
    id: 2,
    name: "Caramel Macchiato",
    image: "/images/drink2.png",
    title: "A Zesty Classic That Never Fails",
    description:
      "Taze buharlanmış sütün üzerine eklenen sert espresso ve el yapımı karamel sosu dokunuşu.",
  },
  {
    id: 3,
    name: "Vanilla Cold Brew",
    image: "/images/drink3.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Yumuşak çikolata notalarını açığa çıkarmak için 12 saat soğuk suda demlenmiş ve saf vanilya ile harmanlanmış kahve.",
  },
  {
    id: 4,
    name: "Artisan Flat White",
    image: "/images/drink4.png",
    title: "Crafted With Care, Poured With Love",
    description:
      "Ristretto çekim espressonun, ipeksi bir mikro süt köpüğüyle birleştiği pürüzsüz ve yoğun içimli lezzet.",
  },
];

export {
  navLinks,
  coldCoffeeLists,
  hotCoffeeLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCoffees,
};
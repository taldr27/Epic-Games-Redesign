import {
  google,
  fb,
  xbox,
  ps,
  nin,
  steam,
  apple,
  cyberpunk,
  fallguys,
  ffa,
  fortnite,
  rdr2,
  ffaIco,
  ffCard,
  cyberpunkCard,
  fgCard,
  fortniteCard,
  rdr2Card,
  farcry6,
  borderlands3,
  sifu,
  cyberpunkGame,
  horizon,
  dragonAI,
  killingF2,
  fallout4,
  naraka,
} from '../assets';

const platforms = [
  {
    name: "google",
    image: google
  },
  {
    name: "facebook",
    image: fb
  },
  {
    name: "xbox",
    image: xbox
  },
  {
    name: "playStation",
    image: ps,
  },
  {
    name: "nintendo",
    image: nin,
  },
  {
    name: "steam",
    image: steam,
  },
  {
    name: "apple",
    image: apple,
  }
]

const carouselImages = [
  {
    id: 0,
    name: "ffa",
    image: ffa,
    ico: ffaIco,
    cardImage: ffCard,
    priceFull: "PEN 279.00",
    salePrice: "PEN 198.00",
    description: "¡Revive el clásico juego ahora para con gráficos sorprendentes!"
  },
  {
    id: 1,
    name: "cyberpunk",
    image: cyberpunk,
    ico: ffaIco,
    cardImage: cyberpunkCard,
    priceFull: "PEN 299.00",
    salePrice: "PEN 104.00",
    description: "¡Revive el clásico juego ahora para con gráficos sorprendentes!"
  },
  {
    id: 2,
    name: "fallguys",
    image: fallguys,
    ico: ffaIco,
    cardImage: fgCard,
    priceFull: "",
    salePrice: "",
    description: "¡Revive el clásico juego ahora para con gráficos sorprendentes!"
  },
  {
    id: 3,
    name: "fortnite",
    image: fortnite,
    ico: ffaIco,
    cardImage: fortniteCard,
    priceFull: "",
    salePrice: "",
    description: "¡Revive el clásico juego ahora para con gráficos sorprendentes!"
  },
  {
    id: 4,
    name: "rdr2",
    image: rdr2,
    ico: ffaIco,
    cardImage: rdr2Card,
    priceFull: "PEN 200.00",
    salePrice: "PEN 104.99",
    description: "¡Revive el clásico juego ahora para con gráficos sorprendentes!"
  }
]

const saleGames = [
  {
    id: 0,
    name: "Farcry 6",
    image: farcry6,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "50%"
  },
  {
    id: 1,
    name: "Borderlands 3",
    image: borderlands3,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "50%"
  },
  {
    id: 2,
    name: "Sifu",
    image: sifu,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "50%"
  },
  {
    id: 3,
    name: "Cyberpunk 2077",
    image: cyberpunkGame,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "50%"
  },
  {
    id: 4,
    name: "Horizon Zero Down",
    image: horizon,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "50%"
  },
  {
    id: 5,
    name: "Borderlands 3",
    image: borderlands3,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "50%"
  },
  {
    id: 6,
    name: "Sifu",
    image: sifu,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "50%"
  },
  {
    id: 7,
    name: "Cyberpunk 2077",
    image: cyberpunkGame,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "50%"
  },
  {
    id: 8,
    name: "Horizon Zero Down",
    image: horizon,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "50%"
  },
  {
    id: 9,
    name: "Farcry 6",
    image: farcry6,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "50%"
  },
  {
    id: 10,
    name: "Farcry 6",
    image: farcry6,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "50%"
  },
]

const freeGames = [
  {
    id: 0,
    name: "Dragon Age: Inquisition",
    image: dragonAI,
    date: "Gratis hasta el 25-Jul. a la(s) 10:00",
    card: "GRATIS AHORA",
    cardColor: "bg-blue-200"
  },
  {
    id: 1,
    name: "Killing Floor 2",
    image: killingF2,
    date: "Gratis hasta el 25-Jul. a la(s) 10:00",
    card: "GRATIS AHORA",
    cardColor: "bg-blue-200"
  },
  {
    id: 2,
    name: "Fallout 4",
    image: fallout4,
    date: "Gratis hasta el 25-Jul. a la(s) 10:00",
    card: "PROXIMAMENTE",
    cardColor: "bg-secondary"
  },
  {
    id: 3,
    name: "Naraka",
    image: naraka,
    date: "Gratis hasta el 25-Jul. a la(s) 10:00",
    card: "GRATIS AHORA",
    cardColor: "bg-secondary"
  },
]

export { platforms, carouselImages, saleGames, freeGames };
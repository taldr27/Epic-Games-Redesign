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
    name: "ffa",
    image: ffa,
    ico: ffaIco,
    cardImage: ffCard,
    priceFull: "PEN 279.00",
    salePrice: "PEN 198.00",
    description: "¡Revive el clásico juego ahora para con gráficos sorprendentes!"
  },
  {
    name: "cyberpunk",
    image: cyberpunk,
    ico: ffaIco,
    cardImage: cyberpunkCard,
    priceFull: "PEN 299.00",
    salePrice: "PEN 104.00",
    description: "¡Revive el clásico juego ahora para con gráficos sorprendentes!"
  },
  {
    name: "fallguys",
    image: fallguys,
    ico: ffaIco,
    cardImage: fgCard,
    priceFull: "FREE",
    salePrice: "FREE",
    description: "¡Revive el clásico juego ahora para con gráficos sorprendentes!"
  },
  {
    name: "fortnite",
    image: fortnite,
    ico: ffaIco,
    cardImage: fortniteCard,
    priceFull: "FREE",
    salePrice: "FREE",
    description: "¡Revive el clásico juego ahora para con gráficos sorprendentes!"
  },
  {
    name: "rdr2",
    image: rdr2,
    ico: ffaIco,
    cardImage: rdr2Card,
    priceFull: "PEN 200.00",
    salePrice: "PEN 104.99",
    description: "¡Revive el clásico juego ahora para con gráficos sorprendentes!"
  }
]

export { platforms, carouselImages };
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

const games = [
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
    name: "Farcry 6",
    image: farcry6,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "50%"
  },
  {
    id: 2,
    name: "Farcry 6",
    image: farcry6,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "50%"
  },
  {
    id: 3,
    name: "Farcry 6",
    image: farcry6,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "50%"
  },
  {
    id: 4,
    name: "Farcry 6",
    image: farcry6,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "50%"
  },
  {
    id: 5,
    name: "Farcry 6",
    image: farcry6,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "50%"
  }
]

export { platforms, carouselImages, games };
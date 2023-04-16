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
  fortniteCG,
  lolCG,
  rocketCG,
  rssCG,
  gtaCG,
  neverwinter,
  rdr2U,
  hextech,
  ttW,
  gta,
  resident,
  streetFighter,
  assasinsCreed,
  bf,
  fortniteEvent,
  lolEvent,
  tftEvent,
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
    discount: "55%"
  },
  {
    id: 3,
    name: "Cyberpunk 2077",
    image: cyberpunkGame,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "30%"
  },
  {
    id: 4,
    name: "Horizon Zero Down",
    image: horizon,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "20%"
  },
  {
    id: 5,
    name: "Borderlands 3",
    image: borderlands3,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: ""
  },
  {
    id: 6,
    name: "Sifu",
    image: sifu,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "70%"
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
    card: "PROXIMAMENTE",
    cardColor: "bg-secondary"
  },
]

const communityGames = [
  {
    id: 0,
    name: "Fortnite",
    image: fortniteCG,
    fullPrice: "Gratis",
    salePrice: "",
    discount: ""
  },
  {
    id: 1,
    name: "League of Legends",
    image: lolCG,
    fullPrice: "Gratis",
    salePrice: "",
    discount: ""
  },
  {
    id: 2,
    name: "Rocket League",
    image: rocketCG,
    fullPrice: "Gratis",
    salePrice: "",
    discount: ""
  },
  {
    id: 3,
    name: "Rainbow Six Siege",
    image: rssCG,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "30%"
  },
  {
    id: 4,
    name: "Grand Theft Auto V",
    image: gtaCG,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "20%"
  },
  {
    id: 5,
    name: "Fortnite",
    image: fortniteCG,
    fullPrice: "Gratis",
    salePrice: "",
    discount: ""
  },
  {
    id: 6,
    name: "League of Legends",
    image: lolCG,
    fullPrice: "Gratis",
    salePrice: "",
    discount: ""
  },
  {
    id: 7,
    name: "Rocket League",
    image: rocketCG,
    fullPrice: "Gratis",
    salePrice: "",
    discount: ""
  },
  {
    id: 8,
    name: "Rainbow Six Siege",
    image: rssCG,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "30%"
  },
  {
    id: 9,
    name: "Grand Theft Auto V",
    image: gtaCG,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "20%"
  },
]

const recentUpdated = [
  {
    id: 0,
    name: "Neverwinter",
    image: neverwinter,
    fullPrice: "Gratis",
    salePrice: "",
    discount: ""
  },
  {
    id: 1,
    name: "Red Dead Redemption II",
    image: rdr2U,
    fullPrice: "PEN 200.00",
    salePrice: "PEN 104.99",
    discount: "50%"
  },
  {
    id: 2,
    name: "Hextech Mayhem",
    image: hextech,
    fullPrice: "Gratis",
    salePrice: "",
    discount: ""
  },
  {
    id: 3,
    name: "Rainbow Six Siege",
    image: rssCG,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "30%"
  },
  {
    id: 4,
    name: "Tiny Tina's Wonderlands",
    image: ttW,
    fullPrice: "PEN 218.99",
    salePrice: "PEN 160.99",
    discount: "40%"
  },
  {
    id: 5,
    name: "Neverwinter",
    image: neverwinter,
    fullPrice: "Gratis",
    salePrice: "",
    discount: ""
  },
  {
    id: 6,
    name: "Red Dead Redemption II",
    image: rdr2U,
    fullPrice: "PEN 200.00",
    salePrice: "PEN 104.99",
    discount: "50%"
  },
  {
    id: 7,
    name: "Hextech Mayhem",
    image: hextech,
    fullPrice: "Gratis",
    salePrice: "",
    discount: ""
  },
  {
    id: 8,
    name: "Rainbow Six Siege",
    image: rssCG,
    fullPrice: "PEN 199.99",
    salePrice: "PEN 99.99",
    discount: "30%"
  },
  {
    id: 9,
    name: "Tiny Tina's Wonderlands",
    image: ttW,
    fullPrice: "PEN 218.99",
    salePrice: "PEN 160.99",
    discount: "40%"
  },
]

const bestFranchises = [
  {
    name: "Grand Theft Auto",
    image: gta,
    color: "bg-gameColors-first"
  },
  {
    name: "Resident Evil",
    image: resident,
    color: "bg-gameColors-second"
  },
  {
    name: "Street Fighter",
    image: streetFighter,
    color: "bg-gameColors-third"
  },
  {
    name: "Assasins Creed",
    image: assasinsCreed,
    color: "bg-gameColors-fourth"
  },
  {
    name: "Battlefield",
    image: bf,
    color: "bg-gameColors-fifth"
  },
]

const gameEvents = [
  {
    id: 0,
    title: "Fortnite: Carrera de armas",
    description: "Compite entre tus amigos para obtener recompensas unicas.",
    image: fortniteEvent
  },
  {
    id: 1,
    title: "League of Legends: Mes del orgullo",
    description: "Únete a nosotros para celebrar el Orgullo con nuestra comunidad LGBTQIA+.",
    image: lolEvent,
  },
  {
    id: 2,
    title: "Teamfight Tactics: Odisea",
    description: "Prueba y recluta a nuevos campeones de otros mundos a las arenas.",
    image: tftEvent
  },
  {
    id: 3,
    title: "Fortnite: Carrera de armas",
    description: "Compite entre tus amigos para obtener recompensas unicas.",
    image: fortniteEvent
  },
  {
    id: 4,
    title: "League of Legends: Mes del orgullo",
    description: "Únete a nosotros para celebrar el Orgullo con nuestra comunidad LGBTQIA+.",
    image: lolEvent,
  },
  {
    id: 5,
    title: "Teamfight Tactics: Odisea",
    description: "Prueba y recluta a nuevos campeones de otros mundos a las arenas.",
    image: tftEvent
  },
]

export { platforms, carouselImages, saleGames, freeGames, communityGames, recentUpdated, bestFranchises, gameEvents };
import { 
  achieveSpider1,
  achieveSpider2,
  achieveSpider3,
  achieveSpider4,
  achieveSpider5,
  achieveTomb1,
  achieveTomb2, 
  achieveTomb3,
  achieveTomb4,
  achieveTomb5
} from "../assets/communityPage";

const gameAchievements = [
  {
    id: 0,
    gameName: "Shadow of the Tomb Raider",
    achievementsArray: [
      {
        achievementName: "Camino de las estrellas",
        gameName: "Shadow of the Tomb Raider",
        achievementImage: achieveTomb1,
        progress: 100,
        completed: true,
      },
      {
        achievementName: "Día de Muertos",
        gameName: "Shadow of the Tomb Raider",
        achievementImage: achieveTomb2,
        progress: 100,
        completed: true,
      },
      {
        achievementName: "Receta para el desastre",
        gameName: "Shadow of the Tomb Raider",
        achievementImage: achieveTomb3,
        progress: 73,
        completed: false,
      },
      {
        achievementName: "Primeros pasos",
        gameName: "Shadow of the Tomb Raider",
        achievementImage: achieveTomb4,
        progress: 70,
        completed: false,
      },
      {
        achievementName: "Instintos de supervivencia",
        gameName: "Shadow of the Tomb Raider",
        achievementImage: achieveTomb5,
        progress: 71,
        completed: false,
      },
      {
        achievementName: "Instintos de supervivencia",
        gameName: "Shadow of the Tomb Raider",
        achievementImage: achieveTomb5,
        progress: 71,
        completed: false,
      },
    ],
  },
  {
    id: 1,
    gameName: "Marvel’s Spiderman Remastered",
    achievementsArray: [
      {
        achievementName: "Cobertura increible",
        gameName: "Marvel’s Spiderman Remastered",
        achievementImage: achieveSpider1,
        progress: 100,
        completed: true,
      },
      {
        achievementName: "Ninja",
        gameName: "Marvel’s Spiderman Remastered",
        achievementImage: achieveSpider2,
        progress: 34,
        completed: false,
      },
      {
        achievementName: "Espía cazador",
        gameName: "Marvel’s Spiderman Remastered",
        achievementImage: achieveSpider3,
        progress: 62,
        completed: false,
      },
      {
        achievementName: "Derrota a Taskmaster",
        gameName: "Marvel’s Spiderman Remastered",
        achievementImage: achieveSpider4,
        progress: 100,
        completed: true,
      },
      {
        achievementName: "Buscador de desafíos",
        gameName: "Marvel’s Spiderman Remastered",
        achievementImage: achieveSpider5,
        progress: 70,
        completed: false,
      },
    ],
  }
]

export default gameAchievements;

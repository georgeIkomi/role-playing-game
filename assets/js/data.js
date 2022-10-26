/* extracting character data for 
   characters & storing them in a single
   object.
*/
const characterData = {
    hero: {
      name: "Wizard",
      avatar: "./assets/images/wizard.png",
      health: 60,
      diceCount: 3,
      currentDiceScore: [],
    },
    orc: {
      name: "Orc",
      avatar: "./assets/images/orc.png",
      health: 30,
      diceCount: 1,
      currentDiceScore: [],
    },
    demon: {
      name: "Demon",
      avatar: "./assets/images/demon.png",
      health: 25,
      diceCount: 2,
      currentDiceScore: [],
    },
    goblin: {
      name: "Goblin",
      avatar: "./assets/images/goblin.png",
      health: 20,
      diceCount: 3,
      currentDiceScore: [],
    },
  };
  
  export default characterData;
import characterData from "./data.js";
import Character from "./character.js";
import { newMonstersArray } from "./utils.js";

const monstersArray = newMonstersArray();
let isWaiting = false;

/**
 * This function takes the first monster from "monstersArray"
 * (using the in-build JavaScript method ".shift()")
 * and extracts that monsters data from the data.js file, saves 
 * it in the variable "nextMonsterData", and returns a new 
 * instance of the extracted monster's Character. The function 
 * returns an empty object {} if there are no more monsters in 
 * "monstersArray".
 */
function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()];
    return nextMonsterData ? new Character[nextMonsterData]: {};
}
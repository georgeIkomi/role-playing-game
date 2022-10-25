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

/**
 * The purpose of this function is to trigger the dice roll
 * for characters. The setDiceHtml method is called on the
 * character simulating the dice roll with actual dice scores.
 * In order to simulate the damage inflicted, the "takeDamage"
 * method is invoked on the character passing the "currentDiceScore"
 * of the opposing character as an argument. Checks are then 
 * carried out to see if either character is dead. The "endGame"
 * fucntion is called if the wizard dies and the game is ended.
 * If a monster dies, the function checks to see if there are any
 * more monsters in the "monstersArray". If so, it replaces the 
 * monster just eliminated with the next monster in the array and
 * renders this character, otherwise the "endGame" function is called.
 * To improve UX, the function uses the "setTimeout" to simulate a 
 * two second delay between a monster dying and a new monster taking 
 * its place. The "isWaiting" variable combined with an IF 
 * statment is used by the function to disable the attack button when
 * a character dies and re-enabling it when a new monster is loaded.
 */
function attack() {
    if (!isWaiting) {
        wizard.setDiceHtml();
        monstersArray.setDiceHtml();

        wizard.takeDamage(monster.currentDiceScore);
        monster.takeDamage(wizard.currentDiceScore);
        render();

        if (wizard.dead) {
            endGame();
        } else if (monster.dead) {
            isWaiting = true;
            if (monstersArray.length > 0) {
                setTimeout(() => {
                    monster = getNewMonster();
                    render();
                    isWaiting = false;
                }, 2000);
            } else {
                endGame();
            }
        }
    }
}
import {
    getDiceRollArray,
    getDicePlaceholderHtml,
    getPercentage
} from "./utils.js";

/**
 * The purpose of creating this class is to facilitate
 * both having all of the properties and methods that 
 * are needed by the characters in one place, and 
 * enabling the the creation of new instances for each 
 * character. The constructor function to this class 
 * takes the data (properties) for each character as a 
 * parameter, and the in-built Object.assign method is 
 * used to bind this data to "this" ("this" representing 
 * the character object at the time it's created by a new 
 * instance of this class). Object.assign (takes two 
 * parameters: a target as the first parameter, and a 
 * source as the second parameter) copies properties from 
 * a source object to a target object returning a new 
 * version of the target object, and is used here to 
 * mitigate against having to repeatedly use or type 
 * "this".
 */
class Character {
    constructor(data) {
        Object.assign(this, data);
        this.diceHtml = getDicePlaceholderHtml(this.diceCount);
        this.maxHealth = this.health;
    }

    /**
     * The purpose of this method is to provide the HTML
     * template string for rendering out the alloted number 
     * dice specific to each character. This method makes it
     * so that the rendered HTML string contains the actual 
     * dice scores. The "currentDiceScore" property 
     * (initiallized an empty array) for each character is 
     * updated with the array of random dice scores returned 
     * by the "getDiceRollArray" function. The in-built 
     * JavaScript .map() method (using a callback function) is
     * then used to iterate over the "currentDiceScore" array
     * adding the specified string of HTML to each element in 
     * the array and saved to the "diceHtml" property.
     */
    setDiceHtml() {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceHtml = this.currentDiceScore
            .map((num) => `<div class="dice">${num}</div>`)
            .join("");
    }
}

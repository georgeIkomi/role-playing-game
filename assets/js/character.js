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

    /**
     * The objective of this method is to simulate the damage 
     * inflicted on each character, and this method takes one 
     * parameter (attackScoreArray) representing the 
     * "currentDiceScore" of the character. The in-built JavaScript 
     * .reduce() method is used to calculate and return the total 
     * score (represented by the total of every element/number in 
     * the array) forthe character as it iterates over each element 
     * in the "attackScore" array. This method takes two arguments:
     * the first is a callback function and the second is the initial 
     * value of the operation being performed (in this case 0 as it is 
     * a calculation operation). The callback function to the .reduce()
     * method also takes two parameters (the first is a variable or
     * accumulator that is returned by the .reduce() method, and the
     * second is the current element being iterated over). The total 
     * score is then stored in the variable (or accumulator) "total"
     * and is returned and saved in the variable "totalAttackScore".
     * The "health" value for the character is then reduced by an 
     * amount equal to the "totalAttackScore". Finally, a 
     * determination is made as to whether the character is dead,
     * and in so doing ensures that the health value of the 
     * character never assumes a negative value.
     */
    takeDamage(attackScoreArray) {
        const totalAttackScore = attackScoreArray
            .reduce((total, num) => total += num,0);

        this.health -= totalAttackScore;
        if (this.health <= 0) {
            this.health = 0;
            this.dead = true;
        }
    }
}

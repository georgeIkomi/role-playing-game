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
     * inflicted on the character, and this method takes one 
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

    /**
     * Method returning the HTML template string for creating
     * the health bar for the character. The variable "percent"
     * is created and set  It adds the class "danger" 
     * to the div with class "health-bar-inner" if the percentage 
     * health remaining for the character is 25% or less, and sets 
     * the width of this div to the percentage health remaining for 
     * the character.
     */
    getHealthBarHtml() {
        const percent = getPercentage(this.health, this.maxHealth);
        return`
            <div class="health-bar-outer">
                <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                    style="width: ${percent}%;">
                </div>
            </div>
            `;
    }

    /**
     * This method returns the HTML template string for
     * the rendering of characters. The created "healthBar"
     * variable is set to the html string returned by the 
     * getHealthBarHtml method and adds it to the html template
     * string returned byt getCharacterHtml method. To easily 
     * access the properties of the character, Object destructuring
     * is used to unpack the properties of each character object and
     * saved to variables with the same name of each property of the
     * character.  
     */
    getCharacterHtml() {
        const { elementId, name, avatar, health, diceCount, diceHtml} = this;
        const healthBar = this.getHealthBarHtml();
        return `
            <div class="character-card">
                <h4 class="name">${name}</h4>
                <img class="avatar" src="${avatar}" alt="An avatar image of the Wizard character reciting incantations from his book of magic">
                <p class="health">health: <strong>${health}</strong></p>
                ${healthBar}
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>
            `;
    }
}

export default Character;

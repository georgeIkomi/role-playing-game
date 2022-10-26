/**
 * Function to dynamically create random dice values to simulate
 * rolling the dice and will take the "diceCount" property for each
 * character object as a parameter. The "diceCount" property represents
 * the length of the newly created array. The length of the array
 * determines the number of dice each character will have. So for
 * a character with a "diceCount" property value of 3, for example, 
 * this character will have 3 dices and the purpose of this function 
 * is to generate random values for each dice. A new array that is 
 * "diceCount" in length is created with the Array constructor and 
 * filled with zeros (using the in-built JavaScript.fill() method)
 * as its initial state. The javaScript in-built .map() method 
 * (using a callback function) is then used to directly iterate 
 * over the new array and returns a random number from 1 - 6 for each 
 * element in the array.
 */
function getDiceRollArray(diceCount) {
    return new Array(diceCount)
        .fill(0)
        .map(() => Math.floor(Math.random() * 6) + 1); 
}

/**
 * Function to create placeholders for dice rolls relating
 * to each character. The purpose of this function is to
 * mitigate against the app rolling the dice as soon as it
 * loads or when refreshed. This function will make it so that
 * the dice themselves only appear when the attack button is 
 * being clicked. The Array constructor is used to create a new 
 * array of length specific to the "diceCount" property of each
 * character. Each array element is assigned an initial static 
 * value (zero in this case) using the JavaScript in-built 
 * .fill() method, and then the JavaScript in-built .map() method 
 * (using a callback function) is used to iterate over the array 
 * adding the specified HTML template string representing the dice 
 * placeholder div to each element in the array. This empty div 
 * has a css class which produces the outline of the blank dice.
 * The in-built JavaScript .join() method with a separator passed 
 * in as a parameter is then used to easily create a string from
 * the resulting array and returned.
 */
function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount)
        .fill(0)
        .map(() => `<div class="placeholder-dice"></div>`)
        .join("");
}

/**
 * Function to calculate and return the maximum health 
 * remaining for each character. This function facilitates 
 * the simulation of each character's green health bar
 * decreasing as the character's health value drops.
 * The "maximumHealth" argument contains the maximum
 * amount of health possible for each character to have
 * as specified in their respective default "maxHealth"
 * (i.e. the amount of health they start with at the 
 * beginning of a game) property. The "remainingHealth" 
 * argument is the amount of health remaining for each 
 * character as the game unfolds.
 */
const getPercentage = (remainingHealth, maximumHealth) =>
    (remainingHealth / maximumHealth) * 100;

/**
 * This function returns an array to replace old monsters
 * with new monsters as monsters are killed or eliminated.
 */
function newMonstersArray() {
    return ["orc", "demon", "goblin"];
}

export { 
    getDiceRollArray, 
    getDicePlaceholderHtml, 
    getPercentage, 
    newMonstersArray 
};


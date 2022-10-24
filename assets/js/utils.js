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


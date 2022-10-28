# Role Playing Game

This Role Playing Game is a site that hopes to keep game lovers entertained.
In this game there are only two characters on the screen at any given time, one 
good and the other evil.

The site will be targeted towards game enthusiasts who regularly play computer
games or love participating in a role-playing game.

![](/assets/images/role-playing-game_screenshot1.png)

![](/assets/images/role-playing-game_Screenshot6.png)

# Features

## Existing Features

* Character Cards

  - The character cards hold all the information relating to each character:
    name, avatar image, health, health bar, number of dice alloted, and current
    dice score.

  - This is particularly useful to the user as all the information relating to
    each character can be easily gleaned in one place.

![](/assets/images/role-playing-game_Screenshot7.png)

* Health Indicator

  - The health indicator show the strength or power level that each character begins
    with at the start of the game.

  - This helps the user have some level of awarenesss as to the imminent elimination
    or otherwise of each character, as this number reduces as the character takes on
    damage inflicted by the opposing character.

![](/assets/images/role-playing-game_Screenshot2.png)

* Health Bar

  - The purpose of the health bar is similar to that of the health indicator in that
    it gives an added visual awareness to the user of the state of each character's
    health or power level as the game unfolds.

  - A useful indicator to the user, the health bar of each character decreases as 
    they take on damage inflicted by the opposing character and changes colour from
    green to red when the state of the character's power level is critical.

![](/assets/images/role-playing-game_Screenshot3.png)

* Dice Area

  - Characters will have between one and three dice and for every click of the attack
    button, a random number between one and six will be generated for each dice. Damage
    is inflicted on a character when the sum of the dice roll for the opposing character
    is subtracted form the character's health or power value.

  - This will enable the user to see the dice roll of each character giving them a visual
    perspective as to what is going as the game unfolds.

![](/assets/images/role-playing-game_Screenshot4.png)

* Attack Button

  - The attack button is essentially what initiates commencement of the game. Each click
    of this button by the user causes a dice roll for each character and simulates the
    attack of one character on the other, and vice-versa.

  - On each click, the user will simultaneously be able to seethe change in the dice roll
    score and the resulting effect on the health or power level of the characters. This is
    beneficial as this aspect of the game is not abstracted away from the user.

![](/assets/images/role-playing-game_Screenshot5.png)

* Game Over (including Play Again? Button)

  - This is what is displayed to the user when the game ends (i.e. when either character
    is dead or both characters are dead).

  - This part of the gaame not only indicates the end of the game to the user, but also 
    gives information to the user as to which character has won or whether all characters are dead, and provides the user with the opportunity to have another go if they so which through the "Play Again?" button. 

![](/assets/images/role-playing-game_Screenshot8.png)

# Testing

  * Getting Dice Placeholders (getDicePlaceholderHtml function)

    At one point, the app rolls the dice as soon as it loads making it so that anytime
    the page is refreshed the user automatically gets a new dice roll, and this isn't what was desired at that point. 

    This feature generates a placeholder image which is just the outline of the dice and ought to be what the user sees when the page first loads. The actual dice themselves only appear when the attack button is clicked. The purpose of the getDicePlaceholderHtml (takes one parameter: "diceCount") function is to return an html template string representing this plaeholder div for the dice.

    To verify that this works, the function was called with a "diceCount" value of 3 from within console.log() function and the result logged to the console in Chrome Dev Tools. The resulting output was an array of length 3 with the html template string representing this placeholder div for the dice as the elements. The process was repeated with diceCount value of 2 and the resulting output was an array of length 2 with the html template string representing this placeholder div for the dice as the elements. 
    
    Therefore, it was verified that this piece of functionality works and the console.log function was deleted afterwards.

  * Generating Random Values for the Dice

    Using the getDiceRollArray function, the aim of this function is to simulate the generation of random numbers, between 1 and 6, for the dice. This function takes a parameter (diceCount) that determines the number of dice each character will have based on the value of their respective "diceCount" property value.

    In order to test this functionality, the function was created (using the in-built JavaScript functions: "Math.floor" and "Math.random") and invoked with the result logged out to the console in Chrome Dev Tools. The function was called with a diceCount value of 3 and an array with three numbers as elements (representing three dice) each with a number between 1 and 6 was logged out to the console. The process was repeated with a diceCount value of two and the result was an array with two numbers as elements representing two dice each with a number between 1 and 6 was logged to the console. Finally, with a diceCount value of 1 the process was repeated and an array with one number representing one dice with a number between 1 and 6 was logged out to the console confirming that this feature works as it should.

    The console.log() function was deleted after testing.

  * Getting Maximum Health Remaining (getPercentage function)

    Testing this feature was done by calling the "getPercentage" function from within the "takeDamage" method inside a console.log function and logging the return value to the console in Chrome Dev Tools, using "this.health" as the value for the parameter "remainingHealth"  and "this.maxHealth" as the value for the second parameter "maximumHealth". After a refresh of the page and as the "attack" button is clicked, the percentages are being displayed in the console until the game ends, displaying a whole list of the percentages of the health remaining for each character at that time.

    The console.log function was deleted after testing was completed.

  * Getting New Monsters (getNewMonsters function)
    
    As the Wizard kills or eleminates a monster, a new monster character takes the place of the eliminated one. To simulate this feature, the "getNewMonsters" function is used.

    To test its functionality and ensure it's working correctly, the console.log() function is used to log out the "monster" variable (on line 57 in script.js) which is set to the "getNewMonsters" function (after it is confirmed that the previous monster is dead and that there is a new monster to take its place) to the console in Chrome Dev Tools. 

    As the attck button is clicked and as monster characters are eliminated, this console.log function logs out the details of the next monster in line to replace the eliminated one, and this continues as the attack button is clicked until there are no more monsters (i.e. when all monsters have been killed and the game ends).

    The console.log function on line 57 in script.js was deleted afterwards..

  * Attack Button

    In order to verify that the attack button works, early on a function called "attack" was created with the sole objective of logging out (using console.log() function) the phrase "attack button working" to the console in Chrome Dev Tools when clicked. The button was then accessed via the DOM using its unique ID ("attack-button") and chaining on an event listener with the word "click" as the first argument to the event listener, and the "attack" function as the second argument. 
    
    After saving, each time the attack button is clicked we get the phrase "attack button working" logged out to the console in Dev Tools. The console.log() function was deleted after testing.

  * Attack Feature (attack function)

    Every time the "attack" button is clicked the "attack function" is called, and one objective is making sure that after every attack a check is conducted to see if either character is dead. If it is the case that either character is dead the "endGame" function is called. To test this feature early on, inside the "attack" function a check (if (wizard.dead || orc.dead)) is conducted to determine if either character is dead. If so, then the "endGame" function is called. The "endGame" function was then written and initially, just for the purpose of testing at this point, it logged out the message "The game is over" when called (from within the "attack" function) to the console in Chrome Dev Tools.

    After saving, a fresh game is started and as the "attack" button is clicked the message "The game is over" was logged out to the console as either of the characters "health" indicator reaches zero (i.e. when either character is dead) confirming that this piece of functionality within the "attack" function works.

    The console.log function from within the endGame function was deleted after testing.

  * Game Over Feature (endGame function)

    In testing that this feature works accordingly, a variable ("endMesage") was created and would contain one of three phrases ("The Wizard wins", "The Orc is Victorious", or "No victors - all creatures are dead") depending on whether one or both characters are dead when logged with the console.log() function to the console in Chrome Dev Tools.

    After saving/refreshing, the "attack" button is clicked until either of the conditions checked holds true, at which point the "endMessage" variable displaying the appropriate message depending on the result of what is being checked is logged to the console. To further verify that this is working properly, the default "health" property value of the characters (in character.js) was adjusted ( either upwards for one character and downwards for the other, and vice-versa as appropriate) to see if the correct output is being logged out to the console depending on each of the conditions being tested in the tenary statement. All of the three scenarios being tested logged out the corresponding phrase through the "endMessage" variable to the console.

    After testing, the console.log statement was removed.

  * Rendering Characters (render function)

    Testing for this feature/functionality was carried out by creating a new instance of the Character class, accessing the innerHTML of this new instance in the DOM via the document node, and then setting it equal to the return value when the "getCharacterHTML" method is called on this new instance using the dot notation. This updates the DOM with the rendered output of this new instance.

    Both the creation of this new instance and the process of updating the DOM with the rendered output were deleted after testing.

  * Getting Character Details (getCharacterHtml method)

    In order to test this functionality, a return statement was initially used within the method. The test was conducted by creating a new instance of one of the characters and calling this method directly on the newly created instance using dot notation from inside a console.log function and logging it to the console in Chrome Dev Tools. The output displayed was an html template string containg the details of the character whose instance has just been created. 

    The process was repeated with the creation of a new instance using data from a different character and the output logged to the console in Chrome Dev Tools was an html template string containg the details of this character.

    The return keyword in the method, new instances of the characters created, and the console.log function were all deleted after testing.

  * Inflicting Damage (takeDamage method) 

    In order to test this feature and ensure that it works, the method (taking in a parameter: "attackScoreArray") in character.js was tasked with logging out the name of the character along with the "attackScoreArray" parameter using template literal to the console in Chrome Dev Tools.

    Then from within the "attack" function in script.js, the method was called on each of the characters passing in the "currentDiceScore" property value of the opposing character as an argument (as the characters don't attack themselves but attack each other), so a determination can be made as to what the health score for each character is reduced by when a character attacks.

    The resulting output verified that the name of each character along with the "currentDiceScore" (attackScore) of the opposing character was logged to the console in Dev Tools when the "attack" button is clicked. The console.log statement was deleted afterwards.

    In addition, within this method (within the "if" statement to be specific) is a way of recording when a characters dies. This line of code ("this.dead = true") gives the character a new Boolean "dead" when its "health" indicator reaches zero and is initially initialised to true.

    To test this functionality at a very early stage, a log statement (console.log(this.dead)) displaying this Boolean is logged to the console in Chrome Dev Tools when the character's health indicator reaches zero. When the "attack" button is then clicked and a character's health indicator reaches zero the Boolean true is logged to the console confirming it works. The console.log statement was removed after testing.

# Validator Testing

  * HTML
    - Initial testing in the official [W3C validator](https://validator.w3.org/) service
      returned one warning. This warning suggested putting the button element inside a heading element (h2-h6). This was corrected  and the test re-run with no issues, errors or warnings.

  * CSS
    - No errors found by the [(Jigsaw)validator](https://jigsaw.w3.org/css-validator/)
      validation service.

  * JAVASCRIPT

    All test were conducted on the static code analysis tool on 
    [JSHint](https://jshint.com/)

    - script.js

      Initial testing indicated 4 warnings relating to missing semi-colons and misleading line breaks. These were addressed and the test re-run on the code with no further issues, warnings, or errors.

    - utils.js

      Testing indicated no issues, warnings, or errors.

    - data.js

      Testing indicated no issues, warnings, or errors.

    - character.js

      Initial testing highlighted 2 warnings relating to the use of unused variables in the getCharacterHtml method. These unused variables were removed from the destructuring statement. The test was re-run on the code with no subsequent issues, errors or warnings.

# Deployment

  * GitHub Pages

    The site was deployed to GitHub pages and the steps to deploy were as follows:

      - In the Github repository, locate and click the "Settings" button on the menu at 
        the top of the Repository (not top of the page).

      - Looking at the menu on the left (under the "Code & automation section), scroll 
        down until you locate "Pages" then click on it.

      - Under "Build and deployment", select "Deploy from a branch" from the drop-down 
        menu in the "Source" sub-section, and select "main" from the drop-down menu in the "Branch"

      - Click on the "Save" button. Once this is done, the page will be automatically 
        refreshed with a detailed ribbon display at the top of the page to indicate the successful deployment.

  The live link can be found here - <https://georgeikomi.github.io/role-playing-game/>

# Credits

  * Character images were taken from <https://www.shutterstock.com/search/role-playing-game> 

  * Instructions on how to refresh a page in JavaScript was taken from [freeCodeCamp-Tutorial](https://www.freecodecamp.org/news/refresh-the-page-in-javascript-js-reload-window-tutorial/#:~:text=You%20can%20use%20the%20location,method%20responsible%20for%20page%20reloading.)

  * Instructions on how to organise code using the import statement was taken from
    [MDN-documentation(import)](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/import)

  * Instructions on how to organise code using the export statement was taken from 
    [MDN-documentation(export)](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)

  * Instructions on how to overcome JSHint warning on using const was taken from 
    [stackoverflow()](https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const)

  * Further instructions on how to access and update markup in the DOM was taken from
    JAVASCRIPT & JQUERY (interactive front-end web development) Chapter 5: Document Object Model, pg184-227, by John Duckett.

  * Further instructions on how to write functions and methods was taken from 
    JAVASCRIPT & JQUERY (interactive front-end web developmen) Chapter 2: Basic JavaScript Instructions, pg53-81 & Chapter 3: Functions, Methods & Objects, pg86-130, by John Duckett. 

  
  
  



      


# Quiz on Human Rights

## Motivation
* To create a quiz that displays the scores and initials of the users at the end
* It can be used as a template and the questions can be easily replaced 
* The given quiz is about Human Rights issues
* It can be used to practise the knowledge of the different human rights acts and articles


## Techniques used
* Main focus in this mini project is on using javascript
* There are three js files
* There are techniques for :
    - dynamically creating HTML elements 
    - saving data in localStorage of the browser
    - using JASON for holding the data in localStorage and parsing it to the String to be displayed and used or parsing it back to JASON object to save it in browser
    - using eventListeners
    - setting timeout for certain time length
    - incorporating sound file to play feedback message

## Instructions
* Landing page:
* Explanation of the quiz
* Start button

* Click the start button:
* Landing page goes away
* Timer starts count down from 60 seconds
* The first question appears (with its answers)

* For each question:
* User clicks an answer
* Their choice is compared to the correct answer and stored in browser
* feedback message:
    * tells user whether chosen option is correct or not
    * plays a sound for correct or incorrect
* After the last question:
    * Timer stops
    * Question disappears
    * Form appears for user to enter their initials
    * Displays their score after submitting the form

* User submits form:
    * Initials and score get stored in local storage
    * User is taken to the high scores page
    * High scores are listed, sorted highest to lowest
    * User has option to take the quiz again by clicking on 'Go Back' button 

## Further improvements
* There can be an implementation on automating loading mechanism for different questions into the template of the quiz to make it reusable. E.g. using a export of a questions from spreadsheet, or reading from a file etc.
* Currently, there are template CONSTANT variables that can hold questions as Strings and the strings have to be replaced manually
- Code can be refactored to follow DRY concept 




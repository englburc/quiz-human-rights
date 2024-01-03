//! Each question needs the following:
//! Question text
QUESTION1_TEXT = `QUESTION1_TEXT`;
QUESTION2_TEXT = `QUESTION2_TEXT`;
QUESTION3_TEXT = `QUESTION3_TEXT`;
QUESTION4_TEXT = `QUESTION4_TEXT`;
QUESTION5_TEXT = `QUESTION5_TEXT`;
//! Set of answers
QUESTION1_ANSWER_OPTION1 = `QUESTION1_ANSWER_OPTION1`;
QUESTION1_ANSWER_OPTION2 = `QUESTION1_ANSWER_OPTION2`;
QUESTION1_ANSWER_OPTION3 = `QUESTION1_ANSWER_OPTION3`;

QUESTION2_ANSWER_OPTION1 = `QUESTION2_ANSWER_OPTION1`;
QUESTION2_ANSWER_OPTION2 = `QUESTION2_ANSWER_OPTION2`;
QUESTION2_ANSWER_OPTION3 = `QUESTION2_ANSWER_OPTION3`;

QUESTION3_ANSWER_OPTION1 = `QUESTION3_ANSWER_OPTION1`;
QUESTION3_ANSWER_OPTION2 = `QUESTION3_ANSWER_OPTION2`;
QUESTION3_ANSWER_OPTION3 = `QUESTION3_ANSWER_OPTION3`;

QUESTION4_ANSWER_OPTION1 = `QUESTION4_ANSWER_OPTION1`;
QUESTION4_ANSWER_OPTION2 = `QUESTION4_ANSWER_OPTION2`;
QUESTION4_ANSWER_OPTION3 = `QUESTION4_ANSWER_OPTION3`;

QUESTION5_ANSWER_OPTION1 = `QUESTION5_ANSWER_OPTION1`;
QUESTION5_ANSWER_OPTION2 = `QUESTION5_ANSWER_OPTION2`;
QUESTION5_ANSWER_OPTION3 = `QUESTION5_ANSWER_OPTION3`;

//! Which answer is correct
QUESTION1_ANSWER_CORRECT = `QUESTION1_ANSWER_CORRECT`;
QUESTION2_ANSWER_CORRECT = `QUESTION2_ANSWER_CORRECT`;
QUESTION3_ANSWER_CORRECT = `QUESTION3_ANSWER_CORRECT`;
QUESTION4_ANSWER_CORRECT = `QUESTION4_ANSWER_CORRECT`;
QUESTION5_ANSWER_CORRECT = `QUESTION5_ANSWER_CORRECT`;


//! Set of questions --> array of objects
questions = [
    {
        question: QUESTION1_TEXT,
        options: [QUESTION1_ANSWER_OPTION1, QUESTION1_ANSWER_OPTION2, QUESTION1_ANSWER_OPTION3],
        correctAnswer: QUESTION1_ANSWER_CORRECT
    },
    {
        question: QUESTION2_TEXT,
        options: [QUESTION2_ANSWER_OPTION1, QUESTION2_ANSWER_OPTION2, QUESTION2_ANSWER_OPTION3],
        correctAnswer: QUESTION2_ANSWER_CORRECT
    },
    {
        question: QUESTION1_TEXT,
        options: [QUESTION3_ANSWER_OPTION1, QUESTION3_ANSWER_OPTION2, QUESTION3_ANSWER_OPTION3],
        correctAnswer: QUESTION3_ANSWER_CORRECT
    },
    {
        question: QUESTION1_TEXT,
        options: [QUESTION4_ANSWER_OPTION1, QUESTION4_ANSWER_OPTION2, QUESTION4_ANSWER_OPTION3],
        correctAnswer: QUESTION4_ANSWER_CORRECT
    },
    {
        question: QUESTION1_TEXT,
        options: [QUESTION5_ANSWER_OPTION1, QUESTION5_ANSWER_OPTION2, QUESTION5_ANSWER_OPTION3],
        correctAnswer: QUESTION5_ANSWER_CORRECT
    }

]

//! Landing page:
//! Explanation of the quiz
//! Start button

//! Click the start button:
//! Landing page goes away
//! Timer starts
//! The first question appears (with its answers)

//! For each question:
//! User clicks an answer
// Their choice is compared to the correct answer as stored in the question's object
// If correct, tell them
// If incorrect, tell them AND subtract time from the timer
// Optional: play a sound for correct or incorrect
// Either way, the question disappears after a few seconds and the next question appears

//! After the last question:
//! Timer stops
//! Question disappears
//! Form appears for user to enter their initials
//! Display their score

// User submits form
// Initials and score get stored in local storage
// User is taken to the high scores page
// High scores are listed, sorted highest to lowest
// User has option to take the quiz again
//! Each question needs the following:
//! Question text
QUESTION1_TEXT = `What year was the Universal Declaration of Human Rights signed?`;
QUESTION2_TEXT = `How many countries voted for the Universal Declaration of Human Rights and how many abstained?`;
QUESTION3_TEXT = `How many articles are there in the Universal Declaration of Human Rights?`;
QUESTION4_TEXT = `Which 3 countries have all legalised same sex marriage?`;
QUESTION5_TEXT = `Which country has not ratified the United Nations Convention on the Rights of the Child?`;

//! Which answer is correct
QUESTION1_ANSWER_CORRECT = `1948`;
QUESTION2_ANSWER_CORRECT = `48 for, 8 abstained`;
QUESTION3_ANSWER_CORRECT = `30`;
QUESTION4_ANSWER_CORRECT = `Switzerland, Uruguay, South Africa`;
QUESTION5_ANSWER_CORRECT = `China`;

//! Set of answers
//1st questions answers
QUESTION1_ANSWER_OPTION1 = `1946`;
QUESTION1_ANSWER_OPTION2 = QUESTION1_ANSWER_CORRECT;
QUESTION1_ANSWER_OPTION3 = `1965`;
QUESTION1_ANSWER_OPTION4 = `1952`;

//2nd question answers
QUESTION2_ANSWER_OPTION1 = `50 for, 6 abstained`;
QUESTION2_ANSWER_OPTION2 = `45 for, 11 abstained`;
QUESTION2_ANSWER_OPTION3 = QUESTION2_ANSWER_CORRECT;
QUESTION2_ANSWER_OPTION4 = `52 for, 4 abstained`;

//3dr question answers
QUESTION3_ANSWER_OPTION1 = `15`;
QUESTION3_ANSWER_OPTION2 = `20`;
QUESTION3_ANSWER_OPTION3 = `25`;
QUESTION3_ANSWER_OPTION4 = QUESTION3_ANSWER_CORRECT;

//4th question answers
QUESTION4_ANSWER_OPTION1 = `Costa Rica, Czech Republic, Cuba`;
QUESTION4_ANSWER_OPTION2 = `Taiwan, Japan, Austria`;
QUESTION4_ANSWER_OPTION3 = `Malta, India, Spain`;
QUESTION4_ANSWER_OPTION4 = QUESTION4_ANSWER_CORRECT;

//5th question answers
QUESTION5_ANSWER_OPTION1 = `United States`;
QUESTION5_ANSWER_OPTION2 = `Somalia`;
QUESTION5_ANSWER_OPTION3 = `South Sudan`;
QUESTION5_ANSWER_OPTION4 = QUESTION5_ANSWER_CORRECT;




//! Set of questions --> array of objects
questions = [
    {
        question: QUESTION1_TEXT,
        options: [QUESTION1_ANSWER_OPTION1, QUESTION1_ANSWER_OPTION2, QUESTION1_ANSWER_OPTION3, QUESTION1_ANSWER_OPTION4],
        correctAnswer: QUESTION1_ANSWER_CORRECT
    },
    {
        question: QUESTION2_TEXT,
        options: [QUESTION2_ANSWER_OPTION1, QUESTION2_ANSWER_OPTION2, QUESTION2_ANSWER_OPTION3, QUESTION2_ANSWER_OPTION4],
        correctAnswer: QUESTION2_ANSWER_CORRECT
    },
    {
        question: QUESTION3_TEXT,
        options: [QUESTION3_ANSWER_OPTION1, QUESTION3_ANSWER_OPTION2, QUESTION3_ANSWER_OPTION3, QUESTION3_ANSWER_OPTION4],
        correctAnswer: QUESTION3_ANSWER_CORRECT
    },
    {
        question: QUESTION4_TEXT,
        options: [QUESTION4_ANSWER_OPTION1, QUESTION4_ANSWER_OPTION2, QUESTION4_ANSWER_OPTION3, QUESTION4_ANSWER_OPTION4],
        correctAnswer: QUESTION4_ANSWER_CORRECT
    },
    {
        question: QUESTION5_TEXT,
        options: [QUESTION5_ANSWER_OPTION1, QUESTION5_ANSWER_OPTION2, QUESTION5_ANSWER_OPTION3, QUESTION5_ANSWER_OPTION4],
        correctAnswer: QUESTION5_ANSWER_CORRECT
    }

]
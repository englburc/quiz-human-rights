//! Each question needs the following:
//! Question text
QUESTION1_TEXT = `What year was the Universal Declaration of Human Rights signed?`;
QUESTION2_TEXT = `How many countries voted for the Universal Declaration of Human Rights and how many abstained?`;
QUESTION3_TEXT = `How many articles are there in the Universal Declaration of Human Rights?`;
QUESTION4_TEXT = `Which 3 countries have all legalised same sex marriage?`;
QUESTION5_TEXT = `Which country has not ratified the United Nations Convention on the Rights of the Child?`;
QUESTION6_TEXT = `When was the International Criminal Court Founded and how many States are party to it?`;
QUESTION7_TEXT = `Which are the first and last States to be parties to the International Criminal Court?`;
QUESTION8_TEXT = `Which article of the United Declaration of Human Rights states, "All human beings are born free and equal in dignity and rights"?`;
QUESTION9_TEXT = `Which right is explicitly mentioned in Article 19 of the United Declaration of Human Rights?`;
QUESTION10_TEXT = `Which article of the Universal Declaration of Human Rights addresses the right to seek asylum and the right to enjoy asylum in other countries?`;


//! Which answer is correct
QUESTION1_ANSWER_CORRECT = `1948`;
QUESTION2_ANSWER_CORRECT = `48 for, 8 abstained`;
QUESTION3_ANSWER_CORRECT = `30`;
QUESTION4_ANSWER_CORRECT = `Switzerland, Uruguay, South Africa`;
QUESTION5_ANSWER_CORRECT = `United States`;
QUESTION6_ANSWER_CORRECT = `2002 and 123`;
QUESTION7_ANSWER_CORRECT = `Senegal and Kiribati`;
QUESTION8_ANSWER_CORRECT = `Article 1`;
QUESTION9_ANSWER_CORRECT = `Right to Freedom of Thought`;
QUESTION10_ANSWER_CORRECT = `Article 14`;

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
QUESTION5_ANSWER_OPTION1 = `China`;
QUESTION5_ANSWER_OPTION2 = `Somalia`;
QUESTION5_ANSWER_OPTION3 = `South Sudan`;
QUESTION5_ANSWER_OPTION4 = QUESTION5_ANSWER_CORRECT;

//6th question answers
QUESTION6_ANSWER_OPTION1 = `2005 and 125`;
QUESTION6_ANSWER_OPTION2 = `2010 and 133`;
QUESTION6_ANSWER_OPTION3 = `1999 and 119`;
QUESTION6_ANSWER_OPTION4 = QUESTION6_ANSWER_CORRECT;

//7th question answers
QUESTION7_ANSWER_OPTION1 = QUESTION7_ANSWER_CORRECT;
QUESTION7_ANSWER_OPTION2 = `Iceland and Vanuatu`;
QUESTION7_ANSWER_OPTION3 = `The Netherlands and Nigeria`;
QUESTION7_ANSWER_OPTION4 = `Austria and Cabo Verde`;

//8th question answers
QUESTION8_ANSWER_OPTION1 = `Article 3`;
QUESTION8_ANSWER_OPTION2 = `Article 7`;
QUESTION8_ANSWER_OPTION3 = QUESTION8_ANSWER_CORRECT;
QUESTION8_ANSWER_OPTION4 = `Article 10`;

//9th question answers
QUESTION9_ANSWER_OPTION1 = `Right to Education`;
QUESTION9_ANSWER_OPTION2 = QUESTION9_ANSWER_CORRECT;
QUESTION9_ANSWER_OPTION3 = `Right to Health`;
QUESTION9_ANSWER_OPTION4 = `Right to Adequate Standard of Living`;

//10th question answers
QUESTION10_ANSWER_OPTION1 = `Article 5`;
QUESTION10_ANSWER_OPTION2 = `Article 12`;
QUESTION10_ANSWER_OPTION3 = QUESTION10_ANSWER_CORRECT;
QUESTION10_ANSWER_OPTION4 = `Article 18`;





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
    },

    {
        question: QUESTION6_TEXT,
        options: [QUESTION6_ANSWER_OPTION1, QUESTION6_ANSWER_OPTION2, QUESTION6_ANSWER_OPTION3, QUESTION6_ANSWER_OPTION4],
        correctAnswer: QUESTION6_ANSWER_CORRECT
    },

    {
        question: QUESTION7_TEXT,
        options: [QUESTION7_ANSWER_OPTION1, QUESTION7_ANSWER_OPTION2, QUESTION7_ANSWER_OPTION3, QUESTION7_ANSWER_OPTION4],
        correctAnswer: QUESTION7_ANSWER_CORRECT
    },

    {
        question: QUESTION8_TEXT,
        options: [QUESTION8_ANSWER_OPTION1, QUESTION8_ANSWER_OPTION2, QUESTION8_ANSWER_OPTION3, QUESTION8_ANSWER_OPTION4],
        correctAnswer: QUESTION8_ANSWER_CORRECT
    },

    {
        question: QUESTION9_TEXT,
        options: [QUESTION9_ANSWER_OPTION1, QUESTION9_ANSWER_OPTION2, QUESTION9_ANSWER_OPTION3, QUESTION9_ANSWER_OPTION4],
        correctAnswer: QUESTION9_ANSWER_CORRECT
    },

    {
        question: QUESTION10_TEXT,
        options: [QUESTION10_ANSWER_OPTION1, QUESTION10_ANSWER_OPTION2, QUESTION10_ANSWER_OPTION3, QUESTION10_ANSWER_OPTION4],
        correctAnswer: QUESTION10_ANSWER_CORRECT
    }

]
let currentQuestionIndex = 0;
let score = 0;
let timer;
let initialTime = 60;


const startButton = document.getElementById('start');
const submitButton = document.getElementById('end-screen');
const clearButton = document.getElementById('clear');

// Event listeners
startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('submit', function (e) {
    // Prevents the form from submitting to server through browser
    e.preventDefault();
    saveScore();
});

function stopTimer() {
    // clear the interval to stop the countdown
    clearInterval(timer);
}

function endQuiz() {
    // stop the timer
    stopTimer();

    // Hide questions, show end screen
    document.getElementById('questions').classList.add('hide');
    document.getElementById('end-screen').classList.remove('hide');

    // Display final score
    document.getElementById('final-score').textContent = score;
}

function startTimer() {


    // display the initial time
    document.getElementById('time').textContent = initialTime;

    // start the countdown
    timer = setInterval(() => {
        initialTime--;

        // update the timer display
        document.getElementById('time').textContent = initialTime;

        // Check if time has run out
        if (initialTime <= 0) {
            //end quiz
            console.log(`end quiz`);
            endQuiz();
        }
    }, 1000);
}

function subtractTime(seconds) {
    // let remainingTime = parseInt(document.getElementById('time').textContent, 10);
    initialTime = initialTime - seconds;

    // Ensure the remaining time is not negative
    initialTime = Math.max(0, initialTime);

    // Update the timer display
    document.getElementById('time').textContent = initialTime;
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    //element of html used to tell user correct or incorrect answer
    const feedbackContainer = document.getElementById('feedback');
    //show feedback
    feedbackContainer.classList.remove(`hide`);
    if (selectedAnswer === correctAnswer) {

        score++;

        //to play sound
        let audioEl = document.createElement('audio');
        audioEl.setAttribute(`src`, 'assets/sfx/correct.wav')
        audioEl.play();

        feedbackContainer.textContent = "Correct!";
        //feedback message disappears after 1 sec
        setTimeout(() => {
            feedbackContainer.classList.add(`hide`);
        }, 1000);
    } else {
        // subtract time for incorrect answer 
        subtractTime(10)

        //to play sound - incorrect
        let audioEl = document.createElement('audio');
        audioEl.setAttribute(`src`, 'assets/sfx/incorrect.wav')
        audioEl.play();

        feedbackContainer.textContent = "Incorrect! - 10 seconds lost";
        //feedback message disappears after 1 sec
        setTimeout(() => {
            feedbackContainer.classList.add(`hide`);
        }, 1000);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        //end quiz
        endQuiz()
    }
}

function displayQuestion() {
    const questionTitle = document.getElementById('question-title');
    const choicesContainer = document.getElementById('choices');
    const currentQuestion = questions[currentQuestionIndex];

    questionTitle.textContent = currentQuestion.question;

    choicesContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        choicesContainer.appendChild(button);
    });
}

function startQuiz() {
    // Initialise variables or reset game state
    currentQuestionIndex = 0;
    score = 0;

    // Hide start screen, show questions
    document.getElementById('start-screen').classList.add('hide');
    document.getElementById('questions').classList.remove('hide');

    startTimer();

    // Display the first question
    displayQuestion();

}



function saveScore() {
    const initials = document.getElementById('initials').value;

    // Get existing scores from localStorage or initialize an empty array
    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    // Add the current score and initials to the array
    highscores.push({ score, initials });

    // Sort the highscores array based on scores in descending order
    highscores.sort((a, b) => b.score - a.score);

    // Store the updated highscores array in localStorage
    localStorage.setItem('highscores', JSON.stringify(highscores));

    // redirect to highscores page 
    window.location.href = 'highscores.html';
}
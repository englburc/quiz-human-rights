let currentQuestionIndex = 0;
let score = 0;
let timer;

const startButton = document.getElementById('start');
const submitButton = document.getElementById('submit');
const clearButton = document.getElementById('clear');

// Event listeners
startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', saveScore);



function startQuiz() {
    // Initialize variables or reset game state
    currentQuestionIndex = 0;
    score = 0;

    // Hide start screen, show questions
    document.getElementById('start-screen').classList.add('hide');
    document.getElementById('questions').classList.remove('hide');

}


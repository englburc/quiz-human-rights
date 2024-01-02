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

    // Redirect to highscores page (assuming you have a highscores.html file)
    window.location.href = 'highscores.html';
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

    // Redirect to highscores page (assuming you have a highscores.html file)
    window.location.href = 'highscores.html';
}
// get existing scores from localStorage or initialize an empty array
const highscores = JSON.parse(localStorage.getItem('highscores')) || [];

// reference to the <ol> element
const highscoresList = document.getElementById('highscores');

// loop through the highscores and create <li> elements to display them
highscores.forEach(function (scoreData) {
    const listItem = document.createElement('li');
    listItem.textContent = `${scoreData.initials}: ${scoreData.score}`;
    highscoresList.appendChild(listItem);
});

// add event listener for the "Clear Highscores" button
document.getElementById('clear').addEventListener('click', function () {
    // clear highscores from localStorage
    localStorage.removeItem('highscores');

    // clear the <ol> element
    highscoresList.innerHTML = '';
});


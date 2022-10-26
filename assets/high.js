
// High Scores List
const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')



// clear Scores
const restBtn = document.querySelector('#reset');

function clearScores() {
    localStorage.clear("highScoresList");
    highScores = [];
    while (highScoresList.firstChild) {
        highScoresList.removeChild(highScoresList.firstChild);
        }
        highScoresList.textContent = '';
}

restBtn.addEventListener("click", clearScores);
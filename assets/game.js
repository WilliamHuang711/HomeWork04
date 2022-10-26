const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText =document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let availableQuestions = []

let questions = [
    {question: "A very useful tool used during development and debugging for printing content to the debugger.",
    choice1: "A: JavaScript",
    choice2: "B: terminal / bash",
    choice3: "C: for loops",
    choice4: "D: console.log",
    answer: 4},

    {question: "Commonly used datatypes DO NOT include:",
    choice1: "A: strings",
    choice2: "B: booleans",
    choice3: "C: alerts",
    choice4: "D: numbers",
    answer: 3},

    {question: "The condition of an if / else statement is enclosed in _____.",
    choice1: "A: parentheses",
    choice2: "B: curly brackets",
    choice3: "C: quotes",
    choice4: "D: square brackets",
    answer: 1}
]


const SCORE_POINTS = 10
const MAX_QUESTIONS = 3

startGame = () => {

    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}


getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.getElementsByClassName.width = `${(questionCounter/MAX_QUESTIONS)*100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion ['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        if(classToApply ==='correct'){
            counter = counter+5
        }


        else if(classToApply != 'correct') {
            counter = counter-5
        }


        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(()=> {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
} )

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()


// Count down Timer
var counter = 20;

setInterval( function(){
    counter--;

    if(counter >= 0){
        id = document.getElementById('count');
        id.innerHTML = counter;
    }


}, 1000)


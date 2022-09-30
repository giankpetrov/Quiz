
const startingBtn = document.getElementById('front-btn-area');
const startingImg = document.getElementById('front-img');
const startingText = document.getElementById('text-front');
const readyOne = document.getElementById('readyone');
const playBtn = document.getElementById('play-btn');
const playBtnArea = document.getElementById('play-btn-area');
const gameArea = document.getElementById('game-area');
const questionArea = document.getElementById('question-area'); // question area class
const questionElement = document.getElementById('question') // question text
const answerOptions = document.getElementById('answer-box')/*
const choiceOne = document.getElementById('choiceOne');
const choiceTwo = document.getElementById('choiceTwo');
const choiceThree = document.getElementById('choiceThree');
const choiceFour = document.getElementById('choiceFour');*/

const choices = Array.from(document.querySelectorAll('.choice-text'));// Array of choices in HTML
const scoreText = document.getElementById('score');

let currentQuestion = {}
let acceptingAnswers = true
let questionCounter = 0
let availableQuestions = []
let score= 0


const questions = [
    {
    question: 'Which was the last nation to win the FIFA World Cup as the host?',
    choice1: 'France',
    choice2: 'Brazil',
    choice3: 'Germany',
    choice4: 'Italy',
    answer: 1,
    },
    {
    question: 'Who is the highest goal scorer in the history of the FIFA World Cup?',
    choice1: 'Gerd Muller',
    choice2: 'Pele',
    choice3: 'Miroslav Klose',
    choice4: 'Ronaldo Nazario',
    answer: 3,   
    },
    {
    question: 'Which country has won the most FIFA World Cups?',
    choice1: 'Germany',
    choice2: 'Brazil',
    choice3: 'Italy',
    choice4: 'England',
    answer: 2,   
    }
]

/**
 * Hide the starting page
 */
function startInstructions(){
    startingImg.style.display = "none";
    startingText.style.display = "none";
    startingBtn.style.display = "none";
    playBtn.style.display = "inline";
    readyOne.style.display = "inline";
}
// Listen to 1st button to show instructions 
startingBtn.addEventListener('click',startInstructions)
// Listen to 2nd button to start the game
playBtnArea.addEventListener('click', startGame)


const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

/**
 * Hide the instructions and start the game
 */
function startGame(){
    readyOne.style.display = "none";
    playBtn.style.display = "none";
    gameArea.style.display = "inline";
    questionArea.style.display = "inline";
    choiceOne.style.display = "inline";
    choiceTwo.style.display = "inline";
    choiceThree.style.display = "inline";
    choiceFour.style.display = "inline";
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecenScore', score)

        return window.location.assign('/end.html')
    }
    
    questionCounter++
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    questionElement.innerText = currentQuestion.question
    //This will asing the choices text from current question
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice'+ number]
    })
    // This will delete the current question from the question array
    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}
// Add event listener to each available choice
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        selectedChoice.classList.add(classToApply)


        setTimeout(() => {
            if(classToApply === 'correct'){
                incrementScore(SCORE_POINTS)
                scoreText.classList.add('scored')
            }
            
            //Later will remove class and get new question
            setTimeout(() => {
                selectedChoice.classList.remove(classToApply)
                scoreText.classList.remove('scored')
                getNewQuestion()
            }, 1000)
        }, 1500)
    })
})

let incrementScore = num => {
    score +=num;
    scoreText.innerText = score;

}





const startingBtn = document.getElementById('front-btn-area');
const startingImg = document.getElementById('front-img');
const startingText = document.getElementById('text-front');
const readyOne = document.getElementById('readyone');
const playBtn = document.getElementById('play-btn');
const playBtnArea = document.getElementById('play-btn-area');
const gameArea = document.getElementById('game-area');
const questionArea = document.getElementById('question-area');
const questionElement = document.getElementById('question')
const answerOptions = document.getElementById('answer-box')
const choiceOne = document.getElementById('choiceOne');
const choiceTwo = document.getElementById('choiceTwo');
const choiceThree = document.getElementById('choiceThree');
const choiceFour = document.getElementById('choiceFour');


let shuffledQuestions
let currentQuestionIndex


const questions = [
    {
    question: 'Which was the last nation to win the FIFA World Cup as the host?',
    answers: [
        'France',
        'Brazil',
        'Germany',
        'Italy'
        ],
    correctAnswer: 'France'
    },
    {
    question: 'Who is the highest goal scorer in the history of the FIFA World Cup?',
    answers: [
        'Gerd Muller',
        'Pele',
        'Miroslav Klose',
        'Ronaldo Nazario'
        ],
    correctAnswer: 'Miroslav Klose'        
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
// Initial button
startingBtn.addEventListener('click',startInstructions)
// Play button
playBtnArea.addEventListener('click', startGame)

/**
 * Hide the instructions and start the game
 */
function startGame(){
    readyOne.style.display = "none";
    playBtn.style.display = "none";
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    gameArea.style.display = "inline";
    questionArea.style.display = "inline";
    choiceOne.style.display = "inline";
    choiceTwo.style.display = "inline";
    choiceThree.style.display = "inline";
    choiceFour.style.display = "inline";
    setNextQuestion();

}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    choiceOne.innerText = question.answers[0];
    choiceTwo.innerText = question.answers[1];
    choiceThree.innerText = question.answers[2];
    choiceFour.innerText = question.answers[3];
}
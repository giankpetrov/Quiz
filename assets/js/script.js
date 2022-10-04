const startingBtn = document.getElementById('front-btn-area') 
const leaderBoardBtn = document.getElementById('front-btn-leaderboard') 
const startingImg = document.getElementById('front-img') 
const startingText = document.getElementById('text-front') 
const readyOne = document.getElementById('readyone') 
const playBtn = document.getElementById('play-btn') 
const playBtnArea = document.getElementById('play-btn-area')
const gameArea = document.getElementById('game-area') 
const questionArea = document.getElementById('question-area') 
const questionElement = document.getElementById('question') 
const answerOptions = document.getElementById('answer-box') 
const choices = Array.from(document.querySelectorAll('.choice-text')) 
const extraInfo = document.getElementById('extraInfo')
const backHomeBtn = document.getElementById('back-home-btn') 
const nextQuestionBtn = document.getElementById('next-question-btn') 
const infoText = document.getElementById('info-text')
const endArea = document.getElementById('end-area')
const username = document.getElementById('username')
const saveScore = document.getElementById('saveScoreBtn') 
const finalScore = document.getElementById('finalScore') 
const playAgain = document.getElementById('playAgain') 
const scoreText = document.getElementById('score')
const highScoresArea = document.getElementById('highScoresArea') 
const highScoresList = document.getElementById('highScoresList') 
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
const MAX_HIGH_SCORES = 5 

let currentQuestion = {}        
let acceptingAnswers = true     
let questionCounter = 0         
let availableQuestions = []  
let score = 0                   

startingBtn.addEventListener('click', startInstructions)
/**
 * Bring Instruction Section
 */
function startInstructions(){
    startingImg.style.display = "none";
    startingText.style.display = "none";
    startingBtn.style.display = "none";
    leaderBoardBtn.style.display = "none";
    playBtn.style.display = "inline";
    readyOne.style.display = "inline";
}

leaderBoardBtn.addEventListener('click', showHighScoresFromStart)
/**
 * Bring High Scores Section 
 */
function showHighScoresFromStart(){
    startingImg.style.display = "none";
    startingText.style.display = "none";
    startingBtn.style.display = "none";
    leaderBoardBtn.style.display = "none";
    highScoresArea.style.display = "inline";
    highScoresList.innerHTML =
    highScores.map(score => {
    return `<li class="high-score-list">${score.name} - ${score.score}</li>`
    }).join('')
}

playBtnArea.addEventListener('click', startGame)


const SCORE_POINTS = 100
const MAX_QUESTIONS = 1         

function startGame(){
    readyOne.style.display = "none";
    playBtn.style.display = "none";
    gameArea.style.display = "inline";
    extraInfo.style.display = "inline";
    extraInfo.style.opacity = "0.0"
    backHomeBtn.style.display = "inline";
    scoreText.innerText = 0;
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}


getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return startEndGame();
    }
    // Add +1 to question counter
    questionCounter++
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    questionElement.innerText = currentQuestion.question
    //This will asign the choices text from current question
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice'+ number]
    })
    // Assign extra text to from array
    infoText.innerText = currentQuestion['extra']
    // This will delete the current question from the question array
    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

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
            setTimeout(() =>{
                extraInfo.style.opacity = "1.0"
            },1000 )
            setTimeout(() => {
                nextQuestionBtn.style.display = "inline"
                nextQuestionPlease = e => {
                    selectedChoice.classList.remove(classToApply)
                    scoreText.classList.remove('scored')
                    extraInfo.style.display = "none"
                    nextQuestionBtn.style.display = "none"
                    getNewQuestion()
                }
            }, 3000)
        }, 1500)
    })
})

function backHomePlease() {
    startingImg.style.display = "inline";
    startingText.style.display = "inline";
    startingBtn.style.display = "inline";
    leaderBoardBtn.style.display = "inline";
    gameArea.style.display = "none";
    extraInfo.style.display = "none";
    backHomeBtn.style.display = "none";
    nextQuestionBtn.style.display = "none";
}

let incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

/**
 * Bring End Game section when game finish
 */
function startEndGame() {
    gameArea.style.display = "none";
    backHomeBtn.style.display = "none";
    endArea.style.display = "inline";
    finalScore.style.display = "inline";
    finalScore.innerText = localStorage.getItem('mostRecentScore');
    username.value = '';
}
 
username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()
    
    const score = {
        score: localStorage.getItem('mostRecentScore'),
        name: username.value
    }
    
    highScores.push(score)
    
    highScores.sort((a,b) => {
        return b.score - a.score
    })
    
    highScores.splice(5)
    
    localStorage.setItem('highScores', JSON.stringify(highScores))
    
    showHighScores()
}
/**
 * Start game from End Game section
 */
function startGameAgain() {
    endArea.style.display = "none";
    finalScore.style.display = "none";

    startGame();
}
/**
 * Show High Scores from End Game section
 */
function showHighScores() {
    endArea.style.display = "none";
    finalScore.style.display = "none";
    highScoresArea.style.display = "inline";
    highScoresList.innerHTML =
    highScores.map(score => {
    return `<li class="high-score-list">${score.name} - ${score.score}</li>`
    }).join('')
}
/**
 * Start game from High Scores section
 */
function startGameFromLeaderboard() {
    highScoresArea.style.display = "none";
    playBtn.style.display = "inline";
    readyOne.style.display = "inline";
}
/**
 * Return home from High Scores section
 */
function backHome(){
    highScoresArea.style.display = "none";
    startingImg.style.display = "inline";
    startingText.style.display = "inline";
    startingBtn.style.display = "inline";
    leaderBoardBtn.style.display = "inline";
}
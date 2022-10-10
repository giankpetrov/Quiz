const startBtn = document.getElementById('start-btn');
const leaderBoardBtn = document.getElementById('leaderboard-btn');
const startingImg = document.getElementById('front-img');
const frontTitle = document.getElementById('front-title');
const instructions = document.getElementById('instructions');
const instructionsBtns = document.getElementById('instructions-btns');
const backFromInstructions = document.getElementById('backFromInstructions');
const playBtn = document.getElementById('play');
const gameArea = document.getElementById('game-area');
const currentQuestionNumber = document.getElementById('current-question');
const totalQuestionNumber = document.getElementById('total-questions');
const questionText = document.getElementById('question-text');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const extraInfo = document.getElementById('extraInfo');
const backHomeBtn = document.getElementById('back-home-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const infoText = document.getElementById('info-text');
const endArea = document.getElementById('end-area');
const username = document.getElementById('username');
const saveScore = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const scoreText = document.getElementById('score');
const startGameAgainBtn = document.getElementById('startGameAgain');
const highScoresArea = document.getElementById('highScoresArea');
const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;

let currentQuestion = {};    
let acceptingAnswers = true;
let questionCounter = 0;    
let availableQuestions = [];  
let score = 0;       

startBtn.addEventListener('click', startInstructions);
/**
 * Bring Instruction Section
 */
function startInstructions(){
    startingImg.style.display = "none";
    frontTitle.style.display = "none";
    startBtn.style.display = "none";
    leaderBoardBtn.style.display = "none";
    highScoresArea.style.display = "none";
    instructionsBtns.style.display = "inline";
    instructions.style.display = "inline";
}

leaderBoardBtn.addEventListener('click', showHighScoresFromStart);
/**
 * Bring High Scores Section 
 */
function showHighScoresFromStart(){
    startingImg.style.display = "none";
    frontTitle.style.display = "none";
    startBtn.style.display = "none";
    leaderBoardBtn.style.display = "none";
    highScoresArea.style.display = "inline";
    highScoresList.innerHTML =
    highScores.map(score => {
    return `<li class="high-score-list">${score.name} - ${score.score}</li>`;
    }).join('');
}

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

totalQuestionNumber.innerText = MAX_QUESTIONS;

playBtn.addEventListener('click', startGame);

function startGame(){
    instructions.style.display = "none";
    instructionsBtns.style.display = "none";
    gameArea.style.display = "inline";
    extraInfo.style.display = "inline";
    extraInfo.style.opacity = "0.0";
    backHomeBtn.style.display = "inline";
    scoreText.innerText = 0;
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

const getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return startEndGame();
    }
    
    questionCounter++;
    currentQuestionNumber.innerText = questionCounter;

    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    questionText.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['choice'+ number];
    });
   
    extraInfo.style.opacity = "0.0";
    infoText.innerText = currentQuestion.extra;
    
    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;

        backHomeBtn.setAttribute('disabled','');

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        selectedChoice.classList.add(classToApply);

        setTimeout(() => {
            if(classToApply === 'correct'){
                incrementScore(SCORE_POINTS);
                scoreText.classList.add('scored');
            }
            setTimeout(() => {
                extraInfo.style.opacity = "1.0";
            },1000 );
            setTimeout(() => {
                nextQuestionBtn.style.display = "inline";
                nextQuestionPlease = e => {
                    selectedChoice.classList.remove(classToApply);
                    scoreText.classList.remove('scored');
                    extraInfo.style.opacity = "0.0";
                    nextQuestionBtn.style.display = "none";
                    backHomeBtn.removeAttribute('disabled');
                    getNewQuestion();
                };
            }, 2500);
        }, 1500);
    });
});
backFromInstructions.addEventListener('click', backHomePlease);
/**
 * Bring you back home from any page
 */
function backHomePlease() {
    startingImg.style.display = "inline";
    frontTitle.style.display = "inline";
    startBtn.style.display = "inline";
    leaderBoardBtn.style.display = "inline";
    gameArea.style.display = "none";
    extraInfo.style.display = "none";
    backHomeBtn.style.display = "none";
    nextQuestionBtn.style.display = "none";
    instructions.style.display = "none";
    instructionsBtns.style.display = "none";
    highScoresArea.style.display = "none";
}

let incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
};
/**
 * Bring End Game section when game finish
 */
function startEndGame() {
    gameArea.style.display = "none";
    backHomeBtn.style.display = "none";
    endArea.style.display = "inline";
    finalScore.innerText = localStorage.getItem('mostRecentScore');
    username.value = '';
}
 
username.addEventListener('input', () => {
    username.value = username.value ? username.value.trimStart():'';
    saveScore.disabled = username.value.length < 3;
});

saveScore.addEventListener('click', saveHighScore);

function saveHighScore(e){
    e.preventDefault();
    
    const score = {
        score: localStorage.getItem('mostRecentScore'),
        name: username.value
    };
    
    highScores.push(score);
    
    highScores.sort((a,b) => {
        return b.score - a.score;
    });
    
    highScores.splice(MAX_HIGH_SCORES);
    
    localStorage.setItem('highScores', JSON.stringify(highScores));
    
    showHighScores();
}

startGameAgainBtn.addEventListener('click', startGameAgain);
/**
 * Start game from End Game section
 */
function startGameAgain() {
    endArea.style.display = "none";
    startInstructions();
}
/**
 * Show High Scores from End Game section
 */
function showHighScores() {
    endArea.style.display = "none";
    highScoresArea.style.display = "inline";
    highScoresList.innerHTML =
    highScores.map(score => {
    return `<li class="high-score-list">${score.name} - ${score.score}</li>`;
    }).join('');
}
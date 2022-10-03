
const startingBtn = document.getElementById('front-btn-area')
const leaderBoardBtn = document.getElementById('front-btn-leaderboard')
const startingImg = document.getElementById('front-img')
const startingText = document.getElementById('text-front')
const readyOne = document.getElementById('readyone')
const playBtn = document.getElementById('play-btn')
const playBtnArea = document.getElementById('play-btn-area')
const gameArea = document.getElementById('game-area')
const questionArea = document.getElementById('question-area') // question area class
const questionElement = document.getElementById('question') // question text
const answerOptions = document.getElementById('answer-box')
const choices = Array.from(document.querySelectorAll('.choice-text')) // Array of choices in HTML
const extraInfo = document.getElementById('extraInfo') // Extra Info Area
const nextQuestionBtn = document.getElementById('next-question-btn')
const infoText = document.getElementById('info-text'); 
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


const questions = [
    {
    question: 'Which was the last nation to win the FIFA World Cup as the host?',
    choice1: 'France',
    choice2: 'Brazil',
    choice3: 'Germany',
    choice4: 'Italy',
    answer: 1,
    extra: 'France won the World Cup as the host in 1998'
    },
    {
    question: 'Who is the highest goal scorer in the history of the FIFA World Cup?',
    choice1: 'Gerd Muller',
    choice2: 'Pele',
    choice3: 'Miroslav Klose',
    choice4: 'Ronaldo Nazario',
    answer: 3,
    extra: 'Miroslav Klose scored 16 goals between 2002 and 2014'   
    },
    {
    question: 'Which country has won the most FIFA World Cups?',
    choice1: 'Germany',
    choice2: 'Brazil',
    choice3: 'Italy',
    choice4: 'England',
    answer: 2,
    extra: 'Brazil have won 5 tournaments. 1958, 1962, 1970, 1994 and 2002'    
    },
    {
    question: 'Which country have never qualified for the FIFA World Cup?',
    choice1: 'North Korea',
    choice2: 'Cuba',
    choice3: 'Venezuela',
    choice4: 'Haiti',
    answer: 3,   
    extra: 'Cuba went in 1938, Haiti in 1974 and North Korea 1966 and 2010'
    },
    {
    question: 'Which country has the most World Cup losses?',
    choice1: 'Serbia',
    choice2: 'Germany',
    choice3: 'Mexico',
    choice4: 'England',
    answer: 3,   
    extra: 'Mexico has lost 27 out of 57 games in the World Cup'
    },
    {
    question: 'How old was the oldest player to ever play in the FIFA World Cup?',
    choice1: '39',
    choice2: '47',
    choice3: '42',
    choice4: '45',
    answer: 4,   
    extra: 'Essam El-Hadary from Egypt play in 2018 with 45 years and 161 days old'
    },
    {
    question: 'How old was the youngest player to ever play in the FIFA World Cup?',
    choice1: '17',
    choice2: '19',
    choice3: '18',
    choice4: '16',
    answer: 1,
    extra: 'Norman Whiteside from Northern Ireland debuted with 17 years and 40 days old in 1982'   
    },
    {
    question: 'How fast was the fastest ever FIFA World Cup goal?',
    choice1: '18.3 seconds',
    choice2: '24.2 seconds',
    choice3: '8.2 seconds',
    choice4: '10.8 seconds',
    answer: 4,   
    extra: 'From Turkey, Hakan Sukur scored against South Korea in 2002'
    },
    {
    question: 'Which country has the most World Cup wins?',
    choice1: 'Brazil',
    choice2: 'Italy',
    choice3: 'Germany',
    choice4: 'Argentina',
    answer: 1,   
    extra: 'Brazil have won 73 out of 109 games played in the World Cup'
    },
    {
    question: 'Which country have been eliminated in the first round the most times?',
    choice1: 'USA',
    choice2: 'Cameroon',
    choice3: 'Scotland',
    choice4: 'Mexico',
    answer: 3,   
    extra: 'Scotland have been eliminated 8 out of 8 times in the first round'
    },
    {
    question: 'Where was the very first World Cup held?',
    choice1: 'England',
    choice2: 'Brazil',
    choice3: 'Uruguay',
    choice4: 'Italy',
    answer: 3,   
    extra: 'In 1930, Uruguay held the first World Cup'
    },
    {
    question: 'How often is the FIFA World Cup?',
    choice1: '3 years',
    choice2: '5 years',
    choice3: '4 years',
    choice4: '2 years',
    answer: 3,   
    extra: '4 years gap allows time for the qualification fixtures'
    },
    {
    question: 'When was the first World Cup held?',
    choice1: '1930',
    choice2: '1920',
    choice3: '1950',
    choice4: '1940',
    answer: 1,   
    extra: 'Uruguay held the first World Cup in 1930'
    },
    {
    question: 'Which country hosted the World Cup in 2018?',
    choice1: 'Belgium',
    choice2: 'Russia',
    choice3: 'France',
    choice4: 'Croatia',
    answer: 2,   
    extra: 'Russia was selected to host the 2018 World Cup back in 2010'
    },
    {
    question: 'Which country will host the World Cup in 2022?',
    choice1: 'Kuwait',
    choice2: 'USA',
    choice3: 'Qatar',
    choice4: 'Mexico',
    answer: 3,   
    extra: 'Qatar was selected to host the 2022 World Cup back in 2010'
    },
    {
    question: 'How many teams participate in the tournament phase?',
    choice1: '24 teams',
    choice2: '16 teams',
    choice3: '28 teams',
    choice4: '32 teams',
    answer: 4,   
    extra: 'The tournament was expanded to 32 teams in 1998'
    },
    {
    question: 'Which is the only team that played in every tournament?',
    choice1: 'Brazil',
    choice2: 'Germany',
    choice3: 'Italy',
    choice4: 'Argentina',
    answer: 1,   
    extra: 'Brazil has participated in all 21 World Cups'
    },
    {
    question: 'Which team have the nickname "Azzurri"?',
    choice1: 'Italy',
    choice2: 'France',
    choice3: 'Uruguay',
    choice4: 'Argentina',
    answer: 1,   
    extra: 'Traditional Savoy Blue, Italy is know as the "Azzurri'
    },
    {
    question: 'Which team have the nickname "Three Lions"?',
    choice1: 'Spain',
    choice2: 'Netherlands',
    choice3: 'England',
    choice4: 'Sri Lanka',
    answer: 3,   
    extra: 'England use Three Lions in their uniform since 1872'
    },
    {
    question: 'Which team have the nickname "The Red Fury"?',
    choice1: 'Chile',
    choice2: 'Portugal',
    choice3: 'China',
    choice4: 'Spain',
    answer: 4,   
    extra: 'Spain is "The Red Fury" for the strong and physical way of playing'
    },
]

/**
 * Hide the starting page
 */
function startInstructions(){
    startingImg.style.display = "none";
    startingText.style.display = "none";
    startingBtn.style.display = "none";
    leaderBoardBtn.style.display = "none";
    playBtn.style.display = "inline";
    readyOne.style.display = "inline";
}
// Listen to 1st button to show instructions 
startingBtn.addEventListener('click', startInstructions)
//Listen to 2nd button to show leaderboard
leaderBoardBtn.addEventListener('click', showHighScoresFromStart)

function showHighScoresFromStart(){
    startingImg.style.display = "none";
    startingText.style.display = "none";
    startingBtn.style.display = "none";
    leaderBoardBtn.style.display = "none";
    highScoresArea.style.display = "inline";
}
// Listen to 3rd button to start the game
playBtnArea.addEventListener('click', startGame)


const SCORE_POINTS = 100
const MAX_QUESTIONS = 2

/**
 * Hide the instructions and start the game
 */
function startGame(){
    readyOne.style.display = "none";
    playBtn.style.display = "none";
    gameArea.style.display = "inline";
    extraInfo.style.display = "none";
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
    
    questionCounter++
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    questionElement.innerText = currentQuestion.question
    //This will asign the choices text from current question
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice'+ number]
    })
    infoText.innerText = currentQuestion['extra']
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
            setTimeout(() =>{
                extraInfo.style.display = "inline"
            },1000 )
            //Later will remove class and get new question
            setTimeout(() => {
                nextQuestionBtn.style.display = "inline"
                nextQuestionPlease = e => {
                    selectedChoice.classList.remove(classToApply)
                    scoreText.classList.remove('scored')
                    extraInfo.style.display = "none"
                    nextQuestionBtn.style.display = "none"
                    getNewQuestion()
                }
            }, 5000)
        }, 1500)
    })
})

let incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

function startEndGame() {
    gameArea.style.display = "none";
    endArea.style.display = "inline";
    finalScore.style.display = "inline";
    finalScore.innerText = localStorage.getItem('mostRecentScore');
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

function startGameAgain(){
    endArea.style.display = "none";
    finalScore.style.display = "none";
    startGame();
}

function showHighScores() {
    endArea.style.display = "none";
    finalScore.style.display = "none";
    highScoresArea.style.display = "inline";
}

highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score-list">${score.name} - ${score.score}</li>`
}).join('')

function startGameFromLeaderboard() {
    highScoresArea.style.display = "none";
    startGame();
}

function backHome(){
    highScoresArea.style.display = "none";
    startingImg.style.display = "inline";
    startingText.style.display = "inline";
    startingBtn.style.display = "inline";
    leaderBoardBtn.style.display = "inline";
}
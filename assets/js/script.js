

const startingBtn = document.getElementById('front-btn-area');
const startingImg = document.getElementById('front-img');
const startingText = document.getElementById('text-front');
const readyOne = document.getElementById('readyone');
const playBtn = document.getElementById('play-btn');
const playBtnArea = document.getElementById('play-btn-area');
const gameArea = document.getElementById('game-area');
const question = document.getElementById('question');
const choiceOne = document.getElementById('choiceOne');
const choiceTwo = document.getElementById('choiceTwo');
const choiceThree = document.getElementById('choiceThree');
const choiceFour = document.getElementById('choiceFour');

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
    gameArea.style.display = "inline";
    question.style.display = "inline";
    choiceOne.style.display = "inline";
    choiceTwo.style.display = "inline";
    choiceThree.style.display = "inline";
    choiceFour.style.display = "inline";
}


const startingBtn = document.getElementById('front-btn-area');
const startingImg = document.getElementById('front-img');
const startingText = document.getElementById('text-front');
const readyOne = document.getElementById('readyone');
const playBtn = document.getElementById('play-btn');
const playBtnArea = document.getElementById('play-btn-area');
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
}
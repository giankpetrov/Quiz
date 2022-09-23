

const startingBtn = document.getElementById('front-btn');
const startingImg = document.getElementById('front-img');
const startingText = document.getElementById('text-front');
const readyOne = document.getElementById('readyone');
const readyTwo = document.getElementById('readytwo');
const readyBtn = document.getElementById('ready-btn');
/**
 * Hide the starting page
 */
function startInstructions(){
    startingImg.style.display = "none";
    startingText.style.display = "none";
    startingBtn.style.display = "none";
    readyBtn.style.display = "inline";
    readyOne.style.display = "inline";
    readyTwo.style.display = "inline";
}
// Initial button
startingBtn.addEventListener('click',startInstructions)
// Ready button
readyBtn.addEventListener('click', startGame)

/**
 * Hide the instructions and start the game
 */
function startGame(){
    readyOne.style.display = "none";
    readyTwo.style.display = "none";
    readyBtn.style.display = "none";
}
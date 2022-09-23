

const startingBtn = document.getElementById('front-btn');
const startingImg = document.getElementById('front-img');
const startingText = document.getElementById('text-front');

/**
 * Hide the starting page
 */
function startInstructions(){
    startingImg.style.display = "none";
    startingText.style.display = "none";
    startingBtn.style.display = "none";
}

startingBtn.addEventListener('click',startInstructions)

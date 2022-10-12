
## __User Testing__

| User Goal | Requirement meet | Image(s) |
| --------- | --------------- | -------- |
| As a user, I would like to be able to see clearly how to start the game. | Yes |<kbd><img height="200" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/frontpagebuttons.PNG"></kbd>|
| As a user, I would like to check the Leaderboard. | Yes |<kbd><img height="250" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/leaderboard.PNG"></kbd>|
| As a user, I would like to be able to see instructions before start the game. | Yes |<kbd><img height="250" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/instructions.PNG"></kbd>|
| As a user, I would like to know which is the current question number. | Yes |<kbd><img height="150" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/scoreboard.PNG"></kbd>|
| As a user, I would like to know how many questions are in the Quiz. | Yes |<kbd><img height="150" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/scoreboard.PNG"></kbd>|
| As a user, I would like to see my current score when the game started. | Yes |<kbd><img height="150" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/scoreboard.PNG"></kbd>|
| As a user, I would like to see clearly the question and available choices. | Yes |<kbd><img height="250" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/questionsandchoices.PNG"></kbd>|
| As a user, I would like to see which choice I am in before final selection. | Yes |<kbd><img height="250" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/hover.PNG"></kbd>|
| As a user, I would like to be able to go to main page if the game already started. | Yes |<kbd><img height="100" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/gamebuttons.PNG"></kbd>|
| As a user, I would like to be able to go to next question after finishing the current question. | Yes |<kbd><img height="100" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/gamebuttons.PNG"></kbd>|
| As a user, I would like to see my final score after finishing the Quiz. | Yes |<kbd><img height="250" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/savescoreform.PNG"></kbd>|
| As a user, I would like to save my score with my name. | Yes |<kbd><img height="250" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/savescoreform.PNG"></kbd>|

### __Validator Testing__

- HTML **[Markup Validator](https://validator.w3.org/)** by The World Wide Web Consortium **[W3C](https://www.w3.org/)**

<p align="center">
  <kbd>
    <img height="450" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/htmlvalidator.PNG"/>
  </kbd>
</p>

- CSS Validator **[Jigsaw](https://jigsaw.w3.org/css-validator/)** by The World Wide Web Consortium **[W3C](https://www.w3.org/)**
<p align="center">
  <kbd>
    <img height="450" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/cssvalidator.PNG"/>
  </kbd>
</p>

- JavaScript Validator **[JSHint](https://jshint.com/)** to validate JavaScript Code

**script.js**
<p align="center">
  <kbd>
    <img height="800" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/scriptjs.PNG"/>
  </kbd>
</p>

JSHint identify two variables as undefined.
<p align="center">
  <kbd>
    <img height="300" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/scriptresults.PNG"/>
  </kbd>
</p>

On **script.js** line **82** variable **questions** is mark as undefined by JSHint. 
```js
73    function startGame(){
74        instructions.style.display = "none";
75        instructionsBtns.style.display = "none";
76        gameArea.style.display = "inline";
77        extraInfo.style.display = "inline";
78        extraInfo.style.opacity = "0.0";
79        backHomeBtn.style.display = "inline";
80        scoreText.innerText = 0;
80        questionCounter = 0;
81        score = 0;
82        availableQuestions = [...questions];
83        getNewQuestion();
84    }
```

This variable is defined on **questions.js** and both JavaScript files are embeded on line 104 and 105 of **index.html**.
```html
103    <!--                              Scripts                                   -->
104    <script src="assets/js/script.js"></script>
105    <script src="assets/js/questions.js"></script>
```

Also on **script.js** line **138** variable "nextQuestionPlease" is mark as undefined by JSHint.
```js
136     setTimeout(() => {
137         nextQuestionBtn.style.display = "inline";
138         nextQuestionPlease = e => {
139             selectedChoice.classList.remove(classToApply);
140             scoreText.classList.remove('scored');
141             extraInfo.style.opacity = "0.0";
142             nextQuestionBtn.style.display = "none";
143             backHomeBtn.removeAttribute('disabled');
144             getNewQuestion();
145     };
```

Actually, **nextQuestionPlease** is a function called on a *click event* on the HTML side on line **67** from **index.html**.
```html
66  <button id="back-home-btn" class="back-home-btn" onclick="backHomePlease()">&laquo; Home</button>
67  <button id="next-question-btn" class="next-question-btn" onclick="nextQuestionPlease()">Next &raquo;</button>
```

**questions.js**
<p align="center">
  <kbd>
    <img height="800" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/questionsjs.PNG"/>
  </kbd>
</p>

JSHint identify **questions** as one unused variable but as explained before is being use on **script.js**.
<p align="center">
  <kbd>
    <img height="300" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/questionsjsresults.PNG"/>
  </kbd>
</p>

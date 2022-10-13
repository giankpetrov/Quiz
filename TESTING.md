
## __User Testing__

Following the requirements from the user stories, requirements were meet and results are presented below.

| User Goal | Requirement meet | Image(s) |
| --------- | --------------- | -------- |
| <p align="center">As a user, I would like to check the Leaderboard.</p> | <p align="center">**Yes**.<br><br> - On the front page there are buttons to navigate to the Leaderboard.</p>|<kbd><img height="200" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/frontpagebuttons.PNG"></kbd><kbd><img height="250" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/leaderboard.PNG"></kbd>|
| <p align="center">As a user, I would like to be able to see instructions before start the game.</p> | <p align="center">**Yes**.<br><br> - After the front page there are instructions displayed before starting the game<p/> |<kbd><img height="250" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/instructions.PNG"></kbd>|
| <p align="center">As a user, I would like to know which is the current question number.</p> | <p align="center">**Yes**.<br><br> - On the game area there is a scoreboard displaying the requirement</p>|<kbd><img height="150" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/scoreboard.PNG"></kbd>|
|<p align="center">As a user, I would like to know how many questions are in the Quiz.</p> | <p align="center">**Yes**.<br><br> - On the game area there is a scoreboard displaying the requirement</p>|<kbd><img height="150" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/scoreboard.PNG"></kbd>|
| <p align="center">As a user, I would like to see my current score when the game started.</p> |<p align="center">**Yes**.<br><br> - On the game area there is a scoreboard displaying the requirement</p>|<kbd><img height="150" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/scoreboard.PNG"></kbd>|
| <p align="center">As a user, I would like to see clearly the question and available choices.</p> | <p align="center">**Yes**.<br><br> - On the game area questions are being displayed with the corresponding choices.</p> |<kbd><img height="250" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/questionsandchoices.PNG"></kbd>|
| <p align="center">As a user, I would like to see which choice I am in before final selection.</p> | <p align="center">**Yes**.<br><br> - A hover effect was design to show the user on which choice they are currently in.</p>|<kbd><img height="250" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/hover.PNG"></kbd>|
| <p align="center">As a user, I would like to be able to go to main page if the game already started.</p> | <p align="center">**Yes**.<br><br> - On the game area, one button allows the user to return to the main page</p>  |<kbd><img height="100" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/gamebuttons.PNG"></kbd>|
| <p align="center">As a user, I would like to be able to go to next question after finishing the current question.</p> | <p align="center">**Yes**.<br><br> - On the game area, after an answer have been chosen a button is displayed allowing the user advance to the next question.</p> |<kbd><img height="100" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/gamebuttons.PNG"></kbd>|
| <p align="center">As a user, I would like to see my final score after finishing the Quiz.</p> | <p align="center">**Yes**.<br><br> - When the Quiz ends, an end game area is displayed showing last score from the user.</p>  |<kbd><img height="250" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/savescoreform.PNG"></kbd>|
| <p align="center">As a user, I would like to save my score with my name.</p> | <p align="center">**Yes**.<br><br> - On the end game area, a form allows the user to save their current score </p> |<kbd><img height="250" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/savescoreform.PNG"></kbd>|

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

- Lighthouse

__Performance__

Performance reached 99.
<p align="center">
  <kbd>
    <img height="300" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/lighthouseperformance.PNG"/>
  </kbd>
</p>

This is because Lighthouse identify that efficient Cache policy should be on placed. This cannot be manage in this case as we don't have access to the server on **Github pages**
<p align="center">
  <kbd>
    <img height="200" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/lighthouseperformancecache.PNG"/>
  </kbd>
</p>

__Performance__
Performance reached 99.
<p align="center">
  <kbd>
    <img height="300" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/lighthouseperformance.PNG"/>
  </kbd>
</p>

This is because Lighthouse identify that efficient Cache policy should be on placed. This cannot be manage in this case as we don't have access to the server on **Github pages**
<p align="center">
  <kbd>
    <img height="300" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/lighthouseperformancecache.PNG"/>
  </kbd>
</p>


__Accessibility__

Accessibility reached 100.
<p align="center">
  <kbd>
    <img height="200" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/lighthouseaccessibility.PNG"/>
  </kbd>
</p>

__Best Practices__

The test for **Best Practices** did not reach 100 as Lighthouse identify that "Display images with incorrect aspect ratio".
<p align="center">
  <kbd>
    <img height="300" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/lighthousebestpracticesimage.PNG"/>
  </kbd>
</p>

This is because the image is set to a height as a percentage of a variable-sized container. One example is Line **343** from the **styles.css** document.
```css
340 /*Media Query responsive*/
341 @media screen and (max-width: 768px){
342     .front-img img{
343         height: 80%;
344     }
```
__SEO__

SEO results reached 100.
<p align="center">
  <kbd>
    <img height="200" src="https://github.com/giankpetrov/WorldCupQuiz/blob/main/docs/testing/lighthouseseo.PNG"/>
  </kbd>
</p

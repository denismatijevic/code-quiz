// declaring variables 
var startButton = document.getElementById("start")
var questionsEl = document.getElementById("questions")
var time = 80;
var timerEl = document.getElementById("timer")
var currentQuestionIndex = 0;
var choicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback")
var initialsEl = document.getElementById("initials")
// quiz start
function startQuiz(){
    var startScEl =  document.getElementById("start-screen");
    startButton.setAttribute("class", "hide")
    questionsEl.removeAttribute("class")
    timerId = setInterval(clockTick, 1000)
    timerEl.textContent = time
    getQuestion()
}
// starting the timer countdown
startButton.onclick=startQuiz;
function clockTick() {
    time--; 
    timerEl.textContent = time;
    if(time <= 0) {quizends();}
}
// populating the next question in the array
function getQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion)
    document.getElementById("question-title").textContent = currentQuestion.prompt;
    choicesEl.innerHTML= "";
    currentQuestion.choices.forEach(function(choice){
        var choiceNode = document.createElement('button');
        choiceNode.setAttribute("class","choice");
        choiceNode.setAttribute("value", choice);
        choiceNode.onclick = questionsClick;
        choiceNode.textContent = choice;
        choicesEl.appendChild(choiceNode);
    })
}
// setting the paramaters for correct and incorrect answers
function questionsClick() {
    if(this.value !== questions[currentQuestionIndex].answer){
        time-=15 // time=time-15
        if(time<0){
            time=0;
        }
        timerEl.textContent=time;
        feedbackEl.textContect = "Nope!";
    }else{
        feedbackEl.textContent = "Correct!";
    }
    currentQuestionIndex++;
    if(currentQuestionIndex === questions.length) {
        quizends();
    }else{
        getQuestion();
    }
}
// currentQuestionIndex var to create
function quizends(){
    clearInterval(timerId);
    var endScreenEl= document.getElementById("endscreen");
    endScreenEl.removeAttribute("class");

    var finalScoreEl = document.getElementById("finalscore")
    finalScoreEl.textContent = time
    questionsEl.setAttribute("class", "hide")
}
// saving the high score to local storage
function saveHighScore(){
    var initials = initialsEl.value;
    if(initials !== null){
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        var newScore = { score:time,
            initials:initials};
        highscores.push(newScore);
        //save to localstorage
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        }
}
document.getElementById("submit").onclick = saveHighScore;
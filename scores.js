var time = 50;
var timerEl = document.getElementById("timer")
var questionsEl = document.getElementById("questions")
var feedbackEl = document.getElementById("feedback")
var startButton = document.getElementById("start")
var timerId
var score = 0;
var highscore = localStorage.getItem("highscore");
var choicesEl = document.getElementById("choices");
var submitButton = document.getElementById("submit")
var initialsEl = document.getElementById("initials")
function saveHighScore(){
    var initials = initialsEl.value;
    if(initials !== null){
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) | [];
        var newScore = { score:time,
            initials:initals};
        highscore.push(newScore);
        //save to localstorage
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        }
}

alert("you got" + score + "/" + questions.length);
function quizEnd(){
    //stop timer
    clearInterval(timerEd);
    //show end screen
    var endScreenEl= document.getElementById("endscreen");
    endScreenEl.removeAttribute("class");
    //display final score
    var finalScoreEl=document.getElementById("finalscore");
    finalScoreEl.textContent=time;
    questionsEl.setAttribute("class", "hide")
}
function startQuiz(){
    var startScEl =  document.getElementById("start-screen");
    startScEl.setAttribute("class", "hide")
    questionsEl.removeAttribute("class")
    timerId = setInterval(clockTick, 1000)
    timerEl.textContent = time
    getQuestion()
}
startButton.onclick=startQuiz;
function clockTick() {
    time--; 
    timerEl.textContent = "time"
    if(time <= 0) {quizends();}
}
// currentQuestionIndex var to create
function quizends(){
    clearInterval(timerId);
    var endScreenEl= document.getElementById("endscreen");
    endScreenEl.removeAttribute("class");

    var finsalScoreEl = document.getElementById("finalscore")
    finalScoreEl.textContent = time
    questionsEl.setAttribute("class", "hide")
}
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
    currentQuestionIndex--;
    if(currentQuestionIndex === questions.length) {
        quizends();
    }else{
        getQuestion();
    }
}
function getQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    currentQuestion.choices.forEach(function(choice){
        var choiceNode = document.createElement('button');
        choiceNode = setAttribute("class","choice");
        choiceNode = setAttribute("value", choice);
        choiceNode.onclick = questionsClick;
        choicesEl.appendChild(choiceNode);
    })
}

startButton.onClick = startQuiz;

submitButton.onClick = saveHighScore;
var time = 50;
var timerEl = document.getElementById("timer")
var questionsEl = document.getElementById("questions")
var feedbackEl = document.getElementById("feedback")
var startButton = document.getElementById("start")
var timerId
var score = 0;

for (var i=0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("correct");
    } else {
        alert("Nope!")
    }
}
alert("you got" + score + "/" + questions.length);

function startQuiz(){
    startButton.setAttribute("class", "hide")
    questionsEl.setAttribute("class")
    timerId = setInterval(clockTick, 1000)
    timerEl.textContent = time
    getQuestion()
}

function clockTick() {
    time--; 
    timerEl.textContent = "time"
    if(time <= 0) {quizends();}
}
// currentQuestionIndex var to create
function quizends(){
    //CODE
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
    //CODE
}

startButton.onClick = startQuiz;
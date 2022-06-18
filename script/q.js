var qJason = returnQuestions()
function init(){
    if(qJason){
        numberOfQuestions = qJason.length
        for(let j=0; j<numberOfQuestions; j++){
            trys[j] = false
        }
        for(let j=0; j<numberOfQuestions; j++){
            q[j][0] = qJason[i].qst_text
            q[j][1] = qJason[i].opt.split(",")
            q[j][2] = qJason[i].answer
        }
        start() 
    }
}
var q
let i = 1
let score = 0
var numberOfQuestions
const questionIndex = document.querySelector(".question-number")
const question = document.querySelector(".question-text")
const options = document.querySelectorAll(".option")
const quiz = document.querySelector(".quiz-box")
let trys = []

/* 
document.onload = ()=>{
    if(chapter){
        var xhr = new XMLHttpRequest();
        xhr.open("POST","../backend/q.php",true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send('chapter='+chapter);
        xhr.onload = function(){
            if(this.status == 200){
                q = JSON.parse(this.responseText);
                console.log(q)
                numberOfQuestions = q.length
                for(let j=0; j<numberOfQuestions; j++){
                    trys[j] = false
                }
            }
            else{
                console.log("status not right")
            }
        }
    }
    else{
        console.log("chapter number not defined")
    }
}
console.log(q) */

init()


function start(){
    questionIndex.innerHTML = "Question "+i+" of "+numberOfQuestions;
    question.innerHTML = q[i-1][0]
    for(let j=0; j<4; j++){
        options[j].innerHTML = q[i-1][1][j]
    }
}

function next(){
    i++
    if(i<=numberOfQuestions){
        reset()
        start()
    }
    else{
        displayScore()
    }
}

function check(e){
    if(trys[i-1] == false){
        if(e.innerHTML == q[i-1][2]){
            e.style.backgroundColor = "#00c52e";
            trys[i-1] = true
            score +=1
        }
        else{
            e.style.backgroundColor = "#f0273b";
            for(let j=0; j<4; j++){
                if(options[j].innerHTML == q[i-1][2]){
                    options[j].style.backgroundColor = "#00c52e";
                    trys[i-1] = true
                }
            }
        }
    }
    else{

    }
}

function reset(){
    for(let j=0; j<4; j++){
        options[j].style.backgroundColor = "#8d3d6f";
    }
}

function displayScore(){
    quiz.innerHTML = "<h1 style='margin:40px auto;text-align: center;'>Your Score is : "+score+" / "+numberOfQuestions+"</h1>"

}



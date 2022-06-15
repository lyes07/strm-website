const q = [
    ["what is b in (34)<sub>b</sub> = (13)<sub>5</sub> ?",
    ["6", "3", "10", "5"],
    "6"],
    ["the convert of (56)<sub>10</sub> in base 2 is ?",
    ["1110001", "100011", "10111", "10110"],
    "10111"],
    
    [],
    [],
    [],
    [],
    []
]
let i = 1
let score = 0
const numberOfQuestions = q.length
const questionIndex = document.querySelector(".question-number")
const question = document.querySelector(".question-text")
const options = document.querySelectorAll(".option")
let trys = []
for(let j=0; j<numberOfQuestions; j++){
    trys[j] = false
}


start()

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

    }
}

function check(e){
    if(trys[i-1] == false){
        if(e.innerHTML == q[i-1][2]){
            e.style.backgroundColor = "green";
            trys[i-1] = true
            score +=1
        }
        else{
            e.style.backgroundColor = "red";
            for(let j=0; j<4; j++){
                if(options[j].innerHTML == q[i-1][2]){
                    options[j].style.backgroundColor = "green";
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
        options[j].style.backgroundColor = "#f51aa4";
    }
}
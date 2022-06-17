const q = [
    ["what is b in (234)<sub>b</sub> = (126)<sub>5</sub> ?",
    ["6", "7", "10", "5"],
    "7"],

    ["Convert (811)<sub>10</sub> in base 8 is ?",
    ["1450", "1454", "1453", "1455"],
    "1453"],
    
    ["Chose the correct answer a.b + <bar>a</bar>.c + b.c=",
    ["a.(b+c)", "a.b + <bar>a</bar>.c", "a.c + -a.b", "c(<bar>a</bar>+b)+a.b"],
    "a.b + <bar>a</bar>.c"],

    ["Convert (2019)<sub>10</sub> in base 2 is ?",
    ["011 1101 1111", "111 1001 0111", "111 1110 0011", "011 1010 1001"],
    "111 1110 0011"],
    
    ["What is the maximum number that can be represented on 20 bits:",
    ["1 048 575", "1 044 567", "256 256", "1 064 256"],
    "1 048 575"],

    ["What is the result of this operation: F2C + 4C3=",
    ["1 2 10 13", "2 0 D A", "A 2 D F", "1 3 D F"],
    "1 3 D F"],

    ["What is the result of this operation: 100101 + 101=",
    ["101010", "110110", "101110", "101000"],
    "101010"]
]
let i = 1
let score = 0
const numberOfQuestions = q.length
const questionIndex = document.querySelector(".question-number")
const question = document.querySelector(".question-text")
const options = document.querySelectorAll(".option")
const quiz = document.querySelector(".quiz-box")


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
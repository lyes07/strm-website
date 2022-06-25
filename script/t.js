var qt
var q = [[]]
var numberOfQuestions
let trys = []

function start(){
    for(let j=0; j<3; j++){
        options[j].innerHTML = q[j]
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

window.onload =  function source(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST","../backend/t.php",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send();
    xhr.onload = function(){
        if(this.status == 200){
            qt = JSON.parse(this.responseText);
            q=shuffle(qst)

            start()
            console.log(q)
        }
        else{
            console.log("status not right")
        }
    }        
}
let i = 1
let score = 0
const question = document.querySelectorAll(".question")
const qst = document.querySelectorAll(".qst")
const input = document.querySelector(".input")


function submit(){
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
        if(e.innerHTML == q[i-1]["answer"]){
            e.style.backgroundColor = "#00c52e";
            trys[i-1] = true
            score +=1
        }
        else{
            e.style.backgroundColor = "#f0273b";
            for(let j=0; j<4; j++){
                if(options[j].innerHTML == q[i-1]["answer"]){
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

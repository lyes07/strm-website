const navLinks = document.getElementById("navLinks");
/* const chPt1 = document.getElementById("chPt1");
const chPt2 = document.getElementById("chPt2");
const chPt3 = document.getElementById("chPt3"); */

var mobileScrean = window.matchMedia("(max-width: 700px)");
mobileScrean.addEventListener("change",e=>{
    location.reload();
    if(this.matches){
        navLinks.style.display="none";
    }
    else{
        navLinks.style.display="";
    }
})
if(mobileScrean.matches){
    navLinks.style.display="none";
    /* chPt1.style.display="none";
    chPt2.style.display="none";
    chPt3.style.display="none"; */
}

function hidemenu(){
    //navLinks.style.right = "-55%"; 
    navLinks.style.right = "-55%";
    setTimeout(()=>{navLinks.style.display="none";},1000); 
}

function showmenu(){
    //navLinks.style.right = "0";
    navLinks.style.display="";
    setTimeout(()=>{navLinks.style.right = "0";},5); 
}

const cc1 = document.getElementById("cc1");
cc1.addEventListener("click",e => {
    window.location.href = "#ch1";
});

const cc2 = document.getElementById("cc2");
cc2.addEventListener("click",e => {
    window.location.href = "#ch2";
});

const cc3 = document.getElementById("cc3");
cc3.addEventListener("click",e => {
    window.location.href = "#ch3";
});

////////// conjonction /////////

const conjonction = ["0","0","0","1"];
const model1 = document.querySelector("#question1");
const open1 = document.querySelector(".open-button1");
const close1 = document.querySelector(".close-button1");
const check1 = document.querySelector(".check-button1");

check1.addEventListener("click",()=>{
    if(q1r1.innerHTML==conjonction[0] && q1r2.innerHTML==conjonction[1] && q1r3.innerHTML==conjonction[2] && q1r4.innerHTML==conjonction[3]){
        alert("You are right!! Congratulation");
        model1.close();
    }
    else{
        alert("You are wrong!! Try aging!!");
    }
});

open1.addEventListener('click', ()=>{
    model1.showModal();
    const q1r1 = document.getElementById("q1r1");
    const q1r2 = document.getElementById("q1r2");
    const q1r3 = document.getElementById("q1r3");
    const q1r4 = document.getElementById("q1r4");

    q1r1.addEventListener("click", ()=>{
            if(q1r1.innerHTML == "0"){
                q1r1.innerHTML = "1";
            }
            else{
                q1r1.innerHTML = "0";
            }
    });
    q1r2.addEventListener("click", ()=>{
            if(q1r2.innerHTML == "0"){
                q1r2.innerHTML = "1";
            }
            else{
                q1r2.innerHTML = "0";
            }
    });
    q1r3.addEventListener("click", ()=>{
            if(q1r3.innerHTML == "0"){
                q1r3.innerHTML = "1";
            }
            else{
                q1r3.innerHTML = "0";
            }
    });
    q1r4.addEventListener("click", ()=>{
            if(q1r4.innerHTML == "0"){
                q1r4.innerHTML = "1";
            }
            else{
                q1r4.innerHTML = "0";
            }
    });
});

close1.addEventListener('click', ()=>{
    model1.close();
});


////////// Disjonction /////////

const disjonction = ["0","1","1","1"];
const model2 = document.querySelector("#question2");
const open2 = document.querySelector(".open-button2");
const close2 = document.querySelector(".close-button2");
const check2 = document.querySelector(".check-button2");

check2.addEventListener("click",()=>{
    if(q2r1.innerHTML==disjonction[0] && q2r2.innerHTML==disjonction[1] && q2r3.innerHTML==disjonction[2] && q2r4.innerHTML==disjonction[3]){
        alert("You are right!! Congratulation");
        model2.close();
    }
    else{
        alert("You are wrong!! Try aging!!");
    }
});

open2.addEventListener('click', ()=>{
    model2.showModal();
    const q2r1 = document.getElementById("q2r1");
    const q2r2 = document.getElementById("q2r2");
    const q2r3 = document.getElementById("q2r3");
    const q2r4 = document.getElementById("q2r4");

    q2r1.addEventListener("click", ()=>{
            if(q2r1.innerHTML == "0"){
                q2r1.innerHTML = "1";
            }
            else{
                q2r1.innerHTML = "0";
            }
    });
    q2r2.addEventListener("click", ()=>{
            if(q2r2.innerHTML == "0"){
                q2r2.innerHTML = "1";
            }
            else{
                q2r2.innerHTML = "0";
            }
    });
    q2r3.addEventListener("click", ()=>{
            if(q2r3.innerHTML == "0"){
                q2r3.innerHTML = "1";
            }
            else{
                q2r3.innerHTML = "0";
            }
    });
    q2r4.addEventListener("click", ()=>{
            if(q2r4.innerHTML == "0"){
                q2r4.innerHTML = "1";
            }
            else{
                q2r4.innerHTML = "0";
            }
    });
});

close2.addEventListener('click', ()=>{
    model2.close();
});


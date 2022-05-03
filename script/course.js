const navLinks = document.getElementById("navLinks");

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
const model = document.querySelector("#question1");
const open = document.querySelector(".open-button");
const close = document.querySelector(".close-button");
const chech = document.querySelector(".check-button");

chech.addEventListener("click",()=>{
    if(q1r1.innerHTML==conjonction[0] && q1r2.innerHTML==conjonction[1] && q1r3.innerHTML==conjonction[2] && q1r4.innerHTML==conjonction[3]){
        alert("You are right!! Congratulation");
        model.close();
    }
    else{
        alert("You are wrong!! Try aging!!");
    }
});

open.addEventListener('click', ()=>{
    model.showModal();
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

close.addEventListener('click', ()=>{
    model.close();
});


////////// conjonction /////////




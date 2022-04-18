const navLinks = document.getElementById("navLinks");

var mobileScrean = window.matchMedia("(max-width: 700px)");
mobileScrean.addEventListener("change",e=>{
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

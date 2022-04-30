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

const course1 = document.getElementById("c1");
course1.addEventListener("click",e => {
    window.location.href = "html/course.html#ch1";
});

const course2 = document.getElementById("c2");
course2.addEventListener("click",e => {
    window.location.href = "html/course.html#ch2";
});

const course3 = document.getElementById("c3");
course3.addEventListener("click",e => {
    window.location.href = "html/course.html#ch3";
});

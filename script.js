const navLinks = document.getElementById("navLinks");

function hidemenu(){
    navLinks.style.right = "-55%";
}

function showmenu(){
    navLinks.style.right = "0";
}


const course1 = document.getElementById("c1");
course1.addEventListener("click",toCourse1);
function toCourse1(){
    window.location.href = "course.html";
}

const course2 = document.getElementById("c2");
course2.addEventListener("click",toCourse2);
function toCourse2(){
    window.location.href = "course.html";
}

const course3 = document.getElementById("c3");
course3.addEventListener("click",toCourse3);
function toCourse3(){
    window.location.href = "course.html";
}
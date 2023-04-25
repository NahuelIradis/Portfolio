const header = document.querySelector('.navbar');

window.onscroll = function(){
    var top = window.scrollY;
    if (top >= 20){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
} 

document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}


var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png";
    }
}
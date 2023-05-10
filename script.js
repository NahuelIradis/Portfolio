document.addEventListener('scroll', () =>{
    
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('active');
    }else{
        header.classList.remove('active')
    }
});

var button = document.getElementById("button");

button.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){

        button.innerText=("LIGHT THEME");

    } else {
        button.innerText=("DARK THEME");
    }
}


function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.innerText === "MENU") {
      menu.innerText = "CLOSE";
    } else {
      menu.innerText = "MENU";
    }
  }
  
  document.getElementById("menu").addEventListener("click", toggleMenu);

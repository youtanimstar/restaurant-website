let bars = document.querySelector("#icons");
let navBar = document.querySelector(".nav-bar");
let close = document.querySelector(".close");

bars.addEventListener('click', (event)=>{
    navBar.style.left = "0";
    close.style.left = "90%";
});

close.addEventListener('click' , (event)=>{
    navBar.style.left = "-100%";
    close.style.left = "-100%";
});
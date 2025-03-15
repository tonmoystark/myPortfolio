let themeBtn = document.querySelector(".slider");
let dark = document.querySelectorAll(".dark");
let light = document.querySelectorAll(".light");
let text = document.querySelectorAll(".text");
let body = document.querySelector("body");
let dark2 = document.querySelectorAll(".dark2");
let id = document.querySelector("#idAbout")
let theme = "dark";


themeBtn.addEventListener("click", () => {
    if(theme === "dark"){
        theme = "light";
        for(let l of light){
            l.classList.add("light");
            l.classList.remove("dark");
        }
        for(let d of dark2){
            d.classList.add("bgWhite");
            d.classList.remove("dark2")
        }
        id.style.color = "black";
    }
    else{
        for(let l of light){
            theme = "dark";
            l.classList.remove("light");
            l.classList.add("dark");
        }
        for(let d of dark2){
            d.classList.remove("bgWhite");
            d.classList.add("dark2")
        }
        id.style.color = "white";   
    }
})
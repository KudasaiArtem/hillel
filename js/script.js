const burger = document.querySelector(".burger");

burger.addEventListener("click", (event)=>{
    let menu = document.querySelector("#menu");

    menu.classList.toggle("menu")
})

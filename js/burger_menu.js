const button = document.querySelector("#burger_button");
const menu = document.querySelector(".burger_menu");
const page = document.querySelector("body");

let isActive = false;

button.addEventListener("click", () => {
    menu.classList.toggle("burger_menu_active");
    
    if (isActive === false) {
        page.style.setProperty("overflow", "hidden");

        isActive = true;

    } else if (isActive) {
        page.style.setProperty("overflow", "visible");

        isActive = false;
    }
})

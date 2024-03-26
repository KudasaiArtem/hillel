const freeBtn = document.querySelector("#free");
const standardBtn = document.querySelector("#standard");
const premiumBtn = document.querySelector("#premium");

const cards = document.querySelector(".cards");

// записуємо кукі
const writeSelectedCookie = function (id) {
    document.cookie = `CardId=${id};max-age=${24 * 60 * 60};`;
}

// читаємо кукі
const readSelectedCookie = function () {
    let cookie = document.cookie.split("=")[1];
    console.log(cookie);

    if (cookie) {
        return { id: cookie }
    }
    
    return null;
}

const select = function(e) {
    if (e.id === "free" || e.id === "standard" || e.id === "premium" ) {
        let selectedCard = e.closest(".card");

        //  вибираємо всі карточки тапрбираємо усюди класс selected_card
        let allCards = document.querySelectorAll(".card");

        allCards.forEach(card => {
            card.classList.remove("selected_card")
        });

        // прибираємо класси з кнопок
        freeBtn.classList.remove("selected_btn");
        standardBtn.classList.remove("selected_btn");
        premiumBtn.classList.remove("selected_btn");

        // додаємо стилі
        e.classList.add("selected_btn");
        selectedCard.classList.add("selected_card");

        // записуємо в кукі
        writeSelectedCookie(e.id);
    }
}

// івенти для кнопок
freeBtn.addEventListener("click", () => {
    select(freeBtn)
});

standardBtn.addEventListener("click", () => {
    select(standardBtn)
});

premiumBtn.addEventListener("click", () => {
    select(premiumBtn)
});

// при завантаженні сторінки показуємо вибрану картку, якщо вона була вибрана раніше
document.addEventListener("DOMContentLoaded", () => {
    let thisCookie = readSelectedCookie();

    if (thisCookie) {
        select(document.querySelector(`#${thisCookie.id}`));
    }
})

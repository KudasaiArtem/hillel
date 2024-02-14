// конструктор
function Cat(breed = "немає", age, gender, color, name, status, picture) {
    this.breed = breed;
    this.age = age;
    this.gender = gender;
    this.color = color;
    this.name = name;
    this.picture = picture;
    if (typeof status == "string") {
        status = false; // не спить
    }
    this.status = status;

    // методи
    this.askToEat = function() {
        if (this.status === false) {
            return "хочу їсти";
        }
    }

    this.goSleep = function () {
        if (this.status === true) {
            return "спить";
        }
    }

    this.wakeUp = function () {
        if (this.status === false) {
            return "не спить";
        }
    }
}

// додаємо котів за допомогою конструктора
const cat1 = new Cat(undefined, 1, "female", "біло-сірий", "не спить", "не спить", "./cat_pic/cat1.jfif");

// console.log(cat1);

const cat2 = new Cat(undefined, 2, "male", "сірий", "мурчик", "не спить", "./cat_pic/cat2.jpg");

const cat3 = new Cat(undefined, 4, "male", "чорний", "чебурек", true, "./cat_pic/cat3.jpg");

//масив із котів
const cats = [cat1, cat2, cat3];


const btn = document.querySelectorAll("button");

// виводить данні про кота
const showCat = function(cat) {
    let picture = document.querySelector("img");

    picture.src = cat.picture;

    document.querySelector("#breed").textContent = cat.breed;

    document.querySelector("#age").textContent = cat.age;

    document.querySelector("#gender").textContent = cat.gender;

    document.querySelector("#color").textContent = cat.color;

    document.querySelector("#name").textContent = cat.name;

    document.querySelector("#status").textContent = cat.status === false ? "не спить" : "спить";
}

const moveOn = function(button) {
    const empty = document.querySelector('.empty');

    let style = document.querySelector(".button-block");
    let paddingLeft = getComputedStyle(style).paddingLeft;

    const newLeft = button.offsetLeft - parseInt(paddingLeft);
    console.log(button.offsetLeft);

    btn.forEach((notActive) => {
        notActive.classList.remove("button-active");
    })
    button.classList.add("button-active");

    empty.style.left = newLeft + "px";
}


// викликає функцію для відображання данних про кота
btn.forEach((button) => {
    button.addEventListener("click", (event) => {
        let cat_id = event.target.value;
        
        showCat(cats[cat_id]);
        moveOn(button);
    });
});

window.onload = (event) => {
    showCat(cats[0]);
}

// конструктор
function Cat(breed = "немає", age, gender, color, name, status = "не спить", picture) {
    this.breed = breed;
    this.age = age;
    this.gender = gender;
    this.color = color;
    this.name = name;
    this.picture = picture;
    this.status = status;

    // методи
    this.askToEat = function() {
        if (this.status === "не спить") {
            return this.status = "хочу їсти";
        }
    }

    this.goSleep = function () {
        return this.status = "спить";
    }

    this.wakeUp = function () {
        return this.status = "не спить";
    }
}

// додаємо котів за допомогою конструктора
const cat1 = new Cat(undefined, 1, "female", "біло-сірий", "біляш", undefined, "./cat_pic/cat1.jfif");

// console.log(cat1);

const cat2 = new Cat(undefined, 2, "male", "сірий", "мурчик", undefined, "./cat_pic/cat2.jpg");

const cat3 = new Cat(undefined, 4, "male", "чорний", "чебурек", undefined, "./cat_pic/cat3.jpg");

//масив із котів
const cats = [cat1, cat2, cat3];


const btn = document.querySelector(".button-block");

// виводить данні про кота
const showCat = function(cat) {
    let picture = document.querySelector("img");

    picture.src = cat.picture;

    // document.querySelector("#breed").innerHTML = cat.breed;
    document.querySelector("#breed").textContent = cat.breed;

    document.querySelector("#age").textContent = cat.age;

    document.querySelector("#gender").textContent = cat.gender;

    document.querySelector("#color").textContent = cat.color;

    document.querySelector("#name").textContent = cat.name;

    document.querySelector("#status").textContent = cat.status;
}


// викликає функцію для відображання данних про кота
btn.addEventListener("click", (event) => {
    let cat_id = event.target.value;

    showCat(cats[cat_id]);
})

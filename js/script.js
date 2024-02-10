
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
            return ("хочу їсти");
        }
    }

    this.goSleep = function () {
        return this.status = "спить";
    }

    this.wakeUp = function () {
        return this.status = "не спить";
    }
}

const cat1 = new Cat(undefined, 1, "male", "чорний", "чебурек", undefined, "./cat_pic/cat1.jfif");

console.log(cat1);

const cat2 = new Cat(undefined, 1, "male", "чорний", "чебурек", "./cat_pic/cat1.jfif", undefined);

const cat3 = new Cat(undefined, 1, "male", "чорний", "чебурек", "./cat_pic/cat1.jfif", undefined);

const cats = [cat1, cat2, cat3];

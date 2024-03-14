const inputColor = document.querySelector("#filterColor");
const inputAlpha = document.querySelector("#alphaChannel");

const canvas = document.querySelector("#canvas");
canvas.width = canvas.parentElement.offsetWidth - 8; // віднімаємо 8 від ширини
canvas.height = canvas.parentElement.offsetHeight -8; // та висоти через бордер

const ctx = canvas.getContext("2d");

// завантажуємо зображення
let img = new Image();
img.src = "./img/photo.jpg";

class ApplyFilter {
    static drawImage () {
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
    }

    static drawFilterArea () {
        let coordinates = {
            x:0,
            y:0,
        }

        let isMouseDown = false;

        let startCoordsX = 0;
        let startCoordsY = 0;

        canvas.addEventListener("mousedown", function(e) {
            coordinates.x = e.clientX - canvas.offsetLeft;
            coordinates.y = e.clientY - canvas.offsetTop;

            isMouseDown = true;

            console.log(coordinates.x, coordinates.y);

            startCoordsX = coordinates.x;
            startCoordsY = coordinates.y;
        })

        canvas.addEventListener("mouseup", function (e) {
            coordinates.x = e.clientX - canvas.offsetLeft;
            coordinates.y = e.clientY - canvas.offsetTop;

            isMouseDown = false;

            console.log(coordinates.x, coordinates.y);

            startCoordsY = coordinates.y;
        })

        canvas.addEventListener("mousemove", function (e) {
            if (isMouseDown === true) {
                // очистка поля та перемальовуваня
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.globalAlpha = 1;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                coordinates.x = e.clientX - canvas.offsetLeft;
                coordinates.y = e.clientY - canvas.offsetTop;

                ctx.beginPath();

                ctx.globalAlpha = inputAlpha.value;

                // вирахування прямокутника від точки, де відбувся "mousedown",
                // далі розраховується ширина і висота, спираючись на координати мишки.
                ctx.rect(startCoordsX, startCoordsY, coordinates.x - startCoordsX, coordinates.y - startCoordsY);
                
                ctx.fillStyle = inputColor.value;
                ctx.fill();
                ctx.lineWidth = 0;
                ctx.strokeStyle = "transparent";
                ctx.stroke();

                console.log(coordinates.x, coordinates.y);
            }
            
        })
    }
}

addEventListener("DOMContentLoaded", () => {
    ApplyFilter.drawImage();
    ApplyFilter.drawFilterArea();
})

const inputColor = document.querySelector("#filterColor");
const inputAlpha = document.querySelector("#alphaChannel");

const canvas = document.querySelector("#canvas");
canvas.width = canvas.parentElement.offsetWidth - 8;
canvas.height = canvas.parentElement.offsetHeight -8;

const ctx = canvas.getContext("2d");

class ApplyFilter {
    static drawImage () {
        let img = new Image();
        img.src = "./img/photo.jpg";
        img.onload = () => {
            // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            let pattern = ctx.createPattern(img, "no-repeat");
            ctx.fillStyle = pattern;
            ctx.fillRect(0, 0, canvas.width, canvas.height)
        }
    }

    static drawSelectedZone () {
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

            ApplyFilter.addFilter(coordinates.x, coordinates.y);

            startCoordsX = coordinates.x;
            startCoordsY = coordinates.y;
        })

        canvas.addEventListener("mouseup", function (e) {
            coordinates.x = e.clientX - canvas.offsetLeft;
            coordinates.y = e.clientY - canvas.offsetTop;

            isMouseDown = false;

            console.log(coordinates.x, coordinates.y);

            startCoordsY = coordinates.y;

            ApplyFilter.addFilter(coordinates.x, coordinates.y);
        })

        canvas.addEventListener("mousemove", function (e) {
            if (isMouseDown === true) {
                // очистка поля та перемальовуваня
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                coordinates.x = e.clientX - canvas.offsetLeft;
                coordinates.y = e.clientY - canvas.offsetTop;

                ctx.beginPath();
                ctx.rect(startCoordsX, startCoordsY, coordinates.x, coordinates.y);
                ctx.fillStyle = 'rgb(255, 0, 0)';
                ctx.fill();
                ctx.lineWidth = 0;
                ctx.strokeStyle = "red";
                ctx.stroke();

                console.log(coordinates.x, coordinates.y);
            }
            
        })
    }


    static addFilter(x, y) {
        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.globalAlpha = 0.5;

        // x, y, width, height
        // ctx.fillRect(x, y, canvas.width / 2, canvas.height);
    }
}

ApplyFilter.drawImage();
ApplyFilter.drawSelectedZone();

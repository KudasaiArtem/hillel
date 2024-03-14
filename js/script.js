const inputColor = document.querySelector("#filterColor");
const inputAlpha = document.querySelector("#alphaChannel");

const canvas = document.querySelector("#canvas");

const ctx = canvas.getContext("2d");

const drawImage = function() {
    let img = new Image();
    img.src = "./img/photo.jpg";
    img.onload = () => {
        // ctx.fillStyle = ctx.createPattern(img, "no-repeat");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        addFilter();
    }
}

class ApplyFilter {
    static drawImage () {
        let img = new Image();
        img.src = "./img/photo.jpg";
        img.onload = () => {
            // ctx.fillStyle = ctx.createPattern(img, "no-repeat");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            // ApplyFilter.addFilter();
        }
    }

    static drawSelectedZone () {
        let canvasCoords = canvas.getBoundingClientRect();

        let coordinates = {
            x:0,
            y:0,
        }

        let isMouseDown = false;

        canvas.addEventListener("mousedown", function(e) {
            coordinates.x = e.clientX - canvas.offsetLeft;
            coordinates.y = e.clientY - canvas.offsetTop;

            isMouseDown = true;

            console.log(coordinates.x, coordinates.y);

            ApplyFilter.addFilter(coordinates.x, coordinates.y);
        })
    }


    static addFilter (x, y) {
        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.globalAlpha = 0.5;

        // x, y, width, height
        ctx.fillRect(x, y, canvas.width / 2, canvas.height);
    }
}

ApplyFilter.drawImage();
ApplyFilter.drawSelectedZone();

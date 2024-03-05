let startTimerButton = document.querySelector("#run");
let stopTimerButton = document.querySelector("#stop");


let interval;
let timer;

// показуємо прогресс
const dynamicBar = function (minutes) {
    let progressBar = document.querySelector("#progressBar");
    let newWidth = 100;

    progressBar.style.width = `${newWidth}%`;

    let totalSeconds = minutes / 1000;
    let countdown = totalSeconds;

    interval = setInterval(() => {
        console.log("-");
        // відлік по 1 секунді
        countdown--;

        // відсоток від початкового часу
        newWidth = (countdown / totalSeconds) * 100;
        console.log(newWidth);

        // нова ширина єлементу
        progressBar.style.width = `${newWidth}%`;

        if (countdown <= 0) {
            progressBar.style.width = "0%";
            clearInterval(interval);
        }
    }, 1000);
}



// функції таймеру
const startTimer = function() {
    let minutes = document.querySelector("#minutes").value * 60000;
    dynamicBar(minutes);

    timer = setTimeout(() => {
        alert(`Час розім'ятися, Ви працюєте ${minutes / 60000} хвилин!`);
    }, minutes
    );
}

const stopTimer = function() {
    clearTimeout(timer);
    clearInterval(interval);
}

// виконання функцій по кліку
startTimerButton.addEventListener("click", () => {
    startTimer();
})

stopTimerButton.addEventListener("click", () => {
    stopTimer();
})

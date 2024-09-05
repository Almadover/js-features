let count = 10;
const timerDisplay = document.getElementById('timer');

const countdown = setInterval(() => {
    count--;
    timerDisplay.textContent = count;

    if (count === 0) {
        clearInterval(countdown);
        alert("Вы победили!");
    }
}, 1000);
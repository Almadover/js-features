let clickCount = 0;
let cookieSize = 200;
let increasing = true;

const cookie = document.getElementById('cookie');
const clickCountDisplay = document.getElementById('clicker__counter');

cookie.addEventListener('click', () => {
    clickCount++;
    clickCountDisplay.textContent = clickCount;

    if (increasing) {
        cookie.style.width = '300px';
        cookie.style.height = '300px';
        increasing = false;
    }
    else {
        cookie.style.width = '200px';
        cookie.style.height = '200px';
        increasing = true;
    }

    // cookie.style.width = cookieSize + 'px';
    // cookie.style.height = cookieSize + 'px';
});
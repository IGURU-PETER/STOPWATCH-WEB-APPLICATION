let timerInterval;
let seconds = 0;
let isRunning = false;
const lapSound = new Audio('lap-sound.mp3'); // Load the sound effect

const display = document.getElementById('display');
const lapsContainer = document.getElementById('laps');

function updateDisplay() {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    display.textContent = `${hrs}:${mins}:${secs}`;
}

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

document.getElementById('pause').addEventListener('click', () => {
    isRunning = false;
    clearInterval(timerInterval);
});

document.getElementById('reset').addEventListener('click', () => {
    isRunning = false;
    clearInterval(timerInterval);
    seconds = 0;
    updateDisplay();
    lapsContainer.innerHTML = ''; // Clear lap times
});

document.getElementById('lap').addEventListener('click', () => {
    if (isRunning) {
        lapSound.play(); // Play the sound effect
        const lapTime = document.createElement('div');
        lapTime.className = 'lap'; // Add a class for styling
        lapTime.textContent = display.textContent;
        lapsContainer.appendChild(lapTime);
    }
});

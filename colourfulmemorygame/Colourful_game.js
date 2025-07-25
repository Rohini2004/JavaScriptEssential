const colors = [
    "red", "blue", "green", "yellow",
    "purple", "orange", "pink", "cyan"
];

const gameContainer = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startbtn");

let cards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let score = 0;
let timeLeft = 60;
let countdown;
let gameover = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateCards() {
    const doubledColors = [...colors, ...colors];
    const shuffled = shuffle(doubledColors);
    gameContainer.innerHTML = "";
    cards = [];

    shuffled.forEach(color => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.color = color;
        card.addEventListener("click", flipCard);
        gameContainer.appendChild(card);
        cards.push(card);
    });
}

function flipCard() {
    if (lockBoard || this === firstCard ||gameover) return;

    this.style.backgroundColor = this.dataset.color;

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    if (firstCard.dataset.color === secondCard.dataset.color) {
        score += 10;
        scoreDisplay.textContent = `Score: ${score}`;
        resetTurn();
    } else {
        setTimeout(() => {
            firstCard.style.backgroundColor = "grey";
            secondCard.style.backgroundColor = "grey";
            resetTurn();
        }, 700);
    }
}

function resetTurn() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = "Score: 0";
    timerDisplay.textContent = "Time Left: 60";
    generateCards();

    clearInterval(countdown);
    countdown = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft}`;
        if (timeLeft === 0) {
            clearInterval(countdown);
            gameOver = true;
            alert(`Game Over! Your score is ${score}`);
        }
        


    }, 1000);
}

startBtn.addEventListener("click", startGame);

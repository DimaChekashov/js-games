const cardArray = [
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
const logsDisplay = document.querySelector(".logs");
const audio = document.querySelector("#audio");
let cardChosen = [];
let cardChosenIds = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMath() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardChosenIds[0];
    const optionTwoId = cardChosenIds[1];

    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute("src", "./images/blank.png");
        cards[optionTwoId].setAttribute("src", "./images/blank.png");
        logsDisplay.textContent = "You have clicked the same image!";
    }

    if (cardChosen[0] === cardChosen[1]) {
        logsDisplay.textContent = "You found a match!";
        cards[optionOneId].setAttribute("src", "./images/white.png");
        cards[optionTwoId].setAttribute("src", "./images/white.png");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardsWon.push(cardChosen);
    } else {
        cards[optionOneId].setAttribute("src", "./images/blank.png");
        cards[optionTwoId].setAttribute("src", "./images/blank.png");
        logsDisplay.textContent = "You wrong!";
    }
    resultDisplay.textContent = cardsWon.length;
    cardChosen = [];
    cardChosenIds = [];

    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = "Congratulations you win!";
    }
}

function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);

    this.setAttribute("src", cardArray[cardId].img);
    if (cardChosen.length === 2) {
        setTimeout(checkMath, 500);
    }
}

document.querySelector(".sound-btn").addEventListener("click", function () {
    this.classList.toggle("active");
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

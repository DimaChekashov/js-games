const computerChoiceDisplay = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#result");
const possibleChoices = document.querySelectorAll("button");
const audio = document.querySelector("#audio");

let userChoice;
let computerChoice;

possibleChoices.forEach((btn) =>
    btn.addEventListener("click", (e) => {
        userChoice = btn.getAttribute("id");
        showImg(userChoiceDisplay, userChoice);
        getComputerChoice();
        getResult();
    })
);

function showImg(box, type) {
    box.innerHTML = `<img src="./assets/${type}.png" alt="${type}">`;
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    computerChoice =
        randomNumber === 1 ? "rock" : randomNumber === 2 ? "paper" : "scissors";

    showImg(computerChoiceDisplay, computerChoice);
}

function getResult() {
    if (
        (computerChoice === "rock" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "scissors") ||
        (computerChoice === "scissors" && userChoice === "rock")
    ) {
        result = "You win!";
    } else if (computerChoice === userChoice) {
        result = "it's a draw!";
    } else {
        result = "You lose!";
    }

    resultDisplay.innerHTML = result;
}

// audio.muted = true;
// audio.play();
// audio.addEventListener("canplaythrough", function() {
//     if(confirm("Turn on music?")) {
//         audio.play();
//     }
//     document.body.addEventListener("mousemove", function () {
//         audio.play();
//     });
// });

let modal = document.createElement("div");
modal.classList.add("modal-overlay");

function showModal() {
    modal.innerHTML = `
        <div class="modal">
            <div class="modal-title">Turn on music?</div>
            <div>
                <button type="button" onclick="onMusic(true)">Yes</button>
                <button type="button" onclick="onMusic(false)">No</button>
            </div>
        </div>
    `;
    document.querySelector("body").appendChild(modal);
}

function hideModal() {
    modal.remove();
}

function onMusic(status) {
    if(status) {
        audio.play();
    }
    hideModal();
}

showModal();

const p1 = {
    score: 0,
    btn: document.querySelector("#p1Btn"),
    display: document.querySelector("#p1Display")
};

const p2 = {
    score: 0,
    btn: document.querySelector("#p2Btn"),
    display: document.querySelector("#p2Display")
}

const resetBtn = document.querySelector("#reset");
const playToSelect = document.querySelector("#playTo");
let p1Score = 0;
let p2Score = 0;

let winningScore = 5;
let isGameOver = false;

const updateScores = (player, opponent) => {
    if(!isGameOver){
        player.score++;
        player.display.innerText = player.score;

        if(player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            player.button.disabled = true;
        }
    }
}

p1Btn.addEventListener("click", () => {
    updateScores(p1, p2);
});

p2Btn.addEventListener("click", () => {
    updateScores(p2, p1);
});

const resetGame = () => {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;

    p1.display.innerText = p1Score;
    p2.display.innerText = p2Score;

    p1.display.classList.remove("has-text-success", "has-text-danger");
    p2.display.classList.remove("has-text-danger", "has-text-success")

    p1.btn.disabled = false;
    p2.btn.disabled = false;
}

resetBtn.addEventListener("click", resetGame);

playToSelect.addEventListener("change", function(){
    resetGame();
    winningScore = parseInt(this.value);
});
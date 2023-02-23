const squares = document.getElementsByClassName("square")

const gameBoard = (() => {
    let gameBoard = ["X", "O", "X", "X", "O", "O", "O", "X", "O"];
    return {
        gameBoard
    };
})();

const game = (() => {
    const startGame = () => "smth";
    return {
        startGame
    };
})();

const players = (symbol) => {
    const play = (i) => gameBoard[i] = symbol;
    return {symbol, play};
};

function renderBoard() {
    for (let i = 0; i < gameBoard.gameBoard.length; i++) {
        squares[i].innerHTML = gameBoard.gameBoard[i];
    }
}

function resetBoard() {
    for (let i = 0; i < gameBoard.gameBoard.length; i++) {
        squares[i].innerHTML = "";
    }
}

squares.forEach(element => {
    element.addEventListener("click", function () {
        this.innerHTML = "X"
    });
});

resetBoard();
renderBoard();
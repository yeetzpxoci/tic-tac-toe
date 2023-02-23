const gameBoard = (() => {
    let gameBoard = ["X", "O", "X", "X", "O", "O", "O", "X", "O"];
    return {
        gameBoard
    };
})();

const game = (() => {
    const startGame = () => a + b;
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
        document.getElementsByClassName("square")[i].innerHTML = gameBoard.gameBoard[i];
    }
}

function resetBoard() {
    for (let i = 0; i < gameBoard.gameBoard.length; i++) {
        document.getElementsByClassName("square")[i].innerHTML = "";
    }
}

renderBoard();
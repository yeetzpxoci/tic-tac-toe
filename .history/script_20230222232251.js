const squares = document.getElementsByClassName("square");

const gameBoard = (() => {
    let gameBoard = ["X", "O", "X", "X", "O", "O", "O", "X", "O"];
    return {
        gameBoard
    };
})();

const game = (() => {
    const turn = "X";
    const startGame = () => "smth";
    return {
        startGame
    };
})();

const players = (symbol) => {
    const play = (index) => gameBoard[index] = symbol;
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

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", players(game.turn).play(2));
}

renderBoard();
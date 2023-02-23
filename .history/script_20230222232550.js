const squares = document.getElementsByClassName("square");

const gameBoard = (() => {
    let gameBoard = ["X", "O", "X", "X", "O", "O", "O", "X", "O"];
    return {
        gameBoard
    };
})();

const game = (() => {
    const turn = 1;
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

function main() {
    const player1 = players("X");
    const player2 = players("O");

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", player1.play(game.turn));
        renderBoard();
    }
}


renderBoard();
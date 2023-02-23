const squares = document.getElementsByClassName("square");

const gameBoard = (() => {
    let gameBoard = ["X", "O", "X", "X", "O", "O", "O", "X", "O"];
    return {
        gameBoard
    };
})();

const game = (() => {
    let turn = "X";

    const play = (index) => gameBoard[index] = turn; if (turn === "X") {
        turn = "O";
    } else {
        turn = "X";
    };

    const startGame = () => "smth";
    return {
        turn, play, startGame
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
        squares[i].addEventListener("click", function () {
            game.play(i);
            this.innerHTML = String(game.turn);
            renderBoard();
        });
    }
}

resetBoard();
main();
const squares = document.getElementsByClassName("square");

const gameBoard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const resetBoard = () => {
        return ["", "", "", "", "", "", "", "", ""];
    }

    const winner = (x, y, z) => {
        if ((gameBoard[x] === gameBoard[y]) && ((gameBoard[y] === gameBoard[z]) && (gameBoard[z] === "X")) 
            || (gameBoard[x] === gameBoard[y]) && ((gameBoard[y] === gameBoard[z]) && (gameBoard[z] === "O"))) {
            console.log(gameBoard)
            return true;
        } else {
            return false;
        }
    }

    const checkWinner = () => {
        return winner(0, 1, 2)  // check for 3-in-a-row horizontally
            || winner(3, 4, 5)
            || winner(6, 7, 8)
            || winner(0, 3, 6)  // check for 3-in-a-row vertically
            || winner(1, 4, 7)
            || winner(2, 5, 8)
            || winner(0, 4, 8)  // check for 3-in-a-row diagonally
            || winner(6, 4, 2)
    }

    return {
        gameBoard, resetBoard, winner, checkWinner
    };
})();

const players = (symbol) => {
    const play = (index) => gameBoard.gameBoard[index] = symbol;
    return { 
        symbol, play 
    };
};

const game = (() => {
    let turn = "X";

    const playRound = (e) => {
        if (e.currentTarget.innerHTML === "") {
            players(turn).play(e.currentTarget.dataset.index);
            e.currentTarget.innerHTML = turn;
            renderBoard();
            if (turn === "X") {
                turn = "O";
            } else {
                turn = "X";
            }
            if (gameBoard.checkWinner()) {
                disableSquares();
            }
        }
    }

    const restartGame = () => {
        turn = "X";
        gameBoard.gameBoard = gameBoard.resetBoard();
        renderBoard();
        enableSquares();
    }

    return {
        turn, playRound, restartGame
    };
})();

function renderBoard() {
    for (let i = 0; i < gameBoard.gameBoard.length; i++) {
        squares[i].innerHTML = gameBoard.gameBoard[i];
    }
}

function enableSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", game.playRound);
    }
}

function disableSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener("click", game.playRound);
    }
}

enableSquares();




const squares = document.getElementsByClassName("square");

const gameBoard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const atIndex = (index) => {
        return gameBoard[index];
    } 

    const playOn = (index, symbol) => {
        gameBoard[index] = symbol;
    }

    const resetBoard = () => {
        for (let i = 0; i < gameBoard.length; i++) {
            gameBoard[i] = "";
        }
    }

    const winner = (x, y, z) => {
        if ((gameBoard[x] === gameBoard[y]) && ((gameBoard[y] === gameBoard[z]) && (gameBoard[z] === "X"))) {
            return "X";
        } else if ((gameBoard[x] === gameBoard[y]) && ((gameBoard[y] === gameBoard[z]) && (gameBoard[z] === "O"))) {
            return "O";
        } else {
            return "";
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
        gameBoard, atIndex, playOn, resetBoard, winner, checkWinner
    };
})();

const players = (symbol) => {
    const play = (index) => gameBoard.playOn(index, symbol);
    return { 
        symbol, play 
    };
};

const game = (() => {
    let turn = "X";

    const playRound = (e) => {
        if (gameBoard.atIndex(e.currentTarget.dataset.index) === "") {
            players(turn).play(e.currentTarget.dataset.index);
            displayController.renderBoard();
            if (turn === "X") {
                turn = "O";
                document.getElementById("turn").innerHTML = turn + "'s turn"
            } else {
                turn = "X";
                document.getElementById("turn").innerHTML = turn + "'s turn"
            }
            if (gameBoard.checkWinner() !== "") {
                displayController.disableSquares();
                document.getElementById("turn").innerHTML = "Congratz! " + gameBoard.checkWinner() + " has won!"
            }
        }
    }

    const restartGame = () => {
        turn = "X";
        gameBoard.resetBoard();
        displayController.renderBoard();
        displayController.enableSquares();
    }

    return {
        turn, playRound, restartGame
    };
})();

const displayController = (() => {
    const renderBoard = () => {
        for (let i = 0; i < gameBoard.gameBoard.length; i++) {
            squares[i].innerHTML = gameBoard.gameBoard[i];
        }
    }

    const enableSquares = () => {
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener("click", game.playRound);
        }
    }

    const disableSquares = () => {
        for (let i = 0; i < squares.length; i++) {
            squares[i].removeEventListener("click", game.playRound);
        }
    }
    
    return {
        renderBoard, enableSquares, disableSquares
    }
})();

displayController.enableSquares();




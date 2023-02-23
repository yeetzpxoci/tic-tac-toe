const squares = document.getElementsByClassName("square");

const gameBoard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const getAtIndex = (index) => {
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
        if ((gameBoard[x] === gameBoard[y]) && ((gameBoard[y] === gameBoard[z]) && (gameBoard[z] === "X")) 
            || (gameBoard[x] === gameBoard[y]) && ((gameBoard[y] === gameBoard[z]) && (gameBoard[z] === "O"))) {
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
        gameBoard, getAtIndex, playOn, resetBoard, winner, checkWinner
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

    const playRound = (index) => {
        if (gameBoard. === "") {
            players(turn).play(e.currentTarget.dataset.index);
            e.currentTarget.innerHTML = turn;
            displayController.renderBoard();
            if (turn === "X") {
                turn = "O";
            } else {
                turn = "X";
            }
            if (gameBoard.checkWinner()) {
                displayController.disableSquares();
                alert("winner!");
            }
        }
    }

    const restartGame = () => {
        turn = "X";
        gameBoard.resetBoard();
        console.log(gameBoard.gameBoard);
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
            squares[i].addEventListener("click", game.playRound(this.dataset.index));
        }
    }

    const disableSquares = () => {
        for (let i = 0; i < squares.length; i++) {
            squares[i].removeEventListener("click", game.playRound(this.dataset.index));
        }
    }
    
    return {
        renderBoard, enableSquares, disableSquares
    }
})();



enableSquares();




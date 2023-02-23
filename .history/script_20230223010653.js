const squares = document.getElementsByClassName("square");

const gameBoard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const winner = (x, y, z) => {
        if ((gameBoard[x] === gameBoard[y] && gameBoard[y] === gameBoard[Z] && gameBoard[Z] === "X") 
            || (gameBoard[x] === gameBoard[y] && gameBoard[y] === gameBoard[Z] && gameBoard[Z] === "O")) {
            return gameBoard[x];
        } else {
            return "";
        }
    }

    return {
        gameBoard, winner
    };
})();

const players = (symbol) => {
    const play = (index) => gameBoard.gameBoard[index] = symbol;
    return { 
        symbol, play 
    };
};

const game = (() => {
    const player1 = players("X");
    const player2 = players("O");
    let turn = "X";

    const playGame = () => {
        for (let i = 0; i < 9; i++) {
            if (gameBoard.winner !== "") {
                return;
            }
            let index = prompt("Enter an index: ")
            if (turn === "X") {
                player1.play(index);
                turn = "O";
            } else {
                player2.play(index);
                turn = "X";
            }
            resetBoard();
            renderBoard();
        }
    };

    return {
        turn, playGame
    };
})();

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

game.playGame();
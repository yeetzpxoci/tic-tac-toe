const squares = document.getElementsByClassName("square");

const gameBoard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

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
        gameBoard, winner, checkWinner
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
        resetBoard();
        renderBoard();
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

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
        players.play(game.turn);
        this.innerHTML = game.turn;
    })
}

game.playGame();

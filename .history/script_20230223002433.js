const squares = document.getElementsByClassName("square");

const gameBoard = (() => {
    let gameBoard = [];

    const winner = () => {
        const x1 = 0;
        const x2 = 1;
        const x3 = 2;
        const y2 = 3;
        const y3 = 6;

        for (let i = 0; i < 3; i++) {
            if ((gameBoard[x1 + i] === gameBoard[x2 + i] === gameBoard[x3 + i]) || (gameBoard[x1 + i] === gameBoard[y2 + i] === gameBoard[y3 + i])) {
                return gameBoard[x1 + i];
            } 
        }
        return "";
    }

    return {
        gameBoard
    };
})();

const game = (() => {
    let turn = "X";

    const playRound = (index) => gameBoard[index] = turn; if (turn === "X") {
        turn = "O";
    } else {
        turn = "X";
    };

    const playGame = () => {
        while (gameBoard.winner === "") {
            playRound(index);
        }
    };

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

}

main();
const squares = document.getElementsByClassName("square");

const gameBoard = (() => {
    let gameBoard = [];
    let x1 = 0;
    let x2 = 1;
    let x3 = 2;
    let y2 = 

    const checkFinished = () => for (let i = 0; i < 3; i++) {
        gameBoard
    };

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

    const playGame = () => while ;

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
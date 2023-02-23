const gameBoard = (() => {
    let gameBoard = ["X", "O", "X", "X", "O", "O", "O", "X", "O"];
    return {
        gameBoard
    };
})();

const players = (name) => {
    const play = () => console.log('hello!');
    return {name, play};
};

function renderBoard() {
    for (let i = 0; i < gameBoard.gameBoard.length; i++) {
        document.getElementsByClassName("square")[i].innerHTML = gameBoard.gameBoard[i];
    }
}

renderBoard();
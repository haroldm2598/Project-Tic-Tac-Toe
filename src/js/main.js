/*
    GameBoard store where what code for the game and what logic can you input
    DisplayController where code for posting the actual clientSide 
*/
const Player = (sign) => {
	const symbol = sign;
	const getSign = () => symbol;

	return { getSign };
};

const gameBoard = (() => {
	const board = ['', '', '', '', '', '', '', '', ''];
	const countBoard = () => console.log(board.length);

	return { countBoard };
})();

const displayController = (() => {
	return {};
})();

const player1 = Player('X');
const player2 = Player('O');

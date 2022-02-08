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
	const restartBtn = document.querySelector('#mainBtn');
	const mainBox = document.querySelectorAll('#mainBox');
	const testingArr = [];
	const player1 = Player('X');
	const player2 = Player('O');

	mainBox.forEach((mainBox) => {
		const playerTurn = document.createElement('p');
		playerTurn.setAttribute('class', 'main__box--para');

		mainBox.addEventListener('click', () => {
			// USE TERNARY FOR ALTERNATE PLAYER
			// if player1 is done therefore player2 will be next assign
			playerTurn.innerHTML = player1.getSign();
			testingArr.push(playerTurn);
			mainBox.appendChild(playerTurn);
			console.log(testingArr);
		});
	});

	/* 
		- Make a private function validation Changing playerTurns
	*/

	return {};
})();

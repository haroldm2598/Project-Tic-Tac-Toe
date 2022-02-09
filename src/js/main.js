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
	const board = [];
	const countBoard = () => console.log(board.length);

	return { countBoard };
})();

const displayController = (() => {
	const restartBtn = document.querySelector('#mainBtn');
	const mainBox = document.querySelectorAll('#mainBox');
	const player1 = Player('X');
	const player2 = Player('O');

	mainBox.forEach((mainBox) => {
		const playerTurn = document.createElement('p');
		playerTurn.setAttribute('class', 'main__box--para');

		mainBox.addEventListener('click', () => {
			playerTurn.innerHTML = changingPlayer();
			mainBox.appendChild(playerTurn);
		});
	});

	// Make a private function validation Changing playerTurns
	const changingPlayer = () => {
		const turn = false;
		/*
		- FizzBuzz Logic with loop and inorder to alternate
		- Must be changing if player1 already play therefore player2 turns
		*/
		return turn ? player1.getSign() : player2.getSign();
	};

	return {};
})();

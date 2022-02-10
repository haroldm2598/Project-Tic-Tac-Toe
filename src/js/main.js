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
	const board = [
		['1', '', ''],
		['', '5', ''],
		['', '', '9']
	];

	const setBoard = (index, sign) => {
		if (index > board.length) return;
		board[index] = sign;
	};

	const getBoard = (index) => {
		if (index > board.length) return;
		return board[index];
	};

	// WORKING RESET
	const resetBoard = () => {
		for (let i = 0; i < board.length; i++) {
			board[i] = '';
		}
	};

	const testingBoard = () => {
		for (let i = 0; i < board.length; i++) {
			console.log(board[i]);
		}
	};

	return { setBoard, getBoard, resetBoard, testingBoard };
})();

const displayController = (() => {
	const mainBox = document.querySelectorAll('#mainBox');
	const restartBtn = document.querySelector('#mainBtn');

	mainBox.forEach((mainBox) => {
		const playerTurn = document.createElement('p');
		playerTurn.setAttribute('class', 'main__box--para');

		mainBox.addEventListener('click', () => {
			playerTurn.innerHTML = gameController.changingPlayer();
			mainBox.appendChild(playerTurn);
		});
	});

	restartBtn.addEventListener('click', () => {
		gameBoard.resetBoard();
	});

	return {};
})();

const gameController = (() => {
	const player1 = Player('X');
	const player2 = Player('O');

	const changingPlayer = () => {
		const round = false;
		/*
		- FizzBuzz Logic with loop and inorder to alternate
		- Must be changing if player1 already play therefore player2 turns
		*/
		return round % 2 === 0 ? player1.getSign() : player2.getSign();
	};

	return { changingPlayer };
})();

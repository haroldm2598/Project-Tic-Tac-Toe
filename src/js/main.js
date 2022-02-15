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

	return { setBoard, getBoard, resetBoard };
})();

const displayController = (() => {
	const mainBox = document.querySelectorAll('#mainBox');
	const restartBtn = document.querySelector('#mainBtn');
	let isTrigger;

	const testing = () => {
		return isTrigger ? { once: true } : { once: false };
	};

	mainBox.forEach((mainBox) => {
		const playerTurn = document.createElement('p');
		playerTurn.setAttribute('class', 'main__box--para');
		playerTurn.setAttribute('id', 'mainBoxPara');

		mainBox.addEventListener(
			'click',
			() => {
				playerTurn.innerHTML = gameController.changingPlayer();
				mainBox.appendChild(playerTurn);
			},
			testing()
		);
	});

	restartBtn.addEventListener('click', () => {
		mainBox.forEach((mainBox) => {
			const paraId = document.querySelector('#mainBoxPara');
			if (document.body.contains(paraId)) {
				paraId.remove();
			}
			isTrigger = !isTrigger;
		});

		gameBoard.resetBoard();
		gameController.resetBoard();
	});

	return {};
})();

const gameController = (() => {
	let round;
	const player1 = Player('X');
	const player2 = Player('O');
	const playerTurn = document.querySelector('#playerTurn');

	const changingPlayerOne = () => {
		playerTurn.removeAttribute('class', 'playerInfo__turn');
		playerTurn.textContent = 'Player 1 Turn';

		return [player1.getSign(), playerTurn];
	};

	const changingPlayerTwo = () => {
		playerTurn.setAttribute('class', 'playerInfo__turn');
		playerTurn.textContent = 'Player 2 Turn';

		return [player2.getSign(), playerTurn];
	};

	const changingPlayer = () => {
		round = !round;
		return round ? changingPlayerOne()[0] : changingPlayerTwo()[0];
	};

	const resetBoard = () => {
		playerTurn.removeAttribute('class', 'playerInfo__turn');
		playerTurn.textContent = '';
	};

	return { changingPlayer, resetBoard };
})();

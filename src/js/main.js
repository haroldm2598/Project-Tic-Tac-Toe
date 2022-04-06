const Player = (sign) => {
	const symbol = sign;
	const getSign = () => symbol;

	return { getSign };
};

const gameBoard = (() => {
	const board = ['', '', '', '', '', '', '', '', ''];
	const playerOne = [];
	const playerTwo = [];

	const setBoard = (sign, index) => {
		for (let i = 0; i < sign.length; i++) {
			board.splice(index, 1, sign[i]);
		}
		console.log(board);
	};

	const getBoard = () => {
		board.forEach((element, index) => {
			if (element === 'X') {
				playerOne.push(index);
			}

			if (element.includes('O')) {
				playerTwo.push(index);
			}
		});

		let p1 = [...new Set(playerOne)];
		let p2 = [...new Set(playerTwo)];

		return { p1, p2 };
	};

	const resetBoard = () => {
		const forReset = (params) => {
			params.splice(0, params.length);
		};

		for (let i = 0; i < board.length; i++) {
			board[i] = '';
		}

		forReset(playerOne);
		forReset(playerTwo);
	};

	return { setBoard, getBoard, resetBoard };
})();

const displayController = (() => {
	const restartBtn = document.querySelector('#mainBtn');
	const mainBox = document.querySelectorAll('#mainBox');

	const globalEventListener = (parent = document, type, callBack, options) => {
		parent.addEventListener(type, callBack, options);
	};

	const testingFunction = () => {
		mainBox.forEach((element, index) => {
			const playerTurn = document.createElement('p');
			playerTurn.setAttribute('class', 'main__box--para');
			playerTurn.setAttribute('id', 'mainBoxPara');

			const eventListener = () => {
				let next = gameController.changingPlayers();
				playerTurn.innerHTML = next;
				element.appendChild(playerTurn);
				gameBoard.setBoard(next, index);
				gameController.winningCondition();
			};

			const eventOptions = (round = true) => {
				return { once: round };
			};

			globalEventListener(element, 'click', eventListener, eventOptions());
		});
	};

	const testingRestart = () => {
		const eventListenerRestart = () => {
			gameBoard.resetBoard();
			gameController.resetBoard();

			mainBox.forEach(() => {
				const paraId = document.querySelector('#mainBoxPara');
				if (document.body.contains(paraId)) {
					paraId.remove();
				}
			});

			testingFunction();
		};

		globalEventListener(restartBtn, 'click', eventListenerRestart);
	};

	testingFunction();
	testingRestart();
})();

const gameController = (() => {
	let round;
	const player1 = Player('X');
	const player2 = Player('O');
	const playerTurn = document.querySelector('#playerTurn');
	const winnerResult = document.querySelector('#playerResult');

	const changingPlayers = () => {
		const PlayerOne = () => {
			playerTurn.setAttribute('class', 'playerInfo__turn');
			playerTurn.textContent = 'Player 2 Turn';

			return [player1.getSign(), playerTurn];
		};

		const PlayerTwo = () => {
			playerTurn.removeAttribute('class', 'playerInfo__turn');
			playerTurn.textContent = 'Player 1 Turn';

			return [player2.getSign(), playerTurn];
		};

		return (() => {
			round = !round;
			return round ? PlayerOne()[0] : PlayerTwo()[0];
		})();
	};

	const winningCondition = () => {
		const playerOne = gameBoard.getBoard()['p1'];
		const playerTwo = gameBoard.getBoard()['p2'];

		const boardNumResult = (params) => {
			const boardNumbers = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6]
			];

			let result = boardNumbers.filter(
				(combination) =>
					combination.filter((x) => params.includes(x)).length === 3
			);

			return result.length;
		};

		const conditionFunc = (() => {
			if (boardNumResult(playerOne) === 1) {
				winnerResult.innerHTML = `Player 1 Won`;
			} else if (boardNumResult(playerTwo) === 1) {
				winnerResult.innerHTML = `Player 2 Won`;
			} else if (playerOne.length === 5 && playerTwo.length === 4) {
				winnerResult.innerHTML = `Draw`;
			} else {
				winnerResult.innerHTML = null;
			}
		})();
	};

	const resetBoard = () => {
		let result = changingPlayers();

		if (result === 'X') {
			changingPlayers();
		}

		playerTurn.removeAttribute('class', 'playerInfo__turn');
		playerTurn.textContent = '';
		winnerResult.textContent = '';
	};

	return { changingPlayers, resetBoard, winningCondition };
})();

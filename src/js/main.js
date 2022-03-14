const Player = (sign) => {
	const symbol = sign;
	const getSign = () => symbol;

	return { getSign };
};

const gameBoard = (() => {
	const board = ['', '', '', '', '', '', '', '', ''];

	const setBoard = (sign, index) => {
		for (let i = 0; i < sign.length; i++) {
			board.splice(index, 1, sign[i]);
		}
		console.log(board);
	};

	const getBoard = (resultArr) => {
		let result;

		board.forEach((element, index) => {
			if (element === 'X' || element === 'O') {
				resultArr.push(index);
			}
		});

		return console.log(resultArr);
		// result = console.log([...new Set(resultArr)]);

		// return result;
	};

	const resetBoard = () => {
		for (let i = 0; i < board.length; i++) {
			board[i] = '';
		}

		// boardResult.length = [];
	};

	return { setBoard, getBoard, resetBoard };
})();

const displayController = (() => {
	const restartBtn = document.querySelector('#mainBtn');
	let mainBox = document.querySelectorAll('#mainBox');
	// if gameBoard logic is working try this code
	// let isTrigger;

	mainBox.forEach((element, index) => {
		const playerTurn = document.createElement('p');
		playerTurn.setAttribute('class', 'main__box--para');
		playerTurn.setAttribute('id', 'mainBoxPara');

		element.addEventListener(
			'click',
			() => {
				let next = gameController.changingPlayers();
				// let stringConvert = JSON.stringify(index);
				playerTurn.innerHTML = next;
				element.appendChild(playerTurn);
				gameBoard.setBoard(next, index);
				gameController.winningCondition();
			}
			// ,{ once: false }
			// if gameBoard logic is working try this code
			// testing(isTrigger)
		);
	});

	restartBtn.addEventListener('click', () => {
		mainBox.forEach(() => {
			const paraId = document.querySelector('#mainBoxPara');
			if (document.body.contains(paraId)) {
				paraId.remove();
			}
		});

		gameBoard.resetBoard();
		gameController.resetBoard();
		// if gameBoard logic is working try this code
		// console.log(mainBox.childNodes.length);
	});

	// if gameBoard logic is working try this code
	// function testing(isTrigger) {
	// 	/*
	// 		mainBox.childNodes.length if empty therefore false and true afterwards
	// 		mainBox should use foreach methods in order to work with it
	// 		problem if using foreach having scope and closure problem therefore
	// 		variable isn't getting the value of it from conditional statement
	// 		childNodes only determine if there Attribute , Comments, Text and Elements
	// 	*/
	// 	return isTrigger ? { once: true } : { once: false };
	// }
	// function testing2() {
	// 	return mainBox.childNodes.length > 0 ? true : false;
	// }

	return {};
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
		// try check project ideas(object literal) in CODESANDBOX.IO
		const playerOne = [];
		const playerTwo = [];
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

		const boardNumResult = () => {
			boardNumbers.filter((e) => console.log(e.some((e) => console.log(e))));
		};

		/* const playerResult = (param) => {
			let p1 = () => {
				winnerResult.innerHTML = 'Player 1 won the game';
			};
			let p2 = () => {
				winnerResult.innerHTML = 'Player 2 won the game';
			};

			return param === 'Player 2' ? p2 : p1;
		}; */

		// && gameBoard.getBoard(playerOne) === boardNumResult()

		if (player1.getSign() === 'X') {
			winnerResult.innerHTML = 'Player 1 won the game';
			gameBoard.getBoard(playerOne);
		} else if (player2.getSign() === 'O') {
			winnerResult.innerHTML = 'Player 2 won the game';
			gameBoard.getBoard(playerTwo);
		} else {
			winnerResult.result = 'Draw';
		}
	};

	const resetBoard = () => {
		playerTurn.removeAttribute('class', 'playerInfo__turn');
		playerTurn.textContent = '';
	};

	return { changingPlayers, resetBoard, winningCondition };
})();

// Testing TypeOf
// const getType = (src) =>
// 	({}.toString
// 		.call(src)
// 		.match(/\s([a-zA-Z]+)/)[1]
// 		.toLowerCase());

// const typeOfTest = (() => {
// 	console.log(getType(gameController.winningCondition()));
// })();

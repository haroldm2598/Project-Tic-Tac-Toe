// Testing TypeOf
// const getType = (src) =>
// 	({}.toString
// 		.call(src)
// 		.match(/\s([a-zA-Z]+)/)[1]
// 		.toLowerCase());

// const typeOfTest = (() => {
// 	console.log(getType(gameController.winningCondition()));
// })();

// ------------------------ BACKUP FOR PLAYER AREA ---------------------------------
const Player = (sign) => {
	const symbol = sign;
	const getSign = () => symbol;

	return { getSign };
};

// ------------------------ BACKUP FOR GAMEBOARD AREA ---------------------------------

const gameBoard = (() => {
	const board = ['', '', '', '', '', '', '', '', ''];
	const playerOne = [];
	// const playerTwo = [];

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

			// if (element.includes('O')) {
			// 	playerTwo.push(index);
			// }
		});

		let p1 = console.log([...new Set(playerOne)]);
		// let p2 = console.log([...new Set(playerTwo)]);

		return { p1 };
	};

	// BACKUPP
	// const getBoard = (resultArr) => {
	// 	let result;

	// 	board.forEach((element, index) => {
	// 		if (element === 'X' || element === 'O') {
	// 			resultArr.push(index);
	// 		}
	// 	});

	// 	// return console.log(resultArr);
	// 	result = console.log([...new Set(resultArr)]);

	// 	return result;
	// };

	const resetBoard = () => {
		for (let i = 0; i < board.length; i++) {
			board[i] = '';
		}

		// boardResult.length = [];
	};

	return { setBoard, getBoard, resetBoard };
})();

// ------------------------ BACKUP FOR DISPLAYCONTROLLER AREA ---------------------------------

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
				// gameController
				// 	.winningCondition()
				// 	.boardNumResult(gameBoard.getBoard()['p1']);
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

// ------------------------ BACKUP FOR GAMECONTROLLER AREA ---------------------------------

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
		const boardNumResult = ((params) => {
			const testingParams = [0, 1, 2];
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
			// boardNumbers.filter((e) => console.log(e.some((e) => e === [0, 1, 2])));
			// return boardNumbers.some((element) => {
			// 	return console.log([0, 1, 2] === element);
			// });

			// console.log(JSON.stringify(boardNumbers));
			// return boardNumbers.map((e) =>
			// 	console.log(JSON.stringify(e) === JSON.stringify([2, 4, 6]))
			// );

			// return boardNumbers.filter((element) =>
			// 	element.includes(element).some(() => {
			// 		return;
			// 	})
			// );

			let testingArr = boardNumbers.filter(
				(v) =>
					v.filter((c) => {
						return testingParams.indexOf(c) > -1;
					}).length == 2
			);

			console.log(JSON.stringify(testingArr));
		})();

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

		/*
			if (player1.getSign() === 'X') {
				winnerResult.innerHTML = 'Player 1 won the game';
			} else if (player2.getSign() === 'O') {
				winnerResult.innerHTML = 'Player 2 won the game';
			} else {
				winnerResult.result = 'Draw';
			}
		*/
		// return { boardNumResult };
	};

	const resetBoard = () => {
		playerTurn.removeAttribute('class', 'playerInfo__turn');
		playerTurn.textContent = '';
	};

	return { changingPlayers, resetBoard, winningCondition };
})();

// ------------------------ BACKUP FOR DSIPLAYCONTROLLER AREA WORKING ---------------------------------

// restartBtn.addEventListener('click', () => {
// 	gameBoard.resetBoard();
// 	gameController.resetBoard();
// 	eventOptions(false);

// 	mainBox.forEach(() => {
// 		const paraId = document.querySelector('#mainBoxPara');
// 		if (document.body.contains(paraId)) {
// 			paraId.remove();
// 		}
// 	});
// });

// mainBox.forEach((element, index) => {
// 	const playerTurn = document.createElement('p');
// 	playerTurn.setAttribute('class', 'main__box--para');
// 	playerTurn.setAttribute('id', 'mainBoxPara');

// 	const eventListener = () => {
// 		let next = gameController.changingPlayers();
// 		playerTurn.innerHTML = next;
// 		element.appendChild(playerTurn);
// 		gameBoard.setBoard(next, index);
// 		gameController.winningCondition();
// 	};

// 	element.addEventListener('click', eventListener, eventOptions());
// });

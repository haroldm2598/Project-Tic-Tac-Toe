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
	// const board = [];

	const setBoard = (sign) => {
		for (let i = 0; i < sign.length; i++) {
			// if (board.length <= 8) {
			// 	board.push(sign[i]);
			// }

			// if (board.length <= 8) {
			// 	for (const gameBoard of board) {
			// 		gameBoard = gameBoard.replace(/''/g, sign[i]);
			// 	}
			// }

			for (let gameBoard in board) {
				// let testing = gameBoard.push(sign[i]);
				// gameBoard = gameBoard.replace(/'/g, testing);
				console.log(gameBoard);
			}
		}
		// console.log(board);
	};

	// const getBoard = (index) => {
	// 	if (index > board.length) return;
	// 	return board[index];
	// };

	// WORKING RESET
	const resetBoard = () => {
		for (let i = 0; i < board.length; i++) {
			board[i] = '';
		}
	};

	return { setBoard, resetBoard };
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
				let stringConvert = JSON.stringify(index);
				playerTurn.innerHTML = next;
				element.appendChild(playerTurn);
				gameBoard.setBoard(stringConvert);
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

	const changingPlayers = () => {
		const PlayerOne = () => {
			playerTurn.removeAttribute('class', 'playerInfo__turn');
			playerTurn.textContent = 'Player 1 Turn';

			return [player1.getSign(), playerTurn];
		};

		const PlayerTwo = () => {
			playerTurn.setAttribute('class', 'playerInfo__turn');
			playerTurn.textContent = 'Player 2 Turn';

			return [player2.getSign(), playerTurn];
		};

		return (() => {
			round = !round;
			return round ? PlayerOne()[0] : PlayerTwo()[0];
		})();
	};

	const winningCondition = () => {
		// try check project ideas(object literal) in CODESANDBOX.IO
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
	};

	const resetBoard = () => {
		playerTurn.removeAttribute('class', 'playerInfo__turn');
		playerTurn.textContent = '';
	};

	return { changingPlayers, resetBoard };
})();

// Testing TypeOf
// const getType = (src) =>
// ({}.toString
// 	.call(src)
// 	.match(/\s([a-zA-Z]+)/)[1]
// 	.toLowerCase());

// const typeOfTest = (() => {
// console.log(getType(mainBox));
// })();

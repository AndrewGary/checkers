import { useState, useEffect } from "react";
import { gameboard as gb, Square } from "@/utils/data";

//handle Selection

// When a game piece is clicked
//     Determine if the player that clicked is the activePlayer
//     If they are not the active player do nothing
//     If they are the active player check to see if the piece they clicked was their own piece
//     If no return
//     If yes check to see if the piece can be moved
//     If no return
//     If yes setSelectedSquare to the clicked square

const noSelectedSquare = {
	square: {
		id: -1,
		x: -1,
		y: -1,
		occupiedBy: {
			name: "",
			kinged: false,
		},
		backgroundColor: "",
		selected: false,
		movable: false,
		row: -1,
		col: -1,
	},
	//Will contain an array of square id's that the selected piece can move (No claiming enemys square).
	moveOptions: [],
	//Will contain an array of square id's that the selected piece can move (Claiming eneny square)
	claimOptions: [],
};

export default function Home() {
	const [gameboard, setGameBoard] = useState(gb);
	const [currentPlayer, setCurrentPlayer] = useState("player2");
	const switchPlayer = () => {
		if (currentPlayer === "player2") {
			setCurrentPlayer("player1");
		} else {
			setCurrentPlayer("player2");
		}
	};
	const [selectedSquare, setSelectedSquare] = useState<any>(noSelectedSquare);
	const [gameMessage, setGameMessage] = useState("");

	const waitForNewMoveOptions = (
		x: number,
		y: number,
		pieceWasClaimed: boolean
	) => {
		return new Promise((resolve) => {
			const returnObject = setNewMoveOptions(x, y, pieceWasClaimed);
			resolve(returnObject);
		});
	};
	const setNewMoveOptions = (
		x: number,
		y: number,
		pieceWasClaimed: boolean
	) => {
		const tempMoveOptions = [];
		const tempClaimOptions = [];
		if (currentPlayer === "player1") {
			if (!pieceWasClaimed) {
				if (
					gameboard[x + 1][y - 1] &&
					!gameboard[x + 1][y - 1].occupiedBy.name
				) {
					console.log("jeahhhh");
					tempMoveOptions.push(gameboard[x + 1][y - 1].id);
				}

				if (
					gameboard[x + 1][y + 1] &&
					!gameboard[x + 1][y + 1].occupiedBy.name
				) {
					console.log("jeahhhh");
					tempMoveOptions.push(gameboard[x + 1][y + 1].id);
				}
			}

			if (x < 6) {
				if (
					gameboard[x + 2][y - 2] &&
					!gameboard[x + 2][y - 2].occupiedBy.name &&
					gameboard[x + 1][y - 1].occupiedBy.name === "player2"
				) {
					tempClaimOptions.push(gameboard[x + 2][y - 2].id);
				}

				if (
					gameboard[x + 2][y + 2] &&
					!gameboard[x + 2][y + 2].occupiedBy.name &&
					gameboard[x + 1][y + 1].occupiedBy.name === "player2"
				) {
					tempClaimOptions.push(gameboard[x + 2][y + 2].id);
				}
			}
		} else {
			if (!pieceWasClaimed) {
				if (
					gameboard[x - 1][y - 1] &&
					!gameboard[x - 1][y - 1].occupiedBy.name
				) {
					console.log("jeahhhh");
					tempMoveOptions.push(gameboard[x - 1][y - 1].id);
				}

				if (
					gameboard[x - 1][y + 1] &&
					!gameboard[x - 1][y + 1].occupiedBy.name
				) {
					console.log("jeahhhh");
					tempMoveOptions.push(gameboard[x - 1][y + 1].id);
				}
			}

			if (x > 1) {
				if (
					gameboard[x - 2][y - 2] &&
					!gameboard[x - 2][y - 2].occupiedBy.name &&
					gameboard[x - 1][y - 1].occupiedBy.name === "player1"
				) {
					tempClaimOptions.push(gameboard[x - 2][y - 2].id);
				}

				if (
					gameboard[x - 2][y + 2] &&
					!gameboard[x - 2][y + 2].occupiedBy.name &&
					gameboard[x - 1][y + 1].occupiedBy.name === "player1"
				) {
					tempClaimOptions.push(gameboard[x - 2][y + 2].id);
				}
			}
		}

		const returnObject = {
			moveOptions: [...tempMoveOptions],
			claimOptions: [...tempClaimOptions],
		};

		return returnObject;
	};

	const handlePlayer1Selection = (
		squareClicked: Square,
		x: number,
		y: number
	) => {
		//Checks if selectedSqure is not empty
		if (selectedSquare.square.occupiedBy.name) {
			if (
				//checks if selectedSquare can simply be moved to new spot
				selectedSquare.moveOptions.includes(squareClicked.id)
			) {
				movePlayer(squareClicked, undefined);
				setSelectedSquare(noSelectedSquare);
				switchPlayer();
			}

			if (selectedSquare.claimOptions.includes(squareClicked.id)) {
				console.log("squareClicked.col: ", squareClicked.col);
				console.log("selectedSquare.col: ", selectedSquare.col);

				//Can Either go left or right so this if else is determining which way it goes
				if (squareClicked.col < selectedSquare.square.col) {
					Promise.resolve().then(async () => {
						movePlayer(
							squareClicked,
							gameboard[selectedSquare.square.row + 1][
								selectedSquare.square.col - 1
							].id
						);
						setSelectedSquare({
							square: {
								...squareClicked,
							},
							//Will contain an array of square id's that the selected piece can move (No claiming enemys square).
							moveOptions: [],
							//Will contain an array of square id's that the selected piece can move (Claiming eneny square)
							claimOptions: [],
						});
						const { moveOptions, claimOptions } = await waitForNewMoveOptions(
							squareClicked.row,
							squareClicked.col,
							true
						);

						console.log("moveOptions: ", moveOptions);
						console.log("claimOptions: ", claimOptions);
						if (moveOptions.length || claimOptions.length) {
							setSelectedSquare({
								...selectedSquare,
								moveOptions: [...moveOptions],
								claimOptions: [...claimOptions],
							});
						} else {
							setSelectedSquare(noSelectedSquare);
							switchPlayer();
						}
					});
				} else {
					Promise.resolve().then(async () => {
						movePlayer(
							squareClicked,
							gameboard[selectedSquare.square.row + 1][
								selectedSquare.square.col + 1
							].id
						);
						setSelectedSquare({
							square: {
								...squareClicked,
							},
							//Will contain an array of square id's that the selected piece can move (No claiming enemys square).
							moveOptions: [],
							//Will contain an array of square id's that the selected piece can move (Claiming eneny square)
							claimOptions: [],
						});
						const { moveOptions, claimOptions } = await waitForNewMoveOptions(
							squareClicked.row,
							squareClicked.col,
							true
						);

						console.log("moveOptions: ", moveOptions);
						console.log("claimOptions: ", claimOptions);
						if (moveOptions.length || claimOptions.length) {
							setSelectedSquare({
								...selectedSquare,
								moveOptions: [...moveOptions],
								claimOptions: [...claimOptions],
							});
						} else {
							setSelectedSquare(noSelectedSquare);
							switchPlayer();
						}
					});
				}
			}
		}

		if (selectedSquare.square)
			if (squareClicked.occupiedBy.name !== currentPlayer) {
				return;
			}

		// const tempMoveOptions = [];
		// const tempClaimOptions = [];

		const { moveOptions, claimOptions } = setNewMoveOptions(
			squareClicked.row,
			squareClicked.col,
			false
		);

		// console.log("player 1 possibleMoves: ", possibleMoves);
		if (moveOptions.length || claimOptions.length) {
			setSelectedSquare({
				square: { ...squareClicked },
				moveOptions: [...moveOptions],
				claimOptions: [...claimOptions],
			});
			return;
		}

		console.log("returning");
		return;
	};

	const handlePlayer2Selection = async (
		squareClicked: Square,
		x: number,
		y: number
	) => {
		console.log("squareClicked: ", squareClicked);
		//Checks if selectedSqure is not empty
		if (selectedSquare.square.occupiedBy.name) {
			if (
				//checks if selectedSquare can simply be moved to new spot
				selectedSquare.moveOptions.includes(squareClicked.id)
			) {
				console.log("moveOptions contains this square");
				movePlayer(squareClicked);
				setSelectedSquare(noSelectedSquare);
				switchPlayer();
			}

			if (selectedSquare.claimOptions.includes(squareClicked.id)) {
				console.log("claimOptions contains this square");
				console.log("squareClicked.col: ", squareClicked.col);
				console.log("selectedSquare.col: ", selectedSquare.col);
				if (squareClicked.col < selectedSquare.square.col) {
					Promise.resolve().then(async () => {
						movePlayer(
							squareClicked,
							gameboard[selectedSquare.square.row - 1][
								selectedSquare.square.col - 1
							].id
						);
						setSelectedSquare({
							square: {
								...squareClicked,
							},
							//Will contain an array of square id's that the selected piece can move (No claiming enemys square).
							moveOptions: [],
							//Will contain an array of square id's that the selected piece can move (Claiming eneny square)
							claimOptions: [],
						});
						const { moveOptions, claimOptions } = await waitForNewMoveOptions(
							squareClicked.row,
							squareClicked.col,
							true
						);

						console.log("moveOptions: ", moveOptions);
						console.log("claimOptions: ", claimOptions);
						if (moveOptions.length || claimOptions.length) {
							setSelectedSquare({
								...selectedSquare,
								moveOptions: [...moveOptions],
								claimOptions: [...claimOptions],
							});
						} else {
							setSelectedSquare(noSelectedSquare);
							switchPlayer();
						}
					});
				} else {
					Promise.resolve().then(async () => {
						movePlayer(
							squareClicked,
							gameboard[selectedSquare.square.row - 1][
								selectedSquare.square.col + 1
							].id
						);
						setSelectedSquare({
							square: {
								...squareClicked,
							},
							//Will contain an array of square id's that the selected piece can move (No claiming enemys square).
							moveOptions: [],
							//Will contain an array of square id's that the selected piece can move (Claiming eneny square)
							claimOptions: [],
						});
						const { moveOptions, claimOptions } = await waitForNewMoveOptions(
							squareClicked.row,
							squareClicked.col,
							true
						);

						if (moveOptions.length || claimOptions.length) {
							console.log("inside if $$");
							setSelectedSquare({
								...selectedSquare,
								square: { ...squareClicked },
								moveOptions: [...moveOptions],
								claimOptions: [...claimOptions],
							});
						} else {
							console.log("inside of else $$");
							setSelectedSquare(noSelectedSquare);
							switchPlayer();
						}
					});
				}
			}
		}

		if (selectedSquare.square)
			if (squareClicked.occupiedBy.name !== currentPlayer) {
				return;
			}

		const { moveOptions, claimOptions } = setNewMoveOptions(
			squareClicked.row,
			squareClicked.col,
			false
		);

		if (moveOptions.length || claimOptions.length) {
			setSelectedSquare({
				square: { ...squareClicked },
				moveOptions: [...moveOptions],
				claimOptions: [...claimOptions],
			});
			return;
		}

		return;
	};

	const movePlayer = (
		squareClicked: any,
		removePlayerFromId: number | undefined
	) => {
		console.log("squareClicked.row: ", squareClicked.row);
		const placeHolder = { ...selectedSquare };

		// const movePlayer = () => {
		const newGameBoard = gameboard.map((rowArray: any, rowI: number) => {
			const jeah = rowArray.map((square: any, colI: number) => {
				if (square.id === selectedSquare.square.id) {
					return {
						...square,
						occupiedBy: {
							...square.occupiedBy,
							name: "",
						},
					};
				}

				if (removePlayerFromId && square.id === removePlayerFromId) {
					return {
						...square,
						occupiedBy: {
							...square.occupiedBy,
							name: "",
						},
					};
				}

				if (square.id === squareClicked.id) {
					if (currentPlayer === "player1" && squareClicked.row === 7) {
						return {
							...square,
							occupiedBy: {
								name: "player1",
								kinged: true,
							},
						};
					}

					if (currentPlayer === "player2" && squareClicked.row === 0) {
						return {
							...square,
							occupiedBy: {
								name: "player2",
								kinged: true,
							},
						};
					}
					return {
						...square,
						occupiedBy: {
							...square.occupiedBy,
							name: currentPlayer === "player1" ? "player1" : "player2",
						},
					};
				}

				return square;
			});
			return jeah;
		});

		setGameBoard(newGameBoard);

		console.log("newGameBoard: ", newGameBoard);
	};

	// const handleSelection = (squareClicked: Square, x: number, y: number) => {
	// 	// console.log(gameboard[x + 1][y + 1].id, 'is occupied by: ', gameboard[x + 1][y+ 1].occupiedBy.name)

	// 	if (selectedSquare.id === undefined) {
	// 		console.log("no sleected square");
	// 	}

	// 	if (canPieceClickedBeMoved(squareClicked, x, y)) {
	// 		setSelectedSquare(squareClicked);
	// 		return;
	// 	}

	// 	// if (
	// 	// 	!canPieceClickedBeMoved(squareClicked, x, y) &&
	// 	// 	selectedSquare.occupiedBy
	// 	// )
	// 	if (selectedSquare.col === 0) {
	// 		// console.log();
	// 		// console.log(
	// 		// 	gameboard[selectedSquare.row + 1][selectedSquare.col + 1].id ===
	// 		// 		squareClicked.id
	// 		// );

	// 		//NOT CLAIMING SQUARE
	// 		if (
	// 			gameboard[selectedSquare.row + 1][selectedSquare.col + 1].id ===
	// 				squareClicked.id &&
	// 			gameboard[selectedSquare.row + 1][selectedSquare.col + 1].occupiedBy
	// 				.name === ""
	// 		) {
	// 			//MOVING HANDLE THIS
	// 			console.log("IN HERERERE");
	// 			console.log("moving");
	// 			movePlayer(squareClicked);
	// 			return;
	// 		}

	// 		//CLAIMING SQUARE
	// 		if (
	// 			gameboard[selectedSquare.row + 2][selectedSquare.col + 2].id ===
	// 				squareClicked.id &&
	// 			gameboard[selectedSquare.row + 1][selectedSquare.col + 1].occupiedBy
	// 				.name === "player2"
	// 		) {
	// 			// MOVING 2 down and 2 right
	// 			//HANDLE THIS
	// 			// removeClaimedSquare(
	// 			// 	gameboard[selectedSquare.row + 1][selectedSquare.col + 1].id
	// 			// );
	// 			movePlayer(
	// 				squareClicked,
	// 				gameboard[selectedSquare.row + 1][selectedSquare.col + 1].id
	// 			);
	// 			return;
	// 		}
	// 	} else if (selectedSquare.col === 7) {
	// 		console.log("in here");
	// 		return;
	// 		//NOT CLAIMING SQUARE
	// 		if (
	// 			gameboard[selectedSquare.row + 1][selectedSquare.col - 1].id ===
	// 				squareClicked.id &&
	// 			gameboard[selectedSquare.row + 1][selectedSquare.col - 1].occupiedBy
	// 				.name === ""
	// 		) {
	// 			console.log("moving");
	// 			movePlayer(squareClicked);
	// 			return;
	// 		}

	// 		//CLAIMING SQUARE
	// 		if (
	// 			gameboard[selectedSquare.row + 2][selectedSquare.col - 2].id ===
	// 				squareClicked.id &&
	// 			gameboard[selectedSquare.row + 1][selectedSquare.col - 1].occupiedBy
	// 				.name === "player2"
	// 		) {
	// 			// MOVING 2 down and 2 right
	// 			//HANDLE THIS
	// 			movePlayer(
	// 				squareClicked,
	// 				gameboard[selectedSquare.row + 1][selectedSquare.col - 1].id
	// 			);
	// 			return;
	// 			// removeClaimedSquare(
	// 			// 	gameboard[selectedSquare.row + 1][selectedSquare.col - 1].id
	// 			// );
	// 		}
	// 	} else {
	// 		//NOT Claiming any pieces
	// 		if (
	// 			(gameboard[selectedSquare.row + 1][selectedSquare.col + 1].id ===
	// 				squareClicked.id &&
	// 				gameboard[selectedSquare.row + 1][selectedSquare.col + 1].occupiedBy
	// 					.name === "") ||
	// 			(gameboard[selectedSquare.row + 1][selectedSquare.col - 1].id ===
	// 				squareClicked.id &&
	// 				gameboard[selectedSquare.row + 1][selectedSquare.col - 1].occupiedBy
	// 					.name === "")
	// 		) {
	// 			movePlayer(squareClicked);
	// 			return;
	// 		}

	// 		//CLAIMING PIECE
	// 		if (
	// 			gameboard[selectedSquare.row + 2][selectedSquare.col + 2].id ===
	// 				squareClicked.id &&
	// 			gameboard[selectedSquare.row + 1][selectedSquare.col + 1].occupiedBy
	// 				.name === "player2"
	// 		) {
	// 			// removeClaimedSquare(
	// 			// 	gameboard[selectedSquare.row + 1][selectedSquare.col + 1].id
	// 			// );
	// 			movePlayer(
	// 				squareClicked,
	// 				gameboard[selectedSquare.row + 1][selectedSquare.col + 1].id
	// 			);
	// 			return;
	// 		}

	// 		if (
	// 			gameboard[selectedSquare.row + 2][selectedSquare.col - 2].id ===
	// 				squareClicked.id &&
	// 			gameboard[selectedSquare.row + 1][selectedSquare.col - 1].occupiedBy
	// 				.name === "player2"
	// 		) {
	// 			// removeClaimedSquare(
	// 			// 	gameboard[selectedSquare.row + 1][selectedSquare.col - 1].id
	// 			// );
	// 			movePlayer(
	// 				squareClicked,
	// 				gameboard[selectedSquare.row + 1][selectedSquare.col - 1].id
	// 			);
	// 			return;
	// 		}
	// 	}

	// 	// if (
	// 	// 	gameboard[selectedSquare.row + 1][selectedSquare.col + 1].id ===
	// 	// 	squareClicked.id
	// 	// ) {
	// 	// 	console.log("moving");
	// 	// } else {
	// 	// 	console.log("not moving");
	// 	// }

	// 	// console.log("squareClicked.id: ", squareClicked.id);
	// 	// console.log("gameboard[x + 1][y + 1].id: ", gameboard[x + 1].id);
	// 	// if (squareClicked.id === gameboard[y + 1][x + 1].id) {
	// 	// 	console.log("moiving");
	// 	// } else {
	// 	// 	console.log("not moving");
	// 	// }
	// 	// if (
	// 	// 	!gameboard[selectedSquare.row + 1][selectedSquare.col + 1].occupiedBy.name
	// 	// ) {
	// 	// 	console.log("moving");
	// 	// }
	// };

	return (
		<div className="w-full min-h-screen flex justify-center items-center">
			<div className="w-[800px] h-[800px] flex flex-wrap">
				<div className="flex flex-col">
					{gameboard.map((row: any, rowIndex: number) => {
						return (
							<div key={rowIndex} className="flex">
								{row.map((square: Square, colIndex: number) => {
									const test = "";

									return (
										<div
											onClick={() => {
												if (currentPlayer === "player1") {
													handlePlayer1Selection(square, rowIndex, colIndex);
												} else {
													handlePlayer2Selection(square, rowIndex, colIndex);
												}
											}}
											key={colIndex}
											className={`border border-black w-[100px] h-[100px] flex justify-center items-center ${test}`}
										>
											{square.occupiedBy.name && (
												<div
													className={`text-white text-3xl flex justify-center items-center w-3/4 h-3/4 rounded-full  ${
														square.occupiedBy.name === "player1"
															? " bg-black"
															: "bg-red-500"
													} ${
														square.id === selectedSquare.square.id
															? " border-8 border-purple-500"
															: ""
													}`}
												>
													{square.occupiedBy.kinged ? "K" : square.id}
												</div>
											)}
										</div>
									);
								})}
							</div>
						);
					})}
				</div>

				<button
					onClick={() => {
						// removeClaimedSquare(30);
					}}
				>
					HEREEREEr
				</button>
			</div>
		</div>
	);
}

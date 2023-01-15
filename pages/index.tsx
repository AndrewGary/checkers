import { useState, useEffect } from "react";
import { gameboard as gb, Square } from "@/utils/data";

// When a game piece is clicked
//     Determine if the player that clicked is the activePlayer
//     If they are not the active player do nothing
//     If they are the active player check to see if the piece they clicked was their own piece
//     If no return
//     If yes check to see if the piece can be moved
//     If no return
//     If yes setSelectedSquare to the clicked square

export default function Home() {
	const [gameboard, setGameBoard] = useState(gb);
	const [currentPlayer, setCurrentPlayer] = useState("player1");
	const [selectedSquare, setSelectedSquare] = useState({});
	const [gameMessage, setGameMessage] = useState("");
	const [gameConfig, setGameConfig] = useState({
		whosMoveIsIt: "player1",
	});

	const canPieceClickedBeMoved = (
		squareClicked: Square,
		x: number,
		y: number
	) => {
		if (squareClicked.occupiedBy.name !== currentPlayer) {
			return false;
		}

		if (y === 0 && gameboard[x + 1][y + 1].occupiedBy.name === currentPlayer) {
			console.log("left col clicked");
			return false;
		}

		if (y === 7 && gameboard[x + 1][y - 1].occupiedBy.name === currentPlayer) {
			return false;
		}

		if (
			y > 0 &&
			y < 7 &&
			gameboard[x + 1][y + 1].occupiedBy.name === currentPlayer &&
			gameboard[x + 1][y - 1].occupiedBy.name === currentPlayer
		) {
			return false;
		}

		if (y === 0) {
			if (gameboard[x + 1][y + 1].occupiedBy.name === "player2") {
				if (
					gameboard[x + 2][y].occupiedBy.name &&
					gameboard[x + 2][y + 2].occupiedBy.name
				) {
					return false;
				}
			}
		}

		if (y === 7) {
			if (gameboard[x + 1][y - 1].occupiedBy.name === "player2") {
				if (
					gameboard[x + 2][y].occupiedBy.name &&
					gameboard[x + 2][y - 2].occupiedBy.name
				) {
					return false;
				}
			}
		}

		return true;
	};

	const movePlayer = (squareClicked: any) => {
		console.log("inside movePlayer");
		const placeHolder = { ...selectedSquare };

		// const movePlayer = () => {
		const newGameBoard = gameboard.map((rowArray: any, rowI: number) => {
			const jeah = rowArray.map((square: any, colI: number) => {
				if (square.id === selectedSquare.id) {
					return {
						...square,
						occupiedBy: {
							...square.occupiedBy,
							name: "",
						},
					};
				}

				if (square.id === squareClicked.id) {
					return {
						...square,
						occupiedBy: {
							...square.occupiedBy,
							name: "player1",
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

	const handleSelection = (squareClicked: Square, x: number, y: number) => {
		// console.log(gameboard[x + 1][y + 1].id, 'is occupied by: ', gameboard[x + 1][y+ 1].occupiedBy.name)

		if (selectedSquare.id === undefined) {
			console.log("no sleected square");
		}

		if (canPieceClickedBeMoved(squareClicked, x, y)) {
			setSelectedSquare(squareClicked);
			return;
		}

		// console.log();
		// console.log(
		// 	gameboard[selectedSquare.row + 1][selectedSquare.col + 1].id ===
		// 		squareClicked.id
		// );

		if (selectedSquare.col === 0) {
			if (
				gameboard[selectedSquare.row + 1][selectedSquare.col + 1].id ===
				squareClicked.id
			) {
				//MOVING HANDLE THIS
				console.log("IN HERERERE");
				console.log("moving");
				movePlayer(squareClicked);
			}

			if (
				gameboard[selectedSquare.row + 2][selectedSquare.col + 2].id ===
					squareClicked.id &&
				gameboard[selectedSquare.row + 1][selectedSquare.col + 1].occupiedBy
					.name === "player2"
			) {
				// MOVING 2 down and 2 right
				//HANDLE THIS
				console.log("Claiming Piece");
			}
		} else if (selectedSquare.col === 7) {
			if (
				gameboard[selectedSquare.row + 1][selectedSquare.col - 1].id ===
				squareClicked.id
			) {
				console.log("moving");
				movePlayer(squareClicked);
			}
		} else {
			if (
				gameboard[selectedSquare.row + 1][selectedSquare.col + 1].id ===
					squareClicked.id ||
				gameboard[selectedSquare.row + 1][selectedSquare.col - 1].id ===
					squareClicked.id
			) {
				movePlayer(squareClicked);
			}
		}

		// if (
		// 	gameboard[selectedSquare.row + 1][selectedSquare.col + 1].id ===
		// 	squareClicked.id
		// ) {
		// 	console.log("moving");
		// } else {
		// 	console.log("not moving");
		// }

		// console.log("squareClicked.id: ", squareClicked.id);
		// console.log("gameboard[x + 1][y + 1].id: ", gameboard[x + 1].id);
		// if (squareClicked.id === gameboard[y + 1][x + 1].id) {
		// 	console.log("moiving");
		// } else {
		// 	console.log("not moving");
		// }
		// if (
		// 	!gameboard[selectedSquare.row + 1][selectedSquare.col + 1].occupiedBy.name
		// ) {
		// 	console.log("moving");
		// }
	};

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
												handleSelection(square, rowIndex, colIndex);
											}}
											key={colIndex}
											className={`border border-black w-[100px] h-[100px] flex justify-center items-center ${test}`}
										>
											{square.occupiedBy.name && (
												<div
													onClick={() => {
														handleSelection(square, rowIndex, colIndex);
													}}
													className={`text-white text-3xl flex justify-center items-center w-3/4 h-3/4 rounded-full  ${
														square.occupiedBy.name === "player1"
															? " bg-black"
															: "bg-red-500"
													} ${
														square.id === selectedSquare.id
															? "border-2 border-purple-500"
															: ""
													}`}
												>
													{square.id}
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
						if (1 === 1) {
							let f = { g: () => 1 };
							console.log("JEAHHHHH: ", typeof f);
						}
					}}
				>
					HEREEREEr
				</button>
			</div>
		</div>
	);
}

import { useState } from 'react';

function Square({ value, onSquareClick }: { value: string | null; onSquareClick: any }) {
	return (
		<div
			onClick={onSquareClick}
			className="flex min-h-[50px] min-w-[50px] cursor-pointer items-center justify-center border-[1px] text-2xl"
		>
			{value}
		</div>
	);
}

export default function Pt() {
	const [xIsNext, setXIsNext] = useState<boolean>(true);
	const [squares, setSquares] = useState<any[]>(Array(9).fill(null));

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = `Winner: ${winner}`;
	} else {
		status = `Next player: ${xIsNext ? 'X' : 'O'}`;
	}

	function handleClick(i: number) {
		if (squares[i] || calculateWinner(squares)) return;
		const nextSquares = squares.slice();
		if (xIsNext) {
			nextSquares[i] = 'X';
		} else {
			nextSquares[i] = 'O';
		}
		setSquares(nextSquares);
		setXIsNext(!xIsNext);
	}

	return (
		<>
			<div className="mt-8 ml-8 text-3xl">{status}</div>
			<div className="m-8 flex space-x-8">
				<div className="grid max-w-[150px] grid-cols-3">
					<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
					<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
					<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
					<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
					<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
					<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
					<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
					<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
					<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
				</div>
				<div>
					<button className="rounded bg-neutral-700 px-6 py-1 text-lg">hello</button>
				</div>
			</div>
		</>
	);
}

function calculateWinner(squares: any) {
	const lines: any[] = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

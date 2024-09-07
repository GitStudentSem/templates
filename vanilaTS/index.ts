function generateSudoku(): number[][] {
	const grid = Array(9)
		.fill(0)
		.map(() => Array(9).fill(0));

	// Функция для проверки, можно ли поставить число в клетку
	const canPlace = (row: number, col: number, num: number): boolean => {
		for (let i = 0; i < 9; i++) {
			if (grid[row][i] === num || grid[i][col] === num) return false;
		}

		const startRow = Math.floor(row / 3) * 3;
		const startCol = Math.floor(col / 3) * 3;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (grid[startRow + i][startCol + j] === num) return false;
			}
		}

		return true;
	};

	// Рекурсивная функция для заполнения
	const fillSudoku = (): boolean => {
		for (let row = 0; row < 9; row++) {
			for (let col = 0; col < 9; col++) {
				if (grid[row][col] === 0) {
					// Пустая клетка
					for (let num = 1; num <= 9; num++) {
						if (canPlace(row, col, num)) {
							grid[row][col] = num;
							if (fillSudoku()) return true;
							grid[row][col] = 0; // Откат
						}
					}
					return false; // Тупик
				}
			}
		}
		return true;
	};

	fillSudoku();

	// Удаляем некоторую часть чисел для создания головоломки
	const removeNumbers = (difficulty: number) => {
		let count = difficulty; // Чем больше, тем сложнее
		while (count > 0) {
			const row = Math.floor(Math.random() * 9);
			const col = Math.floor(Math.random() * 9);
			if (grid[row][col] !== 0) {
				grid[row][col] = 0;
				count--;
			}
		}
	};

	removeNumbers(40); // Условный уровень сложности

	return grid;
}

console.log(generateSudoku());

function solveSudoku(grid: number[][]): boolean {
	const canPlace = (row: number, col: number, num: number): boolean => {
		for (let i = 0; i < 9; i++) {
			if (grid[row][i] === num || grid[i][col] === num) return false;
		}

		const startRow = Math.floor(row / 3) * 3;
		const startCol = Math.floor(col / 3) * 3;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (grid[startRow + i][startCol + j] === num) return false;
			}
		}

		return true;
	};

	const findEmpty = (): { row: number; col: number } | null => {
		for (let row = 0; row < 9; row++) {
			for (let col = 0; col < 9; col++) {
				if (grid[row][col] === 0) return { row, col };
			}
		}
		return null;
	};

	const emptyCell = findEmpty();
	if (!emptyCell) return true; // Успешно решено
	const { row, col } = emptyCell;

	for (let num = 1; num <= 9; num++) {
		if (canPlace(row, col, num)) {
			grid[row][col] = num; // Попробовать это число
			if (solveSudoku(grid)) return true;
			grid[row][col] = 0; // Откат
		}
	}

	return false; // Не удалось решить
}

const examplePuzzle: number[][] = [
	[5, 3, 0, 0, 7, 0, 0, 0, 0],
	[6, 0, 0, 1, 9, 5, 0, 0, 0],
	[0, 9, 8, 0, 0, 0, 0, 6, 0],
	[8, 0, 0, 0, 6, 0, 0, 0, 3],
	[4, 0, 0, 8, 0, 3, 0, 0, 1],
	[7, 0, 0, 0, 2, 0, 0, 0, 6],
	[0, 6, 0, 0, 0, 0, 2, 8, 0],
	[0, 0, 0, 4, 1, 9, 0, 0, 5],
	[0, 0, 0, 0, 8, 0, 0, 7, 9],
];

if (solveSudoku(examplePuzzle)) {
	console.log("Решение Судоку:");
	console.table(examplePuzzle);
} else {
	console.log("Нет решения для данной головоломки.");
}

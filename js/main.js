const boxContainer = document.querySelector('.container');

function makeArea(num) {
	let gridDimensions = ((600 / num) -2).toFixed(2);
	let gridSize = Math.pow(num, 2);

	while (gridSize > 0) {
		let grid = document.createElement('div');
		boxContainer.appendChild(grid);
		grid.setAttribute('class', 'grid');
		grid.style.height = gridDimensions + 'px';
		grid.style.width = gridDimensions + 'px';
		grid.style.border = '1px solid black';
		gridSize--
	}
	let gridCells = document.querySelectorAll('.grid');
	gridCells.forEach(cell => cell.addEventListener('mouseenter', changeColor));
}

function changeColor() {
	this.style.backgroundColor = '#696969'
}

makeArea(16);

/* function makeRows(rows, cols) {
	boxContainer.style.setProperty('--grid-rows', rows);
	boxContainer.style.setProperty('--grid-cols', cols);
	for (let i = 0; i < (rows * cols); i++) {
		let sketchBox = document.createElement('div');
		sketchBox.innerText = (i + 1);
		boxContainer.appendChild(sketchBox);
		sketchBox.setAttribute('class', 'cell');
	}
}

makeRows(16, 16);
*/
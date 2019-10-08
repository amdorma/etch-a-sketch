const boxContainer = document.querySelector('.container');
const changeSize = document.querySelector('.change-size');

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

function reSize() {
	let newGridSize = prompt('Choose a number of squares between 1-100', '');
	if (newGridSize >= 1 && newGridSize <= 100){
		while(boxContainer.hasChildNodes()) {
			boxContainer.removeChild(boxContainer.lastChild);
		}
		makeArea(newGridSize)
	} else {
		alert ('Choose a number between 1-100!');
		reSize()
	}
}

changeSize.addEventListener('click', reSize)
onload = makeArea(16);




const boxContainer = document.querySelector('.container');
const changeSize = document.querySelector('.new-board');
const grey = document.querySelector('.grey');
const colorful = document.querySelector('.rainbow');
const shade = document.querySelector('.shading');
const clear = document.querySelector('.clear');

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
	paintGrey()
}
function paintGrey() {
	let gridCells = document.querySelectorAll('.grid');
	gridCells.forEach(cell => {
		cell.addEventListener('mouseenter', (event) => {
		event.target.style.backgroundColor = '#696969';
		});
	});
}

function paintRainbow() {
	let gridCells = document.querySelectorAll('.grid');
	gridCells.forEach(cell => {
		cell.addEventListener('mouseenter', (event) => {
		event.target.style.backgroundColor = rainbow();
		event.target.style.opacity = 'initial';
		});
	});
}

function paintShading() {
	let gridCells = document.querySelectorAll('.grid');
	gridCells.forEach(cell => {
		let shadeValue = 90;
		cell.addEventListener('mouseenter', (event) => {
			event.target.style.backgroundColor = 'hsl(0 0% ' + shadeValue + '%)';
			shadeValue -= 10;
						;
		});
	});
}

function rainbow() {
	return '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
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

clear.addEventListener('click', () => {
	let gridCells = document.querySelectorAll('.grid')
	gridCells.forEach(cell => {
		cell.style.backgroundColor = 'White';
	});
});

grey.addEventListener('click', paintGrey);
colorful.addEventListener('click', paintRainbow);
shade.addEventListener('click', paintShading);

changeSize.addEventListener('click', reSize);
onload = makeArea(16);




const container = document.querySelector('.container');





function resetGrid() {

  
}


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    cell.classList.add('grid-item')
    container.appendChild(cell);
  };
};


// let grid = document.getElementById("grid")
// console.log(grid)
let grid = 4;

makeRows(grid = 16, grid = 16);

const squares = document.querySelectorAll(".grid-item")
const reset = document.getElementById('reset')

squares.forEach((square) => {
    square.addEventListener('mousemove', ()=> {
        square.style.backgroundColor = "black";

    });
    reset.addEventListener('click',() => {
        square.style.backgroundColor = "white";

    });
    
});



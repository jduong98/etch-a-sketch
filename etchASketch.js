const container = document.querySelector('.grid');

function removeGrid() {
  gridItem = document.querySelectorAll(".grid-item");
  for (let i = 0; i < gridItem.length; i++)
  gridItem[i].remove();
}

function makeRows(num) {
  // Set the container size
  container.style.setProperty('--grid-rows', num);
  container.style.setProperty('--grid-cols', num);

  //append the squares
  for (c = 0; c < (num * num); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    cell.classList.add('grid-item')
    container.appendChild(cell);
  };
};

let submit = document.getElementById("change");
let clear = document.getElementById("clear");
let gridNum = 16;
let grid = document.getElementById("gridNum");



submit.addEventListener("click", ()=>{
  removeGrid();
  gridNum = document.getElementById("gridNum").value;
  if (gridNum > 64){
    gridNum = 64
  }
  console.log(gridNum)
  makeRows(gridNum, gridNum)
  draw();
});




makeRows(gridNum);
draw();

function draw() {
const squares = document.querySelectorAll(".grid-item")
const reset = document.getElementById('reset')

squares.forEach((square) => {
    square.addEventListener("mousemove", ()=> {
        square.style.backgroundColor = "black";

    });
    reset.addEventListener('click',() => {
        square.style.backgroundColor = "white";

    });
    
});

};


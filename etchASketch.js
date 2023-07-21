const container = document.querySelector('.container');

// container.append(content)
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);





// for(i = 0; i < 16; i++){
    //create the row
    // const row = document.createElement('div')
    // row.classList.add('row')
  
    
    //for loop to create 16 divs for 1 row
    // for(j = 0; j < 16; i++){
    // const content = document.createElement('div')
    // content.classList.add('block')
    // row.appendChild(content)

    // }
    // container.appendChild(row)
    
// }


// for(i = 0; i < 16; i++){
//     const content = document.createElement('div')
//     content.classList.add('block')
//     container.appendChild(content)
    
//     }


// Sets important constants and variables

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

makeRows(16, 16);

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



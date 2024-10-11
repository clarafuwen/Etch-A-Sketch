const DEFAULT_SIZE = 16;
const RGB_CODE = 256;
const MAX_SIZE = 100;
const board = document.querySelector(".board");
const promptButton = document.querySelector(".prompt");
const reset = document.querySelector(".reset");
const penColor = document.querySelector(".penColor");
const eraser = document.querySelector(".eraser");
let moveCount = 0;

generateGrids(DEFAULT_SIZE);

board.addEventListener("mouseover", e =>{
    const colors = randomRGB();
    switch(e.target.className){
        case "grid":
            //moveCount is used to increase opacity
            moveCount++;
            if(penColor.classList.contains("black")){
                e.target.classList.add("black");
            } else e.target.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
            e.target.style.opacity = moveCount >= 10 ? 1 : 0.1*moveCount;
            break;
    } 
})

promptButton.addEventListener("click", e => {
const size = prompt("Please enter the size of the board(max 100)");
clearGrids();
generateGrids(size);
})

reset.addEventListener("click", e => {
    clearGrids();
    generateGrids(DEFAULT_SIZE);
    console.log(e)
})

penColor.addEventListener("click", e => {
    e.target.classList.toggle("black");
    if(e.target.classList.contains("black")){
        e.target.textContent = "Black Pen"
    } else e.target.textContent = "Rainbow Pen";   
})

// eraser.addEventListener("click", e => {
//     e.target.classList.toggle("erase_on");
// })

function generateOneRow(num){
    const row = document.createElement("div");
    row.className = "row";
    
    for(let i = 0; i < num; i++){
        const grid = document.createElement("div");
        grid.className = "grid";
        row.appendChild(grid);
    }
    return row;
}

function generateGrids(size){
    size = size > MAX_SIZE ? MAX_SIZE : size;
    for(let i = 0; i<size; i++){
        const row = generateOneRow(size);
        board.appendChild(row);
    }
}

function clearGrids(){
    board.replaceChildren();
    moveCount = 0;
}

function randomValue(){
    return Math.floor(Math.random()*RGB_CODE);
}

function randomRGB(){
    return[randomValue(),randomValue(),randomValue()];
}
const container = document.querySelector(".container");
const promptButton = document.querySelector(".prompt");
let moveCount = 0;

generateGrids(16);

container.addEventListener("mouseover", e =>{
    const colors = randomRGB();
    switch(e.target.className){
        case "grid":
            //moveCount is used to increase opacity
            moveCount++;
            e.target.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
            e.target.style.opacity = moveCount >= 10 ? 1 : 0.1*moveCount;
            break;
    }
   
})

promptButton.addEventListener("click", e => {
const size = prompt("Please enter the size of the panel (size x size) less than 100: ");
clearGrids();
generateGrids(size);
})


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
    size = size > 100 ? 100 : size;
    for(let i = 0; i<size; i++){
        const row = generateOneRow(size);
        container.appendChild(row);
    }
}

function clearGrids(){
    container.replaceChildren();
    moveCount = 0;
}

function randomValue(){
    return Math.floor(Math.random()*256);
}

function randomRGB(){
    return[randomValue(),randomValue(),randomValue()];
}
const container = document.querySelector(".container");
const promptButton = document.querySelector(".prompt");
// const rows = document.querySelectorAll(".row");
// const grids = document.querySelectorAll(".grid");


generateGrids(16);


container.addEventListener("mouseover", e=>{
    e.target.classList.add("dark");
})

promptButton.addEventListener("click", e => {
const size = prompt("Please enter the size of the panel: ");
clearGrids();
generateGrids(size);
})

// promptButton.addEventListener("click", e => clearGrids())



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
    for(let i = 0; i<size; i++){
        const row = generateOneRow(size);
        container.appendChild(row);
    }
}

function clearGrids(){
    container.replaceChildren();
    container.style.backgroundColor="transparent";
}
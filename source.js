let modeDraw = false;

const gridContainer = document.querySelector('.grid-container');
for (let i=0;i<16*16;i++)
{
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
}

function getRandomColor()
{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

gridContainer.addEventListener('mouseover', function(event)
{
    if (event.target.classList.contains('grid-item'))
    {
        if(modeDraw==true)
           event.target.style.backgroundColor = getRandomColor();
        else 
           event.target.style.backgroundColor = 'black';
    }
});

const button = document.querySelector('.sizeButton');

button.onclick = function(){
    let gridSize = prompt("Enter the number of squares per side for the new grid (max 100):");
    gridSize = parseInt(gridSize);
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) 
    {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    gridContainer.innerHTML = '';
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `calc(100% / ${gridSize})`;
        gridItem.style.height = `calc(100% / ${gridSize})`;
        gridContainer.appendChild(gridItem);
    }
};

const buttonNoncolors = document.querySelector('#Noncolors');
buttonNoncolors.onclick = function(){
    modeDraw=false;
};

const buttonColors = document.querySelector('#Colors');
buttonColors.onclick = function(){
    modeDraw=true;
};

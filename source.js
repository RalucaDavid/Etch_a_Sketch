const gridContainer = document.querySelector('.grid-container');
for (let i=0;i<16*16;i++)
{
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
}

gridContainer.addEventListener('mouseover', function(event)
{
    if (event.target.classList.contains('grid-item')) 
        event.target.style.backgroundColor = 'black';
});

const button = document.querySelector('button');

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

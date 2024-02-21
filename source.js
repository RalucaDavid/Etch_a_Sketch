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
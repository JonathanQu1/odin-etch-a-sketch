const container = document.querySelector('.container');
const setSize = document.getElementById('grid-size-btn');

let size = 16;

function sketchGrid(size){
    container.innerHTML = '';
    const squareSize = container.clientWidth / size;

    for (let i = 0; i < size * size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        container.appendChild(square);
        square.dataset.opacity = '0';

        square.addEventListener('mouseover', function () {
          let o = Number(square.dataset.opacity);
          o = Math.min(o + 0.1, 1);
          square.dataset.opacity = o;
        
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
          square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${o})`;
        });
    }
} 

setSize.addEventListener('click', function(){
    let userPrompt= prompt("Enter a number the grid size: ");
    userPrompt = parseInt(userPrompt);
    sketchGrid(userPrompt); 
});
sketchGrid(size);
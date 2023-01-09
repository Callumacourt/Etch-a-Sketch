const container = document.getElementById("grid-container");

function makeRows (rows, cols) {
    container.style.setProperty('grid-template-rows', `repeat(${rows}, 1fr)`);
    container.style.setProperty('grid-template-columns', `repeat(${cols}, 1fr)`);
    for (let c = 0; c < (rows * cols); c++) {
      let space = document.createElement("div");
      container.appendChild(space).className ="grid-item";
      let hovers = 1;
      space.addEventListener('mouseenter', function(event) {
        this.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;  
        let color = this.style.backgroundColor;
        let newColor = color.replace(/rgb\((\d+), (\d+), (\d+)\)/, (match, red, green, blue) => {
          red = Math.max(0, Math.floor(red * (1 - hovers * 0.1)));
          green = Math.max(0, Math.floor(green * (1 - hovers * 0.1)));
          blue = Math.max(0, Math.floor(blue * (1 - hovers * 0.1)));
          return `rgb(${red}, ${green}, ${blue})`;
        });
        this.style.backgroundColor = newColor;
        hovers++;
      });
    }
  }
  let newGridCreated = false;

  const button = document.getElementById("newGrid");
  button.addEventListener('click', function(event){
    if (!newGridCreated) {
      let newGridRows = prompt ("how many rows for your new grid")
      let newGridColumns = prompt ("how many columns for your new grid?")

  if (newGridRows > 100) {alert ("Not more than 100 rows or columns, please"); return}
  else if (newGridColumns > 100) {alert ("Not more than 100 rows or columns please");return}

      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      makeRows(newGridRows, newGridColumns);
  
      newGridCreated = false;
    }
  });
  
makeRows(16,16)

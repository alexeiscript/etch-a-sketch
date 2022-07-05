const container = document.querySelector(".container");

const createGridButton = document.getElementById("createGrid");

// Click button to create grid
createGridButton.addEventListener("click", createGrid);

function createGrid() {
  // Ask user for number of squares
  const squaresPerSide = Number(
    prompt("Enter number of squares per side, between 1 and 100", 0)
  );

  // Check for existing squares and remove them
  if (container.hasChildNodes()) {
    container.innerHTML = '';
  }

  // Don't allow numbers bigger than 100, to avoid browser crash
  if (squaresPerSide > 100 || squaresPerSide <= 0 || isNaN(squaresPerSide)) {
    createGrid();
  } else {
    // Calculate square size
    const squares = squaresPerSide * squaresPerSide;
    const screenArea = window.innerWidth * window.innerHeight;
    const squareSide = Math.sqrt(screenArea / squares);

    // Create squares
    for (let i = 0; i < squares; i++) {
      const div = document.createElement("div");
      div.style.width = `${squareSide}px`;
      div.style.height = `${squareSide}px`;
      container.appendChild(div);
    }
    changeColor()
  }
}

// Generate random color
function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

// Change bg-color for hovered squares
function changeColor() {
  const divs = container.querySelectorAll('div');
  divs.forEach(function(div) {
    div.addEventListener('mouseenter', function () {
      this.style.backgroundColor = randomColor();
      console.log(this.style.width);
    }, { once: true });
  });
}

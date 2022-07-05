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

// Change bg-color for hovered squares
function changeColor() {
  const divs = container.querySelectorAll('div');
  divs.forEach(function(div) {
    div.addEventListener('mouseenter', function () {
      this.classList.add('hovered');
      console.log(this.style.width);
    }, { once: true });
  });
}

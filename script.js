const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset-btn');

function createGrid(size) {
    // 1. Clear existing grid
    container.innerHTML = '';

    // 2. Calculate square size
    // Total container is 600px. Each square is 600 / size.
    const squareSize = 600 / size;

    // 3. Create the loop
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        // Apply size styles
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // 4. Add hover effect
        square.addEventListener('mouseenter', () => {
            square.classList.add('active');
        });

        container.appendChild(square);
    }
}

// Initial 16x16 grid
createGrid(16);

// Button Logic
resetBtn.addEventListener('click', () => {
    let userSize = prompt("Enter grid size (max 100):");
    
    // Convert to number
    userSize = parseInt(userSize);

    // Validation
    if (isNaN(userSize) || userSize < 1 || userSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        createGrid(userSize);
    }
});
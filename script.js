const puzzle = document.getElementById("puzzle");
const resetButton = document.getElementById("reset");

let tiles = Array.from(Array(9).keys()).map(i => i + 1);
tiles[tiles.length - 1] = ''; // Последняя плитка пустая

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createPuzzle() {
    puzzle.innerHTML = '';
    tiles.forEach((tile, index) => {
        const tileDiv = document.createElement("div");
        tileDiv.classList.add("tile");
        if (tile) {
            tileDiv.textContent = tile;
            tileDiv.addEventListener("click", () => moveTile(index));
        } else {
            tileDiv.classList.add("empty");
        }
        puzzle.appendChild(tileDiv);
    });
}

function moveTile(index) {
    const emptyIndex = tiles.indexOf('');
    const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 3, emptyIndex + 3]; // Соседние плитки
    if (validMoves.includes(index)) {
        [tiles[emptyIndex], tiles[index]] = [tiles[index], tiles[emptyIndex]];
        createPuzzle();
    }
}

resetButton.addEventListener("click", () => {
    tiles = Array.from(Array(9).keys()).map(i => i + 1);
    tiles[tiles.length - 1] = '';
    shuffle(tiles);
    createPuzzle();
});

shuffle(tiles); // Перемешивание плиток
createPuzzle(); // Создание головоломки

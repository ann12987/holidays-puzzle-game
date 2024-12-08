let currentLevel = 0;
const totalLevels = 3; // Переходите на другие уровни, изменяя это значение

function startGame() {
    currentLevel = 0; // Начнем с первого уровня
    displayLevel();
}

function displayLevel() {
    const gameArea = document.getElementById("game");
    gameArea.innerHTML = ''; // Очищаем игровую область

    // В зависимости от уровня, будем отображать разные задачки
    switch (currentLevel) {
        case 0:
            gameArea.innerHTML = '<h2>Уровень 1: Соберите подарки!</h2><button onclick="solveLevel(1)">Собрать</button>';
            break;
        case 1:
            gameArea.innerHTML = '<h2>Уровень 2: Сбор снежинок!</h2><button onclick="solveLevel(2)">Собрать</button>';
            break;
        case 2:
            gameArea.innerHTML = '<h2>Уровень 3: Украсьте елку!</h2><button onclick="solveLevel(3)">Украсить</button>';
            break;
        default:
            gameArea.innerHTML = '<h2>Поздравляем! Вы прошли все уровни!</h2>';
            break;
    }
}

function solveLevel(level) {
    // Проверяем, правильно ли решена головоломка (для примера просто переходим на следующий уровень)
    currentLevel++;
    displayLevel();
}

function showInstructions() {
    document.getElementById("instructions").style.display = 'block';
}

function hideInstructions() {
    document.getElementById("instructions").style.display = 'none';
}

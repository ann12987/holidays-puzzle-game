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
function solveLevel(levelAttempted) {
    const gameArea = document.getElementById("game");
    if (levelAttempted === currentLevel + 1) {
        // Если игрок успешно решает уровень
        gameArea.innerHTML = `<h2>Прекрасно сделано! Уровень ${currentLevel + 1} пройден!</h2>`;
        currentLevel++;
        // Проверяем, если есть следующий уровень
        if (currentLevel < totalLevels) {
            gameArea.innerHTML += '<button onclick="displayLevel()">Перейти на следующий уровень</button>';
        } else {
            gameArea.innerHTML += '<button onclick="restartGame()">Поздравляем! Вы завершили игру!</button>';
        }
    } else {
        // Если ответ неверный
        gameArea.innerHTML = `<h2>Упс! Попробуйте еще раз. Уровень ${currentLevel + 1} не пройден.</h2>`;
        gameArea.innerHTML += '<button onclick="displayLevel()">Попробовать снова</button>';
    }
}

function restartGame() {
    currentLevel = 0; // Сброс уровня
    startGame(); // Перезапуск игры
}

// Функции для показа и скрытия инструкций
function showInstructions() {
    document.getElementById("instructions").style.display = "block";
}

function hideInstructions() {
    document.getElementById("instructions").style.display = "none";
}
const levels = [
    { question: "Какое число больше: 5 или 10?", answer: "10" },
    { question: "Сколько месяцев в году?", answer: "12" },
    { question: "Какой цвет на флаге России?", answer: "белый" },
    // Можно добавить больше уровней и задач
];

let totalLevels = levels.length;
let currentLevel = 0;

function displayLevel() {
    const gameArea = document.getElementById("game");
    const currentTask = levels[currentLevel];
    gameArea.innerHTML = `<h2>Уровень ${currentLevel + 1}: ${currentTask.question}</h2>`;
    gameArea.innerHTML += `<input type="text" id="answer" placeholder="Ваш ответ">
                             <button onclick="submitAnswer()">Ответить</button>`;
}

function submitAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    solveLevel(userAnswer);
}

let currentLevel = 0;
let score = 0;

const levels = [
    {
        question: "Какой новогодний символ приносят дети?",
        answers: ["Дед Мороз", "Снегурочка", "Ёлка"],
        correct: 0
    },
    {
        question: "Какое главное блюдо на новогоднем столе в России?",
        answers: ["Оливье", "Пельмени", "Борщ"],
        correct: 0
    },
    {
        question: "В какой стране впервые начали отмечать Новый год?",
        answers: ["Китай", "Древний Рим", "Греция"],
        correct: 1
    }
];

function startGame() {
    currentLevel = 0;
    score = 0;
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('score').style.display = 'none';
    showLevel(currentLevel);
}

function showLevel(level) {
    const gameDiv = document.getElementById('game');
    gameDiv.innerHTML = ''; // Очистить предыдущие уровни

    if (level < levels.length) {
        const question = document.createElement('h2');
        question.classList.add('question');
        question.textContent = levels[level].question;
        gameDiv.appendChild(question);

        levels[level].answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.onclick = () => selectAnswer(index);
            gameDiv.appendChild(button);
        });
    } else {
        endGame();
    }
}

function selectAnswer(selectedIndex) {
    if (selectedIndex === levels[currentLevel].correct) {
        score++;
        alert('Правильно!');
    } else {
        alert('Неправильно! Попробуйте снова.');
    }
    currentLevel++;
    showLevel(currentLevel);
}

function endGame() {
    document.getElementById('game').innerHTML = '';
    document.getElementById('scoreValue').textContent = score;
    document.getElementById('score').style.display = 'block';
}

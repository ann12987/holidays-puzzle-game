let currentLevel = 0;
let score = 0;

const questions = [
    {
        question: "Какой праздник мы отмечаем 31 декабря?",
        answers: ["Новый год", "Рождество", "Хэллоуин"],
        correct: 0 // индекс правильного ответа
    },
    {
        question: "Какой символ Нового года?",
        answers: ["Снеговик", "Ёлка", "Дед Мороз"],
        correct: 1
    },
    {
        question: "Какой цвет чаще всего ассоциируется с Новым годом?",
        answers: ["Красный", "Зелёный", "Синий"],
        correct: 1
    }
];

function startGame() {
    currentLevel = 0;
    score = 0;
    document.getElementById('score').innerText = score;
    document.getElementById('start-btn').classList.add('hidden');
    document.getElementById('game').classList.remove('hidden');
    document.getElementById('level-title').innerText = Уровень ${currentLevel + 1};
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const question = questions[currentLevel];

    const questionElement = document.createElement('p');
    questionElement.innerText = question.question;
    questionContainer.appendChild(questionElement);

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.onclick = () => checkAnswer(index);
        questionContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentLevel];
    if (selectedIndex === question.correct) {
        score++;
        alert("Правильно!");
    } else {
        alert("Неправильно! Правильный ответ: " + question.answers[question.correct]);
    }
    document.getElementById('next-button').classList.remove('hidden');
}

function nextLevel() {
    currentLevel++;
    if (currentLevel < questions.length) {
        document.getElementById('level-title').innerText = Уровень ${currentLevel + 1};
        showQuestion();
        document.getElementById('next-button').classList.add('hidden');
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById('game').classList.add('hidden');
    document.getElementById('score-board').classList.remove('hidden');
    document.getElementById('score').innerText = score;
}

function restartGame() {
    score = 0;
    currentLevel = 0;
    document.getElementById('score-board').classList.add('hidden');
    document.getElementById('start-btn').classList.remove('hidden');
}

function showInstructions() {
    alert("В этой игре вам предстоит ответить на вопросы о Новом годе. " +
          "За правильные ответы вы получите баллы! Удачи!");
}

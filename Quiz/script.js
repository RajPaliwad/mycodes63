const quizData = [
    { question: 'What is the capital of France?', options: ['Paris', 'Berlin', 'Rome', 'Madrid'], correct: 'Paris' },
    { question: 'Which programming language is this quiz written in?', options: ['Java', 'Python', 'JavaScript', 'C++'], correct: 'JavaScript' },
    // Add more questions...
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const resultContainer = document.getElementById('result-container');

    questionContainer.textContent = quizData[currentQuestion].question;
    optionsContainer.innerHTML = '';

    quizData[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    resultContainer.textContent = `Score: ${score}/${quizData.length}`;
}

function checkAnswer(selectedOption) {
    const correctOption = quizData[currentQuestion].correct;

    if (selectedOption === correctOption) {
        score++;
    }

    showResult(selectedOption === correctOption);
}

function showResult(isCorrect) {
    const resultContainer = document.getElementById('result-container');

    if (isCorrect) {
        resultContainer.textContent = 'Correct!';
    } else {
        resultContainer.textContent = `Incorrect. The correct answer is ${quizData[currentQuestion].correct}.`;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const resultContainer = document.getElementById('result-container');
    const nextButton = document.getElementById('next-btn');

    questionContainer.textContent = '';
    optionsContainer.innerHTML = '';
    resultContainer.textContent = `Final Score: ${score}/${quizData.length}`;
    nextButton.style.display = 'none';
}

// Start the quiz
startQuiz();

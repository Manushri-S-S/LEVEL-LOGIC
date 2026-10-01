const languageSelect = document.getElementById("language-select");
const startButton = document.getElementById("start-button");
const codingButton = document.getElementById("coding-button");
const interviewButton = document.getElementById("interview-button");
const backButton = document.getElementById("back-button");
const interviewBackButton = document.getElementById("interview-back-button");
const hintButton = document.getElementById("hint-button");
const submitButton = document.getElementById("submit-button");
const questionContent = document.getElementById("question-content");
const resultView = document.getElementById("result-view");
const revealButton = document.getElementById("reveal-button");

async function loadQuestions() {
    const res = await fetch("questions.json");
    const data = await res.json();

    console.log(data);
}

loadQuestions();

revealButton.addEventListener("click", function () {
    document.getElementById("explanation").classList.remove("hidden");
});




startButton.addEventListener("click",function(){

    const selectedLanguage = languageSelect.value;
    document.getElementById("greeting").textContent =
    "Welcome to LevelLogic! You selected " + selectedLanguage + ".";
    document.getElementById("language-screen").classList.add("hidden");
    document.getElementById("home-screen").classList.remove("hidden");
});

codingButton.addEventListener("click", function () {
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("coding-screen").classList.remove("hidden");
});

interviewButton.addEventListener("click", function () {
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("interview-screen").classList.remove("hidden");
});

backButton.addEventListener("click", function () {
    document.getElementById("coding-screen").classList.add("hidden");
    document.getElementById("home-screen").classList.remove("hidden");
});

interviewBackButton.addEventListener("click", function () {
    document.getElementById("interview-screen").classList.add("hidden");
    document.getElementById("home-screen").classList.remove("hidden");
});

hintButton.addEventListener("click", function () {
    document.getElementById("hint-text").classList.remove("hidden");
});

submitButton.addEventListener("click", function () {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const feedback = document.getElementById("feedback");
    feedback.textContent = "";

    if (selectedAnswer === null) {
        feedback.textContent = "Please select an answer first.";
    } else if (selectedAnswer.value === "7") {
        questionContent.classList.add("hidden");
        resultView.classList.remove("hidden");

        document.getElementById("result-title").textContent =
            "Correct! 🎉";

        document.getElementById("correct-answer").textContent =
            "Correct answer: 7";

        document.getElementById("result-explanation").textContent =
            "x stores 5. The expression x + 2 adds 2 to it, so the output is 7.";
    } else {
        feedback.textContent = "Not quite. Try again!";
    }
});
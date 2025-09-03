// quiz.js

function checkAnswer() {
    // Function body

    const correctAnswer = "4" // Correct answer for the quiz

    //select the feedback paragraph
    const feedback = document.getElementById("feedback")

    const selectedOption = document.querySelector('input[name="quiz"]:checked')// Get user's answer


    //
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        //compare the user's answer to the correct answer
        if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct!, Well done.";
        feedback.style.color = "green";
        } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
        }
     // If no option is selected
    } else {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "orange";

    }
}

// Attach event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("questionForm");
  const questionList = document.getElementById("questionList");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const question = form.question.value;
    const correctAnswer = form.correctAnswer.value;
    const wrongAnswer = form.wrongAnswer.value;
    
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>Запитання:</strong> ${question} <br>
      <strong>Вірна відповідь:</strong> ${correctAnswer} <br>
      <strong>Хибна відповідь:</strong> ${wrongAnswer}
    `;
    
    questionList.appendChild(listItem);
    
    // Clear form fields for next question
    form.reset();
  });
});

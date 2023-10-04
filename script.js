document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("userInfoForm");
  const output = document.getElementById("output");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const birthday = form.birthday.value;
    const gender = form.gender.value;
    const skills = form.skills.value;
    
    output.innerHTML = `
      <strong>Ім'я:</strong> ${firstname} <br>
      <strong>Прізвище:</strong> ${lastname} <br>
      <strong>Дата народження:</strong> ${birthday} <br>
      <strong>Стать:</strong> ${gender} <br>
      <strong>Навички:</strong> ${skills} <br>
    `;
  });
});

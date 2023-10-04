document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const greeting = document.getElementById("greeting");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const username = form.username.value;
      const rememberMe = form.rememberMe.checked;
      
      greeting.textContent = `Привіт, ${username}! Я тебе ${rememberMe ? 'запам’ятав' : 'не запам’ятав'}.`;
    });
  });
  
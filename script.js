document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const confirmation = document.getElementById("confirmation");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const email = form.email.value;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;
      
      if (password !== confirmPassword) {
        confirmation.textContent = "Паролі не співпадають!";
        return;
      }
      
      confirmation.textContent = `На ${email} надіслано лист із підтвердженням.`;
    });
  });
  
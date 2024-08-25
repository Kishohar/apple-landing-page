// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('infoForm');
  const resultSection = document.getElementById('resultSection');
  const resultMessage = document.getElementById('resultMessage');

  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission

      const name = document.getElementById('name').value;

      resultMessage.textContent = `Hello, ${name}! Thank you for submitting your information.`;
      resultSection.style.display = 'block'; // Show the result section
  });
});

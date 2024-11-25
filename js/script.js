function runTypingEffect() {
  const text = 'I am Elena Ispas.';
  const typingElement = document.getElementById('typing-text'); // Correct ID
  const typingDelay = 100;

  // Call the typing effect function
  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener('DOMContentLoaded', runTypingEffect)
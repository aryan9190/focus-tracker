// Toggle FAQ answers on click
document.querySelectorAll('.faq-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    answer.classList.toggle('hidden');
  });
});

// Start countdown timer when user clicks start
function startTimer() {
  const input = document.getElementById("custom-minutes");
  const display = document.getElementById("countdown");
  let minutes = parseInt(input.value);

  if (isNaN(minutes) || minutes <= 0) {
    alert("Please enter a valid number of minutes.");
    return;
  }

  let totalSeconds = minutes * 60;
  updateDisplay();

  const interval = setInterval(() => {
    totalSeconds--;
    updateDisplay();

    if (totalSeconds <= 0) {
      clearInterval(interval);
      display.textContent = "Session Complete!";
    }
  }, 1000);

  // Update the countdown UI
  function updateDisplay() {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
}

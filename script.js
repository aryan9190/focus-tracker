document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.classList.toggle('hidden');
  });
});

function startTimer() {
  const minutesInput = document.getElementById("custom-minutes");
  const countdownDisplay = document.getElementById("countdown");
  let minutes = parseInt(minutesInput.value);

  if (isNaN(minutes) || minutes <= 0) {
    alert("Please enter a valid number of minutes.");
    return;
  }

  let seconds = minutes * 60;
  updateCountdown();

  const interval = setInterval(() => {
    seconds--;
    updateCountdown();

    if (seconds <= 0) {
      clearInterval(interval);
      countdownDisplay.textContent = "Session Complete!";
    }
  }, 1000);

  function updateCountdown() {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    countdownDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
}

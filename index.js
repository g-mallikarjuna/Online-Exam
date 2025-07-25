const startInput = document.getElementById('startInput');
const startBtn = document.getElementById('start');
const checkBtn = document.getElementById('checkButton');
checkBtn.addEventListener('click', () => {
   const startCheck = startInput.value.toLowerCase();
   if (startCheck === "start") {
      startBtn.style.display = "block";
   } else {
      startBtn.style.display = "none";
   }
});
startBtn.addEventListener('click', () => {
   window.location.href = "quiz.html";
});
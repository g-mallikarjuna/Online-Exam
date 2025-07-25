const showTIme = document.getElementById('displayTime');
window.addEventListener('DOMContentLoaded', () => {
   function displaytime() {
      const newTime = new Date();
      const show = newTime.toLocaleTimeString();
      showTIme.textContent = `${show}`;
   }
   setInterval(displaytime)
})


const userSubmit = document.querySelectorAll('.submit');
const nextBtn = document.querySelectorAll('.next');
const previousBtn = document.querySelectorAll('.previous');
const containers = document.querySelectorAll('.InnerContainer');
let countQuestions = 0;
function showQuestion(index) {
   containers.forEach((containers, i) => {
      containers.style.display = i === index ? "block" : "none";
   })
}
nextBtn.forEach(btn => {
   btn.addEventListener('click', () => {
      if (countQuestions < containers.length - 1) {
         countQuestions++;
         showQuestion(countQuestions);
      }
   });
});
previousBtn.forEach(btn => {
   btn.addEventListener('click', () => {
      if (countQuestions > 0) {
         countQuestions--;
         showQuestion(countQuestions);
      }
   });
});
//submit
window.addEventListener('DOMContentLoaded', () => {
   userSubmit.forEach(btn => {
      const firstquestionOption = document.getElementById('1option1');
      const secondquestionOption = document.getElementById('2option3');
      const thirdquestionOption = document.getElementById('3option3');
      const fourthquestionOption = document.getElementById('4option1');
      const fifthquestionOption = document.getElementById('5option3');
      const sixquestionOption = document.getElementById('6option2');
      const sevenquestionOption = document.getElementById('7option2');
      const eightquestionOption = document.getElementById('8option3');
      const ninequestionOption = document.getElementById('9option2');
      const tenquestionOption = document.getElementById('10option3');
      const elevenquestionOption = document.getElementById('11option2');
      const twelvequestionOption = document.getElementById('12option3');
      const thirteenquestionOption = document.getElementById('13option3');
      const fourteenquestionOption = document.getElementById('14option2');
      const fifteenquestionOption = document.getElementById('15option1');
      const sixteenquestionOption = document.getElementById('16option4');
      const seventeenquestionOption = document.getElementById('17option3');
      const eighteenquestionOption = document.getElementById('18option1');
      const nineteenquestionOption = document.getElementById('19option3');
      const twentyquestionOption = document.getElementById('20option3');
      let count = 0;
      btn.addEventListener('click', () => {
         if (firstquestionOption.checked) count++;
         if (secondquestionOption.checked) count++;
         if (thirdquestionOption.checked) count++;
         if (fourthquestionOption.checked) count++;
         if (fifthquestionOption.checked) count++;
         if (sixquestionOption.checked) count++;
         if (sevenquestionOption.checked) count++;
         if (eightquestionOption.checked) count++;
         if (ninequestionOption.checked) count++;
         if (tenquestionOption.checked) count++;
         if (elevenquestionOption.checked) count++;
         if (twelvequestionOption.checked) count++;
         if (thirteenquestionOption.checked) count++;
         if (fourteenquestionOption.checked) count++;
         if (fifteenquestionOption.checked) count++;
         if (sixteenquestionOption.checked) count++;
         if (seventeenquestionOption.checked) count++;
         if (eighteenquestionOption.checked) count++;
         if (nineteenquestionOption.checked) count++;
         if (twentyquestionOption.checked) count++;
         localStorage.setItem('score', count);
         window.location.href = "score.html";
      })
   })
});
//result
window.addEventListener('DOMContentLoaded', () => {
   const scoreResult = document.getElementById('result');
   if (scoreResult) {
      const usernameResult = localStorage.getItem('username');
      document.getElementById('username').textContent = usernameResult;
      const score = localStorage.getItem('score');
      const showresineng = document.getElementById('showres');
      scoreResult.textContent = `Your score ${score}`;
      if (score > 12) {
         showresineng.textContent = `Pass`;
      } else {
         showresineng.textContent = ` Fail`;
      }
   }
});

//Username
const loginBtn = document.getElementById('loginButton');
const usernameInput = document.getElementById('username');
window.addEventListener('DOMContentLoaded', () => {
   loginBtn.addEventListener('click', () => {
      const getuserName = usernameInput.value;
      localStorage.setItem('username', getuserName);
      if (getuserName) {
         window.location.href = "instruction.html"
      }
   });
});
const displyUsername = document.getElementById('displayUserName');
const getUserName = localStorage.getItem('username');
displyUsername.textContent = getUserName;

const displayOnline = document.getElementById('showonline');
const displayOffline = document.getElementById('showoffline');
const cont = document.querySelector('.OuterContainer');
function checkConnection() {
   const urlpath = 'https://dummyjson.com/users';
   fetch(urlpath).then(res => {
      if (res.ok) {
         displayOnline.style.display = "block";
         displayOffline.style.display = "none";
         cont.style.display = "flex";
      } else {
         displayOnline.style.display = "none";
         displayOffline.style.display = "block";
         cont.style.display = "none";
      }
   }).catch(error => {
      displayOnline.style.display = "none";
      displayOffline.style.display = "block";
      cont.style.display = "none";
   });
}
checkConnection();

window.addEventListener('online', checkConnection);
window.addEventListener('offline', checkConnection);

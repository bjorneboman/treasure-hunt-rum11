// Räknare och HUD
let foundCount = 0;
let time = 0;
let timer = null;

const foundCountEl = document.getElementById("foundCount");
const totalCountEl = document.getElementById("totalCount");
const timerEl = document.getElementById("timer");

// Starta timern (men starta endast när första skatt hittas)
function startTimer() {
  if (timer !== null) return;
  timer = setInterval(() => {
    time++;
    timerEl.textContent = time;
  }, 1000);
}

function stopTimer() {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
}

// Generisk click-handler för alla skatter
const allTreasure = Array.from(document.querySelectorAll('.skatt, .treasure'));
totalCountEl.textContent = allTreasure.length;

allTreasure.forEach(el => {
  // initial hint state: small opacity
  if(el.classList.contains("skatt")){
    el.classList.add('hintable');
  }

  el.addEventListener('click', (e) => {
    if (el.classList.contains('found')) return;
    startTimer();
    el.classList.add('found');
    foundCount++;
    foundCountEl.textContent = foundCount;

    // small unobtrusive message
    showToast('Grattis! Du hittade en skatt! 🎉');

    // stop when all found
    if (foundCount === allTreasure.length) {
      stopTimer();
      showToast('Alla skatter hittade på ' + time + ' sekunder!');
    }
  });
});

// Lightweight toast
function showToast(msg) {
  let toast = document.createElement('div');
  toast.textContent = msg;
  toast.style.position = 'fixed';
  toast.style.right = '20px';
  toast.style.bottom = '20px';
  toast.style.background = 'rgba(17,24,39,0.9)';
  toast.style.color = 'white';
  toast.style.padding = '10px 14px';
  toast.style.borderRadius = '8px';
  toast.style.boxShadow = '0 6px 20px rgba(2,6,23,0.3)';
  toast.style.zIndex = 99999;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 500);
  }, 1400);
}
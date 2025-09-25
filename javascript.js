// Räknare
let foundCount = 0;
let time = 0;
let timer;

// Hämta HUD-element
const foundCountEl = document.getElementById("foundCount");
const timerEl = document.getElementById("timer");

// Starta timern
timer = setInterval(() => {
  time++;
  timerEl.textContent = time;
}, 1000);

// --- Här ska ni lägga in era egna skatter --- //
// Exempel: skatt 1
const treasure1 = document.getElementById("treasure1");
treasure1.addEventListener("click", () => {
    if (!treasure1.classList.contains('found')) {
        treasure1.classList.add('found'); // markerar att den är hittad
        foundCount++;
        foundCountEl.textContent = foundCount;
        
        alert('Grattis! Du hittade en skatt! 🎉');
        
        if (foundCount === 10) {
            clearInterval(timer);
            alert('Alla skatter hittade på ' + time + ' sekunder!');
        }
    }
});

// ... fortsätt för alla skatter ...

const treasure2 = document.getElementById("treasure2");
treasure1.addEventListener("click", () => {
    if (!treasure1.classList.contains('found')) {
        treasure1.classList.add('found'); // markerar att den är hittad
    foundCount++;
    foundCountEl.textContent = foundCount;
    
    alert('Grattis! Du hittade en skatt! 🎉');
    
    if (foundCount === 10) {
      clearInterval(timer);
      alert('Alla skatter hittade på ' + time + ' sekunder!');
    }
    }
});

const treasure3 = document.getElementById("treasure3");
treasure1.addEventListener("click", () => {
    if (!treasure1.classList.contains('found')) {
    treasure1.classList.add('found'); // markerar att den är hittad
    foundCount++;
    foundCountEl.textContent = foundCount;
    
    alert('Grattis! Du hittade en skatt! 🎉');
    
    if (foundCount === 10) {
      clearInterval(timer);
      alert('Alla skatter hittade på ' + time + ' sekunder!');
      }
    }
});

const treasure4 = document.getElementById("treasure4");
treasure1.addEventListener("click", () => {
    if (!treasure1.classList.contains('found')) {
    treasure1.classList.add('found'); // markerar att den är hittad
    foundCount++;
    foundCountEl.textContent = foundCount;
    
    alert('Grattis! Du hittade en skatt! 🎉');
    
    if (foundCount === 10) {
      clearInterval(timer);
      alert('Alla skatter hittade på ' + time + ' sekunder!');
    }
    }
});

const treasure5 = document.getElementById("treasure5");
treasure1.addEventListener("click", () => {
    if (!treasure1.classList.contains('found')) {
        treasure1.classList.add('found'); // markerar att den är hittad
    foundCount++;
    foundCountEl.textContent = foundCount;
    
    alert('Grattis! Du hittade en skatt! 🎉');
    
    if (foundCount === 10) {
        clearInterval(timer);
      alert('Alla skatter hittade på ' + time + ' sekunder!');
    }
}
});

const treasure6 = document.getElementById("treasure6");
treasure1.addEventListener("click", () => {
  if (!treasure1.classList.contains('found')) {
      treasure1.classList.add('found'); // markerar att den är hittad
      foundCount++;
      foundCountEl.textContent = foundCount;
      
      alert('Grattis! Du hittade en skatt! 🎉');
      
      if (foundCount === 10) {
      clearInterval(timer);
      alert('Alla skatter hittade på ' + time + ' sekunder!');
    }
    }
});

const treasure7 = document.getElementById("treasure7");
treasure1.addEventListener("click", () => {
  if (!treasure1.classList.contains('found')) {
    treasure1.classList.add('found'); // markerar att den är hittad
    foundCount++;
    foundCountEl.textContent = foundCount;
    
    alert('Grattis! Du hittade en skatt! 🎉');
    
    if (foundCount === 10) {
        clearInterval(timer);
        alert('Alla skatter hittade på ' + time + ' sekunder!');
    }
}
});

const treasure8 = document.getElementById("treasure8");
treasure1.addEventListener("click", () => {
    if (!treasure1.classList.contains('found')) {
        treasure1.classList.add('found'); // markerar att den är hittad
        foundCount++;
    foundCountEl.textContent = foundCount;
    
    alert('Grattis! Du hittade en skatt! 🎉');

    if (foundCount === 10) {
        clearInterval(timer);
      alert('Alla skatter hittade på ' + time + ' sekunder!');
    }
}
});


const treasure9 = document.getElementById("treasure9");
treasure1.addEventListener("click", () => {
  if (!treasure1.classList.contains('found')) {
    treasure1.classList.add('found'); // markerar att den är hittad
    foundCount++;
    foundCountEl.textContent = foundCount;
    
    alert('Grattis! Du hittade en skatt! 🎉');

    if (foundCount === 10) {
      clearInterval(timer);
      alert('Alla skatter hittade på ' + time + ' sekunder!');
      }
    }
});

const treasure10 = document.getElementById("treasure10");
treasure1.addEventListener("click", () => {
  if (!treasure1.classList.contains('found')) {
    treasure1.classList.add('found'); // markerar att den är hittad
    foundCount++;
    foundCountEl.textContent = foundCount;
    
    alert('Grattis! Du hittade en skatt! 🎉');

    if (foundCount === 10) {
      clearInterval(timer);
      alert('Alla skatter hittade på ' + time + ' sekunder!');
      }
    }
});
const adviceIdSpan = document.querySelector('.advice-id');
const adviceSpan = document.querySelector('.advice');
const diceBtn = document.querySelector('.dice');

diceBtn.addEventListener('click', () => {
  fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
      adviceIdSpan.innerText = data.slip.id;
      adviceSpan.innerText = data.slip.advice;
    });
});

window.addEventListener('DOMContentLoaded', () => {
  fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
      adviceIdSpan.innerText = data.slip.id;
      adviceSpan.innerText = data.slip.advice;
    });
});

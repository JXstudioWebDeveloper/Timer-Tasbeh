const sum = document.getElementById('count');
const plusBtn = document.getElementById('plus');
const deletBtn = document.getElementById('delet');
let s = localStorage.getItem('counter')
  ? parseInt(localStorage.getItem('counter'))
  : 0;
sum.innerHTML = s;
plusBtn.addEventListener('click', () => {
  s++;
  sum.innerHTML = s;
  localStorage.setItem('counter', s);
});
deletBtn.addEventListener('click', () => {
  s = 0;
  sum.innerHTML = s;
  localStorage.removeItem('counter');
});
const soat = document.getElementById('soat');
const daqiqa = document.getElementById('daqiqa');
const sekund = document.getElementById('sekund');
function showClock() {
  let now = new Date();
  let hour = now.getHours().toString().padStart(2, '0');
  let minut = now.getMinutes().toString().padStart(2, '0');
  let second = now.getSeconds().toString().padStart(2, '0');
  soat.innerHTML = hour;
  daqiqa.innerHTML = minut;
  sekund.innerHTML = second;
}
setInterval(showClock, 1000);
showClock();

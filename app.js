const sum = document.getElementById('count');
const plusBtn = document.getElementById('plus');
const deletBtn = document.getElementById('delet');
let s = 0;
plusBtn.addEventListener('click', () => {
  s++;
  sum.innerHTML = s;
});
deletBtn.addEventListener('click', () => {
  s = 0;
  sum.innerHTML = s;
});
const soat = document.getElementById('soat');
const daqiqa = document.getElementById('daqiqa');
const sekund = document.getElementById('sekund');
function showClock() {
  let now = new Date();
  let hour = now.getHours();
  let minut = now.getMinutes();
  let second = now.getSeconds();
  hour = hour.toString().padStart(2, '0');
  minut = minut.toString().padStart(2, '0');
  second = second.toString().padStart(2, '0');
  soat.innerHTML = hour;
  daqiqa.innerHTML = minut;
  sekund.innerHTML = second;
}
setInterval(showClock, 1000);
showClock();

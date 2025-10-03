const sum = document.getElementById('count');
const plusBtn = document.getElementById('plus');
const deletBtn = document.getElementById('delet');
let s = localStorage.getItem('counter')
  ? parseInt(localStorage.getItem('counter'))
  : 0;
sum.innerHTML = s;
plusBtn.addEventListener('click', () => {
  const sound = new Audio('mixkit-camera-shutter-click-1133.wav');
  sound.play();
  s++;
  sum.innerHTML = s;
  localStorage.setItem('counter', s);
});
deletBtn.addEventListener('click', () => {
  const sound2 = new Audio('mixkit-fast-double-click-on-mouse-275.wav')
  sound2.play()
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

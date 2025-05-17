let start;
let best = 1000;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function move() {
  const shape = document.getElementById('shape');

  const wh = Math.floor(Math.random() * 200) + 100;
  shape.style.width = wh + 'px';
  shape.style.height = wh + 'px';

  const headerHeight = document.querySelector('header').offsetHeight;
  const maxLeft = window.innerWidth - wh;
  const maxTop = window.innerHeight - wh - headerHeight;

  const left = Math.random() * maxLeft;
  const top = Math.random() * maxTop + headerHeight;

  shape.style.left = left + 'px';
  shape.style.top = top + 'px';

  shape.style.backgroundColor = getRandomColor();
  shape.style.display = 'block';

  start = new Date().getTime();
}

document.getElementById('shape').onclick = function () {
  document.getElementById('shape').style.display = 'none';
  const end = new Date().getTime();
  const timeTaken = ((end - start) / 1000).toFixed(3);
  document.getElementById('result').innerHTML = 'REACTION TIME ➡️ ' + timeTaken + ' Sec';

  if (timeTaken < best) {
    best = timeTaken;
  }

  document.getElementById('best').innerHTML = 'BEST TIME ➡️ ' + best + ' Sec';

  setTimeout(move, Math.random() * 1000 + 500);
};

setTimeout(move, 1000);

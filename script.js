// Constants!
const initButton = document.getElementById('pulsante');
const container = document.querySelector('div#container');
let bombs = [];

const score = 0;
// Funzioni
const generateMinefield = () => {
  bombs = generateArrayBombs(1, 16);
  for (let i = 1; i < 101; i++) {
    const div = document.createElement('div');
    div.innerHTML = i;
    div.classList.add('square');
    div.setAttribute('data-index', i);
    document.getElementById('container').appendChild(div);
  }
  document.querySelectorAll('.square').forEach((mine) => {
    mine.addEventListener('click', takeStep);
  });
};

function generateArrayBombs(numMin, numMax) {
  const randMineField = Math.floor(Math.random() * (numMax - numMin)) + 1;
  if (bombs.includes(randMineField) && bombs.length < 16) {
    generateArrayBombs(1, 60);
  } else {
    bombs.push(randMineField);
    if (bombs.length !== 16) {
      generateArrayBombs(1, 60);
    }
  }
  console.log(bombs);
  return bombs;
}

const takeStep = (event) => {
  if (bombs.includes(parseInt(event.target.dataset.index))) {
    alert('You Lose !');
    event.target.classList.add('squarebombs');
  } else {
    event.target.classList.add('squareclick');
  }
};

// Event Listner
initButton.addEventListener('click', generateMinefield());

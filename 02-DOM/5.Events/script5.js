const _initTime = Date.now();
const displayedsquareWrapper = document.querySelector('.displayedsquare-wrapper');
const logList = document.querySelector('ul');

function getElapsedTime() {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
}

function createSquare(color) {
  const square = document.createElement('div');
  square.classList.add('displayedsquare');
  square.style.backgroundColor = color;
  square.addEventListener('click', () => {
    alert(color);
  });
  displayedsquareWrapper.appendChild(square);
}

function createLog(text) {
  const logItem = document.createElement('li');
  logItem.textContent = text;
  logList.appendChild(logItem);
}

function deleteLogs() {
  logList.innerHTML = '';
}

function deleteSquares() {
  displayedsquareWrapper.innerHTML = '';
}

function handleKeyPress(event) {
  if (event.code === 'Space') {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    createLog(`Spacebar pressed - Color changed to ${randomColor}`);
  } else if (event.key === 'l') {
    deleteLogs();
    createLog('Logs deleted');
  } else if (event.key === 's') {
    deleteSquares();
    createLog('Squares deleted');
  }
}

function getRandomColor() {
  const colors = ['green', 'violet', 'orange'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function clickOnSquare(e) {
  const color = e.target.classList[1];
  createSquare(color);
  createLog(`Created a new ${color} square - ${getElapsedTime()}`);
}

const actionsquares = document.querySelectorAll('.actionsquare');
for (let actionsquare of actionsquares) {
  actionsquare.addEventListener('click', clickOnSquare);
}

document.body.addEventListener('keypress', handleKeyPress);

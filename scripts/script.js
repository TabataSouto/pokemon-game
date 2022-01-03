const startGame = document.getElementById('start-game');
const sectionGame = document.getElementById('game');

startGame.addEventListener('click', () => {
  startGame.style.display = 'none';
  sectionGame.style.display = 'block';
})
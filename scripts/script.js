// ------------- Botão Go para iniciar o jogo ------------
const startGame = document.getElementById('start-game');
const sectionGame = document.getElementById('game');

startGame.addEventListener('click', () => {
  startGame.style.display = 'none';
  sectionGame.style.display = 'block';
})

// ------------- Adição da imagem sombra ------------
function addShadow() {
  const pokemon = document.querySelector('#pokemon');
  pokemon.src = 'https://i.postimg.cc/k5t2Xj9Z/minun-sombra.png'
}
addShadow();

// ------------- Acertou ou Errou -----------------
const answer = document.querySelector('#answer');
const send = document.querySelector('#send');

send.addEventListener('click', () => {
  if (answer.value === 'Minun'.toLowerCase()) {
    pokemon.src = 'https://i.postimg.cc/cHyrKQLJ/minun.png';
  }
})
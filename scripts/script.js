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
  pokemon.src = '/images/minun-sombra.png'
}
addShadow();

// ------------- Acertou ou Errou -----------------
const answer = document.querySelector('#answer');
const send = document.querySelector('#send');

send.addEventListener('click', () => {
  if (answer.value === 'Minun'.toLowerCase()) {
    pokemon.src = '/images/minun.png';
  }
})
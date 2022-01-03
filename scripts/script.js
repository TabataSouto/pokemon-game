// ---------------- constantes globais -------------------
const startGame = document.getElementById('start-game');
const sectionGame = document.getElementById('game');
const pokemon = document.querySelector('#pokemon');
const answer = document.querySelector('#answer');
const send = document.querySelector('#send');

// ------------- Botão Go para iniciar o jogo ------------
startGame.addEventListener('click', () => {
  startGame.style.display = 'none';
  sectionGame.style.display = 'block';
})

// --------------- Adição da imagem sombra ---------------
function addShadow() {
  pokemon.src = pokemons[0].shadow;
}
addShadow();

// ------------------ Acertou ou Errou --------------------
send.addEventListener('click', () => {
  if (answer.value === pokemons[0].name.toLowerCase()) {
    pokemon.src = pokemons[0].img;
  }
})
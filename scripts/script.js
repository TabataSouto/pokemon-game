// ---------------- constantes globais -------------------
const startGame = document.getElementById('start-game');
const sectionGame = document.getElementById('game');
const pokemon = document.querySelector('#pokemon');
const answer = document.querySelector('#answer');
const send = document.querySelector('#send');
const restartNext = document.querySelector('#restart');

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
    restartNext.innerText = 'Acertou!! Vamos para o próximo Pokémon?'
  } else {
    pokemon.src = 'https://i.postimg.cc/GmfBR00G/pokemon-cry.png';
    pokemon.style.width = '31.8%'
    restartNext.innerText = 'Errado!! Tente novamente ';
    restartNext.style.color = 'rgb(209, 19, 19)';
  }
})
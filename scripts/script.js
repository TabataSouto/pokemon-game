// ---------------- constantes globais -------------------
const startGame = document.querySelector('#start-game');
const sectionGame = document.querySelector('#game');
const pokemon = document.querySelector('#pokemon');
const answer = document.querySelector('#answer');
const send = document.querySelector('#send');
const restartNext = document.querySelector('#restart');

// Botão "Go" para iniciar o jogo
startGame.addEventListener('click', () => {
  startGame.style.display = 'none';
  sectionGame.style.display = 'block';
})

// Imagem de sombra do jogo
function addShadow() {
  const randomPokemon = Math.round(Math.random() * 9);
  pokemon.src = pokemons[randomPokemon].shadow;
}
addShadow();

// Função que retorna o resultado do acerto e erro;
send.addEventListener('click', () => {
  Object.keys(pokemons).forEach((element) => {
    if (answer.value === pokemons[element].name.toLowerCase()) {
      pokemon.src = pokemons[element].img;
      restartNext.innerText = 'Parabéns, você acertou! Vamos para o próximo?'
    }
  })
});

// Tentar outros pokemons
restartNext.addEventListener('click', () => {
  answer.value = '';
  restartNext.innerText = 'Então, qual é o Pokémon?'
  restartNext.style.color = 'rgb(27, 65, 136)';
  addShadow();
});
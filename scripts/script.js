// ---------------- constantes globais -------------------
const startGame = document.querySelector('#start-game');
const sectionGame = document.querySelector('#game');
const pokemonImg = document.querySelector('#pokemon');
const titlePokemon = document.querySelector('#text')
const inputAnswer = document.querySelector('#answer');
const sendButton = document.querySelector('#send');
const restartNextButton = document.querySelector('#restart');

// Botão "Go" para iniciar o jogo
startGame.addEventListener('click', () => {
  startGame.style.display = 'none';
  sectionGame.style.display = 'block';
})

// Imagem de sombra do jogo
function addShadow() {
  const randomPokemon = Math.round(Math.random() * 9);
  pokemonImg.src = pokemons[randomPokemon].shadow;
  titlePokemon.innerText = pokemons[randomPokemon].name
}
addShadow();

console.log(titlePokemon.innerText);

//Função que retorna o resultado do acerto e erro;
send.addEventListener('click', () => {
  if (inputAnswer.value === titlePokemon.innerText.toLowerCase()) {
    const image = pokemons.find((pokemon) => 
      titlePokemon.innerText === pokemon.name);
    pokemonImg.src = image.img;
    restartNextButton.innerText = 'Parabéns, você acertou! Vamos para o próximo Pokémon?'
  } else {
    restartNextButton.style.color = 'rgb(209, 19, 19)';
    restartNextButton.innerText = 'Errado! Vamos tentar novamente?';
  }
});

// Tentar outros pokemons
restartNextButton.addEventListener('click', () => {
  inputAnswer.value = '';
  restartNextButton.innerText = 'Então, qual é o Pokémon?'
  restartNextButton.style.color = 'rgb(27, 65, 136)';
  addShadow();
});
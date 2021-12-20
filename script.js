// constantes globais;
const imgPokemon = document.querySelector('#pokemon')
const input = document.querySelector('#answer');
const nextRestar = document.querySelector('#restart');
const namePokemon = document.querySelector('#text');
const buttonStart = document.querySelector('#button');
const startGame = document.querySelector('#start');
const game = document.querySelector('#game');

// iniciar o jogo
startGame.addEventListener('click', () => {
  buttonStart.style.display = 'none';
  game.style.display = 'block';
  nextRestar.style.marginTop = '23px'
})

// pokemon aleatorio
function randomPokemon() {
  const randomImg = Math.round(Math.random() * 9);
  const img = pokemons[randomImg].shadow;
  const name = pokemons[randomImg].name;
  imgPokemon.src = img;
  namePokemon.innerText = name;
}
randomPokemon();

// envio de resposta;
const sendButton = document.querySelector('#send');

sendButton.addEventListener('click', () => {
  if (input.value === 'Eevee') {;
    imgPokemon.src = pokemons[0].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else if (input.value === 'Chimchar') {;
    imgPokemon.src = pokemons[1].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else if (input.value === 'Entei') {;
    imgPokemon.src = pokemons[2].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  } 
  else if (input.value === 'Gardevoir') {;
    imgPokemon.src = pokemons[3].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else if (input.value === 'Minun') {;
    imgPokemon.src = pokemons[4].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else if (input.value === 'Teddiursa') {;
    imgPokemon.src = pokemons[5].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else if (input.value === 'Bayleef') {;
    imgPokemon.src = pokemons[6].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else if (input.value === 'Palkia') {;
    imgPokemon.src = pokemons[7].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else if (input.value === 'Psyduck') {;
    imgPokemon.src = pokemons[8].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else if (input.value === 'Riolu') {;
    imgPokemon.src = pokemons[9].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else {
    restart.innerText = 'Errado! Tente novamente';
  }
})

nextRestar.addEventListener('click', () => {
  randomPokemon();
  restart.innerText = 'Então, qual é o Pokemon?';
  input.value = '';
});

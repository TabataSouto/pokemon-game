// objeto com pokemons
const pokemons = [{
  name: 'Eevee',
  img: '/images/eevee.png',
  shadow: '/images/eevee-sombra.png',
},
{
  name: 'Chimchar',
  img: '/images/chimchar.png',
  shadow: '/images/chimchar-sombra.png',
},
{
  name: 'Entei',
  img: '/images/entei.png',
  shadow: '/images/entei-sombras.png',
},
{
  name: 'Gardevoir',
  img: '/images/gardevoir.png',
  shadow: '/images/gardevoir-sombra.png',
},
{
  name: 'Minun',
  img: '/images/minun.png',
  shadow: '/images/minun-sombra.png',
},
{
  name: 'Teddiursa',
  img: '/images/teddiursa.png',
  shadow: '/images/teddiursa-sombra.png',
},
{
  name: 'Bayleef',
  img: '/images/bayleef.png',
  shadow: '/images/bayleef-sombra.png',
},
{
  name: 'Palkia',
  img: '/images/palkia.png',
  shadow: '/images/palkia-sombra.png',
},
{
  name: 'Psyduck',
  img: '/images/psyduck.png',
  shadow: '/images/psyduck-sombra.png',
},
{
  name: 'Riolu',
  img: '/images/riolu.png',
  shadow: '/images/riolu-sombra.png',
},
{
  name: 'Pokemon Chorando',
  img: '/images/pokemon-cry.png',
},
];

// -----------------------------------------------------------------

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
  if (input.value === (pokemons[0].name).toLowerCase().toUpperCase()) {;
    imgPokemon.src = pokemons[0].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else if (input.value === (pokemons[1].name).toLowerCase().toUpperCase()) {;
    imgPokemon.src = pokemons[1].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else if (input.value === (pokemons[2].name).toLowerCase()) {;
    imgPokemon.src = pokemons[2].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  } 
  else if (input.value === (pokemons[3].name).toLowerCase().toUpperCase()) {;
    imgPokemon.src = pokemons[3].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else if (input.value === (pokemons[4].name).toLowerCase().toUpperCase()) {;
    imgPokemon.src = pokemons[4].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else if (input.value === (pokemons[5].name).toLowerCase().toUpperCase()) {;
    imgPokemon.src = pokemons[5].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else if (input.value === (pokemons[6].name).toLowerCase().toUpperCase()) {;
    imgPokemon.src = pokemons[6].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else if (input.value === (pokemons[7].name).toLowerCase().toUpperCase()) {;
    imgPokemon.src = pokemons[7].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else if (input.value === (pokemons[8].name).toLowerCase().toUpperCase()) {;
    imgPokemon.src = pokemons[8].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else if (input.value === (pokemons[9].name).toLowerCase().toUpperCase()) {;
    imgPokemon.src = pokemons[9].img;
    restart.innerText = 'Parabéns! Vamos para o próximo Pokemon?';
  }
  else {
    imgPokemon.src = pokemons[10].img;
    restart.style.color = 'red';
    restart.style.fontWeight = '800';
    restart.innerText = 'Errado! Tente novamente';
  }
})

nextRestar.addEventListener('click', () => {
  randomPokemon();
  restart.style.color = 'black';
  restart.style.fontWeight = '0';
  restart.innerText = 'Então, qual é o Pokemon?';
  input.value = '';
});

// constantes globais;
const start = document.querySelector('#start');
const buttonStart = document.querySelector('#button');
const game = document.querySelector('#game');
const answers = document.querySelector('#answers');

// iniciar o jogo;
start.addEventListener('click', () => {
  buttonStart.style.display = 'none';
  game.style.display = 'block';
});

// items do jogo;
// ans1, ans2 e ans3 são as opções de respostas com o nome de pokemons;
// name é o nome do pokemon da imagem;
// imagem do pokemon com sombra
function addItems(ans1, ans2, ans3, name, img) {
  answer1.innerText = ans1;
  answer2.innerText = ans2;
  answer3.innerText = ans3;
  text.innerText = name;
  pokemon.src = img;
}
addItems('Pikachu', 'Zubat', 'Wanriky', 'Pikachu', 'images/pikachu-sombra.png');

// opções de pokemon;
addItems('Pikachu', 'Zubat', 'Wanriky', 'Pikachu', 'images/pikachu-sombra.png');
addItems('Pikachu', 'Zubat', 'Wanriky', 'Pikachu', 'images/pikachu-sombra.png');
addItems('Pikachu', 'Zubat', 'Wanriky', 'Pikachu', 'images/pikachu-sombra.png');
addItems('Pikachu', 'Zubat', 'Wanriky', 'Pikachu', 'images/pikachu-sombra.png');

// jogo;
answers.addEventListener('click', selectedAnswer);

function selectedAnswer(event){
  const click = event.target.innerText;
  const pokemon = document.querySelector('#pokemon');
  const correctAnswer = document.querySelector('#text');
  if (click === correctAnswer.innerText) {
    pokemon.src = './images/pikachu.png';
  }
}

// próximo pokemon;

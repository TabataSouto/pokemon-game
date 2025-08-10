export const sortedPokemons = (pokemons) => {
  return pokemons.slice().sort(() => Math.random() - 0.5);
}
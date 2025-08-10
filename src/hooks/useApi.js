import { ApiContext } from "@/context/ApiProvider";
import { useContext } from "react";

const useApi = () => {
  const { loading, pokemons, playerName, setPlayerName } = useContext(ApiContext)

  return {
    pokemons,
    loading,
    playerName,
    setPlayerName,
  }
}

export default useApi;

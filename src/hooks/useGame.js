import { GameContext } from "@/context/GameProvider";
import { useContext } from "react";

const useGame = () => {
  const { setReload, reload, questions, answer } =
    useContext(GameContext);

  return {
    setReload,
    reload,
    questions,
    answer,
  };
};

export default useGame;

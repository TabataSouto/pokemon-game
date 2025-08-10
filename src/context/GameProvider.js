"use client";

import React from "react";
import { createContext, useEffect, useState } from "react";
import useApi from "@/hooks/useApi";
import PropTypes from "prop-types";
import { sortedPokemons } from "@/helpes/utils";

export const GameContext = createContext({
  setReload: () => { },
  questions: [],
  answer: null,
});

const GameProvider = ({ children }) => {
  const { pokemons } = useApi();

  const [reload, setReload] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    if (!pokemons || !pokemons.length) return;

    formatedGame();
  }, [reload, pokemons]);

  const formatedGame = () => {
    const sorted = sortedPokemons(pokemons);
  
    setAnswer(sorted[0]);
    setQuestions(sortedPokemons(sorted.slice(0, 3)).map(({ name }) => name));
  }

  const values = {
    setReload,
    reload,
    questions,
    answer,
  }

  return (
    <GameContext.Provider value={values}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


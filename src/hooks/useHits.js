"use client";

import PropTypes from "prop-types";
import { useState } from "react";

const useHits = () => {
  const [numberHits, setNumberHits] = useState(0);

  const saveHits = (player) => {
    const stored = localStorage.getItem("players");
    const players = stored ? JSON.parse(stored) : [];
    players.push({ name: player, hits: numberHits });
    localStorage.setItem('players', JSON.stringify(players));
    setNumberHits(0);
  };

  const countHits = () => {
    setNumberHits(numberHits + 1);
  };

  const getHits = () => {
    const stored = localStorage.getItem("players");
    if (!stored) return [];
    return JSON.parse(stored);
  };

  return {
    countHits,
    saveHits,
    getHits,
  };
};

export default useHits;

useHits.propTypes = {
  player: PropTypes.string,
};

"use client";
import React from "react";
import axios from "axios";
import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";

export const ApiContext = createContext({
  pokeNames: [],
  pokeImages: [],
  playerName: "",
  setPlayerName: () => {},
  loading: false,
});

const ApiProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
      
      const pokemons_arr = [];

      for (const result of data.results) {
        const { data: images } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${result.name}`);

        pokemons_arr.push({
          name: result.name,
          image: images.sprites.other["official-artwork"].front_default,
        });
      }''
      
      setPokemons(pokemons_arr);
    } catch (err) {
      setError(err.message || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }

  const values = {
    loading,
    pokemons,
    playerName,
    setPlayerName,
    error,
  };

  return (
    <ApiContext.Provider value={values}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
}; 

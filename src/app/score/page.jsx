"use client";

import Loading from "@/components/GlobalLoading";
import useApi from "@/hooks/useApi";
import useHits from "@/hooks/useHits";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Score = () => {
  const { playerName } = useApi();
  const { getHits } = useHits();
  const router = useRouter();

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (!playerName) router.push("/");
    setPlayers(getHits(playerName));
  }, []);

  console.log("players", players);

  return (
    <div>
      {!players.length ? (
        <Loading />
      ) : (
        <>
          {players.map(({ name, hits }, index) => (
            <div key={index}>
              <p>
                Jogador: <span>{name}</span>, Acertos: {hits}
              </p>
            </div>
          ))}
        </>
      )}

      <button onClick={() => router.push("/")}>Jogar novamente</button>
    </div>
  );
};

export default Score;

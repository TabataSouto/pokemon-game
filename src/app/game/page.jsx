"use client";

import React, { useEffect, useRef, useState } from "react";
import useGame from "@/hooks/useGame";
import Image from "next/image";
import Loading from "@/components/GlobalLoading";
import useHits from "@/hooks/useHits";
import { useRouter } from "next/navigation";
import useApi from "@/hooks/useApi";

const Game = () => {
  const { questions, answer, reload, setReload } = useGame();
  const { playerName } = useApi();
  const { countHits, saveHits } = useHits();
  const timeoutRef = useRef(null);
  const router = useRouter();

  const [questionsQtd, setQuestionsQtd] = useState(0);
  const [brightness, setBrightness] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!playerName) router.push("/");
  }, []);

  const handleQuestion = (e) => {
    const pokemonName = e.target.name;
    setClicked(pokemonName);
    setBrightness(1);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (pokemonName === answer.name) {
      countHits();
    }

    timeoutRef.current = setTimeout(() => {
      if (questionsQtd >= 10) {
        saveHits(playerName);
        router.push("/score");
      } else {
        console.log("Executou depois de 3s!");
        setBrightness(0);
        setReload(!reload);
        setQuestionsQtd(questionsQtd + 1);
        setClicked(null);
      }
    }, 2000);
  };

  return (
    <div>
      {!answer ? (
        <Loading />
      ) : (
        <div style={{ position: "relative", width: "100%", height: "300px" }}>
          <Image
            src={answer?.image}
            alt="Descrição da imagem"
            fill
            style={{
              objectFit: "contain",
              filter: `brightness(${brightness})`,
            }}
          />
          {clicked && <p>É o {answer.name}</p>}
        </div>
      )}
      {!questions ? (
        <Loading />
      ) : (
        <div style={{ display: "flex", gap: "10px" }}>
          {questions.map((question, index) => {
            let bgColor = "";
            let color = "";

            if (clicked) {
              if (question === answer.name) {
                bgColor = "green";
                color = "white";
              } else {
                bgColor = "red";
                color = "white";
              }
            }

            return (
              <button
                key={index}
                name={question}
                onClick={handleQuestion}
                style={{
                  backgroundColor: bgColor,
                  color: color,
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: clicked ? "default" : "pointer",
                }}
              >
                {question}
              </button>
            );
          })}
        </div>
      )}
      {/* <button
        onClick={() => {
          setReload(!reload);
          setQuestionsQtd(questionsQtd + 1);
        }}
      >
        Próximo
      </button> */}
    </div>
  );
};

export default Game;

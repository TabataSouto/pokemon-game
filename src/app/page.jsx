"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import useApi from "@/hooks/useApi";

import * as S from "./styles";

export default function Home() {
  const { setPlayerName, playerName } = useApi();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/game");
  };

  return (
    <S.Container>
      <S.Title>Quem é esse</S.Title>
      <Image
        src="/logo.svg"
        width="500"
        height="200"
        alt="logo"
        className={S.Logo}
      />
      <S.Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome jogador"
          onChange={(e) => setPlayerName(e.target.value)}
          required
        />
        <button type="submit" disabled={playerName.length < 4}>
          Começar
        </button>
      </S.Form>
    </S.Container>
  );
}

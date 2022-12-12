import { useState } from "react";
import styled from "styled-components";
import api from "./utils/api";

import Pokemon from "./components/Pokemon";
import SearchPokemon from "./components/SearchPokemon";
import { useToast } from "@chakra-ui/react";
import Image from "../public/images/pokedex.png";

export default function App() {
  const [pokemon, setPokemon] = useState(null as any);
  const [isLoading, setIsLoading] = useState(false);
  const [researchedPokemon, setResearchedPokemon] = useState("");
  const toast = useToast();

  const handleSearchPokemon = (e: any) => {
    setResearchedPokemon(e.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!researchedPokemon) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await api.get(
        `/pokemon/${researchedPokemon.toLowerCase()}`
      );
      setPokemon(response.data);
      setResearchedPokemon("");
      setIsLoading(false);
    } catch (err: any) {
      setPokemon(null);
      setIsLoading(false);
      toast({
        title: `Erro ${err.response.status}`,
        description: `Não foi possível concluir a sua requisição!`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Container>
        <Pokedex>
          <Pokeimage src={Image} />
          <SearchPokemon
            handleSearchPokemon={handleSearchPokemon}
            handleSubmit={handleSubmit}
            researchedPokemon={researchedPokemon}
            isLoading={isLoading}
          />
        </Pokedex>
        {pokemon ? <Pokemon pokemon={pokemon} /> : <></>}
      </Container>
    </>
  );
}

export const Pokedex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  background: rgb(211, 10, 64);
  background: radial-gradient(
    circle,
    rgba(211, 10, 64, 1) 0%,
    rgba(60, 10, 23, 1) 100%
  );
`;

export const Pokeimage = styled.img`
  width: 350px;
`;

import { useState } from "react";
import styled from "styled-components";
import api from "./utils/api";
import { Spinner, Input, Button } from "@chakra-ui/react";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const [pokemon, setPokemon] = useState(null as any);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null || "");
  const [researchedPokemon, setResearchedPokemon] = useState("");

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
      const response = await api.get(`/pokemon/${researchedPokemon}`);
      setPokemon(response.data);
      setError("");
      setIsLoading(false);
    } catch (err) {
      setPokemon(null);
      setError("Pókemon não encontrado.");
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          w="400px"
          type="text"
          value={researchedPokemon}
          onChange={handleSearchPokemon}
          placeholder="Digite o nome do pokemon"
        />
        <Button type="submit">
          {isLoading ? (
            <>
              <Spinner />
            </>
          ) : (
            <>Procurar</>
          )}
        </Button>
      </Form>

      {pokemon ? (
        <Container>
          <PokemonCard
            name={pokemon.name}
            id={pokemon.id}
            image={pokemon.sprites["front_default"]}
            weight={pokemon.weight * 10}
            height={pokemon.height}
          />
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem auto;
  gap: 1rem;
`;

export const Container = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem auto;
`;

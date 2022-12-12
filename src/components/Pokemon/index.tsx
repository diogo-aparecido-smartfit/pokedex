import { useDisclosure } from "@chakra-ui/react";
import { OpenModal, PokemonInfo } from "./styles";
import PokemonCard from "../PokemonCard";
import PokemonModal from "../PokemonModal";

interface PokemonProps {
  pokemon: any;
}

export default function Pokemon({ pokemon }: PokemonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <PokemonInfo>
        <OpenModal onClick={onOpen}>
          <PokemonCard
            name={pokemon.name}
            id={pokemon.id}
            image={
              pokemon.sprites.versions["generation-v"]["black-white"][
                "animated"
              ]["front_default"]
            }
            weight={pokemon.weight * 10}
            height={pokemon.height}
          />
        </OpenModal>
      </PokemonInfo>
      <PokemonModal onClose={onClose} isOpen={isOpen} pokemon={pokemon} />
    </>
  );
}

import {
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { PokemonId } from "./styles";
import "./styles.css";

interface PokemonModalProps {
  onClose: () => void;
  isOpen: boolean;
  pokemon: any;
}

export default function PokemonModal({
  onClose,
  isOpen,
  pokemon,
}: PokemonModalProps) {
  const PokemonType = pokemon.types.map(
    (pokemontype: any) => pokemontype.type.name
  );

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent background="gray.900">
          <ModalHeader
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            className={PokemonType[0]}
            // background={}
          >
            {/* <PokemonContainer className={PokemonType[0]} /> */}
            <Image
              display="flex"
              alignItems="center"
              justifyContent="center"
              margin="0 auto"
              w="70%"
              src={pokemon.sprites.other["dream_world"]["front_default"]}
            />
          </ModalHeader>
          <ModalCloseButton
            color="gray.900"
            transition="0.2s"
            _hover={{ color: "#fff" }}
          />
          <ModalBody display="flex" flexDirection="column">
            <Text
              fontWeight="800"
              fontSize="36px"
              alignItems="center"
              justifyContent="center"
              margin="0 auto"
              background="none"
              className={PokemonType[0]}
            >
              {pokemon.name.toUpperCase()}
            </Text>
            <Text
              fontWeight="800"
              fontSize="18px"
              alignItems="center"
              justifyContent="center"
              margin="0 auto"
              color="white"
            >
              <PokemonId className={PokemonType[0]}>#</PokemonId>
              {("000" + pokemon.id).slice(-4)}
            </Text>
            <HStack justifyContent="center" mt="1.5rem" gap="1rem">
              {pokemon.types.map((pokemontype: any) => (
                <span key={pokemontype.type.name}>
                  <Image
                    src={`../../../public/images/${pokemontype.type.name}.svg`}
                  />
                </span>
              ))}
            </HStack>
          </ModalBody>
          {/* <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}

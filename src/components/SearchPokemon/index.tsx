import { Button, Input, Spinner } from "@chakra-ui/react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { Form } from "./styles";

interface SearchPokemonProps {
  handleSearchPokemon: (e: any) => void;
  handleSubmit: (event: any) => Promise<void>;
  researchedPokemon: string;
  isLoading: boolean;
}

export default function SearchPokemon({
  handleSearchPokemon,
  handleSubmit,
  researchedPokemon,
  isLoading,
}: SearchPokemonProps) {
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        w="170px"
        background="#700622"
        border="none"
        focusBorderColor="white"
        textColor="#FFF"
        _placeholder={{ color: "gray.300" }}
        type="text"
        value={researchedPokemon}
        onChange={handleSearchPokemon}
        placeholder="Nome ou ID"
      />
      <Button type="submit" _hover={{ bg: "#aa0632", color: "white" }}>
        {isLoading ? (
          <>
            <Spinner />
          </>
        ) : (
          <>
            <RxMagnifyingGlass />
          </>
        )}
      </Button>
    </Form>
  );
}

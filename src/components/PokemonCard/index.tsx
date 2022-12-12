import { Container, Image, Text } from "./styles";

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  height?: number;
  weight?: number;
}

export default function PokemonCard({
  id,
  name,
  image,
  height,
  weight,
}: PokemonCardProps) {
  return (
    <Container>
      <Image src={image} alt={name} />
      <Text>
        {name
          .toLowerCase()
          .replace(/(?:^|\s)(?!da|de|do)\S/g, (l) => l.toUpperCase())}
      </Text>
    </Container>
  );
}

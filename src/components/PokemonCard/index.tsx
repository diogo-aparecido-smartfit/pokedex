import styled from "styled-components";

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
`;

export const Image = styled.img`
  display: flex;
  width: 80px;
  height: 80px;
  margin: 0 1rem;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    transform: scale(1.5);
  }
`;

export const Text = styled.h1`
  display: flex;
  position: relative;
  margin: 2.5rem 0 0 0.5rem;
  color: #d30a40;
  font-size: 24px;
  font-weight: 800;
`;

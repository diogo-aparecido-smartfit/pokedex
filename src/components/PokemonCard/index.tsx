import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  height: number;
  weight: number;
}

export default function PokemonCard({
  id,
  name,
  image,
  height,
  weight,
}: PokemonCardProps) {
  return (
    <Card maxW="300px">
      <CardBody
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="0 auto"
      >
        <Image src={image} alt={name} borderRadius="lg" marginRight="4" />
        <Stack display="flex" alignItems="center" mt="6" mr="4" spacing="3">
          <Heading size="md">{name.toUpperCase()}</Heading>
          <Text color="blue.600" fontSize="2xl">
            ID: {id}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter display="flex" justifyContent="center">
        <Button variant="solid" colorScheme="blue">
          Mais informações
        </Button>
      </CardFooter>
    </Card>
  );
}

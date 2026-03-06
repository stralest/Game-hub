import GameCard from "@/components/GameCard";
import GameCardContainer from "@/components/GameCardContainer";
import type { Game } from "@/hooks/useGames";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  favoriteGames: Game[];
  onToggleFavorite: (game: Game) => void;
}

const FavoriteGames = ({ favoriteGames, onToggleFavorite }: Props) => {
  if (favoriteGames.length === 0)
    return (
      <Flex height="60vh" align="center" justify="center">
        <Text fontSize="3xl" fontWeight="bold">
          No favorite games yet.
        </Text>
      </Flex>
    );

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={5}
        spacing={4}
      >
        {favoriteGames.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard
              game={game}
              favoriteGames={favoriteGames}
              onToggleFavorites={onToggleFavorite}
            ></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default FavoriteGames;

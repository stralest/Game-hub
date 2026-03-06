import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";

interface Props {
  game: Game;
  favoriteGames: Game[];
  onToggleFavorites: (game: Game) => void;
}

const GameCard = ({ game, favoriteGames, onToggleFavorites }: Props) => {
  const isFavorite = favoriteGames.some((favGame) => favGame.id === game.id);

  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize={"2xl"}>
          {game.name}
          <HStack mt={3} justifyContent={"space-between"}>
            <Emoji rating={game.rating_top} />
            <IconButton
              aria-label="favorite"
              size="sm"
              variant="ghost"
              icon={isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
              onClick={() => onToggleFavorites(game)}
            />
          </HStack>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import type { Game } from "./hooks/useGames";
import { Route, Routes, useLocation } from "react-router-dom";
import FavoriteGames from "./pages/FavoriteGames";
import { Link } from "react-router-dom";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [favoriteGames, setFavoriteGames] = useState<Game[]>([]);
  const location = useLocation();
  const isFavoritePage = location.pathname === "/favorites";

  const handleFavoriteGames = (game: Game) => {
    const isFavorite = favoriteGames.some((favGame) => favGame.id === game.id);

    if (isFavorite) {
      setFavoriteGames(
        favoriteGames.filter((favGame) => favGame.id !== game.id),
      );
    } else {
      setFavoriteGames([...favoriteGames, game]);
    }
  };

  return (
    <>
      <Grid
        templateAreas={
          isFavoritePage
            ? {
                base: `"nav" "main"`,
                lg: `"nav nav" "main main"`,
              }
            : {
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
              }
        }
        templateColumns={
          isFavoritePage
            ? {
                base: "1fr",
                lg: "1fr",
              }
            : {
                base: "1fr",
                lg: "200px 1fr",
              }
        }
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery((prev) => ({ ...prev, searchText }))
            }
          />
          <HStack mx={5} spacing={4}>
            <Button as={Link} to="/" variant="outline">
              Home
            </Button>
            <Button as={Link} to="/favorites" variant="outline">
              Favorites ({favoriteGames.length})
            </Button>
          </HStack>
        </GridItem>
        {!isFavoritePage && (
          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              <GenresList
                selectedGenre={gameQuery.genre}
                onSelectGenre={(genre) =>
                  setGameQuery((prev) => ({ ...prev, genre }))
                }
              />
            </GridItem>
          </Show>
        )}
        <GridItem area="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <GameHeading gameQuery={gameQuery} />
                  <HStack spacing={5} paddingLeft={5}>
                    <PlatformSelector
                      selectedPlatform={gameQuery.platform}
                      onSelectPlatform={(platform) =>
                        setGameQuery((prev) => ({ ...prev, platform }))
                      }
                    />
                    <SortSelector
                      sortOrder={gameQuery.sortOrder}
                      onSelectedSortOrder={(sortOrder) =>
                        setGameQuery((prev) => ({ ...prev, sortOrder }))
                      }
                    />
                  </HStack>
                  <GameGrid
                    gameQuery={gameQuery}
                    favoriteGames={favoriteGames}
                    onToggleFavorites={handleFavoriteGames}
                  />
                </>
              }
            ></Route>
            <Route
              path="/favorites"
              element={
                <FavoriteGames
                  favoriteGames={favoriteGames}
                  onToggleFavorite={handleFavoriteGames}
                />
              }
            ></Route>
          </Routes>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

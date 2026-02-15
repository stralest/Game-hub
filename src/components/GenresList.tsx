import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

const GenresList = () => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  
  return (
    <>
      <List>
        {isLoading && <Spinner/>}
        {data.map((genre) => (
          <li key={genre.id}>
            <ListItem paddingY="5px">
              <HStack>
                <Image boxSize="60px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
                <Text fontSize="lg">{genre.name}</Text>
              </HStack>
            </ListItem>
          </li>
        ))}
      </List>
    </>
  );
};

export default GenresList;

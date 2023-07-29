import { useGetPlaylistsQuery } from "@/entities/Playlist";
import { HStack } from "@/shared/ui/Stack";

export const Playlists = () => {
  const { data: playlists, isLoading } = useGetPlaylistsQuery();

  if (!playlists) {
    return <div>error</div>;
  }

  return (
    <HStack gap="4">
      {playlists.map((playlist) => (
        <div key={playlist.id}>{playlist.name}</div>
      ))}
    </HStack>
  );
};

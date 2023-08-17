import { useGetPlaylistsQuery } from "@/entities/Playlist";
import { HStack } from "@/shared/ui/Stack";
import { EditPlaylist } from "@/widgets/EditPlaylist";

export const Playlists = () => {
  const { data: playlists = [], isLoading } = useGetPlaylistsQuery();

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <HStack gap="4">
      {playlists.map((playlist) => (
        <div>
          <div key={playlist.id}>{playlist.name}</div>
          <EditPlaylist id={playlist.id} />
        </div>
      ))}
    </HStack>
  );
};

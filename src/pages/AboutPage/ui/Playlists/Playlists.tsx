import { useGetPlaylistsQuery } from "@/entities/Playlist";
import { HStack } from "@/shared/ui/Stack";
import { EditPlaylist } from "@/widgets/EditPlaylist";
import { DeletePlaylist } from "@/features/Playlist/DeletePlaylist";

export const Playlists = () => {
  const { data: playlists = [], isLoading } = useGetPlaylistsQuery();

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <HStack gap="4">
      {playlists.map((playlist) => (
        <div key={playlist.id}>
          <div>{playlist.name}</div>
          <DeletePlaylist id={playlist.id} />
          <EditPlaylist id={playlist.id} />
        </div>
      ))}
    </HStack>
  );
};

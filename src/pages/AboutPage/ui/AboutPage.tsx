import { CreatePlaylist } from "@/features/Playlist/CreatePlaylist";
import { Musics } from "@/widgets/Musics";
import { Playlists } from "./Playlists/Playlists";
import { Player } from "@/entities/Player";

const AboutPage = () => (
  <div data-testid="AboutPage">
    About Page Musics
    <Player />
    <CreatePlaylist />
    <Playlists />
    <Musics />
  </div>
);

export { AboutPage };

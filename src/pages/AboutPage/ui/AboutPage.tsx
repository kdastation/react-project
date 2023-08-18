import { CreatePlaylist } from "@/features/Playlist/CreatePlaylist";
import { Musics } from "@/widgets/Musics";
import { Playlists } from "./Playlists/Playlists";

const AboutPage = () => (
  <div data-testid="AboutPage">
    About Page Musics
    <CreatePlaylist />
    <Playlists />
    <Musics />
  </div>
);

export { AboutPage };

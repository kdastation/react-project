import { CreatePlaylist } from "@/features/CreatePlaylist";
import { Musics } from "@/widgets/Musics";
import { Playlists } from "@/widgets/Playlists";

const AboutPage = () => (
  <div data-testid="AboutPage">
    About Page Musics
    <CreatePlaylist />
    <Playlists />
    <Musics />
  </div>
);

export { AboutPage };

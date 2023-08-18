import ReactPlayer, { ReactPlayerProps } from "react-player";

export const Player = (props: ReactPlayerProps) => {
  const a = 1;

  return <ReactPlayer height={100} {...props} controls />;
};

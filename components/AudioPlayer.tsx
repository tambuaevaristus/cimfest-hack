// components/AudioPlayer.tsx

import ReactPlayer from "react-player";
import { useRef, useState } from "react";
// components/AudioPlayer.tsx
// components/AudioPlayer.tsx

import { PlayerControls } from "./PlayerControls";

import { AudioDetails } from "./AudioDetails";

type Props = {
  url?: string;
  title?: string;
  author?: string;
  thumbnail?: string;
};

export const AudioPlayer = ({ url, title, author, thumbnail }: Props) => {
  const playerRef = useRef<ReactPlayer | null>(null);
  // components/AudioPlayer.tsx

  const [playing, setPlaying] = useState<boolean>(false);
  const [muted, setMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [progress, setProgress] = useState<number>(0);
  const [loop, setLoop] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);

  // components/AudioPlayer.tsx

  // event handlers for custom controls

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const toggleMute = () => {
    setMuted((prevMuted) => !prevMuted);
  };

  const handleProgress = (state: any) => {
    setProgress(state.played);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const toggleLoop = () => {
    setLoop((prevLoop) => !prevLoop);
  };

  return (
    <div className="fixed backdrop-blur-3xl bottom-0 left-0 w-full z-30">
      <div className="hidden">
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={playing}
          volume={volume}
          muted={muted}
          loop={loop}
          onPlay={handlePlay}
          onPause={handlePause}
          onProgress={handleProgress}
          onDuration={handleDuration}
        />
      </div>
      <div className="shadow bg-white/5 items-center p-2 flex w-full">
        <AudioDetails
          title={String(title)}
          author={String(author)}
          thumbnail={String(thumbnail)}
        />
        <PlayerControls
          playerRef={playerRef}
          playing={playing}
          volume={volume}
          muted={muted}
          progress={progress}
          duration={duration}
          loop={loop}
          // event handler props
          toggleMute={toggleMute}
          handlePlay={handlePlay}
          toggleLoop={toggleLoop}
          handlePause={handlePause}
          handleVolumeChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

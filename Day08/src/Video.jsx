import { useRef } from "react";

function Video() {
  const videoRef = useRef(null);

  function handleStart() {
    videoRef.current.play();
  }
  function handleStop() {
    videoRef.current.pause();
  }
  function handleRestart() {
    videoRef.current.currentTime = 0;
  }

  function handleSkipForward() {
    videoRef.current.currentTime += 4;
  }
  function handleSkipBackward() {
    videoRef.current.currentTime -= 4;
  }

  return (
    <>
      <video
        src="/example.mp4"
        controls
        ref={videoRef}
        width={600}
        height={400}
      ></video>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Pause</button>
        <button onClick={handleRestart}>Restart</button>
        <button onClick={handleSkipForward}>10S+</button>
        <button onClick={handleSkipBackward}>10S-</button>
      </div>
    </>
  );
}

export default Video;

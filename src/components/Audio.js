import { useRef } from "react";

const Audio = ({ src }) => {
  const audioRef = useRef();

  return (
    <div>
      <button
        type="button"
        onClick={() => audioRef.current.play()}
        className="btn-audio"
      ></button>
      <audio ref={audioRef} src={src}></audio>
    </div>
  );
};

export default Audio;

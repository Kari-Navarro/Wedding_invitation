import React, { useEffect, useRef, useState } from 'react';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause } from '@fortawesome/free-solid-svg-icons';

const Audio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className='section-audio'>
      <audio ref={audioRef} src="/audio/solamente.mp3" autoPlay loop />
      <button onClick={toggleMute} className='btn-audio'>
        {isMuted ? <FontAwesomeIcon icon={faCirclePlay} style={{color: "#4e1807",}} /> : <FontAwesomeIcon icon={faPause} style={{color: "#4e1807",}} /> }
      </button>
    </section>
  );
};

export default Audio;

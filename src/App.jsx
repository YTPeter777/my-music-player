import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const songs = [
  { title: "背景音樂 A", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { title: "背景音樂 B", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }
];

function App() {
  const [index, setIndex] = useState(0);
  const current = songs[index];

  return (
    <div style={{ maxWidth: 400, margin: "auto", textAlign: "center", padding: 20 }}>
      <h1>🎵 公開音樂播放器</h1>

      <div style={{ marginBottom: 10 }}>
        {songs.map((s, i) => (
          <button key={i} onClick={() => setIndex(i)} style={{ margin: 4 }}>
            {s.title}
          </button>
        ))}
      </div>

      <AudioPlayer
        src={current.url}
        onEnded={() => setIndex((i + 1) % songs.length)}
        showSkipControls
        onClickPrevious={() => setIndex(i => (i - 1 + songs.length) % songs.length)}
        onClickNext={() => setIndex(i => (i + 1) % songs.length)}
        style={{ borderRadius: 10 }}
      />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch("https://orangevalleycaa.org/api/videos").then(
        response => response.json()
      )
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header"> 
        <h1>aa</h1>
      </header>
      <div className="video-wrapper">
          {
            data.map(video => (
              <div key={video.id}>
                <h2>{video.name}</h2>
                <video controls src={video.video_url} />
              </div>
            ))
          }
      </div>

    </div>
  );
}

export default App;

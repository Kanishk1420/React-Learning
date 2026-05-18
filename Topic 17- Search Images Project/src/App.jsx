import React from "react";
import { fetchgifs, fetchphotos, fetchVideos } from "./api/mediaApi";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <button
        className="bg-green-400 px-4 py-2 m-5"
        onClick={async () => {
          const data = await fetchphotos("Anime");
          console.log(data.results);
        }}
      >
        Get Photos
      </button>
      <button
        className="bg-green-400 px-4 py-2 m-5"
        onClick={async () => {
          const data = await fetchVideos("Anime");
          console.log(data.videos);
        }}
      >
        Get Videos
      </button>
      <button
        className="bg-green-400 px-4 py-2 m-5"
        onClick={async () => {
          const data = await fetchgifs("Anime");
          console.log(data.results);
        }}
      >
        Get Gifs
      </button>
    </div>
  );
};

export default App;

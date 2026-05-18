import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY;

export async function fetchphotos(query, per_page = 20) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  return response.data;
}

export async function fetchVideos(query, per_page = 20) {
  const response = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, per_page },
    headers: { Authorization: PEXELS_KEY },
  });
  return response.data;
}
export async function fetchgifs(query, limit = 20) {
  {
    const response = await axios.get("https://tenor.googleapis.com/v2/search", {
      params: { q: query, key: TENOR_KEY, limit },
    });
    return response.data;
  }
}

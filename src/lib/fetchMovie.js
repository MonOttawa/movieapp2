export async function fetchMovie(title, apiKey) {
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
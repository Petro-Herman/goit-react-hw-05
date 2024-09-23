import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODgyMzRmZGYxZDM5ZDU1M2ZkMzYxNmI3ZDNhMGYzNCIsIm5iZiI6MTcyNzEwNDkwMC41OTY3ODgsInN1YiI6IjY2ZjA0NWUzOTJkMzk2ODUzODNiN2YwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ivkiS1QSpMdNnfccZyKkcDw6tNDgS13FWVfq4Rj13uU";

export async function fetchdata(page = 1, query = "", endPoint) {
  const params = {
    page,
    query,
  };
  const response = await axios.get(`${endPoint}`, { params });
  return response.data;
}

export async function getMovie(movieId) {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
}

export async function getInfo(movieId, endPoint) {
  const response = await axios.get(`/movie/${movieId}/${endPoint}`, {
    params: { language: "en-US" },
  });

  return response.data;
}

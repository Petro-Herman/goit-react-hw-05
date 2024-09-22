import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] = "Bearer //тут буде API//";

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

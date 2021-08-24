import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID zhrX0afSyIdESzV0h6VS7uyDgttM6EOYR5TmOjzga60",
  },
});

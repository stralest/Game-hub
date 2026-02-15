import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bb251b78d273421ea0bf6b0334e86e59",
  },
});

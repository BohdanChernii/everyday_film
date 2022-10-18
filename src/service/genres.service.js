import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const genresService = {
  get: () => axiosService(urls.posts)
}
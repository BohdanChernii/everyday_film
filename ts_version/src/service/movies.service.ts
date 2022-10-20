import {baseURL, urls} from "../configs";
import {AxiosRes, axiosService} from "./axios.service";
import {IMovie} from "../interfaces";


export const moviesService = {
  changePage: (page: number|string|null): AxiosRes<IMovie[]> => axiosService(`${baseURL}/${urls.page}${page}`,)
}
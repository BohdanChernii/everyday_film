import {baseURL, urls} from "../configs";
import {axiosService} from "./axios.service";

export const moviesService ={
  changePage:(page)=>axiosService(`${baseURL}/${urls.page}${page}`,)
}
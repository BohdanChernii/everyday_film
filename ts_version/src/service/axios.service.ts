import axios, {AxiosResponse} from "axios";

import {baseURL} from "../configs";


export type AxiosRes<T> = Promise<AxiosResponse>

export const axiosService = axios.create({baseURL})
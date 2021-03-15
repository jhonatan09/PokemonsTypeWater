import axios from "axios"

export const URL_API = "https://pokeapi.co/api/v2";


export function AXIOS () {
    return axios.create({
        baseURL: URL_API,
    })
}


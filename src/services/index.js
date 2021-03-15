import {URL_API, AXIOS} from "./configURL";

class Auth {
    
    async SearchPokemonsApi() {
        try {
            const response = await AXIOS().get(`${URL_API}/ability/water-absorb`)
            return response.data
        }catch(error){
            return error
        }
    }

    async SearchPokemons(url) {
        console.log(url)
        try {
            const response = await AXIOS().get(url)
            return response.data
        }catch(error){
            return error
        }
    }

    async SearchPokemonsInput(name) {
        try {
            const response = await AXIOS().get(`${URL_API}/pokemon/${name}`)
            return response.data
        }catch(error){
            return null
        }
    }
}

export default new Auth();
import axios from 'axios'

class ApiCrypto {

    API = axios.create({
        baseURL: 'https://api.coingecko.com/api/v3'
    })


    listCoins(currency) {

        return this.API.get(`/coins/markets?vs_currency=${currency}`)
    }



}

export default new ApiCrypto()

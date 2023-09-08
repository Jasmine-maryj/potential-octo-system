import axios from "axios";

const ARS_BASE_REST_API_URL = "http://localhost:3000/airports";



class AirportService{

    createAirport(){
        return axios.get(ARS_BASE_REST_API_URL)
    }
}

export default new AirportService()
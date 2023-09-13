import axios from "axios";

const ARS_BASE_REST_API_URL = "http://localhost:8080/api/v1";



class AirportService{

    getAllAirports(){
        return axios.get(ARS_BASE_REST_API_URL+"/airports/all");
    }

    createAiport(airport){
        return axios.post(ARS_BASE_REST_API_URL+"/airports/add", airport);
    }
}

export default new AirportService()
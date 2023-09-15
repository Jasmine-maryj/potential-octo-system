import axios from "axios";

const ARS_BASE_REST_API_URL = "http://localhost:8080/api/v1";



class AirportService{

    getAllAirports(){
        return axios.get(ARS_BASE_REST_API_URL+"/airports/all");
    }

    createAirport(airport){
        return axios.post(ARS_BASE_REST_API_URL+"/airports/add", airport);
    }

    createFlight(flight, airportCode) {
        const url = `${ARS_BASE_REST_API_URL}/flights/add?code=${airportCode}`;
        return axios.post(url, flight);
    }
}

export default new AirportService()
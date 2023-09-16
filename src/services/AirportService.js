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

    updateAirport(airport, airportCode){
        const url = `${ARS_BASE_REST_API_URL}/airports/update?code=${airportCode}`;
        return axios.put(url, airport);
    }

    getAirportByCode(airportCode){
        return axios.get(ARS_BASE_REST_API_URL+"/airports/get/"+airportCode)
    }

    getFlightByFlightNumber(flightNumber){
        return axios.get(ARS_BASE_REST_API_URL+"/flights/get/"+flightNumber);
    }

    updateFlight(flight, flightNumber){
        const url = `${ARS_BASE_REST_API_URL}/flights/update?flightNumber=${flightNumber}`;
        return axios.put(url, flight)
    }

    deleteAirport(airportCode){
        return axios.delete(ARS_BASE_REST_API_URL+"/airports/"+airportCode);
    }

    removeFlightFromAirport(airportCode, flightNumber){
        const url = `${ARS_BASE_REST_API_URL}/airports/${airportCode}/flights/${flightNumber}`;
        return axios.delete(url);
    }
}

export default new AirportService()
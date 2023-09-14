import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AirportService from "../services/AirportService";

export default function AddFlight() {

    const [flightName, setFlightName] = useState("")
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [availableSeats, setAvailableSeats] = useState("")
    const [arrivalTime, setArrivalTime] = useState("")
    const [departureTime, setDepartureTime] = useState("")

    
    const SubmitFlightData = (e) => {
        e.preventDefault();

        const navigate = useNavigate();
        
        const flight = {
            flightName,
            origin,
            destination,
            availableSeats,
            arrivalTime,
            departureTime,
        };

        console.log(flight)
        AirportService.createFlight(flight)
            .then((res) => {
                console.log(res.data);
                navigate("/airports"); 
            })
            .catch((error) => console.log(error));
    }


    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Flight Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Flight Name"
                                        className="form-control"
                                        value={flightName}
                                        name="flightName"
                                        onChange={(e) => setFlightName(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Origin</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Flight Origin"
                                        className="form-control"
                                        value={origin}
                                        name="origin"
                                        onChange={(e) => setOrigin(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Destination</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Flight Destination"
                                        className="form-control"
                                        value={destination}
                                        name="destination"
                                        onChange={(e) => setDestination(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">AvailableSeats</label>
                                    <input
                                        type="number"
                                        placeholder="Enter Flight Available Seats"
                                        className="form-control"
                                        value={availableSeats}
                                        name="availableSeats"
                                        onChange={(e) => setAvailableSeats(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">ArrivalTime</label>
                                    <input
                                        type="datetime-local"
                                        placeholder="Enter Flight Arrivat Time"
                                        className="form-control"
                                        value={arrivalTime}
                                        name="arrivalTime"
                                        onChange={(e) => setArrivalTime(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">DepartureTime</label>
                                    <input
                                        type="datetime-local"
                                        placeholder="Enter Flight Departure Time"
                                        className="form-control"
                                        value={departureTime}
                                        name="departureTime"
                                        onChange={(e) => setDepartureTime(e.target.value)}
                                    ></input>
                                </div>
                                <button className="btn btn-success" onClick={(e) => SubmitFlightData(e)}>Submit</button>
                                <Link to ="/airports" className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
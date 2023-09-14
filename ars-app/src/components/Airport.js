import React, { useState, useEffect } from "react";
import AirportService from "../services/AirportService";
import { Link } from "react-router-dom";

export default function ListAirport() {
  const [airports, setAirports] = useState([]);

  const getAllAirports = () => {
    AirportService.getAllAirports()
      .then((res) => {
        setAirports(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllAirports();
  }, []);

  const deleteAirport = (airportCode) => {
    AirportService.deleteAirport(airportCode)
      .then((res) => {
        getAllAirports();
      })
      .catch((error) => console.log(error));
  };

  const addFlightToAirport = (airportCode, flight) => {
    AirportService.addFlightToAirport(airportCode, flight)
      .then((res) => {
        getAllAirports();
      })
      .catch((error) => console.log(error));
  };

  const removeFlightFromAirport = (airportCode, flightId) => {
    AirportService.removeFlightFromAirport(airportCode, flightId)
      .then((res) => {
        getAllAirports();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <h1 className="text-center">List Airports</h1>
      <Link to="/add-airport" className="btn btn-primary mb-2">
        Add Airport
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Airport Name</th>
            <th>Airport Code</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {airports.map((airport) => (
            <tr key={airport.code}>
              <td>{airport.name}</td>
              <td>{airport.code}</td>
              <td>{airport.location}</td>
              <td>
                <Link to={`/add-flight/${airport.code}`} className="btn btn-success">
                  Add Flight
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteAirport(airport.code)}
                >
                  Delete Airport
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {airports.map((airport) => (
        <div key={airport.code}>
          <h2>{airport.name} - Flights:</h2>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Flight Number</th>
                <th>Destination</th>
                <th>Arrival Time</th>
                <th>Departure Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {airport.departingFlights &&
                airport.departingFlights.map((flight) => (
                  <tr key={flight.id}>
                    <td>{flight.flightNumber}</td>
                    <td>{flight.destination}</td>
                    <td>{flight.arrivalTime}</td>
                    <td>{flight.departureTime}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFlightFromAirport(airport.code, flight.id)}
                      >Remove Flight</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <hr />
        </div>
      ))}
    </div>
  );
}

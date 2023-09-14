import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AirportService from '../services/AirportService';

export default function AddAirportForm() {
    
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [location, setLocation] = useState("");

    const SubmitAirportData = (e) => {
        e.preventDefault();

        const navigate = useNavigate();

        const airport = {name, code, location}

        AirportService.createAiport(airport)
        .then((res) => {
          console.log(res.data);
          navigate("/airports");
        })
        .catch((error) => console.error(error));
    };

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
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Name"
                                        className="form-control"
                                        value={name}
                                        name="name"
                                        onChange={(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">code</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter Code"
                                        name="code"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Location"
                                        name="location"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className="btn btn-success" onClick={(e) => SubmitAirportData(e)}>Submit</button>
                                <Link to="/airports" className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};


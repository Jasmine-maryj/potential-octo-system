import React from "react";
import AirportService from "../services/AirportService.js"

export default function Airport() {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        code: '',
        departingFlights: [''],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFlightChange = (index, value) => {
        const newDepartingFlights = [...formData.departingFlights];
        newDepartingFlights[index] = value;
        setFormData({ ...formData, departingFlights: newDepartingFlights });
    };

    const addFlight = () => {
        setFormData({ ...formData, departingFlights: [...formData.departingFlights, ''] });
    };

    const removeFlight = (index) => {
        const newDepartingFlights = [...formData.departingFlights];
        newDepartingFlights.splice(index, 1);
        setFormData({ ...formData, departingFlights: newDepartingFlights });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., send the data to an API
        const airport = { name, location, code, departingFlights }

        // console.log(employee);
        AirportService.createAirport(formData).then(res => {
            console.log(res.data)
            navigate("/airports")
        }).catch(error => console.log(error));

        console.log(formData);
    };

    return (
        <div className="container">
            <h2 className="mt-4">Airport Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="code" className="form-label">Code:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="code"
                        name="code"
                        value={formData.code}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Departing Flights:</label>
                    {formData.departingFlights.map((flight, index) => (
                        <div className="input-group mb-3" key={index}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Flight Details"
                                value={flight}
                                onChange={(e) => handleFlightChange(index, e.target.value)}
                            />
                            <button
                                type="button"
                                className="btn btn-outline-danger"
                                onClick={() => removeFlight(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button type="button" className="btn btn-outline-primary" onClick={addFlight}>
                        Add Flight
                    </button>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            <Link to="/airports">Back to Airports</Link>
        </div>
    )
}
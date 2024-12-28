import { React } from "react";
import Card from "./Card";

function CurrentDetailsCard({ details, unit }) {
    return (
        <Card className="container-fluid p-0">
            <div className="details-grid">
                <div className="text-start custom-text-center">
                    <div className="d-flex flex-column">
            <span
                className="text-secondary fw-medium"
                style={{ fontSize: "0.9rem" }}
            >
              <i className="bi bi-moisture"></i> Humidity
            </span>
                        <span className="fw-medium">{details.main.humidity}%</span>
                    </div>
                </div>

                <div className="text-center">
                    <div className="d-flex flex-column">
            <span
                className="text-secondary fw-medium"
                style={{ fontSize: "0.9rem" }}
            >
              <i className="bi bi-wind"></i> Wind
            </span>
                        <span className="fw-medium">{details.wind.speed} {unit === 'imperial' ? "mph" : "m/s"}</span>
                    </div>
                </div>

                <div className="text-end custom-text-center">
                    <div className="d-flex flex-column">
            <span
                className="text-secondary fw-medium"
                style={{ fontSize: "0.9rem" }}
            >
              <i className="bi bi-eye"></i> Visibility
            </span>
                        <span className="fw-medium">{Math.round(details.visibility / 1609.34)} mi</span>
                    </div>
                </div>

                <div className="text-start custom-text-center">
                    <div className="d-flex flex-column">
            <span
                className="text-secondary fw-medium"
                style={{ fontSize: "0.9rem" }}
            >
              <i className="bi bi-stars"></i> Conditions
            </span>
                        <span className="fw-medium text-capitalize text-nowrap">{details.weather[0].description}</span>
                    </div>
                </div>

                <div className="text-center">
                    <div className="d-flex flex-column">
            <span
                className="text-secondary fw-medium"
                style={{ fontSize: "0.9rem" }}
            >
              <i className="bi bi-thermometer-high"></i> High
            </span>
                        <span className="fw-medium">{Math.round(details.main.temp_max)}°{unit === 'imperial' ? "F" : "C"}</span>
                    </div>
                </div>

                <div className="text-end custom-text-center">
                    <div className="d-flex flex-column">
            <span
                className="text-secondary fw-medium"
                style={{ fontSize: "0.9rem" }}
            >
              <i className="bi bi-thermometer-low"></i> Low
            </span>
                        <span className="fw-medium">{Math.round(details.main.temp_min)}°{unit === 'imperial' ? "F" : "C"}</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default CurrentDetailsCard;
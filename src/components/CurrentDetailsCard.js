import { React } from "react";
import Card from "./Card";

function CurrentDetailsCard({
                                               humidity,
                                               wind,
                                               description,
                                               visibility,
                                               high,
                                               low,
                                           }) {
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
                        <span className="fw-medium">{humidity}%</span>
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
                        <span className="fw-medium">{wind} mph</span>
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
                        <span className="fw-medium">{visibility} mi</span>
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
                        <span className="fw-medium">{description}</span>
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
                        <span className="fw-medium">{high}°F</span>
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
                        <span className="fw-medium">{low}°F</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default CurrentDetailsCard;
import { React } from "react";
import Card from "./Card";

function CurrentForecastCard({ date, temperature, city, icon }) {
    return (
        <Card>
            <div className="d-flex align-items-center justify-content-between w-100 gap-1">
                <div className="d-flex flex-column justify-content-center">
                    <div className="fw-medium" style={{ fontSize: "0.8rem" }}>
                        {date}
                    </div>
                    <h1 className="fw-bold mb-0" style={{ fontSize: "3.5rem" }}>
                        {temperature}
                        <span className="fs-3 fw-light align-text-top d-inline-block mt-1">
              °F
            </span>
                    </h1>
                    <span
                        className="text-secondary fw-light"
                        style={{ fontSize: "0.9rem" }}
                    >
            <i className="bi bi-geo-fill"></i> {city}
          </span>
                </div>
                <div>
                    <i className={`bi ${icon}`} style={{ fontSize: "4.75rem" }}></i>
                </div>
            </div>
        </Card>
    );
}

export default CurrentForecastCard;
import { React } from "react";
import Card from "./Card";

function CurrentForecastCard({ weather, unit }) {
    return (
        <Card>
            <div className="d-flex align-items-center justify-content-between w-100 gap-1">
                <div className="d-flex flex-column justify-content-center">
                    <div className="fw-medium" style={{ fontSize: "0.8rem" }}>
                        {new Date().toLocaleString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                    })}
                    </div>
                    <h1 className="fw-bold mb-0" style={{ fontSize: "3.5rem" }}>
                        {Math.round(weather.main.temp)}
                        <span className="fs-3 fw-light align-text-top d-inline-block mt-1">
              {" "}°{unit === 'imperial' ? "F" : "C"}
            </span>
                    </h1>
                    <span
                        className="text-secondary fw-light"
                        style={{ fontSize: "0.9rem" }}
                    >
            <i className="bi bi-geo-fill"></i> {`${weather.name}, ${weather.sys.country}`}
          </span>
                </div>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                         alt={weather.weather[0].description}
                         style={{objectFit: "cover", marginRight: "-8px", transform: "scale(1.3)", opacity: "0.85", filter: "grayscale(100%) drop-shadow(0 2px 1px rgba(0, 0, 0, 0.4))"}}/>
                    {/*<i className={`bi ${iconConvert(weather.weather[0].icon)}`} aria-label={weather.weather[0].description} style={{ fontSize: "4.75rem" }}></i>*/}
                </div>
            </div>
        </Card>
    );
}

export default CurrentForecastCard;
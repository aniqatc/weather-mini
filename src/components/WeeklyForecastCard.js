import { React } from "react";
import Card from "./Card";

function WeeklyForecastCard({ forecast, unit }) {
    if (!forecast) return null;

    return (
        <Card>
            <div className="d-flex justify-content-between w-100 gap-1">
                {forecast.list.map((day, index) => {
                    return (
                        <div
                            key={index}
                            className="d-flex flex-column align-items-center text-center gap-1"
                        >
                            <p className="text-secondary fw-medium opacity-75 mb-0">
                                {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
                            </p>
                            <span>
                <i
                    className={`bi ${day.weather[0].icon}`}
                    style={{ fontSize: "2.5rem", opacity: "0.85" }}
                ></i>
              </span>
                            <p className="fw-semibold mb-0 text-dark d-flex align-items-center">
                                {Math.round(day.main.temp)}°
                                <span
                                    className="opacity-50 d-block"
                                    style={{ fontSize: "0.9rem" }}
                                >
                  {unit === 'imperial' ? "F" : "C"}
                </span>
                            </p>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}

export default WeeklyForecastCard;
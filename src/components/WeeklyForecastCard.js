import { React } from "react";
import Card from "./Card";

function WeeklyForecastCard({ forecast }) {
    return (
        <Card>
            <div className="d-flex justify-content-between w-100 gap-1">
                {forecast.map((weather, index) => {
                    return (
                        <div
                            key={index}
                            className="d-flex flex-column align-items-center text-center gap-1"
                        >
                            <p className="text-secondary fw-medium opacity-75 mb-0">
                                {weather.day}
                            </p>
                            <span>
                <i
                    className={`bi ${weather.icon}`}
                    style={{ fontSize: "2.5rem", opacity: "0.85" }}
                ></i>
              </span>
                            <p className="fw-semibold mb-0 text-dark d-flex align-items-center">
                                {weather.temp}°
                                <span
                                    className="opacity-50 d-block"
                                    style={{ fontSize: "0.9rem" }}
                                >
                  F
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
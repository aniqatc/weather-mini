import React from 'react';

import Card from "./Card";

function ErrorCard({ error, className = "" }) {
    return (
        <Card className={className}>
            <span className="fw-bold text-danger d-block mb-1"><i className="bi bi-exclamation-triangle-fill"></i> Error </span>
            <span className="text-secondary" style={{fontSize: "0.8rem"}}><strong>{error.code}</strong>: {error.message}.</span>
            <span className="text-secondary d-block" style={{fontSize: "0.8rem"}}>Please try again or report the{" "}
                <a href="https://github.com/aniqatc/weather-mini" target="_blank" rel="noopener noreferrer" className="link-dark">issue</a>.</span>
        </Card>
    )
}

export default ErrorCard;
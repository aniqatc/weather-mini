import React from 'react';

import Card from "./Card";

function ErrorCard({ error, className = "" }) {
    return (
        <Card className={className}>
            <span className="fw-bold text-danger d-block mb-1"><i className="bi bi-exclamation-triangle-fill"></i> Error </span>
            <span className="text-secondary">{error.message}. Please try again.</span>
        </Card>
    )
}

export default ErrorCard;
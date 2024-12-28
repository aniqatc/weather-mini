import React from 'react';

import Card from "./Card";

function ErrorCard({ error }) {
    return (
        <Card className="animate-up delay-1">
            <span className="fw-bold text-danger"><i className="bi bi-exclamation-triangle-fill"></i> Error: </span>
            <span className="text-secondary">{error}.</span>
        </Card>
    )
}

export default ErrorCard;
import React from 'react';

import Card from "./Card";

function LoadingCard(className = "") {
    return (
        <Card className={className}>
            <i className="bi bi-hourglass-split"></i> Loading content...
        </Card>
    )
}

export default LoadingCard;
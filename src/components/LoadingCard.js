import React from 'react';

import Card from "./Card";

function LoadingCard() {
    return (
        <Card className="animate-up delay-1">
            <i className="bi bi-hourglass-split"></i> Loading content...
        </Card>
    )
}

export default LoadingCard;
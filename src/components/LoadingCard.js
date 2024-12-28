import React from 'react';
import { PulseLoader } from "react-spinners";
import Card from "./Card";

function LoadingCard({ className = "" }) {
    return (
        <Card className={`${className} text-center`}>
            <div className="p-2">
                <PulseLoader
                    color="#6c757d"
                    margin={8}
                    size={12}
                    speedMultiplier={0.75}
                />
            </div>
        </Card>
    );
}

export default LoadingCard;
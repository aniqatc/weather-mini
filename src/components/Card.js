import { React } from "react";

function Card({ children, className = "" }) {
    return (
        <section
            className={`${className} shadow-sm border border-light-subtle rounded-4 px-4 py-4 my-3 w-100`}
        >
            {children}
        </section>
    );
}

export default Card;
import { React } from "react";

function Footer() {
    return (
        <footer
            className="d-flex justify-content-between"
            style={{ fontSize: "0.9rem", opacity: 0.8 }}
        >
            <p className="text-secondary">
                <i className="bi bi-person-check-fill text-dark"></i> Coded by{" "}
                <a
                    href="https://aniqa.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-light-emphasis fw-medium footer-link"
                    style={{ color: "inherit" }}
                >
                    Aniqa
                </a>
            </p>
            <p>
                <a
                    href="/"
                    className="text-decoration-none text-secondary fw-medium footer-link"
                    style={{ color: "inherit" }}
                >
                    Change Unit <i className="bi bi-thermometer-half text-dark"></i>
                </a>
            </p>
        </footer>
    );
}

export default Footer;
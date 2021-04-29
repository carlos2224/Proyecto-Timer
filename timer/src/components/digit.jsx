import React from "react";

function Digit({ children, filled }) {
    return <span className={`digit ${filled ? "digit--filled" : ""}`}>{children}</span>;
}

export default Digit;
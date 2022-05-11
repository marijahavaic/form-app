import React from "react";

import "./FormInput.css";

function FormInput(props) {
    const { label, handleChange, id, ...inputProps } = props;
    return (
        <div className="FormInput">
            <label>{label}</label>
            <input {...inputProps} onChange={handleChange} />
        </div>
    );
}

export default FormInput;

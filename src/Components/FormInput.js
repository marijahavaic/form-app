import React, { useState } from "react";

import "./FormInput.css";

function FormInput(props) {
    const [focused, setFocused] = useState(false);
    const { label, handleChange, id, errorMessage, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };
    return (
        <div className="FormInput">
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={handleChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === "comfirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
}

export default FormInput;

import React from "react";

import "./FormInput.css";

function FormInput(props) {
    return (
        <div className="FormInput">
            <lable>Username</lable>
            <input placeholder={props.placeholder} />
        </div>
    );
}

export default FormInput;

import React, { useState } from "react";

import "./App.css";
import FormInput from "./Components/FormInput";

function App() {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "username",
            label: "Username",
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "email",
            label: "Email",
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "birthday",
            label: "Birthday",
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "password",
            label: "Password",
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            label: "Confirm Password",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    console.log(values);

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        handleChange={handleChange}
                    />
                ))}

                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;

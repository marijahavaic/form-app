import React, { useState } from "react";

import "./App.css";
import FormInput from "./Components/FormInput";

function App() {
    const initialState = {
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    };
    const [values, setValues] = useState(initialState);

    const [isSubmited, setIsSubmited] = useState(false);

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Enter Username",
            errorMessage:
                "Username must be at 3-20 characters and shouldn't include any special character.",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,20}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Enter Email",
            errorMessage: "Email is not valid",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "birthday",
            label: "Birthday",
            required: true,
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Enter Password",
            errorMessage:
                "Password must be 8-20 characters and include at least 1 letter, 1 number and 1 special character.",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match.",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmited(true);
        setValues(initialState);
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const formComponent = (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
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
        </>
    );

    const signedUp = (
        <div className="SignUpMsg">
            <h3>Signed up successfully!</h3>
            <button onClick={(e) => setIsSubmited(false)}>Return</button>
        </div>
    );

    return <div className="App">{isSubmited ? signedUp : formComponent}</div>;
}

export default App;

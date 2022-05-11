import logo from "./logo.svg";
import "./App.css";
import FormInput from "./Components/FormInput";

function App() {
    return (
        <div className="App">
            <form>
                <FormInput placeholder="Username" />
                <FormInput placeholder="Email" />
                <FormInput placeholder="Full" />
            </form>
        </div>
    );
}

export default App;

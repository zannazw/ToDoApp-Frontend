import './App.css'
import ToDo from "./components/ToDo/ToDo.jsx";

function App() {

    const num = 3;

    return (
        <>
            <div className={"header-container"}>
                Hallo
                <button className={"add-button"}>
                    +
                </button>
            </div>
            <ToDo/>
        </>

    )
}

export default App

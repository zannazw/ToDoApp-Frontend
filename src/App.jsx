import './App.css'
import ToDo from "./components/ToDo/ToDo.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/todo")
            .then(response => {
                setTodos(response.data)
                console.log(response.data);
                console.log("Hat Todos gefetched und in den State gepackt :)")
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <div className={"header-container"}>
                <h1 className={"header-title"}>Meine To-Do Liste</h1>
                <button className={"add-button"}>
                    +
                </button>
            </div>
            <div className={"todos-container"}>
                {todos.map(todo => <ToDo todo={todo}/>)}
            </div>
        </>

    )
}

export default App

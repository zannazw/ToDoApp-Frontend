import './App.css'
import ToDo from "./components/ToDo/ToDo.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import Modal from "react-modal"

function App() {
    const [todos, setTodos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/todo")
            .then(response => {
                setTodos(response.data)
                console.log(response.data);
                console.log("Hat Todos gefetched und in den State gepackt :)")
            })
            .catch(error => console.error(error));
    }, []);

    function handleIsModalOpen() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    return (
        <>
            <div className={"header-container"}>
                <h1 className={"header-title"}>Meine To-Do Liste</h1>
                <button className={"add-button"}>
                    +
                </button>
            </div>
            <div className={"todos-container"}>
                {todos.map(todo => {
                    return (
                        <div key={todo.id}>
                            <ToDo todo={todo} onTodoClick={handleIsModalOpen}/>
                        </div>
                    )
                })}
            </div>
            <Modal isOpen={isModalOpen} contentLabel="Example Modal" onRequestClose={handleCloseModal}>
                Hier fehlt Info zum Ticket :)
            </Modal>
        </>

    )
}

export default App

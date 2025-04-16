import "./ToDo.css"

const ToDo = ({todo, onTodoClick}) => {

    return (
        <div onClick={onTodoClick} className={"todo-container"}>
            <p className={"todo-title"}>
                {todo.title}
            </p>
            {/*<button className={"todo-details-button"}> ...</button>*/}
        </div>
    )
};

export default ToDo;
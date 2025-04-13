import "./ToDo.css"

const ToDo = ({todo}) => {

    return (
        <div className={"todo-container"}>
            <p className={"todo-title"}>
                {todo.title}
            </p>
            <button className={"todo-details-button"}> ...</button>
        </div>
    )
};

export default ToDo;
import React, { useState } from "react";

export default function Todo({
    completeTodo,
    removeTodo,
    updateTodo,
    id,
    todo,
}) {
    const [onEdit, setOnEdit] = useState(false);
    const [complete, setComplete] = useState(false);
    const [value, setValue] = useState(todo.text);
    function editTodo() {
        setOnEdit(true);
    }
    function handleUpdateTodo() {
        setOnEdit(false);
        updateTodo(id, value);
    }
    function handleCompleteTodo() {
        setComplete(!complete);
        completeTodo(id);
    }
    return (
        <li className="todo">
            <div>
            <button onClick={() => handleCompleteTodo()} className="btn-complete">{todo.is_complete ? "☑" : "☐"}</button>
            {onEdit ? (
                <input value={value} onChange={(e) => setValue(e.target.value)} />
            ) : (
                    <span
                        style={{ textDecoration: todo.is_complete ? "line-through" : "" }}
                    >
                        {todo.text}
                    </span>
                )}
            </div>
           
            <div style={{ whiteSpace: "nowrap" }}>
                <button onClick={() => removeTodo(id)}>X</button>
                {onEdit ? (
                    <button onClick={() => handleUpdateTodo()}>Update</button>
                ) : (
                        <button onClick={() => editTodo(id)}>Edit</button>
                    )}
            </div>
        </li>
    );
}

import { useState } from "react";
import TodoList from "../components/TodoList";
import styles from "./Todo.module.css";

export default function Todo() {
    const [todoList, setTodoList] = useState([]);
    const [inputString, setInputString] = useState("");
    const [dueDateString, setDueDateString] = useState("");

    const addTodo = () => {
        // Hint of todo item
        const newTodo = {
            id: Date.now(),
            text: inputString,
            dueDateString: dueDateString,
            isCompleted: false,
        };
    };
    const toggleComplete = () => {};
    const deleteTodo = () => {};
    const updateTodo = () => {};
    return (
        <div>
            <TodoList
                todoList={todoList}
                toggleComplete={toggleComplete}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    );
}

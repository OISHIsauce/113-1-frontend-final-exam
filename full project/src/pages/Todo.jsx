import { useState } from "react";
import TodoList from "../components/TodoList";
import styles from "./Todo.module.css";
export default function Todo() {
    const [todoList, setTodoList] = useState([]);
    const [inputString, setInputString] = useState("");
    const [dueDateString, setDueDateString] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        if (!inputString.trim() || !dueDateString) {
            return;
        }
        const newTodo = {
            id: Date.now(),
            text: inputString,
            dueDateString: dueDateString,
            isCompleted: false,
        };
        setTodoList([...todoList, newTodo]);
        setInputString("");
    };
    const toggleComplete = (e, id) => {
        e.preventDefault();
        const newTodos = todoList.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
        setTodoList(newTodos);
    };
    const deleteTodo = (e, id) => {
        e.preventDefault();
        const newTodos = todoList.filter((todo) => {
            return todo.id !== id;
        });
        setTodoList(newTodos);
    };
    const updateTodo = (params) => {
        const { editText, editDateString, id } = params;
        const newTodos = todoList.map((todo) =>
            todo.id === id
                ? { ...todo, text: editText, dueDateString: editDateString }
                : todo
        );
        setTodoList(newTodos);
    };
    return (
        <div className={styles.todoApp}>
            <h1 className={styles.title}>Todo List</h1>
            <form className={styles.form} onSubmit={addTodo}>
                <input
                    className={styles.input}
                    type="text"
                    value={inputString}
                    placeholder="Add a todo"
                    onChange={(e) => {
                        setInputString(e.target.value);
                    }}
                />
                <input
                    className={styles.input}
                    type="date"
                    value={dueDateString}
                    onChange={(e) => {
                        setDueDateString(e.target.value);
                    }}
                />
                <button className={styles.addButton}>Add</button>
            </form>
            <TodoList
                todoList={todoList}
                toggleComplete={toggleComplete}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    );
}

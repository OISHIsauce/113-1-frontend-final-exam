import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import styles from "./Todo.module.css";
import todoAPI from "../data/todoAPI";
export default function Todo() {
    const [todoList, setTodoList] = useState([]);
    const [inputString, setInputString] = useState("");
    const [dueDateString, setDueDateString] = useState("");

    useEffect(() => {
        const getTodos = async () => {
            const response = await todoAPI.getTodos(); // BONUS 邏輯
            setTodoList(response);
        };
        getTodos();
    }, []);

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

        // BONUS 邏輯
        todoAPI.postTodo(newTodo);
    };
    const toggleComplete = (e, id) => {
        e.preventDefault();
        let newTodo = {};
        const newTodos = todoList.map((todo) => {
            if (todo.id !== id) {
                return todo;
            }
            newTodo = { ...todo, isCompleted: !todo.isCompleted };
            return newTodo;
        });
        setTodoList(newTodos);

        // BONUS 邏輯
        todoAPI.putTodo(newTodo);
    };
    const deleteTodo = (e, id) => {
        e.preventDefault();
        const newTodos = todoList.filter((todo) => {
            return todo.id !== id;
        });
        setTodoList(newTodos);

        // BONUS 邏輯
        todoAPI.deleteTodo(id);
    };
    const updateTodo = (params) => {
        /*
            這是簡化寫法，相當於
            const editText = params.editText;
            const editDateString = params.editDateString
            const id = params.id;
        */
        const { editText, editDateString, id } = params;
        let newTodo = {};
        const newTodos = todoList.map((todo) => {
            if (todo.id !== id) {
                return todo;
            }
            newTodo = {
                ...todo,
                text: editText,
                dueDateString: editDateString,
            };
            return newTodo;
        });
        setTodoList(newTodos);

        // BONUS 邏輯
        todoAPI.putTodo(newTodo);
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

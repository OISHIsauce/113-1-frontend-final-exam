// 下列這行註解會關閉對於prop types的檢查，若不需要再移除
/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import style from "./TodoList.module.css";
export default function TodoList({
    todoList,
    updateTodo,
    toggleComplete,
    deleteTodo,
}) {
    return (
        <ul>
            {todoList.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
}

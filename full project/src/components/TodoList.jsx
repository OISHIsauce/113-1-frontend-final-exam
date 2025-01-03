import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import style from "./TodoList.module.css";
export default function TodoList({
    todoList,
    updateTodo,
    toggleComplete,
    deleteTodo,
}) {
    return (
        <ul className={style.list}>
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
TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            dueDateString: PropTypes.string.isRequired,
            isCompleted: PropTypes.bool.isRequired,
        })
    ).isRequired,
    updateTodo: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

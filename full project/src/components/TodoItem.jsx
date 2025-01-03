import PropTypes from "prop-types";
import styles from "./TodoItem.module.css";
import { useState } from "react";

export default function TodoItem({
    todo,
    updateTodo,
    toggleComplete,
    deleteTodo,
}) {
    const doneClassName = todo.isCompleted ? styles.completed : "";
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const [editDateString, setEditDateString] = useState(todo.dueDateString);
    if (isEditing) {
        return (
            <li className={styles.item}>
                <input
                    className={styles.editInput}
                    type="text"
                    value={editText}
                    onChange={(e) => {
                        setEditText(e.target.value);
                    }}
                />
                <input
                    className={styles.editInput}
                    type="date"
                    value={editDateString}
                    onChange={(e) => {
                        setEditDateString(e.target.value);
                    }}
                />
                <div className={styles.buttons}>
                    <button
                        type="button"
                        className={styles.updateButton}
                        onClick={() => {
                            updateTodo({
                                editText,
                                editDateString,
                                id: todo.id,
                            });
                            setIsEditing(false);
                        }}
                    >
                        更新
                    </button>
                    <button
                        type="button"
                        className={styles.cancelButton}
                        onClick={() => {
                            setIsEditing(false);
                            setEditText(todo.text);
                            setEditDateString(todo.dueDateString);
                        }}
                    >
                        取消
                    </button>
                </div>
            </li>
        );
    }
    return (
        <li key={todo.id} className={styles.item}>
            <div className={`${styles.content} ${doneClassName}`}>
                <div> {todo.text}</div>
                <div>{todo.dueDateString}</div>
            </div>
            <div className={styles.buttons}>
                <button
                    type="button"
                    className={styles.completeButton}
                    onClick={(e) => {
                        toggleComplete(e, todo.id);
                    }}
                >
                    {todo.isCompleted ? "恢復" : "完成"}
                </button>
                <button
                    type="button"
                    className={styles.deleteButton}
                    onClick={(e) => {
                        deleteTodo(e, todo.id);
                    }}
                >
                    刪除
                </button>
                <button
                    type="button"
                    className={styles.editButton}
                    onClick={() => {
                        setIsEditing(true);
                    }}
                >
                    編輯
                </button>
            </div>
        </li>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        dueDateString: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
    }).isRequired,
    updateTodo: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

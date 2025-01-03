// 下列這行註解會關閉對於prop types的檢查，若不需要再移除
/* eslint-disable react/prop-types */
import styles from "./TodoItem.module.css";
import { useState } from "react";

export default function TodoItem({
    todo,
    updateTodo,
    toggleComplete,
    deleteTodo,
}) {
    const [isEditing, setIsEditing] = useState(false);
    if (isEditing) {
        return <li></li>;
    }
    return <li></li>;
}

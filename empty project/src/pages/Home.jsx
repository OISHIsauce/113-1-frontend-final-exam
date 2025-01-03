import { useState } from "react";
import style from "./Home.module.css";
export default function Home() {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        setCount((prevCount) => prevCount + 1);
    };
    return (
        <>
            <div className={style.home}>
                <h1 className={style.title}>Home Page</h1>
                <h2 className={style.text}>count: {count}</h2>
                <button
                    className={style.button}
                    type="button"
                    onClick={(e) => {
                        handleAdd(e);
                    }}
                >
                    ++count
                </button>
            </div>
        </>
    );
}

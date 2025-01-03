import Home from "./pages/Home";
import Todo from "./pages/Todo";

import "./App.css";
import reactLogo from "./assets/react.svg";
import { useState } from "react";

export default function App() {
    const [thisPage, setThisPage] = useState("home");
    const renderPage = (pagename) => {
        const pageMap = {
            home: <Home />,
            todo: <Todo />,
        };
        return pageMap[pagename] ?? <Home />;
    };
    const onMenuClick = (page, e) => {
        e.preventDefault();
        setThisPage(page);
    };
    return (
        <>
            <div className="container">
                <header>
                    <div className="logo">
                        <img src={reactLogo} alt="公司標誌" />
                        <span>聯大資工csie</span>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a
                                    onClick={(e) => {
                                        onMenuClick("home", e);
                                    }}
                                    href="#"
                                >
                                    首頁
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={(e) => {
                                        onMenuClick("todo", e);
                                    }}
                                    href="#"
                                >
                                    待辦事項
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>{renderPage(thisPage)}</main>
                <footer>
                    <p>聯大資工csie | 苗栗市南勢里聯大2號 | 037-380000</p>
                </footer>
            </div>
        </>
    );
}

// 以下四個常數供同學參考
const PORT = 3000;
const todoUrl = `http://localhost:${PORT}/todos`;
const apiHeader = {
    "Content-Type": "application/json",
};
const RESTFUL_METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
};

const todoAPI = {
    getTodos: async () => {},
    postTodo: async () => {},
    putTodo: async () => {},
    deleteTodo: async () => {},
};
export default todoAPI;

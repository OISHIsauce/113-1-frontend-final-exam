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
/*
    知識點有點多，你如果覺得困難可以跳過並直接從助教寫的程式碼猜測它是怎麼運作的......

    如果覺得學習成效不好，這是很正常的，往年這門課是開在大二，所以時間彈性比較好，老師甚至讓他們做期末專案
    更何況，在同一年嘗試學習兩門程式語言已經很不錯了，打個比方，這就好比普通人在同一年安排學法文和德文了
    有些人可能會很訝異助教的精熟程度，但請不要以助教當作你的"學習成果"的比較對象。
    因為許嘉緯助教已經累積兩年的網頁開發經驗了（更何況王嘉暐助教有八年的coding經驗......）。
    廢話有點多，請把它當成連續熬夜寫技術文件的助教在找空間抒發 （無奈笑容）

    BONUS的得分重點：fetch 函式
    簡易摘要：
        method = "GET" | "POST" | "PUT" | "DELETE" (4選1)
        headers = body ? { "Content-Type": "application/json" } : undefined;
        body =  body ? JSON.stringify({...params}) : undefined;
        options ={
            method, 
            headers, 
            body,
        }
        if(method === "GET"){
            const rawResponse =  await fetch(url, options);
            const response = rawResponse.json();
            return response;
        }    
    說明：
        fetch (Promise函式) 要提供兩個參數：網址(url)及選項(options)
        網址(todoUrl)已經提供給各位，而常用的選項有以下這些：
            method: 
                要提供一個http方法，常用的有GET、POST、PUT、DELETE
            headers: 
                後端課程有詳細說明......
                就本場考試而言，如果需要傳入body，就要設定為 apiHeader
            body: 
                後端課程有詳細說明......
                就本場考試而言，設定為要傳入操作相應的的 **物件字串** 即可 ( JSON.stringify(body) )
        要注意的是，如果method是GET，你可以接收fetch回傳的值(rawResponse)，
        然而，這個rawResponse需要被解析才能被當物件使用( rawResponse.json() )
*/
const createFetchOptions = (restfulMethod, requestBody) => {
    const validMethods = Object.values(RESTFUL_METHODS);
    const isMethodValid = validMethods.includes(restfulMethod);
    if (!isMethodValid) {
        console.error("createfetchInit: invalid restfiul Method");
        return;
    }
    const method = restfulMethod;
    const headers = requestBody ? apiHeader : undefined;
    const body = requestBody ? JSON.stringify(requestBody) : undefined;
    return { method, headers, body };
};
const todoAPI = {
    getTodos: async () => {
        const rawResponse = await fetch(
            todoUrl,
            createFetchOptions(RESTFUL_METHODS.GET)
        );
        const response = await rawResponse.json();
        return response;
    },
    postTodo: async (todo) => {
        await fetch(todoUrl, createFetchOptions(RESTFUL_METHODS.POST, todo));
    },
    putTodo: async (todo) => {
        await fetch(
            `${todoUrl}/${todo.id}`,
            createFetchOptions(RESTFUL_METHODS.PUT, todo)
        );
    },
    deleteTodo: async (id) => {
        await fetch(
            `${todoUrl}/${id}`,
            createFetchOptions(RESTFUL_METHODS.DELETE)
        );
    },
};
export default todoAPI;

# 複習須知

-   本專案在 git hub 上供同學自行下載使用
-   `https://github.com/OISHIsauce/113-1-frontend-final-exam.git`
-   這個 repository 包含兩個專案：`empty project`，及`full project`
-   `empty project`是考試時會給同學的檔案，可以用它來練習
-   `full project`是助教寫的參考答案，如果練習時卡住可以隨時拿來參考
-   正式考試環境包含：斷網、無 vscode 的擴充套件可用。若可能請以此基礎來練習。
-   （如果你被當）下次修前端不會遇到這麼優秀又負責任的助教，請好好把握機會。

> 除複習須知以外的內容會在正式考試重複出現

# 重要聲明

-   設備有問題、下載上傳檔案有問題，請馬上提出。
-   `助教在考試中不會給你任何作答建議`，諸如程式碼撰寫、終端機操作等等，請提前做好準備。
-   秉持不會修改你們的專案的評分原則，若出現以下情況導致白畫面，分數以 0 分計：
    1. 因 JSX `編譯錯誤` 導致的白畫面（可以留空，但不要亂寫）。
    2. 承上，在不違反第一點的情況，若需要更佳的專案架構（檔案路徑、檔案名稱等），可以對其進行修改。
    3. 因 JSX `執行錯誤` 導致白畫面為預設畫面（但點按鈕導致白畫面不會 0 分）。

---

# 考試說明

-   按下「待辦事項」按鈕後顯示的畫面是原始分數的評分標準（預設為`/src/pages/Todo.jsx`）。
-   App.jsx, Home.jsx 皆為可參考的範例。
-   你可以分別從從本專案的 `/src/examples/`裡的`01.png`、`02.png`、`03.png` 看到三大題型的題目圖例。
-   `麻煩上傳檔案的時候遵循以下步驟：`
    1. 將檔案加入名稱包含學號的壓縮檔 e.g.："U1024035.zip"
    2. 將壓縮檔內的 `node_modules` 移除
    3. 上傳到 file zilla 的 upload 資料夾

---

# 原始分數標準

-   原始分數總和(含 Bonus)不會超過 100 分。
-   `周老師享有修改分數的權利`（請同學放心，通常為向上調整）。

## 1. HTML (40%)

計分標準：是否能透過下列方法之一看到畫面內容：

1. 靜態顯示（不用進行操作就能看到）。
2. 互動顯示（能透過網頁互動看到）。

> 亦即，若不會寫互動的話：依靠互動顯示的題目（5. 6. 7.）可以改用靜態畫面得分。

每個畫面內容各佔 6%，但總分不超過 40%。畫面內容包含：

1.  「Todo List」標題。
2.  Text input。
3.  Date input。
4.  Add button。
5.  List item1（text, dueDate, 完成, 刪除, 編輯）。
6.  List item2（text, dueDate, 恢復, 刪除, 編輯，且文字有刪除線）。
7.  List item3（text input, date input, 更新, 取消）。

**不列入評分：**

-   沒有指定的 HTML 元件用哪一種（如：p/h1/span 等等，能正確顯示即可）。

---

## 2. JavaScript (40%)

計分標準：是否能透過元件互動來達成功能：

每個功能各佔 6%，但總分不超過 40%。功能包含：

1. 透過 Add 按鈕新增並顯示一個 list item。
2. 透過完成按鈕，切換文字裝飾為刪除線，並將完成按鈕切換為恢復按鈕。
3. 完成 2.，透過恢復按鈕，將 list item 切換為原樣。
4. 透過刪除按鈕，正確刪除指定的 list item。
5. 透過編輯按鈕，將該列 list item 的文字切換為 input，並將按鈕列改成更新和取消。
6. 完成 5.，透過更新按鈕將 list item 切換為原樣，並修改 todo 和日期。
7. 完成 5.，透過取消按鈕將 list item 切換為原樣，且不做修改。

**不列入評分：**

-   變數名稱、運作過程、PropTypes 的定義（結果正確即可）。

---

## 3. CSS (20%)

計分標準：是否正確使用 CSS 使外觀有明顯變化：

每題各佔 5%，但總分不超過 20%，單題不會部分給分。內容包含：

1. 使頁面整體水平置中，文字與日期間隔分明（Hint: `display`, `justify-content`）。
2. 至少各出現一次設定文字顏色、背景顏色，且明顯不是預設顏色。
3. 至少各出現一次設定外框顯示與弧度。
4. 設定外間距使 list item 的按鈕等距排列，設定內間距使 input、button 不要貼合文字。
5. 奇數與偶數的 list item 背景顏色不同（Hint: `nth-child`，其他實現方法不給分）。

**列入評分：**

-   是否清楚顯示元件（背景顏色和文字顏色不得過於相近）。

**不列入評分：**

-   顏色風格（但不要與預設顏色一致）。
-   間距、邊框弧度、邊框粗細的數字（但不要為 0）。

---

## 4. Bonus: JSON Server (20%)

每種操作佔 5% ，**正確依據為重整網頁是否保留原始操作**：

1. 查詢：能看到先前儲存的 todo list

> 請先確保查詢正確，再做以下功能，否則不予計分。

2. 新增：正確新增一筆 todo_item。
3. 修改：正確修改一筆 todo_item。
4. 刪除：正確刪除一筆 todo_item。
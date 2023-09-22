// ToDoリストのデータを管理する配列
let todos = [];

// ページが読み込まれたときにToDoアイテムを表示
document.addEventListener("DOMContentLoaded", () => {
    displayTodos();
});

// ToDoアイテムを表示する関数
function displayTodos() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = ""; // リストをクリア

    todos.forEach((todo, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${todo}
            <button onclick="deleteTodo(${index})">削除</button>
        `;
        todoList.appendChild(listItem);
    });
}

// ToDoアイテムを追加する関数
function addTodo() {
    const newTodoInput = document.getElementById("new-todo");
    const newTodo = newTodoInput.value.trim();

    if (newTodo !== "") {
        todos.push(newTodo);
        newTodoInput.value = "";
        displayTodos();
    }
}

// ToDoアイテムを削除する関数
function deleteTodo(index) {
    if (index >= 0 && index < todos.length) {
        todos.splice(index, 1);
        displayTodos();
    }
}
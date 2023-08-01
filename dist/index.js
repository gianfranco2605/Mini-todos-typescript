"use strict";
// ! = not null
const btn = document.getElementById("btn");
// to give value a type
const input = document.getElementById("todoinput");
const form = document.querySelector('form');
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
// TS knows "e" is a submitEvent
// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     console.log("submitted");   
// });
// TS  does NOT knows "e" is a submitEvent, you have to e: SubmitEvent
function readTodos() {
    const todosJson = localStorage.getItem("todos");
    if (todosJson === null)
        return [];
    return JSON.parse(todosJson);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
;
function createTodo(todo) {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLi.append(todo.text);
    newLi.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLi);
}
;
form.addEventListener("submit", handleSubmit);
// alternative
// (<HTMLInputElement>input).value
// btn = HTMLELEMENT | NULL
// btn.addEventListener("click", function() {
//     alert(input.value);
//     input.value = "";
// });
let mystery = "Hello";
// error mystery = unknown type
// const numChars = mystery.length
// type assertion
const numChars = mystery.length;

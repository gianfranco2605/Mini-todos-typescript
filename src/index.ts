interface Todo {
    text: string;
    completed: boolean
}

// ! = not null
const btn = document.getElementById("btn")! as HTMLButtonElement;
// to give value a type
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector('form')!;
const list = document.getElementById("todolist");
const todos: Todo[] = readTodos();
todos.forEach(createTodo);

// TS knows "e" is a submitEvent
// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     console.log("submitted");   
// });

// TS  does NOT knows "e" is a submitEvent, you have to e: SubmitEvent

function readTodos(): Todo[] {
    const todosJson = localStorage.getItem("todos");
    if(todosJson === null) return [];
    return JSON.parse(todosJson);
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);

    saveTodos();
    input.value = "";
};

function createTodo(todo: Todo) {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function() {
    todo.completed = checkbox.checked
    saveTodos();
    });
    newLi.append(todo.text);
    newLi.append(checkbox);
    list?.append(newLi);
    
};


form.addEventListener("submit", handleSubmit);
// alternative
// (<HTMLInputElement>input).value

// btn = HTMLELEMENT | NULL
// btn.addEventListener("click", function() {
//     alert(input.value);
//     input.value = "";
// });

let mystery: unknown = "Hello";

// error mystery = unknown type
// const numChars = mystery.length

// type assertion
const numChars = (mystery as string).length






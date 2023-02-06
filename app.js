function putTodo(todo) {
    // implement your code here
    let todoId = todo.id;
    fetch(window.location.href + 'api/todo/todoId',todo)
    .then(response => response.json())
    .catch(error => showToastMessage('Failed to update todo...'));
    
    console.log("calling putTodo");
    console.log(todo);
}

function postTodo(todo) {
    // implement your code here
    fetch(window.location.href + 'api/todo',todo)
    .then(response => response.json())
    .catch(error => showToastMessage('Failed to post todos...'));
    
    console.log("calling postTodo");
    console.log(todo);
}

function deleteTodo(todo) {
    // implement your code here
    let todoId = todo.id;
    fetch(window.location.href + 'api/todo/todoId')
    .then(response => response.json())
    .catch(error => showToastMessage('Failed to delete todo...'));
    
    console.log("calling deleteTodo");
    console.log(todo);
}

// example using the FETCH API to do a GET request
function getTodos() {
    fetch(window.location.href + 'api/todo')
    .then(response => response.json())
    .then(json => drawTodos(json))
    .catch(error => showToastMessage('Failed to retrieve todos...'));
}

getTodos();

function putTodo(todo) {
    // implement your code here
    let todoId = todo.id;
    
    const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: todo.id,
                           title: todo.title,
                           description: todo.description,
                           done: todo.done
                         })
    };
    
    fetch(window.location.href + 'api/todo/todoId',requestOptions)
    .then(response => {
         if (!response.ok) {
            const error =  response.status;
            throw new Error(error);
        }
        showToastMessage('Successfully updated todo......')
    })
    .catch(error => showToastMessage('Failed to update todo...'));
    
    console.log("calling putTodo");
    console.log(todo);
}

function postTodo(todo) {
    // implement your code here
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: todo.id,
                           title: todo.title,
                           description: todo.description,
                           done: todo.done
                         })
    };
    
    fetch(window.location.href + 'api/todo', requestOptions)
    .then(response => {
        if (!response.ok) {
            const error =  response.status;
            throw new Error(error);
        }
        showToastMessage('Successfully created todo...')
    })
    .catch(error => showToastMessage('Failed to post todos...'));
    
    console.log("calling postTodo");
    console.log(todo);
}

function deleteTodo(todo) {
    // implement your code here
    let todoId = todo.id;
    
    fetch(window.location.href + 'api/todo/todoId', { method: 'DELETE' })
    .then(response => {
        if (!response.ok) {
            const error =  response.status;
            throw new Error(error);
        }
        showToastMessage('Successfully deleted todo...')
    })
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

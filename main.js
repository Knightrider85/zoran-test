window.addEventListener('DOMContentLoaded', main);

const todoList = []

const addAction = document.querySelector('.js-add-todo')

addAction.addEventListener('click', () => {
  const todoDescription = document.querySelector('.js-todo-description')

  if (todoDescription && todoDescription.value === '') {
    alert('shithead add a todo')
  }

  /* TODO: you should add a date picker */

  const todo = {
    description: todoDescription.value,
    dateOf: new Date().toLocaleDateString('sv-SE')
  }

  todoList.push(todo)

  /* TODO: save the todoList (array) to localstorage */
  /* TODO: clean the input */

  console.log({
    todoList
  })
})

function getTodos() {
  /* 1. get the todos from localstorage */
  /* 2. loop and print todos in html */
  
  const todoContainer = document.querySelector('.js-todos')

  /* I'm faking a localstorage here */
  const todos = [{
    description: "Watch Star Wars",
    dateOf: "2022-12-19"
  }, {
    description: "Watch Breaking bad",
    dateOf: "2022-12-21"
  }]

	todos.forEach((item) => {
  	todoContainer.innerHTML += `<li>Date: ${item.dateOf}, Todo: ${item.description}</li>`
  })
}

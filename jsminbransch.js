document.addEventListener("DOMContentLoaded", main);

/**
 * skapa möjlighet att lägga till todo
 * se till att tillagd todo hamnar i localstorage
 * sorteras rätt
 * komma in i kalender
 * 
 */

function main() {
    
}

/**
 * start for showing todos today-all todo
 */

function showTodayTodo() {
    const showTodaysTodos = document.getElementById('todayTodoContent');
    if (showTodaysTodos.style.display === "none") {
        showTodaysTodos.style.display = "grid";
    }

    else {
        showTodaysTodos.style.display = "none";
    }
}


function showAllTodo() {
    const showAllTodos = document.getElementById('allTodoContent');
    if(showAllTodos.style.display === "none") {
        showAllTodos.style.display = "grid";
        
    }

    else {
        showAllTodos.style.display = "none";
    }
}

/**
 * start for adding todo and remove
 */

// close button remove list todo
const myTodolist = document.getElementsByTagName ("li");

for (let i = 0; i < myTodolist.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myTodolist[i].appendChild(span);
}

const close = document.getElementsByClassName("close");

for (let i = 0; i <close.length; i++) {
    close[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
    }
}

const checkedList = document.querySelector('ul');
checkedList.addEventListener("click", function(ev) {
    
    if (ev.target.tagName === "li") {
        ev.target.classList.toggle('checked');
    }
}, 
false);

//ny
const todoList = []

const addAction = document.querySelector('.js-add-todo')
addAction.addEventListener('click', () => {
  const todoDescription = document.querySelector('.js-todo-description')

  if (todoDescription && todoDescription.value === '') {
    alert('shithead add a todo')
  }

  /* TODO: you should add a date picker */

	const inputDate = document.getElementById("date").value;
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
  
//nya slutar här

function newTodo() {
    const inputValue = document.getElementById("item").value;
    const inputDate = document.getElementById("date").value;
  
    if (inputValue === '') {
      alert("Du måste skriva en todo");
    }
  
    if (inputDate === '') {
      alert("du måste välja ett datum");
    } else {
  
    }
    
    /* print to current html */
    const test = `<li>${inputValue}</li>`
    
    ul.innerHTML = todayInput;
    
      
    document.getElementById("todayInput").value = "";
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  

/**
 * gamla koden 
 
function newTodo() {
    
    const inputValue = document.getElementById("item").value;
    const inputDate = document.getElementById("date").value;
    
    

    if (inputValue === '') {
        alert("Du måste skriva en todo");

    }

    if (inputDate === '') {
        alert("du måste välja ett datum");
    }

    else {
        document.getElementById ("todayInput").appendChild(li);
    }

    document.getElementById("todayInput").value = "";

    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i] .onclick = function() {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }
    


}
*/


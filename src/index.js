document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form")
  form.addEventListener('submit',(e) =>{
    e.preventDefault()
    buildToDo(e.target.querySelector("#new-task-description").value)
    form.reset()
  })
});

function buildToDo(todo){
  console.log(todo)
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener("click",handleDelete)
  btn.textContent = 'X'
  p.textContent =  `${todo} `
  p.appendChild(btn)
  console.log(p)
  
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
 
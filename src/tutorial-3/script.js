let taskText = document.querySelector('.entering-task')
let addTaskBtn = document.querySelector('.add-task-btn')
let ul = document.querySelector('.tasks-items')
let tasks = []

let render = () => {
  ul.innerHTML = ''
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement('li')
    li.id = `${i}`
    let spanId = 'span' + i
    li.innerHTML = `${tasks[i]}<span id = ${spanId} class='task-item'>x</span>`
    ul.append(li)
    document
      .getElementById(`${spanId}`)
      .addEventListener('click', () => handleClickRemove(i))
  }
}

let handleClickRemove = (taskIndex) => {
  let li = document.getElementById(`${taskIndex}`)
  li.remove()
  tasks.splice(taskIndex, 1)
  render()
}

addTaskBtn.onclick = () => {
  taskText.value ? tasks.push(taskText.value) : alert('Введите таску!')
  render()
  taskText.value = ''
}

window.onload = render

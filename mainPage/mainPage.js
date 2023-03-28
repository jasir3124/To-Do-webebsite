let ToDoInput = document.querySelector('.ToDoInput')
let toDoAdd = document.querySelector('.addToDo')
let lsitContainer = document.querySelector('.listContainer')
let bolean;
let itemList = []

toDoAdd.addEventListener('click', function(){
    ToDo = ToDoInput.value
    ToDoInput.value = ''

    if(ToDo == ''){
        document.querySelector('.toDoError').style.visibility = 'visible'
        bolean = false
    } else {
        document.querySelector('.toDoError').style.visibility = 'hidden'
        bolean = true
    }

    if(bolean){
        itemList.push(ToDo)
        localStorage.setItem('ToDo', JSON.stringify(itemList))
        let li = document.createElement('li')
        li.setAttribute('class', 'listItem')
        lsitContainer.appendChild(li)
        li.innerText = ToDo
    }
})

window.addEventListener('load', function(){
    let storage =JSON.parse(localStorage.getItem('ToDo'))

    if(storage){
        itemList.push(...storage)
    }

    itemList.forEach(function(item){
        let li = document.createElement('li')
        lsitContainer.appendChild(li)
        li.innerText = item
        li.setAttribute('class', 'listItem')
    })
})



let priority = document.querySelector('.prioBtn')

function setPriority(){
    document.querySelector('.optPriority').classList.toggle('show')
}
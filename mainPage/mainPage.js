

// to-do variables
let ToDoInput = document.querySelector('.ToDoInput')
let toDoAdd = document.querySelector('.addToDo')
let lsitContainer = document.querySelector('.listContainer')
let bolean;
let itemList = []

// priority vaiables
let priorityList = []
let priority;
let priorityUrgent = document.querySelector('.urgent')
let priorityHigh = document.querySelector('.high')
let prioritNormal = document.querySelector('.Normal')
let priorityLow = document.querySelector('.low')
let inputContainer = document.querySelector('.inputContainer')



// priority 
function setPriority(){
    document.querySelector('.optPriority').classList.toggle('show')
}



priorityUrgent.onclick = function(){
    priority = 'urgent'
    document.querySelector('.optPriority').classList.remove('show')
    let priorityIcon = document.createElement('i')
    priorityIcon.classList.add('iconRight', 'pe-2', 'fa-solid', 'fa-flag')
    priorityIcon.setAttribute('style', 'color: red;')
    inputContainer.appendChild(priorityIcon)
    priorityList.push(priority)
}
priorityHigh.onclick = function(){
     priority = 'high'
     document.querySelector('.optPriority').classList.remove('show')
    let priorityIcon = document.createElement('i')
    priorityIcon.classList.add('iconRight', 'pe-2', 'fa-solid', 'fa-flag')
    priorityIcon.setAttribute('style', 'color: var(--bs-yellow);')
    inputContainer.appendChild(priorityIcon)
    priorityList.push(priority)
    }
prioritNormal.onclick = function(){
    priority = 'normal'
    document.querySelector('.optPriority').classList.remove('show')
    let priorityIcon = document.createElement('i')
    priorityIcon.classList.add('iconRight', 'pe-2', 'fa-solid', 'fa-flag')
    priorityIcon.setAttribute('style', 'color: blue;')
    inputContainer.appendChild(priorityIcon)
    priorityList.push(priority)
}
priorityLow.onclick = function(){
    priority = 'low'
    document.querySelector('.optPriority').classList.remove('show')
    let priorityIcon = document.createElement('i')
    priorityIcon.classList.add('iconRight', 'pe-2', 'fa-solid', 'fa-flag')
    priorityIcon.setAttribute('style', 'color: grey;')
    inputContainer.appendChild(priorityIcon)
    priorityList.push(priority)
}

console.log(priorityList)

// add to to-do
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
        if(priority == 'urgent'){
            let priorityText = document.createElement('p')
            priorityText.setAttribute('class', 'priorityText')
        }
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


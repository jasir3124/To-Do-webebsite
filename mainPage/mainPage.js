

// to-do variables
let ToDoInput = document.querySelector('.ToDoInput')
let toDoAdd = document.querySelector('.addToDo')
let lsitContainer = document.querySelector('.listContainer')
let itemList = []

// priority vaiables
let priorityList = []
let priority;
let priorityUrgent = document.querySelector('.urgent')
let priorityHigh = document.querySelector('.high')
let prioritNormal = document.querySelector('.Normal')
let priorityLow = document.querySelector('.low')
let inputContainer = document.querySelector('.inputContainer')
let priorityIcon = document.createElement('i')



// priority 
function setPriority(){
    document.querySelector('.optPriority').classList.toggle('show')
}



priorityUrgent.onclick = function(){
    priority = 'urgent'
    document.querySelector('.optPriority').classList.remove('show')
    priorityIcon.classList.add('iconRight', 'pe-2', 'fa-solid', 'fa-flag')
    priorityIcon.setAttribute('style', 'color: red;')
    inputContainer.appendChild(priorityIcon)
}
priorityHigh.onclick = function(){
    priority = 'high'
    document.querySelector('.optPriority').classList.remove('show')
    priorityIcon.classList.add('iconRight', 'pe-2', 'fa-solid', 'fa-flag')
    priorityIcon.setAttribute('style', 'color: var(--bs-yellow);')
    inputContainer.appendChild(priorityIcon)
}
prioritNormal.onclick = function(){
    priority = 'normal'
    document.querySelector('.optPriority').classList.remove('show')
    priorityIcon.classList.add('iconRight', 'pe-2', 'fa-solid', 'fa-flag')
    priorityIcon.setAttribute('style', 'color: blue;')
    inputContainer.appendChild(priorityIcon)
}
priorityLow.onclick = function(){
    priority = 'low'
    document.querySelector('.optPriority').classList.remove('show')
    priorityIcon.classList.add('iconRight', 'pe-2', 'fa-solid', 'fa-flag')
    priorityIcon.setAttribute('style', 'color: var(--bs-indigo);')
    inputContainer.appendChild(priorityIcon)
}



// add to to-do
toDoAdd.addEventListener('click', function(){
    let bolean;
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
        

        if(priority == 'urgent'){
            itemList.push(ToDo)
            localStorage.setItem('ToDo', JSON.stringify(itemList))
            let li = document.createElement('li')
            li.setAttribute('class', 'listItem')
            lsitContainer.appendChild(li)
            li.innerText = ToDo
            priorityIcon.style.display = 'none'
            let priorityText = document.createElement('span')
            priorityText.setAttribute('class', 'toDoPriorityUrgent')
            priorityText.innerHTML = 'Urgent'
            li.appendChild(priorityText)
            localStorage.setItem('priority', JSON.stringify(priorityList))
        } 
        else if (priority == 'high'){
            itemList.push(ToDo)
            localStorage.setItem('ToDo', JSON.stringify(itemList))
            let li = document.createElement('li')
            li.setAttribute('class', 'listItem')
            lsitContainer.appendChild(li)
            li.innerText = ToDo
            priorityIcon.style.display = 'none'
            let priorityText = document.createElement('span')
            priorityText.setAttribute('class', 'toDoPriorityHigh')
            priorityText.innerHTML = 'High'
            li.appendChild(priorityText)
            localStorage.setItem('priority', JSON.stringify(priorityList))
        } 
        else if(priority == 'normal'){
            itemList.push(ToDo)
            localStorage.setItem('ToDo', JSON.stringify(itemList))
            let li = document.createElement('li')
            li.setAttribute('class', 'listItem')
            lsitContainer.appendChild(li)
            li.innerText = ToDo
            priorityIcon.style.display = 'none'
            let priorityText = document.createElement('span')
            priorityText.setAttribute('class', 'toDoPriorityNormal')
            priorityText.innerHTML = 'Normal'
            li.appendChild(priorityText)
            localStorage.setItem('priority', JSON.stringify(priorityList))
        }
        else if(priority == 'low'){
            itemList.push(ToDo)
            localStorage.setItem('ToDo', JSON.stringify(itemList))
            let li = document.createElement('li')
            li.setAttribute('class', 'listItem')
            lsitContainer.appendChild(li)
            li.innerText = ToDo
            priorityIcon.style.display = 'none'
            let priorityText = document.createElement('span')
            priorityText.setAttribute('class', 'toDoPriorityLow')
            priorityText.innerHTML = 'Low'
            li.appendChild(priorityText)
            localStorage.setItem('priority', JSON.stringify(priorityList))
        } else {
            itemList.push(ToDo)
            localStorage.setItem('ToDo', JSON.stringify(itemList))
            let li = document.createElement('li')
            li.setAttribute('class', 'listItem')
            lsitContainer.appendChild(li)
            li.innerText = ToDo
            priorityIcon.style.display = 'none'
        }

        if(priority == 'urgent'){
            priorityList.push(priority)
            priority = undefined
        } else if(priority == 'normal'){
            priorityList.push(priority)
            priority = undefined
        } else if(priority == 'low'){
            priorityList.push(priority)
            priority = undefined
        } else if(priority == 'high'){
            priorityList.push(priority)
            priority = undefined
        } else if(priority == undefined){
            priorityList.push('none')
            priority = undefined
        }
    }

    localStorage.setItem('priority', JSON.stringify(priorityList))

    console.log(priority)
    console.log(priorityList)
})

window.addEventListener('load', function(){
    let storage =JSON.parse(localStorage.getItem('ToDo'))

    if(storage){
        itemList.push(...storage)
    }

    let priorityStorage = JSON.parse(localStorage.getItem('priority'))

    if(priorityStorage){
        priorityList.push(...priorityStorage)
    }
    console.log(priorityList)
    console.log(itemList)

    itemList.forEach(function(item){
        let li = document.createElement('li')
        lsitContainer.appendChild(li)
        li.innerText = item
        li.setAttribute('class', 'listItem')
    })
})


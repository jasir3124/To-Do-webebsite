

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
let priorityNone = document.querySelector('.none')
let inputContainer = document.querySelector('.iconCont')
let priorityIcon = document.querySelector('.priorityIcon')



// priority 
function setPriority(){
    document.querySelector('.optPriority').classList.toggle('show')
}

// when mouse leaves the priority box it disspears
document.querySelector('.optPriority').addEventListener('mouseleave', function(){
    document.querySelector('.optPriority').classList.remove('show')
})


priorityUrgent.onclick = function(){
    priority = 'urgent'
    document.querySelector('.optPriority').classList.remove('show')
    priorityIcon.classList.add( 'pe-2', 'fa-solid', 'fa-flag')
    priorityIcon.setAttribute('style', 'color: red;')
}
priorityHigh.onclick = function(){
    priority = 'high'
    document.querySelector('.optPriority').classList.remove('show')
    priorityIcon.classList.add('pe-2', 'fa-solid', 'fa-flag')
    priorityIcon.setAttribute('style', 'color: var(--bs-yellow);')
}
prioritNormal.onclick = function(){
    priority = 'normal'
    document.querySelector('.optPriority').classList.remove('show')
    priorityIcon.classList.add('pe-2', 'fa-solid', 'fa-flag')
    priorityIcon.setAttribute('style', 'color: blue;')
}
priorityLow.onclick = function(){
    priority = 'low'
    document.querySelector('.optPriority').classList.remove('show')
    priorityIcon.classList.add('pe-2', 'fa-solid', 'fa-flag')
    priorityIcon.setAttribute('style', 'color: var(--bs-indigo);')
}
priorityNone.onclick = function(){
    priority = 'none'
    document.querySelector('.optPriority').classList.remove('show')
    priorityIcon.classList.remove('pe-2', 'fa-solid', 'fa-flag')
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
            priorityList.push(priority)
        } else if(priority == 'normal'){
            priorityList.push(priority)
        } else if(priority == 'low'){
            priorityList.push(priority)
        } else if(priority == 'high'){
            priorityList.push(priority)
        } else if(priority == 'none'){
            priorityList.push(priority)
        }  else {
            priorityList.push('none')
        }

        if(priority == 'urgent'){
            itemList.push(ToDo)
            localStorage.setItem('ToDo', JSON.stringify(itemList))
            let li = document.createElement('li')
            li.setAttribute('class', 'listItem')
            lsitContainer.appendChild(li)
            li.innerText = ToDo
            priorityIcon.style.display = 'none'
            let priorityTextCont = document.createElement('div')
            li.appendChild(priorityTextCont)
            priorityTextCont.setAttribute('class', 'priorityCont')
            let priorityText = document.createElement('span')
            priorityText.setAttribute('class', 'toDoPriorityUrgent')
            priorityText.innerHTML = 'Urgent'
            priorityTextCont.appendChild(priorityText)
            localStorage.setItem('priority', JSON.stringify(priorityList))
            li.scrollIntoView({behavior: 'smooth', block:"center"})
        } 
        else if (priority == 'high'){
            itemList.push(ToDo)
            localStorage.setItem('ToDo', JSON.stringify(itemList))
            let li = document.createElement('li')
            li.setAttribute('class', 'listItem')
            lsitContainer.appendChild(li)
            li.innerText = ToDo
            priorityIcon.style.display = 'none'
            let priorityTextCont = document.createElement('div')
            li.appendChild(priorityTextCont)
            priorityTextCont.setAttribute('class', 'priorityCont')
            let priorityText = document.createElement('span')
            priorityText.setAttribute('class', 'toDoPriorityHigh')
            priorityText.innerHTML = 'High'
            priorityTextCont.appendChild(priorityText)
            localStorage.setItem('priority', JSON.stringify(priorityList))
            li.scrollIntoView({behavior: 'smooth', block:"center"})
        } 
        else if(priority == 'normal'){
            itemList.push(ToDo)
            localStorage.setItem('ToDo', JSON.stringify(itemList))
            let li = document.createElement('li')
            li.setAttribute('class', 'listItem')
            lsitContainer.appendChild(li)
            li.innerText = ToDo
            priorityIcon.style.display = 'none'
            let priorityTextCont = document.createElement('div')
            li.appendChild(priorityTextCont)
            priorityTextCont.setAttribute('class', 'priorityCont')
            let priorityText = document.createElement('span')
            priorityText.setAttribute('class', 'toDoPriorityNormal')
            priorityText.innerHTML = 'Normal'
            priorityTextCont.appendChild(priorityText)
            localStorage.setItem('priority', JSON.stringify(priorityList))
            li.scrollIntoView({behavior: 'smooth', block:"center"})
        }
        else if(priority == 'low'){
            itemList.push(ToDo)
            localStorage.setItem('ToDo', JSON.stringify(itemList))
            let li = document.createElement('li')
            li.setAttribute('class', 'listItem')
            lsitContainer.appendChild(li)
            li.innerText = ToDo
            priorityIcon.style.display = 'none'
            let priorityTextCont = document.createElement('div')
            li.appendChild(priorityTextCont)
            priorityTextCont.setAttribute('class', 'priorityCont')
            let priorityText = document.createElement('span')
            priorityText.setAttribute('class', 'toDoPriorityLow')
            priorityText.innerHTML = 'Low'
            priorityTextCont.appendChild(priorityText)
            localStorage.setItem('priority', JSON.stringify(priorityList))
            li.scrollIntoView({behavior: 'smooth', block:"center"})
        } else {
            itemList.push(ToDo)
            localStorage.setItem('ToDo', JSON.stringify(itemList))
            let li = document.createElement('li')
            li.setAttribute('class', 'listItem')
            lsitContainer.appendChild(li)
            li.innerText = ToDo
            priorityIcon.style.display = 'none'
            localStorage.setItem('priority', JSON.stringify(priorityList))
            li.scrollIntoView({behavior: 'smooth', block:"center"})
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


    // itemList.forEach(function(item){
    //     let li = document.createElement('li')
    //     lsitContainer.appendChild(li)
    //     li.innerText = item
    //     li.setAttribute('class', 'listItem')
    // })

        itemList.forEach(function(item){
            
    })
})


// shows username
let usernameText = document.querySelector('.username')
let username = JSON.parse(localStorage.getItem('username'))
function showUsername(){
    if(username){
        usernameText.innerHTML = username
    } else{
        usernameText.innerHTML = 'User'
    }
}
showUsername()

// scroll to top btn
let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


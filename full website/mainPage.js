

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
    priority = 'Urgent'
    document.querySelector('.optPriority').classList.remove('show')
    priorityIcon.classList.add( 'pe-2', 'fa-solid', 'fa-flag')
    priorityIcon.setAttribute('style', 'color: red;')
}
priorityHigh.onclick = function(){
    priority = 'High'
    document.querySelector('.optPriority').classList.remove('show')
    priorityIcon.classList.add('pe-2', 'fa-solid', 'fa-flag')
    priorityIcon.setAttribute('style', 'color: var(--bs-yellow);')
}
prioritNormal.onclick = function(){
    priority = 'Normal'
    document.querySelector('.optPriority').classList.remove('show')
    priorityIcon.classList.add('pe-2', 'fa-solid', 'fa-flag')
    priorityIcon.setAttribute('style', 'color: blue;')
}
priorityLow.onclick = function(){
    priority = 'Low'
    document.querySelector('.optPriority').classList.remove('show')
    priorityIcon.classList.add('pe-2', 'fa-solid', 'fa-flag')
    priorityIcon.setAttribute('style', 'color: var(--bs-indigo);')
}
priorityNone.onclick = function(){
    priority = 'None'
    document.querySelector('.optPriority').classList.remove('show')
    priorityIcon.classList.remove('pe-2', 'fa-solid', 'fa-flag')
}


// add to to-do
toDoAdd.addEventListener('click', function(){
    ToDo = ToDoInput.value
    ToDoInput.value = ''


    if(ToDo == ''){
        document.querySelector('.toDoError').style.visibility = 'visible'
        return
    } 


            itemList.push(ToDo)
            localStorage.setItem('ToDo', JSON.stringify(itemList))
            let li = createListLocal(ToDo)
            let priorityCont = createPriorityCont()
            let delBtn = createDeleteButton()
            li.appendChild(priorityCont)
            let priorityText = document.createElement('span')
            let priorityClass;
            switch(priority){
                case 'Urgent': priorityClass = 'toDoPriorityUrgent'
                break;
                case 'High': priorityClass = 'toDoPriorityHigh'
                break;
                case 'Normal': priorityClass = 'toDoPriorityNormal'
                break;
                case 'Low': priorityClass = 'toDoPriorityLow'
                break ;
                case 'None': priorityText.style.display = 'none'
                break ;
                case undefined : priorityText.style.display = 'none'
            }
            priorityText.setAttribute('class', priorityClass)
            priorityText.innerHTML = priority
            priorityCont.appendChild(priorityText)
            priorityCont.appendChild(delBtn)
            li.scrollIntoView({behavior: 'smooth', block:"center"})
            flashList(li)
            if(flashList(li)){
                // li.classList.add('listFlash')
                console.log('is in view')
            }


        if(priority == 'Urgent'){
            priorityList.push(priority)
            priority = undefined
        } else if(priority == 'Normal'){
            priorityList.push(priority)
            priority = undefined
        } else if(priority == 'Low'){
            priorityList.push(priority)
            priority = undefined
        } else if(priority == 'High'){
            priorityList.push(priority)
            priority = undefined
        } else if(priority == 'None'){
            priorityList.push(priority)
            priority = undefined
        }  else {
            priorityList.push('None')
            priority = undefined
        }

    localStorage.setItem('priority', JSON.stringify(priorityList))

    
    console.log(priorityList)
})


window.addEventListener('load', function(){
    let storage = JSON.parse(localStorage.getItem('ToDo'))

    if(storage){
        itemList.push(...storage)
    }

    let priorityStorage = JSON.parse(localStorage.getItem('priority'))

    if(priorityStorage){
        priorityList.push(...priorityStorage)
    }

    console.log(priorityList)
    console.log(itemList)


for (let i = 0; i < itemList.length; i++) {
    const li = document.createElement('li');
    let delBtn = createDeleteButton()
    const priorityCont = createPriorityCont()
    const prioritySpan = document.createElement('span');
    li.setAttribute('class', 'listItem');
    li.innerText = itemList[i];
    let priorityClass;
    switch(priorityList[i]){
        case 'Urgent': priorityClass = 'toDoPriorityUrgent'
        break;
        case 'High': priorityClass = 'toDoPriorityHigh'
        break;
        case 'Normal': priorityClass = 'toDoPriorityNormal'
        break;
        case 'Low': priorityClass = 'toDoPriorityLow'
        break ;
        case 'None': prioritySpan.style.display = 'none'
        break ;
        case undefined : prioritySpan.style.display = 'none'
    }
    li.appendChild(priorityCont);
    prioritySpan.innerHTML = priorityList[i];
    prioritySpan.setAttribute('class', priorityClass);
    priorityCont.appendChild(prioritySpan);
    priorityCont.appendChild(delBtn)   
    lsitContainer.appendChild(li);
  }
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

function createListLocal(ToDo){
    let li = document.createElement('li')
    li.setAttribute('class', 'listItem')
    lsitContainer.appendChild(li)
    li.innerText = ToDo
    priorityIcon.style.display = 'none'
    return li;
}

function createDeleteButton(){
    let delBtn = document.createElement('button')
    delBtn.setAttribute('class', 'deleteBtn')
    delBtn.innerHTML = 'Delete'
    return delBtn;
}

function createPriorityCont(){
    let priorityCont = document.createElement('div')
    priorityCont.setAttribute('class', 'priorityCont')
    return priorityCont
}

function flashList(li){
        let rect = li.getBoundingClientRect();
        let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
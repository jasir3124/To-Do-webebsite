// time variables 
let time;
let timeArray = [];

// to-do variables
let ToDoInput = document.querySelector('.ToDoInput')
let toDoAdd = document.querySelector('.addToDo')
let listContainer = document.querySelector('.listContainer')
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

            document.querySelector('.toDoError').style.visibility = 'hidden'
            itemList.push(ToDo)
            localStorage.setItem('ToDo', JSON.stringify(itemList))
            let li = createListLocal(ToDo)
            let priorityCont = createPriorityCont()
            let delBtn = createDeleteButton()
            let time = getTimeForToDo()
            listContainer.appendChild(li)
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
            priorityCont.appendChild(time)
            li.scrollIntoView({behavior: 'smooth', block:"center"})
            checkInView(li)


            if(priority == 'none' || priority == undefined){
                priorityList.push('None')
                priority = undefined
            } else {
                priorityList.push(priority)
                priority = undefined
            }

    localStorage.setItem('priority', JSON.stringify(priorityList))

    console.log(itemList)
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

    let timeStorage = JSON.parse(localStorage.getItem('time'))

    if(timeStorage){
        timeArray.push(...timeStorage)
    }
    console.log(priorityList)
    console.log(itemList)


for (let i = 0; i < itemList.length; i++) {
    const li = document.createElement('li');
    let delBtn = createDeleteButton()
    const priorityCont = createPriorityCont()
    const prioritySpan = document.createElement('span');
    const timeText = document.createElement('span')
    let cont = document.createElement('div')
    cont.classList.add('ms-1' , 'mt-1')
    li.setAttribute('class', 'listItem');
    li.innerText = itemList[i];
    timeText.innerHTML = timeArray[i]
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
    }
    li.appendChild(priorityCont);
    prioritySpan.innerHTML = priorityList[i];
    prioritySpan.setAttribute('class', priorityClass);
    priorityCont.appendChild(prioritySpan);
    priorityCont.appendChild(delBtn)  
    cont.appendChild(timeText)
    priorityCont.appendChild(cont)
    listContainer.appendChild(li);
  }
})

// show time
let days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
function getTimeForToDo(){
    let cont = document.createElement('div')
    cont.classList.add('ms-1' , 'mt-1')
    let date = new Date()
    let day = date.getDay()
    let hours =  date.getHours()
    let minutes = date.getMinutes()
    let time = days[day] + ' ' + hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
    timeArray.push(time)
    localStorage.setItem('time', JSON.stringify(timeArray))
    let timeText = document.createElement('span')
    timeText.innerHTML = time
    cont.appendChild(timeText)
    return cont
}



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
let mybutton = document.querySelector(".myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// create delete button
function createDeleteButton(){
    let delBtn = document.createElement('button')
    delBtn.setAttribute('class', 'deleteBtn')
    delBtn.innerHTML = 'Delete'
    delBtn.addEventListener('click', function(){
        let li = this.parentNode.parentNode;
        let index = Array.from(li.parentNode.children).indexOf(li);
        itemList.splice(index, 1)
        localStorage.setItem('ToDo', JSON.stringify(itemList))
        priorityList.splice(index, 1)
        localStorage.setItem('priority', JSON.stringify(priorityList))
        timeArray.splice(index, 1)
        localStorage.setItem('time', JSON.stringify(timeArray))
        li.remove();
    });
    return delBtn;
}

function createPriorityCont(){
    let priorityCont = document.createElement('div')
    priorityCont.setAttribute('class', 'priorityCont')
    return priorityCont
}

function createListLocal(ToDo){
    let li = document.createElement('li')
    li.setAttribute('class', 'listItem')
    li.innerText = ToDo
    priorityIcon.style.display = 'none'
    return li;
}


function checkInView(li) {
    let intervalId = setInterval(function() {
      let isInView = flashList(li);
      if (isInView) {
        clearInterval(intervalId);
        console.log('is in view');
        li.classList.add('listFlash')
      }
    }, 100);
  }
  function flashList(li){
    let rect = li.getBoundingClientRect();
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
let stickyNote1Input1 = document.querySelector('.stickyWallInput1')
let stickyNote1AddBtn1 = document.querySelector('.stickyNoteAddBtn1')
let listArray1 = []
let list1 = document.querySelector('.listContainer1')

stickyNote1AddBtn1.addEventListener('click', function(){
    let value = stickyNote1Input1.value
    let bolean = false
    if (value == ''){
        document.querySelector('.inputError1').style.visibility = 'visible'
    } else {
        bolean = true
        document.querySelector('.inputError1').style.visibility = 'hidden'
    }

    if(bolean){
        listArray1.push(value)
        let li = document.createElement('li')
        list1.appendChild(li)
        li.innerHTML = value
        stickyNote1Input1.value =  ''   
        localStorage.setItem('stickyNote1', JSON.stringify(listArray1))
    }
})

window.addEventListener('load', function(){
    let storage1 = JSON.parse(localStorage.getItem('stickyNote1'))

    if(storage1){
        listArray1.push(...storage1)
    }

    listArray1.forEach(function(item){
        let li = document.createElement('li')
        list1.appendChild(li)
        li.innerText = item
    })
})

// blue sticky note
let stickyNote1Input2 = document.querySelector('.stickyWallInput2')
let stickyNote1AddBtn2 = document.querySelector('.stickyNoteAddBtn2')
let listArray2 = []
let list2 = document.querySelector('.listContainer2')

stickyNote1AddBtn2.addEventListener('click', function(){
    let value = stickyNote1Input2.value
    let bolean = false
    if (value == ''){
        document.querySelector('.inputError2').style.visibility = 'visible'
    } else {
        bolean = true
        document.querySelector('.inputError2').style.visibility = 'hidden'
    }

    if(bolean){
        listArray2.push(value)
        let li = document.createElement('li')
        list2.appendChild(li)
        li.innerHTML = value
        stickyNote1Input2.value =  ''   
        localStorage.setItem('stickyNote2', JSON.stringify(listArray2))
    }
})

window.addEventListener('load', function(){
    let storage2 = JSON.parse(localStorage.getItem('stickyNote2'))

    if(storage2){
        listArray2.push(...storage2)
    }

    listArray2.forEach(function(item2){
        let li = document.createElement('li')
        list2.appendChild(li)
        li.innerText = item2
    })
})



// red sticky note
let stickyNote1Input3 = document.querySelector('.stickyWallInput3')
let stickyNote1AddBtn3 = document.querySelector('.stickyNoteAddBtn3')
let listArray3 = []
let list3 = document.querySelector('.listContainer3')

stickyNote1AddBtn3.addEventListener('click', function(){
    let value = stickyNote1Input3.value
    let bolean = false
    if (value == ''){
        document.querySelector('.inputError3').style.visibility = 'visible'
    } else {
        bolean = true
        document.querySelector('.inputError3').style.visibility = 'hidden'
    }

    if(bolean){
        listArray3.push(value)
        let li = document.createElement('li')
        list3.appendChild(li)
        li.innerHTML = value
        stickyNote1Input3.value =  ''   
        localStorage.setItem('stickyNote3', JSON.stringify(listArray3))
    }
})

window.addEventListener('load', function(){
    let storage3 = JSON.parse(localStorage.getItem('stickyNote3'))

    if(storage3){
        listArray3.push(...storage3)
    }

    listArray3.forEach(function(item3){
        let li = document.createElement('li')
        list3.appendChild(li)
        li.innerText = item3
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
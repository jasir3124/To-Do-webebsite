let stickyNote1Input = document.querySelector('.stickyWallInput1')
let stickyNote1AddBtn = document.querySelector('.stickyNoteAddBtn1')
let listArray = []
let list = document.querySelector('.listContainer')

stickyNote1AddBtn.addEventListener('click', function(){
    let value = stickyNote1Input.value
    let bolean = false
    if (value == ''){
        document.querySelector('.inputError1').style.visibility = 'visible'
    } else {
        bolean = true
        document.querySelector('.inputError1').style.visibility = 'hidden'
    }

    if(bolean){
        listArray.push(value)
        let li = document.createElement('li')
        list.appendChild(li)
        li.innerHTML = value
        stickyNote1Input.value =  ''   
    }

})
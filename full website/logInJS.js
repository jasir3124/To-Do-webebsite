

function valid(event){
    event.preventDefault()

    let email = document.querySelector('#emailInput').value
    let password = document.getElementById('passwordInput').value
    let validEmailRegex =   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let validPasswordRegex =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*$/

     if(email.match(validEmailRegex) && password.match(validPasswordRegex)){
        window.location.href = ('mainPage.html')
        let username = document.getElementById('usernameInput').value
        localStorage.setItem('username', JSON.stringify(username))
        document.getElementById('passwordInput').style.border = '1.5px solid green'
        document.getElementById('passwordError').style.display = 'none'
        document.getElementById('emailInput').style.border = '1.5px solid green'
        document.getElementById('emailError').style.display = 'none'
        return true
    } else if((!email.match(validEmailRegex)) && password.match(validPasswordRegex)){
        document.getElementById('emailInput').style.border = '1.5px solid #3d0b0b'
        document.getElementById('emailError').style.display = 'block'
        document.getElementById('passwordInput').style.border = '1.5px solid green'
        document.getElementById('passwordError').style.display = 'none'
        return false
    } else if(email.match(validEmailRegex) && (!password.match(validPasswordRegex))){
        document.getElementById('emailInput').style.border = '1.5px solid green'
        document.getElementById('emailError').style.display = 'none'
        document.getElementById('passwordInput').style.border = '1.5px solid #3d0b0b'
        document.getElementById('passwordError').style.display = 'block'
        return false
    } else if((!email.match(validEmailRegex)) && (!password.match(validPasswordRegex))){
        document.getElementById('emailInput').style.border = '1.5px solid #3d0b0b'
        document.getElementById('emailError').style.display = 'block'
        document.getElementById('passwordInput').style.border = '1.5px solid #3d0b0b'
        document.getElementById('passwordError').style.display = 'block'
        return false
     } else if (email.match(validEmailRegex) && password === ''){
        document.getElementById('passwordInput').style.border = '1.5px solid #3d0b0b'
        document.getElementById('passwordError').style.display = 'block'
        document.getElementById('emailInput').style.border = '1.5px solid green'
        document.getElementById('emailError').style.display = 'none'
        return false
     }else if (email === '' && password.match(validPasswordRegex)){
        document.getElementById('emailInput').style.border = '1.5px solid #3d0b0b'
        document.getElementById('emailError').style.display = 'block'
        document.getElementById('passwordInput').style.border = '1.5px solid #3d0b0b'
        document.getElementById('passwordError').style.display = 'block'
        return false
     } else if(email === '' && password === '' && username === ''){
        document.getElementById('passwordInput').style.border = '1.5px solid #3d0b0b'
        document.getElementById('passwordError').style.display = 'block'
        document.getElementById('emailInput').style.border = '1.5px solid #3d0b0b'
        document.getElementById('emailError').style.display = 'block'
        return false
     }
} 




const togglePassword = document.querySelector('#togglePassword');

togglePassword.addEventListener('click', function (e) {
    let password = document.getElementById('passwordInput');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye')
    this.classList.toggle('fa-eye-slash');
});
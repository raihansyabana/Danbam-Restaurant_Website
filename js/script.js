const namee = document.getElementById('namee')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    let messages = []
    if (namee.value === '' || namee.value === null){
        messages.push('Name is required')
    }
    else{
        errorElement.innerText = ''
    }
    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

    if(email.value === '' || email.value === null){
        messages.push('Email is required')
    }  
    else{
        errorElement.innerText = ''
    }
})
const form = document.querySelector('.form')
const input = document.querySelector('.input')
const errorCont = document.querySelector('.error-cont')

form.onsubmit = () => {
    const email  = input.value

    if(isEmail(email)){
        console.log('valid')    
    }
    else{
        errorCont.innerHTML = ''
        const p = document.createElement('p')
        p.classList = 'error'
        p.innerText = 'Please enter a valid email address'
        p.style.cssText = `
            color: var(--Light-Red);
            text-align: left !important;
            font-size: 12px;
            margin-top: 8px;
        `
        errorCont.appendChild(p)
    }
    return false
}

function isEmail(emailAdress){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) 
    return true; 

   else 
    return false; 
}
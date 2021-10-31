const form = document.getElementById("form");
const firstName = document.getElementById("firstname"); 
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", e =>{
    e.preventDefault();
    checkInputs();
})
function checkInputs(){
    const firstValue = firstName.value.trim();
    const lastValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstValue === ''){
        addErrorTo(firstName,'First Name cannot be empty');
    }else{
        removeErrorFrom(firstName);
    }
    if(lastValue === ''){
        addErrorTo(lastName,'Last Name cannot be empty');
    }else{
        removeErrorFrom(lastName);
    }
   if(emailValue === ''){
       addErrorTo(email,'Email cannot be empty');
   }else if(!validateEmail(emailValue)){
       addErrorTo(email,'Invalid Email');
   }else{
       removeErrorFrom(email)
   }
   if(passwordValue === ''){
       addErrorTo(password,'Password cannot be empty');
   }else{
       removeErrorFrom(password);
   }
}

function addErrorTo(input,message){
        boxContent = input.parentElement;
        const small = boxContent.querySelector('small');
        boxContent.className = 'box-content error';
        small.innerText = message;
        
}
function removeErrorFrom(input){
    const boxContent = input.parentElement;
    boxContent.className = 'box-content success';
}; 

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


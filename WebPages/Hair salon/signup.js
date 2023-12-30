let mainForm = document.querySelector("form");
let userName = document.getElementById("name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phoneNumber");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let userNameError = document.getElementById("userNameError")
let passwordError = document.getElementById("passwordError");
let emailPhoneError = document.getElementById("emailPhoneError");
let submitButton = document.getElementById("submitButton");


submitButton.disabled = true;
submitButton.classList.add("disabled");


mainForm.addEventListener("submit", (arrow) => {
    arrow.preventDefault();

    let userNameInput = userName.value;
    let emailInput = email.value;
    let phoneNumberInput = phoneNumber.value;
    let passwordInput = password.value;
    let confirmPasswordInput = confirmPassword.value;

    if(emailInput == localStorage.getItem("email") || phoneNumberInput == localStorage.getItem("phone_number_for_akame")){
        emailPhoneError.innerHTML = "Email or phone number already exist, try with another..."
    }
    else if(userNameInput.length > 3 && passwordInput === confirmPasswordInput){
        submitButton.disabled = false;
        submitButton.classList.remove("disabled");
        
        localStorage.setItem("name",userNameInput); 
        localStorage.setItem("email", emailInput);
        localStorage.setItem("phone_number_for_akame", phoneNumberInput);
        localStorage.setItem("password_for_akame", passwordInput)

        confirm("Successfully created account, Use your phone number and password to login to Akame")
        window.open("login.html");
    }
})

function show_password(){
    if(password.type == "password" && confirmPassword.type == "password"){
        confirmPassword.type = "text";
        password.type = "text";
    }
    else{
        confirmPassword.type = "password";
        password.type = "password";
    }
}


confirmPassword.addEventListener("keyup" , () => {

    let passwordInput = password.value;
    let confirmPasswordInput = confirmPassword.value;

    if(passwordInput != confirmPasswordInput){
        submitButton.disabled = true;
        submitButton.classList.add("disabled");

        password.classList.add("warningSignUp");
        password.classList.remove("successSignUp");
        confirmPassword.classList.add("warningSignUp");
        confirmPassword.classList.remove("successSignUp");

        passwordError.innerHTML = "password doesn't match"
        
    }
   else if(passwordInput == confirmPasswordInput){
        submitButton.disabled = false;
        submitButton.classList.remove("disabled");

        password.classList.remove("warningSignUp");
        password.classList.add("successSignUp");
        confirmPassword.classList.remove("warningSignUp");
        confirmPassword.classList.add("successSignUp");

        passwordError.innerHTML = "";
    }
})

userName.addEventListener("keyup", () =>{

    let userNameInput = userName.value;

    if(userNameInput.length < 3){
        userNameError.innerHTML = "Name should me minimum 3 characters long";
        submitButton.disabled = true;
        submitButton.classList.add("disabled");
    }
    else if(userName.value == ""  ||  email.value == "" || phoneNumber.value == "" || password.value == "" || confirmPassword.value == ""){
        userNameError.innerHTML = "";
        submitButton.disabled = true;
        submitButton.classList.add("disabled");
    }
    else{
        userNameError.innerHTML = "";
        submitButton.disabled = false;
        submitButton.classList.remove("disabled");
    }
})


email.addEventListener("keyup", () =>{

    let emailInput = email.value;

    if(emailInput == ""){
        submitButton.disabled = true;
        submitButton.classList.add("disabled");
    }
})

phoneNumber.addEventListener("keyup", () =>{

    let phoneNumberInput = phoneNumber.value;

    if(phoneNumberInput == ""){
        submitButton.disabled = true;
        submitButton.classList.add("disabled");
    }
})
let mainForm = document.querySelector("form");
let phoneNumber = document.getElementById("phoneNumber");
let password = document.getElementById("password");
let submitButton = document.getElementById("submitButton");
let phoneNumberError = document.getElementById("phoneNumberError");
let passwordError = document.getElementById("passwordError");

mainForm.addEventListener("submit" , (arrow) => {
    arrow.preventDefault();

    let phoneNumberInput = phoneNumber.value;
    let passwordInput = password.value;

    if(phoneNumberInput == "" || passwordInput == ""){
        alert("Credentials must be filled");
        phoneNumberError.innerHTML = "Phone number must be filled";
        passwordError.innerHTML = "Password must be filled"
    }
    else if(phoneNumberInput != localStorage.getItem("phone_number_for_akame") || passwordInput != localStorage.getItem("password_for_akame")){
        alert("Incorrect credentials");
        phoneNumberError.innerHTML = "incorrect credentials";
        passwordError.innerHTML = "incorrect credentials"
    }
    else if(phoneNumberInput == localStorage.getItem("phone_number_for_akame") && passwordInput == localStorage.getItem("password_for_akame")){
        confirm("Succesfullu logged in")
        window.open("index.html");
    }
})

function show_password(){
    if(password.type == "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }
}


phoneNumber.addEventListener("keyup", () => {
    
    let phoneNumberInput = phoneNumber.value;

    if(phoneNumberInput == ""){
        phoneNumberError.innerHTML = "Phone number must be filled";
    }
    else if(phoneNumberInput != ""){
        phoneNumberError.innerHTML = "";
    }
})


password.addEventListener("keyup", () => {
    
    let passwordInput = password.value;

    if(passwordInput == ""){
        passwordError.innerHTML = "Password must be filled";
    }
    else if(passwordInput != ""){
        passwordError.innerHTML = "";
    }
})
const signupForm = document.getElementById("signupform");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const firstNameWarningText = document.getElementById("firstNamewarningtext")
const lastNameWarningText = document.getElementById("lastNamewarningtext")
const emailWarningText = document.getElementById("emailwarningtext")
const passwordWarningText = document.getElementById("passwordwarningtext")
const firstNameError = document.getElementById('firstnameerror')
const lastNameError = document.getElementById('lastnameerror')
const emailError = document.getElementById('emailerror')
const passwordError = document.getElementById('passsworderror')





submit.addEventListener('click', function (e) {

    e.preventDefault();
    checkInputs();
})



firstNameError.style.visibility = "hidden"

function checkInputs() {

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // FIRST NAME DEFAULT VALUES
    firstName.style.borderColor = ""
    firstName.style.borderWidth = "";
    firstNameWarningText.innerText = " "
    firstNameError.style.visibility = "hidden"

    //LAST NAME DEFAULT VALUES

    lastName.style.borderColor = ""
    lastName.style.borderWidth = "";
    lastNameWarningText.innerText = " "
    lastNameError.style.visibility = "hidden"

    //EMAIL DEFAULT VALUES

    email.style.borderColor = ""
    email.style.borderWidth = "";
    emailWarningText.innerText = " "
    emailError.style.visibility = "hidden"



    //PASSWORD DEFAULT VALUES

    password.style.borderColor = ""
    password.style.borderWidth = "";
    passwordWarningText.innerText = " "
    passwordError.style.visibility = "hidden"


    //FIRST NAME//

    if (firstNameValue === '') {
        firstName.style.borderColor = "hsl(0, 100%, 74%)"
        firstName.style.borderWidth = "2px";
        firstNameWarningText.innerText = "First Name cannot be empty"
        firstNameError.style.visibility = "visible"
    }

    else if (firstNameValue.length < 4) {
        firstName.style.borderColor = "hsl(0, 100%, 74%)"
        firstName.style.borderWidth = "2px";
        firstNameWarningText.innerText = "Your name is too short, i don't like short name. SORRY but No SORRY i can't accept it"
        firstNameError.style.visibility = "visible"

    }
    else if (firstNameValue.length > 5) {
        firstName.style.borderColor = "hsl(0, 100%, 74%)"
        firstName.style.borderWidth = "2px";
        firstNameWarningText.innerText = "Your name is too long, i don't like long name. SORRY but No SORRY i can't accept it"
        firstNameError.style.visibility = "visible"

    }

    else {

        firstName.value = firstNameValue;
        firstName.style.borderColor = "hsl(154, 59%, 51%)"
        firstName.style.borderWidth = "2px";
    }


    //LAST NAME//
    if (lastNameValue === '') {
        lastName.style.borderColor = "hsl(0, 100%, 74%)"
        lastName.style.borderWidth = "2px";
        lastNameError.style.visibility = "visible"
        lastNameWarningText.innerText = "Last Name cannot be empty"

    }

    else {

        lastName.value = firstNameValue;
        lastName.style.borderColor = "hsl(154, 59%, 51%)"
        lastName.style.borderWidth = "2px";
    }


    //EMAIL//
    if (emailValue === '') {
        email.style.borderColor = "hsl(0, 100%, 74%)"
        email.style.borderWidth = "2px";
        emailError.style.visibility = "visible"
        emailWarningText.innerText = "email cannot be empty"

    }

    else if (emailValue.slice(-4) !== '.com') {
        email.style.borderColor = "hsl(0, 100%, 74%)"
        email.style.borderWidth = "2px";
        emailError.style.visibility = "visible"
        emailWarningText.innerText = "This doesn't look like Email, check again you careless fool🤦‍♂️"
    }


    else {

        email.value = firstNameValue;
        email.style.borderColor = "hsl(154, 59%, 51%)"
        email.style.borderWidth = "2px";
    }

    //PASSWORD//
    if (passwordValue === '') {
        password.style.borderColor = "hsl(0, 100%, 74%)"
        password.style.borderWidth = "2px";
        passwordError.style.visibility = "visible"
        passwordWarningText.innerText = "Password cannot be empty"

    }

    else if (passwordValue.length < 9) {
        password.style.borderColor = "hsl(0, 100%, 74%)"
        password.style.borderWidth = "2px";
        passwordError.style.visibility = "visible"
        passwordWarningText.innerText = "Don't be lazy sir/madam, Choose a long Password. Password is too short"
    }
    else if (passwordValue.length < 14) {
        password.style.borderColor = "hsl(0, 100%, 74%)"
        password.style.borderWidth = "2px";
        passwordError.style.visibility = "visible"
        passwordWarningText.innerText = "Don't be lazy sir/madam, it is still short. Choose a long Password"
    }

    else {

        password.value = firstNameValue;
        password.style.borderColor = "hsl(154, 59%, 51%)"
        password.style.borderWidth = "2px"
    }


    lastName.value = lastNameValue;
    email.value = emailValue;
    password.value = passwordValue;

};



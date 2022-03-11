import _ from 'lodash';
import './mystyle.css'; 

//for watching the html file 
require('./index.html')

const data = {
    email: '',
    country: '',
    zipcode: 0,
    password: 0,
    confirmation: 0,
    emailValid: false, 
    countryValid: false, 
    zipValid: false, 
    passValid: false, 
    confirmationValid: false, 
    isValid: false, 
    setEmail(item) {
        this.email= item; 
    },
    setCountry(item) {
        this.country = item;
    },
    setZip(item) {
        this.zipcode = item;
    },
    setPassword(item) {
        this.password = item;
    },
    setConfirmation(item) {
        this.confirmation = item;
    },
}

function validityListener() {

    console.log('email: ' + data.emailValid)
    console.log('country: ' + data.countryValid )
    console.log('zip: ' + data.zipValid)
    console.log('password: ' + data.passValid )
    console.log('confirmation: ' + data.confirmationValid)

    if (data.emailValid && data.countryValid && data.zipValid && data.passValid && data.confirmationValid) {
        document.getElementById('submitButton').disabled = false;
    }
    else {
        document.getElementById('submitButton').disabled = true;
    }
}

validityListener(); 

const email = document.getElementById('email'); 
const country = document.getElementById('country');
const zip = document.getElementById('zipcode')
const password = document.getElementById('password')
const confirmation = document.getElementById('confirmPassword')

email.addEventListener('input', function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Please, make sure that your email format is the correct form of \"Example@email.com\"');
        email.reportValidity();
        data.emailValid = false; 
    }
    else if (email.validity.valueMissing) {
        email.setCustomValidity('This field cannot be empty.');
        email.reportValidity();
        data.emailValid = false; 
    }
    else {
        email.setCustomValidity('');
        data.emailValid = true; 
    }
    validityListener() 
})


country.addEventListener('input', function (event) {
    if (country.validity.valueMissing) {
        country.setCustomValidity('This field cannot be empty.');
        country.reportValidity();
        data.countryValid = false; 
    }
    else {
        country.setCustomValidity('');
        data.countryValid = true; 
    }
    validityListener() 
})


zip.addEventListener('input', function (event) {
    if (zip.validity.valueMissing) {
        zip.setCustomValidity('This field cannot be empty.');
        zip.reportValidity();
        data.zipValid = false; 
    }
    else if (zip.validity.rangeUnderflow) {
        zip.setCustomValidity('Your zipcode is too short')
        zip.reportValidity();
        data.zipValid = false; 
    }
    else if (zip.validity.patternMismatch) {
        zip.setCustomValidity('Please, enter numeric characters only.')
        zip.reportValidity();
        data.zipValid = false;
    }
    else {
        zip.setCustomValidity('');
        data.zipValid = true; 
    }
    validityListener() 
})

password.addEventListener('input', function (event) {
    if (password.validity.valueMissing) {
        password.setCustomValidity('This field cannot be empty.');
        password.reportValidity();
        data.passValid = false; 
    }
    else if (password.validity.tooShort) {
        password.setCustomValidity('Your password is too short. It must be at least 4 digits long.')
        password.reportValidity();
        data.passValid = false; 
    }
    else {
        password.setCustomValidity('');
        data.passValid = true; 
    }
    validityListener() 
})

confirmation.addEventListener('input', function (event) {
    if (confirmation.validity.valueMissing) {
        confirmation.setCustomValidity('This field cannot be empty.');
        confirmation.reportValidity();
        data.confirmationValid = false; 
    }
    else if (confirmation.value !== password.value) {
        confirmation.setCustomValidity('The passwords you type do not match. Please, try again.')
        confirmation.reportValidity();
        data.confirmationValid = false; 
    }
    else {
        confirmation.setCustomValidity('');
        data.confirmationValid = true; 
    }
    validityListener();
})

const handleSubmission = () => {
    alert('Your information has been submitted.')
}

document.getElementById('submitButton').addEventListener('click', handleSubmission)
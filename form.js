// FORM VALIDATION

var form = document.getElementById('form');
var username = document.getElementById('username');
var password = document.getElementById('password');
var email = document.getElementById('email');

function fn(e){
    e.preventDefault();                 //to pevent the default activity of form[which is to send data to backend instead of staying in console]
    var namevalue = username.value;
    var passvalue = password.value;
    var emailvalue = email.value;
    //console.log(passvalue,namevalue,emailvalue)
    if (namevalue=='karthik' && passvalue=='ka1122' && emailvalue=='karthikvicky1122@gmail.com'){
        alert('Credentials Match, Signed in as karthik');
    }
    else {
        alert('Incorrect Credentials')
    }
}

form.addEventListener('submit',fn)
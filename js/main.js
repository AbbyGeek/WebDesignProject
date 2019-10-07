function validateForm(){
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var office = document.getElementById('officeName')
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var state = document.getElementById('state').value;
    var language = docuement.getElementById('language').value;

    if(firstName==""){
        alert("First name must be filled out");
        return false;
    }
    if(lastName==""){
        alert("Last name must be filled out");
        return false;
    }
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)==false){
        alert("Please enter a valid email address");
        return false;
    }
    else{
        alert("Form submit disabled to avoid filling out this form over and over and over and over and over again, but everyhing checked out");
        return false;
    }
}
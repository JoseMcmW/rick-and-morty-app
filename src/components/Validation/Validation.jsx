const  validation = (userData) =>{
    const errors = {};
    const mailFormat = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const numTest = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/;

    if(!mailFormat.test(userData.email)){
        errors.email = "Invalid email"
    }
    if(!userData.email){//userData.email.length === "".
        errors.email = "You must enter an email"
    }
    if(!userData.email.length > 35){
        errors.email = "The email should not exceed 35 characters."
    }
    if(!numTest.test(userData.password)){
        errors.password = "The password must be between 6 and 10 characters, at least one digit, at least one lower case letter and at least one upper case letter. It can NOT have any other symbols."
    }
    if(!userData.password){
        errors.password = ""
    }

    return errors;
}

export default validation;


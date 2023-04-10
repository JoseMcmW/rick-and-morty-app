const  validation = (userData) =>{
    const errors = {};
    const mailFormat = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const numTest = /.*\d+.*/;

    if(!mailFormat.test(userData.email)){
        errors.email = "El email ingresado no es válido"
    }
    if(!userData.email){//userData.email.length === "".
        errors.email = "Debe ingresar un email"
    }
    if(!userData.email.length > 35){
        errors.email = "El email no debe superar los 35 caracteres."
    }
    if(!numTest.test(userData.password)){
        errors.password = "La contraseña debe contener al menos un número."
    }
    if(userData.password.length < 6 || userData.password.length < 10){
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres."
    }

    return errors;
}

export default validation;


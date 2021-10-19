export default function validateSignup(values){
    let errors = {}

    //firstname
    if(!values.first_name.trim()){
        errors.first_name = "Nombre requerido"
    }
    //lastname
    if(!values.last_name.trim()){
        errors.last_name = "Apellido requerido"
    }
    //email
    if(!values.email){
        errors.email = "Cuenta de correo requerida"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "La cuenta de correo no el valida"
    }
    //password
    if(!values.password){
        errors.password = "Contraseña requerida"
    }else if (values.password.length < 6){
        errors.password = "La contraseña debe ser mayor o igual a 6 caracteres"
    }
    
    
    //password2
    if(!values.password2){
        errors.password2 = "Confirmación de contraseña requerida"
    }else if (values.password2 !== values.password){
        errors.password2 = "La contraseña no coincide"
    }

    return errors;
}
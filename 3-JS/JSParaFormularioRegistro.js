function validarDatosYEnviarCuandoSeanValidos(){
    /*Campos del formulario*/
    var usuario = document.getElementById("usuario").value;
    var contrasenya1 = document.getElementById("contrasenya1").value;
    var contrasenya2 = document.getElementById("contrasenya2").value;
    var correo = document.getElementById("correo").value;
    var dni = document.getElementById("dni").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var lopd = document.getElementById("terminosYCondiciones").checked;
    
    /*Patrones de los campos del formulario*/
    var patronContrasenya = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])(?!\s)[a-zA-Z\d#$@!%&*?]{8,16}$/;
    var patronCorreo = /^[^@]+@[^@]+\.[^@]+$/;

    /*Validaciones*/
    if(usuario=="" || contrasenya1=="" || contrasenya2=="" || correo=="" ||
        dni=="" || fechaNacimiento==""){
        alert("No puede haber ningún campo vacío")
        return false;
    } else if(contrasenya1 != contrasenya2){
        alert("Las contraseñas no coinciden")
        return false;
    } else if(!patronContrasenya.test(contrasenya1)){
        alert("La contraseña no cumple con el patrón.\nDebe contener entre 8 y 16 caracteres, incluyendo como mínimo una letra mayúscula, una letra minúscula, un número y un caracter especial (#$@!%&*?)")
        return false;
    } else if(!patronCorreo.test(correo)){
        alert("El correo no cumple con el patrón.\nEjemplo: usuario@mail.com")
        return false;
    } else if(!lopd){
        alert("Debe aceptar la política de privacidad")
        return false;
    } else{
        /*Creación del JSON*/
        var formularioJSON = {
            usuario:usuario,
            contrasenya:contrasenya1,
            correo:correo,
            "dni/nie/pasaporte":dni,
            fechaNacimiento:fechaNacimiento
        }

        /*Mostrado del JSON*/
        var stringJSON = JSON.stringify(formularioJSON);
        alert("Los datos recogidos son:\n"+ stringJSON);
    }
}

/*Conversión del campo ´´fechaNacimiento`` a ´´date`` cuando tiene el foco
o hay un dato introducido*/
document.getElementById('fechaNacimiento').addEventListener('focus',function(){
    this.type = 'date';
})

/*Conversión del campo ´´fechaNacimiento`` a ´´text`` cuando pierde el foco
y no hay ningún dato introducido*/
document.getElementById('fechaNacimiento').addEventListener('blur',function(){
    if(!this.value){
        this.type = 'text';
    }
})
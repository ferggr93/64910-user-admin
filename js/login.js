/*
     cargar usuarios de db(por el momento localStorage)
     tomar formulario
     tomar datos cargados

      chequear que exista el email que el usuario ingreso
        
      corroborar que la contraseña coincida con la que tiene el usuario guardada
      
      error 
         si no existe el mail
         existe el mail pero no la contraseña
             mensaje de error
        
      
      caso optimo hacer login
                 guardar en el storage un current user
                 redireccionar al home

*/

//Obtenemos los usuarios que ya estan guardados en el localStorage
//Si no encuentras nada crea un array vacio (Condicion or ||)
const users = JSON.parse(localStorage.getItem('users')) || [];

//Obtenemos el formulario
const loginForm = document.getElementById("login-form");

//Añadimos el evento submit para trabajar sobre el formulario
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    /* se puede acceder derechamente al loginForm
    es analogo a ir accediendo al e.target

    const password = loginForm.elements.email*/

    const password = e.target.elements.password.value;
    const email = e.target.elements.email.value;
    
    //Usamos find para chequear si el mail se encuentra en nuestra base de datos
    const user = users.find(user =>{
        if(user.email === email){
            return true;
        }
        return false;

        //Simplificado
        //return user.email===email;
    })

    
    /*Cortamos si no existe el usuario y tambien
    chequeamos si la contraseña ingresada existe en la base de datos
    usuario existe || las contraseñas son distintas? error
    */
    if(!user || user.password != password){
        Swal.fire({
            //Se trata de ser ambiguo con el dato faltante en caso de que hay un atacante
            title:'error',
            text:'Datos incorrecto',
            icon:'error',
            timer:2000
        })
        return;
    }
    
    //Borramos la contraseña porque no debemos guardarla en el localstorage
    delete user.password;

    //GUARDAMOS USUARIO
    localStorage.setItem("currentUser", JSON.stringify(user));
    
    Swal.fire({
        title:'succes',
        text:'Login',
        icon:'Sera redireccionado',
        timer:2000
    })
    
    //Redireccionamos al usuario
    setTimeout(()=>{
        window.location.href = "index.html"
    }, 2000)
})
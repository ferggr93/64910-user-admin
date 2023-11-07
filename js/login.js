
const users = JSON.parse(localStorage.getItem('users')) || [];
const loginForm = document.getElementById("login-form");

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const password = e.target.elements.password.value;
    const email = e.target.elements.email.value;

    const user = users.find(user =>{
        if(user.email === email){
            return true;
        }
        return false;
    })

    
    //Cortamos si no existe el usuario 
    if(!user || user.password != password){
        Swal.fire({
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
        window.location.href = "/pages/index.html"
    }, 2000)
})
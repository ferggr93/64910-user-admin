//Este archivo header lo vamos a utilizar cross site

/*
    Obtener el nav y el user info
    hay que evaluar si tenemos un usuario logeado
    si tenemos user logueado
        Evaluar su rol y ver si pintamos el boton de admin product
        y admin user
         *user info pintar nombre de usuario
         * pintar el boton logout
        
        si no tenemos el user logueado
            *no pintamos los botones admin
            *no colocamos el name
            *pintamos el boton login


*/


//Obtenemos los elementos sobre los que trabajaremos
const headerNav = document.getElementById('header-nav');
const userInfoHeader = document.getElementById('header-user');

//Hay que evaluar si el usuario esta logueado y eso se evalua
//con el currentUser

const loguedUser = JSON.parse( localStorage.getItem('currentUser'));

//Si el usuario esta logueado
if(loguedUser){
    //Logica para cuando el usuario esta logueado
    //El role del usuario es igual a admin?
    if(loguedUser.role === 'ADMIN_ROLE'){
        //Pinta botones de admin
        
        //Creo elemento para generar botones
        const adminUserLink = document.createElement('a');
        
        //Seteamos a donde ira el link
        adminUserLink.href='/pages/user-admin.html';
        adminUserLink.innerText = 'User admin'
        adminUserLink.classList.add('header-link');
        
        //Agrego el elemento al html, especificamente la lista
        headerNav.appendChild(adminUserLink);

        const productAdminLink = document.createElement('a');
        
        //Seteamos a donde ira el link
        productAdminLink.href='/pages/product-admin.html';
        productAdminLink.innerText = 'Product admin';
        productAdminLink.classList.add('header-link');
        
        headerNav.appendChild(productAdminLink);
    
    }  
    
    //buscamos la seccion donde tenemos el nombre para setearlo
    const userName = document.querySelector('.user-name');
    
    //Seteamos el nombre que sera visible al cargar el usuario 
    userName.innerText = loguedUser.fullname;
    
    //Seteamos la imagen del user

    const userImg = document.createElement('img');
    userImg.src= loguedUser.image;
    userImg.classList.add('user-profile-img');
    userImg.setAttribute('alt', 'imagen-usuario');
    userInfoHeader.appendChild(userImg)
    
    //Tomamos el espacio donde pondremos el boton de log in o log out
    const userAction = userInfoHeader.querySelector('.user-action');

    //Logaout action boton
    const logOutBtn = document.createElement('button');
    logOutBtn.classList.add('header-link');
    logOutBtn.innerText= 'logout';
    
    //Le agregamos la funcion que nos permite hacer el logout
    logOutBtn.onclick = ()=>{
        localStorage.removeItem("currentUser");
        window.location.href = "/index.html";
    }

    userAction.append(logOutBtn);


}
else{
    const userAction = userInfoHeader.querySelector('.user-action');
    console.log(userAction);
    
    const loginLink = document.createElement('a');
    loginLink.innerText='login'
    loginLink.href = '/login.html';
    loginLink.classList.add('header-link');
    userAction.appendChild(loginLink);
    console.log(loginLink)
}


/*
const practiceElement = document.createElement('a');
practiceElement.href='/pages/product-admin.html';
practiceElement.classList.add('header-link')
practiceElement.innerText='ir a pagina de practica';
headerNav.appendChild(practiceElement)*/
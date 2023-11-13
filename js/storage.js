/*
//Almacenar valores en el storage
localStorage.setItem("usuario", "Fernando");

//acceder a los valores
let user = localStorage.getItem("usuario");
console.log(user);


//Al setear un elemento con el mism nombre de key sobreescribira el primer valor asignado
//localStorage.setItem("usuario", "fer");
//user = localStorage.getItem("usuario");
//console.log(user)

//Removemos el usuario
//localStorage.removeItem("usuario");

//Limpiamos todo el storage
//localeStorage.clear();

const userObject = {
    nombre:'Fernando',
    apellido:'Gamboa',
    edad:30
}

//Localstorage almacena por defecto los valores como string, intentara convertir todo lo que pueda a string
//Los objetos no pueden ser convertidos a string implicitamente asi que tenemos que usar metodo JSON.stringify()
//Acostumbrarse a usarlo siempre
localStorage.setItem("usuario", JSON.stringify( userObject ) )

//Al hacer lectura hay que hacer el proceso inverso parseamos lo recibido a un objeto

const resultado = JSON.parse( localStorage.getItem("usuario"));

console.log(resultado)*/
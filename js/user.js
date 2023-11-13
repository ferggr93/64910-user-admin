/*
  Arrays-propiedad

  .Length - devuelve el numero de elementos que tiene el array
*/

/*
   Arrays Metodos

     Array.isArray(variable a evaluar) -- evalua si el valor pasado es o no un array
    
*/

//console.log(Array.isArray(nros))

/*
    Eliminar elementos

     .shift(Elimina el primer elemento del array y devuelve ese elemento)
     .pop(Elimina el ultimo elemento)
     los elementos eliminados podemos almacenarlos en una variable
*/ 

  //let deleteElement = nros.pop();
  //nros.shift();

  //console.log(nros)

/* 
   Añadir Elementos
     
    .unshift(elemento, elemento..) añade uno o mas elemento al comienzo del array
    .push(elemento, elemento..)añade uno o mas elemento al final del array
*/

/*
   Busqueda con indexOf()

     indexOf() -> devuelve el primer indice del elemento que coincida con el valor especificado, si no devuelve -1
     lastIndexOf() -> devuelve el ultimo indice del elemento que coincida con el valor especificado, si no -1
*/   

  //let index = nros.lastIndexOf(3);
  //console.log(index)
 
 /* 
    reverse() -> invierte el orden del array
 */

    //nros.reverse();
    //console.log(nros);

/* 
    join('separador') -> devuelve un string con el separador que indiquemos, por defecto son comas
*/
  //console.log(nros.join('fernando'))    

  /*
     
     .splice(a,b,items) - cambia el contenido de un array eliminando
     elementos existentes y/o agregando nuevos elementos.

       a - indice de inicio
       b - numero de elementos(opcional)
       items - elemento a añadir en caso de que se añadan(opcional)

  */
    
    // nros.splice(3); Elimina desde la la posicion 3 hasta el final
    // nros.splice(2,2); elimina desde la posicion 2 el nro de valores que e indiquemos
    // nros.splice(2,2, 10,23,44) elimina el numero de valores que indiquemos en b y luego añade el numero de items que indiquemos
    // nros.splice(2,0,10,23,44) Si b vale cero, no elimina nada, solo agrega los elementos
    // //console.log(nros)
    //

    /*

     .slice(a,b) --> extrae elementos desde donde indiquemos hasta b y si no agregamos b extrae desde donde indiquemos hasta el final
     si no pasamos ni a ni b solo crea una copia del original 
  */



//Obtenemos lo que seteamor en el storage previamente
const usersArray = JSON.parse(localStorage.getItem("users"));



//Obtenemos valor la tabla al que accederemos para "Pintar la interfaz"
let tableBody = document.getElementById('table-body');
//Obtenemos valor del search 
let searchInput = document.querySelector('#search');
//Obtenemos form
let userForm = document.querySelector("form#user-form");

//BOTON QUE USAREMOS PARA CAMBIAR LOS ESTADOS(EDITANDO/AGREGANDO)
const submitBtn = userForm.querySelector('button[type=submit].btn-form');


//FILTRO DE USUARIO
//ESCUCHAR EL EVENTO KEYUP SOBRE EL INPUT SEARCH
searchInput.addEventListener('keyup', (e)=>{
   
    
    //OBTENER VALOR DEL INPUT 
    const inputValue = e.target.value.toLowerCase();
    
    //BUSCAR EN TODOS LOS USUARIOS AQUELLOS QUE CONTENGAN EL INPUT
   
    const usuarioFiltrados = usersArray.filter((usuario) =>{
    const nombre = usuario.fullname.toLowerCase();

            if(nombre.includes(inputValue)){
                return true;
            }
            return false;
        

    })

    
   
    //PINTAR SOLO ESOS USUARIOS
    GenerarInterfaz(usuarioFiltrados);

})

function GenerarInterfaz(array){

    //VACIADO PREVIO PARA EVITAR SOBREESCRIBIR LAS COSAS
    tableBody.innerHTML=" ";
    array.forEach(user => {//PUEDE RECIBIR 2 PARAMETROS, EL 1ER PARAMETRO IDENTIFICA AL OBJETO, EL 2DO A SU INDICE
        tableBody.innerHTML+= `<tr class="table-body">
        <td class="user-image">
            <img src="${user.image}" alt="${user.fullname}"picture>
        </td>
        <td class="user-name">${user.fullname}</td>
        <td class="user-email">${user.email}</td>
        <td class="user-location">${user.location}</td>
        <td class="user-age">${user.age}</td>
        <td class="user-date">${formatDate(user.bornDate)}</td>
        <td class="user-acciones">
         <button class="action-btn btn-danger" title="Borrar"
          onclick="BorrarUsuario( '${user.id}' )">
            <i class="fa-solid fa-trash"></i>
         </button>

         <button class="action-btn" title="Editar Usuario"
          onclick="editarUsuario( '${user.id}' ) ">
          <i class="fa-solid fa-pen-to-square"></i>
         </button>
        </td>
        </tr>`
    })
}

GenerarInterfaz(usersArray);

function formatDate(fecha){
    //DEVOLVER FECHA EN FORMATO CORRECTO
    const collator = new Intl.DateTimeFormat('es-AR',
    {
        day:'2-digit',
        month:'2-digit',
        year:'numeric'
    });
    const fechaFormateada = collator.format(fecha);

    return fechaFormateada;
}

function BorrarUsuario(id){
    const confirmDelete = confirm('deseas borrar');


    //chequeamos en el array donde esta el elemento que estamos queriendo borrar
    //NUNCA USAR ID
    if(confirmDelete){
        const indice = usersArray.findIndex(user =>{
            if(user.id === id){
                return true;
            }
            return false;
    })
        usersArray.splice(indice, 1);//BORRAMOS SOLAMENTE EL INDICE, AL ESPECIFICAR EL VALOR A BORRAR(INDICE) Y 1 SE ASEGURA DE SOLO BORRAR ESE ELEMENTO
        GenerarInterfaz(usersArray);//VOLVEMOS A GENERAR INTERFAZ CON LOS CAMBIOS
        actualizarLocalStorage();
    }
    
}





//ESCUCHAMOS EL EVENTO SUBMIT EN EL FORM

userForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
//TARGET ES DONDE SE DISPARO EL EVENTO IMPORTANTE ACCEDER A TARGET
//ELEMENTS NOS TRAE TODOS LOS INPUTS 
//PODEMOS ACCEDER POR LOS NOMBRES(ATRIBUTO NAME EN INPUT)
//VALUE ES LO QUE NOS TRAE EL VALOR EN SI MISMO
    //console.dir(e.target.elements.location.value);
    
    const element = e.target.elements;

    //LA LOGICA DEBE SER CORTADA SI PASSWORDS SON DISTINTAS O EMAIL YA EXISTE
    
   

    
    if(element.password.value != element.Rpassword.value){
        Swal.fire('las contraseñas no pueden ser distintas', 'error')
        //EL RETURN NOS PERMITE CORTAR LA EJECUCION
        return
    }
    const userExist = usersArray.find((user) =>{
        if(user.email === element.email.value){
            return true;
        }
        
    })
    
    //Chequeamos si el mail existe y no coincide el userExist(usuario encontrado) con el id del element(el elemento que elegimos editar)
    
    // mail existe y valor id targeteado    id del usuario actual
    // && evitamos que editemos el correo del usuario a editar con un correo perteneciente a otro usuario
    //Basicamente la logica es ¡Puedes editar el correo pero no usar uno que ya se encuentre en la base de datos
    if(userExist && element.id.value != userExist.id){
        Swal.fire({
            title:'correo existe',
            icon:'succes',
            timer:1000
        })
        return;
    }
    //Manera de asignarle id a los nuevos elementos
    //FORMA DE GENERAR ID ALEATORIO
    let id;
    //Si el elemento tiene un id(osea ya es uno en el array)
    if(element.id.value){
        //dejo el id igualado al id que viene con el user
        id=element.id.value
    }
    else{
        //asigna un nuevo id random
        id=crypto.randomUUID();
    }

    //Usar ternario nos permite resolver if y else que sean de una sola linea
    //const id = condicion ? condicionTrue : condicionFalse

    //            condicion              true               false
    //const id = element.id.value ? element.id.value : crypto.randomUUID();
    


    
    usuario = {
        fullname:element.fullname.value,//ACCEDEMOS AL NAME DEL INPUT
        age:element.age.valueAsNumber, //Convertir valor del value recibido a numero
        email:element.email.value,
        password:element.password.value,
        active:element.active.checked,//los active no se toma el value si no el checked que devuelve true o false
        bornDate:new Date(element.bornDate.value).getTime(),//pasar el valor de la fecha a un timestamp 
        location:element.location.value,
        id:id,
        image:element.image.value

    }

    //2 acciones a realizar, 
        //a Agregar usuario nuevo //Usamos push
        //b al estar editando deberia reemplazar la info con la info actualizada
    
        //Pregunto si tengo id para saber si estoy editando
    if(element.id.value){
        //editando
        //Buscamos el usuario dentro del array
        const indice = usersArray.findIndex(usuario =>{
            if(usuario.id === element.id.value){
                return true;
            }
        })
        
        //Accedo al elemento usando el array y el indice obtenido, luego reemplazo con los datos que actualizamos(en este caso)
        usersArray[indice] = usuario;
        //Swal.fire('ususario editado', 'succes')
        Swal.fire({
            title:'usuario editado',
            text:'los dtos se editaron',
            icon:'succes',
            timer:1000
        })
        

    }
    else{
        //agregando un usuario nuevo
        usersArray.push(usuario);
        //Swal.fire('ususario agregado', 'succes')
        Swal.fire({
            title:'usuario editado',
            text:'los dtos se agregaron',
            icon:'succes',
            timer:1000
        })
    }
    
    GenerarInterfaz(usersArray);

    //actualizar localstorage
    actualizarLocalStorage();
    resetearFormulario();
    




})

//RESETEO FORMULARIO
function resetearFormulario(){
    userForm.reset();
    userForm.elements.password.disabled=false;//activo los inputs password si estaban desactivados
    userForm.elements.Rpassword.disabled=false;
    submitBtn.classList.remove('btn-edit');//remuevo la clase editar
    submitBtn.innerText = "Agregar usuario";
    //hacemos focus en el primer elementos del formulario
    userForm.elements.fullname.focus();
}



function editarUsuario(id){
    //BUSCAR USUSARIO Y OBTENERLO
    const userEdit = usersArray.find((user) =>{
        
        if(user.id===id){
            return true;
        }
        
        
    })
    //En caso de que no se encuentre
    if(!userEdit){
        Swal.fire('error', 'no se encuentra', 'error')
        return;
    }

        
    //RELLENAR FORMULARIO CON DATOS DEL USUARIO A EDITAR
    
    //El atributo elements nos permite acceder a TODOS los elementos del formulario
    const elementsValue = userForm.elements;
    
    //Recordar que para alterar el value de los usuarios hay que agregar value al final
    elementsValue.id.value=userEdit.id;
    elementsValue.age.value = userEdit.age;
    elementsValue.location.value = userEdit.location;
    elementsValue.fullname.value = userEdit.fullname;
    elementsValue.email.value = userEdit.email;
    elementsValue.image.value = userEdit.image;
    //Solo a los elementos checked se accede con checked en lugar de value
    elementsValue.active.checked = userEdit.active;
    //El disabled me permite lockear la zona de contraseña
    elementsValue.password.value = userEdit.password;
    elementsValue.password.disabled = true;
    elementsValue.Rpassword.value = userEdit.password;
    elementsValue.Rpassword.disabled = true;
    elementsValue.bornDate.value = formatInputDate(userEdit.bornDate)
    
    //añado la clase btn edit al boton del formulario
    submitBtn.classList.add('btn-edit');
    //modifico el msj del boton acorde a la accion que realiza
    submitBtn.innerText='editar usuario'

    
    
    
}

function formatInputDate(date){

    let fecha = new Date(date);

    let year = fecha.getFullYear();
    let month = fecha.getMonth() + 1;

    if(month < 10){
        month = '0' + month;
    }
    let day = fecha.getDate();
    if(day < 10){
        day = '0' + day;
    }
    let fechaFormateada = (`${year}-${month}-${day}`);

    return fechaFormateada;
}


//Esta funcion nos permite actualizar el storage luego de cada operacion importante en el array delete/update/add
function actualizarLocalStorage(){

    //Pisamos el valor que teniamos y seteamos uno nuevo
        localStorage.setItem("users", JSON.stringify(usersArray));

}



//git add .  Agregar
//git commit -m "Actualizar"
//git push -u rama donde haremos el push
//git switch dev(nos movemos a dev)
//git merge nombre de la rama que queremos mergear          merge es unir una rama con otra/primero debemos movernos a la rama donde queremos traer los cambios
// git checkout -b "nombre de la rama que crearemos"



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

const usersStart = [
    {
        fullname: 'John Doe',
        age: 30,
        email: 'john.doe@example.com',
        id: '1',
        active: true,
        password: 'password123',
        bornDate: new Date('1993-01-01').getTime(),
        location: 'New York, NY',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/b7/Mk8iconbowser.png?width=325'
    },
    {
        fullname: 'Jane Doe',
        age: 25,
        email: 'jane.doe@example.com',
        id: '2',
        active: false,
        password: 'password456',
        bornDate: new Date('1998-05-05').getTime(),
        location: 'Los Angeles, CA',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325'
    },
    {
        fullname: 'Alice Johnson',
        age: 35,
        email: 'alice.johnson@example.com',
        id: '3',
        active: true,
        password: 'password789',
        bornDate: new Date('1988-08-08').getTime(),//la fecha tiene que ser transformada a timestamp
        location: 'Miami, FL',
        image: "https://m.media-amazon.com/images/I/81wNRtDaTXL.png"
    },
    {
        fullname: 'Michael Smith',
        age: 40,
        email: 'michael.smith@example.com',
        id: '4',
        active: false,
        password: 'password101',
        bornDate: new Date('1983-04-10').getTime(),
        location: 'Chicago, IL',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/b7/Mk8iconbowser.png?width=325'
    },
    {
        fullname: 'Emily Johnson',
        age: 28,
        email: 'emily.johnson@example.com',
        id: '5',
        active: true,
        password: 'password202',
        bornDate: new Date('1995-02-15').getTime(),
        location: 'Houston, TX',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/b7/Mk8iconbowser.png?width=325'
    },
    {
        fullname: 'Daniel Lee',
        age: 34,
        email: 'daniel.lee@example.com',
        id: '6',
        active: false,
        password: 'password303',
        bornDate: new Date('1989-07-07').getTime(),
        location: 'San Francisco, CA',
        image: "https://m.media-amazon.com/images/I/81wNRtDaTXL.png"

    },
    {
        fullname: 'Samantha Davis',
        age: 22,
        email: 'samantha.davis@example.com',
        id: '7',
        active: true,
        password: 'password404',
        bornDate: new Date('2001-11-11').getTime(),
        location: 'Boston, MA',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325'


    },
    {
        fullname: 'James Moore',
        age: 45,
        email: 'james.moore@example.com',
        id: '8',
        active: false,
        password: 'password505',
        bornDate: new Date('1978-12-19').getTime(),
        location: 'Dallas, TX',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325'

    },
    {
        fullname: 'Isabella Taylor',
        age: 29,
        email: 'isabella.taylor@example.com',
        id: '9',
        active: true,
        password: 'password606',
        bornDate: new Date('1994-06-24').getTime(),
        location: 'San Diego, CA',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325'

    },
    {
        fullname: 'Ethan Johnson',
        age: 31,
        email: 'ethan.johnson@example.com',
        id: '10',
        active: false,
        password: 'password707',
        bornDate: new Date('1992-03-03').getTime(),
        location: 'Denver, CO',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325'

    }
];



//Una solucion en caso de que el array venga vacio.
/*if(JSON.parse( localStorage.getItem("users") )){
    //Si no es null entra en el if
    //Si hay algo igualamos e usersarray al storage parseado
    usersArray = JSON.parse( localStorage.getItem("users") );
}
else{
    usersArray=[];
}*/

//otra forma 
/*
if(JSON.parse( localStorage.getItem("users") )){
    //Si nadie seteo nada lo hacemos nosotros
}
else{
    localStorage.setItem("users", JSON.stringify( [] ));
}*/


//OTRA FORMA
//Si viene vacio setea a un array vacio
if( localStorage.getItem("users") === null ){
    //localStorage.setItem("users", JSON.stringify([]))
    localStorage.setItem("users", JSON.stringify( usersStart ))//no se hace porque en primer lugar no se saca nada del storage
}

const usersArray = JSON.parse(localStorage.getItem("users"));



//Obtenemos valor la tabla al que accederemos para "Pintar la interfaz"
let tableBody = document.getElementById('table-body');
//Obtenemos valor del search 
let searchInput = document.querySelector('#search');
//Obtenemos form
let userForm = document.querySelector("form#user-form");

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
    if(element.id.value){
        id=element.id.value
    }
    else{
        id=crypto.randomUUID();
    }
    
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
        //a Agregar usuario nuevo
        //b al estar editando deberia reemplazar la info con la info actualizada
    
        //Pregunto si tengo id para saber si estoy editando
    if(element.id.value){
        //editando
        const indice = usersArray.findIndex(usuario =>{
            if(usuario.id === element.id.value){
                return true;
            }
        })

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
    userForm.elements.password.disabled=false;
    userForm.elements.Rpassword.disabled=false;
    submitBtn.classList.remove('btn-edit');
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
    
    submitBtn.classList.add('btn-edit');
    submitBtn.innerText='editar usuario'

    
    
    //DESHABILITAR LOS INPUTS DE CONTRASEÑA
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

//LocalStorage, nos permite almacenar ciertos datos en nuestro navegador.

localStorage.setItem("usuario", "fernando");//Key/value

//localStorage.getItem("usuario"); //obtener dato(se utiliza el nomre de la key)
//Si no encuentra algo devolvera null

//Borrar dato guardado
//localStorage.removeItem("usuario");

//borrar todo el localStorage

//localStorage.clear();

//El local storage todo los valores almacenados los guarda como string, indiferentemente el dato que sea ingresado
//para sortear esto debemos usar el metodo JSON.stringify()

//los objetos la clave debe ser escrita con comillas

/*
const user ={
    nombre : 'Jose',
    apellido:'Perez'
}


localStorage.setItem('usuario', JSON.stringify(user));//lo pasamos a formato json

const resultado = JSON.parse( localStorage.getItem('usuario') ); //->//Ahora invierto y lo paso a un objeto js

console.log(resultado);*/

function actualizarLocalStorage(){
        localStorage.setItem("users", JSON.stringify(usersArray));

}


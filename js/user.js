const usersArray = [
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
        bornDate: new Date('1988-08-08').getTime(),
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

let tableBody = document.getElementById('table-body');
let searchInput = document.querySelector('#search');

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
    array.forEach((user, indice) => {//PUEDE RECIBIR 2 PARAMETROS, EL 1ER PARAMETRO IDENTIFICA AL OBJETO, EL 2DO A SU INDICE
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
          onclick="BorrarUsuario(${indice})">
            <i class="fa-solid fa-trash"></i>
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

function BorrarUsuario(indice){
        usersArray.splice(indice, 1);//BORRAMOS SOLAMENTE EL INDICE, AL ESPECIFICAR EL VALOR A BORRAR(INDICE) Y 1 SE ASEGURA DE SOLO BORRAR ESE ELEMENTO
        GenerarInterfaz(usersArray);//VOLVEMOS A GENERAR INTERFAZ CON LOS CAMBIOS
}
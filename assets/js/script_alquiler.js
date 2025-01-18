//Arreglo de propiedades venta
let htmlAlquiler = ''
const rowAlquiler = document.querySelector('#rowAlquiler')
const rowAlquilerIndex = document.querySelector('#rowAlquilerIndex')

let toSmokeAlquiler = (smoke)=>{
    let mensaje = ''
    if (smoke===true) {
        mensaje= `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
    } else {
        mensaje= `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
    }
    return mensaje
}

let allowPetsAlquiler = (pet)=>{
    let mensaje = ''
    if (pet===true) {
        mensaje= `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
    } else {
        mensaje= `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`
    }
    return mensaje
}

const propiedadesAlquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banios:2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue,Seaside Town, CA 56789',
        habitaciones: 3,
        banios: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banios: 2,
        costo: 2200,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Pantano de Shrek',
        src: 'https://notibomba.com/wp-content/uploads/2023/09/shrek.jpg',
        descripcion: 'Casa inspirada en la clásica pelicula de Shrek.',
        ubicacion: 'Cerca de muy muy lejano, en el pantano del ogro',
        habitaciones: 4,
        banios: 2,
        costo: 9000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Ruka Mapuche',
        src: 'https://peumanuke.cl/wp-content/uploads/galeria-19.jpg',
        descripcion: 'Ruka Mapuche para experimentar la vivienda de las comunidades mapuches.',
        ubicacion: 'Araucanía',
        habitaciones: 1,
        banios: 1,
        costo: 10000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Kame House',
        src: 'https://elcomercio.pe/resizer/v2/P4VYBC4YRRGNZN5RUJRBJOEK3U.jpg?auth=cacbabc22c58c33245561bfd804ab606bf382325076ba58c03104701d6755815&width=1200&height=810&quality=90&smart=true',
        descripcion: 'Casa de la escuela de la tortuga.',
        ubicacion: 'En una isla en el oriente',
        habitaciones: 4,
        banios: 2,
        costo: 15000,
        smoke: true,
        pets: true
    }
]
//Template para interpolar, recorrer y agregar

//Logica de carga
if (rowAlquiler != null) {
    for (const propiedad of propiedadesAlquiler) {
        htmlAlquiler += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
                    <p><i class="fas fa-bed"></i>${propiedad.habitaciones} Habitaciones|<i class="fas fa-bath"></i>${propiedad.banios} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
                    ${toSmokeAlquiler(propiedad.smoke)}
                    ${allowPetsAlquiler(propiedad.pets)}
                </div>
            </div>
        </div>
        `
    }
    rowAlquiler.innerHTML = htmlAlquiler
    
} else {
    let contador = 1
    for (const propiedad of propiedadesVenta) {
        
        if(contador>3){
            break
        }else{
            htmlAlquiler += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
                        <p><i class="fas fa-bed"></i>${propiedad.habitaciones} Habitaciones|<i class="fas fa-bath"></i>${propiedad.banios} Baños</p>
                        <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
                        ${toSmokeAlquiler(propiedad.smoke)}
                        ${allowPetsAlquiler(propiedad.pets)}
                    </div>
                </div>
            </div>
            `
            contador++
        }
    }
    rowAlquilerIndex.innerHTML = htmlAlquiler
}
//Arreglo de propiedades venta
let htmlVenta = ''
const rowVenta = document.querySelector('#rowVenta')
const rowVentaIndex = document.querySelector('#rowVentaIndex')

let toSmoke = (smoke)=>{
    let mensaje = ''
    if (smoke===true) {
        mensaje= `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
    } else {
        mensaje= `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
    }
    return mensaje
}

let allowPets = (pet)=>{
    let mensaje = ''
    if (pet===true) {
        mensaje= `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
    } else {
        mensaje= `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`
    }
    return mensaje
}

const propiedadesVenta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banios:4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banios:1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banios: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa de Los Simpsons',
        src: 'https://www.ellitoral.com/images/2024/04/29/Mm7PS1zMg_1300x655__1.jpg',
        descripcion: 'Casa inspirada en la clásica serie de Los Simpsons.',
        ubicacion: 'Avenida siempre viva 742, Springfield',
        habitaciones: 4,
        banios: 2,
        costo: 8500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa UP',
        src: 'https://media.admagazine.com/photos/654119298f54ac8192294a51/16:9/w_1920,c_limit/casa%20up.jpg',
        descripcion: 'Casa inspirada en la clásica película UP.',
        ubicacion: 'Volando por el amazonas.',
        habitaciones: 4,
        banios: 2,
        costo: 15000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'La Comarca',
        src: 'https://viajandomundo.es/wp-content/uploads/2019/01/Depositphotos_212376510_l-2015-1-min.jpg',
        descripcion: 'Casa heredada de los hobbits de la familia Bolson (Baggins).',
        ubicacion: 'En los bordes de la tierra media.',
        habitaciones: 4,
        banios: 2,
        costo: 20000,
        smoke: true,
        pets: false
    }
]

if (rowVenta != null) {
    for (const propiedad of propiedadesVenta) {
        htmlVenta += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
                    <p><i class="fas fa-bed"></i>${propiedad.habitaciones} Habitaciones|<i class="fas fa-bath"></i>${propiedad.banios} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
                    ${toSmoke(propiedad.smoke)}
                    ${allowPets(propiedad.pets)}
                </div>
            </div>
        </div>
        `
    }
    rowVenta.innerHTML = htmlVenta
    
} else {
    let contador = 1
    for (const propiedad of propiedadesVenta) {

        if(contador>3){
            break
        }else{
            htmlVenta += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
                        <p><i class="fas fa-bed"></i>${propiedad.habitaciones} Habitaciones|<i class="fas fa-bath"></i>${propiedad.banios} Baños</p>
                        <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
                        ${toSmoke(propiedad.smoke)}
                        ${allowPets(propiedad.pets)}
                    </div>
                </div>
            </div>
            `
            contador++
        }
    }
    rowVentaIndex.innerHTML = htmlVenta
}

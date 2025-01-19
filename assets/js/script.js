//Captura de DOM
const input = document.querySelector('#input')
const select = document.querySelector('#select')
const btn_buscar = document.querySelector('#btn_buscar')
const result = document.querySelector('#result')

//Buttton
btn_buscar.addEventListener('click',async ()=>{
    let resultado
    const data = await getApi('https://mindicador.cl/api/')
    if (select.value === 'dolar') {
        resultado = input.value / data.dolar.valor
    } else{
        resultado = input.value / data.euro.valor
    }
    
    result.innerHTML = `
    Resultado:$ ${resultado.toFixed(3)}
    `
})

//Funcion conectar a la API
const getApi = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    return data
}

//Renderizar Select - Sin ciclo
const renderSelect = async () => {
    const data = await getApi('https://mindicador.cl/api/')
    select.innerHTML = `
    <option value ="${data.dolar.codigo}">${data.dolar.codigo}</option>
    <option value ="${data.euro.codigo}">${data.euro.codigo}</option>
    `
}

//Función de renderizar
const renderDom = (data) => {
    body.innerHTML = ''
    data.items.array.forEach(personaje => {
        body.innerHTML += `
        <div class="card">
            <img src="${personaje.image}" width=200px />
            <h1>${personaje.name}</h1>
            <p>${personaje.description}</p>
        </div>
        `
    });
}

//Funcion API
const main = async ()=> {
    try {
        const api = await getApi('https://mindicador.cl/api/')
        console.log(api)
        renderDom(api)
    } catch (error) {
        console.log(error.message)
    }
}

//Llamado de funciones
renderSelect()

//Llamando funciones
//main()
//renderSelect()

//Funciones del desafio
//FormatearFechar
//Actuarlizar grafico async (valor,tipomoneda)
//btn addeventlistener
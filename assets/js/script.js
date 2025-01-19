//Captura de DOM
const input = document.querySelector('#input')
const select = document.querySelector('#select')
const btn_buscar = document.querySelector('#btn_buscar')
const result = document.querySelector('#result')
const canvasContainer = document.querySelector('.canvas-container')
let chartInstance;

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
    renderizarGrafico(select.value)
    canvasContainer.style.display = 'block'
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

//Función renderizar grafico async
const renderizarGrafico = async (moneda) =>{
    const data = await getApi(`https://mindicador.cl/api/${moneda}`)
    console.log(JSON.stringify(data,null,4))
    //Extraemos las 10 ultimas fechas del historial y las invertimos
    const datosInvertidos = data.serie.slice(0,10).reverse()
    const labels = datosInvertidos.map(item=>item.fecha.slice(0,10))
    const valores = datosInvertidos.map(item=>item.valor)
    console.log(labels)
    console.log(valores)
    //Grafico
    if(chartInstance){
        chartInstance.destroy()
    }
    const ctx = document.getElementById("grafico").getContext("2d")
    chartInstance = new Chart(ctx, {
        type:"line",
        data:{
            labels: labels, //Etiqueta eje x (fechas)
            datasets:[{
                label:`Historial ultimos 10 días(${moneda})`,//titulo
                data:valores,//Datos del eje y
                borderColor:"rgb(75,192,192)", //color de la línea del grafico
                tension: 0.1, //Suaviza la linea del grafico
            }]//
        },
        options:{
            responsive: true,
            maintainAspectRatio: true,
            scales:{
                x:{
                    ticks:{
                        maxRotation: 45,
                        minRotation:0
                    }
                }
            }
        }
    })
    
}

//Llamado de funciones
renderSelect()
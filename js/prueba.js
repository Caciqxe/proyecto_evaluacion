



function crearAlternativas() {
    contenedorAlternativas.innerHTML = "";
    var x = 0
    while (x < parseInt(numeroAlternativas.value)) {
        contenedorAlternativas.innerHTML += 
        `
        <article class="articulosAlternativa" id="alt${x+1}">
            <h1>Alternativa ${x+1}</h1>
            <span>Nombre de alternativa: <input type="text" value="${sessionStorage.length < x+1 ? JSON.parse(sessionStorage.getItem(`Alt_numero_${x}`)).name : ""}" name="" class="nombreAlt" id="nombreAlternativa${x}"></span>
            <span>Número de componente: <input type="text" name="" class="numeroCom" id="numeroComponente${x}"></span>
        </article>`
        
        x++
    }  
}


const numeroAlternativas = document.getElementById('numeroAlternativas');
const contenedorAlternativas = document.getElementById('contenedorAlternativas')
const setModulo = document.getElementById('modulo_1')

numeroAlternativas.addEventListener('change', crearAlternativas)
setModulo.addEventListener('click', setAlternativas)


if (sessionStorage.getItem('numAlternativas')===null) {
    numeroAlternativas.value = ""
} else {
    numeroAlternativas.value = sessionStorage.getItem('numAlternativas')
    
}

function crearAlternativas() {
    let numeroAlternativasInt = parseInt(numeroAlternativas.value)
    contenedorAlternativas.innerHTML = "";
    sessionStorage.setItem("numAlternativas", numeroAlternativasInt)
    
    var x = 0
    var i = 0
    var soloAlt = 0 

    while (i < sessionStorage.length) {
        sessionStorage.getItem(`Alt_numero_${i+1}`) === null ? "" : soloAlt++;
        i++
    }
    var dif = (soloAlt - numeroAlternativasInt);
    

    while (x < numeroAlternativasInt) {
        contenedorAlternativas.innerHTML += 
        `
        <article class="articulosAlternativa" id="alt${x+1}">
            <h1>Alternativa ${x+1}</h1>
            <span>Nombre de alternativa: <input type="text" value="${soloAlt > x ? JSON.parse(sessionStorage.getItem(`Alt_numero_${x+1}`)).name : ""}" name="" class="nombreAlt" id="nombreAlternativa${x}"></span>
            <span>Número de componente: <input type="text" value="${soloAlt > x ? JSON.parse(sessionStorage.getItem(`Alt_numero_${x+1}`)).numeroCom : ""}"name="" class="numeroCom" id="numeroComponente${x}"></span>
        </article>`
        x++
    }  


}

function setAlternativas() {
    let nombreAlt = document.querySelectorAll('.nombreAlt')
    let numeroCom = document.querySelectorAll('.numeroCom')

    let x = 0
    while (x < nombreAlt.length) {
        sessionStorage.setItem(`Alt_numero_${x+1}`,JSON.stringify({name:nombreAlt[x].value,numeroCom:numeroCom[x].value}))
        x++
    }
    







}




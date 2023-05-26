const nombreProyecto = document.getElementById('nombreProyecto');
const descripcionProyecto = document.getElementById('descripcionProyecto');
const horizonteEvaluacion = document.getElementById('horizonteEvaluacion');
const numeroAlternativas = document.getElementById('numeroAlternativas');
const contenedorAlternativas = document.getElementById('contenedorAlternativas')

const setModulo = document.getElementById('modulo_1')
const modulo2 = document.getElementById('modulo_2')
const modulo3 = document.getElementById('modulo_3')
const modulo4 = document.getElementById('modulo_4')
const modulo5 = document.getElementById('modulo_5')
const modulo6 = document.getElementById('modulo_6')
const modulo7 = document.getElementById('modulo_7')
const modulo8 = document.getElementById('modulo_8')
const modulo9 = document.getElementById('modulo_9')
const modulo10 = document.getElementById('modulo_10')

const grabarTodo = document.getElementById('grabarTodo')
const eliminarTodo = document.getElementById('eliminarTodo')
const guardarComo = document.getElementById('guardarComo')
const abrirArchivo = document.getElementById('abrirArchivo') 

nombreProyecto.addEventListener('change', crearAlternativas)
descripcionProyecto.addEventListener('change', crearAlternativas)
horizonteEvaluacion.addEventListener('change', crearAlternativas)
numeroAlternativas.addEventListener('change', crearAlternativas)
setModulo.addEventListener('click', setAlternativas)
modulo2.addEventListener('click',setAlternativas)
modulo3.addEventListener('click',setAlternativas)
modulo4.addEventListener('click',setAlternativas)
modulo5.addEventListener('click',setAlternativas)
modulo6.addEventListener('click',setAlternativas)
modulo7.addEventListener('click',setAlternativas)
modulo8.addEventListener('click',setAlternativas)
modulo9.addEventListener('click',setAlternativas)
modulo10.addEventListener('click',setAlternativas)






grabarTodo.style.display = 'none'


if (sessionStorage.length === 0) {
    let x = 0
    for (var index = 0; index < localStorage.length; index++) {
        var key = localStorage.key(index)
        var value = localStorage.getItem(key);
        sessionStorage.setItem(key,value);

        window.location.reload()
    }
} else {
    if (sessionStorage.getItem('nombreProyecto')===null) {
        nombreProyecto.value = ""
    } else {
        nombreProyecto.value = sessionStorage.getItem('nombreProyecto')
    }
    if (sessionStorage.getItem('descripcionProyecto')===null) {
        descripcionProyecto.value = ""
    } else {
        descripcionProyecto.value = sessionStorage.getItem('descripcionProyecto')
    }
    if (sessionStorage.getItem('horizonteEvaluacion')===null) {
        horizonteEvaluacion.value = ""
    } else {
        horizonteEvaluacion.value = sessionStorage.getItem('horizonteEvaluacion')
    }
    if (sessionStorage.getItem('numAlternativas')===null) {
        numeroAlternativas.value = ""
    } else {
        numeroAlternativas.value = sessionStorage.getItem('numAlternativas')
    }
}


document.addEventListener("DOMContentLoaded", crearAlternativas)

function crearAlternativas() {
    let numeroAlternativasInt = parseInt(numeroAlternativas.value)  
    contenedorAlternativas.innerHTML = "";  
    sessionStorage.setItem("nombreProyecto", nombreProyecto.value)  
    sessionStorage.setItem("descripcionProyecto", descripcionProyecto.value)  
    sessionStorage.setItem("horizonteEvaluacion", horizonteEvaluacion.value)  
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
            <span>Número de componente: <input type="text" value="${soloAlt > x ? JSON.parse(sessionStorage.getItem(`Alt_numero_${x+1}`)).numeroCom : ""}" name="" class="numeroCom" id="numeroComponente${x}"></span>
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

function guardarPartida() {
    
if (typeof(Storage) !== "undefined") {
    
    if (sessionStorage.length > 0) {
      
      for (var i = 0; i < sessionStorage.length; i++) {
        var key = sessionStorage.key(i);
        var value = sessionStorage.getItem(key);

        localStorage.setItem(key, value);
      }
    }
  } else {

  }  
}

function eliminarPartida() {
    localStorage.clear()
    sessionStorage.clear()

    window.location.reload()
}

grabarTodo.addEventListener('click', guardarPartida)
eliminarTodo.addEventListener('click', eliminarPartida)
numeroAlternativas.addEventListener('change',setAlternativas())
guardarComo.addEventListener('click',function (e) {


    function clickArtificial() {
        grabarTodo.click()
    }

    clickArtificial()
    // Crear un objeto vacío para almacenar los datos
const data = {};

// Recorrer todos los pares clave-valor del localStorage y agregarlos al objeto
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  data[key] = value;
}

// Convertir el objeto en una cadena JSON
const jsonData = JSON.stringify(data);

// Crear un archivo JSON y descargarlo
const file = new Blob([jsonData], {type: 'application/json'});
const a = document.createElement('a');
a.href = URL.createObjectURL(file);
a.download = 'localStorage.json';
a.click();
})

abrirArchivo.addEventListener('click', function () {// Agregar un elemento <input> de tipo "file" a la página
    const input = document.createElement('input');
    input.type = 'file';
    input.className = 'selec-archivo';
    input.addEventListener('change', handleFileSelect);
    document.body.appendChild(input);
    
    // Controlador de eventos para el evento "change"
    function handleFileSelect(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
    
      reader.onload = function(event) {
        const jsonData = event.target.result;
        const data = JSON.parse(jsonData);
    
        // Guardar los datos en el localStorage
        for (const key in data) {
          localStorage.setItem(key, data[key]);
        }
      };
    
      reader.readAsText(file);
      sessionStorage.clear()
      window.location.reload()
    }
})
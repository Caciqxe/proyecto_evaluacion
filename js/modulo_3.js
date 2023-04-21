const botonGrabar = document.getElementById('grabar')
const botonCrecimiento = document.getElementById('botonCrecimiento')

let bodyCrecimiento = document.getElementById('bodyCrecimiento')
let poblacionReferencia = document.getElementById('poblacionReferencia')
let poblacionAfectada = document.getElementById('poblacionAfectada')
let poblacionObjetivo = document.getElementById('poblacionObjetivo')
let unidadMedida = document.getElementById('unidadMedida')
let descripcionUnidad = document.getElementById('descripcionUnidad')
let tasaCrecimiento = document.getElementById('tasaCrecimiento')
let coeficienteConsumo = document.getElementById('coeficienteConsumo')
let poblacionInicial = document.getElementById('poblacionInicial')
let demandaAnual = document.getElementById('demandaAnual')
let estratoSocioeconomico = document.getElementById('estratoSocioeconomico')
let nivelEducativo = document.getElementById('nivelEducativo')
let pertenenciaEtnica = document.getElementById('pertenenciaEtnica')
let gradoVulnerabilidad = document.getElementById('gradoVulnerabilidad')
let actividadEconomica = document.getElementById('actividadEconomica')
let otraCaracteristica = document.getElementById('otraCaracteristica')

let horizonte = sessionStorage.getItem('horizonteEvaluacion')
let infoExtra = JSON.parse(sessionStorage.getItem("Modulo3Extra"))
let tablaCaracterizacionPoblacion = JSON.parse(sessionStorage.getItem("tablaCaracterizacionPoblacion"))
let tablaCriterios = JSON.parse(sessionStorage.getItem('tablaCriterios'))

let arrayUnidades = [
    '---',
    'Número',
    'Global',
    'm',
    'm2',
    'm3',
    'km',
    'km2',
    'ha',
    'kg',
    'ton'
]



/* console.log(arrayUnidades);

// Encuentra el dropdown en la celda
var dropdownCell = document.querySelector('.dropdown-cell');
var dropdown = dropdownCell.querySelector('.my-dropdown');

// Crea las opciones del dropdown basado en el array
arrayUnidades.forEach(function(value, index) {
  var option = document.createElement('option');
  option.value = index;
  option.text = value;

  // Si el valor actual es el valor predeterminado, establecer como seleccionado
  option.selected = true;

  dropdown.appendChild(option);
});

dropdown.onchange = function() {
    console.log(dropdown.value);
    let valor = arrayUnidades[dropdown.value]
    //valor = arrayUnidades[dropdown.innerHTML];
    console.log(valor);

    unidadMedida.innerHTML = valor
}


// Establece la altura máxima del dropdown
dropdown.style.maxHeight = '100px';
 */

if (infoExtra != null) {      
    poblacionReferencia.innerHTML = infoExtra.poblacionReferencia
    poblacionAfectada.innerHTML = infoExtra.poblacionAfectada
    poblacionObjetivo.innerHTML = infoExtra.poblacionObjetivo
    unidadMedida.innerHTML = infoExtra.unidadMedida
    descripcionUnidad.innerHTML = infoExtra.descripcionUnidad
    tasaCrecimiento.innerHTML = infoExtra.tasaCrecimiento
    coeficienteConsumo.innerHTML = infoExtra.coeficienteConsumo
    poblacionInicial.innerHTML = infoExtra.poblacionInicial
    demandaAnual.innerHTML = infoExtra.demandaAnual
    estratoSocioeconomico.innerHTML = infoExtra.estratoSocioeconomico
    nivelEducativo.innerHTML = infoExtra.nivelEducativo
    pertenenciaEtnica.innerHTML = infoExtra.pertenenciaEtnica
    gradoVulnerabilidad.innerHTML = infoExtra.gradoVulnerabilidad
    actividadEconomica.innerHTML = infoExtra.actividadEconomica
    otraCaracteristica.innerHTML = infoExtra.otraCaracteristica
}

if (tablaCaracterizacionPoblacion != null) {
    let edadTotales = ['5','13','18','28','50','60','61']

    for (let index = 0; index < edadTotales.length; index++) {
        const element = edadTotales[index];
        let dato_h = document.getElementById(`h${element}años`)
        let dato_m = document.getElementById(`m${element}años`)
        let dato_t = document.getElementById(`t${element}años`)
        let dato_d = document.getElementById(`d${element}años`)

        dato_h.value = tablaCaracterizacionPoblacion.rows[index][2]
        dato_m.value = tablaCaracterizacionPoblacion.rows[index][4]
        dato_t.value = tablaCaracterizacionPoblacion.rows[index][6]
        dato_d.innerHTML = tablaCaracterizacionPoblacion.rows[index][8]
    }
    let totalH = document.getElementById('totalH')
    let totalM = document.getElementById('totalM')
    let totalT = document.getElementById('totalT')
    
    totalH.value = tablaCaracterizacionPoblacion.rows[7][2]
    totalM.value = tablaCaracterizacionPoblacion.rows[7][4]
    totalT.value = tablaCaracterizacionPoblacion.rows[7][6]
}

if (tablaCriterios != null) {
    let bodyModificar = document.getElementById('bodyCriterios')
    let x = 0
    while (x<tablaCriterios.rows.length) {

        
        bodyModificar.innerHTML +=
        `
        <tr>
            <td><span class="textInput" contenteditable="true" style="width: 97%;" >${tablaCriterios.rows[x][0]}</span></td>
            <td><span class="textInput" contenteditable="true" style="width: 97%;" style="text-align:center">${tablaCriterios.rows[x][1]}</span></td>
            <td><span class="textInput" contenteditable="true" style="width: 99.5%;">${tablaCriterios.rows[x][2]}</span></td>
        </tr>
        `

        x++
    }
} else {
    let bodyModificar = document.getElementById('bodyCriterios')

    bodyModificar.innerHTML =
    `
    <tr>
        <th colspan="2">POBLACIÓN OBJETIVO</th>
        <th colspan="1" rowspan="2">CRITERIOS DE ASIGNACIÓN (De acuerdo al RUB: Registro Unico de Beneficiarios, el cual tiene identificados los hogares en pobreza y en extrema pobreza)</th>
    </tr>
    <tr>
        <th>DESCRIPCION</th>
        <th>CANTIDAD</th>
    </tr>
    <tr>
        <td><span class="textInput" contenteditable="true" style="width: 97%;"></span></td>
        <td><span class="textInput" contenteditable="true" style="width: 97%;"></span></td>
        <td><span class="textInput" contenteditable="true" style="width: 99.5%;"></span></td>
    </tr>
    `
}


function contarFilas() {

    const tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id

        let skipRows = 1
        tableId = tableId.toString()

        if (tableId.includes('tablaCriterios')) {
            skipRows = 2
        }

        for (let j = skipRows; j < rows.length; j++) {
            const rowData = [];
            const cells = rows[j].cells;

            for (let k = 0; k < cells.length; k++) {
                if (tableId.includes('tablaCaracterizacionPoblacion')) {
                    if (k===0||k===4) {
                        let cellData = cells[k].innerText.trim();
                        rowData.push(cellData);
                    } else {
                        let cellData = cells[k].childNodes[0].id
                        cellData = document.getElementById(`${cellData}`)
                        console.log(cellData);
                        rowData.push(cellData.value)}
                        
                } if (tableId.includes('tablaCrecimiento')) {
                    if (k===0) {
                        const cellData = cells[k].innerText.trim();
                        rowData.push(cellData);
                    } else {
                        let cellData = cells[k].childNodes[0].id
                        cellData = document.getElementById(`${cellData}`)
                        
                        rowData.push(cellData.value)
                    }
                } else {
                    const cellData = cells[k].innerText.trim();
                    rowData.push(cellData);
                }
            }

        
            if (rowData.length > 0) {
                tableData.push(rowData);
            }
        }

      
        const tableObject = {
        rows: tableData
        };
        if (tableId === "") {
            
        } else {
            sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        }
    }
}

function grabarTodo() {
    let array = []
    array = {
        poblacionReferencia:poblacionReferencia.innerHTML,
        poblacionAfectada:poblacionAfectada.innerHTML,
        poblacionObjetivo:poblacionObjetivo.innerHTML,
        unidadMedida:unidadMedida.innerHTML,
        descripcionUnidad:descripcionUnidad.innerHTML,
        tasaCrecimiento:tasaCrecimiento.innerHTML,
        coeficienteConsumo:coeficienteConsumo.innerHTML,
        poblacionInicial:poblacionInicial.innerHTML,
        demandaAnual:demandaAnual.innerHTML,
        estratoSocioeconomico:estratoSocioeconomico.innerHTML,
        nivelEducativo:nivelEducativo.innerHTML,
        pertenenciaEtnica:pertenenciaEtnica.innerHTML,
        gradoVulnerabilidad:gradoVulnerabilidad.innerHTML,
        actividadEconomica:actividadEconomica.innerHTML,
        otraCaracteristica:otraCaracteristica.innerHTML
    }
    sessionStorage.setItem('Modulo3Extra',JSON.stringify(array))
}

function generarTablaCremiento() {
    
    let y = 0
    bodyCrecimiento.innerHTML =
    `
    <tr>
        <th>AÑO</th>
        <th>POBLACIÓN</th>
        <th>DEMANDA</th>
        <th>OFERTA</th>
        <th>DEFICIT / SUPERAVIT</th>
    </tr>
    `
    while (y<horizonte) {
        let poblacionCalculada = poblacionInicial.innerHTML * Math.pow(parseFloat((parseFloat(tasaCrecimiento.innerHTML)/100))+1,y)
        bodyCrecimiento.innerHTML +=
            `
            <tr>
                <td><span class="respuestaTabla" style="width: 95%;">${y+1}</span></td>
                <td><input id="poblacion${y+1}" class="inputNumeroDer" value="${parseInt(poblacionCalculada)}" readonly="true" style="width: 98%;"></td>
                <td><input id="demanda${y+1}" class="inputNumeroDer" value="${parseInt(poblacionCalculada * coeficienteConsumo.innerHTML)}" readonly="true" style="width: 98%;"></td>
                <td><input id="oferta${y+1}" class="inputNumeroDer" value="${parseInt(demandaAnual.innerHTML)}" readonly="true" style="width: 98%;"></td>
                <td><input id="deficit${y+1}" class="inputNumeroDer" value="${parseInt(demandaAnual.innerHTML - (poblacionCalculada * coeficienteConsumo.innerHTML))}" readonly="true" style="width: 98%;"></td>
            <tr>
            `
        
    y++
    }
}




function totalEdad(e) {
    let e_id = e.srcElement.id

    if (e_id.includes('h')) {
        let e_id_h = e_id
        let e_id_m = e_id.replace('h','m')
        let e_id_t = e_id.replace('h','t')

        let hombre = document.getElementById(`${e_id_h}`)
        let mujer = document.getElementById(`${e_id_m}`)
        let total = document.getElementById(`${e_id_t}`)

        total.value = parseInt(hombre.value) + parseInt(mujer.value)
    } else if (e_id.includes('m')) {
        let e_id_h = e_id.replace('m','h')
        let e_id_m = e_id
        let e_id_t = e_id.replace('m','t')

        let hombre = document.getElementById(`${e_id_h}`)
        let mujer = document.getElementById(`${e_id_m}`)
        let total = document.getElementById(`${e_id_t}`)

        total.value = parseInt(hombre.value) + parseInt(mujer.value)
    }

    let edadTotales = ['5','13','18','28','50','60','61']
    let sumaH = 0
    let sumaM = 0
    let sumaT = 0

    for (let index = 0; index < edadTotales.length; index++) {
        const element = edadTotales[index];
        let dato_h = document.getElementById(`h${element}años`)
        let dato_m = document.getElementById(`m${element}años`)
        let dato_t = document.getElementById(`t${element}años`)

        sumaH = parseInt(sumaH)+parseInt(dato_h.value)
        sumaM = parseInt(sumaM)+parseInt(dato_m.value)
        sumaT = parseInt(sumaT)+parseInt(dato_t.value)
    }
    let totalH = document.getElementById('totalH')
    let totalM = document.getElementById('totalM')
    let totalT = document.getElementById('totalT')
    
    totalH.value = sumaH
    totalM.value = sumaM
    totalT.value = sumaT
}

const agregarFila = (event) => {
    if (event.target.classList.contains('agregar'))
    {

    let table = event.srcElement.id.toString()
    let id_loc = table.replace('a_bttn_','body')
    table = document.getElementById(`${id_loc}`)
    var rowCount = table.rows.length;

    var row = table.insertRow(-1);
    var cell1 = row.insertCell(-1);
    var cell2 = row.insertCell(-1);
    var cell3 = row.insertCell(-1);

    cell1.innerHTML = `<td><span class= "textInput" contenteditable="true" style="width: 97%;"></span></td>`
    cell2.innerHTML = `<td><span class= "textInput" contenteditable="true" style="width: 97%;"></span></td>`
    cell3.innerHTML = `<td><span class= "textInput" contenteditable="true" style="width: 99.5%;"></span></td>`
    }
  }

  const eliminarFila = (event) =>{
    if (event.target.classList.contains('eliminar')) {
        
    
        let table = event.srcElement.id.toString()
        table = table.replace('e_bttn_','body')
        table = document.getElementById(`${table}`)
        var rowCount = table.rows.length;

        if (rowCount >= 4) {
    
            
            table.deleteRow(-1);
        }
    }
}

window.addEventListener('click', agregarFila)
window.addEventListener('click', eliminarFila)
botonCrecimiento.addEventListener('click',grabarTodo)
botonCrecimiento.addEventListener('click',generarTablaCremiento)
botonGrabar.addEventListener('click',contarFilas)
botonGrabar.addEventListener('click',grabarTodo)
window.addEventListener('change', totalEdad)

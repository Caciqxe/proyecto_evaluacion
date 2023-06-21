const botonGrabar = document.getElementById('botonGrabar')
const ejecucion = sessionStorage.getItem('ejecucion')

let costosPreinversion = document.getElementById('costosPreinversion')
let costosEstudios = document.getElementById('costosEstudios')
let costosDisenos = document.getElementById('costosDisenos')
let totalCostosPreinversion = document.getElementById('totalCostosPreinversion')
let totalCostosEstudios = document.getElementById('totalCostosEstudios')

let ingresosIngresos = document.getElementById('ingresosIngresos')
let ingresoConcepto = document.getElementById('ingresoConcepto')
//let ingresoConcepto2 = document.getElementById('ingresoConcepto2')
let totalIngresosHeader = document.getElementById('totalIngresosHeader')
let totalIngresosConceptos = document.getElementById('totalIngresosConceptos')

let flujoNetoHeader = document.getElementById('flujoNetoHeader')
let flujoNetoTotal = document.getElementById('flujoNetoTotal')


let contenedorComponentes = document.getElementById('contenedorComponentes')
let alternativaGanadora = sessionStorage.getItem('alternativaGanadora')
let horizonte = sessionStorage.getItem('horizonteEvaluacion')
let alternativaSeleccionada = JSON.parse(sessionStorage.getItem(`Alt_numero_${alternativaGanadora}`))



let sumTodo = JSON.parse(sessionStorage.getItem(`sumTodoAlt${alternativaGanadora}`))
let costoOperacion = JSON.parse(sessionStorage.getItem(`costosOperacionAlt${alternativaGanadora}`))

let numComponentes = alternativaSeleccionada.numeroCom

let costosOperacion= JSON.parse(sessionStorage.getItem(`costosOperacionAlt${alternativaGanadora}`))
let ultimoTotales= JSON.parse(sessionStorage.getItem(`ultimoTotalesAlt${alternativaGanadora}`))

let headerInversion = document.getElementById('headerInversion')
let bodyInversion = document.getElementById('bodyInversion')

let headerOperacion = document.getElementById('headerOperacion')
let bodyOperacion = document.getElementById('bodyOperacion')

let x = 0
let y = 0

let preInversion = JSON.parse(sessionStorage.getItem('preInversion'))
let totalPreinversion = JSON.parse(sessionStorage.getItem('totalPreinversion'))
let totalCostosOperacion = JSON.parse(sessionStorage.getItem('totalCostosOperacion'))
let ingresos = JSON.parse(sessionStorage.getItem('ingresos'))
let totalIngresos = JSON.parse(sessionStorage.getItem('totalIngresos'))
let flujoNeto = JSON.parse(sessionStorage.getItem('flujoNeto'))
let tablaCostosInversion = JSON.parse(sessionStorage.getItem('totalCostosInversion'))
let tablaCostosOperacion = JSON.parse(sessionStorage.getItem('totalCostosOperacion'))

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



if (preInversion === null) {
    
    while (y<=horizonte) {
        costosPreinversion.innerHTML +=
        `
        <th>${y}</th>
        `
        costosEstudios.innerHTML +=
        `
        <td><span class= "textInput7-1" contenteditable="true" style="text-align:right">0</span></td>
        `
        costosDisenos.innerHTML +=
        `
        <td><span class= "textInput7-1" contenteditable="true" style="text-align:right">0</span></td>
        `
        totalCostosPreinversion.innerHTML +=
        `
        <th>${y}</th>
        `
        totalCostosEstudios.innerHTML +=
        `
        <td><span class= "textInput7-1" contenteditable="false" style="text-align:right">0</span></td>
        `

        ingresosIngresos.innerHTML +=
        `
        <th>${y}</th>
        `
        ingresoConcepto.innerHTML +=
        `
        <td><span class= "textInput7-1" contenteditable="true" style="text-align:right">0</span></td>
        `
/*         ingresoConcepto2.innerHTML +=
        `
        <td><span class= "textInput7-1" contenteditable="true">0</span></td>
        ` */
        totalIngresosHeader.innerHTML +=
        `
        <th>${y}</th>
        `
        totalIngresosConceptos.innerHTML +=
        `
        <td><span class= "textInput7-1" contenteditable="false" style="text-align:right">0</span></td>
        `

        flujoNetoHeader.innerHTML +=
        `
        <th>${y}</th>
        `
        flujoNetoTotal.innerHTML +=
        `
        <td><span class= "textInput7-1" contenteditable="false" style="text-align:right">0</span></td>
        `
        
        y++
    }
} else {


    let unidadMedidaEstudio = document.getElementById('unidadMedidaEstudio')
    let cantRequeridaEstudio = document.getElementById('cantRequeridaEstudio')
    let valorUnitarioEstudio = document.getElementById('valorUnitarioEstudio')
    let valorTotalEstudio = document.getElementById('valorTotalEstudio')
    let unidadMedidaDisenos = document.getElementById('unidadMedidaDisenos')
    let cantRequeridaDisenos = document.getElementById('cantRequeridaDisenos')
    let valorUnitarioDisenos = document.getElementById('valorUnitarioDisenos')
    let valorTotalDisenos = document.getElementById('valorTotalDisenos')
    let descripcionConcepto1 = document.getElementById('descripcionConcepto1')
    let unidadMedidaConcepto1 = document.getElementById('unidadMedidaConcepto1')
    let cantRequeridaConcepto1 = document.getElementById('cantRequeridaConcepto1')
    let valorUnitarioConcepto1 = document.getElementById('valorUnitarioConcepto1')
    let valorTotalConcepto1 = document.getElementById('valorTotalConcepto1')
/*     let unidadMedidaConcepto2 = document.getElementById('unidadMedidaConcepto2')
    let cantRequeridaConcepto2 = document.getElementById('cantRequeridaConcepto2')
    let valorUnitarioConcepto2 = document.getElementById('valorUnitarioConcepto2')
    let valorTotalConcepto2 = document.getElementById('valorTotalConcepto2') */


    unidadMedidaEstudio.innerHTML = preInversion.rows[0][1]
    cantRequeridaEstudio.innerHTML = preInversion.rows[0][2]
    valorUnitarioEstudio.innerHTML = preInversion.rows[0][3]
    valorTotalEstudio.innerHTML = parseInt(preInversion.rows[0][2]) * parseInt(preInversion.rows[0][3])
    unidadMedidaDisenos.innerHTML = preInversion.rows[1][1]
    cantRequeridaDisenos.innerHTML = preInversion.rows[1][2]
    valorUnitarioDisenos.innerHTML = preInversion.rows[1][3]
    valorTotalDisenos.innerHTML = parseInt(preInversion.rows[1][2]) * parseInt(preInversion.rows[1][3])
    descripcionConcepto1.innerHTML = ingresos.rows[0][0]
    unidadMedidaConcepto1.setAttribute("value", ingresos.rows[0][1])
    cantRequeridaConcepto1.innerHTML = ingresos.rows[0][2]
    valorUnitarioConcepto1.innerHTML = ingresos.rows[0][3]
    valorTotalConcepto1.innerHTML = parseInt(ingresos.rows[0][2]) * parseInt(ingresos.rows[0][3])
/*     unidadMedidaConcepto2.innerHTML = ingresos.rows[1][1]
    cantRequeridaConcepto2.innerHTML = ingresos.rows[1][2]
    valorUnitarioConcepto2.innerHTML = ingresos.rows[1][3]
    valorTotalConcepto2.innerHTML = parseInt(ingresos.rows[1][2]) * parseInt(ingresos.rows[1][3])
 */


    while (y<=horizonte) {

    costosPreinversion.innerHTML +=
    `
    <th>${y}</th>
    `
    
    costosEstudios.innerHTML +=
    `
    <td><span class= "textInput7-1" contenteditable="true" style="text-align: right">${(preInversion.rows[0][y+5] === undefined) ? 0:preInversion.rows[0][y+5]}</span></td>
    `

    costosDisenos.innerHTML +=
    `
    <td><span class= "textInput7-1" contenteditable="true" style="text-align: right">${(preInversion.rows[1][y+5] === undefined) ? 0:preInversion.rows[1][y+5]}</span></td>
    `

    totalCostosPreinversion.innerHTML +=
    `
    <th>${y}</th>
    `
    totalCostosEstudios.innerHTML +=
    `
    <td><span class= "textInput7-1" contenteditable="false" style="text-align: right">${parseInt(preInversion.rows[0][y+5]) + parseInt(preInversion.rows[1][y+5])}</span></td>
    `

    ingresosIngresos.innerHTML +=
    `
    <th>${y}</th>
    `
    ingresoConcepto.innerHTML +=
    `
    <td><span class= "textInput7-1" contenteditable="true" style="text-align: right">${(ingresos.rows[0][y+5] === undefined) ? 0:ingresos.rows[0][y+5]}</span></td>
    `
    /* ingresoConcepto2.innerHTML +=
    `
    <td><span class= "textInput7-1" contenteditable="true">${ingresos.rows[1][y+5]}</span></td>
    ` */
    totalIngresosHeader.innerHTML +=
    `
    <th>${y}</th>
    `

    let comodin = 0
    let sumTotalIngresos = 0
    while (comodin < ingresos.rows.length) {
        sumTotalIngresos += parseInt(ingresos.rows[comodin][y+5])
        
        comodin ++
    }


    totalIngresosConceptos.innerHTML +=
    `
    <td><span class= "textInput7-1" contenteditable="false" style="text-align: right">${parseInt(sumTotalIngresos)}</span></td>
    `

    flujoNetoHeader.innerHTML +=
    `
    <th>${y}</th>
    `
    flujoNetoTotal.innerHTML +=
    `
    <td><span class= "textInput7-1" contenteditable="false" style="text-align: right">${parseInt(totalIngresos.rows[0][y+1]) - (parseInt(tablaCostosInversion.rows[0][y+1])+parseInt(tablaCostosOperacion.rows[0][y+1])+parseInt(totalPreinversion.rows[0][y+1]))}</span></td>
    `
    
    y++
    }

    let bodyPreInversion0 = document.getElementById('bodyPreInversion0')

    let boydobydoby = document.getElementById('ingresosBodyBodyBody')
    let largo_tabla = 1

    while (largo_tabla < ingresos.rows.length) {
        let periodos_body = 0

        boydobydoby.innerHTML +=
        `
        <tr id="ingresoConcepto${largo_tabla+1}">
            <td><span id="descripcionConcepto${largo_tabla+1}" class="textInput7-1" contenteditable="true">${ingresos.rows[largo_tabla][0]}</span></td>
            <td class="celdaUnidades">
                <span style="display: none;"></span>
                <select id="unidadMedidaConcepto${largo_tabla+1}" class="dropdownUnidades" value="${ingresos.rows[largo_tabla][1]}"></select>
            </td>
            <td><span id="cantRequeridaConcepto${largo_tabla+1}" class= "textInput7-1" style="text-align: right">${ingresos.rows[largo_tabla][2]}</span></td>
            <td><span id="valorUnitarioConcepto${largo_tabla+1}" class= "textInput7-1" style="text-align: right">${ingresos.rows[largo_tabla][3]}</span></td>
            <td><span id="valorTotalConcepto${largo_tabla+1}" class= "textInput7-1" style="text-align: right">${parseInt(ingresos.rows[largo_tabla][2]) * parseInt(ingresos.rows[largo_tabla][3])}</span></td>
        </tr>
        `

        let filaActual = document.getElementById(`ingresoConcepto${largo_tabla+1}`)

        while (periodos_body<=horizonte) {
            
            filaActual.innerHTML +=
            `
            <td><span class= "textInput7-1" contenteditable="true" style="text-align: right">${ingresos.rows[largo_tabla][periodos_body+5]}</span></td>
            `
            periodos_body++
        }
        largo_tabla ++ 

    }


bodyPreInversion0.innerHTML = parseInt(preInversion.rows[0][4]) + parseInt(preInversion.rows[1][4])

let bodyIngreso0 = document.getElementById('bodyIngreso0')


let comodin_body = 0
let sumTotalIngresos = 0

while (comodin_body < ingresos.rows.length) {
    sumTotalIngresos += (parseInt(ingresos.rows[comodin_body][2])*parseInt(ingresos.rows[comodin_body][3]))
    
    console.log(sumTotalIngresos);
    comodin_body ++
}

bodyIngreso0.innerHTML = parseInt(sumTotalIngresos)

let bodyFlujoNeto0 = document.getElementById('bodyFlujoNeto0')

bodyFlujoNeto0.innerHTML =  parseInt(totalIngresos.rows[0][0]) - (parseInt(totalPreinversion.rows[0][0]) + parseInt(tablaCostosInversion.rows[0][0]) + parseInt(tablaCostosOperacion.rows[0][0]))


let indicadores = JSON.parse(sessionStorage.getItem('indicadoresUltimaTabla'))

let tasa = document.getElementById('tasaOportunidad')
tasa.style = "text-align:right"
tasa.innerHTML = indicadores.rows[0][1]
tasa = parseFloat(tasa.innerHTML)
tasa = parseFloat(tasa/100)

let van = document.getElementById('van')
van.innerHTML = calcularVPN(flujoNeto.rows[0][1], flujoNeto.rows[0], tasa)

if (parseInt(van.innerHTML)<0) {
    van.style = "color:red;text-align:right"
}

let tir = document.getElementById('tir')
tir.innerHTML = calcularTIR(flujoNeto.rows[0][1], flujoNeto.rows[0])

//let valorRequerido0V = sessionStorage.getItem('valorRequerido0')
let valorRequerido0V = JSON.parse(sessionStorage.getItem('totalPreinversion')).rows[0][0]
//let valorRequerido1V = sessionStorage.getItem('valorRequerido1')
let valorRequerido1V = JSON.parse(sessionStorage.getItem('totalCostosInversion')).rows[0][0]
//let valorRequerido2V = sessionStorage.getItem('valorRequerido2')
let valorRequerido2V = JSON.parse(sessionStorage.getItem('totalCostosOperacion')).rows[0][0]
let valorRequerido3V = sessionStorage.getItem('valorRequerido3')




let fondosNacionales0V = sessionStorage.getItem('fondosNacionales0')
let fondosNacionales1V = sessionStorage.getItem('fondosNacionales1')
let fondosNacionales2V = sessionStorage.getItem('fondosNacionales2')
let fondosNacionales3V = sessionStorage.getItem('fondosNacionales3')
let municipalComunidad0V = sessionStorage.getItem('municipalComunidad0')
let municipalComunidad1V = sessionStorage.getItem('municipalComunidad1')
let municipalComunidad2V = sessionStorage.getItem('municipalComunidad2')
let municipalComunidad3V = sessionStorage.getItem('municipalComunidad3')
let cooperacionInternacional0V = sessionStorage.getItem('cooperacionInternacional0')
let cooperacionInternacional1V = sessionStorage.getItem('cooperacionInternacional1')
let cooperacionInternacional2V = sessionStorage.getItem('cooperacionInternacional2')
let cooperacionInternacional3V = sessionStorage.getItem('cooperacionInternacional3')
let prestamos0V = sessionStorage.getItem('prestamos0')
let prestamos1V = sessionStorage.getItem('prestamos1')
let prestamos2V = sessionStorage.getItem('prestamos2')
let prestamos3V = sessionStorage.getItem('prestamos3')
let recursosPropios0V = sessionStorage.getItem('recursosPropios0')
let recursosPropios1V = sessionStorage.getItem('recursosPropios1')
let recursosPropios2V = sessionStorage.getItem('recursosPropios2')
let recursosPropios3V = sessionStorage.getItem('recursosPropios3')
let ingresosProyecto0V = sessionStorage.getItem('ingresosProyecto0')
let ingresosProyecto1V = sessionStorage.getItem('ingresosProyecto1')
let ingresosProyecto2V = sessionStorage.getItem('ingresosProyecto2')
let ingresosProyecto3V = sessionStorage.getItem('ingresosProyecto3')
let app0V = sessionStorage.getItem('app0')
let app1V = sessionStorage.getItem('app1')
let app2V = sessionStorage.getItem('app2')
let app3V = sessionStorage.getItem('app3')
let otros0V = sessionStorage.getItem('otros0')
let otros1V = sessionStorage.getItem('otros1')
let otros2V = sessionStorage.getItem('otros2')
let otros3V = sessionStorage.getItem('otros3')
let totalTablaFinanciamiento0V = sessionStorage.getItem('totalTablaFinanciamiento0')
let totalTablaFinanciamiento1V = sessionStorage.getItem('totalTablaFinanciamiento1')
let totalTablaFinanciamiento2V = sessionStorage.getItem('totalTablaFinanciamiento2')
let totalTablaFinanciamiento3V = sessionStorage.getItem('totalTablaFinanciamiento3')
let justificacionPropuestaV = sessionStorage.getItem('justificacionPropuesta')

let valorRequerido0 = document.getElementById('valorRequerido0')
let valorRequerido1 = document.getElementById('valorRequerido1')
let valorRequerido2 = document.getElementById('valorRequerido2')
let valorRequerido3 = document.getElementById('valorRequerido3')
let fondosNacionales0 = document.getElementById('fondosNacionales0')
let fondosNacionales1 = document.getElementById('fondosNacionales1')
let fondosNacionales2 = document.getElementById('fondosNacionales2')
let fondosNacionales3 = document.getElementById('fondosNacionales3')
let municipalComunidad0 = document.getElementById('municipalComunidad0')
let municipalComunidad1 = document.getElementById('municipalComunidad1')
let municipalComunidad2 = document.getElementById('municipalComunidad2')
let municipalComunidad3 = document.getElementById('municipalComunidad3')
let cooperacionInternacional0 = document.getElementById('cooperacionInternacional0')
let cooperacionInternacional1 = document.getElementById('cooperacionInternacional1')
let cooperacionInternacional2 = document.getElementById('cooperacionInternacional2')
let cooperacionInternacional3 = document.getElementById('cooperacionInternacional3')
let prestamos0 = document.getElementById('prestamos0')
let prestamos1 = document.getElementById('prestamos1')
let prestamos2 = document.getElementById('prestamos2')
let prestamos3 = document.getElementById('prestamos3')
let recursosPropios0 = document.getElementById('recursosPropios0')
let recursosPropios1 = document.getElementById('recursosPropios1')
let recursosPropios2 = document.getElementById('recursosPropios2')
let recursosPropios3 = document.getElementById('recursosPropios3')
let ingresosProyecto0 = document.getElementById('ingresosProyecto0')
let ingresosProyecto1 = document.getElementById('ingresosProyecto1')
let ingresosProyecto2 = document.getElementById('ingresosProyecto2')
let ingresosProyecto3 = document.getElementById('ingresosProyecto3')
let app0 = document.getElementById('app0')
let app1 = document.getElementById('app1')
let app2 = document.getElementById('app2')
let app3 = document.getElementById('app3')
let otros0 = document.getElementById('otros0')
let otros1 = document.getElementById('otros1')
let otros2 = document.getElementById('otros2')
let otros3 = document.getElementById('otros3')
let totalTablaFinanciamiento0 = document.getElementById('totalTablaFinanciamiento0')
let totalTablaFinanciamiento1 = document.getElementById('totalTablaFinanciamiento1')
let totalTablaFinanciamiento2 = document.getElementById('totalTablaFinanciamiento2')
let totalTablaFinanciamiento3 = document.getElementById('totalTablaFinanciamiento3')
let justificacionPropuesta = document.getElementById('justificacionPropuesta')

valorRequerido0.innerHTML = valorRequerido0V
valorRequerido1.innerHTML = valorRequerido1V
valorRequerido2.innerHTML = parseFloat(parseInt(valorRequerido2V)/horizonte)
valorRequerido3.innerHTML = valorRequerido3V
fondosNacionales0.innerHTML = fondosNacionales0V
fondosNacionales1.innerHTML = fondosNacionales1V
fondosNacionales2.innerHTML = fondosNacionales2V
fondosNacionales3.innerHTML = fondosNacionales3V
municipalComunidad0.innerHTML = municipalComunidad0V
municipalComunidad1.innerHTML = municipalComunidad1V
municipalComunidad2.innerHTML = municipalComunidad2V
municipalComunidad3.innerHTML = municipalComunidad3V
cooperacionInternacional0.innerHTML = cooperacionInternacional0V
cooperacionInternacional1.innerHTML = cooperacionInternacional1V
cooperacionInternacional2.innerHTML = cooperacionInternacional2V
cooperacionInternacional3.innerHTML = cooperacionInternacional3V
prestamos0.innerHTML = prestamos0V
prestamos1.innerHTML = prestamos1V
prestamos2.innerHTML = prestamos2V
prestamos3.innerHTML = prestamos3V
recursosPropios0.innerHTML = recursosPropios0V
recursosPropios1.innerHTML = recursosPropios1V
recursosPropios2.innerHTML = recursosPropios2V
recursosPropios3.innerHTML = recursosPropios3V
ingresosProyecto0.innerHTML = ingresosProyecto0V
ingresosProyecto1.innerHTML = ingresosProyecto1V
ingresosProyecto2.innerHTML = ingresosProyecto2V
ingresosProyecto3.innerHTML = ingresosProyecto3V
app0.innerHTML = app0V
app1.innerHTML = app1V
app2.innerHTML = app2V
app3.innerHTML = app3V
otros0.innerHTML = otros0V
otros1.innerHTML = otros1V
otros2.innerHTML = otros2V
otros3.innerHTML = otros3V
totalTablaFinanciamiento0.innerHTML = parseInt(parseInt(fondosNacionales0V) + parseInt(municipalComunidad0V) + parseInt(cooperacionInternacional0V) + parseInt(cooperacionInternacional0V) + parseInt(prestamos0V) + parseInt(recursosPropios0V) + parseInt(ingresosProyecto0V) + parseInt(app0V) + parseInt(otros0V))
totalTablaFinanciamiento1.innerHTML = parseInt(parseInt(fondosNacionales1V) + parseInt(municipalComunidad1V) + parseInt(cooperacionInternacional1V) + parseInt(cooperacionInternacional1V) + parseInt(prestamos1V) + parseInt(recursosPropios1V) + parseInt(ingresosProyecto1V) + parseInt(app1V) + parseInt(otros1V))
totalTablaFinanciamiento2.innerHTML = parseInt(parseInt(fondosNacionales2V) + parseInt(municipalComunidad2V) + parseInt(cooperacionInternacional2V) + parseInt(cooperacionInternacional2V) + parseInt(prestamos2V) + parseInt(recursosPropios2V) + parseInt(ingresosProyecto2V) + parseInt(app2V) + parseInt(otros2V))
totalTablaFinanciamiento3.innerHTML = totalTablaFinanciamiento3V
justificacionPropuesta.innerHTML = justificacionPropuestaV
}






while (x<numComponentes) {
    let flujoCosto = JSON.parse(sessionStorage.getItem(`flujoCosto_alt${alternativaGanadora}_com${x+1}`))
    let horizonteCosto = JSON.parse(sessionStorage.getItem(`horizonteCosto_alt${alternativaGanadora}_com${x+1}`))
    let nombreComponente = JSON.parse(sessionStorage.getItem(`detalleCompAlt_${alternativaGanadora}`))
    
    let j = 0
    contenedorComponentes.innerHTML +=
    `
    <p class="paso">
        <span>COMPONENTE ${x+1}: ${nombreComponente.rows[x][1]}</span>
    </p>
    <table class="tablaModulo7">
        <tbody id=actividades${x+1}>
            <tr id=cabezera${x+1}>
                <th>ACTIVIDAD</th>
                <th>UNIDAD DE MEDIDA</th>
                <th>CANTIDAD REQUERIDA</th>
                <th>VALOR UNITARIO</th>
                <th>VALOR TOTAL</th>
            </tr>
        </tbody>
    </table>
    `

    let act = 0 
    let numActividades = parseInt(flujoCosto.rows.length-2)
    let actividades = document.getElementById(`actividades${x+1}`)

    while (act<numActividades) {
        actividades.innerHTML +=
        `
        <tr id="comp${x+1}_act${act+1}">
            <td><span class="respuestaTabla7">${flujoCosto.rows[act][0]}</span></td>
            <td><span class="respuestaTabla7">${flujoCosto.rows[act][3]}</span></td>
            <td><span class="respuestaTabla7" style="text-align: right">${flujoCosto.rows[act][4]}</span></td>
            <td><span class="respuestaTabla7" style="text-align: right">${flujoCosto.rows[act][5]}</span></td>
            <td><span class="respuestaTabla7" style="text-align: right">${flujoCosto.rows[act][6]}</span></td>
        </tr>
        `
        


        let tableRow = document.getElementById(`comp${x+1}_act${act+1}`)
        
        let periodo = 0

        while (periodo<=horizonte) {
            tableRow.innerHTML+=
            `
            <td><span class="respuestaTabla7" style="text-align: right">${horizonteCosto.rows[act][periodo]}</span></td>
            `
            periodo++
        }
        act++

    }

    actividades.innerHTML +=
    `
    <tr id="totalCom${x+1}">
        <td class="bajada" colspan="4">TOTAL COMPONENTE ${x+1}</td>
        <td><span class="respuestaTabla7" style="text-align: right">${flujoCosto.rows[act][6]}</span></td>
    </tr>
    `

    let totalComponente = document.getElementById(`totalCom${x+1}`)

    let cabezera = document.getElementById(`cabezera${x+1}`)
    
    
    while (j<=horizonte) {
        cabezera.innerHTML +=
        `
        <th>${j}</th>
        `
        totalComponente.innerHTML+=
        `
        <td><span class="respuestaTabla7" style="text-align: right">${horizonteCosto.rows[act][j]}</span></td>
        `

        j++
    }


    x++
}


let mCostoInversion = 0

let bodyInversion0 = document.getElementById('bodyInversion0')
bodyInversion0.innerHTML = sumTodo.rows[1][1]

while (mCostoInversion < sumTodo.rows[1].length-2) {
    
    bodyInversion.innerHTML+=
    `
    <td><span class="respuestaTabla7" style="text-align: right">${sumTodo.rows[1][mCostoInversion+2]}</span></td>
    `
    headerInversion.innerHTML+=
    `
    <th>${mCostoInversion}</th>
    `
    mCostoInversion++
}



for (let index = 0; index < costosOperacion.rows[0].length-7; index++) {
    
    
    headerOperacion.innerHTML+=
    `
    <th>${index}</th>
    `
}

for (let index = 2; index < ultimoTotales.rows[0].length; index++) {
    
    bodyOperacion.innerHTML +=
    `
    <td><span class="respuestaTabla7" style="text-align: right">${ultimoTotales.rows[0][index]}</span></td>
    `
}

bodyOperacion0.innerHTML = `${ultimoTotales.rows[0][1]}`

const agregarFila = (event) => {
    if (event.target.classList.contains('agregar') ) 
    {
        let horizonte = sessionStorage.getItem('horizonteEvaluacion')

        let table = event.srcElement.id.toString()
        let id_loc = table.replace('a_bttn_','')
        table = document.getElementById(`${id_loc}`)
        var rowCount = table.rows.length;
        var rowCountHor = table.rows.length;
        id_loc = id_loc.toLowerCase()

        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(-1)
        var cell2 = row.insertCell(-1)
        var cell3 = row.insertCell(-1)
        var cell4 = row.insertCell(-1)
        var cell5 = row.insertCell(-1)
        //var cell8 = row.insertCell(-1)
        cell1.innerHTML = `<td><span class= "textInput7-1" contenteditable="true"></span></td>`
        //cell2.innerHTML = `<input id="categoria${rowCount-6}_${id_loc}" list="listaSocial${rowCount-6}_${id_loc}"><datalist class=selectorFactorSocial id=listaSocial${rowCount-6}_${id_loc} style="overflow-y: auto"></datalist>`

        cell2.className = "celdaUnidades"
        cell2.innerHTML = 
        `
            <span style="display: none;"></span>
            <select class="dropdownUnidades"></select>
        `
        cell3.innerHTML = `<span class="textInput7-1" contenteditable="true" style="text-align: right">0</span>`
        cell4.innerHTML = `<span class="textInput7-1" contenteditable="true" style="text-align: right">0</span>`
        cell5.innerHTML = `<span class="textInput7-1" contenteditable="true" style="text-align: right">0</span>`


        let array_periodos=[]
        for (let index = 0; index <= horizonte; index++) {
            array_periodos[index] = row.insertCell(-1)
            array_periodos[index].innerHTML = `<td><span class= "textInput7-1" contenteditable="true" style="text-align: right">0</span></td>`
        }

        crearOpcionesUnidades(row)
    }
}

const eliminarFila = (event) =>{
    if (event.target.classList.contains('eliminar')) {
        

        let table = event.srcElement.id.toString()
        table = table.replace('e_bttn_','')
        table = document.getElementById(`${table}`)
        var rowCount = table.rows.length;

        if (rowCount >= 3) {
    
            table.deleteRow(-1);
        }
    }
}

function crearOpcionesUnidades(fila) {
    var dropdownCell = fila.querySelector('.celdaUnidades');
    var dropdown = dropdownCell.querySelector('.dropdownUnidades');

    console.log(dropdownCell);
    arrayUnidades.forEach(function (value, index) {
        var option = document.createElement('option');
        option.value = index;
        option.text = value;

        console.log(dropdown);
        dropdown.appendChild(option);
    });

    dropdown.onchange = function() {
        console.log(dropdown.value);
        let valor = arrayUnidades[dropdown.value]
        //valor = arrayUnidades[dropdown.innerHTML];
        console.log(valor);
    }

    dropdown.style.maxHeight = '100px';
}


if (ejecucion == 1) {
    contarFilas2()
}

if (ejecucion == 2) {
    contarFilas3()
}

if (ejecucion == 3) {
    contarFilas4()
}

function calcularVPN(inversionInicial, flujosCaja, tasaDescuento) {
    let vpn = -(-inversionInicial)
    console.log(vpn);
    
    
    for (let i = 2; i < flujosCaja.length; i++) {
        
      vpn += flujosCaja[i] / Math.pow((1 + tasaDescuento), i-1);
      
    }
    return vpn.toFixed(2);
  }

function calcularTIR(inversionInicial, flujosCaja) {
    
    let tasaInicial = 0.01
    let tasaFinal = 1.0
    let vpnInicial = calcularVPN(inversionInicial, flujosCaja, tasaInicial)
    let vpnFinal = calcularVPN(inversionInicial, flujosCaja, tasaFinal)

    while (Math.abs(vpnFinal - vpnInicial) > 0.0001) {
        let tasaMedia = (tasaInicial + tasaFinal) / 2
        let vpnMedia = calcularVPN(inversionInicial,flujosCaja,tasaMedia)
        if (vpnMedia>0) {
            tasaInicial = tasaMedia
            vpnInicial = vpnMedia
        } else {
            tasaFinal = tasaMedia;
            vpnFinal = vpnMedia
        }
    }

    return ((tasaInicial + tasaFinal) / 2).toFixed(2)
}

window.addEventListener('DOMContentLoaded', function () {
    var dropdownCell = document.querySelectorAll('.celdaUnidades');

    dropdownCell.forEach(function(cell) {
    var dropdown = cell.querySelector('.dropdownUnidades');


    if (dropdown.attributes['value'] === undefined) {
            // Crea las opciones del dropdown basado en el array
    arrayUnidades.forEach(function(value, index) {
        var option = document.createElement('option');
        option.value = index;
        option.text = value;
  
        // Si el valor actual es el valor predeterminado, establecer como seleccionado
  
        dropdown.appendChild(option);
      });
  
    } else {
        let valorPredeterminado = dropdown.attributes['value'].value
        console.log(valorPredeterminado);
        arrayUnidades.forEach(function(value, index) {
            var option = document.createElement('option');
            option.value = index;
            option.text = value;
      
            if (index === parseInt(valorPredeterminado)) {
                console.log('son iguales');
                option.selected = true;
            }

            dropdown.appendChild(option);
          });
    }

    dropdown.onchange = function() {
        console.log(dropdown.value);
        let valor = arrayUnidades[dropdown.value]
        //valor = arrayUnidades[dropdown.innerHTML];
        console.log(valor);
    }
    dropdown.style.maxHeight = '100px';
})
})


function contarFilas() {
    sessionStorage.setItem('ejecucion', 1)
    const tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id

        let skipRows = 1
        tableId = tableId.toString()

        if (tableId.includes('indicadoresUltimaTabla')) {
            skipRows = 0
        }

        if (tableId === 'ingresos') {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
    
    
                for (let k = 0; k < cells.length; k++) {
                    if (k===1) {
                        const dropdown = cells[k].querySelector('.dropdownUnidades');
                        const selectedIndex = dropdown.selectedIndex
                        console.log(selectedIndex);
                        rowData.push(selectedIndex)
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
        
    
        sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        } else {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
    
    
                for (let k = 0; k < cells.length; k++) {
                    const cellData = cells[k].innerText.trim();
                    rowData.push(cellData);
                }
    
                if (rowData.length > 0) {
                    tableData.push(rowData);
                }
            }
    
            const tableObject = {
            rows: tableData
            };
        
    
        sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        }

        
        
    }
    window.location.reload()
}






function contarFilas2() {
    sessionStorage.setItem('ejecucion', 2)
    const tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id

        let skipRows = 1
        tableId = tableId.toString()

        if (tableId.includes('indicadoresUltimaTabla')) {
            skipRows = 0
        }

        if (tableId === 'ingresos') {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
    
    
                for (let k = 0; k < cells.length; k++) {
                    if (k===1) {
                            let celdaId = cells[k].children[1].attributes['value'].nodeValue
                            rowData.push(celdaId)

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
        
        sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        } else {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
    
    
                for (let k = 0; k < cells.length; k++) {
                    const cellData = cells[k].innerText.trim();
                    rowData.push(cellData);
                }
    
                if (rowData.length > 0) {
                    tableData.push(rowData);
                }
            }
    
            const tableObject = {
            rows: tableData
            };
        
    
        sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        }

        
        
    }
    window.location.reload()
}

function contarFilas3() {
    sessionStorage.setItem('ejecucion', 3)
    const tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id

        let skipRows = 1
        tableId = tableId.toString()

        if (tableId.includes('indicadoresUltimaTabla')) {
            skipRows = 0
        }

        if (tableId === 'ingresos') {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
    
    
                for (let k = 0; k < cells.length; k++) {
                    if (k===1) {
                        let celdaId = cells[k].children[1].attributes['value'].nodeValue
                            rowData.push(celdaId)

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
        
    
        sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        } else {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
    
    
                for (let k = 0; k < cells.length; k++) {
                    const cellData = cells[k].innerText.trim();
                    rowData.push(cellData);
                }
    
                if (rowData.length > 0) {
                    tableData.push(rowData);
                }
            }
    
            const tableObject = {
            rows: tableData
            };
        
    
        sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        }

        
        
    }
    window.location.reload()
}

function contarFilas4() {
    sessionStorage.setItem('ejecucion', 0)
    const tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id

        let skipRows = 1
        tableId = tableId.toString()

        if (tableId.includes('indicadoresUltimaTabla')) {
            skipRows = 0
        }

        if (tableId === 'ingresos') {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
    
    
                for (let k = 0; k < cells.length; k++) {
                    if (k===1) {
                        let celdaId = cells[k].children[1].attributes['value'].nodeValue
                        console.log(celdaId);
                        rowData.push(celdaId)

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
        
            console.log(tableObject);
    
        sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));

        } else {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
    
    
                for (let k = 0; k < cells.length; k++) {
                    const cellData = cells[k].innerText.trim();
                    rowData.push(cellData);
                }
    
                if (rowData.length > 0) {
                    tableData.push(rowData);
                }
            }
    
            const tableObject = {
            rows: tableData
            };
        
    
        sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        }

        
        
    }
    window.location.reload()
}
window.addEventListener('click', function () {
    let valorRequerido0 = document.getElementById('valorRequerido0')
    let valorRequerido1 = document.getElementById('valorRequerido1')
    let valorRequerido2 = document.getElementById('valorRequerido2')
    let valorRequerido3 = document.getElementById('valorRequerido3')
    let fondosNacionales0 = document.getElementById('fondosNacionales0')
    let fondosNacionales1 = document.getElementById('fondosNacionales1')
    let fondosNacionales2 = document.getElementById('fondosNacionales2')
    let fondosNacionales3 = document.getElementById('fondosNacionales3')
    let municipalComunidad0 = document.getElementById('municipalComunidad0')
    let municipalComunidad1 = document.getElementById('municipalComunidad1')
    let municipalComunidad2 = document.getElementById('municipalComunidad2')
    let municipalComunidad3 = document.getElementById('municipalComunidad3')
    let cooperacionInternacional0 = document.getElementById('cooperacionInternacional0')
    let cooperacionInternacional1 = document.getElementById('cooperacionInternacional1')
    let cooperacionInternacional2 = document.getElementById('cooperacionInternacional2')
    let cooperacionInternacional3 = document.getElementById('cooperacionInternacional3')
    let prestamos0 = document.getElementById('prestamos0')
    let prestamos1 = document.getElementById('prestamos1')
    let prestamos2 = document.getElementById('prestamos2')
    let prestamos3 = document.getElementById('prestamos3')
    let recursosPropios0 = document.getElementById('recursosPropios0')
    let recursosPropios1 = document.getElementById('recursosPropios1')
    let recursosPropios2 = document.getElementById('recursosPropios2')
    let recursosPropios3 = document.getElementById('recursosPropios3')
    let ingresosProyecto0 = document.getElementById('ingresosProyecto0')
    let ingresosProyecto1 = document.getElementById('ingresosProyecto1')
    let ingresosProyecto2 = document.getElementById('ingresosProyecto2')
    let ingresosProyecto3 = document.getElementById('ingresosProyecto3')
    let app0 = document.getElementById('app0')
    let app1 = document.getElementById('app1')
    let app2 = document.getElementById('app2')
    let app3 = document.getElementById('app3')
    let otros0 = document.getElementById('otros0')
    let otros1 = document.getElementById('otros1')
    let otros2 = document.getElementById('otros2')
    let otros3 = document.getElementById('otros3')
    let totalTablaFinanciamiento0 = document.getElementById('totalTablaFinanciamiento0')
    let totalTablaFinanciamiento1 = document.getElementById('totalTablaFinanciamiento1')
    let totalTablaFinanciamiento2 = document.getElementById('totalTablaFinanciamiento2')
    let totalTablaFinanciamiento3 = document.getElementById('totalTablaFinanciamiento3')
    let justificacionPropuesta = document.getElementById('justificacionPropuesta')

    sessionStorage.setItem('valorRequerido0',valorRequerido0.innerHTML)
    sessionStorage.setItem('valorRequerido1',valorRequerido1.innerHTML)
    sessionStorage.setItem('valorRequerido2',valorRequerido2.innerHTML)
    sessionStorage.setItem('valorRequerido3',valorRequerido3.innerHTML)
    sessionStorage.setItem('fondosNacionales0',fondosNacionales0.innerHTML)
    sessionStorage.setItem('fondosNacionales1',fondosNacionales1.innerHTML)
    sessionStorage.setItem('fondosNacionales2',fondosNacionales2.innerHTML)
    sessionStorage.setItem('fondosNacionales3',fondosNacionales3.innerHTML)
    sessionStorage.setItem('municipalComunidad0',municipalComunidad0.innerHTML)
    sessionStorage.setItem('municipalComunidad1',municipalComunidad1.innerHTML)
    sessionStorage.setItem('municipalComunidad2',municipalComunidad2.innerHTML)
    sessionStorage.setItem('municipalComunidad3',municipalComunidad3.innerHTML)
    sessionStorage.setItem('cooperacionInternacional0',cooperacionInternacional0.innerHTML)
    sessionStorage.setItem('cooperacionInternacional1',cooperacionInternacional1.innerHTML)
    sessionStorage.setItem('cooperacionInternacional2',cooperacionInternacional2.innerHTML)
    sessionStorage.setItem('cooperacionInternacional3',cooperacionInternacional3.innerHTML)
    sessionStorage.setItem('prestamos0',prestamos0.innerHTML)
    sessionStorage.setItem('prestamos1',prestamos1.innerHTML)
    sessionStorage.setItem('prestamos2',prestamos2.innerHTML)
    sessionStorage.setItem('prestamos3',prestamos3.innerHTML)
    sessionStorage.setItem('recursosPropios0',recursosPropios0.innerHTML)
    sessionStorage.setItem('recursosPropios1',recursosPropios1.innerHTML)
    sessionStorage.setItem('recursosPropios2',recursosPropios2.innerHTML)
    sessionStorage.setItem('recursosPropios3',recursosPropios3.innerHTML)
    sessionStorage.setItem('ingresosProyecto0',ingresosProyecto0.innerHTML)
    sessionStorage.setItem('ingresosProyecto1',ingresosProyecto1.innerHTML)
    sessionStorage.setItem('ingresosProyecto2',ingresosProyecto2.innerHTML)
    sessionStorage.setItem('ingresosProyecto3',ingresosProyecto3.innerHTML)
    sessionStorage.setItem('app0',app0.innerHTML)
    sessionStorage.setItem('app1',app1.innerHTML)
    sessionStorage.setItem('app2',app2.innerHTML)
    sessionStorage.setItem('app3',app3.innerHTML)
    sessionStorage.setItem('otros0',otros0.innerHTML)
    sessionStorage.setItem('otros1',otros1.innerHTML)
    sessionStorage.setItem('otros2',otros2.innerHTML)
    sessionStorage.setItem('otros3',otros3.innerHTML)
    sessionStorage.setItem('totalTablaFinanciamiento0',totalTablaFinanciamiento0.innerHTML)
    sessionStorage.setItem('totalTablaFinanciamiento1',totalTablaFinanciamiento1.innerHTML)
    sessionStorage.setItem('totalTablaFinanciamiento2',totalTablaFinanciamiento2.innerHTML)
    sessionStorage.setItem('totalTablaFinanciamiento3',totalTablaFinanciamiento3.innerHTML)
    sessionStorage.setItem('justificacionPropuesta',justificacionPropuesta.innerHTML)
})


botonGrabar.addEventListener('click',  contarFilas)
window.addEventListener('click', agregarFila)
window.addEventListener('click', eliminarFila)
































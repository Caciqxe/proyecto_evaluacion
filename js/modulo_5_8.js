const botonGrabar = document.getElementById('botonGrabar')
const numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))
let seleccionAlternativa = JSON.parse(sessionStorage.getItem('tablaSeleccionAlternativa'))
let contenedorAlternativa = document.getElementById('alternativaSeleccionada')

let x = 0



if (seleccionAlternativa != null) {

    function buscadorAlt() {
        for (let i = 0; i < numAlternativas; i++) {
            let buscar = JSON.parse(sessionStorage.getItem(`Alt_numero_${i+1}`))
            if (buscar.name === seleccionAlternativa.rows[0][0]) {
                return (`${i+1}`)
            }
        }
    }

    let numAlternativaGanadora = buscadorAlt()

    

    sessionStorage.setItem('alternativaGanadora', numAlternativaGanadora)
    
    let newP = document.createElement('p')
    newP.setAttribute('class','paso')
    let newContent = document.createElement('span') 
    newContent.innerText = 'PASO 5.6  SELECCIÓN DE LA ALTERNATIVA'

    newP.appendChild(newContent)
    contenedorAlternativa.insertAdjacentElement('beforebegin',newP)

    let nombreGanador = JSON.parse(sessionStorage.getItem(`Alt_numero_${numAlternativaGanadora}`)).name
    let descripcionGanadora = JSON.parse(sessionStorage.getItem(`descripcionAlt_${numAlternativaGanadora}`))
    
    let justificacionExiste = sessionStorage.getItem('justificacionAlternativaSeleccionada')
    console.log(justificacionExiste);
    if (justificacionExiste != null) {
        contenedorAlternativa.innerHTML +=
        `
        <table id="tablaAlternativaSeleccionada">
            <tbody>
                <tr>
                    <th>NOMBRE DE LA ALTERNATIVA SELECCIONADA</th>
                    <th>DESCRIPCIÓN</th>
                </tr>
                <tr id="respuestaAlternativa">
                    <td><span class="respuestaTabla">${nombreGanador}</span></td>
                    <td><span class="respuestaTabla">${descripcionGanadora.rows[0][2]}</span></td>
                </tr>
                <tr>
                    <td colspan="2" class="bajada">JUSTIFICACIÓN</td>
                </tr>
                <tr>
                    <td colspan="2"><span class="respuestaTabla" contenteditable="true" id="justificacionAlternativaSeleccionada">${justificacionExiste}</span></td>
                </tr>
            </tbody>
        </table>
        `
        let justificacionAlternativaSeleccionada = document.getElementById('justificacionAlternativaSeleccionada')
    } else {
        contenedorAlternativa.innerHTML +=
        `
        <table id="tablaAlternativaSeleccionada">
            <tbody>
                <tr>
                    <th>NOMBRE DE LA ALTERNATIVA SELECCIONADA</th>
                    <th>DESCRIPCIÓN</th>
                </tr>
                <tr id="respuestaAlternativa">
                    <td><span class="respuestaTabla">${nombreGanador}</span></td>
                    <td><span class="respuestaTabla">${descripcionGanadora.rows[0][2]}</span></td>
                </tr>
                <tr>
                    <td colspan="2" class="bajada">JUSTIFICACIÓN</td>
                </tr>
                <tr>
                    <td colspan="2"><span class="respuestaTabla" contenteditable="true" id="justificacionAlternativaSeleccionada"></span></td>
                </tr>
            </tbody>
        </table>
        `
        const justificacionAlternativaSeleccionada = document.getElementById('justificacionAlternativaSeleccionada')
    }
}




while (x<numAlternativas){

    if (seleccionAlternativa != null) {
    let alternativa = JSON.parse(sessionStorage.getItem(`Alt_numero_${x+1}`))
    let tbody = document.getElementById('bodySeleccionAlternativa')
    let indicadoresPrivados = JSON.parse(sessionStorage.getItem(`indicadoresPrivadosAlt${x+1}`))
    let indicadoresSociales = JSON.parse(sessionStorage.getItem(`indicadoresSocialesAlt${x+1}`))
    let tablaIndicadoresCostoBeneficioSocial = JSON.parse(sessionStorage.getItem(`tablaIndicadoresCostoBeneficioSocialAlt${x+1}`))
    
    let cal1 = parseFloat(seleccionAlternativa.rows[x][6])
    let cal2 = parseFloat(seleccionAlternativa.rows[x][7])
    let cal3 = parseFloat(seleccionAlternativa.rows[x][8])
    let cal4 = parseFloat(seleccionAlternativa.rows[x][9])
    let cal5 = parseFloat(seleccionAlternativa.rows[x][10])

    let calPromedio = parseFloat((cal1 + cal2 + cal3 + cal4 + cal5)/5).toFixed(2)
    


    
    tbody.innerHTML +=
    `
    <tr>
        <td><input class="input5-8" id="nombreAlt${x+1}" readonly="true" value="${seleccionAlternativa.rows[x][0]}"></td>
        <td><input style="text-align:right" class="input5-8" id="promedioAnualAlt${x+1}" readonly="true" value="${seleccionAlternativa.rows[x][1]}"></td>
        <td><input style="text-align:right" class="input5-8" id="costoAnualEAlt${x+1}" readonly="true" value="${parseFloat(seleccionAlternativa.rows[x][2]).toFixed(2)}"></td>
        <td><input style="text-align:right" class="input5-8" id="indicadorAceAlt${x+1}" readonly="true" value="${seleccionAlternativa.rows[x][3]}"></td>
        <td><input style="text-align:right" class="input5-8" id="indicadorAcbAlt${x+1}" readonly="true" value="${seleccionAlternativa.rows[x][4]}"></td>
        <td><input style="text-align:right" class="input5-8" id="indicadorRazonAlt" readonly="true" value="${seleccionAlternativa.rows[x][5]}"></td>
        <td><input style="text-align:right" class="input5-8" id="comunidadAlt${x+1}"value="${cal1}"></td>
        <td><input style="text-align:right" class="input5-8" id="calidadAlt${x+1}"value="${cal2}"></td>
        <td><input style="text-align:right" class="input5-8" id="empleoAlt${x+1}"value="${cal3}"></td>
        <td><input style="text-align:right" class="input5-8" id="sostenibilidadAlt${x+1}"value="${cal4}"></td>
        <td><input style="text-align:right" class="input5-8" id="continuidadAlt${x+1}"value="${cal5}"></td>
        <td><input style="text-align:right" class="input5-8" readonly=" true" id="calificacionAlt${x+1}"value="${calPromedio}"></td>
        <td><input class="input5-8" id="observacion1Alt${x+1}"value="${seleccionAlternativa.rows[x][12]}"></td>
        <td><input class="input5-8" id="observacion2Alt${x+1}"value="${seleccionAlternativa.rows[x][13]}"></td>
        <td><input style="text-align:center" class="input5-8" id="prioridadAlt${x+1}"value="${x+1}"></td>
    </tr>
    `

    let nombreAlternativaGanadora = seleccionAlternativa.rows[0][0]

    


    } else {
        let alternativa = JSON.parse(sessionStorage.getItem(`Alt_numero_${x+1}`))
        let tbody = document.getElementById('bodySeleccionAlternativa')
        let indicadoresPrivados = JSON.parse(sessionStorage.getItem(`indicadoresPrivadosAlt${x+1}`))
        let indicadoresSociales = JSON.parse(sessionStorage.getItem(`indicadoresSocialesAlt${x+1}`))
        let tablaIndicadoresCostoBeneficioSocial = JSON.parse(sessionStorage.getItem(`tablaIndicadoresCostoBeneficioSocialAlt${x+1}`))
        tbody.innerHTML +=
        `
        <tr>
            <td><input class="input5-8" id="nombreAlt${x+1}" readonly="true" value="${alternativa.name}"></td>
            <td><input style="text-align:right" class="input5-8" id="promedioAnualAlt${x+1}" readonly="true" value="${indicadoresPrivados.rows[2][1]}"></td>
            <td><input style="text-align:right" class="input5-8" id="costoAnualEAlt${x+1}" readonly="true" value="${parseFloat(indicadoresSociales.rows[1][1]).toFixed(2)}"></td>
            <td><input style="text-align:right" class="input5-8" id="indicadorAceAlt${x+1}" readonly="true" value="${indicadoresSociales.rows[3][1]}"></td>
            <td><input style="text-align:right" class="input5-8" id="indicadorAcbAlt${x+1}" readonly="true" value="${indicadoresSociales.rows[1][1]>0?"NO APLICA":tablaIndicadoresCostoBeneficioSocial.rows[0][1]}"></td>
            <td><input style="text-align:right" class="input5-8" id="indicadorRazonAlt" readonly="true" value="${indicadoresSociales.rows[1][1]>0?"NO APLICA":tablaIndicadoresCostoBeneficioSocial.rows[3][1]}"></td>
            <td><input style="text-align:right" class="input5-8" id="comunidadAlt${x+1}"value="0"></td>
            <td><input style="text-align:right" class="input5-8" id="calidadAlt${x+1}"value="0"></td>
            <td><input style="text-align:right" class="input5-8" id="empleoAlt${x+1}"value="0"></td>
            <td><input style="text-align:right" class="input5-8" id="sostenibilidadAlt${x+1}"value="0"></td>
            <td><input style="text-align:right" class="input5-8" id="continuidadAlt${x+1}"value="0"></td>
            <td><input style="text-align:right" class="input5-8" readonly="true" id="calificacionAlt${x+1}"value="0"></td>
            <td><input class="input5-8" id="observacion1Alt${x+1}"value=""></td>
            <td><input class="input5-8" id="observacion2Alt${x+1}"value=""></td>
            <td><input style="text-align:center" class="input5-8" id="prioridadAlt${x+1}"value="0"></td>
        </tr>
        `
    }


    x++
}

function contarFilas() {
        
        const tables = document.getElementsByTagName('table')
        
        let justificacionAlternativaSeleccionada = document.getElementById('justificacionAlternativaSeleccionada')
        let respuestaAlternativaSeleccionada = justificacionAlternativaSeleccionada.innerHTML

        if (justificacionAlternativaSeleccionada =! null) {

            sessionStorage.setItem('justificacionAlternativaSeleccionada', respuestaAlternativaSeleccionada);
        } else {

        }
        

        for (let i = 0; i < tables.length; i++) {
            const table = tables[i];
            const rows = table.rows;
            const tableData = [];
    
            let tableId = table.id
    
            let skipRows = 1
            tableId = tableId.toString()
            
            if (tableId.includes('tablaSeleccionAlternativa')) {
                for (let j = skipRows; j < rows.length; j++) {
                    const rowData = [];
                    const cells = rows[j].cells;
                
                    for (let k = 0; k < cells.length; k++) {
        
                        const celdaId = cells[k].childNodes[0].id
                        let input = document.getElementById(celdaId)
                        const cellData = input.value
                        rowData.push(cellData);
                    }
                    if (rowData.length > 0) {
                        tableData.push(rowData);
                    }

                    let total = parseFloat(rowData[6]) + parseFloat(rowData[7]) + parseFloat(rowData[8]) + parseFloat(rowData[9]) + parseFloat(rowData[10])
                    rowData[11] = parseFloat((total)/5)
                }
                const tableObject = {
                    rows: tableData
                    };
                
                    tableObject.rows.sort(function(a, b) {
                    return b[11] - a[11];
                    });
                
                


                sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));

                window.location.reload()

            } else {
                
            }
        
    }
}

botonGrabar.addEventListener('click', contarFilas)
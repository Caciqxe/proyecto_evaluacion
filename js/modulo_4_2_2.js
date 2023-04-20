const botonGrabar = document.getElementById('grabar')

let bodyGestion = document.getElementById('bodyGestion')
let evaluacionEmplazamiento = document.getElementById('evaluacionEmplazamiento')
let tablaGestion = JSON.parse(sessionStorage.getItem('tablaGestion'))
let tablaEvaluacionEmplazamiento = JSON.parse(sessionStorage.getItem('evaluacionEmplazamiento'))
let bodyAnexo = document.getElementById('bodyAnexo')
let tablaBodyAnexo = JSON.parse(sessionStorage.getItem('bodyAnexo'))


console.log(tablaGestion);

let arrayAmenazas = [
    {naturales:[
        "---",
        "Terremotos",
        "Maremotos",
        "Erupciones Volcánicas",
        "Huracanes",
        "Tormentas Tropicales"
            ]},
    {socioNaturales:[
        "---",
        "Deslizamientos",
        "Inundaciones (pluviales, desbordo de ríos especificar)",
        "Sequía",
        "Plagas"
            ]},
    {antropicas:[
        "---",
        "Incendios",
        "Contaminación",
        "Deforestación",
        "Violencia"
    ]}
]

if (tablaGestion === null) {
    
bodyGestion.innerHTML+=
`
<tr>
    <td colspan="1" class="bajada"><b>NATURALES</b></td>
    <td colspan="2"></td>
</tr>
`
arrayAmenazas[0].naturales.forEach(el => {

    let stringEl = el.toString()
    stringEl = (stringEl.slice(0,3) + stringEl.slice(-3)).toLowerCase()

    console.log(stringEl);

    
    bodyGestion.innerHTML+=
    
    `
    <tr>
        <td class="bajada"><span>${el}</span></td>
        <td><input type="checkbox" id="${stringEl}_si"></td>
        <td><input type="checkbox" id="${stringEl}_no"></td>
    </tr>
    `
});

bodyGestion.innerHTML+=
`
<tr>
    <td colspan="1" class="bajada"><b>SOCIO NATURALES</b></td>
    <td colspan="2"></td>
</tr>
`
arrayAmenazas[1].socioNaturales.forEach(el => {
    
    let stringEl = el.toString()
    stringEl = (stringEl.slice(0,3) + stringEl.slice(-3)).toLowerCase()
    if (stringEl.includes(')')) {
        stringEl = stringEl.replace(')','')
    }
    console.log(stringEl);

    bodyGestion.innerHTML+=
    
    `
    <tr>
        <td class="bajada"><span>${el}</span></td>
        <td><input type="checkbox" id="${stringEl}_si"></td>
        <td><input type="checkbox" id="${stringEl}_no"></td>
    </tr>
    
    `
});


bodyGestion.innerHTML+=
`
<tr>
    <td colspan="1" class="bajada"><b>ANTRÓPICAS</b></td>
    <td colspan="2"></td>
</tr>
`
arrayAmenazas[2].antropicas.forEach(el => {
    
    let stringEl = el.toString()
    stringEl = (stringEl.slice(0,3) + stringEl.slice(-3)).toLowerCase()
    console.log(stringEl);

    bodyGestion.innerHTML+=
    `
    <tr>
        <td class="bajada"><span>${el}</span></td>
        <td><input type="checkbox" id="${stringEl}_si"></td>
        <td><input type="checkbox" id="${stringEl}_no"></td>
    </tr>
    `
});


evaluacionEmplazamiento.innerHTML +=
`
<tbody>
    <tr>
        <th colspan="2">Evaluación de Emplazamiento e Infraestructura</th>
    </tr>
    <tr>
        <td class="bajada">Número de sitios con amenazas de riesgos</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true"></span></td>
    </tr>
    <tr>
        <td class="bajada">Histograma de Evaluación del Sitio</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true"></span></td>
    </tr>
    <tr>
        <td class="bajada">Coordenadas UTM de sitios de amenazas de riesgos</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true"></span></td>
    </tr>
    <tr>
        <td class="bajada">Valor del Componente Geomorfología y Cuenca</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true"></span></td>
    </tr>
    <tr>
        <td class="bajada">Evaluación de Vulnerabilidad de La Obra</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true"></span></td>
    </tr>
    <tr>
        <td class="bajada">Valor del Componente Vulnerabilidad Física</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true"></span></td>
    </tr>
    <tr>
        <td class="bajada">Valor del Componente Amenazas Socio Naturales</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true"></span></td>
    </tr>
    <tr>
        <td class="bajada">Valor del Componente Vulnerabilidad Social e Institucional</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true"></span></td>
    </tr>
    <tr>
        <td class="bajada">Balance de Riesgo Promedio</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true"></span></td>
    </tr>
    <tr>
        <td class="bajada">Descripción del Riesgo Promedio</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true"></span></td>
    </tr>
    <tr>
        <td class="bajada">Valoración del riesgo </td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true"></span></td>
    </tr>
</tbody>
`


bodyAnexo.innerHTML +=
`
<tbody id="bodybodyAnexo">
    <tr>
        <th colspan="2" class="bajada">Anexar Histogramas, conforme al Número de sitios con amenazas de riesgos</th>
    </tr>
    <tr>
        <td class="bajada" style="width: 250px;"><span>ANEXO 1</span></td>
        <td><span class="textInput" contenteditable="true"></span></td>
    </tr>
    </tbody>
`

} else {

bodyGestion.innerHTML+=
`
<tr>
    <td colspan="1" class="bajada"><b>NATURALES</b></td>
    <td colspan="2"></td>
</tr>
`

arrayAmenazas[0].naturales.forEach(el => {
    let stringEl = el.toString()
    stringEl = (stringEl.slice(0,3) + stringEl.slice(-3)).toLowerCase()
    console.log(stringEl);

    bodyGestion.innerHTML+=
    
    `
    <tr>
        <td class="bajada"><span>${el}</span></td>
        <td><input type="checkbox" id="${stringEl}_si"></td>
        <td><input type="checkbox" id="${stringEl}_no"></td>
    </tr>
    
    `
});

bodyGestion.innerHTML+=
`
<tr>
    <td colspan="1" class="bajada"><b>SOCIO NATURALES</b></td>
    <td colspan="2"></td>
</tr>
`
arrayAmenazas[1].socioNaturales.forEach(el => {
    
    let stringEl = el.toString()
    stringEl = (stringEl.slice(0,3) + stringEl.slice(-3)).toLowerCase()
    if (stringEl.includes(')')) {
        stringEl = stringEl.replace(')','')
    }
    console.log(stringEl);

    bodyGestion.innerHTML+=
    
    `
    <tr>
        <td class="bajada"><span>${el}</span></td>
        <td><input type="checkbox" id="${stringEl}_si"></td>
        <td><input type="checkbox" id="${stringEl}_no"></td>
    </tr>
    
    `
});


bodyGestion.innerHTML+=
`
<tr>
    <td colspan="1" class="bajada"><b>ANTRÓPICAS</b></td>
    <td colspan="2"></td>
</tr>
`
arrayAmenazas[2].antropicas.forEach(el => {
    
    let stringEl = el.toString()
    stringEl = (stringEl.slice(0,3) + stringEl.slice(-3)).toLowerCase()
    console.log(stringEl);

    bodyGestion.innerHTML+=
    `
    <tr>
        <td class="bajada"><span>${el}</span></td>
        <td><input type="checkbox" id="${stringEl}_si"></td>
        <td><input type="checkbox" id="${stringEl}_no"></td>
    </tr>
    `
});


evaluacionEmplazamiento.innerHTML +=
`
<tbody>
    <tr>
        <th colspan="2">Evaluación de Emplazamiento e Infraestructura</th>
    </tr>
    <tr>
        <td class="bajada">Número de sitios con amenazas de riesgos</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true">${tablaEvaluacionEmplazamiento.rows[0][1]}</span></td>
    </tr>
    <tr>
        <td class="bajada">Histograma de Evaluación del Sitio</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true">${tablaEvaluacionEmplazamiento.rows[1][1]}</span></td>
    </tr>
    <tr>
        <td class="bajada">Coordenadas UTM de sitios de amenazas de riesgos</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true">${tablaEvaluacionEmplazamiento.rows[2][1]}</span></td>
    </tr>
    <tr>
        <td class="bajada">Valor del Componente Geomorfología y Cuenca</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true">${tablaEvaluacionEmplazamiento.rows[3][1]}</span></td>
    </tr>
    <tr>
        <td class="bajada">Evaluación de Vulnerabilidad de La Obra</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true">${tablaEvaluacionEmplazamiento.rows[4][1]}</span></td>
    </tr>
    <tr>
        <td class="bajada">Valor del Componente Vulnerabilidad Física</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true">${tablaEvaluacionEmplazamiento.rows[5][1]}</span></td>
    </tr>
    <tr>
        <td class="bajada">Valor del Componente Amenazas Socio Naturales</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true">${tablaEvaluacionEmplazamiento.rows[6][1]}</span></td>
    </tr>
    <tr>
        <td class="bajada">Valor del Componente Vulnerabilidad Social e Institucional</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true">${tablaEvaluacionEmplazamiento.rows[7][1]}</span></td>
    </tr>
    <tr>
        <td class="bajada">Balance de Riesgo Promedio</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true">${tablaEvaluacionEmplazamiento.rows[8][1]}</span></td>
    </tr>
    <tr>
        <td class="bajada">Descripción del Riesgo Promedio</td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true">${tablaEvaluacionEmplazamiento.rows[9][1]}</span></td>
    </tr>
    <tr>
        <td class="bajada">Valoración del riesgo </td>
        <td style="width:800px;"><span class="respuestaTabla" contenteditable="true">${tablaEvaluacionEmplazamiento.rows[10][1]}</span></td>
    </tr>
</tbody>
`

bodyAnexo.innerHTML +=
`
<tbody id="bodybodyAnexo">
    <tr>
        <th colspan="2" class="bajada">Anexar Histogramas, conforme al Número de sitios con amenazas de riesgos</th>
    </tr>
    <tr>
        <td class="bajada" style="width: 250px;"><span>ANEXO 1</span></td>
        <td><span class="textInput" contenteditable="true">${tablaBodyAnexo.rows[0][1]}</span></td>
    </tr>
    </tbody>
`

let bodybody = document.getElementById('bodybodyAnexo')
let x = 2


while (x <= tablaBodyAnexo.rows.length) {
    bodybody.innerHTML +=
    `
    <tr>
        <td class="bajada" style="width: 250px;"><span>ANEXO ${x}</span></td>
        <td><span class="textInput" contenteditable="true">${tablaBodyAnexo.rows[x-1][1]}</span></td>
    </tr>
    `

    x++
}



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
    var cell2 = row.insertCell(-1)


    cell1.innerHTML = `<td class="bajada"><span>ANEXO ${rowCount}</span></td>`
    cell2.innerHTML = `<td><span id="span${rowCount}" class="textInput" contenteditable="true"></span></td>`
    cell1.setAttribute('class', 'bajada')
    let id = document.getElementById(`span${rowCount}`)
    
    id.setAttribute('contenteditable', 'true')
    }
  }

  const eliminarFila = (event) =>{
    if (event.target.classList.contains('eliminar')) {
        
    
        let table = event.srcElement.id.toString()
        table = table.replace('e_bttn_','body')
        table = document.getElementById(`${table}`)
        var rowCount = table.rows.length;

        if (rowCount >= 3) {
    
            
            table.deleteRow(-1);
        }
    }
}

function cabiarEleccion(e) {
    let eId = (e.srcElement.id).toString()

    if (eId.slice(-3) === "_no") {
        let eId_remplazar = eId.replace('_no','_si')
        let cambiar = document.getElementById(eId_remplazar)
        cambiar.checked = false
    }

    if (eId.slice(-3) === "_si") {
        let eId_remplazar = eId.replace('_si','_no')
        let cambiar = document.getElementById(eId_remplazar)
        cambiar.checked = false
    }
}



function contarFilas() {
  
    const tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
      const table = tables[i];
      const rows = table.rows;
      const tableData = []
  
      let tableId = table.id
  
      let skipRows = 1
      tableId = tableId.toString()

    if (tableId.includes('tablaGestion')) {
        for (let j = skipRows; j < rows.length; j++) {
            const rowData = [];
            const cells = rows[j].cells;
            
            for (let k = 0; k < cells.length; k++) {
              const cellData = cells[k].childNodes[0]

              if (cellData===undefined) {
                rowData.push('skip')
              } else {
                rowData.push(cellData.checked)
              }
            }
            if (rowData.length > 0) {
              tableData.push(rowData);
            }
          }
          const tableObject = {
            rows: tableData
          }
        sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject))
    } else {
        for (let j = skipRows; j < rows.length; j++) {
            const rowData = [];
            const cells = rows[j].cells;
            
            for (let k = 0; k < cells.length; k++) {
              const cellData = cells[k].innerText.trim();
              rowData.push(cellData)
            }
            if (rowData.length > 0) {
              tableData.push(rowData);
            }
          }
          const tableObject = {
            rows: tableData
          }
        sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject))
    }
    }
  
}

window.addEventListener('click', agregarFila)
window.addEventListener('click', eliminarFila)
window.addEventListener('click', cabiarEleccion)
window.addEventListener('DOMContentLoaded', function () {

    if (tablaGestion != null) {
        let tertos_si = document.getElementById('tertos_si')
        let tertos_no = document.getElementById('tertos_no')
        tertos_si.checked = tablaGestion.rows[1][1]
        tertos_no.checked = tablaGestion.rows[1][2]
        let martos_si = document.getElementById('martos_si')
        let martos_no = document.getElementById('martos_no')
        martos_si.checked = tablaGestion.rows[2][1]
        martos_no.checked = tablaGestion.rows[2][2]
        let erucas_si = document.getElementById('erucas_si')
        let erucas_no = document.getElementById('erucas_no')
        erucas_si.checked = tablaGestion.rows[3][1]
        erucas_no.checked = tablaGestion.rows[3][2]
        let hurnes_si = document.getElementById('hurnes_si')
        let hurnes_no = document.getElementById('hurnes_no')
        hurnes_si.checked = tablaGestion.rows[4][1]
        hurnes_no.checked = tablaGestion.rows[4][2]
        let torles_si = document.getElementById('torles_si')
        let torles_no = document.getElementById('torles_no')
        torles_si.checked = tablaGestion.rows[5][1]
        torles_no.checked = tablaGestion.rows[5][2]
        let destos_si = document.getElementById('destos_si')
        let destos_no = document.getElementById('destos_no')
        destos_si.checked = tablaGestion.rows[7][1]
        destos_no.checked = tablaGestion.rows[7][2]
        let inuar_si = document.getElementById('inuar_si')
        let inuar_no = document.getElementById('inuar_no')
        inuar_si.checked = tablaGestion.rows[8][1]
        inuar_no.checked = tablaGestion.rows[8][2]
        let sequía_si = document.getElementById('sequía_si')
        let sequía_no = document.getElementById('sequía_no')
        sequía_si.checked = tablaGestion.rows[9][1]
        sequía_no.checked = tablaGestion.rows[9][2]
        let plagas_si = document.getElementById('plagas_si')
        let plagas_no = document.getElementById('plagas_no')
        plagas_si.checked = tablaGestion.rows[10][1]
        plagas_no.checked = tablaGestion.rows[10][2]
        let incios_si = document.getElementById('incios_si')
        let incios_no = document.getElementById('incios_no')
        incios_si.checked = tablaGestion.rows[12][1]
        incios_no.checked = tablaGestion.rows[12][2]
        let conión_si = document.getElementById('conión_si')
        let conión_no = document.getElementById('conión_no')
        conión_si.checked = tablaGestion.rows[13][1]
        conión_no.checked = tablaGestion.rows[13][2]
        let defión_si = document.getElementById('defión_si')
        let defión_no = document.getElementById('defión_no')
        defión_si.checked = tablaGestion.rows[14][1]
        defión_no.checked = tablaGestion.rows[14][2]
        let viocia_si = document.getElementById('viocia_si')
        let viocia_no = document.getElementById('viocia_no')
        viocia_si.checked = tablaGestion.rows[15][1]
        viocia_no.checked = tablaGestion.rows[15][2]
    }
})
botonGrabar.addEventListener('click', contarFilas)
/* window.addEventListener('click', function (e) {
    console.log(e.srcElement.value);

})
 */
const botonGrabar = document.getElementById('grabar')
let riesgoDesastre = document.getElementById('riesgoDesastre')
let mantenimientoSistema = document.getElementById('mantenimientoSistema')
const ejecucion = sessionStorage.getItem('ejecucion')

let numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))
let x = 0

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

while (x<numAlternativas) {
    let infoSession6A = JSON.parse(sessionStorage.getItem(`tablaPaso6_alt${x+1}_A`))
    let infoSession6B = JSON.parse(sessionStorage.getItem(`tablaPaso6_alt${x+1}_A`))
    let infoSession7A = JSON.parse(sessionStorage.getItem(`tablaPaso7_alt${x+1}_A`))
    let infoSession7B = JSON.parse(sessionStorage.getItem(`tablaPaso7_alt${x+1}_A`))

    if (infoSession6A === null) {

        let nombreAlternativa = JSON.parse(sessionStorage.getItem(`Alt_numero_${x+1}`)).name
        riesgoDesastre.innerHTML +=
        `
        <p class="paso">
        <span style="width:35cm">ALTERNATIVA DE PROYECTO N°${x+1}:${nombreAlternativa} </span>
        </p>
        <div id="modulo4Paso6_alt${x+1}">
            <div>
                <table id="tablaPaso6_alt${x+1}_A">
                    <tbody id="bodyPaso6_alt${x+1}_A">
                        <tr>
                            <th style="width:10cm" rowspan="2">Elementos</th>
                            <th rowspan="2">Unidad</th>
                            <th rowspan="2">Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Valor Total</th>
                            <th style="width:10cm" rowspan="2">Riesgos Asociados</th>
                        </tr>
                        <tr>
                            <th>Lps</th>
                            <th>Lps</th>
                        </tr>
                        <tr>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                            <td class="celdaUnidades">
                                <span style="display: none;"></span>
                                <select id="unidadMedidaConcepto1" class="dropdownUnidades"></select>
                            </td>
                            <td><span style="text-align:right" class= "textInput" contenteditable="true"></span></td>
                            <td><span style="text-align:right" class= "textInput" contenteditable="true">0</span></td>
                            <td><span style="text-align:right" class= "textInput" contenteditable="false">0</span></td>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                        <tr>
                    </tbody>
                </table>
                <span><button id="a_bttn_Paso6_alt${x+1}_A" class="agregar">Agregar Elemento</button></span>
                <span><button id="e_bttn_Paso6_alt${x+1}_A" class="eliminar">Eliminar Elemento</button></span>
                <table>
                    <tbody>
                        <tr>
                            <td class="bajada">TOTAL VALOR ACTUAL O INVERSIÓN DEL PROYECTO<span></span></td>
                            <td style="text-align:right"><span id="totalPaso6_alt${x+1}_A" class="textInput" contenteditable="false">0</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        `
    
        mantenimientoSistema.innerHTML +=
        `
        <div id="modulo4Paso7_alt${x+1}">
            <div>
                <table id="tablaPaso7_alt${x+1}_A">
                    <tbody id="bodyPaso7_alt${x+1}_A">
                        <tr>
                            <th>Pasos del Sistema</th>
                            <th>Quién realiza los pasos</th>
                            <th>Duración de los pasos</th>
                            <th>Riesgos asociados</th>
                        </tr>
                        <tr>
                            <td><span class="textInput" contenteditable="true"></span></td>
                            <td><span class="textInput" contenteditable="true"></span></td>
                            <td><span class="textInput" contenteditable="true"></span></td>
                            <td><span class="textInput" contenteditable="true"></span></td>
                        </tr>
                    </tbody>
                </table>
                <span><button id="a_bttn_Paso7_alt${x+1}_A" class="agregar">Agregar Elemento</button></span>
                <span><button id="e_bttn_Paso7_alt${x+1}_A" class="eliminar">Eliminar Elemento</button></span>
            </div>
        </div>
        `
    } else {
        
        let nombreAlternativa = JSON.parse(sessionStorage.getItem(`Alt_numero_${x+1}`)).name
        

        riesgoDesastre.innerHTML +=
        `
        <p class="paso">
        <span style="width:35cm">ALTERNATIVA DE PROYECTO N°${x+1}:${nombreAlternativa} </span>
        </p>
        <div id="modulo4Paso6_alt${x+1}">
            <div>
                <table id="tablaPaso6_alt${x+1}_A">
                    <tbody id="bodyPaso6_alt${x+1}_A">
                        <tr>
                            <th style="width:10cm" rowspan="2">Elementos</th>
                            <th rowspan="2">Unidad</th>
                            <th rowspan="2">Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Valor Total</th>
                            <th style="width:10cm" rowspan="2">Riesgos Asociados</th>
                        </tr>
                        <tr>
                            <th>Lps</th>
                            <th>Lps</th>
                        </tr>
                    </tbody>
                </table>
                <span><button id="a_bttn_Paso6_alt${x+1}_A" class="agregar">Agregar Elemento</button></span>
                <span><button id="e_bttn_Paso6_alt${x+1}_A" class="eliminar">Eliminar Elemento</button></span>
                <table>
                    <tbody>
                        <tr>
                            <td class="bajada">TOTAL VALOR ACTUAL O INVERSIÓN DEL PROYECTO<span></span></td>
                            <td><span id="totalPaso6_alt${x+1}_A" style="text-align:right" class="textInput" contenteditable="false">0</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>            
        </div>

        `

        let bodyPaso6_A = document.getElementById(`bodyPaso6_alt${x+1}_A`)
        let y_a = 0
        let y_b = 0 
        
        let sum_total_a = 0
        let sum_total_b = 0 
        while (y_a<infoSession6A.rows.length) {

            bodyPaso6_A.innerHTML += 
            `
            <tr>
                <td><span class= "textInput" contenteditable="true">${infoSession6A.rows[y_a][0]}</span></td>
                <td class="celdaUnidades">
                    <span style="display: none;"></span>
                    <select id="unidadMedidaConcepto1" class="dropdownUnidades" value="${infoSession6A.rows[y_a][1]}"></select>
                </td>
                <td><span style="text-align:right" class= "textInput" contenteditable="true">${infoSession6A.rows[y_a][2]}</span></td>
                <td><span style="text-align:right" class= "textInput" contenteditable="true">${infoSession6A.rows[y_a][3]}</span></td>
                <td><span style="text-align:right" class= "textInput" contenteditable="false">${infoSession6A.rows[y_a][3]*infoSession6A.rows[y_a][2]}</span></td>
                <td><span class= "textInput" contenteditable="true">${infoSession6A.rows[y_a][5]}</span></td>
            </tr>
            `
            sum_total_a = parseInt(sum_total_a) + parseInt(infoSession6A.rows[y_a][3]*infoSession6A.rows[y_a][2])
            y_a++
        }

        
        let totalPaso6_A = document.getElementById(`totalPaso6_alt${x+1}_A`)
        
        totalPaso6_A.innerHTML = sum_total_a

        sessionStorage.setItem(`totalTablaPaso6_alt${x+1}_A`,sum_total_a)
        sessionStorage.setItem(`totalTablaPaso6_alt${x+1}_A`,sum_total_b)

        mantenimientoSistema.innerHTML +=
        `
        <div id="modulo4Paso7_alt${x+1}">
        <p class="paso">
        <span style="width:35cm">ALTERNATIVA DE PROYECTO N°${x+1}:${nombreAlternativa} </span>
        </p>
            <div>
                <table id="tablaPaso7_alt${x+1}_A">
                    <tbody id="bodyPaso7_alt${x+1}_A">
                        <tr>
                            <th>Pasos del Sistema</th>
                            <th>Quién realiza los pasos</th>
                            <th>Duración de los pasos</th>
                            <th>Riesgos asociados</th>
                        </tr>
                    </tbody>
                </table>
                <span><button id="a_bttn_Paso7_alt${x+1}_A" class="agregar">Agregar Elemento</button></span>
                <span><button id="e_bttn_Paso7_alt${x+1}_A" class="eliminar">Eliminar Elemento</button></span>
            </div>
        </div>
        `

        let bodyPaso7_A = document.getElementById(`bodyPaso7_alt${x+1}_A`)
        let bodyPaso7_B = document.getElementById(`bodyPaso7_alt${x+1}_B`)
        y_a = 0
        y_b = 0

        while (y_a<infoSession7A.rows.length) {
            
            bodyPaso7_A.innerHTML += 
            `
            <tr>
                <td><span class= "textInput" contenteditable="true">${infoSession7A.rows[y_a][0]}</span></td>
                <td><span class= "textInput" contenteditable="true">${infoSession7A.rows[y_a][1]}</span></td>
                <td><span class= "textInput" contenteditable="true">${infoSession7A.rows[y_a][2]}</span></td>
                <td><span class= "textInput" contenteditable="true">${infoSession7A.rows[y_a][3]}</span></td>
            </tr>
            `
            y_a++
        }

    }

    x++
}

const agregarFila = (event) => {
    if (event.target.classList.contains('agregar'))
    {

    let table_id = event.srcElement.id.toString()
    let table = event.srcElement.id.toString()
    let id_loc = table.replace('a_bttn_','body')
    table = document.getElementById(`${id_loc}`)
    var rowCount = table.rows.length;


    if (table_id.includes('Paso7')) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);
        var cell4 = row.insertCell(-1);

        cell1.innerHTML = `<td><span class= "textInput" contenteditable="true"></span></td>`
        cell2.innerHTML = `<td><span class= "textInput" contenteditable="true"></span></td>`
        cell3.innerHTML = `<td><span class= "textInput" contenteditable="true"></span></td>`
        cell4.innerHTML = `<td><span class= "textInput" contenteditable="true"></span></td>`
    } else {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);
        var cell4 = row.insertCell(-1);
        var cell5 = row.insertCell(-1);
        var cell6 = row.insertCell(-1);

        cell1.innerHTML = `<td><span class= "textInput" contenteditable="true"></span></td>`
        cell2.className = "celdaUnidades"
        cell2.innerHTML = 
        `
        <span style="display: none;"></span>
        <select class="dropdownUnidades"></select>
        `

        cell3.innerHTML = `<td><span style="text-align:right" class= "textInput" contenteditable="true"></span></td>`
        cell4.innerHTML = `<td><span style="text-align:right" class= "textInput" contenteditable="true">0</span></td>`
        cell5.innerHTML = `<td><span style="text-align:right" class= "textInput" contenteditable="false">0</span></td>`
        cell6.innerHTML = `<td><span class= "textInput" contenteditable="true"></span></td>`
    
        crearOpcionesUnidades(row)
    }

    }
  }

  const eliminarFila = (event) =>{
    if (event.target.classList.contains('eliminar')) {
        
    
        let table = event.srcElement.id.toString()
        let table_id = event.srcElement.id.toString()
        table = table.replace('e_bttn_','body')
        table = document.getElementById(`${table}`)
        var rowCount = table.rows.length;


        if (table_id.includes('Paso7')) {
            if (rowCount >= 3) {
        
                
                table.deleteRow(-1);
            }
        } else {
            if (rowCount >= 4) {
        
                
                table.deleteRow(-1);
            }
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

if (ejecucion == 1) {
    contarFilas2()
}

function contarFilas() {

    sessionStorage.setItem('ejecucion',1)

    const tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id

        let skipRows = 0
        tableId = tableId.toString()

        if (tableId.includes('Paso6')) {
            skipRows = 2
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
            skipRows = 1
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

        window.location.reload()
    }
}


function contarFilas2() {

    sessionStorage.setItem('ejecucion',0)

    const tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id

        let skipRows = 0
        tableId = tableId.toString()

        if (tableId.includes('Paso6')) {
            skipRows = 2
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
    
            
                for (let k = 0; k < cells.length; k++) {
                    if (k===1) {
                        let celdaId = cells[k].childNodes[3].attributes['value'].nodeValue
                        console.log(celdaId);
                        rowData.push(cellData)
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
            skipRows = 1
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

        window.location.reload()
    }
}


botonGrabar.addEventListener('click',contarFilas)

window.addEventListener('click', agregarFila)
window.addEventListener('click', eliminarFila)

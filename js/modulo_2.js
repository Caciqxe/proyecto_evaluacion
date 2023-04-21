const botonGrabar = document.getElementById('grabar')

let institucionales = document.getElementById('institucionales')
let sociales = document.getElementById('sociales')
let politicos = document.getElementById('politicos')
let sectorial = document.getElementById('sectorial')
let comunidad = document.getElementById('comunidad')
let grupos = document.getElementById('grupos')
let gremiales = document.getElementById('gremiales')
let otros = document.getElementById('otros')

let infoExtra = JSON.parse(sessionStorage.getItem("Modulo2Extra"))
let identificacionInteres = JSON.parse(sessionStorage.getItem('tabla_identificacion_interes'))
let participacionComunitaria = JSON.parse(sessionStorage.getItem('tabla_participacion_comunitaria'))
let estrategiasVinculacion = JSON.parse(sessionStorage.getItem('tabla_estrategias_vinculacion'))

let arrayPosicion = [
    '---',
    'Positivo',
    'Indiferente',
    'Negativo'
]

if (identificacionInteres != null) {
    let tablaModificar = document.getElementById('tabla_identificacion_interes')
    let x = 0

    tablaModificar.innerHTML = 
    `
    <tbody id="iterarIden">
        <tr>
            <th style="width:10cm">ACTOR</th>
            <th>RELACIÓN CON EL PROBLEMA O PROYECTO</th>
            <th>PROPUESTA DE INTERVENCIÓN</th>
        </tr>
    </tbody>
    `
    let iterarIden = document.getElementById('iterarIden')

    while (x<identificacionInteres.rows.length) {
        iterarIden.innerHTML +=
        `
        <tr>
            <td><span contenteditable="true" class="textInput" style="width: 99%;>${identificacionInteres.rows[x][0]}</span></td>
            <td><span contenteditable="true" class="textInput" style="width: 99%;>${identificacionInteres.rows[x][1]}</span></td>
            <td><span contenteditable="true" class="textInput" style="width: 99%;>${identificacionInteres.rows[x][2]}</span></td>
        </tr>
        `

        x++
    }
} else {
    let tablaModificar = document.getElementById('tabla_identificacion_interes')

    tablaModificar.innerHTML =
    `
    <tbody>
    <tr>
        <th style="width: 10cm"> ACTOR</th>
        <th style="width: 10cm">RELACIÓN CON EL PROBLEMA O PROYECTO</th>
        <th style="width: 10cm">PROPUESTA DE INTERVENCIÓN</th>
        
    </tr>
    <tr>
        <td><span contenteditable="true" class="textInput" id="identificacion_interes_actor_1" style="width: 99%;"></span></td>
        <td><span contenteditable="true" class="textInput" id="identificacion_interes_problema_1" style="width: 99%;"></span></td>
        <td><span contenteditable="true" class="textInput" id="identificacion_interes_propuesta_1" style="width: 99%;"></span></td>
    </tr>
    </tbody>
    `
}

if (participacionComunitaria != null) {
    let tablaModificar = document.getElementById('tabla_participacion_comunitaria')
    let x = 0

    tablaModificar.innerHTML = 
    `
    <tbody id="iterarParti">
        <tr>
            <th>ACTOR COMUNITARIO</th>
            <th>ASPECTO DE VINCULACIÓN</th>
        </tr>
    </tbody>
    `
    let iterarParti = document.getElementById('iterarParti')

    while (x<participacionComunitaria.rows.length) {
        iterarParti.innerHTML +=
        `
        <tr>
            <td><span contenteditable="true" class="textInput">${participacionComunitaria.rows[x][0]}</span></td>
            <td><span contenteditable="true" class="textInput">${participacionComunitaria.rows[x][1]}</span></td>
        </tr>
        `

        x++
    }
}

if (estrategiasVinculacion != null) {
    let tablaModificar = document.getElementById('tabla_estrategias_vinculacion')
    let x = 0

    tablaModificar.innerHTML = 
    `
    <tbody id="iterarEstrategia">
        <tr>
            <th class="notaActor" style="width:7.5cm">ACTOR</th>
            <th style="width:7.5cm">DEFINICIÓN DE ROLES FRENTE AL PROYECTO</th>
            <th style="width:7.5cm">POSICIÓN FRENTE AL PROYECTO</th>
        </tr>
    </tbody>
    `
    let iterarEstrategia = document.getElementById('iterarEstrategia')

    while (x<estrategiasVinculacion.rows.length) {
        iterarEstrategia.innerHTML +=
        `
        <tr>
            <td><span contenteditable="true" class="textInput">${estrategiasVinculacion.rows[x][0]}</span></td>
            <td><span contenteditable="true" class="textInput">${estrategiasVinculacion.rows[x][1]}</span></td>
            <td class="celdaPosicion">
                <span style="display: none;"></span>
                <select class="dropdownPosicion" value="${estrategiasVinculacion.rows[x][2]}"></select>
            </td>
        </tr>
        `

        x++
    }
} else {
    let tablaModificar = document.getElementById('tabla_estrategias_vinculacion')
    
    tablaModificar.innerHTML = 
    `
    <tbody>
    <tr>
        <th class="notaActor" style="width: 7.5cm">ACTOR</th>
        <th style="width: 7.5cm">DEFINICIÓN DE ROLES FRENTE AL PROYECTO</th>
        <th style="width: 7.5cm;" >POSICIÓN FRENTE AL PROYECTO</th>
    </tr>
    <tr>
        <td><span contenteditable="true" class="textInput" id="estrategias_vinculacion_actor_1" style="width: 99%;" ></span></td>
        <td><span contenteditable="true" class="textInput" id="estrategias_vinculacion_roles_1" style="width: 99%;"></span></td>
        <td class="celdaPosicion" id="estrategias_vinculacion_proyecto_1" style="display: flex; justify-content: center; align-items: center; height: 23px">
            <span style="display: none;"></span>
            <select class="dropdownPosicion"></select>
        </td>
    </tr>
    </tbody>
    `
}

if (infoExtra != null) {      
    institucionales.innerHTML = infoExtra.institucionales
    sociales.innerHTML = infoExtra.sociales
    politicos.innerHTML = infoExtra.politicos
    sectorial.innerHTML = infoExtra.sectorial
    comunidad.innerHTML = infoExtra.comunidad
    grupos.innerHTML = infoExtra.grupos
    gremiales.innerHTML = infoExtra.gremiales
    otros.innerHTML = infoExtra.otros
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

        if (tableId.includes('tabla_estrategias_vinculacion')) {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
    
            
                for (let k = 0; k < cells.length; k++) {
                    if (k===2) {
                        const dropdown = cells[k].querySelector('.dropdownPosicion');
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
            if (tableId === "") {
                
            } else {
                sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
            }
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
            if (tableId === "") {
                
            } else {
                sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
            }
        }
    }
}

function grabarTodo() {
    let array = []
    array = {
        institucionales:institucionales.innerHTML,
        sociales:sociales.innerHTML,
        politicos:politicos.innerHTML,
        sectorial:sectorial.innerHTML,
        comunidad:comunidad.innerHTML,
        grupos:grupos.innerHTML,
        gremiales:gremiales.innerHTML,
        otros:otros.innerHTML
    }
    sessionStorage.setItem('Modulo2Extra',JSON.stringify(array))
}

const agregarFila = (event) => {
    if (event.target.classList.contains('agregar') )
    {
    
    let table = event.srcElement.id.toString()
    let id_loc = table.replace('a_bttn','tabla')
    table = document.getElementById(`${id_loc}`)
    var rowCount = table.rows.length;
    var row = table.insertRow(-1);

    if (id_loc === 'tabla_participacion_comunitaria') {
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        cell1.innerHTML = `<span contenteditable="true" class="textInput" id=participacion_comunitaria_actor_${rowCount} style="width: 99%;"></span>`
        cell2.innerHTML = `<span contenteditable="true" class="textInput" id=participacion_comunitaria_vinculacion_${rowCount} style="width: 99%;"></span>`

    } else if (id_loc === 'tabla_estrategias_vinculacion') {
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);
        cell1.innerHTML = `<span contenteditable="true" class="textInput" id="estrategias_vinculacion_actor_${rowCount}" style="width: 99%;"></span>`
        cell2.innerHTML = `<span contenteditable="true" class="textInput" id="estrategias_vinculacion_roles_${rowCount} " style="width: 99%;"></span>`

        cell3.className = "celdaPosicion"
        cell3.style = "display: flex; justify-content: center; align-items: center; height: 23px"
        cell3.innerHTML = 
        `
        <span style="display: none;" id="estrategias_vinculacion_proyecto_${rowCount} " style="width: 99%;"></span>
        <select class="dropdownPosicion"></select>
        `;
        
        crearOpcionesPosicion(row)

    } else {
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);
        cell1.innerHTML = `<span contenteditable="true" class="textInput" id="identificacion_interes_actor_${rowCount} " style="width: 99%;"></span>`
        cell2.innerHTML = `<span contenteditable="true" class="textInput" id="identificacion_interes_problema_${rowCount} " style="width: 99%;"></span>`
        cell3.innerHTML = `<span contenteditable="true" class="textInput" id="identificacion_interes_propuesta_${rowCount} " style="width: 99%;"></span>`
    }

    }
}

const eliminarFila = (event) =>{
    if (event.target.classList.contains('eliminar') )
    {
    let table = event.srcElement.id.toString()
    table = table.replace('e_bttn','tabla')
    table = document.getElementById(`${table}`)

    table.deleteRow(-1);
    }
}

function crearOpcionesPosicion(fila) {
    var dropdownCell = fila.querySelector('.celdaPosicion');
    var dropdown = dropdownCell.querySelector('.dropdownPosicion');

    console.log(dropdownCell);
    arrayPosicion.forEach(function (value, index) {
        var option = document.createElement('option');
        option.value = index;
        option.text = value;

        console.log(dropdown);
        dropdown.appendChild(option);
    });

    dropdown.onchange = function() {
        console.log(dropdown.value);
        let valor = arrayPosicion[dropdown.value]
        //valor = arrayPosicion[dropdown.innerHTML];
        console.log(valor);
    }

    dropdown.style.maxHeight = '100px';
}

botonGrabar.addEventListener('click',grabarTodo)
botonGrabar.addEventListener('click',contarFilas)
window.addEventListener('click',agregarFila)
window.addEventListener('click',eliminarFila)
window.addEventListener('DOMContentLoaded', function () {
    var dropdownCell = document.querySelectorAll('.celdaPosicion');

    dropdownCell.forEach(function(cell) {
    var dropdown = cell.querySelector('.dropdownPosicion');


    if (dropdown.attributes['value'] === undefined) {
            // Crea las opciones del dropdown basado en el array
    arrayPosicion.forEach(function(value, index) {
        var option = document.createElement('option');
        option.value = index;
        option.text = value;
  
        // Si el valor actual es el valor predeterminado, establecer como seleccionado
  
        dropdown.appendChild(option);
      });
  
    } else {
        let valorPredeterminado = dropdown.attributes['value'].value
        console.log(valorPredeterminado);
        arrayPosicion.forEach(function(value, index) {
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
        let valor = arrayPosicion[dropdown.value]
        //valor = arrayPosicion[dropdown.innerHTML];
        console.log(valor);
    }
    dropdown.style.maxHeight = '100px';
})
})

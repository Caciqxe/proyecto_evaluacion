const actividades = document.getElementById('definidorActividades')
let numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))
let volver = document.getElementById('volver')
let siguiente = document.getElementById('siguiente')
let botonGrabar = document.getElementById('grabar')
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


while (x < numAlternativas) {
  let prueba = sessionStorage.getItem(`Alt_numero_${x + 1}`)
  actividades.innerHTML +=
    `
    <div id=Alt${x + 1}>
    <span class="alternativaStilo">Alternativa N° ${x + 1}: ${JSON.parse(prueba).name}</span>
        <div id=contenedor_comp_alt${x + 1}>
        </div>
    </div>
    `

  actividades.innerHTML +=
    `
    <div id=ocultoAlt${x + 1} style="display: flex; flex-wrap: wrap; width:50%; padding-top:5px;">
    </div>
    <div id="contenerdor_total_Alt${x + 1}" style="padding-bottom: 10px; display: flex; width: 100%;">
        <span id="preguntaTablaFinalAlt${x + 1}" style="width:25% !important"></span>
        <span id="respuestaTablaFinalAlt${x + 1}" style="margin-left:10px; background-color: whitesmoke; color:black; height: fit-content; padding: 0 6px; text-align: end; min-width: 150px;"></span>
    </div>
    `


  let numComp = document.getElementById(`contenedor_comp_alt${x + 1}`)
  let y = 0
  let sumaMasGrande = 0
  while (y < parseInt(JSON.parse(prueba).numeroCom)) {
    let storage = JSON.parse(sessionStorage.getItem(`alt${x + 1}_com${y + 1}`));



    if (storage != null) {
      let oculto = document.getElementById(`ocultoAlt${x + 1}`)

      let suma = 0

      storage.rows.forEach(el => {
        suma += parseInt(el[4])
      });

      oculto.innerHTML +=
        `
            <span class="preguntaTabla" style="width: 50% !important; margin-bottom: 5px;">COMPONENTE ${y + 1}</span>
            <span style="margin-left:10px; background-color: whitesmoke; color:black; height: fit-content; padding: 0 6px; text-align: end; min-width: 150px;">${parseFloat(suma).toFixed(2)}</span>
            `
      console.log(suma);

      sumaMasGrande += parseInt(suma)
    } else {

    }

    if (storage != null) {
      let respuestaTablaFinal = document.getElementById(`respuestaTablaFinalAlt${x + 1}`)
      let preguntaTablaFinal = document.getElementById(`preguntaTablaFinalAlt${x + 1}`)
      preguntaTablaFinal.className = 'preguntaTabla'
      preguntaTablaFinal.innerHTML = `TOTAL ALTERNATIVA ${x + 1}:`
      respuestaTablaFinal.innerHTML = parseFloat(sumaMasGrande).toFixed(2)
    } else {

    }

    if (storage != null) {
      let z = 0
      numComp.innerHTML +=
        `
            <span class="componenteStilo">Componente N° ${y + 1}</span>
            <table id=alt${x + 1}_com${y + 1}>
                <tbody id="bodyalt${x + 1}_com${y + 1}">
                    <tr>
                        <th>DESCRIPCIÓN DE ACTIVIDADES O MEDIOS DE SEGUNDO NIVEL</th>
                        <th>UNIDAD DE MEDIDA</th>
                        <th>CANTIDAD REQUERIDA</th>
                        <th>COSTO UNITARIO</th>
                        <th>VALOR TOTAL</th>
                        <th>PERIODO DE DEPRECIACIÓN</th>
                        <th>RIESGO ASOCIADO</th>
                        <th>AFECTACIÓN POSIBLE</th>
                    </tr>
                </tbody>
            </table>
            <span><button id=a_bttn_alt${x + 1}_com${y + 1} class="agregar">Agregar Actividad</button></span>
            <span><button id=e_bttn_alt${x + 1}_com${y + 1} class="eliminar">Eliminar Actividad</button></span>
            `
      let body = document.getElementById(`bodyalt${x + 1}_com${y + 1}`)
      while (z < storage.rows.length) {
        body.innerHTML +=
          `
                <tr>
                            <td><input id= "descAct_alt${x + 1}_com${y + 1}_act${z + 1}" class= "textInput" value="${storage.rows[z][0]}" contenteditable="true"></input></td>
                            <td class="dropdown-cell">
                                <span style="display: none;"></span>
                                <select class="my-dropdown" id="unidMed_alt${x + 1}_com${y + 1}_act1" value="${storage.rows[z][1]}"></select>
                            </td>
                            <td><input style="width: 97%;text-align:right" id= "cantReq_alt${x + 1}_com${y + 1}_act${z + 1}" class= "textInput" value="${storage.rows[z][2]}" contenteditable="true"></input></td>
                            <td><input style="width: 97%;text-align:right" id= "costUnit_alt${x + 1}_com${y + 1}_act${z + 1}" class= "textInput" value="${storage.rows[z][3]}" contenteditable="true"></input></td>
                            <td><input style="width: 97%;text-align:right" id= "valTotal_alt${x + 1}_com${y + 1}_act${z + 1}" class= "textInput" value="${storage.rows[z][4]}" readonly="true"></input></td>
                            <td><input style="width: 97%;text-align:right" id= "perDepre_alt${x + 1}_com${y + 1}_act${z + 1}" class= "textInput" value="${storage.rows[z][5]}" contenteditable="true"></input></td>
                            <td><input style="width: 97%" id= "riesAsoc_alt${x + 1}_com${y + 1}_act${z + 1}" class= "textInput" value="${storage.rows[z][6]}" contenteditable="true"></input></td>
                            <td><input style="width: 97%" id= "afectPos_alt${x + 1}_com${y + 1}_act${z + 1}" class= "textInput" value="${storage.rows[z][7]}" contenteditable="true"></input></td>
                </tr>
                `
        var table = document.getElementById(`alt${x + 1}_com${y + 1}`);

        z++
      }

    } else {
      numComp.innerHTML +=
        `
            <span class="componenteStilo">Componente N° ${y + 1}</span>
            <table id=alt${x + 1}_com${y + 1}>
                <tbody>
                    <tr>
                        <th>DESCRIPCIÓN DE ACTIVIDADES O MEDIOS DE SEGUNDO NIVEL</th>
                        <th>UNIDAD DE MEDIDA</th>
                        <th>CANTIDAD REQUERIDA</th>
                        <th>COSTO UNITARIO</th>
                        <th>VALOR TOTAL</th>
                        <th>PERIODO DE DEPRECIACIÓN</th>
                        <th>RIESGO ASOCIADO</th>
                        <th>AFECTACIÓN POSIBLE</th>
                    </tr>
                    <tr>
                        <td><input id= "descAct_alt${x + 1}_com${y + 1}_act1" class= "textInput" contenteditable="true"></input></td>
                        <td class="dropdown-cell">
                            <span style="display: none;"></span>
                            <select class="my-dropdown" id="unidMed_alt${x + 1}_com${y + 1}_act1"></select>
                        </td>
                        <td><input style="width:97%;text-align:right" id= "cantReq_alt${x + 1}_com${y + 1}_act1" class= "textInput" value=0 contenteditable="true"></input></td>
                        <td><input style="width:97%;text-align:right" id= "costUnit_alt${x + 1}_com${y + 1}_act1" class= "textInput" value=0 contenteditable="true"></input></td>
                        <td><input style="width:97%;text-align:right" id= "valTotal_alt${x + 1}_com${y + 1}_act1" class= "textInput" value=0 readonly="true"></input></td>
                        <td><input style="width:97%;text-align:right" id= "perDepre_alt${x + 1}_com${y + 1}_act1" class= "textInput" contenteditable="true"></input></td>
                        <td><input style="width:97%" id= "riesAsoc_alt${x + 1}_com${y + 1}_act1" class= "textInput" contenteditable="true"></input></td>
                        <td><input style="width:97%" id= "afectPos_alt${x + 1}_com${y + 1}_act1" class= "textInput" contenteditable="true"></input></td>
                    </tr>
                </tbody>
            </table>
            <span><button id=a_bttn_alt${x + 1}_com${y + 1} class="agregar">Agregar Actividad</button></span>
            <span><button id=e_bttn_alt${x + 1}_com${y + 1} class="eliminar">Eliminar Actividad</button></span>
            `


      var table = document.getElementById(`alt${x + 1}_com${y + 1}`);


    }
    y++
  }

  x++
}


let boton = document.querySelectorAll(".agregar");
var btnsArr = Array.prototype.slice.call(boton);



const agregarFila = (event) => {
  if (event.target.textContent === 'Agregar Actividad') {

    let table = event.srcElement.id.toString()
    let id_loc = table.replace('a_bttn_', '')
    table = document.getElementById(`${id_loc}`)
    var rowCount = table.rows.length;

    var row = table.insertRow(-1);
    var cell1 = row.insertCell(-1);
    var cell2 = row.insertCell(-1);
    var cell3 = row.insertCell(-1);
    var cell4 = row.insertCell(-1);
    var cell5 = row.insertCell(-1);
    var cell6 = row.insertCell(-1);
    var cell7 = row.insertCell(-1);
    var cell8 = row.insertCell(-1);

    cell1.innerHTML = `<input class="textInput" id="descAct_${id_loc}_act${rowCount}"></input>  `;
    cell2.className = "dropdown-cell"
    cell2.innerHTML =
      `
        <span style="display: none;"></span>
        <select class="my-dropdown" id="unidMed_${id_loc}_act${rowCount}"></select>
    `

    //cell2.innerHTML = `<input class="textInput" id="unidMed_${id_loc}_act${rowCount}"></input>  `;
    cell3.innerHTML = `<input class="textInput" id="cantReq_${id_loc}_act${rowCount}" value=0 style="text-align:right"></input>  `;
    cell4.innerHTML = `<input class="textInput" id="costUnit_${id_loc}_act${rowCount}" value=0 style="text-align:right"></input>  `;
    cell5.innerHTML = `<input class="textInput" id="valTotal_${id_loc}_act${rowCount}" style="text-align:right" readonly="true"></input>  `;
    cell6.innerHTML = `<input class="textInput" id="perDepre_${id_loc}_act${rowCount}" style="text-align:right"></input>  `;
    cell7.innerHTML = `<input class="textInput" id="riesAsoc_${id_loc}_act${rowCount}"></input>`;
    cell8.innerHTML = `<input class="textInput" id="afectPos_${id_loc}_act${rowCount}"></input>`;

    crearOpciones(row)
  }
}

const eliminarFila = (event) => {
  if (event.target.textContent === 'Eliminar Actividad') {

    let table = event.srcElement.id.toString()
    table = table.replace('e_bttn_', '')
    table = document.getElementById(`${table}`)

    table.deleteRow(-1);
  }
}

function calculador(e) {
  let campo = e.srcElement.id.toString()
  if (campo.startsWith('cantReq')) {
    campo = campo.replace('cantReq_', '')
    let cantReq = document.getElementById(`cantReq_${campo}`)
    let costUnit = document.getElementById(`costUnit_${campo}`)
    let valTotal = document.getElementById(`valTotal_${campo}`)

    valTotal.value = parseFloat(parseInt(cantReq.value) * parseInt(costUnit.value)).toFixed(2)
    //valTotal.value = (parseInt(cantReq.value) * parseInt(costUnit.value)).toFixed(2)

  } if (campo.startsWith('costUnit')) {
    campo = campo.replace('costUnit_', '')
    let cantReq = document.getElementById(`cantReq_${campo}`)
    let costUnit = document.getElementById(`costUnit_${campo}`)
    let valTotal = document.getElementById(`valTotal_${campo}`)

    valTotal.value = parseFloat(parseInt(cantReq.value) * parseInt(costUnit.value)).toFixed(2)
    //valTotal.value = (parseInt(cantReq.value) * parseInt(costUnit.value)).toFixed(2)
  }
}

function fijarValores(e) {

  let a = 0
  while (a < numAlternativas) {
    let getAlt = sessionStorage.getItem(`Alt_numero_${a + 1}`)
    let getComponente = JSON.parse(getAlt).numeroCom
    let b = 0

    while (b < getComponente) {
      let tablaId = `alt${a + 1}_com${b + 1}`

      let largoTabla = document.getElementById(tablaId)
      largoTabla = (largoTabla.rows.length - 1)
      let c = 0
      while (c < largoTabla) {
        let descAct = document.getElementById(`descAct_alt${a + 1}_com${b + 1}_act${c + 1}`).value
        let unidMed = document.getElementById(`unidMed_alt${a + 1}_com${b + 1}_act${c + 1}`).value
        let cantReq = document.getElementById(`cantReq_alt${a + 1}_com${b + 1}_act${c + 1}`).value
        let costUnit = document.getElementById(`costUnit_alt${a + 1}_com${b + 1}_act${c + 1}`).value
        let valTotal = document.getElementById(`valTotal_alt${a + 1}_com${b + 1}_act${c + 1}`).value
        let perDepre = document.getElementById(`perDepre_alt${a + 1}_com${b + 1}_act${c + 1}`).value
        let riesAsoc = document.getElementById(`riesAsoc_alt${a + 1}_com${b + 1}_act${c + 1}`).value
        let afectPos = document.getElementById(`afectPos_alt${a + 1}_com${b + 1}_act${c + 1}`).value

        if (sessionStorage.getItem(`alt${a + 1}_com${b + 1}`) === null) {
          sessionStorage.setItem(`alt${a + 1}_com${b + 1}`, JSON.stringify(
            [
              {
                descripcionActividad: descAct,
                unidadMedida: unidMed,
                cantidadRequerida: cantReq,
                costoUnitario: costUnit,
                valorTotal: valTotal,
                periodoDepreciacion: perDepre,
                riesgosAsociados: riesAsoc,
                afectacionPosible: afectPos,
                factorSocial: ''
              }]


          ))
        } else {
          let veamos = sessionStorage.getItem(`alt${a + 1}_com${b + 1}`)
          veamos = JSON.parse(veamos)


          let actividadNueva =
            [
              {
                'descripcionActividad': descAct,
                'unidadMedida': unidMed,
                'cantidadRequerida': cantReq,
                'costoUnitario': costUnit,
                'valorTotal': valTotal,
                'periodoDepreciacion': perDepre,
                'riesgosAsociados': riesAsoc,
                'afectacionPosible': afectPos,
                'factorSocial': ''
              }]
          actividadNueva = actividadNueva.concat(veamos);
          sessionStorage.setItem(`alt${a + 1}_com${b + 1}`, JSON.stringify(actividadNueva))


        }
        c++
      }
      b++
    }
    a++
  }
}

function crearOpciones(fila) {

  // Encuentra el dropdown en la celda
  var dropdownCell = fila.querySelector('.dropdown-cell');
  var dropdown = dropdownCell.querySelector('.my-dropdown');
  console.log(dropdown);
  // Crea las opciones del dropdown basado en el array
  arrayUnidades.forEach(function (value, index) {
    var option = document.createElement('option');
    option.value = index;
    option.text = value;

    // Si el valor actual es el valor predeterminado, establecer como seleccionado

    dropdown.appendChild(option);
  });

  dropdown.onchange = function () {
    console.log(dropdown.value);
    let valor = arrayUnidades[dropdown.value]
    //valor = arrayUnidades[dropdown.innerHTML];
    console.log(valor);

  }


  // Establece la altura máxima del dropdown
  dropdown.style.maxHeight = '100px';
}

console.log(arrayUnidades);

// Encuentra el dropdown en la celda
var dropdownCell = document.querySelectorAll('.dropdown-cell');

dropdownCell.forEach(function (cell) {
  var dropdown = cell.querySelector('.my-dropdown');


  if (dropdown.attributes['value'] === undefined) {
    // Crea las opciones del dropdown basado en el array
    arrayUnidades.forEach(function (value, index) {
      var option = document.createElement('option');
      option.value = index;
      option.text = value;

      // Si el valor actual es el valor predeterminado, establecer como seleccionado

      dropdown.appendChild(option);
    });

  } else {
    let valorPredeterminado = dropdown.attributes[2].value
    console.log(valorPredeterminado);
    arrayUnidades.forEach(function (value, index) {
      var option = document.createElement('option');
      option.value = index;
      option.text = value;

      if (index === parseInt(valorPredeterminado)) {
        console.log('son iguales');
        option.selected = true;
      }

      // Si el valor actual es el valor predeterminado, establecer como seleccionado

      dropdown.appendChild(option);
    });
  }

  dropdown.onchange = function () {
    console.log(dropdown.value);
    let valor = arrayUnidades[dropdown.value]
    //valor = arrayUnidades[dropdown.innerHTML];
    console.log(valor);
  }
  dropdown.style.maxHeight = '100px';
})

// Establece la altura máxima del dropdown


function contarFilas() {

  const tables = document.getElementsByTagName('table');

  for (let i = 0; i < tables.length; i++) {
    const table = tables[i];
    const rows = table.rows;
    const tableData = [];

    let tableId = table.id

    let skipRows = 1
    tableId = tableId.toString()

    for (let j = skipRows; j < rows.length; j++) {
      const rowData = [];
      const cells = rows[j].cells;


      for (let k = 0; k < cells.length; k++) {

        if (k === 1) {
          const dropdown = cells[k].querySelector('.my-dropdown');
          const selectedIndex = dropdown.selectedIndex;
          console.log(selectedIndex);

          /*                         let celdaId = cells[k].children[1].firstChild
                                  console.log(celdaId.value);
                                  //console.log(celdaId.value);
                                      
                                  const cellData = celdaId.value*/
          rowData.push(selectedIndex);
        } else {
          const celdaId = cells[k].childNodes[0].id
          let input = document.getElementById(celdaId)
          const cellData = input.value
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
  }
  window.location.reload()
}


window.addEventListener('click', agregarFila);
window.addEventListener('click', eliminarFila);
window.addEventListener('change', calculador)

siguiente.addEventListener('click', contarFilas)
botonGrabar.addEventListener('click', contarFilas)

const dragNDrop = document.getElementById('pruebaCanvas')
const botonGrabar = document.getElementById('grabar')
const alternativasComponentes = document.getElementById('alternativasComponentes')
let diagnosticoProblema = document.getElementById('diagnosticoProblema')
let brechaGenero = document.getElementById('brechaGenero')
let problemaSolucionar = document.getElementById('problemaSolucionar')
let indicadoresBase = document.getElementById('indicadoresBase')
let objetivoCentral = document.getElementById('objetivoCentral')
let metaObjetivo = document.getElementById('metaObjetivo')
let documentosEstudio = JSON.parse(sessionStorage.getItem('documentosEstudio'))
let documentosProblema = JSON.parse(sessionStorage.getItem('documentosProblema'))
let body = document.getElementById('bodyTabla1')
let body2 = document.getElementById('bodyTabla2')
let antecedentesProblematicaRespuest = document.getElementById('antecedentesProblematicaRespuest')

let numeroAlternativasInt = sessionStorage.getItem("numAlternativas")
let infoExtra = JSON.parse(sessionStorage.getItem("Modulo1Extra"))

if (infoExtra != null) {      
  diagnosticoProblema.innerHTML = infoExtra.diagnosticoProblema
  brechaGenero.innerHTML = infoExtra.brechaGenero
  problemaSolucionar.innerHTML = infoExtra.problemaSolucionar
  indicadoresBase.innerHTML = infoExtra.indicadoresBase
  objetivoCentral.innerHTML = infoExtra.objetivoCentral
  metaObjetivo.innerHTML = infoExtra.metaObjetivo
  antecedentesProblematicaRespuest.innerHTML = infoExtra.antecedesProblematica

  
  for (let index = 0; index < documentosEstudio.rows.length; index++) {
      

    body.innerHTML +=
    `
    <td><span class="textInput" contenteditable="true">${documentosEstudio.rows[index][0]}</span></td>
    `
    
  }

  for (let index = 0; index < documentosProblema.rows.length; index++) {
    body2.innerHTML +=
    `
    <td><span class="textInput" contenteditable="true">${documentosProblema.rows[index][0]}</span></td>
    `
    
  }
}


var x = 0
while (x < numeroAlternativasInt) {

  let detalleComp = JSON.parse(sessionStorage.getItem(`detalleCompAlt_${x+1}`))
  let descripcion = JSON.parse(sessionStorage.getItem(`descripcionAlt_${x+1}`)) 

  if (detalleComp === null) {
    alternativasComponentes.innerHTML += 
    `
    <p>
      <span class="alternativaStilo" style="width:99.7%;">ALTERNATIVA N° ${x+1}</span>
    </p>
    <table id= "descripcionAlt_${x+1}">
      <tbody>
        <tr>
          <th style="width:100px;">N°</th>
          <th style="width:16cm;">Nombre de la Alternativa (debe ser preciso de manera que indique el tipo de intervención, bien o servicio en el que intervendrá y la localización)</th>
          <th style="width:16cm;">Descripción Básica (En qué consiste la alternativa, características principales de los procesos y de los aspectos técnicos)</th>
        <tr/>
        <tr>
          <td><span class="respuestaTabla" style="text-align:center; width:95%;">${x+1}</span></td>
          <td><span class="respuestaTabla" style="width:99%;">${JSON.parse(sessionStorage.getItem(`Alt_numero_${x+1}`)).name}</span></td>
          <td><span class= "textInput" contenteditable="true" style="width:99%;"></span></td>
        <tr/>
      </tbody>
    </table>
    <div id = Alt_${x+1}>
      <p>
        <span class="alternativaStilo" style="width:99.7%;">DEFINA LOS COMPONENTES Y SUS RESPECTIVAS METAS (Deben corresponder a los medios directos del Árbol de Objetivos)</span>
      </p>
      <table id = comp_alt_${x+1}>
        <tbody>
          <tr>
            <th>N°</th>
            <th>Componentes</th>
            <th>Meta Propuesta</th>
          </tr>
        </tbody>
      <table>
    </div>
    `
  
    const altID = document.getElementById(`comp_alt_${x+1}`)
    var y = 0
      while (y<JSON.parse(sessionStorage.getItem(`Alt_numero_${x+1}`)).numeroCom) {
        var rowCount = altID.rows.length;
        var row = altID.insertRow(rowCount);
        
        var cellCount = altID.rows[0].cells.length; 
        for(var j =0; j < cellCount; j++){
            var cell = row.insertCell(j);
            if(j < cellCount-2){
                cell.innerHTML=`<span  style="text-align:center; width: 95%;" class="respuestaTabla">${y+1}`;
            }else{
                cell.innerHTML = '<span class= "textInput" contenteditable="true" style="width:99%;"></span>';
            }
        }
      y++
      }
  } else {

    alternativasComponentes.innerHTML += 
    `
    <p>
      <span class="alternativaStilo">ALTERNATIVA N° ${x+1}</span>
    </p>
    <table id= "descripcionAlt_${x+1}">
      <tbody>
        <tr>
          <th>N°</th>
          <th style="width:16cm;">Nombre de la Alternativa (debe ser preciso de manera que indique el tipo de intervención, bien o servicio en el que intervendrá y la localización)</th>
          <th style="width:16cm;">Descripción Básica (En qué consiste la alternativa, características principales de los procesos y de los aspectos técnicos)</th>
        <tr/>
        <tr>
          <td><span style="width:1cm; text-align:center" class="respuestaTabla">${x+1}</span></td>
          <td><span class="respuestaTabla">${JSON.parse(sessionStorage.getItem(`Alt_numero_${x+1}`)).name}</span></td>
          <td><span class= "textInput" contenteditable="true">${descripcion.rows[0][2]}</span></td>
        <tr/>
      </tbody>
    </table>
    <div id = Alt_${x+1}>
    <p>
      <span class="alternativaStilo">DEFINA LOS COMPONENTES Y SUS RESPECTIVAS METAS (Deben corresponder a los medios directos del Árbol de Objetivos)</span>
    </p>
    <table id = comp_alt_${x+1}>
      <tbody>
        <tr>
          <th style="width:2cm;">N°</th>
          <th>Componentes</th>
          <th>Meta Propuesta</th>
        </tr>
      </tbody>
    <table>
  </div>
    `    
    const altID = document.getElementById(`comp_alt_${x+1}`)
    var y = 0
      while (y<JSON.parse(sessionStorage.getItem(`Alt_numero_${x+1}`)).numeroCom) {
        var rowCount = altID.rows.length;
        var row = altID.insertRow(rowCount);
        
        var cellCount = altID.rows[0].cells.length; 
        for(var j =0; j < cellCount; j++){
            var cell = row.insertCell(j);
            if(j < cellCount-2){
                cell.innerHTML=`<span style="text-align:center" class="respuestaTabla">${y+1}`;
            }else if(j < cellCount-1){
              if (detalleComp.rows[y] === undefined) {
                cell.innerHTML = `<span class= "textInput" contenteditable="true"></span>`
              } else{
                cell.innerHTML = `<span class= "textInput" contenteditable="true">${detalleComp.rows[y][1]}</span>`;
              }
            }else{
              if (detalleComp.rows[y] === undefined) {
                cell.innerHTML = `<span class= "textInput" contenteditable="true"></span>`;
              } else {
                cell.innerHTML = `<span class= "textInput" contenteditable="true">${detalleComp.rows[y][2]}</span>`;
              }
            }
        }
      y++
      }
  }

  x++
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

    if (tableId.includes('documentosEstudio') || tableId.includes('documentosProblema')) {
      skipRows = 0
    }

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

    if (tableId.includes('comp_alt')) {
      tableId = tableId.replace('comp_alt','detalleCompAlt')
      sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
    } else {
      sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
    }
  }

}

function grabarTodo() {

  let array = []
  array = {
    diagnosticoProblema:diagnosticoProblema.innerHTML,
    brechaGenero:brechaGenero.innerHTML,
    problemaSolucionar:problemaSolucionar.innerHTML,
    indicadoresBase:indicadoresBase.innerHTML,
    objetivoCentral:objetivoCentral.innerHTML,
    metaObjetivo:metaObjetivo.innerHTML,
    antecedesProblematica:antecedentesProblematicaRespuest.innerHTML
  }
  sessionStorage.setItem('Modulo1Extra',JSON.stringify(array))
}
let respuestaTabla = document.getElementsByClassName('respuestaTabla')

const agregarFila = (event) => {
  if (event.target.classList.contains('agregar'))
  {

  let table = event.srcElement.id.toString()
  let id_loc = table.replace('a_bttn_','body')
  table = document.getElementById(`${id_loc}`)
  var rowCount = table.rows.length;

  var row = table.insertRow(-1);
  var cell1 = row.insertCell(-1);

  cell1.innerHTML = `<td><span class="textInput" contenteditable="true" style="width: 99.5%;"></span></td>`

  }
}

const eliminarFila = (event) =>{
  if (event.target.classList.contains('eliminar')) {
      
      let table = event.srcElement.id.toString()
      table = table.replace('e_bttn_','body')
      table = document.getElementById(`${table}`)
      var rowCount = table.rows.length;
      if (rowCount >= 2) {
          table.deleteRow(-1);
      }
  }
}

window.addEventListener('click', agregarFila)
window.addEventListener('click', eliminarFila)

botonGrabar.addEventListener('click',contarFilas)
botonGrabar.addEventListener('click', grabarTodo)

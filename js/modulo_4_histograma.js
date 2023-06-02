const botonGrabar = document.getElementById('grabar')

console.log(botonGrabar);
let infoExtraHistograma = JSON.parse(sessionStorage.getItem('infoExtraHistograma'))
let infoExtra = document.getElementById('infoExtraHistograma')
let nombresHistograma = document.getElementById('nombresHistograma') 
let evaluacionGeomorfologica = document.getElementById('evaluacionGeomorfologica') 
let evaluacionSocial = document.getElementById('evaluacionSocial') 
let evaluacionFisica = document.getElementById('evaluacionFisica') 
let evaluacionInstitucional = document.getElementById('evaluacionInstitucional') 
let resumenHistograma = document.getElementById('resumenHistograma')
let coordenadasHistoX = document.getElementById('coordenadasHistoX')
let coordenadasHistoY = document.getElementById('coordenadasHistoY')

if (infoExtraHistograma != null) {
  let infoExtraHistograma = JSON.parse(sessionStorage.getItem('infoExtraHistograma'))
  let tablaNombresHistograma = JSON.parse(sessionStorage.getItem('nombresHistograma'))
  let tablaEvaluacionGeomorfologica = JSON.parse(sessionStorage.getItem('evaluacionGeomorfologica'))
  let tablaEvaluacionSocial = JSON.parse(sessionStorage.getItem('evaluacionSocial'))
  let tablaEvaluacionFisica = JSON.parse(sessionStorage.getItem('evaluacionFisica'))
  let tablaEvaluacionInstitucional = JSON.parse(sessionStorage.getItem('evaluacionInstitucional'))
  let coordenadasHistoSavedX = sessionStorage.getItem('coordenadasHistoX')
  let coordenadasHistoSavedY = sessionStorage.getItem('coordenadasHistoY')

  coordenadasHistoX.innerHTML = coordenadasHistoSavedX
  coordenadasHistoY.innerHTML = coordenadasHistoSavedY

  infoExtra.innerHTML = 
  `
  <tbody>
    <tr>
        <td class="bajada">Dirección exacta del edificio/vivienda:</td>
        <td style="min-width: 800px; max-width: 1300px;"><span class="textInput" contenteditable="true">${infoExtraHistograma.rows[0][1]}</span></td>
    </tr>
    <tr>
        <td class="bajada">Titular/dueño del edificio/vivienda (nombre/contacto):</td>
        <td><span class="textInput" style="min-width: 800px; max-width: 1300px;" contenteditable="true">${infoExtraHistograma.rows[1][1]}</span></td>
    </tr>
    <tr>
        <td class="bajada">Titular que alquila o usa el edificio o vivienda (nombre/contacto):</td>
        <td><span class="textInput" style="min-width: 800px; max-width: 1300px;" contenteditable="true">${infoExtraHistograma.rows[2][1]}</span></td>
    </tr>			
    <tr>
        <td class="bajada">Personas que habitan el edificio/vivienda:</td>
        <td><span class="textInput" style="min-width: 800px; max-width: 1300px;" contenteditable="true">${infoExtraHistograma.rows[3][1]}</span></td>
    </tr>				
  </tbody>
  `

  nombresHistograma.innerHTML =
  `
  <tbody>
  <tr>
      <th style="width: 500px;">NOMBRE</th>
      <th style="width: 500px;">IDENTIFICACIÓN</th>
      <th style="width: 500px;">EDAD</th>
      <th style="width: 500px;">PARENTESCO</th>
  </tr>
  <tr>
      <td><span class="textInput" contenteditable="true">${tablaNombresHistograma.rows[0][0]}</span></td>
      <td><span class="textInput" contenteditable="true">${tablaNombresHistograma.rows[0][1]}</span></td>
      <td><span class="textInput" contenteditable="true">${tablaNombresHistograma.rows[0][2]}</span></td>
      <td><span class="textInput" contenteditable="true">${tablaNombresHistograma.rows[0][3]}</span></td>
    </tr>
  </tbody>
  `

  evaluacionGeomorfologica.innerHTML =
  `
  <tbody>
      <tr>
          <th>E</th>
          <th>ZONAS DE AMENAZA O SUSCEPTIBILIDAD</th>
          <th>LAGOS, LAGUNAS, ZONAS INUNDABLES</th>
          <th>DESLIZAMIENTOS AGUAS ARRIBA DE LA OBRA</th>
          <th>FORMA DEL TERRENO</th>
          <th>ZONAS GRAGILES</th>
          <th>IMPACTOS AGUAS ABAJO</th>
          <th>P</th>
          <th>F</th>
          <th>ExPxF</th>
          <th>PxF</th>
      </tr>
      <tr>
          <td><span style="text-align:center" class="respuestaTabla" >1</span></td>
          <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[0][1]}</span></td>
          <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[0][2]}</span></td>
          <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[0][3]}</span></td>
          <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[0][4]}</span></td>
          <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[0][5]}</span></td>
          <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[0][6]}</span></td>
          <td><span style="text-align:center" class="respuestaTabla" >3</)span></td>
          <td><span style="text-align:center" class="respuestaTabla" >${parseInt(tablaEvaluacionGeomorfologica.rows[0][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[0][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][6])}</span></td>
          <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionGeomorfologica.rows[0][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[0][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][6]))*3*1}</span></td>
          <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionGeomorfologica.rows[0][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[0][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][6]))*3}</span></td>
      </tr>
      <tr>
           <td><span style="text-align:center" class="respuestaTabla" >2</span></td>
           <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[1][1]}</span></td>
           <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[1][2]}</span></td>
           <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[1][3]}</span></td>
           <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[1][4]}</span></td>
           <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[1][5]}</span></td>
           <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[1][6]}</span></td>
           <td><span style="text-align:center" class="respuestaTabla" >2</span></td>
           <td><span style="text-align:center" class="respuestaTabla" >${parseInt(tablaEvaluacionGeomorfologica.rows[1][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[1][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][6])}</span></td>
           <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionGeomorfologica.rows[1][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[1][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][6]))*2*2}</span></td>
           <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionGeomorfologica.rows[1][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[1][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][6]))*2}</span></td>
      </tr>
      <tr>
           <td><span style="text-align:center" class="respuestaTabla" >3</span></td>
           <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[2][1]}</span></td>
           <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[2][2]}</span></td>
           <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[2][3]}</span></td>
           <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[2][4]}</span></td>
           <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[2][5]}</span></td>
           <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionGeomorfologica.rows[2][6]}</span></td>
           <td><span style="text-align:center" class="respuestaTabla" >1</span></td>
           <td><span style="text-align:center" class="respuestaTabla" >${parseInt(tablaEvaluacionGeomorfologica.rows[2][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[2][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][6])}</span></td>
           <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionGeomorfologica.rows[2][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[2][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][6]))*3*1}</span></td>
           <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionGeomorfologica.rows[2][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[2][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][6]))}</span></td>
      </tr>
      <tr>
           <td style="background:#afafaf"></td>
           <td style="background:#afafaf"></td>
           <td style="background:#afafaf"></td>
           <td style="background:#afafaf"></td>
           <td style="background:#afafaf"></td>
           <td style="background:#afafaf"></td>
           <td><span style="font-weight:bold" class="respuestaTabla">TOTAL</span></td>
           <td style="background:#afafaf"></td>
           <td style="background:#afafaf"></td>
           <td><span style="text-align:center;font-weight:bold" class="respuestaTabla">${parseInt(((parseInt(tablaEvaluacionGeomorfologica.rows[0][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[0][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][6]))*3*1)+((parseInt(tablaEvaluacionGeomorfologica.rows[1][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[1][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][6]))*2*2)+((parseInt(tablaEvaluacionGeomorfologica.rows[2][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[2][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][6]))*3*1))}</span></td>
           <td><span style="text-align:center;font-weight:bold" class="respuestaTabla">${parseInt(((parseInt(tablaEvaluacionGeomorfologica.rows[0][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[0][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][6]))*3)+((parseInt(tablaEvaluacionGeomorfologica.rows[1][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[1][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][6]))*2)+((parseInt(tablaEvaluacionGeomorfologica.rows[2][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[2][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][6]))))}</span></td>
      </tr>
  </tbody>
  `

  evaluacionSocial.innerHTML=
  `
  <tbody>
    <tr>
        <th>E</th>
        <th>INUNDACIÓN FLUVIAL</th>
        <th>FLUJOS DE LODOS</th>
        <th>MOVIMIENTOS DE LADERA</th>
        <th>INUNDACIÓN MARINA</th>
        <th>P</th>
        <th>F</th>
        <th>ExPxF</th>
        <th>PxF</th>
    </tr>
    <tr>
        <td><span style="text-align:center" class="respuestaTabla" >1</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionSocial.rows[0][1]}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionSocial.rows[0][2]}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionSocial.rows[0][3]}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionSocial.rows[0][4]}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >3</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${parseInt(tablaEvaluacionSocial.rows[0][1]) + parseInt(tablaEvaluacionSocial.rows[0][2]) + parseInt(tablaEvaluacionSocial.rows[0][3]) + parseInt(tablaEvaluacionSocial.rows[0][4])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionSocial.rows[0][1]) + parseInt(tablaEvaluacionSocial.rows[0][2]) + parseInt(tablaEvaluacionSocial.rows[0][3]) + parseInt(tablaEvaluacionSocial.rows[0][4])) * 1 * 3}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionSocial.rows[0][1]) + parseInt(tablaEvaluacionSocial.rows[0][2]) + parseInt(tablaEvaluacionSocial.rows[0][3]) + parseInt(tablaEvaluacionSocial.rows[0][4])) * 3}</span></td>
    </tr>
    <tr>
        <td><span style="text-align:center" class="respuestaTabla" >2</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionSocial.rows[1][1]}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionSocial.rows[1][2]}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionSocial.rows[1][3]}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionSocial.rows[1][4]}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >2</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${parseInt(tablaEvaluacionSocial.rows[1][1]) + parseInt(tablaEvaluacionSocial.rows[1][2]) + parseInt(tablaEvaluacionSocial.rows[1][3]) + parseInt(tablaEvaluacionSocial.rows[1][4]) }</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionSocial.rows[1][1]) + parseInt(tablaEvaluacionSocial.rows[1][2]) + parseInt(tablaEvaluacionSocial.rows[1][3]) + parseInt(tablaEvaluacionSocial.rows[1][4])) * 2 * 2}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionSocial.rows[1][1]) + parseInt(tablaEvaluacionSocial.rows[1][2]) + parseInt(tablaEvaluacionSocial.rows[1][3]) + parseInt(tablaEvaluacionSocial.rows[1][4])) * 2}</span></td>
    </tr>
    <tr>
        <td><span style="text-align:center" class="respuestaTabla" >3</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionSocial.rows[2][1]}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionSocial.rows[2][2]}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionSocial.rows[2][3]}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${tablaEvaluacionSocial.rows[2][4]}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >1</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${parseInt(tablaEvaluacionSocial.rows[2][1]) + parseInt(tablaEvaluacionSocial.rows[2][2]) + parseInt(tablaEvaluacionSocial.rows[2][3]) + parseInt(tablaEvaluacionSocial.rows[2][4])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionSocial.rows[2][1]) + parseInt(tablaEvaluacionSocial.rows[2][2]) + parseInt(tablaEvaluacionSocial.rows[2][3]) + parseInt(tablaEvaluacionSocial.rows[2][4])) * 3 * 1}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionSocial.rows[2][1]) + parseInt(tablaEvaluacionSocial.rows[2][2]) + parseInt(tablaEvaluacionSocial.rows[2][3]) + parseInt(tablaEvaluacionSocial.rows[2][4])) * 1}</span></td>
    </tr>
    <tr>
        <td style="background:#afafaf"></td>
        <td style="background:#afafaf"></td>
        <td style="background:#afafaf"></td>
        <td style="background:#afafaf"></td>
        <td><span style="font-weight:bold" class="respuestaTabla">TOTAL</span></td>
        <td style="background:#afafaf"></td>
        <td style="background:#afafaf"></td>
        <td><span style="text-align:center;font-weight:bold" class="respuestaTabla">${parseInt(((parseInt(tablaEvaluacionSocial.rows[0][1]) + parseInt(tablaEvaluacionSocial.rows[0][2]) + parseInt(tablaEvaluacionSocial.rows[0][3]) + parseInt(tablaEvaluacionSocial.rows[0][4])) * 1 * 3)+((parseInt(tablaEvaluacionSocial.rows[1][1]) + parseInt(tablaEvaluacionSocial.rows[1][2]) + parseInt(tablaEvaluacionSocial.rows[1][3]) + parseInt(tablaEvaluacionSocial.rows[1][4])) * 2 * 2)+((parseInt(tablaEvaluacionSocial.rows[2][1]) + parseInt(tablaEvaluacionSocial.rows[2][2]) + parseInt(tablaEvaluacionSocial.rows[2][3]) + parseInt(tablaEvaluacionSocial.rows[2][4])) * 3 * 1))}</span></td>
        <td><span style="text-align:center;font-weight:bold" class="respuestaTabla">${parseInt(((parseInt(tablaEvaluacionSocial.rows[0][1]) + parseInt(tablaEvaluacionSocial.rows[0][2]) + parseInt(tablaEvaluacionSocial.rows[0][3]) + parseInt(tablaEvaluacionSocial.rows[0][4])) * 3)+((parseInt(tablaEvaluacionSocial.rows[1][1]) + parseInt(tablaEvaluacionSocial.rows[1][2]) + parseInt(tablaEvaluacionSocial.rows[1][3]) + parseInt(tablaEvaluacionSocial.rows[1][4])) * 2)+((parseInt(tablaEvaluacionSocial.rows[2][1]) + parseInt(tablaEvaluacionSocial.rows[2][2]) + parseInt(tablaEvaluacionSocial.rows[2][3]) + parseInt(tablaEvaluacionSocial.rows[2][4])) * 1))}</span></td>
    </tr>
  </tbody>
  `

  evaluacionFisica.innerHTML =
  `
  <tbody>
    <tr>
        <th>E</th>
        <th>ANTE INUNDACIONES</th>
        <th>ANTE DESLIZAMIENTOS Y FALLAS DE TALUD</th>
        <th>ANTE VIENTOS</th>
        <th>ESTRUCTURAL</th>
        <th>SEGURIDAD</th>
        <th>P</th>
        <th>F</th>
        <th>ExPxF</th>
        <th>PxF</th>
    </tr>
    <tr>
        <td><span style="text-align:center" class="respuestaTabla" >1</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionFisica.rows[0][1])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionFisica.rows[0][2])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionFisica.rows[0][3])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionFisica.rows[0][4])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionFisica.rows[0][5])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >3</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${parseInt(tablaEvaluacionFisica.rows[0][1]) + parseInt(tablaEvaluacionFisica.rows[0][2]) + parseInt(tablaEvaluacionFisica.rows[0][3]) + parseInt(tablaEvaluacionFisica.rows[0][4]) + parseInt(tablaEvaluacionFisica.rows[0][5])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionFisica.rows[0][1]) + parseInt(tablaEvaluacionFisica.rows[0][2]) + parseInt(tablaEvaluacionFisica.rows[0][3]) + parseInt(tablaEvaluacionFisica.rows[0][4]) + parseInt(tablaEvaluacionFisica.rows[0][5])) * 3 * 1}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionFisica.rows[0][1]) + parseInt(tablaEvaluacionFisica.rows[0][2]) + parseInt(tablaEvaluacionFisica.rows[0][3]) + parseInt(tablaEvaluacionFisica.rows[0][4]) + parseInt(tablaEvaluacionFisica.rows[0][5])) * 3 }</span></td>
    </tr>
    <tr>
        <td><span style="text-align:center" class="respuestaTabla" >2</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionFisica.rows[1][1])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionFisica.rows[1][2])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionFisica.rows[1][3])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionFisica.rows[1][4])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionFisica.rows[1][5])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >2</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${parseInt(tablaEvaluacionFisica.rows[1][1]) + parseInt(tablaEvaluacionFisica.rows[1][2]) + parseInt(tablaEvaluacionFisica.rows[1][3]) + parseInt(tablaEvaluacionFisica.rows[1][4]) + parseInt(tablaEvaluacionFisica.rows[1][5])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionFisica.rows[1][1]) + parseInt(tablaEvaluacionFisica.rows[1][2]) + parseInt(tablaEvaluacionFisica.rows[1][3]) + parseInt(tablaEvaluacionFisica.rows[1][4]) + parseInt(tablaEvaluacionFisica.rows[1][5])) * 2 * 2}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionFisica.rows[1][1]) + parseInt(tablaEvaluacionFisica.rows[1][2]) + parseInt(tablaEvaluacionFisica.rows[1][3]) + parseInt(tablaEvaluacionFisica.rows[1][4]) + parseInt(tablaEvaluacionFisica.rows[1][5])) * 2}</span></td>
    </tr>
    <tr>
        <td><span style="text-align:center" class="respuestaTabla" >3</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionFisica.rows[2][1])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionFisica.rows[2][2])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionFisica.rows[2][3])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionFisica.rows[2][4])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionFisica.rows[2][5])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >1</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${parseInt(tablaEvaluacionFisica.rows[2][1]) + parseInt(tablaEvaluacionFisica.rows[2][2]) + parseInt(tablaEvaluacionFisica.rows[2][3]) + parseInt(tablaEvaluacionFisica.rows[2][4]) + parseInt(tablaEvaluacionFisica.rows[2][5])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionFisica.rows[2][1]) + parseInt(tablaEvaluacionFisica.rows[2][2]) + parseInt(tablaEvaluacionFisica.rows[2][3]) + parseInt(tablaEvaluacionFisica.rows[2][4]) + parseInt(tablaEvaluacionFisica.rows[2][5])) * 3 * 1}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionFisica.rows[2][1]) + parseInt(tablaEvaluacionFisica.rows[2][2]) + parseInt(tablaEvaluacionFisica.rows[2][3]) + parseInt(tablaEvaluacionFisica.rows[2][4]) + parseInt(tablaEvaluacionFisica.rows[2][5])) * 1}</span></td>
    </tr>
    <tr>
        <td style="background:#afafaf"></td>
        <td style="background:#afafaf"></td>
        <td style="background:#afafaf"></td>
        <td style="background:#afafaf"></td>
        <td style="background:#afafaf"></td>
        <td><span style="font-weight:bold" class="respuestaTabla">TOTAL</span></td>
        <td style="background:#afafaf"></td>
        <td style="background:#afafaf"></td>
        <td><span style="text-align:center;font-weight:bold" class="respuestaTabla">${parseInt(((parseInt(tablaEvaluacionFisica.rows[0][1]) + parseInt(tablaEvaluacionFisica.rows[0][2]) + parseInt(tablaEvaluacionFisica.rows[0][3]) + parseInt(tablaEvaluacionFisica.rows[0][4]) + parseInt(tablaEvaluacionFisica.rows[0][5])) * 3 * 1)+((parseInt(tablaEvaluacionFisica.rows[1][1]) + parseInt(tablaEvaluacionFisica.rows[1][2]) + parseInt(tablaEvaluacionFisica.rows[1][3]) + parseInt(tablaEvaluacionFisica.rows[1][4]) + parseInt(tablaEvaluacionFisica.rows[1][5])) * 2 * 2)+((parseInt(tablaEvaluacionFisica.rows[2][1]) + parseInt(tablaEvaluacionFisica.rows[2][2]) + parseInt(tablaEvaluacionFisica.rows[2][3]) + parseInt(tablaEvaluacionFisica.rows[2][4]) + parseInt(tablaEvaluacionFisica.rows[2][5])) * 3 * 1))}</span></td>
        <td><span style="text-align:center;font-weight:bold" class="respuestaTabla">${parseInt(((parseInt(tablaEvaluacionFisica.rows[0][1]) + parseInt(tablaEvaluacionFisica.rows[0][2]) + parseInt(tablaEvaluacionFisica.rows[0][3]) + parseInt(tablaEvaluacionFisica.rows[0][4]) + parseInt(tablaEvaluacionFisica.rows[0][5])) * 3 )+((parseInt(tablaEvaluacionFisica.rows[1][1]) + parseInt(tablaEvaluacionFisica.rows[1][2]) + parseInt(tablaEvaluacionFisica.rows[1][3]) + parseInt(tablaEvaluacionFisica.rows[1][4]) + parseInt(tablaEvaluacionFisica.rows[1][5])) * 2)+((parseInt(tablaEvaluacionFisica.rows[2][1]) + parseInt(tablaEvaluacionFisica.rows[2][2]) + parseInt(tablaEvaluacionFisica.rows[2][3]) + parseInt(tablaEvaluacionFisica.rows[2][4]) + parseInt(tablaEvaluacionFisica.rows[2][5])) * 1))}</span></td>
    </tr>
  </tbody>
  `

  evaluacionInstitucional.innerHTML =
  `
  <tbody>
    <tr>
        <th>E</th>
        <th>CONFLICTOS TERRITORIALES</th>
        <th>SEGURIDAD CIUDADANA</th>
        <th>MARCO JURÍDICO</th>
        <th>P</th>
        <th>F</th>
        <th>ExPxF</th>
        <th>PxF</th>
    </tr>
    <tr>
        <td><span style="text-align:center" class="respuestaTabla" >1</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionInstitucional.rows[0][1])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionInstitucional.rows[0][2])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionInstitucional.rows[0][3])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >3</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${parseInt(tablaEvaluacionInstitucional.rows[0][1]) + parseInt(tablaEvaluacionInstitucional.rows[0][2]) + parseInt(tablaEvaluacionInstitucional.rows[0][3])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionInstitucional.rows[0][1]) + parseInt(tablaEvaluacionInstitucional.rows[0][2]) + parseInt(tablaEvaluacionInstitucional.rows[0][3])) * 3 * 1}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionInstitucional.rows[0][1]) + parseInt(tablaEvaluacionInstitucional.rows[0][2]) + parseInt(tablaEvaluacionInstitucional.rows[0][3])) * 3}</span></td>
    </tr>
    <tr>
        <td><span style="text-align:center" class="respuestaTabla" >2</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionInstitucional.rows[1][1])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionInstitucional.rows[1][2])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionInstitucional.rows[1][3])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >2</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${parseInt(tablaEvaluacionInstitucional.rows[1][1]) + parseInt(tablaEvaluacionInstitucional.rows[1][2]) + parseInt(tablaEvaluacionInstitucional.rows[1][3])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionInstitucional.rows[1][1]) + parseInt(tablaEvaluacionInstitucional.rows[1][2]) + parseInt(tablaEvaluacionInstitucional.rows[1][3])) * 2 * 2}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionInstitucional.rows[1][1]) + parseInt(tablaEvaluacionInstitucional.rows[1][2]) + parseInt(tablaEvaluacionInstitucional.rows[1][3])) * 2}</span></td>
    </tr>
    <tr>
        <td><span style="text-align:center" class="respuestaTabla" >3</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionInstitucional.rows[2][1])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionInstitucional.rows[2][2])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla"  contenteditable="true">${parseInt(tablaEvaluacionInstitucional.rows[2][3])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >1</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${parseInt(tablaEvaluacionInstitucional.rows[2][1]) + parseInt(tablaEvaluacionInstitucional.rows[2][2]) + parseInt(tablaEvaluacionInstitucional.rows[2][3])}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionInstitucional.rows[2][1]) + parseInt(tablaEvaluacionInstitucional.rows[2][2]) + parseInt(tablaEvaluacionInstitucional.rows[2][3])) * 3 * 1}</span></td>
        <td><span style="text-align:center" class="respuestaTabla" >${(parseInt(tablaEvaluacionInstitucional.rows[2][1]) + parseInt(tablaEvaluacionInstitucional.rows[2][2]) + parseInt(tablaEvaluacionInstitucional.rows[2][3]))}</span></td>
    </tr>
    <tr>
        <td style="background:#afafaf"></td>
        <td style="background:#afafaf"></td>
        <td style="background:#afafaf"></td>
        <td><span style="font-weight:bold"class="respuestaTabla">TOTAL</span></td>
        <td style="background:#afafaf"></td>
        <td style="background:#afafaf"></td>
        <td><span style="text-align:center;font-weight:bold" class="respuestaTabla">${parseInt(((parseInt(tablaEvaluacionInstitucional.rows[0][1]) + parseInt(tablaEvaluacionInstitucional.rows[0][2]) + parseInt(tablaEvaluacionInstitucional.rows[0][3])) * 3 * 1)+((parseInt(tablaEvaluacionInstitucional.rows[1][1]) + parseInt(tablaEvaluacionInstitucional.rows[1][2]) + parseInt(tablaEvaluacionInstitucional.rows[1][3])) * 2 * 2)+((parseInt(tablaEvaluacionInstitucional.rows[2][1]) + parseInt(tablaEvaluacionInstitucional.rows[2][2]) + parseInt(tablaEvaluacionInstitucional.rows[2][3])) * 3 * 1))}</span></td>
        <td><span style="text-align:center;font-weight:bold" class="respuestaTabla">${parseInt(((parseInt(tablaEvaluacionInstitucional.rows[0][1]) + parseInt(tablaEvaluacionInstitucional.rows[0][2]) + parseInt(tablaEvaluacionInstitucional.rows[0][3])) * 3)+((parseInt(tablaEvaluacionInstitucional.rows[1][1]) + parseInt(tablaEvaluacionInstitucional.rows[1][2]) + parseInt(tablaEvaluacionInstitucional.rows[1][3])) * 2)+((parseInt(tablaEvaluacionInstitucional.rows[2][1]) + parseInt(tablaEvaluacionInstitucional.rows[2][2]) + parseInt(tablaEvaluacionInstitucional.rows[2][3]))))}</span></td>
    </tr>
  </tbody>
  `


  let a1 = parseInt(((parseInt(tablaEvaluacionGeomorfologica.rows[0][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[0][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][6]))*3*1)+((parseInt(tablaEvaluacionGeomorfologica.rows[1][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[1][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][6]))*2*2)+((parseInt(tablaEvaluacionGeomorfologica.rows[2][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[2][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][6]))*3*1))
  let a2 = parseInt(((parseInt(tablaEvaluacionGeomorfologica.rows[0][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[0][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[0][6]))*3)+((parseInt(tablaEvaluacionGeomorfologica.rows[1][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[1][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[1][6]))*2)+((parseInt(tablaEvaluacionGeomorfologica.rows[2][1]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][2]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][3]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][4])+ parseInt(tablaEvaluacionGeomorfologica.rows[2][5]) + parseInt(tablaEvaluacionGeomorfologica.rows[2][6]))))
  let b1 = parseInt(((parseInt(tablaEvaluacionSocial.rows[0][1]) + parseInt(tablaEvaluacionSocial.rows[0][2]) + parseInt(tablaEvaluacionSocial.rows[0][3]) + parseInt(tablaEvaluacionSocial.rows[0][4])) * 1 * 3)+((parseInt(tablaEvaluacionSocial.rows[1][1]) + parseInt(tablaEvaluacionSocial.rows[1][2]) + parseInt(tablaEvaluacionSocial.rows[1][3]) + parseInt(tablaEvaluacionSocial.rows[1][4])) * 2 * 2)+((parseInt(tablaEvaluacionSocial.rows[2][1]) + parseInt(tablaEvaluacionSocial.rows[2][2]) + parseInt(tablaEvaluacionSocial.rows[2][3]) + parseInt(tablaEvaluacionSocial.rows[2][4])) * 3 * 1))
  let b2 = parseInt(((parseInt(tablaEvaluacionSocial.rows[0][1]) + parseInt(tablaEvaluacionSocial.rows[0][2]) + parseInt(tablaEvaluacionSocial.rows[0][3]) + parseInt(tablaEvaluacionSocial.rows[0][4])) * 3)+((parseInt(tablaEvaluacionSocial.rows[1][1]) + parseInt(tablaEvaluacionSocial.rows[1][2]) + parseInt(tablaEvaluacionSocial.rows[1][3]) + parseInt(tablaEvaluacionSocial.rows[1][4])) * 2)+((parseInt(tablaEvaluacionSocial.rows[2][1]) + parseInt(tablaEvaluacionSocial.rows[2][2]) + parseInt(tablaEvaluacionSocial.rows[2][3]) + parseInt(tablaEvaluacionSocial.rows[2][4])) * 1))
  let c1 = parseInt(((parseInt(tablaEvaluacionFisica.rows[0][1]) + parseInt(tablaEvaluacionFisica.rows[0][2]) + parseInt(tablaEvaluacionFisica.rows[0][3]) + parseInt(tablaEvaluacionFisica.rows[0][4]) + parseInt(tablaEvaluacionFisica.rows[0][5])) * 3 * 1)+((parseInt(tablaEvaluacionFisica.rows[1][1]) + parseInt(tablaEvaluacionFisica.rows[1][2]) + parseInt(tablaEvaluacionFisica.rows[1][3]) + parseInt(tablaEvaluacionFisica.rows[1][4]) + parseInt(tablaEvaluacionFisica.rows[1][5])) * 2 * 2)+((parseInt(tablaEvaluacionFisica.rows[2][1]) + parseInt(tablaEvaluacionFisica.rows[2][2]) + parseInt(tablaEvaluacionFisica.rows[2][3]) + parseInt(tablaEvaluacionFisica.rows[2][4]) + parseInt(tablaEvaluacionFisica.rows[2][5])) * 3 * 1))
  let c2 = parseInt(((parseInt(tablaEvaluacionFisica.rows[0][1]) + parseInt(tablaEvaluacionFisica.rows[0][2]) + parseInt(tablaEvaluacionFisica.rows[0][3]) + parseInt(tablaEvaluacionFisica.rows[0][4]) + parseInt(tablaEvaluacionFisica.rows[0][5])) * 3 )+((parseInt(tablaEvaluacionFisica.rows[1][1]) + parseInt(tablaEvaluacionFisica.rows[1][2]) + parseInt(tablaEvaluacionFisica.rows[1][3]) + parseInt(tablaEvaluacionFisica.rows[1][4]) + parseInt(tablaEvaluacionFisica.rows[1][5])) * 2)+((parseInt(tablaEvaluacionFisica.rows[2][1]) + parseInt(tablaEvaluacionFisica.rows[2][2]) + parseInt(tablaEvaluacionFisica.rows[2][3]) + parseInt(tablaEvaluacionFisica.rows[2][4]) + parseInt(tablaEvaluacionFisica.rows[2][5])) * 1))
  let d1 = parseInt(((parseInt(tablaEvaluacionInstitucional.rows[0][1]) + parseInt(tablaEvaluacionInstitucional.rows[0][2]) + parseInt(tablaEvaluacionInstitucional.rows[0][3])) * 3 * 1)+((parseInt(tablaEvaluacionInstitucional.rows[1][1]) + parseInt(tablaEvaluacionInstitucional.rows[1][2]) + parseInt(tablaEvaluacionInstitucional.rows[1][3])) * 2 * 2)+((parseInt(tablaEvaluacionInstitucional.rows[2][1]) + parseInt(tablaEvaluacionInstitucional.rows[2][2]) + parseInt(tablaEvaluacionInstitucional.rows[2][3])) * 3 * 1))
  let d2 = parseInt(((parseInt(tablaEvaluacionInstitucional.rows[0][1]) + parseInt(tablaEvaluacionInstitucional.rows[0][2]) + parseInt(tablaEvaluacionInstitucional.rows[0][3])) * 3)+((parseInt(tablaEvaluacionInstitucional.rows[1][1]) + parseInt(tablaEvaluacionInstitucional.rows[1][2]) + parseInt(tablaEvaluacionInstitucional.rows[1][3])) * 2)+((parseInt(tablaEvaluacionInstitucional.rows[2][1]) + parseInt(tablaEvaluacionInstitucional.rows[2][2]) + parseInt(tablaEvaluacionInstitucional.rows[2][3]))))

  let diva = parseFloat(a1/a2).toFixed(2)
  let divb = parseFloat(b1/b2).toFixed(2)
  let divc = parseFloat(c1/c2).toFixed(2)
  let divd = parseFloat(d1/d2).toFixed(2)

  let ab = comparacion(diva,divb)
  let cd = comparacion(divc,divd)

  resumenHistograma.innerHTML =
  `
  <tbody>
    <tr>
        <th>COMPONENTES</th>
        <th>VALOR MÁS BAJO</th>
    </tr>
    <tr>
        <td><span class="respuestaTabla">GEOMORFOLOGÍA Y CUENCA</span></td>
        <td><span class="respuestaTabla" style="text-align:center">${diva}</span></td>
    <tr>
    <tr>
        <td><span class="respuestaTabla">AMENAZAS SOCIONATURALES</span></td>
        <td><span class="respuestaTabla" style="text-align:center">${divb}</span></td>
    <tr>
    <tr>
        <td><span class="respuestaTabla" style="font-weight:bold">VALOR MÁS BAJO AMENAZA</span></td>
        <td><span class="respuestaTabla" style="font-weight:bold;text-align:center">${ab}</span></td>
    <tr>
    <tr>
        <td><span class="respuestaTabla">VULNERABILIDAD FÍSICA</span></td>
        <td><span class="respuestaTabla" style="text-align:center">${divc}</span></td>
    <tr>
    <tr>
        <td><span class="respuestaTabla">VULNERABILIDAD INSTITUCIONAL SOCIAL</span></td>
        <td><span class="respuestaTabla" style="text-align:center">${divd}</span></td>
    <tr>
    <tr>
        <td><span class="respuestaTabla" style="font-weight:bold">VALOR MÁS BAJO VULNERABILIDAD</span></td>
        <td><span class="respuestaTabla" style="font-weight:bold;text-align:center">${cd}</span></td>
    <tr>
    <tr>
        <td class="bajada"><span style="font-weight:bold">BALANCE DE RIESGO PROMEDIO</span></td>
        <td><span class="respuestaTabla" style="font-weight:bold;text-align:center">${parseFloat(parseFloat(parseFloat(ab)+parseFloat(cd))/2).toFixed(2)}</span></td>
    <tr>
  </tbody>
  `

  let rblock = document.getElementById('rblock')
  rblock.style.display = 'inline-block'

  detalleHistograma.innerHTML =
  `
  <tbody>
    <tr>
        <th>VALORES</th>
        <th>DESCRIPCIÓN</th>
        <th>VALORACIÓN</th>
    </tr>
    <tr>
        <td><span class="respuestaTabla">Entre 1 y 1.5</span></td>
        <td><span class="respuestaTabla">Significa que el proyecto está en estado alto de riesgo, pudiendo dar lugar a afectaciones  a la calidad de vida de las personas.</span></td>
        <td><span class="respuestaTabla">Se define el proyecto como no elegible en las condiciones en que se presenta.</span></td>
    </tr>
    <tr>
        <td><span class="respuestaTabla">Entre 1.51 y 2.0</span></td>
        <td><span class="respuestaTabla">Significa que el proyecto está en estado de riesgo  crítico, pudiendo dar lugar a afectaciones a la calidad de vida de los usuarios.</span></td>
        <td><span class="respuestaTabla">Se sugiere la búsqueda de una mejor opción tecnológica, de diseño.</span></td>
    </tr>
    <tr>
        <td><span class="respuestaTabla">Entre 2.1 y 2.5</span></td>
        <td><span class="respuestaTabla">Significa que el proyecto presenta un  estado de riesgo  moderado.</span></td>
        <td><span class="respuestaTabla">Se considera esta alternativa del proyecto elegible siempre y cuando no se obtengan calificaciones de (Escala) 1 en algunas  de las variables de los Componentes de Evaluación de Amenazas y Vulnerabilidades.</span></td>
    </tr>
    <tr>
        <td><span class="respuestaTabla">Superiores a 2.51</span></td>
        <td><span class="respuestaTabla">Significa que el proyecto presenta bajos niveles de riesgo.</span></td>
        <td><span class="respuestaTabla">Se considera este proyecto totalmene elegible e idóneo para su desarrollo.</span></td>
    </tr>
  </tbody>
  `
}

  let bloqueados = document.querySelectorAll('.respuestaTabla')


bloqueados.forEach(el => {

    el.addEventListener("click", function () {

        if (el.contentEditable === "true") {
            el.innerHTML = ""
        }
    })

    el.addEventListener("keydown", function(event) {
        // Obtener el código de la tecla presionada
        var keyCode = event.keyCode;
        var ctrlPressed = event.ctrlKey;
      
        // Verificar si la tecla presionada es un número o el número 1
        if ((keyCode === 8 || keyCode === 9 || keyCode === 48 || keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40) || keyCode === 49 || keyCode === 96 || keyCode === 97 ||(ctrlPressed && keyCode === 82)) {
          // Permitir la entrada del número o el número 1
          return true;
        } else {
          // Evitar la entrada de cualquier otro caracter
          event.preventDefault();
          return false;
        }
      });
});


function comparacion(a,b) {
    if (a<b) {
        return a
    } else {
        return b
    }
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
      if (tableId.includes('infoExtraHistograma')) {
          skipRows = 0
  
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
      } if (tableId.includes('resumenHistograma') || tableId.includes('detalleHistograma')) {
          console.log('saltado');
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
      
      
      console.log(tableObject);
      sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
      }
      

  }
  sessionStorage.setItem('coordenadasHistoX', coordenadasHistoX.innerHTML)
  sessionStorage.setItem('coordenadasHistoY', coordenadasHistoY.innerHTML)
  window.location.reload()
}



botonGrabar.addEventListener('click', contarFilas)

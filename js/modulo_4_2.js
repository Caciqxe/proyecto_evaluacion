const botonGrabar = document.getElementById('grabar')
let estructuraComponentes = document.getElementById('estructuraComponentes')
let analisisLocalizacion = document.getElementById('analisisLocalizacion')
let analisisTamano = document.getElementById('analisisTamano')
let analisisAmbiental = document.getElementById('analisisAmbiental')
let analisisRiesgo = document.getElementById('analisisRiesgo')

let numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))
let x = 0

let arrayCobertura = [
    '---',
    'Municipal',
    'Nacional',
    'Departamental',
]

let arrayImpacto = [
    '---',
    'N/A',
    'Bajo',
    'Medio',
    'Alto'
]

let arrayOcurrencia = [
    '---',
    'Baja',
    'Alta'
]

while (x<numAlternativas) {
    let modulo1Info = JSON.parse(sessionStorage.getItem('Modulo1Extra'))
    let detalleComp = JSON.parse(sessionStorage.getItem(`detalleCompAlt_${x+1}`))
    let numComp = sessionStorage.getItem(`Alt_numero_${x+1}`)
    let componentes = parseInt(JSON.parse(numComp).numeroCom)
    let tablaPaso1 = JSON.parse(sessionStorage.getItem(`tablaPaso1_alt${x+1}`))
    let tablaPaso2 = JSON.parse(sessionStorage.getItem(`tablaPaso2_alt${x+1}`))
    let tablaPaso3 = JSON.parse(sessionStorage.getItem(`tablaPaso3_alt${x+1}`))
    let tablaPaso4 = JSON.parse(sessionStorage.getItem(`tablaPaso4_alt${x+1}`))
    let tablaPaso5 = JSON.parse(sessionStorage.getItem(`tablaPaso5_alt${x+1}`))


    if (tablaPaso1 != null) {
        estructuraComponentes.innerHTML +=
        `
        <div id="modulo4Paso1_alt${x+1}">
            <span class="alternativaStilo">ALTERNATIVA N° ${x+1}: ${JSON.parse(numComp).name}</span>
            <div id="paso1_alt${x+1}">
                <table id="tablaPaso1_alt${x+1}">
                    <tbody>
                        <tr>
                            <th colspan="2">NIVELES DE OBJETIVO</th>
                            <th colspan="6">NOMBRE Y DESCRIPCIÓN DE LOS COMPONENTES</th>
                        </tr>
                        <tr>
                            <td class="bajada" colspan="2">OBJETIVO CENTRAL</td>
                            <td colspan="6"><span class= "textInput" contenteditable="true" style="width:99%">${tablaPaso1.rows[0][(tablaPaso1.rows[0].length)-1]}</span></td>
                        </tr>
                    </tbody>
                    <tbody id="bodyPaso1_alt${x+1}">
                        <tr>
                            <td colspan="2" rowspan="${componentes*2}" class="bajada">MEDIOS DIRECTOS /COMPONENTES</td>
                            <td style="width:3cm" colspan="1" rowspan="2" class="bajada">1</td>
                            <td colspan="1" class="bajada" style="width:6cm">Nombre</td>
                            <td colspan="6"><span style="width:15cm" class= "textInput" contenteditable="true">${tablaPaso1.rows[1][(tablaPaso1.rows[1].length)-1]}</span></td>
                        </tr>
                        <tr>
                            <td colspan="1" class="bajada">Descripción</td>
                            <td colspan="6"><span style="width:15cm" class= "textInput" contenteditable="true">${tablaPaso1.rows[2][(tablaPaso1.rows[2].length)-1]}</span></td>    
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        `
        

        let z = 1
        while (z<((tablaPaso1.rows.length-2)/2)) {
            let componente = document.getElementById(`bodyPaso1_alt${x+1}`)
            componente.innerHTML +=
            `
            <tr>
                <td style="width:3cm" colspan="1" rowspan="2" class="bajada">${z+1}</td>
                <td colspan="1" class="bajada" style="width:6cm">Nombre</td>
                <td colspan="6"><span style="width:15cm"class= "textInput" contenteditable="true">${tablaPaso1.rows[(2*z)+1][(tablaPaso1.rows[(2*z)+1].length)-1]}</span></td>
            </tr>
            <tr>
                <td colspan="1" class="bajada">Descripción</td>
                <td colspan="6"><span style="width:15cm"class= "textInput" contenteditable="true">${tablaPaso1.rows[(2*z)+2][(tablaPaso1.rows[(2*z)+2].length)-1]}</span></td>    
            </tr>
            `
            z++
        }
        let y = z
        while (y<componentes) {

            let componente = document.getElementById(`bodyPaso1_alt${x+1}`)
            componente.innerHTML +=
            `
            <tr>
                <td colspan="1" rowspan="2" class="bajada">${y+1}</td>
                <td colspan="1" class="bajada" style="width:6cm">Nombre</td>
                <td colspan="6"><span class= "textInput" contenteditable="true"></span></td>
            </tr>
            <tr>
                <td colspan="1" class="bajada">Descripción</td>
                <td colspan="6"><span class= "textInput" contenteditable="true"></span></td>    
            </tr>
            `
            y++
        }
    } else {
        estructuraComponentes.innerHTML +=
    `
    <div id="modulo4Paso1_alt${x+1}">
        <span class="alternativaStilo">ALTERNATIVA N° ${x+1}: ${JSON.parse(numComp).name}</span>
        <div id="paso1_alt${x+1}">
            <table id="tablaPaso1_alt${x+1}">
                <tbody>
                    <tr>
                        <th colspan="2">NIVELES DE OBJETIVO</th>
                        <th colspan="6">NOMBRE Y DESCRIPCIÓN DE LOS COMPONENTES</th>
                    </tr>
                    <tr>
                        <td class="bajada" colspan="2">OBJETIVO CENTRAL</td>
                        <td colspan="6"><span class= "textInput" contenteditable="true">${modulo1Info.objetivoCentral}</span></td>
                    </tr>
                </tbody>
                <tbody id="bodyPaso1_alt${x+1}">
                    <tr>
                        <td colspan="2" rowspan="${componentes*2}" class="bajada">MEDIOS DIRECTOS /COMPONENTES</td>
                        <td colspan="1" rowspan="2" class="bajada">1</td>
                        <td colspan="1" class="bajada" style="width:6cm">Nombre</td>
                        <td colspan="6"><span style="width:15cm" class= "textInput" contenteditable="true">${detalleComp.rows[0][1]}</span></td>
                    </tr>
                    <tr>
                        <td colspan="1" class="bajada">Descripción</td>
                        <td colspan="6"><span style="width:15cm" class= "textInput" contenteditable="true"></span></td>    
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
    let y=1


    while (y<componentes) {
        let componente = document.getElementById(`bodyPaso1_alt${x+1}`)
        componente.innerHTML +=
        `
        <tr>
            <td colspan="1" rowspan="2" class="bajada">${y+1}</td>
            <td colspan="1" class="bajada" style="width:6cm">Nombre</td>
            <td colspan="6"><span class= "textInput" contenteditable="true">${detalleComp.rows[y][1]}</span></td>
        </tr>
        <tr>
            <td colspan="1" class="bajada">Descripción</td>
            <td colspan="6"><span class= "textInput" contenteditable="true"></span></td>    
        </tr>
        `
        y++
    }
    
    }
    if (tablaPaso2 != null) {
        let l = 0
        analisisLocalizacion.innerHTML +=
        `
        <div id="modulo4Paso2_alt${x+1}">
        <span class="alternativaStilo">ALTERNATIVA N° ${x+1}: ${JSON.parse(numComp).name}</span>
        <div>
            <table id="tablaPaso2_alt${x+1}">
                <tbody id="bodyPaso2_alt${x+1}">
                    <tr>
                        <th>COBERTURA</th>
                        <th>DEPARTAMENTO/MUNICIPIO/ALDEA</th>
                        <th>COORDENADAS UTM-WGS84</th>
                    </tr>
                </tbody>  
                <tr>
                    <td colspan="1" class="bajada" style="width:350px"><span contenteditable="false">JUSTIFICACIÓN DE LA LOCALIZACIÓN Y/O DE LA COBERTURA GEOGRÁFICA:</td>
                    <td colspan="2"><span id="justificacionLocalizacion_alt${x+1}" class= "textInput" contenteditable="true"></td>
                </tr> 
            </table>
            <span><button id=a_bttn_Paso2_alt${x+1} class="agregar">Agregar Actividad</button></span>
            <span><button id=e_bttn_Paso2_alt${x+1} class="eliminar">Eliminar Actividad</button></span>
        </div>
        </div>
        `

        let bodyPaso2 = document.getElementById(`bodyPaso2_alt${x+1}`)
        while (l<tablaPaso2.rows.length) {
            bodyPaso2.innerHTML +=
            `
            <tr>
                <td class="celdaCobertura" style="text-align:center">
                    <span style="display: none;"></span>
                    <select class="dropdownCobertura" style="min-width:300px" value="${tablaPaso2.rows[l][0]}"></select>
                </td>
                <td><span class= "textInput" contenteditable="true">${tablaPaso2.rows[l][1]}</td>
                <td><span class= "textInput" contenteditable="true">${tablaPaso2.rows[l][2]}</td>
            </tr>
            `
            l++
        }

    } else {
        analisisLocalizacion.innerHTML +=
    `
    <div id="modulo4Paso2_alt${x+1}">
        <span class="alternativaStilo">ALTERNATIVA N° ${x+1}: ${JSON.parse(numComp).name}</span>
        <div>
            <table id="tablaPaso2_alt${x+1}">
                <tbody id="bodyPaso2_alt${x+1}">
                    <tr>
                        <th>COBERTURA</th>
                        <th>DEPARTAMENTO/MUNICIPIO/ALDEA</th>
                        <th>COORDENADAS UTM-WGS84</th>
                    </tr>
                    <tr>
                        <td class="celdaCobertura" style="text-align:center">
                            <span style="display: none;"></span>
                            <select style="min-width:300px" class="dropdownCobertura"></select>
                        </td>
                        <td><span class= "textInput" contenteditable="true"></td>
                        <td><span class= "textInput" contenteditable="true"></td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <td colspan="1" class="bajada" style="width:350px"><span contenteditable="false">JUSTIFICACIÓN DE LA LOCALIZACIÓN Y/O DE LA COBERTURA GEOGRÁFICA:</td>
                        <td colspan="2"><span id="justificacionLocalizacion_alt${x+1}" class= "textInput" contenteditable="true"></td>
                    </tr>
                </tbody>
            </table>
            <span><button id=a_bttn_Paso2_alt${x+1} class="agregar">Agregar Actividad</button></span>
            <span><button id=e_bttn_Paso2_alt${x+1} class="eliminar">Eliminar Actividad</button></span>
        </div>
    </div>
    `
    }
    if (tablaPaso3 != null) {
        analisisTamano.innerHTML +=
        `
        <div id="modulo4Paso3_alt${x+1}">
        <span class="alternativaStilo">ALTERNATIVA N° ${x+1}: ${JSON.parse(numComp).name}</span>
            <div>
                <table id="tablaPaso3_alt${x+1}">
                    <tbody id="bodyPaso3_alt${x+1}">
                        <tr>
                            <th style="width:10cm">CONCEPTO</th>
                            <th style="width:10cm">DESCRIPCIÓN </th>
                            <th style="width:4cm">CANTIDAD</th>
                            <th style="width:10cm">OBSERVACIONES</th>
                        </tr>
                        <tr>
                            <td class="bajada"><span >COBERTURA (Número de Beneficiarios primer año y al finalizar la ejecución del proyecto)</span></td>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso3.rows[0][1]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width: 98%">${tablaPaso3.rows[0][2]}</span></td>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso3.rows[0][3]}</span></td>
                        </tr>
                        <tr>
                            <td class="bajada"><span>CAPACIDAD INSTALADA PROPUESTA</span></td>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso3.rows[1][1]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width: 98%">${tablaPaso3.rows[1][2]}</span></td>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso3.rows[1][3]}</span></td>
                        </tr>
                        <tr>
                            <td class="bajada"><span>AMPLIACIÓN DE CAPACIDAD PREVISTA: DIMENSIÓN Y AÑO</span></td>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso3.rows[2][1]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width: 98%">${tablaPaso3.rows[2][2]}</span></td>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso3.rows[2][3]}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        `
    } else {
        analisisTamano.innerHTML +=
        `
        <div id="modulo4Paso3_alt${x+1}">
        <span class="alternativaStilo">ALTERNATIVA N° ${x+1}: ${JSON.parse(numComp).name}</span>
            <div>
                <table id="tablaPaso3_alt${x+1}">
                    <tbody id="bodyPaso3_alt${x+1}">
                        <tr>
                            <th style="width:10cm">CONCEPTO</th>
                            <th style="width:10cm">DESCRIPCIÓN </th>
                            <th style="width:4cm">CANTIDAD</th>
                            <th style="width:10cm">OBSERVACIONES</th>
                        </tr>
                        <tr>
                            <td class="bajada"><span >COBERTURA (Número de Beneficiarios primer año y al finalizar la ejecución del proyecto)</span></td>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width: 98%"></span></td>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                        </tr>
                        <tr>
                            <td class="bajada"><span>CAPACIDAD INSTALADA PROPUESTA</span></td>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width: 98%"></span></td>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                        </tr>
                        <tr>
                            <td class="bajada"><span>AMPLIACIÓN DE CAPACIDAD PREVISTA: DIMENSIÓN Y AÑO</span></td>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width: 98%"></span></td>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        `
    }
    if (tablaPaso4 != null) {
        let l = 0
        analisisAmbiental.innerHTML +=
        `
        <div id="modulo4Paso4_alt${x+1}">
        <span class="alternativaStilo">ALTERNATIVA N° ${x+1}: ${JSON.parse(numComp).name}</span>
            <div>
                <table id="tablaPaso4_alt${x+1}">
                    <tbody id="bodyPaso4_alt${x+1}">
                    <tr>
                        <th style="width:15cm">CATEGORIA IMPACTO AMBIENTAL</th>
                        <th style="width:15cm">DESCRIPCIÓN</th>
                        <th style="width:15cm">NIVEL DE IMPACTO</th>
                        <th style="width:15cm">PROBABILIDAD DE OCURRENCIA</th>
                        <th style="width:15cm">ESTRATÉGIA Y MEDIDAS DE MITIGACIÓN</th>
                    </tr>
                    </tbody>
                </table>
                <span><button id=a_bttn_Paso4_alt${x+1} class="agregar">Agregar Impacto</button></span>
                <span><button id=e_bttn_Paso4_alt${x+1} class="eliminar">Eliminar Impacto</button></span>
            </div>
        </div>
        `
        let bodyPaso4 = document.getElementById(`bodyPaso4_alt${x+1}`)
        while (l<tablaPaso4.rows.length) {
            bodyPaso4.innerHTML +=
            `
            <tr>
                <td><span style="width: 98%"  class= "textInput" contenteditable="true">${tablaPaso4.rows[l][0]}</span></td>
                <td><span class= "textInput" contenteditable="true">${tablaPaso4.rows[l][1]}</span></td>
                <td class="celdaImpacto">
                    <span style="display: none;"></span>
                    <select class="dropdownImpacto" value="${tablaPaso4.rows[l][2]}"></select>
                </td>
                <td class="celdaOcurrencia">
                    <span style="display: none;"></span>
                    <select class="dropdownOcurrencia" value="${tablaPaso4.rows[l][3]}"></select>
                </td>
                <td><span class= "textInput" contenteditable="true">${tablaPaso4.rows[l][4]}</span></td>
            </tr>
            `
            l++
        }

    } else {
        analisisAmbiental.innerHTML +=
        `
        <div id="modulo4Paso4_alt${x+1}">
        <span class="alternativaStilo">ALTERNATIVA N° ${x+1}: ${JSON.parse(numComp).name}</span>
            <div>
                <table id="tablaPaso4_alt${x+1}">
                    <tbody id="bodyPaso4_alt${x+1}">
                        <tr>
                            <th style="width:15cm">CATEGORIA IMPACTO AMBIENTAL</th>
                            <th style="width:15cm">DESCRIPCIÓN</th>
                            <th style="width:15cm">NIVEL DE IMPACTO</th>
                            <th style="width:15cm">PROBABILIDAD DE OCURRENCIA</th>
                            <th style="width:15cm">ESTRATÉGIA Y MEDIDAS DE MITIGACIÓN</th>
                        </tr>
                        <tr>
                            <td><span style="width: 98%" class= "textInput" contenteditable="true"></span></td>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                            <td class="celdaImpacto">
                                <span style="display: none;"></span>
                                <select class="dropdownImpacto"></select>
                            </td>
                            <td class="celdaOcurrencia">
                                <span style="display: none;"></span>
                                <select class="dropdownOcurrencia"></select>
                            </td>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                        </tr>
                    </tbody>
                </table>
                <span><button id=a_bttn_Paso4_alt${x+1} class="agregar">Agregar Actividad</button></span>
                <span><button id=e_bttn_Paso4_alt${x+1} class="eliminar">Eliminar Actividad</button></span>
            </div>
        </div>
        `
    }
    if (tablaPaso5 != null) {
        analisisRiesgo.innerHTML +=
        `
        <div id="modulo4Paso5_alt${x+1}">
        <span class="alternativaStilo">ALTERNATIVA N° ${x+1}: ${JSON.parse(numComp).name}</span>
            <div>
                <table id="tablaPaso5_alt${x+1}">
                    <tbody id="bodyPaso5_alt${x+1}">
                        <tr>
                            <th colspan="1" rowspan="2" style="width:200px">PROBABILIDAD DE FRECUENCIA</th>
                            <th colspan="1" rowspan="2">RIESGO</th>
                            <th colspan="3" rowspan="1">NIVEL DE IMPACTO</th>
                            <th colspan="1" rowspan="2" style="width:500px">ESTRATEGIA DE MITIGACION O ADMINISTRACION DE RIESGOS</th>
                        </tr>
                        <tr>
                            <th style="width:75px">BAJO</th>
                            <th style="width:75px">MEDIO</th>
                            <th style="width:75px">ALTO</th>
                        </tr>
                        <tr>
                            <td class="bajada" rowspan="7">ALTA</td>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[0][1]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[0][2]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[0][3]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[0][4]}</span></td>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[0][5]}</span></td>
                        </tr>
                        <tr>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[1][0]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[1][1]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[1][2]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[1][3]}</span></td>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[1][4]}</span></td>
                        </tr>
                        <tr>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[2][0]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[2][1]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[2][2]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[2][3]}</span></td>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[2][4]}</span></td>
                        </tr>
                        <tr>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[3][0]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[3][1]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[3][2]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[3][3]}</span></td>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[3][4]}</span></td>
                        </tr>
                        <tr>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[4][0]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[4][1]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[4][2]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[4][3]}</span></td>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[4][4]}</span></td>
                        </tr>
                        <tr>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[5][0]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[5][1]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[5][2]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[5][3]}</span></td>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[5][4]}</span></td>
                        </tr>
                        <tr>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[6][0]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[6][1]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[6][2]}</span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[6][3]}</span></td>
                            <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[6][4]}</span></td>
                        </tr>
                        <tr>
                        <td class="bajada" rowspan="7">MEDIA</td>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[7][1]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[7][2]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[7][3]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[7][4]}</span></td>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[7][5]}</span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[8][0]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[8][1]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[8][2]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[8][3]}</span></td>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[8][4]}</span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[9][0]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[9][1]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[9][2]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[9][3]}</span></td>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[9][4]}</span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[10][0]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[10][1]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[10][2]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[10][3]}</span></td>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[10][4]}</span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[11][0]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[11][1]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[11][2]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[11][3]}</span></td>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[11][4]}</span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[12][0]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[12][1]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[12][2]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[12][3]}</span></td>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[12][4]}</span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[13][0]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[13][1]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[13][2]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf">${tablaPaso5.rows[13][3]}</span></td>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[13][4]}</span></td>
                    </tr>
                    <tr>
                        <td class="bajada" rowspan="7">BAJO</td>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[14][1]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[14][2]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[14][3]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[14][4]}</span></td>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[14][5]}</span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[15][0]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[15][1]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[15][2]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[15][3]}</span></td>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[15][4]}</span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[16][0]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[16][1]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[16][2]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[16][3]}</span></td>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[16][4]}</span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[17][0]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[17][1]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[17][2]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[17][3]}</span></td>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[17][4]}</span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[18][0]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[18][1]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[18][2]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[18][3]}</span></td>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[18][4]}</span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[19][0]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[19][1]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[19][2]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[19][3]}</span></td>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[19][4]}</span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[20][0]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[20][1]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[20][2]}</span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ">${tablaPaso5.rows[20][3]}</span></td>
                        <td><span class= "textInput" contenteditable="true">${tablaPaso5.rows[20][4]}</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        `
    } else {
        analisisRiesgo.innerHTML +=
        `
        <div id="modulo4Paso5_alt${x+1}">
        <span class="alternativaStilo">ALTERNATIVA N° ${x+1}: ${JSON.parse(numComp).name}</span>
            <div>
                <table id="tablaPaso5_alt${x+1}">
                    <tbody id="bodyPaso5_alt${x+1}">
                        <tr>
                            <th colspan="1" rowspan="2" style="width:200px">PROBABILIDAD DE FRECUENCIA</th>
                            <th colspan="1" rowspan="2">RIESGO</th>
                            <th colspan="3" rowspan="1">NIVEL DE IMPACTO</th>
                            <th colspan="1" rowspan="2" style="width:500px">ESTRATEGIA DE MITIGACION O ADMINISTRACION DE RIESGOS</th>
                        </tr>
                        <tr>
                            <th style="width:75px">BAJO</th>
                            <th style="width:75px">MEDIO</th>
                            <th style="width:75px">ALTO</th>
                        </tr>
                        <tr>
                            <td class="bajada" rowspan="7">ALTA</td>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                        </tr>
                        <tr>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                        </tr>
                        <tr>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                        </tr>
                        <tr>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                        </tr>
                        <tr>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                        </tr>
                        <tr>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                        </tr>
                        <tr>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                            <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                            <td><span class= "textInput" contenteditable="true"></span></td>
                        </tr>
                        <tr>
                        <td class="bajada" rowspan="7">MEDIA</td>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% ;background-color:#d6afaf"></span></td>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                    </tr>
                    <tr>
                        <td class="bajada" rowspan="7">BAJO</td>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                    </tr>
                    <tr>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true" style="text-align:center; width:96% "></span></td>
                        <td><span class= "textInput" contenteditable="true"></span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        `
    }

    x++
}

const agregarFila = (event) => {
    if (event.target.classList.contains('agregar'))
    {

    let table = event.srcElement.id.toString()
    let table_id = event.srcElement.id.toString()
    let id_loc = table.replace('a_bttn_','body')
    table = document.getElementById(`${id_loc}`)
    var rowCount = table.rows.length;

    if (table_id.includes('Paso4')) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);
        var cell4 = row.insertCell(-1);
        var cell5 = row.insertCell(-1);

        cell1.innerHTML = `<span class= "textInput" contenteditable="true"></span>`;
        cell2.innerHTML = `<span class= "textInput" contenteditable="true"></span>`;

        cell3.className = "celdaImpacto"
        cell3.innerHTML = 
        `
        <span style="display: none;"></span>
        <select class="dropdownImpacto"></select>
        `;

        cell4.className = "celdaOcurrencia"
        cell4.innerHTML = 
        `
        <span style="display: none;"></span>
        <select class="dropdownOcurrencia"></select>
        `;

        cell5.innerHTML = `<span class= "textInput" contenteditable="true"></span>`;
    
    
        crearOpcionesImpacto(row)
        crearOpcionesOcurrencia(row)

    } else if (table_id.includes('Paso2')) {
        var row = table.insertRow(-1)
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);
        
        cell1.className = "celdaCobertura"
        cell1.innerHTML = 
        `
        <span style="display: none;"></span>
        <select class="dropdownCobertura"></select>
        `;
        
        cell2.innerHTML = `<span class= "textInput" contenteditable="true"></span>`;
        cell3.innerHTML = `<span class= "textInput" contenteditable="true"></span>`;

        crearOpcionesCobertura(row)
    } else {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);
        
        cell1.innerHTML = `<span class= "textInput" contenteditable="true"></span>`;
        cell2.innerHTML = `<span class= "textInput" contenteditable="true"></span>`;
        cell3.innerHTML = `<span class= "textInput" contenteditable="true"></span>`;
    
    }

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

function crearOpcionesCobertura(fila) {
    var dropdownCell = fila.querySelector('.celdaCobertura');
    var dropdown = dropdownCell.querySelector('.dropdownCobertura');

    arrayCobertura.forEach(function (value, index) {
        var option = document.createElement('option');
        option.value = index;
        option.text = value;

        dropdown.appendChild(option);
    });

    dropdown.onchange = function() {
        console.log(dropdown.value);
        let valor = arrayCobertura[dropdown.value]
        //valor = arrayCobertura[dropdown.innerHTML];
        console.log(valor);
    }

    dropdown.style.maxHeight = '100px';
}

function crearOpcionesImpacto(fila) {
    var dropdownCell = fila.querySelector('.celdaImpacto');
    var dropdown = dropdownCell.querySelector('.dropdownImpacto');

    arrayImpacto.forEach(function (value, index) {
        var option = document.createElement('option');
        option.value = index;
        option.text = value;

        dropdown.appendChild(option);
    });

    dropdown.onchange = function() {
        console.log(dropdown.value);
        let valor = arrayImpacto[dropdown.value]
        //valor = arrayImpacto[dropdown.innerHTML];
        console.log(valor);
    }

    dropdown.style.maxHeight = '100px';
}

function crearOpcionesOcurrencia(fila) {
    var dropdownCell = fila.querySelector('.celdaOcurrencia');
    var dropdown = dropdownCell.querySelector('.dropdownOcurrencia');

    arrayOcurrencia.forEach(function (value, index) {
        var option = document.createElement('option');
        option.value = index;
        option.text = value;

        dropdown.appendChild(option);
    });

    dropdown.onchange = function() {
        console.log(dropdown.value);
        let valor = arrayOcurrencia[dropdown.value]
        //valor = arrayOcurrencia[dropdown.innerHTML];
        console.log(valor);
    }

    dropdown.style.maxHeight = '100px';
}


function contarFilas() {

        const tables = document.getElementsByTagName('table');


        for (let i = 0; i < tables.length; i++) {
            const table = tables[i];
            const rows = table.rows;
            const tableData = [];
    
            let tableId = table.id
    
            let skipRows = 0
            tableId = tableId.toString()
            if (tableId.includes('Paso1')) {
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
            } else if (tableId.includes('Paso2')) {
                skipRows = 1
        
                for (let j = skipRows; j < rows.length; j++) {
                    const rowData = [];
                    const cells = rows[j].cells;

                    if (j === rows.length-1) {
                        
                    } else {
                        for (let k = 0; k < cells.length; k++) {
    
                            if (k===0) {
                                const dropdown = cells[k].querySelector('.dropdownCobertura');
                                const selectedIndex = dropdown.selectedIndex
                                console.log(selectedIndex);
                                rowData.push(selectedIndex)
                            } else {
                                const cellData = cells[k].innerText.trim();
                                rowData.push(cellData);
                            }
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
            } else if (tableId.includes('Paso3')) {
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
            } else if (tableId.includes('Paso4')) {
                skipRows = 1
        
                for (let j = skipRows; j < rows.length; j++) {
                    const rowData = [];
                    const cells = rows[j].cells;
        
                
                    for (let k = 0; k < cells.length; k++) {
    
                        if (k===2) {
                            const dropdown = cells[k].querySelector('.dropdownImpacto');
                            const selectedIndex = dropdown.selectedIndex
                            console.log(selectedIndex);
                            rowData.push(selectedIndex)
                        } else if (k===3) {
                            const dropdown = cells[k].querySelector('.dropdownOcurrencia');
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
            } else if (tableId.includes('Paso5')) {
                skipRows = 2
        
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

}

botonGrabar.addEventListener('click', contarFilas)
window.addEventListener('click', agregarFila)
window.addEventListener('click', eliminarFila)
window.addEventListener('DOMContentLoaded', function () {
    var dropdownCell = document.querySelectorAll('.celdaCobertura');

    dropdownCell.forEach(function(cell) {
    var dropdown = cell.querySelector('.dropdownCobertura');


    if (dropdown.attributes['value'] === undefined) {
            // Crea las opciones del dropdown basado en el array
    arrayCobertura.forEach(function(value, index) {
        var option = document.createElement('option');
        option.value = index;
        option.text = value;
  
        // Si el valor actual es el valor predeterminado, establecer como seleccionado
  
        dropdown.appendChild(option);
      });
  
    } else {
        let valorPredeterminado = dropdown.attributes['value'].value
        console.log(valorPredeterminado);
        arrayCobertura.forEach(function(value, index) {
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
        let valor = arrayCobertura[dropdown.value]
        //valor = arrayCobertura[dropdown.innerHTML];
        console.log(valor);
    }
    dropdown.style.maxHeight = '100px';
})
})

window.addEventListener('DOMContentLoaded', function () {
    var dropdownCell = document.querySelectorAll('.celdaImpacto');

    dropdownCell.forEach(function(cell) {
    var dropdown = cell.querySelector('.dropdownImpacto');


    if (dropdown.attributes['value'] === undefined) {
            // Crea las opciones del dropdown basado en el array
    arrayImpacto.forEach(function(value, index) {
        var option = document.createElement('option');
        option.value = index;
        option.text = value;
  
        // Si el valor actual es el valor predeterminado, establecer como seleccionado
  
        dropdown.appendChild(option);
      });
  
    } else {
        let valorPredeterminado = dropdown.attributes['value'].value
        console.log(valorPredeterminado);
        arrayImpacto.forEach(function(value, index) {
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
        let valor = arrayImpacto[dropdown.value]
        //valor = arrayImpacto[dropdown.innerHTML];
        console.log(valor);
    }
    dropdown.style.maxHeight = '100px';
})
})

window.addEventListener('DOMContentLoaded', function () {
    var dropdownCell = document.querySelectorAll('.celdaOcurrencia');

    dropdownCell.forEach(function(cell) {
    var dropdown = cell.querySelector('.dropdownOcurrencia');


    if (dropdown.attributes['value'] === undefined) {
            // Crea las opciones del dropdown basado en el array
    arrayOcurrencia.forEach(function(value, index) {
        var option = document.createElement('option');
        option.value = index;
        option.text = value;
  
        // Si el valor actual es el valor predeterminado, establecer como seleccionado
  
        dropdown.appendChild(option);
      });
  
    } else {
        let valorPredeterminado = dropdown.attributes['value'].value
        console.log(valorPredeterminado);
        arrayOcurrencia.forEach(function(value, index) {
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
        let valor = arrayOcurrencia[dropdown.value]
        //valor = arrayOcurrencia[dropdown.innerHTML];
        console.log(valor);
    }
    dropdown.style.maxHeight = '100px';
})
})
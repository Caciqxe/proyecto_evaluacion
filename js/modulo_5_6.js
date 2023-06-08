const botonGrabar = document.getElementById('botonGrabar')
const numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))
const costoBeneficioPrivado = document.getElementById('costoBeneficioPrivado')
const ejecucion = sessionStorage.getItem('ejecucion')


let factoresPrecioPrivado = JSON.parse(sessionStorage.getItem('factoresPrecioPrivado'))
let tasa = parseFloat(parseInt(factoresPrecioPrivado.rows[0][1])/100)

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
    let tablaBeneficioPrivado = JSON.parse(sessionStorage.getItem(`tablaBeneficioPrivadoAlt${x+1}`))
    let tablaComplementariaPrivado = JSON.parse(sessionStorage.getItem(`tablaComplementariaPrivadoAlt${x+1}`))
    let numComp = sessionStorage.getItem(`Alt_numero_${x+1}`)
    let costoInversionPrivadoTablaAnterior = JSON.parse(sessionStorage.getItem(`sumTodoAlt${x+1}`))
    let costoOperacionPrivadoTablaAnterior = JSON.parse(sessionStorage.getItem(`ultimoTotalesAlt${x+1}`))


    if (tablaBeneficioPrivado != null) {
        let tablaCostos = JSON.parse(sessionStorage.getItem(`costosOperacionAlt${x+1}`))
        let horizonte = sessionStorage.getItem('horizonteEvaluacion')
        
        costoBeneficioPrivado.innerHTML +=
        `
        <span class="alternativaStilo">Alternativa N° ${x+1}: ${JSON.parse(numComp).name}</span>
        <table id="tablaBeneficioPrivadoAlt${x+1}" class="tablaModulo5_6">
        <tbody>
            <tr id=header_alt${x+1}>
                <th>DENOMINACIÓN DE BENEFICIO</th>
                <th>UNIDAD DE MEDIDA</th>
                <th>CANTIDAD</th>
                <th>VALOR UNITARIO</th>
                <th>VALOR TOTAL</th>
            </tr>
            <tr id="calificada_alt${x+1}">
            <td><input id=calificadaAlt${x+1} readonly="true" class="respuestaTabla5-6" value="Ahorro Mano de Obra Calificada"></td>
            <td><input style="width:97%;text-align:right" id=unidadCalificadaAlt${x+1} value="${tablaBeneficioPrivado.rows[0][1]}"></td>
            <td><input style="width:97%;text-align:right" id=cantidadCalificadaAlt${x+1} value=${tablaBeneficioPrivado.rows[0][2]}></td>
            <td><input style="width:97%;text-align:right" id=valorUnitarioCalificadaAlt${x+1} value=${tablaBeneficioPrivado.rows[0][3]}></td>
            <td><input style="width:97%;text-align:right" id=valorTotalCalificadaAlt${x+1} readonly=true value=${parseFloat(tablaBeneficioPrivado.rows[0][4]).toFixed(2)}></td>
            </tr>
            <tr id="semiCalificada_alt${x+1}">
                <td><input style="width:97%" id=semiCalificadaAlt${x+1} readonly="true" class="respuestaTabla5-6" value="Ahorro Mano de Obra Semi Calificada"></td>
                <td><input style="width:97%;text-align:right" id=unidadSemiCalificadaAlt${x+1} value="${tablaBeneficioPrivado.rows[1][1]}"></td>
                <td><input style="width:97%;text-align:right" id=cantidadSemiCalificadaAlt${x+1} value=${tablaBeneficioPrivado.rows[1][2]}></td>
                <td><input style="width:97%;text-align:right" id=valorUnitarioSemiCalificadaAlt${x+1} value=${tablaBeneficioPrivado.rows[1][3]}></td>
                <td><input style="width:97%;text-align:right" id=valorTotalSemiCalificadaAlt${x+1} readonly=true value=${parseFloat(tablaBeneficioPrivado.rows[1][4]).toFixed(2)}></td>
            </tr>
            <tr id="noCalificada_alt${x+1}">
                <td><input style="width:97%" id=noCalificadaAlt${x+1} readonly="true" class="respuestaTabla5-6" value="Ahorro Mano de Obra No Calificada"></td>
                <td><input style="width:97%;text-align:right" id=unidadANoCalificadaAlt${x+1} value=${tablaBeneficioPrivado.rows[2][1]}></td>
                <td><input style="width:97%;text-align:right" id=cantidadANoCalificadaAlt${x+1} value=${tablaBeneficioPrivado.rows[2][2]}></td>
                <td><input style="width:97%;text-align:right" id=valorUnitarioANoCalificadaAlt${x+1} value=${tablaBeneficioPrivado.rows[2][3]}></td>
                <td><input style="width:97%;text-align:right" id=valorTotalANoCalificadaAlt${x+1} readonly=true value=${parseFloat(tablaBeneficioPrivado.rows[2][4]).toFixed(2)}></td>
            </tr>
        </tbody>
    </table>
    
    <button id="a_bttn_tablaBeneficioPrivadoAlt${x+1}" class="agregar">Agregar Fila</button>
    <button id="e_bttn_tablaBeneficioPrivadoAlt${x+1}" class="eliminar">Eliminar Fila</button>
    <table id="tablaComplementariaPrivadoAlt${x+1}" class="tablaModulo5_6">
        <tbody>
            <tr id="periodosAlt${x+1}">
                <th></th>
                <th>Valor Total</th>
            </tr>
            <tr id="beneficioTotal${x+1}">
                <td class="bajada"><span>BENEFICIOS TOTALES</span></td>
                <td class="respuestaTabla5-6" style="text-align:right" id="beneficioTotalAlt${x+1}0"><span>0</span></td>
            </tr>
            <tr id="costosDirectos${x+1}">
                <td class="bajada"><span>COSTOS DIRECTOS (INVERSIÓN Y OPERACIÓN)</span></td>
                <td class="respuestaTabla5-6" style="text-align:right" id="costosDirectosAlt${x+1}0"><span>0</span></td>
            </tr>
            <tr id="costosAsociados${x+1}">
                <td class="bajada"><span>COSTOS ASOCIADOS (DE LOS BENEFICIARIOS)</span></td>
                <td class="respuestaTabla5-6" style="text-align:right" id="costosAsociadosAlt${x+1}0"><span contenteditable="true">0</span></td>
            </tr>
            <tr id="costoProyecto${x+1}">
                <td class="bajada"><span>TOTAL COSTOS DEL PROYECTO</span></td>
                <td class="respuestaTabla5-6" style="text-align:right" id="costoProyectoAlt${x+1}0"><span>0</span></td>
            </tr>
            <tr id="flujoNetos${x+1}">
            <td class="bajada"><span>FLUJO NETO DE FONDOS</span></td>
            <td class="respuestaTabla5-6" style="text-align:right" id="flujoNetosAlt${x+1}0"><span>0</span></td>
        </tr>
        </tbody>
    </table>
    <table id="tablaIndicadoresCostoBeneficioPrivadoAlt${x+1}">
        <tbody>
            <tr>
                <td class="bajada">TASA DE OPORTUNIDAD (TASA PRIVADA DE DESCUENTO)</td>
                <td><span class="respuestaTabla5-6" style="text-align:right">${parseInt(tasa*100).toFixed(2)}</span></td>
            </tr>
            <tr>
                <td class="bajada">VAN</td>
                <td><span id="vanAlt${x+1}" class="respuestaTabla5-6" style="text-align:right">${calcularVPN((tablaComplementariaPrivado.rows[4][2]), tablaComplementariaPrivado.rows[4], tasa).toFixed(2)}</span></td>
            </tr>
            <tr>
                <td class="bajada">VALOR PRESENTE DE LOS BENEFICIOS</td>
                <td><span id="vanBeneficioAlt${x+1}" class="respuestaTabla5-6" style="text-align:right">${calcularVPN((tablaComplementariaPrivado.rows[0][2]), tablaComplementariaPrivado.rows[0], tasa).toFixed(2)}</span></td>
            </tr>
            <tr>
                <td class="bajada">VALOR PRESENTE DE LOS COSTOS</td>
                <td><span id="vanCostosAlt${x+1}" class="respuestaTabla5-6" style="text-align:right">${calcularVPN((tablaComplementariaPrivado.rows[3][2]), tablaComplementariaPrivado.rows[3], tasa).toFixed(2)}</span></td>
            </tr>
            <tr>
                <td class="bajada">RAZON BENEFICIO / COSTO</td>
                <td><span id="razonBeneficioAlt${x+1}" class="respuestaTabla5-6" style="text-align:right"></span></td>
            </tr>
        </tbody>
    </table>
        `
        let vanAlt = document.getElementById(`vanAlt${x+1}`)

        if (parseInt(vanAlt.innerHTML)<0) {
            vanAlt.style = 'color:red; text-align:right'
        }

        let vanBeneficio = document.getElementById(`vanBeneficioAlt${x+1}`)
        let vanCostos = document.getElementById(`vanCostosAlt${x+1}`)
        let razonBeneficio = document.getElementById(`razonBeneficioAlt${x+1}`)

        razonBeneficio.innerHTML = (parseInt(vanBeneficio.innerHTML)/parseInt(vanCostos.innerHTML)).toFixed(2)

        let ultimoTotales = JSON.parse(sessionStorage.getItem(`ultimoTotalesAlt${x+1}`))

        let beneficioTotal0 = document.getElementById(`beneficioTotalAlt${x+1}0`)
        let costosDirectos0 = document.getElementById(`costosDirectosAlt${x+1}0`)
        let costosAsociados0 = document.getElementById(`costosAsociadosAlt${x+1}0`)
        let costoProyecto0 = document.getElementById(`costoProyectoAlt${x+1}0`)
        let flujoNetos0 = document.getElementById(`flujoNetosAlt${x+1}0`)

        let benTotal = 0

        tablaBeneficioPrivado.rows.forEach(el => {
            benTotal += parseInt(el[4])
        });
        
        let costTotal = 0
        
        for (let index = 0; index < ultimoTotales.rows[0].length; index++) {
            if (index<2) {
                
            } else {
                const element = ultimoTotales.rows[0][index];
                
                costTotal+= parseInt(element)
            }
    
        }

        let costAsociadTot = 0 

        for (let index = 0; index < tablaComplementariaPrivado.rows[2].length; index++) {
            if (index<2) {
                
            } else {
                const element = tablaComplementariaPrivado.rows[2][index];
                
                costAsociadTot+= parseInt(element)
            }
    
        }
        
        beneficioTotal0.innerHTML = parseFloat(benTotal).toFixed(2) 
        //costosDirectos0.innerHTML = costTotal
        costosDirectos0.innerHTML = parseFloat(parseInt(costoInversionPrivadoTablaAnterior.rows[1][1]) + parseInt(costoOperacionPrivadoTablaAnterior.rows[0][1])).toFixed(2)
        costosAsociados0.innerHTML = parseFloat(costAsociadTot).toFixed(2)
        costoProyecto0.innerHTML = parseFloat(parseInt(costosDirectos0.innerHTML) + parseInt(costosAsociados0.innerHTML)).toFixed(2)
        flujoNetos0.innerHTML = parseFloat(parseInt(beneficioTotal0.innerHTML) - parseInt(costoProyecto0.innerHTML)).toFixed(2)

        let asd = 3
        let y = 0

          while (asd<tablaBeneficioPrivado.rows.length) {
            let tablaCostosOperacion = document.getElementById(`tablaBeneficioPrivadoAlt${x+1}`)
            let id_loc = `tablaBeneficioPrivadoAlt${x+1}`
            
            id_loc = id_loc.replace('costosOperacion','')
            id_loc = id_loc.toLowerCase()
    
            var rowCountTabla = tablaCostosOperacion.rows.length
            var rowTable = tablaCostosOperacion.insertRow(rowCountTabla)
            var cell1T = rowTable.insertCell(-1)
            var cell2T = rowTable.insertCell(-1)
            var cell3T = rowTable.insertCell(-1)
            var cell4T = rowTable.insertCell(-1)
            var cell5T = rowTable.insertCell(-1)
    

            cell1T.innerHTML = `<input style="width:97%" id=item${rowCountTabla-6}Alt${x+1} value=${tablaBeneficioPrivado.rows[asd][0]}>`
            cell2T.innerHTML = `<input style="width:97%;text-align:right" id=unidadMedida${rowCountTabla-6}Alt${x+1} value=${tablaBeneficioPrivado.rows[asd][1]}>`
            cell3T.innerHTML = `<input style="width:97%;text-align:right" id=cantidad${rowCountTabla-6}Alt${x+1} value=${parseFloat(tablaBeneficioPrivado.rows[asd][2]).toFixed(2)}>`
            cell4T.innerHTML = `<input style="width:97%;text-align:right" id=valorUnitario${rowCountTabla-6}Alt${x+1} value=${tablaBeneficioPrivado.rows[asd][3]}>`
            cell5T.innerHTML = `<input style="width:97%;text-align:right" id=valorTotal${rowCountTabla-6}Alt${x+1} value=${tablaBeneficioPrivado.rows[asd][4]}>`
    
            let array_periodos=[]
            for (let index = 0; index <= horizonte; index++) {
                array_periodos[index] = rowTable.insertCell(-1)
                array_periodos[index].innerHTML = `<td class="bajada"><input style="width:97%" id=input_item${rowCountTabla-5}_alt${x+1}_hor${index} value=${tablaBeneficioPrivado.rows[asd][index+5]} style="text-align:right"></td>`
            }
    
            asd++
        }
    
          while (y<=horizonte) {
            let semiCalificada = document.getElementById(`semiCalificada_alt${x+1}`)
            let calificada = document.getElementById(`calificada_alt${x+1}`)
            let noCalificada = document.getElementById(`noCalificada_alt${x+1}`)
            let cabezera = document.getElementById(`header_alt${x+1}`)
            let periodosCostos = document.getElementById(`periodosAlt${x+1}`)
            let beneficioTotal = document.getElementById(`beneficioTotal${x+1}`)
            let costosDirectos = document.getElementById(`costosDirectos${x+1}`)
            let costosAsociados = document.getElementById(`costosAsociados${x+1}`)
            let costoProyecto = document.getElementById(`costoProyecto${x+1}`)
            let flujoNetos = document.getElementById(`flujoNetos${x+1}`)
            
            
            cabezera.innerHTML += 
            `
            <th id="alt${x+1}_hor${y}">${y}</th>
            `
            semiCalificada.innerHTML +=
            `
            <td><input style="width: 97%;text-align:right" id=semiCalificada_alt${x+1}_hor${y} value=${parseFloat(tablaBeneficioPrivado.rows[1][y+5]).toFixed(2)}></td>
            `
    
            calificada.innerHTML +=
            `
            <td><input style="width: 97%;text-align:right" id=calificada_alt${x+1}_hor${y} value=${parseFloat(tablaBeneficioPrivado.rows[0][y+5]).toFixed(2)}></td>
            `
    
            noCalificada.innerHTML +=
            `
            <td><input style="width: 97%;text-align:right" id=noCalificada_alt${x+1}_hor${y} value=${parseFloat(tablaBeneficioPrivado.rows[2][y+5]).toFixed(2)}></td>
            `
            
            periodosCostos.innerHTML +=
            `
            <th>${y}</td>
            `

            let benTotal = 0

            tablaBeneficioPrivado.rows.forEach(el => {
                benTotal += parseInt(el[y+5])
            });

            beneficioTotal.innerHTML +=
            `
            <td><span class="respuestaTabla5-6" id="beneficioTotal_alt${x+1}_hor${y}" contenteditable="false" style="text-align:right">${parseFloat(benTotal).toFixed(2)}</span></td>
            `
    
/*             costosDirectos.innerHTML +=
            `
            <td><span class="respuestaTabla5-6" id="costosDirectos_alt${x+1}_hor${y}" contenteditable="false" style="text-align:right">${ultimoTotales.rows[0][y+2]}</span></td>
            ` */
            costosDirectos.innerHTML +=
            `
            <td><span class="respuestaTabla5-6" id="costosDirectos_alt${x+1}_hor${y}" contenteditable="false" style="text-align:right">${parseFloat(parseInt(costoInversionPrivadoTablaAnterior.rows[1][y+2])+parseInt(costoOperacionPrivadoTablaAnterior.rows[0][y+2])).toFixed(2)}</span></td>
            `

            costosAsociados.innerHTML +=
            `
            <td><span class="respuestaTabla5-6" id="costosAsociados_alt${x+1}_hor${y}" contenteditable="true" style="text-align:right">${parseFloat(tablaComplementariaPrivado.rows[2][y+2]).toFixed(2)}</span></td>
            `

            let beneficioPeriodo = document.getElementById(`beneficioTotal_alt${x+1}_hor${y}`)
            let costosPeriodo = document.getElementById(`costosDirectos_alt${x+1}_hor${y}`)
            let asociadoPeriodo = document.getElementById(`costosAsociados_alt${x+1}_hor${y}`)

            costoProyecto.innerHTML +=
            `
            <td><span class="respuestaTabla5-6" id="costoProyecto_alt${x+1}_hor${y}" contenteditable="false" style="text-align:right">${parseFloat(parseInt(costosPeriodo.innerHTML) + parseInt(asociadoPeriodo.innerHTML)).toFixed(2)}</span></td>
            `
            flujoNetos.innerHTML +=
            `
            <td><span class="respuestaTabla5-6" id="flujoNetos_alt${x+1}_hor${y}" contenteditable="false" style="text-align:right">${parseFloat(parseInt(beneficioPeriodo.innerHTML) - parseInt(parseInt(costosPeriodo.innerHTML) + parseInt(asociadoPeriodo.innerHTML))).toFixed(2)}</span></td>
            `
            y++
        }

    } else {
        let tablaCostos = JSON.parse(sessionStorage.getItem(`costosOperacionAlt${x+1}`))
        let horizonte = sessionStorage.getItem('horizonteEvaluacion')
        
        costoBeneficioPrivado.innerHTML +=
        `
        <span class="alternativaStilo">Alternativa N° ${x+1}: ${JSON.parse(numComp).name}</span>
        <table id="tablaBeneficioPrivadoAlt${x+1}" class="tablaModulo5_6">
        <tbody>
            <tr id=header_alt${x+1}>
                <th>DENOMINACIÓN DE BENEFICIO</th>
                <th>UNIDAD DE MEDIDA</th>
                <th>CANTIDAD</th>
                <th>VALOR UNITARIO</th>
                <th>VALOR TOTAL</th>
            </tr>
            <tr id="calificada_alt${x+1}">
            <td><input id=calificadaAlt${x+1} readonly="true" class="respuestaTabla5-6" value="Ahorro Mano de Obra Calificada"></td>
            <td><input style="width:97%" id=unidadCalificadaAlt${x+1} value=0></td>
            <td><input style="width:97%" id=cantidadCalificadaAlt${x+1} value=0 style="text-align:right"></td>
            <td><input style="width:97%" id=valorUnitarioCalificadaAlt${x+1} value=0 style="text-align:right"></td>
            <td><input style="width:97%" id=valorTotalCalificadaAlt${x+1} readonly=true value=0 style="text-align:right"></td>
            </tr>
            <tr id="semiCalificada_alt${x+1}">
                <td><input style="width:97%" id=semiCalificadaAlt${x+1} readonly="true" class="respuestaTabla5-6" value="Ahorro Mano de Obra Semi Calificada"></td>
                <td><input style="width:97%" id=unidadSemiCalificadaAlt${x+1} value=0></td>
                <td><input style="width:97%" id=cantidadSemiCalificadaAlt${x+1} value=0 style="text-align:right"></td>
                <td><input style="width:97%" id=valorUnitarioSemiCalificadaAlt${x+1} value=0 style="text-align:right"></td>
                <td><input style="width:97%" id=valorTotalSemiCalificadaAlt${x+1} readonly=true value=0 style="text-align:right"></td>
            </tr>
            <tr id="noCalificada_alt${x+1}">
                <td><input style="width:97%" id=noCalificadaAlt${x+1} readonly="true" class="respuestaTabla5-6" value="Ahorro Mano de Obra No Calificada"></td>
                <td><input style="width:97%" id=unidadANoCalificadaAlt${x+1} value=0></td>
                <td><input style="width:97%" id=cantidadANoCalificadaAlt${x+1} value=0 style="text-align:right"></td>
                <td><input style="width:97%" id=valorUnitarioANoCalificadaAlt${x+1} value=0 style="text-align:right"></td>
                <td><input style="width:97%" id=valorTotalANoCalificadaAlt${x+1} readonly=true value=0 style="text-align:right"></td>
            </tr>
        </tbody>
    </table>
    <button id="a_bttn_tablaBeneficioPrivadoAlt${x+1}" class="agregar">Agregar Fila</button>
    <button id="e_bttn_tablaBeneficioPrivadoAlt${x+1}" class="eliminar">Eliminar Fila</button>
    <table id="tablaComplementariaPrivadoAlt${x+1}" class="tablaModulo5_6">
        <tbody>
            <tr id="periodosAlt${x+1}">
                <th></th>
                <th>Valor Total</th>
            </tr>
            <tr id="beneficioTotal${x+1}">
                <td class="bajada"><span>BENEFICIOS TOTALES</span></td>
                <td><span class="respuestaTabla5-6" style="text-align:right">0</span></td>
            </tr>
            <tr id="costosDirectos${x+1}">
                <td class="bajada"><span>COSTOS DIRECTOS (INVERSIÓN Y OPERACIÓN)</span></td>
                <td><span class="respuestaTabla5-6" style="text-align:right">0</span></td>
            </tr>
            <tr id="costosAsociados${x+1}">
                <td class="bajada"><span>COSTOS ASOCIADOS (DE LOS BENEFICIARIOS)</span></td>
                <td><span class="respuestaTabla5-6" style="text-align:right">0</span></td>
            </tr>
            <tr id="costoProyecto${x+1}">
                <td class="bajada"><span>TOTAL COSTOS DEL PROYECTO</span></td>
                <td><span class="respuestaTabla5-6" style="text-align:right">0</span></td>
            </tr>
            <tr id="flujoNetos${x+1}">
            <td class="bajada"><span>FLUJO NETO DE FONDOS</span></td>
            <td><span class="respuestaTabla5-6" style="text-align:right">0</span></td>
        </tr>
        </tbody>
    </table>
          `
          
          let asd = 3
          let y = 0
    

/*           while (asd<tablaCostos.rows.length) {
            let tablaCostosOperacion = document.getElementById(`tablaBeneficioPrivadoAlt${x+1}`)
            let id_loc = `tablaBeneficioPrivadoAlt${x+1}`
            
            id_loc = id_loc.replace('costosOperacion','')
            id_loc = id_loc.toLowerCase()
    
            var rowCountTabla = tablaCostosOperacion.rows.length
            var rowTable = tablaCostosOperacion.insertRow(rowCountTabla)
            var cell1T = rowTable.insertCell(-1)
            var cell2T = rowTable.insertCell(-1)
            var cell3T = rowTable.insertCell(-1)
            var cell4T = rowTable.insertCell(-1)
            var cell5T = rowTable.insertCell(-1)
    
            cell1T.innerHTML = `<input id=item${rowCountTabla-6}Alt${x+1} value="${tablaCostos.rows[asd][0]}">`
            cell2T.innerHTML = `<input id=unidadMedida${rowCountTabla-6}Alt${x+1} value=0>`
            cell3T.innerHTML = `<input id=cantidad${rowCountTabla-6}Alt${x+1} value=0 style="text-align:right">`
            cell4T.innerHTML = `<input id=valorUnitario${rowCountTabla-6}Alt${x+1} value=0 style="text-align:right">`
            cell5T.innerHTML = `<input id=valorTotal${rowCountTabla-6}Alt${x+1} value=0 style="text-align:right">`
    
            let array_periodos=[]
            for (let index = 0; index <= horizonte; index++) {
                array_periodos[index] = rowTable.insertCell(-1)
                array_periodos[index].innerHTML = `<td class="bajada"><input id=input_item${rowCountTabla-5}_alt${x+1}_hor${index} value=0 style="text-align:right"></td>`
            }
    
            asd++
        } */
    
          while (y<=horizonte) {
            let semiCalificada = document.getElementById(`semiCalificada_alt${x+1}`)
            let calificada = document.getElementById(`calificada_alt${x+1}`)
            let noCalificada = document.getElementById(`noCalificada_alt${x+1}`)
            let cabezera = document.getElementById(`header_alt${x+1}`)
            let periodosCostos = document.getElementById(`periodosAlt${x+1}`)
            let beneficioTotal = document.getElementById(`beneficioTotal${x+1}`)
            let costosDirectos = document.getElementById(`costosDirectos${x+1}`)
            let costosAsociados = document.getElementById(`costosAsociados${x+1}`)
            let costoProyecto = document.getElementById(`costoProyecto${x+1}`)
            let flujoNetos = document.getElementById(`flujoNetos${x+1}`)
            cabezera.innerHTML += 
            `
            <th id="alt${x+1}_hor${y}">${y}</th>
            `
            semiCalificada.innerHTML +=
            `
            <td><input style="width:97%" id=semiCalificada_alt${x+1}_hor${y} value="0" style="text-align:right"></td>
            `
    
            calificada.innerHTML +=
            `
            <td><input style="width:97%" id=calificada_alt${x+1}_hor${y} value=0 style="text-align:right"></td>
            `
    
            noCalificada.innerHTML +=
            `
            <td><input style="width:97%" id=noCalificada_alt${x+1}_hor${y} value=0 style="text-align:right"></td>
            `
            
            periodosCostos.innerHTML +=
            `
            <th>${y}</td>
            `
            beneficioTotal.innerHTML +=
            `
            <td><span class="respuestaTabla5-6" id="beneficioTotal_alt${x+1}_hor${y} contenteditable="false" style="text-align:right">0</span></td>
            `
    
            costosDirectos.innerHTML +=
            `
            <td><span class="respuestaTabla5-6" id="costosDirectos_alt${x+1}_hor${y} contenteditable="false" style="text-align:right">0</span></td>
            `
    
            costosAsociados.innerHTML +=
            `
            <td><span id="costosAsociados_alt${x+1}_hor${y}" class="textInput" contenteditable="true" style="text-align:right">0</span></td>
            `
            costoProyecto.innerHTML +=
            `
            <td><span class="respuestaTabla5-6" id="costoProyecto_alt${x+1}_hor${y} contenteditable="false" style="text-align:right">0</span></td>
            `
            flujoNetos.innerHTML +=
            `
            <td><span class="respuestaTabla5-6" id="flujoNetos_alt${x+1}_hor${y} contenteditable="false" style="text-align:right">0</span></td>
            `
    
    
            y++
        }
    
    }
      x++
}

if (ejecucion == 1) {
    contarFilas2()
}

if (ejecucion == 2) {
    contarFilas3()
}


function calculador(e) {
    let campo = e.srcElement.id.toString()
    if (campo.startsWith('cantidad')) {
        campo = campo.replace('cantidad','')
        let cantReq = document.getElementById(`cantidad${campo}`)
        let costUnit = document.getElementById(`valorUnitario${campo}`)
        let valTotal = document.getElementById(`valorTotal${campo}`)
        
        valTotal.value = parseInt(cantReq.value) * parseInt(costUnit.value)
    
    } if (campo.startsWith('valorUnitario')) {
        campo = campo.replace('valorUnitario','')
        let cantReq = document.getElementById(`cantidad${campo}`)
        let costUnit = document.getElementById(`valorUnitario${campo}`)
        let valTotal = document.getElementById(`valorTotal${campo}`)

        valTotal.value = parseInt(cantReq.value) * parseInt(costUnit.value)
    }
}

function contarFilas() {
        
        sessionStorage.setItem('ejecucion',1)
        const tables = document.getElementsByTagName('table');

        for (let i = 0; i < tables.length; i++) {
            const table = tables[i];
            const rows = table.rows;
            const tableData = [];
    
            let tableId = table.id
    
            let skipRows = 1
            tableId = tableId.toString()
    
            if (tableId.includes('tablaBeneficioPrivadoAlt')) {
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
                }
        
                const tableObject = {
                rows: tableData
            
                };
                
            
        
            sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
            } if (tableId.includes('tablaComplementariaPrivadoAlt')) {
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
            
            } else {

            }
            window.location.reload();
        }
    

}

function contarFilas2() {
        
    sessionStorage.setItem('ejecucion',2)
    const tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id

        let skipRows = 1
        tableId = tableId.toString()

        if (tableId.includes('tablaBeneficioPrivadoAlt')) {
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
            }
    
            const tableObject = {
            rows: tableData
            };
        
    
        sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        } if (tableId.includes('tablaComplementariaPrivadoAlt')) {
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
        
        } else {
            
        }
        window.location.reload();
    }


}

function contarFilas3() {
        
    sessionStorage.setItem('ejecucion',0)
    const tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id

        let skipRows = 1
        tableId = tableId.toString()

        if (tableId.includes('tablaBeneficioPrivadoAlt')) {
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
            }
    
            const tableObject = {
            rows: tableData
            };
        
    
        sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        } if (tableId.includes('tablaComplementariaPrivadoAlt')) {
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
        
        } else {
            
        }
        window.location.reload();
    }


}

function calcularVPN(inversionInicial, flujosCaja, tasaDescuento) {
    let vpn = -inversionInicial;
    
    for (let i = 3; i < flujosCaja.length; i++) {
      vpn += flujosCaja[i] / Math.pow((1 + tasaDescuento), i-2);

    }
    return vpn;
  }

window.addEventListener('change', calculador)
botonGrabar.addEventListener('click', contarFilas)



const agregarFila = (event) => {
    if (event.target.classList.contains('agregar'))
    {
  
    let table = event.srcElement.id.toString()
    let id_loc = table.replace('a_bttn_','')
    table = document.getElementById(`${id_loc}`)
    var rowCount = table.rows.length;
  
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(-1)
    var cell2 = row.insertCell(-1)
    var cell3 = row.insertCell(-1)
    var cell4 = row.insertCell(-1)
    var cell5 = row.insertCell(-1)

  
    cell1.innerHTML = `<input style="width:97%" id=item${rowCount-6}Alt${x+1} value=>`
    cell2.innerHTML = `<input style="width:97%;text-align:right" id=unidadMedida${rowCount-6}Alt${x+1} value=0>`
    cell3.innerHTML = `<input style="width:97%;text-align:right" id=cantidad${rowCount-6}Alt${x+1} value=0>`
    cell4.innerHTML = `<input style="width:97%;text-align:right" id=valorUnitario${rowCount-6}Alt${x+1} value=0.00>`
    cell5.innerHTML = `<input style="width:97%;text-align:right" id=valorTotal${rowCount-6}Alt${x+1} value=0>`

    let horizonte = sessionStorage.getItem('horizonteEvaluacion')

    let array_periodos=[]
    for (let index = 0; index <= horizonte; index++) {
        array_periodos[index] = row.insertCell(-1)
        array_periodos[index].innerHTML = `<td class="bajada"><input style="width:97%;text-align:right" id=input_item${rowCount-5}_alt${x+1}_hor${index} value=0.00></td>`
    }
  
    }
  }
  
  const eliminarFila = (event) =>{
    if (event.target.classList.contains('eliminar')) {
        
        let table = event.srcElement.id.toString()
        table = table.replace('e_bttn_','')
        table = document.getElementById(`${table}`)
        var rowCount = table.rows.length;
        if (rowCount >= 5) {
            table.deleteRow(-1);
        }
    }
  }
  
  window.addEventListener('click', agregarFila)
  window.addEventListener('click', eliminarFila)
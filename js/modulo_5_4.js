let costoEficienciaPrivado = document.getElementById('costoEficienciaPrivado')
let costoEficienciaSocial = document.getElementById('costoEficienciaSocial')
let horizonte = sessionStorage.getItem('horizonteEvaluacion')
let crecimientoPoblacional = JSON.parse(sessionStorage.getItem('tablaCrecimiento'))
let numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))
let factoresPrecioPrivado = JSON.parse(sessionStorage.getItem('factoresPrecioPrivado'))
let botonGrabar = document.getElementById('botonGrabar')

let x = 0
let horizontePrivada = document.getElementById('horizontePrivada')
let horizonteSocial = document.getElementById('horizonteSocial')

horizontePrivada.value = parseInt(horizonte)
horizonteSocial.value = parseInt(horizonte)

window.addEventListener('DOMContentLoaded', function () {
    horizontePrivada.value = parseInt(horizonte)
    horizonteSocial.value = parseInt(horizonte)
})


if (factoresPrecioPrivado != null) {
    let factoresPrecioPrivado = JSON.parse(sessionStorage.getItem('factoresPrecioPrivado'))
    let factoresPrecioSocial = JSON.parse(sessionStorage.getItem('factoresPrecioSocial'))


    while (x<numAlternativas) {
        let costosTotalesPrecioPrivado = JSON.parse(sessionStorage.getItem(`sumTodoAlt${x+1}`))

        let valoresIndicadoresPrivados = JSON.parse(sessionStorage.getItem(`indicadoresPrivadosAlt${x+1}`))
        
        let valoresIndicadoresSociales = JSON.parse(sessionStorage.getItem(`indicadoresSocialesAlt${x+1}`))
        
        let numComp = sessionStorage.getItem(`Alt_numero_${x+1}`)


        costoEficienciaPrivado.innerHTML +=
        `
        <div class="centrar">
            <span class="alternativaStilo">ALTERNATIVA ${x+1}: ${JSON.parse(numComp).name}</span>
        </div>
        <table id="costoPrivadoPeriodoAlt${x+1}" class="costoPrivadoClass">
        </table>
        <table id="indicadoresPrivadosAlt${x+1}">
            <tbody>
                <tr>
                    <td class="bajada"><span>VALOR PRESENTE NETO DE LOS COSTOS:</span></td>
                    <td><span class="respuestaTabla5-4" id="vanPrivadoAlt${x+1}">${valoresIndicadoresPrivados.rows[0][1]}</span></td>
                </tr>
                <tr>
                    <td class="bajada"><span>COSTO ANUAL EQUIVALENTE:</span></td>
                    <td><span class="respuestaTabla5-4" id="costoPrivadoAlt${x+1}">${valoresIndicadoresPrivados.rows[1][1]}</span></td>
                </tr>
                <tr>
                    <td class="bajada"><span>PROMEDIO DE UNIDADES DE BENEFICIO ACTUAL:</span></td>
                    <td><span class="respuestaTabla5-4" id="beneficioPrivadoAlt${x+1}">${valoresIndicadoresPrivados.rows[2][1]}</span></td>
                </tr>
                <tr>
                    <td class="bajada"><span>COSTO ATENCION ANUAL POR UNIDAD DE BENEFICIO:</span></td>
                    <td><span class="respuestaTabla5-4" id="anualPrivadoAlt${x+1}">${valoresIndicadoresPrivados.rows[3][1]}</span></td>
                </tr>
            </tbody>
        </table>
        `


        costoEficienciaSocial.innerHTML +=
        `
        <div class="centrar">
            <span class="alternativaStilo">ALTERNATIVA ${x+1}: ${JSON.parse(numComp).name}</span>
        </div>
        <table id="costoSocialPeriodoAlt${x+1}" class="costoSocialClass">
        </table>
        <table id="indicadoresSocialesAlt${x+1}">
            <tbody>
                <tr>
                    <td class="bajada"><span>VALOR PRESENTE NETO DE LOS COSTOS:</span></td>
                    <td><span class="respuestaTabla5-4" id="vanSocialAlt${x+1}">${valoresIndicadoresSociales.rows[0][1]}</span></td>
                </tr>
                <tr>
                    <td class="bajada"><span>COSTO ANUAL EQUIVALENTE:</span></td>
                    <td><span class="respuestaTabla5-4" id="costoSocialAlt${x+1}">${valoresIndicadoresSociales.rows[1][1]}</span></td>
                </tr>
                <tr>
                    <td class="bajada"><span>PROMEDIO DE UNIDADES DE BENEFICIO ACTUAL:</span></td>
                    <td><span class="respuestaTabla5-4" id="beneficioSocialAlt${x+1}">${valoresIndicadoresSociales.rows[2][1]}</span></td>
                </tr>
                <tr>
                    <td class="bajada"><span>COSTO ATENCION ANUAL POR UNIDAD DE BENEFICIO:</span></td>
                    <td><span class="respuestaTabla5-4" id="anualSocialAlt${x+1}">${valoresIndicadoresSociales.rows[3][1]}</span></td>
                </tr>
            </tbody>
        </table>

        `

        let costoPrivadoPeriodo = document.getElementById(`costoPrivadoPeriodoAlt${x+1}`)
        let costoSocialPeriodo = document.getElementById(`costoSocialPeriodoAlt${x+1}`)

        costoPrivadoPeriodo.innerHTML+=
        `
        <tr id="f1Priv_alt${x+1}">
            <th style="min-width:7cm" colspan="2">ITEM</th>
        </tr>
        <tr id="f2Priv_alt${x+1}">
            <td colspan="2" class="bajada">COSTOS TOTALES</td>
        </tr>
        <tr id="f3Priv_alt${x+1}">
            <td colspan="3" class="bajada">NÚMERO DE  UNIDADES DE BENEFICIO (PRODUCTOS, ATENCIONES, BENEFICIARIOS):</td>
        </tr>
        `

        costoSocialPeriodo.innerHTML+=
        `
        <tr id="f1Soc_alt${x+1}">
            <th colspan="2">ITEM</th>
        </tr>
        <tr id="f2Soc_alt${x+1}">
            <td colspan="2" class="bajada">COSTOS TOTALES</td>
        </tr>
        <tr id="f3Soc_alt${x+1}">
            <td colspan="3" class="bajada">NÚMERO DE  UNIDADES DE BENEFICIO (PRODUCTOS, ATENCIONES, BENEFICIARIOS):</td>
        </tr>
        `

        let f1Priv = document.getElementById(`f1Priv_alt${x+1}`)
        let f2Priv = document.getElementById(`f2Priv_alt${x+1}`)
        let f3Priv = document.getElementById(`f3Priv_alt${x+1}`)
        let f1Soc = document.getElementById(`f1Soc_alt${x+1}`)
        let f2Soc = document.getElementById(`f2Soc_alt${x+1}`)
        let f3Soc = document.getElementById(`f3Soc_alt${x+1}`)

        let totales = JSON.parse(sessionStorage.getItem(`ultimoTotalesAlt${x+1}`))
        
        let y = 0
        while (y<=horizonte) {
            f1Priv.innerHTML+=
            `
            <th>${y}</th>
            `
            f2Priv.innerHTML+=
            `
            <td><span class="respuestaTabla5-4" style="text-align:right">${parseInt(totales.rows[0][y+2])+parseInt(costosTotalesPrecioPrivado.rows[1][y+2])}</span></td>
            `
            if (y===0) {
            } else {
                f3Priv.innerHTML+=
                `
                <td><span class="respuestaTabla5-4" style="text-align:right">${crecimientoPoblacional.rows[y-1][1]}</span></td>
                `
            }
            f1Soc.innerHTML+=
            `
            <th>${y}</th>
            `
            f2Soc.innerHTML+=
            `
            <td><span class="respuestaTabla5-4" style="text-align:right">${parseFloat(totales.rows[1][y+2])+parseFloat(costosTotalesPrecioPrivado.rows[2][y+2])}</span></td>
            `
            if (y===0) {
                
            } else {
                f3Soc.innerHTML+=
                `
                <td><span class="respuestaTabla5-4" style="text-align:right">${crecimientoPoblacional.rows[y-1][1]}</span></td>
                `
            }
            y++
        }

        x++
    }

let tasaPrivada = document.getElementById('tasaPrivada')
let unidadPrivada = document.getElementById('unidadPrivada')
let horizontePrivada = document.getElementById('horizontePrivada')
let tasaSocial = document.getElementById('tasaSocial')
let unidadSocial = document.getElementById('unidadSocial')
let horizonteSocial = document.getElementById('horizonteSocial')

tasaPrivada.value = factoresPrecioPrivado.rows[0][1]
unidadPrivada.value = factoresPrecioPrivado.rows[1][1]
horizontePrivada.value = factoresPrecioPrivado.rows[2][1]
tasaSocial.value = factoresPrecioSocial.rows[0][1]
unidadSocial.value = factoresPrecioSocial.rows[1][1]
horizonteSocial.value = factoresPrecioSocial.rows[2][1]

} else {
    while (x<numAlternativas) {
        let costosTotalesPrecioPrivado = JSON.parse(sessionStorage.getItem(`sumTodoAlt${x+1}`))
        let numComp = sessionStorage.getItem(`Alt_numero_${x+1}`)

        costoEficienciaPrivado.innerHTML +=
        `
        <div class="centrar">
            <span class="alternativaStilo">ALTERNATIVA ${x+1}: ${JSON.parse(numComp).name}</span>
        </div>
        <table id="costoPrivadoPeriodoAlt${x+1}" class="costoPrivadoClass">
        </table>
        <table id="indicadoresPrivadosAlt${x+1}">
            <tbody>
                <tr>
                    <td class="bajada"><span>VALOR PRESENTE NETO DE LOS COSTOS:</span></td>
                    <td><span class="respuestaTabla5-4" id="vanPrivadoAlt${x+1}">0</span></td>
                </tr>
                <tr>
                    <td class="bajada"><span>COSTO ANUAL EQUIVALENTE:</span></td>
                    <td><span class="respuestaTabla5-4" id="costoPrivadoAlt${x+1}">0</span></td>
                </tr>
                <tr>
                    <td class="bajada"><span>PROMEDIO DE UNIDADES DE BENEFICIO ACTUAL:</span></td>
                    <td><span class="respuestaTabla5-4" id="beneficioPrivadoAlt${x+1}">0</span></td>
                </tr>
                <tr>
                    <td class="bajada"><span>COSTO ATENCION ANUAL POR UNIDAD DE BENEFICIO:</span></td>
                    <td><span class="respuestaTabla5-4" id="anualPrivadoAlt${x+1}">0</span></td>
                </tr>
            </tbody>
        </table>
        `
    
        costoEficienciaSocial.innerHTML +=
        `
        <div class="centrar">
            <span class="alternativaStilo">ALTERNATIVA ${x+1}: ${JSON.parse(numComp).name}</span>
        </div>
        <table id="costoSocialPeriodoAlt${x+1}" class="costoSocialClass">
        </table>
        <table id="indicadoresSocialesAlt${x+1}">
            <tbody>
                <tr>
                    <td class="bajada"><span>VALOR PRESENTE NETO DE LOS COSTOS:</span></td>
                    <td><span class="respuestaTabla5-4" id="vanSocialAlt${x+1}">0</span></td>
                </tr>
                <tr>
                    <td class="bajada"><span>COSTO ANUAL EQUIVALENTE:</span></td>
                    <td><span class="respuestaTabla5-4" id="costoSocialAlt${x+1}">0</span></td>
                </tr>
                <tr>
                    <td class="bajada"><span>PROMEDIO DE UNIDADES DE BENEFICIO ACTUAL:</span></td>
                    <td><span class="respuestaTabla5-4" id="beneficioSocialAlt${x+1}">0</span></td>
                </tr>
                <tr>
                    <td class="bajada"><span>COSTO ATENCION ANUAL POR UNIDAD DE BENEFICIO:</span></td>
                    <td><span class="respuestaTabla5-4" id="anualSocialAlt${x+1}">0</span></td>
                </tr>
            </tbody>
        </table>
    
        `
    
        let costoPrivadoPeriodo = document.getElementById(`costoPrivadoPeriodoAlt${x+1}`)
        let costoSocialPeriodo = document.getElementById(`costoSocialPeriodoAlt${x+1}`)
    
        costoPrivadoPeriodo.innerHTML+=
        `
        <tr id="f1Priv_alt${x+1}">
            <th colspan="2">ITEM</th>
        </tr>
        <tr id="f2Priv_alt${x+1}">
            <td colspan="2" class="bajada">COSTOS TOTALES</td>
        </tr>
        <tr id="f3Priv_alt${x+1}">
            <td colspan="3" class="bajada">NÚMERO DE  UNIDADES DE BENEFICIO (PRODUCTOS, ATENCIONES, BENEFICIARIOS):</td>
        </tr>
        `
    
        costoSocialPeriodo.innerHTML+=
        `
        <tr id="f1Soc_alt${x+1}">
            <th colspan="2">ITEM</th>
        </tr>
        <tr id="f2Soc_alt${x+1}">
            <td colspan="2" class="bajada">COSTOS TOTALES</td>
        </tr>
        <tr id="f3Soc_alt${x+1}">
            <td colspan="3" class="bajada">NÚMERO DE  UNIDADES DE BENEFICIO (PRODUCTOS, ATENCIONES, BENEFICIARIOS):</td>
        </tr>
        `
    
        let f1Priv = document.getElementById(`f1Priv_alt${x+1}`)
        let f2Priv = document.getElementById(`f2Priv_alt${x+1}`)
        let f3Priv = document.getElementById(`f3Priv_alt${x+1}`)
        let f1Soc = document.getElementById(`f1Soc_alt${x+1}`)
        let f2Soc = document.getElementById(`f2Soc_alt${x+1}`)
        let f3Soc = document.getElementById(`f3Soc_alt${x+1}`)
        
        let totales = JSON.parse(sessionStorage.getItem(`ultimoTotalesAlt${x+1}`))
        
        let y = 0
        while (y<=horizonte) {
            f1Priv.innerHTML+=
            `
            <th>${y}</th>
            `
            f2Priv.innerHTML+=
            `
            <td><span class="respuestaTabla5-4" style="text-align:right">${parseInt(totales.rows[0][y+2])+parseInt(costosTotalesPrecioPrivado.rows[1][y+2])}</span></td>
            `
            if (y===0) {
            } else {
                f3Priv.innerHTML+=
                `
                <td><span class="respuestaTabla5-4" style="text-align:right">${crecimientoPoblacional.rows[y-1][1]}</span></td>
                `
            }
            f1Soc.innerHTML+=
            `
            <th>${y}</th>
            `
            f2Soc.innerHTML+=
            `
            <td><span class="respuestaTabla5-4" style="text-align:right">${parseFloat(totales.rows[1][y+2])+parseFloat(costosTotalesPrecioPrivado.rows[2][y+2])}</span></td>
            `
            if (y===0) {
                
            } else {
                f3Soc.innerHTML+=
                `
                <td><span class="respuestaTabla5-4" style="text-align:right">${crecimientoPoblacional.rows[y-1][1]}</span></td>
                `
            }
            y++
        }
        x++
    }
}



window.addEventListener('change',calcularVPN)
window.addEventListener('DOMContentLoaded', function () {
    let campo = document.getElementById('tasaSocial')
    let tasaDescuento = parseFloat(parseFloat(campo.value)/100)
    let horCalculo = sessionStorage.getItem('horizonteEvaluacion')
    let numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))
    let flujosCaja = []

    let x = 0
    while (x<numAlternativas) {
        let totales = JSON.parse(sessionStorage.getItem(`ultimoTotalesAlt${x+1}`))
        let costosTotalesPrecioSocial = JSON.parse(sessionStorage.getItem(`sumTodoAlt${x+1}`))
        let inversionInicial = parseFloat(totales.rows[1][2])+parseFloat(costosTotalesPrecioSocial.rows[2][2])
        let y = 0

        while (y<=horCalculo-3) {
            flujosCaja.push(`${parseFloat(totales.rows[1][y+3])+parseFloat(costosTotalesPrecioSocial.rows[2][y+3])}`)
            y++
        }

        let vanSocial = document.getElementById(`vanSocialAlt${x+1}`)
        let vpn = inversionInicial;
        for (let i = 0; i < flujosCaja.length; i++) {
            vpn += (flujosCaja[i] / Math.pow((1 + parseFloat(tasaDescuento)), i+1));
        }
        vanSocial.innerHTML = parseInt(vpn)
        
        flujosCaja = []
        x++
    }
})

function calcularVPN(e){
    let campo = e.srcElement.id.toString()
    if (campo.startsWith('tasaPrivada')) {
        campo = document.getElementById(campo)
        let tasaDescuento = parseFloat(parseFloat(campo.value)/100)
        let horCalculo = sessionStorage.getItem('horizonteEvaluacion')
        let numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))
        let flujosCaja = [] 
        let x = 0
        while (x<numAlternativas) {
            let totales = JSON.parse(sessionStorage.getItem(`ultimoTotalesAlt${x+1}`))
            let costosTotalesPrecioPrivado = JSON.parse(sessionStorage.getItem(`sumTodoAlt${x+1}`))
            let inversionInicial = parseInt(parseInt(totales.rows[0][2])+parseInt(costosTotalesPrecioPrivado.rows[1][2]))
            let y = 0
            
            while (y<horCalculo) {
                flujosCaja.push(`${parseInt(parseInt(totales.rows[0][y+3])+parseInt(costosTotalesPrecioPrivado.rows[1][y+3]))}`)
    
                y++
            }
    
            let vanPrivado = document.getElementById(`vanPrivadoAlt${x+1}`)
            let vpn = inversionInicial;
            for (let i = 0; i < flujosCaja.length; i++) {
              vpn += (flujosCaja[i] / Math.pow((1 + parseFloat(tasaDescuento)), i+1));
            }
            vanPrivado.innerHTML = parseInt(vpn)
            
            flujosCaja = []
            x++
        }
    } else if (campo.startsWith('tasaSocial')) {
        campo = document.getElementById(campo)
        let tasaDescuento = parseFloat(parseFloat(campo.value)/100)
        let horCalculo = sessionStorage.getItem('horizonteEvaluacion')
        let numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))
        let flujosCaja = []

        let x = 0
        while (x<numAlternativas) {
            let totales = JSON.parse(sessionStorage.getItem(`ultimoTotalesAlt${x+1}`))
            let inversionInicial = totales.rows[1][2]
            let y = 0
    
            while (y<=horCalculo-3) {
                flujosCaja.push(`${totales.rows[1][y+3]}`)
                y++
            }
    
            let vanSocial = document.getElementById(`vanSocialAlt${x+1}`)
            let vpn = -inversionInicial;
            for (let i = 0; i < flujosCaja.length; i++) {
                vpn += (flujosCaja[i] / Math.pow((1 + parseFloat(tasaDescuento)), i+1));
            }
            vanSocial.innerHTML = parseInt(vpn)
            
            flujosCaja = []
            x++
        }
    } else {
        
    }

  }

function calcular() {
    let horCalculo = sessionStorage.getItem('horizonteEvaluacion')
    let numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))
    let x = 0

    while (x<numAlternativas) {
        let y = 0

        let vanPrivado = document.getElementById(`vanPrivadoAlt${x+1}`)
        let vanSocial = document.getElementById(`vanSocialAlt${x+1}`)
        
        vanPrivado = parseInt(vanPrivado.innerHTML)
        vanSocial = parseInt(vanSocial.innerHTML)

        let costoPrivadoAlt = document.getElementById(`costoPrivadoAlt${x+1}`)
        let costoSocialAlt = document.getElementById(`costoSocialAlt${x+1}`)
        let tasaPrivada = document.getElementById('tasaPrivada')
        let tasaSocial = document.getElementById('tasaSocial')
    
        tasaPrivada = parseFloat(parseFloat(tasaPrivada.value)/100)
        tasaSocial = parseFloat(parseFloat(tasaSocial.value)/100)

        
        
        costoPrivadoAlt.innerHTML = parseInt((vanPrivado * ((1 + tasaPrivada) ** horCalculo * tasaPrivada) / ((1 + tasaPrivada) ** horCalculo - 1)));
        costoSocialAlt.innerHTML = parseInt((vanSocial * ((1 + tasaSocial) ** horCalculo * tasaSocial) / ((1 + tasaSocial) ** horCalculo - 1)));

        let crecimientoPoblacional = JSON.parse(sessionStorage.getItem('tablaCrecimiento'))
    
        let sumCrecimiento = 0
        while (y<horCalculo) {

            sumCrecimiento += parseInt(crecimientoPoblacional.rows[y][1])

            y++
        }
        let beneficioPrivado = document.getElementById(`beneficioPrivadoAlt${x+1}`)
        let beneficioSocial = document.getElementById(`beneficioSocialAlt${x+1}`)

        beneficioPrivado.innerHTML = parseInt(sumCrecimiento/horCalculo)
        beneficioSocial.innerHTML = parseInt(sumCrecimiento/horCalculo)
    
        let anualPrivado = document.getElementById(`anualPrivadoAlt${x+1}`)
        let anualSocial = document.getElementById(`anualSocialAlt${x+1}`)

        console.log(costoPrivadoAlt.innerHTML);
        anualPrivado.innerHTML = parseFloat(parseInt(costoPrivadoAlt.innerHTML)/parseInt(beneficioPrivado.innerHTML)).toFixed(2)
        anualSocial.innerHTML = parseFloat(parseInt(costoSocialAlt.innerHTML)/parseInt(beneficioSocial.innerHTML)).toFixed(2)

        x++
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

        if (tableId.includes('factoresPrecioPrivado')||tableId.includes('factoresPrecioSocial')||tableId.includes('indicadoresPrivados')||tableId.includes('indicadoresSociales')) {
            skipRows = 0
        }

        for (let j = skipRows; j < rows.length; j++) {
            const rowData = [];
            const cells = rows[j].cells;

        if (tableId.includes('factoresPrecioPrivado')||tableId.includes('factoresPrecioSocial')) {
            for (let k = 0; k < cells.length; k++) {

                if (k===0) {
                    const cellData = cells[k].innerText.trim();
                    rowData.push(cellData);
                } else {
                    const celdaId = cells[k].childNodes[0].id
                    let input = document.getElementById(celdaId)
                    const cellData = input.value
                    rowData.push(cellData);
                    
                }
            }
        } else {
            for (let k = 0; k < cells.length; k++) {
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
    }
}


botonGrabar.addEventListener('click', calcular)
botonGrabar.addEventListener('click', contarFilas)


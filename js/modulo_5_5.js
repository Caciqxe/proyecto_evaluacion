const botonGrabar = document.getElementById('botonGrabar')
const numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))
let contenedor = document.getElementById('empleo')
let x = 0

while (x<numAlternativas) {
    let tablaUsada = JSON.parse(sessionStorage.getItem(`tablaGeneracionEmpleoAlt${x+1}`))
    let numComponentes = JSON.parse(sessionStorage.getItem(`Alt_numero_${x+1}`)).numeroCom
    let nombreAlternativa = JSON.parse(sessionStorage.getItem(`Alt_numero_${x+1}`)).name
    let detalleComponente = JSON.parse(sessionStorage.getItem(`detalleCompAlt_${x+1}`))
    let y = 0

    if (tablaUsada !=null) {
        let factorGeneracionEmpleo = sessionStorage.getItem('factorGeneracionEmpleo')
        let factorRemplazado = document.getElementById('factorGeneracionEmpleo')

        factorRemplazado.innerHTML = parseFloat(factorGeneracionEmpleo)

        contenedor.innerHTML +=
        `
        <p class="paso">
        <span style="width:35cm">ALTERNATIVA N°${x+1}: ${nombreAlternativa} </span>
        </p>
        <table id="tablaGeneracionEmpleoAlt${x+1}">
            <tbody id="bodyAlt${x+1}">
                <tr>
                    <th rowspan="2">COMPONENTES</th>
                    <th rowspan="2">DESCRIPCIÓN</th>
                    <th colspan="4">RECURSOS HUMANO DIRECTO</th>
                    <th colspan="4">RECURSO HUMANO INDIRECTO</th>
                </tr>
                <tr>
                    <td class="bajada">HOMBRES</td>
                    <td class="bajada">MUJERES</td>
                    <td class="bajada">GRUPO VULNERABLE</td>
                    <td class="bajada">TOTAL</td>
                    <td class="bajada">HOMBRES</td>
                    <td class="bajada">MUJERES</td>
                    <td class="bajada">GRUPO VULNERABLE</td>
                    <td class="bajada">TOTAL</td>
                </tr>
            </tbody>
        </table>
        `
        while (y<numComponentes) {
            let bodyAlt = document.getElementById(`bodyAlt${x+1}`)
            let alternativas = JSON.parse(sessionStorage.getItem(`alt${x+1}_com${y+1}`))
            let z = 0
    
            
            
            
            bodyAlt.innerHTML +=
            `
            <tr id="trAlt${x+1}_Com${y+1}">
                <td rowspan="${alternativas.rows.length}" class="bajada" style="text-align:center"><span>${detalleComponente.rows[y][1]}</span></td>
                <td><span class="respuestaTabla5-5">${alternativas.rows[0][0]}</span></td>
                <td><input style="width:97%" id="hDirectoAlt${x+1}_com${y+1}_0" value="${tablaUsada.rows[y][1]}" style="text-align:right"></td>
                <td><input style="width:97%" id="mDirectoAlt${x+1}_com${y+1}_0" value="${tablaUsada.rows[y][2]}" style="text-align:right"></td>
                <td><input style="width:97%" id="vDirectoAlt${x+1}_com${y+1}_0" value="${tablaUsada.rows[y][3]}" style="text-align:right"></td>
                <td><input style="width:97%" id="tDirectoAlt${x+1}_com${y+1}_0" value="${tablaUsada.rows[y][4]}" readonly="true" style="text-align:right"></span></td>
                <td><input style="width:97%" id="hIndirectoAlt${x+1}_com${y+1}_0" value=${tablaUsada.rows[y][1]*parseFloat(factorGeneracionEmpleo)} readonly="true" style="text-align:right"></span></td>
                <td><input style="width:97%" id="mIndirectoAlt${x+1}_com${y+1}_0" value=${tablaUsada.rows[y][2]*parseFloat(factorGeneracionEmpleo)} readonly="true" style="text-align:right"></span></td>
                <td><input style="width:97%" id="vIndirectoAlt${x+1}_com${y+1}_0" value=${tablaUsada.rows[y][3]*parseFloat(factorGeneracionEmpleo)} readonly="true" style="text-align:right"></span></td>
                <td><input style="width:97%" id="tIndirectoAlt${x+1}_com${y+1}_0" value=${tablaUsada.rows[y][4]*parseFloat(factorGeneracionEmpleo)} readonly="true" style="text-align:right"></span></td>
            </tr>
            `
            
    
            while (z<alternativas.rows.length-1) {
                
    
                bodyAlt.innerHTML +=
                `
                <tr>
                    <td><span class="respuestaTabla5-5">${alternativas.rows[z+1][0]}</span></td>
                    <td><input style="width:97%" id="hDirectoAlt${x+1}_com${y+1}_${z+1}" value=0 style="text-align:right"></td>
                    <td><input style="width:97%" id="mDirectoAlt${x+1}_com${y+1}_${z+1}" value=0 style="text-align:right"></td>
                    <td><input style="width:97%" id="vDirectoAlt${x+1}_com${y+1}_${z+1}" value=0 style="text-align:right"></td>
                    <td><input style="width:97%" id="tDirectoAlt${x+1}_com${y+1}_${z+1}" value=0 readonly="true" style="text-align:right"></span></td>
                    <td><input style="width:97%" id="hIndirectoAlt${x+1}_com${y+1}_${z+1}" value=0 readonly="true" style="text-align:right"></span></td>
                    <td><input style="width:97%" id="mIndirectoAlt${x+1}_com${y+1}_${z+1}" value=0 readonly="true" style="text-align:right"></span></td>
                    <td><input style="width:97%" id="vIndirectoAlt${x+1}_com${y+1}_${z+1}" value=0 readonly="true" style="text-align:right"></span></td>
                    <td><input style="width:97%" id="tIndirectoAlt${x+1}_com${y+1}_${z+1}" value=0 readonly="true" style="text-align:right"></span></td>
                </tr>
                `
    
                z++
            }
    
            y++
        }

        
    } else {
        contenedor.innerHTML +=
        `
        <p class="paso">
        <span style="width:35cm">ALTERNATIVA N°${x+1}: ${nombreAlternativa} </span>
        </p>
        <table id="tablaGeneracionEmpleoAlt${x+1}">
            <tbody id="bodyAlt${x+1}">
                <tr>
                    <th rowspan="2">COMPONENTES</th>
                    <th rowspan="2">DESCRIPCIÓN</th>
                    <th colspan="4">RECURSOS HUMANO DIRECTO</th>
                    <th colspan="4">RECURSO HUMANO INDIRECTO</th>
                </tr>
                <tr>
                    <td class="bajada">HOMBRES</td>
                    <td class="bajada">MUJERES</td>
                    <td class="bajada">GRUPO VULNERABLE</td>
                    <td class="bajada">TOTAL</td>
                    <td class="bajada">HOMBRES</td>
                    <td class="bajada">MUJERES</td>
                    <td class="bajada">GRUPO VULNERABLE</td>
                    <td class="bajada">TOTAL</td>
                </tr>
            </tbody>
        </table>
        `
        while (y<numComponentes) {
            let bodyAlt = document.getElementById(`bodyAlt${x+1}`)
            let alternativas = JSON.parse(sessionStorage.getItem(`alt${x+1}_com${y+1}`))
            let z = 0
    
            
            
            
            bodyAlt.innerHTML +=
            `
            <tr id="trAlt${x+1}_Com${y+1}">
                <td rowspan="${alternativas.rows.length}" class="bajada" style="text-align:center"><span>${detalleComponente.rows[y][1]}</span></td>
                <td><span class="respuestaTabla5-5">${alternativas.rows[0][0]}</span></td>
                <td><input style="width:97%" id="hDirectoAlt${x+1}_com${y+1}_0" value=0 style="text-align:right"></td>
                <td><input style="width:97%" id="mDirectoAlt${x+1}_com${y+1}_0" value=0 style="text-align:right"></td>
                <td><input style="width:97%" id="vDirectoAlt${x+1}_com${y+1}_0" value=0 style="text-align:right"></td>
                <td><input style="width:97%" id="tDirectoAlt${x+1}_com${y+1}_0" value=0 style="text-align:right" readonly="true"></span></td>
                <td><input style="width:97%" id="hIndirectoAlt${x+1}_com${y+1}_0" value=0 style="text-align:right" readonly="true"></span></td>
                <td><input  style="width:97%" id="mIndirectoAlt${x+1}_com${y+1}_0" value=0 style="text-align:right" readonly="true"></span></td>
                <td><input style="width:97%" id="vIndirectoAlt${x+1}_com${y+1}_0" value=0 style="text-align:right" readonly="true"></span></td>
                <td><input style="width:97%" id="tIndirectoAlt${x+1}_com${y+1}_0" value=0 style="text-align:right" readonly="true"></span></td>
            </tr>
            `
            
    
            while (z<alternativas.rows.length-1) {
                
    
                bodyAlt.innerHTML +=
                `
                <tr>
                    <td><span class="respuestaTabla5-5">${alternativas.rows[z+1][0]}</span></td>
                    <td><input style="width:97%" id="hDirectoAlt${x+1}_com${y+1}_${z+1}" value=0 style="text-align:right"></td>
                    <td><input style="width:97%" id="mDirectoAlt${x+1}_com${y+1}_${z+1}" value=0 style="text-align:right"></td>
                    <td><input style="width:97%" id="vDirectoAlt${x+1}_com${y+1}_${z+1}" value=0 style="text-align:right"></td>
                    <td><input style="width:97%" id="tDirectoAlt${x+1}_com${y+1}_${z+1}" value=0 style="text-align:right" readonly="true"></span></td>
                    <td><input style="width:97%" id="hIndirectoAlt${x+1}_com${y+1}_${z+1}" value=0 style="text-align:right" readonly="true"></span></td>
                    <td><input style="width:97%" id="mIndirectoAlt${x+1}_com${y+1}_${z+1}" value=0 style="text-align:right" readonly="true"></span></td>
                    <td><input style="width:97%" id="vIndirectoAlt${x+1}_com${y+1}_${z+1}" value=0 style="text-align:right" readonly="true"></span></td>
                    <td><input style="width:97%" id="tIndirectoAlt${x+1}_com${y+1}_${z+1}" value=0 style="text-align:right" readonly="true"></span></td>
                </tr>
                `
    
                z++
            }
    
            y++
        }
    
    }

    x++
}

function totalEdad(e) {
    let e_id = e.srcElement.id
    let factor = document.getElementById('factorGeneracionEmpleo')
    factor = parseFloat(factor.innerHTML)


    if (e_id.includes('hDirecto')) {
        let e_id_h = e_id
        let e_id_m = e_id.replace('hDirecto','mDirecto')
        let e_id_v = e_id.replace('hDirecto','vDirecto')
        let e_id_t = e_id.replace('hDirecto','tDirecto')

        let hombre = document.getElementById(`${e_id_h}`)
        let mujer = document.getElementById(`${e_id_m}`)
        let vulnerable = document.getElementById(`${e_id_v}`)
        let total = document.getElementById(`${e_id_t}`)

        let e_id_hIndirecto = e_id.replace('hDirecto','hIndirecto')
        let e_id_mIndirecto = e_id.replace('hDirecto','mIndirecto')
        let e_id_vIndirecto = e_id.replace('hDirecto','vIndirecto')
        let e_id_tIndirecto = e_id.replace('hDirecto','tIndirecto')

        total.value = parseInt(hombre.value) + parseInt(mujer.value) + parseInt(vulnerable.value)  
        
        let hombreIndirecto = document.getElementById(`${e_id_hIndirecto}`)
        let mujerIndirecto = document.getElementById(`${e_id_mIndirecto}`)
        let vulnerableIndirecto = document.getElementById(`${e_id_vIndirecto}`)
        let totalIndirecto = document.getElementById(`${e_id_tIndirecto}`)

        hombreIndirecto.value = hombre.value * factor
        mujerIndirecto.value = mujer.value * factor
        vulnerableIndirecto.value = vulnerable.value * factor
        totalIndirecto.value = total.value * factor

    } if (e_id.includes('mDirecto')) {
        let e_id_h = e_id.replace('mDirecto','hDirecto')
        let e_id_m = e_id
        let e_id_v = e_id.replace('mDirecto','vDirecto')
        let e_id_t = e_id.replace('mDirecto','tDirecto')

        let hombre = document.getElementById(`${e_id_h}`)
        let mujer = document.getElementById(`${e_id_m}`)
        let vulnerable = document.getElementById(`${e_id_v}`)
        let total = document.getElementById(`${e_id_t}`)

        let e_id_hIndirecto = e_id.replace('mDirecto','hIndirecto')
        let e_id_mIndirecto = e_id.replace('mDirecto','mIndirecto')
        let e_id_vIndirecto = e_id.replace('mDirecto','vIndirecto')
        let e_id_tIndirecto = e_id.replace('mDirecto','tIndirecto')

        total.value = parseInt(hombre.value) + parseInt(mujer.value) + parseInt(vulnerable.value)  
        
        let hombreIndirecto = document.getElementById(`${e_id_hIndirecto}`)
        let mujerIndirecto = document.getElementById(`${e_id_mIndirecto}`)
        let vulnerableIndirecto = document.getElementById(`${e_id_vIndirecto}`)
        let totalIndirecto = document.getElementById(`${e_id_tIndirecto}`)

        hombreIndirecto.value = hombre.value * factor
        mujerIndirecto.value = mujer.value * factor
        vulnerableIndirecto.value = vulnerable.value * factor
        totalIndirecto.value = total.value * factor

    } if (e_id.includes('vDirecto')) {
        let e_id_h = e_id.replace('vDirecto','hDirecto')
        let e_id_m = e_id.replace('vDirecto','mDirecto')
        let e_id_v = e_id
        let e_id_t = e_id.replace('vDirecto','tDirecto')

        let hombre = document.getElementById(`${e_id_h}`)
        let mujer = document.getElementById(`${e_id_m}`)
        let vulnerable = document.getElementById(`${e_id_v}`)
        let total = document.getElementById(`${e_id_t}`)

        let e_id_hIndirecto = e_id.replace('vDirecto','hIndirecto')
        let e_id_mIndirecto = e_id.replace('vDirecto','mIndirecto')
        let e_id_vIndirecto = e_id.replace('vDirecto','vIndirecto')
        let e_id_tIndirecto = e_id.replace('vDirecto','tIndirecto')

        total.value = parseInt(hombre.value) + parseInt(mujer.value) + parseInt(vulnerable.value)   

        let hombreIndirecto = document.getElementById(`${e_id_hIndirecto}`)
        let mujerIndirecto = document.getElementById(`${e_id_mIndirecto}`)
        let vulnerableIndirecto = document.getElementById(`${e_id_vIndirecto}`)
        let totalIndirecto = document.getElementById(`${e_id_tIndirecto}`)

        hombreIndirecto.value = hombre.value * factor
        mujerIndirecto.value = mujer.value * factor
        vulnerableIndirecto.value = vulnerable.value * factor
        totalIndirecto.value = total.value * factor

    } else {

    }
}


function contarFilas() {

    const tables = document.getElementsByTagName('table');

    let generacionEmpleo = document.getElementById('factorGeneracionEmpleo')

    sessionStorage.setItem('factorGeneracionEmpleo', generacionEmpleo.innerHTML);


    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id

        let skipRows = 2
        tableId = tableId.toString()

        for (let j = skipRows; j < rows.length; j++) {
            const rowData = [];
            const cells = rows[j].cells;

            for (let k = 0; k < cells.length; k++) {

                if (k<=1) {
                    const cellData = cells[k].innerText.trim();
                    if (cells[k].rowSpan > 1) {
                        continue; 
                    }
                    rowData.push(cellData);
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
            
            
                if (tableId === "") {
                    
                } else {
                    //sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
                }
        }
}


window.addEventListener('change',totalEdad)
botonGrabar.addEventListener('click',contarFilas)

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


        let arrayVacio = []
        
        function calculador(array) {
            let numIteracion = 1
            

            while (numIteracion<=8) {
                let sumaTotalTabla = 0
                tablaUsada.rows.forEach(el => {
                    sumaTotalTabla += parseInt(el[numIteracion])
                });
                array.push(sumaTotalTabla)
                numIteracion++
            }
        }

        calculador(arrayVacio)
        console.log(arrayVacio);

        contenedor.innerHTML +=
        `
        <table id="oculto${x+1}">
            <tbody>
                <tr>
                    <th style="width:20%"></th>
                    <th style="width:20%">TOTAL</th>
                    <th style="width:20%">HOMBRES</th>
                    <th style="width:20%">MUJERS</th>
                    <th style="width:20%">GRUPO VULNERABLE</th>
                </tr>
                    <td style="background-color:#b8cce4;color:black;font-weight:bold"><span>RECURSO HUMANO DIRECTO</td>
                    <td><span class="respuestaTabla" style="text-align:right">${arrayVacio[3]}</span></td>
                    <td><span class="respuestaTabla" style="text-align:right">${arrayVacio[0]}</span></td>
                    <td><span class="respuestaTabla" style="text-align:right">${arrayVacio[1]}</span></td>
                    <td><span class="respuestaTabla" style="text-align:right">${arrayVacio[2]}</span></td>
                <tr>
                </tr>
                    <td style="width:20%;background-color:#b8cce4;color:black;font-weight:bold"><span>RECURSO HUMANO INDIRECTO</td>
                    <td><span class="respuestaTabla" style="text-align:right">${arrayVacio[7]}</span></td>
                    <td><span class="respuestaTabla" style="text-align:right">${arrayVacio[4]}</span></td>
                    <td><span class="respuestaTabla" style="text-align:right">${arrayVacio[5]}</span></td>
                    <td><span class="respuestaTabla" style="text-align:right">${arrayVacio[6]}</span></td>
                <tr>
                </tr>
            </tbody>
        </table>
        `

        let comp0 = 0
        let sumaLen = tablaUsada.rows.length

        console.log(sumaLen);
        while (y<numComponentes) {
            let bodyAlt = document.getElementById(`bodyAlt${x+1}`)
            let alternativas = JSON.parse(sessionStorage.getItem(`alt${x+1}_com${y+1}`))
            let z = 0

            sumaLen = sumaLen - alternativas.rows.length
            
            if (sumaLen>=0) {
                console.log(alternativas);
                bodyAlt.innerHTML +=
                `
                <tr id="trAlt${x+1}_Com${y+1}">
                    <td rowspan="${alternativas.rows.length}" class="bajada" style="text-align:center"><span>${detalleComponente.rows[y][1]}</span></td>
                    <td><span class="respuestaTabla5-5">${alternativas.rows[0][0]}</span></td>
                    <td><input style="width:97%;text-align:right" id="hDirectoAlt${x+1}_com${y+1}_0" value="${tablaUsada.rows[comp0][1]}"></td>
                    <td><input style="width:97%;text-align:right" id="mDirectoAlt${x+1}_com${y+1}_0" value="${tablaUsada.rows[comp0][2]}"></td>
                    <td><input style="width:97%;text-align:right" id="vDirectoAlt${x+1}_com${y+1}_0" value="${tablaUsada.rows[comp0][3]}"></td>
                    <td><input style="width:97%;text-align:right" id="tDirectoAlt${x+1}_com${y+1}_0" value="${tablaUsada.rows[comp0][4]}" readonly="true"></span></td>
                    <td><input style="width:97%;text-align:right" id="hIndirectoAlt${x+1}_com${y+1}_0" value=${tablaUsada.rows[comp0][1]*parseFloat(factorGeneracionEmpleo)} readonly="true"></span></td>
                    <td><input style="width:97%;text-align:right" id="mIndirectoAlt${x+1}_com${y+1}_0" value=${tablaUsada.rows[comp0][2]*parseFloat(factorGeneracionEmpleo)} readonly="true"></span></td>
                    <td><input style="width:97%;text-align:right" id="vIndirectoAlt${x+1}_com${y+1}_0" value=${tablaUsada.rows[comp0][3]*parseFloat(factorGeneracionEmpleo)} readonly="true"></span></td>
                    <td><input style="width:97%;text-align:right" id="tIndirectoAlt${x+1}_com${y+1}_0" value=${tablaUsada.rows[comp0][4]*parseFloat(factorGeneracionEmpleo)} readonly="true"></span></td>
                </tr>
                `
                console.log(alternativas.rows.length);
    
                let numAlternativa = comp0
                while (z<alternativas.rows.length-1) {
                    
        
                    bodyAlt.innerHTML +=
                    `
                    <tr>
                        <td><span class="respuestaTabla5-5">${alternativas.rows[z+1][0]}</span></td>
                        <td><input style="width:97%;text-align:right" id="hDirectoAlt${x+1}_com${y+1}_${z+1}" value="${tablaUsada.rows[numAlternativa+1][1]}"></td>
                        <td><input style="width:97%;text-align:right" id="mDirectoAlt${x+1}_com${y+1}_${z+1}" value="${tablaUsada.rows[numAlternativa+1][2]}"></td>
                        <td><input style="width:97%;text-align:right" id="vDirectoAlt${x+1}_com${y+1}_${z+1}" value="${tablaUsada.rows[numAlternativa+1][3]}"></td>
                        <td><input style="width:97%;text-align:right" id="tDirectoAlt${x+1}_com${y+1}_${z+1}" value="${tablaUsada.rows[numAlternativa+1][4]}" readonly="true"></span></td>
                        <td><input style="width:97%;text-align:right" id="hIndirectoAlt${x+1}_com${y+1}_${z+1}" value=${tablaUsada.rows[numAlternativa+1][1]*parseFloat(factorGeneracionEmpleo)} readonly="true"></span></td>
                        <td><input style="width:97%;text-align:right" id="mIndirectoAlt${x+1}_com${y+1}_${z+1}" value=${tablaUsada.rows[numAlternativa+1][2]*parseFloat(factorGeneracionEmpleo)} readonly="true"></span></td>
                        <td><input style="width:97%;text-align:right" id="vIndirectoAlt${x+1}_com${y+1}_${z+1}" value=${tablaUsada.rows[numAlternativa+1][3]*parseFloat(factorGeneracionEmpleo)} readonly="true"></span></td>
                        <td><input style="width:97%;text-align:right" id="tIndirectoAlt${x+1}_com${y+1}_${z+1}" value=${tablaUsada.rows[numAlternativa+1][4]*parseFloat(factorGeneracionEmpleo)} readonly="true"></span></td>
                    </tr>
                    `
                    numAlternativa ++
                    z++
                }
                comp0 += parseInt(alternativas.rows.length)
            } else {
                bodyAlt.innerHTML +=
                `
                <tr id="trAlt${x+1}_Com${y+1}">
                    <td rowspan="${alternativas.rows.length}" class="bajada" style="text-align:center"><span>${detalleComponente.rows[y][1]}</span></td>
                    <td><span class="respuestaTabla5-5">${alternativas.rows[0][0]}</span></td>
                    <td><input style="width:97%;text-align:right" id="hDirectoAlt${x+1}_com${y+1}_0" value=0></td>
                    <td><input style="width:97%;text-align:right" id="mDirectoAlt${x+1}_com${y+1}_0" value=0></td>
                    <td><input style="width:97%;text-align:right" id="vDirectoAlt${x+1}_com${y+1}_0" value=0></td>
                    <td><input style="width:97%;text-align:right" id="tDirectoAlt${x+1}_com${y+1}_0" value=0 readonly="true"></span></td>
                    <td><input style="width:97%;text-align:right" id="hIndirectoAlt${x+1}_com${y+1}_0" value=0 readonly="true"></span></td>
                    <td><input  style="width:97%;text-align:right" id="mIndirectoAlt${x+1}_com${y+1}_0" value=0 readonly="true"></span></td>
                    <td><input style="width:97%;text-align:right" id="vIndirectoAlt${x+1}_com${y+1}_0" value=0 readonly="true"></span></td>
                    <td><input style="width:97%;text-align:right" id="tIndirectoAlt${x+1}_com${y+1}_0" value=0 readonly="true"></span></td>
                </tr>
                `
                
        
                while (z<alternativas.rows.length-1) {
                    
        
                    bodyAlt.innerHTML +=
                    `
                    <tr>
                        <td><span class="respuestaTabla5-5">${alternativas.rows[z+1][0]}</span></td>
                        <td><input style="width:97%;text-align:right" id="hDirectoAlt${x+1}_com${y+1}_${z+1}" value=0></td>
                        <td><input style="width:97%;text-align:right" id="mDirectoAlt${x+1}_com${y+1}_${z+1}" value=0></td>
                        <td><input style="width:97%;text-align:right" id="vDirectoAlt${x+1}_com${y+1}_${z+1}" value=0></td>
                        <td><input style="width:97%;text-align:right" id="tDirectoAlt${x+1}_com${y+1}_${z+1}" value=0 readonly="true"></span></td>
                        <td><input style="width:97%;text-align:right" id="hIndirectoAlt${x+1}_com${y+1}_${z+1}" value=0 readonly="true"></span></td>
                        <td><input style="width:97%;text-align:right" id="mIndirectoAlt${x+1}_com${y+1}_${z+1}" value=0 readonly="true"></span></td>
                        <td><input style="width:97%;text-align:right" id="vIndirectoAlt${x+1}_com${y+1}_${z+1}" value=0 readonly="true"></span></td>
                        <td><input style="width:97%;text-align:right" id="tIndirectoAlt${x+1}_com${y+1}_${z+1}" value=0 readonly="true"></span></td>
                    </tr>
                    `
        
                    z++
                }
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
                <td><input style="width:97%;text-align:right" id="hDirectoAlt${x+1}_com${y+1}_0" value=0></td>
                <td><input style="width:97%;text-align:right" id="mDirectoAlt${x+1}_com${y+1}_0" value=0></td>
                <td><input style="width:97%;text-align:right" id="vDirectoAlt${x+1}_com${y+1}_0" value=0></td>
                <td><input style="width:97%;text-align:right" id="tDirectoAlt${x+1}_com${y+1}_0" value=0 readonly="true"></span></td>
                <td><input style="width:97%;text-align:right" id="hIndirectoAlt${x+1}_com${y+1}_0" value=0 readonly="true"></span></td>
                <td><input  style="width:97%;text-align:right" id="mIndirectoAlt${x+1}_com${y+1}_0" value=0 readonly="true"></span></td>
                <td><input style="width:97%;text-align:right" id="vIndirectoAlt${x+1}_com${y+1}_0" value=0 readonly="true"></span></td>
                <td><input style="width:97%;text-align:right" id="tIndirectoAlt${x+1}_com${y+1}_0" value=0 readonly="true"></span></td>
            </tr>
            `
            
    
            while (z<alternativas.rows.length-1) {
                
    
                bodyAlt.innerHTML +=
                `
                <tr>
                    <td><span class="respuestaTabla5-5">${alternativas.rows[z+1][0]}</span></td>
                    <td><input style="width:97%;text-align:right" id="hDirectoAlt${x+1}_com${y+1}_${z+1}" value=0></td>
                    <td><input style="width:97%;text-align:right" id="mDirectoAlt${x+1}_com${y+1}_${z+1}" value=0></td>
                    <td><input style="width:97%;text-align:right" id="vDirectoAlt${x+1}_com${y+1}_${z+1}" value=0></td>
                    <td><input style="width:97%;text-align:right" id="tDirectoAlt${x+1}_com${y+1}_${z+1}" value=0 readonly="true"></span></td>
                    <td><input style="width:97%;text-align:right" id="hIndirectoAlt${x+1}_com${y+1}_${z+1}" value=0 readonly="true"></span></td>
                    <td><input style="width:97%;text-align:right" id="mIndirectoAlt${x+1}_com${y+1}_${z+1}" value=0 readonly="true"></span></td>
                    <td><input style="width:97%;text-align:right" id="vIndirectoAlt${x+1}_com${y+1}_${z+1}" value=0 readonly="true"></span></td>
                    <td><input style="width:97%;text-align:right" id="tIndirectoAlt${x+1}_com${y+1}_${z+1}" value=0 readonly="true"></span></td>
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

        if (tableId === "" || tableId.includes('oculto')) {
            
        } else {

        for (let j = skipRows; j < rows.length; j++) {
            const rowData = [];
            const cells = rows[j].cells;
            
            if (cells.length === 9) {
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
                for (let k = 1; k < cells.length; k++) {
                    if (k===1) {
                        const cellData = cells[k].innerText.trim();
                        rowData.push(cellData);
                    } else {
                        const celdaId = cells[k].childNodes[0].id
                        let input = document.getElementById(celdaId)
                        const cellData = input.value
                        rowData.push(cellData);
                    }
                }
            }

            if (rowData.length > 0) {
                tableData.push(rowData);
            }
        }
    }
        

            
            const tableObject = {
                rows: tableData
                };
                console.log(tableObject);
            
                if (tableId === "" || tableId.includes('oculto')) {
                    
                } else {
                    sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
                }
        }
        window.location.reload()
}
// ORIGINAL
/* function contarFilas() {

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
} */


window.addEventListener('change',totalEdad)
botonGrabar.addEventListener('click',contarFilas)


/* function contarFilas() {

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

                    } else {
                        if (k === 1) {
                            const celdaId = cells[k].childNodes[0].id
                            const stringCelda = celdaId.toString()
                            if (stringCelda.length === 0) {
                                
                            } else {
                                const celdaId = cells[k].childNodes[0].id
                                let input = document.getElementById(celdaId)
                                const cellData = input.value
                                rowData.push(cellData);
                            }

                        }

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
} */
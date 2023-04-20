let botonGrabar = document.getElementById("botonGrabar");

let Modulo6Extra = JSON.parse(sessionStorage.getItem('Modulo6Extra'))
let marcoLegal = JSON.parse(sessionStorage.getItem('marcoLegal'))
let modalidadEjecucion = JSON.parse(sessionStorage.getItem('modalidadEjecucion'))
let modalidadOperacion = JSON.parse(sessionStorage.getItem('modalidadOperacion'))

let tablaModulo6Extra = document.getElementById('Modulo6Extra')
let tablaMarcoLegal = document.getElementById('marcoLegal')
let tablaModalidadEjecucion = document.getElementById('modalidadEjecucion')
let tablaModalidadOperacion = document.getElementById('modalidadOperacion')

if (Modulo6Extra != null) {
    tablaModulo6Extra.innerHTML =
    `
    <tbody>
        <tr>
            <th colspan="2">DEFINA LAS INSTANCIAS O INSTITUCIONES CON LAS CUALES SE RELACIONARA EL PROYECTO</th>
        </tr>
        <tr>
            <td class="bajada" style="width: 350px;">INSTANCIAS DE REGULACIÓN TÉCNICA: </td>
            <td style="width: fit-content;"><span contenteditable="true" class="textInput">${Modulo6Extra.rows[0][1]}</span></td>
        </tr>
        <tr>
            <td class="bajada" style="width: 350px;">INSTANCIAS DE CONTROL: </td>
            <td style="width: fit-content;"><span contenteditable="true" class="textInput">${Modulo6Extra.rows[1][1]}</span></td>
        </tr>
        <tr>
            <td class="bajada" style="width: 350px;">INSTANCIAS DE APOYO: </td>
            <td style="width: fit-content;"><span contenteditable="true" class="textInput">${Modulo6Extra.rows[2][1]}</span></td>
        </tr>
        <tr>
            <td class="bajada" style="width: 350px;">INSTANCIA PROVEEDORA DE INSUMOS: </td>
            <td style="width: fit-content;"><span contenteditable="true" class="textInput">${Modulo6Extra.rows[3][1]}</span></td>
        </tr>
        <tr>
            <td class="bajada" style="width: 350px;">OTRAS INSTANCIAS</td>
            <td style="width: fit-content;"><span contenteditable="true" class="textInput">${Modulo6Extra.rows[4][1]}</span></td>
        </tr>
    </tbody>
    `
    tablaMarcoLegal.innerHTML =
    `
    <tbody>
        <tr>
            <th colspan="3">DEFINA EL MARCO LEGAL CON EL CUAL SE RELACIONARÁ EL PROYECTO</th>
        </tr>
        <tr>
            <td class="bajada" style="width: 333px;">NORMATIVIDAD RELACIONADA O REGULATORIA</td>
            <td class="bajada" style="width: 333px;">ASPECTOS A TENER EN CUENTA</td>
            <td class="bajada" style="width: 333px;">ACCIONES A DESARROLLAR</td>
        </tr>
        <tr>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[0][0]}</span></td>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[0][1]}</span></td>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[0][2]}</span></td>
        </tr>
        <tr>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[1][0]}</span></td>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[1][1]}</span></td>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[1][2]}</span></td>
        </tr>
        <tr>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[2][0]}</span></td>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[2][1]}</span></td>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[2][2]}</span></td>
        </tr>
        <tr>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[3][0]}</span></td>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[3][1]}</span></td>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[3][2]}</span></td>
        </tr>
        <tr>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[4][0]}</span></td>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[4][1]}</span></td>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[4][2]}</span></td>
        </tr>
        <tr>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[5][0]}</span></td>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[5][1]}</span></td>
            <td><span contenteditable="true" class="textInput">${marcoLegal.rows[5][2]}</span></td>
        </tr>
    </tbody>
    `
    tablaModalidadEjecucion.innerHTML =
    `
    <tbody>
        <tr>
            <th colspan="3">SELECCIONE LA MODALIDAD INSTITUCIONAL PARA LA EJECUCIÓN DEL PROYECTO.</th>
        </tr>
        <tr>
            <td class="bajada" style="width: 333px;">MODALIDAD</td>
            <td class="bajada" style="width: 333px;">DESCRIPCIÓN</td>
            <td class="bajada" style="width: 333px;">JUSTIFICACIÓN</td>
        </tr>
        <tr>
            <td><span contenteditable="true" class="textInput">${modalidadEjecucion.rows[0][0]}</span></td>
            <td><span contenteditable="true" class="textInput">${modalidadEjecucion.rows[0][1]}</span></td>
            <td><span contenteditable="true" class="textInput">${modalidadEjecucion.rows[0][2]}</span></td>
        </tr>
    </tbody>
    `
    tablaModalidadOperacion.innerHTML =
    `
    <tbody>
        <tr>
            <th colspan="3">SELECCIONE LA MODALIDAD INSTITUCIONAL PARA LA EJECUCIÓN DEL PROYECTO.</th>
        </tr>
        <tr>
            <td class="bajada" style="width: 333px;">MODALIDAD</td>
            <td class="bajada" style="width: 333px;">DESCRIPCIÓN</td>
            <td class="bajada" style="width: 333px;">JUSTIFICACIÓN</td>
        </tr>
        <tr>
            <td><span contenteditable="true" class="textInput">${modalidadOperacion.rows[0][0]}</span></td>
            <td><span contenteditable="true" class="textInput">${modalidadOperacion.rows[0][1]}</span></td>
            <td><span contenteditable="true" class="textInput">${modalidadOperacion.rows[0][2]}</span></td>
        </tr>
    </tbody
    `
}



function contarFilas() {
    const tables = document.getElementsByTagName("table");

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id;

        let skipRows = 2;
        tableId = tableId.toString();

        if (tableId.includes("Modulo6Extra")) {
            skipRows = 1;
        }

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
            rows: tableData,
        };
        
        sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
    }
}

botonGrabar.addEventListener('click',contarFilas)
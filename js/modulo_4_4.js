const botonGrabar = document.getElementById('grabar')
let riesgoDesastre = document.getElementById('riesgoDesastre')

let numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))
let x = 0

while (x<numAlternativas) {

    let tablaPaso6A = JSON.parse(sessionStorage.getItem(`tablaPaso6_alt${x+1}_A`))
    let tablaPaso6B = JSON.parse(sessionStorage.getItem(`tablaPaso6_alt${x+1}_A`))
    let numElementsA = JSON.parse(sessionStorage.getItem(`tablaPaso6_alt${x+1}_A`)).rows.length
    let numElementsB = JSON.parse(sessionStorage.getItem(`tablaPaso6_alt${x+1}_A`)).rows.length
    let tablaPaso8 = JSON.parse(sessionStorage.getItem(`tablaPaso8_alt${x+1}_A`))
    
    if (tablaPaso8 === null) {
        riesgoDesastre.innerHTML +=
        `
        <div id="modulo4Paso8_alt${x+1}">
        <span class="alternativaStilo">Alternativa N° ${x+1} A</span>
            <div>
                <table id="tablaPaso8_alt${x+1}_A">
                    <tbody id="bodyPaso8_alt${x+1}_A">
                        <tr>
                            <th class="notaProceso" style="width:7.5cm">Elemento a Pasos del Proceso*</th>
                            <th style="width:7.5cm">Amenaza que lo puede afectar</th>
                            <th style="width:7.5cm">Factores de vulnerabilidad ¿Por qué esta débil?</th>
                            <th style="width:7.5cm">Afectaciones Posibles</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
        </div>
        `
        let bodyPaso8_A = document.getElementById(`bodyPaso8_alt${x+1}_A`)
        let y_a = 0
        while (y_a < numElementsA) {
            bodyPaso8_A.innerHTML +=
            `
                <tr>
                    <td><span class= "textInput" contenteditable="true">${tablaPaso6A.rows[y_a][0]}</span></td>
                    <td><span class= "textInput" contenteditable="true"></span></td>
                    <td><span class= "textInput" contenteditable="true"></span></td>
                    <td><span class= "textInput" contenteditable="true"></span></td>
                </tr>
                <tr>
                    <td style="background-color:black"></td>
                    <td><span class= "textInput" contenteditable="true"></span></td>
                    <td><span class= "textInput" contenteditable="true"></span></td>
                    <td><span class= "textInput" contenteditable="true"></span></td>
                </tr>
            `
        y_a++
        }
    } else {
        riesgoDesastre.innerHTML +=
        `
        <div id="modulo4Paso8_alt${x+1}">
        <span class="alternativaStilo">Alternativa N° ${x+1} A</span>
            <div>
                <table id="tablaPaso8_alt${x+1}_A">
                    <tbody id="bodyPaso8_alt${x+1}_A">
                        <tr>
                            <th class="notaProceso" style="width:7.5cm">Elemento a Pasos del Proceso*</th>
                            <th style="width:7.5cm">Amenaza que lo puede afectar</th>
                            <th style="width:7.5cm">Factores de vulnerabilidad ¿Por qué esta débil?</th>
                            <th style="width:7.5cm">Afectaciones Posibles</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
        </div>
        `
        let bodyPaso8_A = document.getElementById(`bodyPaso8_alt${x+1}_A`)
        let y_a = 0
        while (y_a < numElementsA) {
            bodyPaso8_A.innerHTML +=
            `
                <tr>
                    <td><span class= "textInput" contenteditable="true">${tablaPaso6A.rows[y_a][0]}</span></td>
                    <td><span class= "textInput" contenteditable="true">${tablaPaso8.rows[(y_a*2)][1]}</span></td>
                    <td><span class= "textInput" contenteditable="true">${tablaPaso8.rows[(y_a*2)][2]}</span></td>
                    <td><span class= "textInput" contenteditable="true">${tablaPaso8.rows[(y_a*2)][3]}</span></td>
                </tr>
                <tr>
                    <td style="background-color:black"></td>
                    <td><span class= "textInput" contenteditable="true">${tablaPaso8.rows[(y_a*2)+1][1]}</span></td>
                    <td><span class= "textInput" contenteditable="true">${tablaPaso8.rows[(y_a*2)+1][2]}</span></td>
                    <td><span class= "textInput" contenteditable="true">${tablaPaso8.rows[(y_a*2)+1][3]}</span></td>
                </tr>
            `
        y_a++
        }
    }

    x++
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
botonGrabar.addEventListener('click', contarFilas)








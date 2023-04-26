const alternativaGanadora = sessionStorage.getItem('alternativaGanadora')
const botonGrabar = document.getElementById('botonGrabar')
let tablaComponentes = document.getElementById('tablaModulo8')
let numeroComponentes = parseInt(JSON.parse(sessionStorage.getItem(`Alt_numero_${alternativaGanadora}`)).numeroCom)
let nombreComponente = JSON.parse(sessionStorage.getItem(`detalleCompAlt_${alternativaGanadora}`))
let array_nuevo = []

let infoModulo = JSON.parse(sessionStorage.getItem('tablaModulo8'))


let x = 0
let y = 0


if (infoModulo!=null) {
    tablaComponentes.innerHTML  += 
`
<tr>
    <td rowspan="${numeroComponentes}" class="bajada">COMPONENTES</td>
    <td class="bajada">1</td>
    <td><span contenteditable="false" class="textInput8">${nombreComponente.rows[0][1]}</span></td>
    <td><span contenteditable="true" class="textInput8">${infoModulo.rows[3][2]}</span></td>
    <td><span contenteditable="true" class="textInput8">${infoModulo.rows[3][3]}</span></td>
    <td><span contenteditable="true" class="textInput8">${infoModulo.rows[3][4]}</span></td>
</tr>
`
while (x<numeroComponentes-1) {
    var rowCount = tablaComponentes.rows.length;
    var row = tablaComponentes.insertRow(rowCount);
    
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(-1)
    var cell3 = row.insertCell(-1)
    var cell4 = row.insertCell(-1)
    var cell5 = row.insertCell(-1)


    cell1.className = "bajada"
    cell1.innerHTML=`<td class="bajada"><span contenteditable="false">${x+2}</span></td>`
    cell2.innerHTML=`<td><span contenteditable="false" class="textInput8">${nombreComponente.rows[x+1][1]}</span></td>`
    cell3.innerHTML=`<td><span contenteditable="true" class="textInput8">${infoModulo.rows[x+4][2]}</span></td>`
    cell4.innerHTML=`<td><span contenteditable="true" class="textInput8">${infoModulo.rows[x+4][3]}</span></td>`
    cell5.innerHTML=`<td><span contenteditable="true" class="textInput8">${infoModulo.rows[x+4][4]}</span></td>`
    x++
}


while (y<numeroComponentes) {
    let suma = JSON.parse(sessionStorage.getItem(`alt${alternativaGanadora}_com${y+1}`))
    
    suma.rows.forEach(el => {
        array_nuevo.push(el[0]);
    });
    y++
}
} else {
    tablaComponentes.innerHTML  += 
    `
    <tr>
        <td rowspan="${numeroComponentes}" class="bajada">COMPONENTES</td>
        <td class="bajada">1</td>
        <td><span contenteditable="false" class="textInput8">${nombreComponente.rows[0][1]}</span></td>
        <td><span contenteditable="true" class="textInput8"></span></td>
        <td><span contenteditable="true" class="textInput8"></span></td>
        <td><span contenteditable="true" class="textInput8"></span></td>
    </tr>
    `
    while (x<numeroComponentes-1) {
        var rowCount = tablaComponentes.rows.length;
        var row = tablaComponentes.insertRow(rowCount);
        
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(-1)
        var cell3 = row.insertCell(-1)
        var cell4 = row.insertCell(-1)
        var cell5 = row.insertCell(-1)
    
    
        cell1.className = "bajada"
        cell1.innerHTML=`<td class="bajada"><span contenteditable="false">${x+2}</span></td>`
        cell2.innerHTML=`<td><span contenteditable="false" class="textInput8">${nombreComponente.rows[x+1][1]}</span></td>`
        cell3.innerHTML=`<td><span contenteditable="true" class="textInput8"></span></td>`
        cell4.innerHTML=`<td><span contenteditable="true" class="textInput8"></span></td>`
        cell5.innerHTML=`<td><span contenteditable="true" class="textInput8"></span></td>`
        x++
    }
    
    
    while (y<numeroComponentes) {
        let suma = JSON.parse(sessionStorage.getItem(`alt${alternativaGanadora}_com${y+1}`))
        
        suma.rows.forEach(el => {
            array_nuevo.push(el[0]);
        });
        y++
    }
}





if (infoModulo!=null) {
    let fin11 = document.getElementById('fin11')
    let fin12 = document.getElementById('fin12')
    let fin13 = document.getElementById('fin13')
    let fin14 = document.getElementById('fin14')
    let fin21 = document.getElementById('fin21')
    let fin22 = document.getElementById('fin22')
    let fin23 = document.getElementById('fin23')
    let fin24 = document.getElementById('fin24')
    let propr1 = document.getElementById('propr1')
    let propr2 = document.getElementById('propr2')
    let propr3 = document.getElementById('propr3')
    let propr4 = document.getElementById('propr4')

    fin11.innerHTML = infoModulo.rows[0][1]
    fin12.innerHTML = infoModulo.rows[0][2]
    fin13.innerHTML = infoModulo.rows[0][3]
    fin14.innerHTML = infoModulo.rows[0][4]
    fin21.innerHTML = infoModulo.rows[1][1]
    fin22.innerHTML = infoModulo.rows[1][2]
    fin23.innerHTML = infoModulo.rows[1][3]
    fin24.innerHTML = infoModulo.rows[1][4]
    propr1.innerHTML = infoModulo.rows[2][2]
    propr2.innerHTML = infoModulo.rows[2][3]
    propr3.innerHTML = infoModulo.rows[2][4]
    propr4.innerHTML = infoModulo.rows[2][5]

    tablaComponentes.innerHTML  += 
    `
    <tr>
        <td rowspan="${array_nuevo.length}" class="bajada">ACTIVIDADES</td>
        <td class="bajada">1</td>
        <td><span contenteditable="false" class="textInput8">${array_nuevo[0]}</span></td>
        <td><span contenteditable="true" class="textInput8">${infoModulo.rows[infoModulo.rows.length-array_nuevo.length][2]}</span></td>
        <td><span contenteditable="true" class="textInput8">${infoModulo.rows[infoModulo.rows.length-array_nuevo.length][3]}</span></td>
        <td><span contenteditable="true" class="textInput8">${infoModulo.rows[infoModulo.rows.length-array_nuevo.length][4]}</span></td>
    </tr>
    `

    let i = 0
    while (i < array_nuevo.length-1) {
        var rowCount = tablaComponentes.rows.length;
        var row = tablaComponentes.insertRow(rowCount);
        
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(-1)
        var cell3 = row.insertCell(-1)
        var cell4 = row.insertCell(-1)
        var cell5 = row.insertCell(-1)

        cell1.className = "bajada"
        cell1.innerHTML=`${i+2}`
        cell2.innerHTML=`<td><span contenteditable="false" class="textInput8">${array_nuevo[i+1]}</span></td>`
        cell3.innerHTML=`<td><span contenteditable="true" class="textInput8">${infoModulo.rows[infoModulo.rows.length-array_nuevo.length+(i+1)][2]}</span></td>`
        cell4.innerHTML=`<td><span contenteditable="true" class="textInput8">${infoModulo.rows[infoModulo.rows.length-array_nuevo.length+(i+1)][3]}</span></td>`
        cell5.innerHTML=`<td><span contenteditable="true" class="textInput8">${infoModulo.rows[infoModulo.rows.length-array_nuevo.length+(i+1)][4]}</span></td>`
        i++
    }
} else {

    tablaComponentes.innerHTML  += 
    `
    <tr>
        <td rowspan="${array_nuevo.length}" class="bajada">ACTIVIDADES</td>
        <td class="bajada">1</td>
        <td><span contenteditable="false" class="textInput8">${array_nuevo[0]}</span></td>
        <td><span contenteditable="true" class="textInput8"></span></td>
        <td><span contenteditable="true" class="textInput8"></span></td>
        <td><span contenteditable="true" class="textInput8"></span></td>
    </tr>
    `
    
    let i = 0
    while (i < array_nuevo.length-1) {
        var rowCount = tablaComponentes.rows.length;
        var row = tablaComponentes.insertRow(rowCount);
        
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(-1)
        var cell3 = row.insertCell(-1)
        var cell4 = row.insertCell(-1)
        var cell5 = row.insertCell(-1)
    
        cell1.className="bajada"
        cell1.innerHTML=`${i+2}`
        cell2.innerHTML=`<td><span contenteditable="false" class="textInput8">${array_nuevo[i+1]}</span></td>`
        cell3.innerHTML=`<td><span contenteditable="true" class="textInput8"></span></td>`
        cell4.innerHTML=`<td><span contenteditable="true" class="textInput8"></span></td>`
        cell5.innerHTML=`<td><span contenteditable="true" class="textInput8"></span></td>`
        i++
    }
}






function contarFilas() {

    const tables = document.getElementsByTagName('table');

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

                const cellData = cells[k].innerText.trim();
                if (cells[k].rowSpan > 1) {
                    continue; 
                }

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

botonGrabar.addEventListener('click',contarFilas)
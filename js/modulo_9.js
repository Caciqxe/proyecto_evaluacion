const botonGrabar = document.getElementById('botonGrabar')
const alternativaGanadora = sessionStorage.getItem('alternativaGanadora')
let numeroComponentes = parseInt(JSON.parse(sessionStorage.getItem(`Alt_numero_${alternativaGanadora}`)).numeroCom)
let horizonte = parseInt(sessionStorage.getItem('horizonteEvaluacion'))
let tablaNueva = document.getElementById('tablaCronograma')
let importarCronograma = JSON.parse(sessionStorage.getItem('tablaCronograma'))
let x = 0
let y = 0
let ayuda = document.getElementById('ayuda')
let array_nuevo = []

let mes = document.getElementById('mes')
let trimestre = document.getElementById('trimestre')
let semestre = document.getElementById('semestre')
let ano = document.getElementById('ano')

let modHoz = parseInt(sessionStorage.getItem('modHoz'))

if (modHoz === null) {
    modHoz = 1
}


ayuda.innerHTML += 
`
<th style="min-width:50px; padding:0%">ITEM</th>
<th style="min-width:200px; padding:0%">ACTIVIDAD</th>
`

while (x<=(horizonte*modHoz)) {

    if (modHoz === 12) {
        ayuda.innerHTML += 
        `
        <th style="min-width:70px; padding:0%">Mes ${x}</th>
        `
    } else if (modHoz === 4) {
        ayuda.innerHTML += 
        `
        <th style="min-width:70px; padding:0%">Trim ${x}</th>
        `
    } else if (modHoz === 2) {
        ayuda.innerHTML += 
        `
        <th style="min-width:70px; padding:0%">Sem ${x}</th>
        `
    } else if (modHoz === 1) {
        ayuda.innerHTML += 
        `
        <th style="min-width:70px; padding:0%">Año ${x}</th>
        `
    }
    
    x++
}

ayuda.innerHTML += 
`
<th style="width:1500px; padding:0.1%">OBSERVACIONES</th>
`




while (y<numeroComponentes) {
    let suma = JSON.parse(sessionStorage.getItem(`alt${alternativaGanadora}_com${y+1}`))
    
    suma.rows.forEach(el => {
        array_nuevo.push(el[0]);
    });
    y++
}


let i = 0
while (i < array_nuevo.length) {
    let z = 0
    tablaNueva.innerHTML += 
    `
    <tr id=act_${i+1}>
    </tr>
    `
    while (z <= ((horizonte*modHoz)+3)) {
        let columnas = document.getElementById(`act_${i+1}`)
        
        if (z===0) {
            columnas.innerHTML += 
            `
            <td class="bajada">${i+1}</td>
            `
        } else if (z===1) {
            columnas.innerHTML += 
            `
            <td><span contenteditable="false" class="textInput">${array_nuevo[i]}</span></td>
            `
        } else if(z<=((horizonte*modHoz)+2)) {
            if (importarCronograma!=null) {
                columnas.innerHTML += 
                `
                <td id="act${i}_hor${z}" class="celdaX">${importarCronograma.rows[i][z]}</td>
                `
            } else {
                columnas.innerHTML += 
                `
                <td id="act${i}_hor${z}" class="celdaX"></td>
                `
            }
        } else {
            if (importarCronograma!=null) {
                columnas.innerHTML += 
                `
                <td><span contenteditable="true" class="textInput">${importarCronograma.rows[i][z]}</span></td>
                `
            } else {
                columnas.innerHTML += 
                `
                <td><span contenteditable="true" class="textInput"></span></td>
                `
            }
        }

        
        z++
    }
    
    i++
}

var tds = document.getElementsByClassName("celdaX")

for(var index = 0, tdd = tds.length; index < tdd; ++index){
   tds[index].style.color = "#071334";
   tds[index].style.textAlign = "center"
}

const cambiarColor = (event) =>{

    let eId = event.srcElement.id.toString() 
    if (eId.includes('act') && eId.includes('_hor')) {
        let celda = document.getElementById(eId)
        
        
        
        


        if (celda.innerText.trim() === "") {
            
            celda.textContent = 'X'
        } else if (celda.innerText.trim() === "X") {
            
            celda.textContent = ''
        }
    }

    
    else {

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

window.addEventListener('click', cambiarColor)
botonGrabar.addEventListener('click', contarFilas)

mes.addEventListener('click', function name() {
    sessionStorage.setItem('modHoz', 12)
    sessionStorage.removeItem('tablaCronograma')
    window.location.reload()
})
trimestre.addEventListener('click', function name() {
    sessionStorage.setItem('modHoz', 4)
    sessionStorage.removeItem('tablaCronograma')
    window.location.reload()
})
semestre.addEventListener('click', function name() {
    sessionStorage.setItem('modHoz', 2)
    sessionStorage.removeItem('tablaCronograma')
    window.location.reload()
})
ano.addEventListener('click', function name() {
    sessionStorage.setItem('modHoz', 1)
    sessionStorage.removeItem('tablaCronograma')
    window.location.reload()
})
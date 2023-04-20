const botonGrabar = document.getElementById('botonGrabar')
const costosOperacion = document.getElementById('costosOperacion')
const numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))
const ejecucion = sessionStorage.getItem('ejecucion')

let arrayManoObra = [
    {name:'---',
    factor:0},
    {name:'Mano de Obra Calificada',   
    factor:0.808},
    {name:'Mano de Obra Semi Calificada',
    factor:0.696},
    {name:'Mano de Obra No Calificada',
    factor:0.663}
]

let arrayFactores = [
    {name:'---',
    factor:0},
    {name:'Supervisión',
    factor:0.788},
    {name:'Asistencia Técnica',
    factor:0.788},
    {name:'Operación y mantenimiento',
    factor:0.788},
    {name:'Gastos Administrativos',
    factor:1},
    {name:'Consultorias',
    factor:0.788},
    {name:'Capacitaciones',
    factor:0.788},
    {name:'Mano de Obra Calificada',
    factor:0.8084},
    {name:'Mano de Obra Semi Calificada',
    factor:0.696},
    {name:'Mano de Obra No Calificada',
    factor:0.6625}
]


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

let x = 0

while (x<numAlternativas) {

    let sesion = sessionStorage.getItem(`costosOperacionAlt${x+1}`)
    
    if (sesion != null) {
        let horizonte = sessionStorage.getItem('horizonteEvaluacion')
        let tablaCostos = JSON.parse(sessionStorage.getItem(`costosOperacionAlt${x+1}`))
        let numComp = sessionStorage.getItem(`Alt_numero_${x+1}`)

        let asd = 3
        let y = 0
        costosOperacion.innerHTML +=
        `
        <span class="alternativaStilo">Alternativa N° ${x+1}: ${JSON.parse(numComp).name}</span>
        <table id=costosOperacionAlt${x+1} class="tablaModulo5_3" class="tablaModulo5_3">
            <tbody>
                <tr id=header_alt${x+1}>
                    <th colspan="3">Detalle</th>
                    <th>Factor Social</th>
                    <th>Unidad de Medida</th>
                    <th>Cantidad Requerida</th>
                    <th>Valor Unitario</th>
                    <th>Valor Total</th>
                </tr>
                <tr>
                    <td class="bajada" colspan="${(horizonte)+4}">Costos en Mano de Obra</td>
                </tr>
                <tr id="semiCalificada_alt${x+1}">
                    <td><span class="textInput" contenteditable="true">${tablaCostos.rows[0][0]}</span></td>
                    <td colspan="2" class="celdaManoObra">
                        <span style="display: none;"></span>
                        <select class="dropdownManoObra" value="${tablaCostos.rows[0][1]}"></select>
                    </td>

                    <td><span class="respuestaTabla">${tablaCostos.rows[0][2]}</span></td>

                    <td class="celdaUnidades">
                        <span style="display: none;"></span>
                        <select class="dropdownUnidades" value="${tablaCostos.rows[0][3]}"></select>
                    </td>
                    
                    <td><span class="textInput" contenteditable="true" style="text-align:right">${tablaCostos.rows[0][4]}</span></td>
                    <td><span class="textInput" contenteditable="true" style="text-align:right">${tablaCostos.rows[0][5]}</span></td>
                    <td><span class="textInput" contenteditable="false" style="text-align:right">${parseInt(tablaCostos.rows[0][4]*tablaCostos.rows[0][5])}</span></td>
                </tr>
                <tr id="calificada_alt${x+1}">
                    <td style="min-width:5cm"><span class="textInput" contenteditable="true">${tablaCostos.rows[1][0]}</span></td>
                    <td colspan="2" class="celdaManoObra">
                        <span style="display: none;"></span>
                        <select class="dropdownManoObra" value="${tablaCostos.rows[1][1]}"></select>
                    </td>

                    <td><span class="respuestaTabla">${tablaCostos.rows[1][2]}</span></td>

                    <td class="celdaUnidades">
                        <span style="display: none;"></span>
                        <select class="dropdownUnidades" value="${tablaCostos.rows[1][3]}"></select>
                    </td>
                    <td><span class="textInput" contenteditable="true" style="text-align:right">${tablaCostos.rows[1][4]}</span></td>
                    <td><span class="textInput" contenteditable="true" style="text-align:right">${tablaCostos.rows[1][5]}</span></td>
                    <td><span class="textInput" contenteditable="false" style="text-align:right">${parseInt(tablaCostos.rows[1][4]*tablaCostos.rows[1][5])}</span></td>
                </tr>
                <tr id="noCalificada_alt${x+1}">
                    <td><span class="textInput" contenteditable="true">${tablaCostos.rows[2][0]}</span></td>

                    <td colspan="2" class="celdaManoObra">
                        <span style="display: none;"></span>
                        <select class="dropdownManoObra" value="${tablaCostos.rows[2][1]}"></select>
                    </td>

                    <td><span class="respuestaTabla">${tablaCostos.rows[2][2]}</span></td>
                    
                    <td class="celdaUnidades">
                        <span style="display: none;"></span>
                        <select class="dropdownUnidades" value="${tablaCostos.rows[2][3]}"></select>
                    </td>

                    <td><span class="textInput" contenteditable="true" style="text-align:right">${tablaCostos.rows[2][4]}</span></td>
                    <td><span class="textInput" contenteditable="true" style="text-align:right">${tablaCostos.rows[2][5]}</span></td>
                    <td><span class="textInput" contenteditable="false" style="text-align:right">${parseInt(tablaCostos.rows[2][4]*tablaCostos.rows[2][5])}</span></td>
                </tr>
                <tr>
                    <td colspan="${(horizonte)+3}" class="bajada">Costos en otros Ítems</td>
                </tr>
            </tbody>
        </table>
        <button id="a_bttn_alt${x+1}" class="agregar">AGREGAR FILA</button>
        <button id="e_bttn_alt${x+1}" class="eliminar">ELIMINAR FILA</button>
        <table id="ultimoTotalesAlt${x+1}" class="tablaModulo5_3">
            <tbody>
                <tr id="periodosAlt${x+1}">
                    <th></th>
                    <th>Valor Total</th>
                </tr>
                <tr id="costoTotalPrecioPrivadoAlt${x+1}">
                    <td class="bajada"><span>COSTO TOTAL Precios Privados</span></td>
                    <td><span class="respuestaTabla" id="totalTotalPrecioPrivadoAlt${x+1}" style="text-align:right">0</span></td>
                </tr>
                <tr id="costoTotalPrecioSocialAlt${x+1}">
                    <td class="bajada"><span>COSTO TOTAL Precios Sociales</span></td>
                    <td><span class="respuestaTabla" id="totalTotalPrecioSocialAlt${x+1}" style="text-align:right">0</span></td>
                </tr>
            </tbody>
        </table>
        `

        while (asd<tablaCostos.rows.length) {
            let tablaCostosOperacion = document.getElementById(`costosOperacionAlt${x+1}`)
            let id_loc = `costosOperacionAlt${x+1}`
            
            id_loc = id_loc.replace('costosOperacion','')
            id_loc = id_loc.toLowerCase()

            var rowCountTabla = tablaCostosOperacion.rows.length
            var rowTable = tablaCostosOperacion.insertRow(rowCountTabla)
            var cell1T = rowTable.insertCell(-1)
            var cell2T = rowTable.insertCell(-1)
            cell2T.colSpan = 2
            var cell3T = rowTable.insertCell(-1)
            var cell4T = rowTable.insertCell(-1)
            var cell5T = rowTable.insertCell(-1)
            var cell6T = rowTable.insertCell(-1)
            var cell7T = rowTable.insertCell(-1)

            cell1T.innerHTML = `<span contenteditable="true" class="textInput" id=item${rowCountTabla-6}>${tablaCostos.rows[asd][0]}</span>`
            cell2T.className = "dropdown-cell"
            cell2T.innerHTML = 
            `
                <span style="display: none;"></span>
                <select class="my-dropdown" value="${tablaCostos.rows[asd][1]}"></select>
            `
            
            //cell2T.innerHTML = `<input class="input-dropdown" id="categoria${rowCountTabla-6}_${id_loc}" list="listaSocial${rowCountTabla-6}_${id_loc}"><datalist class=selectorFactorSocial id="listaSocial${rowCountTabla-6}_${id_loc}" style="overflow-y: auto"></datalist>`
/*             cell2T.innerHTML = `
            <div class="input-dropdown">
                <input id="categoria${rowCountTabla-6}_${id_loc}" type="text">
                <ul id="listaSocial${rowCountTabla-6}_${id_loc}"></ul>
            </div>
            ` */
            cell3T.innerHTML = `<span contenteditable="true" class="textInput" id=factorSocial${rowCountTabla-6}_${id_loc}>${tablaCostos.rows[asd][2]}</span>`
        
            cell4T.className = "dropdownUnidad"
            cell4T.innerHTML = 
            `
                <span style="display: none;"></span>
                <select class="myDropdownUnidad" value="${tablaCostos.rows[asd][3]}" id=unidadMedida${rowCountTabla-6}></select>
            `

            cell5T.innerHTML = `<span contenteditable="true" class="textInput" id=cantidadRequerida${rowCountTabla-6} style="text-align:right">${tablaCostos.rows[asd][4]}</span>`
            cell6T.innerHTML = `<span contenteditable="true" class="textInput" id=valorUnitario${rowCountTabla-6} style="text-align:right">${tablaCostos.rows[asd][5]}</span>`
            cell7T.innerHTML = `<span contenteditable="false" class="textInput" id=valorTotal${rowCountTabla-6} style="text-align:right">${parseInt(tablaCostos.rows[asd][4]*tablaCostos.rows[asd][5])}</span>`


            let array_periodos=[]
            for (let index = 0; index <= horizonte; index++) {
                array_periodos[index] = rowTable.insertCell(-1)
                array_periodos[index].innerHTML = `<td class="bajada"><input id=input_item${rowCountTabla-5}_hor${index} value=${tablaCostos.rows[asd][index+7]} style="text-align:right"></td>`
            }

            asd++
        }

        while (y<=horizonte) {
            let semiCalificada = document.getElementById(`semiCalificada_alt${x+1}`)
            let calificada = document.getElementById(`calificada_alt${x+1}`)
            let noCalificada = document.getElementById(`noCalificada_alt${x+1}`)
            let cabezera = document.getElementById(`header_alt${x+1}`)
            let periodosCostos = document.getElementById(`periodosAlt${x+1}`)
            let costoTotalPrecioPrivado = document.getElementById(`costoTotalPrecioPrivadoAlt${x+1}`)
            let costoTotalPrecioSocial = document.getElementById(`costoTotalPrecioSocialAlt${x+1}`)
            
            cabezera.innerHTML += 
            `
            <th id="alt${x+1}_hor${y}">${y}</th>
            `
            semiCalificada.innerHTML +=
            `
            <td><span class="respuestaTabla" id="semiCalificada_alt${x+1}_hor${y}" contenteditable="true" style="text-align:right">${tablaCostos.rows[0][y+7]}</span></td>
            `
            calificada.innerHTML +=
            `
            <td><span class="respuestaTabla" id="calificada_alt${x+1}_hor${y}" contenteditable="true" style="text-align:right">${tablaCostos.rows[1][y+7]}</span></td>
            `
            noCalificada.innerHTML +=
            `
            <td><span class="respuestaTabla" id="noCalificada_alt${x+1}_hor${y}" contenteditable="true" style="text-align:right">${tablaCostos.rows[2][y+7]}</span></td>
            `
    
            periodosCostos.innerHTML +=
            `
            <th>${y}</td>
            `

/*             let sumaPrecioPrivado = 0
            let sumMod = 0
            while (sum) {
                
            } */
            let sumValPrivado = 0
            let sumValSocial = 0
            let jz = 0
            while (jz<tablaCostos.rows.length) {
                
                if (parseInt(tablaCostos.rows[jz][y+7])==="") {
                    
                } else {
                    sumValPrivado += parseInt(tablaCostos.rows[jz][y+7])
                }

                if (parseInt(tablaCostos.rows[jz][y+7])==="") {
                    
                } else {
                    sumValSocial += parseInt(tablaCostos.rows[jz][y+7]*tablaCostos.rows[jz][2])
                }

                jz++
            }
            costoTotalPrecioPrivado.innerHTML +=
            `
            <td><span class="respuestaTabla" id="costoTotalPrecioPrivado_alt${x+1}_hor${y} contenteditable="false" style="text-align:right">${sumValPrivado}</span></td>
            `
            costoTotalPrecioSocial.innerHTML +=
            `
            <td><span class="respuestaTabla" id="costoTotalPrecioSocial_alt${x+1}_hor${y} contenteditable="false" style="text-align:right">${sumValSocial}</span></td>
            `

            y++
        }
    /*     while (y <parseInt(JSON.parse(numComp).numeroCom)) {
            
            y++
        } */
        costosOperacion.innerHTML +=
        `
        `
        
    } else {
        let horizonte = sessionStorage.getItem('horizonteEvaluacion')
        let y = 0
        let numComp = sessionStorage.getItem(`Alt_numero_${x+1}`)


        costosOperacion.innerHTML +=
        `
        <span class="alternativaStilo">Alternativa N° ${x+1}: ${JSON.parse(numComp).name}</span>
        <table id=costosOperacionAlt${x+1} class="tablaModulo5_3">
            <tbody>
                <tr id=header_alt${x+1}>
                    <th colspan="3">Detalle</th>
                    <th>Factor Social</th>
                    <th>Unidad de Medida</th>
                    <th>Cantidad Requerida</th>
                    <th>Valor Unitario</th>
                    <th>Valor Total</th>
                </tr>
                <tr>
                    <td class="bajada" colspan="${(horizonte)+4}">Costos en Mano de Obra</td>
                </tr>
                <tr id="semiCalificada_alt${x+1}">
                    <td><span class="textInput" contenteditable="true"></span></td>
                    <td colspan="2" class="celdaManoObra">
                        <span style="display: none;"></span>
                        <select class="dropdownManoObra"></select>
                    </td>

                    <td><span class="respuestaTabla"></span></td>

                    <td class="celdaUnidades">
                        <span style="display: none;"></span>
                        <select class="dropdownUnidades"></select>
                    </td>
                    <td><span class="textInput" contenteditable="true" style="text-align:right"></span></td>
                    <td><span class="textInput" contenteditable="true" style="text-align:right"></span></td>
                    <td><span class="textInput" contenteditable="false" style="text-align:right">0</span></td>
                </tr>
                <tr id="calificada_alt${x+1}">
                    <td style="min-width:5cm"><span class="textInput" contenteditable="true"></span></td>
                    <td colspan="2" class="celdaManoObra">
                        <span style="display: none;"></span>
                        <select class="dropdownManoObra"></select>
                    </td>

                    <td><span class="respuestaTabla"></span></td>
                    
                    <td class="celdaUnidades">
                        <span style="display: none;"></span>
                        <select class="dropdownUnidades"></select>
                    </td>

                    <td><span class="textInput" contenteditable="true" style="text-align:right"></span></td>
                    <td><span class="textInput" contenteditable="true" style="text-align:right"></span></td>
                    <td><span class="textInput" contenteditable="false" style="text-align:right">0</span></td>
                </tr>
                <tr id="noCalificada_alt${x+1}">
                    <td><span class="textInput" contenteditable="true"></span></td>
                    <td colspan="2" class="celdaManoObra">
                        <span style="display: none;"></span>
                        <select class="dropdownManoObra"></select>
                    </td>
                    
                    <td><span class="respuestaTabla"></span></td>
                    
                    <td class="celdaUnidades">
                        <span style="display: none;"></span>
                        <select class="dropdownUnidades"></select>
                    </td>
                    <td><span class="textInput" contenteditable="true" style="text-align:right"></span></td>
                    <td><span class="textInput" contenteditable="true" style="text-align:right"></span></td>
                    <td><span class="textInput" contenteditable="false" style="text-align:right">0</span></td>
                </tr>
                <tr>
                    <td colspan="${(horizonte)+3}" class="bajada">Costos en otros Ítems</td>
                </tr>
            </tbody>
        </table>
        <button id="a_bttn_alt${x+1}" class="agregar">AGREGAR FILA</button>
        <button id="e_bttn_alt${x+1}" class="eliminar">ELIMINAR FILA</button>
        <table class="tablaModulo5_3">
            <tbody>
                <tr id="periodosAlt${x+1}">
                    <th></th>
                    <th>Valor Total</th>
                </tr>
                <tr id="costoTotalPrecioPrivadoAlt${x+1}">
                    <td class="bajada"><span>COSTO TOTAL Precios Privados</span></td>
                    <td><span class="respuestaTabla" style="text-align:right">0</span></td>
                </tr>
                <tr id="costoTotalPrecioSocialAlt${x+1}">
                    <td class="bajada"><span>COSTO TOTAL Precios Sociales</span></td>
                    <td><span class="respuestaTabla" style="text-align:right">0</span></td>
                </tr>
            </tbody>
        </table>
        `
        while (y<=horizonte) {
            let semiCalificada = document.getElementById(`semiCalificada_alt${x+1}`)
            let calificada = document.getElementById(`calificada_alt${x+1}`)
            let noCalificada = document.getElementById(`noCalificada_alt${x+1}`)
            let cabezera = document.getElementById(`header_alt${x+1}`)
            let periodosCostos = document.getElementById(`periodosAlt${x+1}`)
            let costoTotalPrecioPrivado = document.getElementById(`costoTotalPrecioPrivadoAlt${x+1}`)
            let costoTotalPrecioSocial = document.getElementById(`costoTotalPrecioSocialAlt${x+1}`)

            cabezera.innerHTML += 
            `
            <th id="alt${x+1}_hor${y}">${y}</th>
            `
            semiCalificada.innerHTML +=
            `
            <td><span class="respuestaTabla" id="semiCalificada_alt${x+1}_hor${y}" contenteditable="true" style="text-align:right">0</span></td>
            `
            calificada.innerHTML +=
            `
            <td><span class="respuestaTabla" id="calificada_alt${x+1}_hor${y}" contenteditable="true" style="text-align:right">0</span></td>
            `
            noCalificada.innerHTML +=
            `
            <td><span class="respuestaTabla" id="noCalificada_alt${x+1}_hor${y}" contenteditable="true" style="text-align:right">0</span></td>
            `
    
            periodosCostos.innerHTML +=
            `
            <th>${y}</td>
            `
            costoTotalPrecioPrivado.innerHTML +=
            `
            <td><span class="respuestaTabla" id="costoTotalPrecioPrivado_alt${x+1}_hor${y}" contenteditable="false" style="text-align:right">0</span></td>
            `
            costoTotalPrecioSocial.innerHTML +=
            `
            <td><span class="respuestaTabla" id="costoTotalPrecioSocial_alt${x+1}_hor${y}" contenteditable="false" style="text-align:right">0</span></td>
            `


            y++
        }
        /*     while (y <parseInt(JSON.parse(numComp).numeroCom)) {
                
                y++
            } */
        costosOperacion.innerHTML +=
        `
        `
    }
    x++
}




let ultimoWhile = 0

while (ultimoWhile<numAlternativas) {
    let ultimoTotales = JSON.parse(sessionStorage.getItem(`ultimoTotalesAlt${ultimoWhile+1}`))
    
    if (ultimoTotales != null) {
        let valorTotalPrivados = document.getElementById(`totalTotalPrecioPrivadoAlt${ultimoWhile+1}`)
        let valorTotalSociales = document.getElementById(`totalTotalPrecioSocialAlt${ultimoWhile+1}`)
        let valPrivadoFinal = 0
        let valSocialFinal = 0

        console.log(valorTotalPrivados + 'nnnn');
        console.log(valorTotalSociales + 'nnnn');

        for (let index = 2; index < ultimoTotales.rows[0].length; index++) {
            valPrivadoFinal  =  valPrivadoFinal + parseInt(ultimoTotales.rows[0][index]);
            valSocialFinal  =  valSocialFinal + parseFloat(ultimoTotales.rows[1][index])

            console.log('index :'+index);
        }

        valorTotalPrivados.innerHTML = valPrivadoFinal
        valorTotalSociales.innerHTML = valSocialFinal
    } else {

    }
    ultimoWhile++
}



const agregarFila = (event) => {
    if (event.target.classList.contains('agregar') ) 
    {
        let horizonte = sessionStorage.getItem('horizonteEvaluacion')

        let table = event.srcElement.id.toString()
        let id_loc = table.replace('a_bttn_alt','costosOperacionAlt')
        table = document.getElementById(`${id_loc}`)
        var rowCount = table.rows.length;
        var rowCountHor = table.rows.length;
        id_loc = id_loc.replace('costosOperacion','')
        id_loc = id_loc.toLowerCase()


        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(-1)
        var cell2 = row.insertCell(-1)
        cell2.colSpan = 2
        var cell3 = row.insertCell(-1)
        var cell4 = row.insertCell(-1)
        var cell5 = row.insertCell(-1)
        var cell6 = row.insertCell(-1)
        var cell7 = row.insertCell(-1)
        //var cell8 = row.insertCell(-1)
        cell1.innerHTML = `<span contenteditable="true" class="textInput" id=item${rowCount-6}></span>`
        //cell2.innerHTML = `<input id="categoria${rowCount-6}_${id_loc}" list="listaSocial${rowCount-6}_${id_loc}"><datalist class=selectorFactorSocial id=listaSocial${rowCount-6}_${id_loc} style="overflow-y: auto"></datalist>`

        cell2.className = "dropdown-cell"
        cell2.innerHTML = 
        `
            <span style="display: none;"></span>
            <select class="my-dropdown"></select>
        `
        cell3.innerHTML = `<span contenteditable="true" class="textInput" id=factorSocial${rowCount-6}>0</span>`
        
        cell4.className = "dropdownUnidad"
        cell4.innerHTML = 
        `
            <span style="display: none;"></span>
            <select class="myDropdownUnidad"></select>
        `


        //cell4.innerHTML = `<span contenteditable="true" class="textInput" id=unidadMedida${rowCount-6}></span>`
        cell5.innerHTML = `<span contenteditable="true" class="textInput" id=cantidadRequerida${rowCount-6} style="text-align:right"></span>`
        cell6.innerHTML = `<span contenteditable="true" class="textInput" id=valorUnitario${rowCount-6} style="text-align:right"></span>`
        cell7.innerHTML = `<span contenteditable="false" class="textInput" id=valorTotal${rowCount-6} style="text-align:right">0</span>`
        //cell8.innerHTML = `<span contenteditable="true" class="textInput" id=valorSocial${rowCount-6}>A</span>`
        let datalist = document.getElementById(`listaSocial${rowCount-6}_${id_loc}`)

/*         arrayFactores.forEach(el => {
            datalist.innerHTML += 
            `   
            <option value="${el.name}">
            `

        }); */

        let array_periodos=[]
        for (let index = 0; index <= horizonte; index++) {
            array_periodos[index] = row.insertCell(-1)
            array_periodos[index].innerHTML = `<td class="bajada"><input id=input_item${rowCount-5}_hor${index} value=0></td>`

        }


crearOpcionesUnidad(row)
crearOpcionesDetalle(row)
    }
}

const eliminarFila = (event) =>{
    if (event.target.classList.contains('eliminar')) {
        

        let table = event.srcElement.id.toString()
        table = table.replace('e_bttn_alt','costosOperacionAlt')
        table = document.getElementById(`${table}`)
        var rowCount = table.rows.length;

        if (rowCount >= 7) {
    
            table.deleteRow(-1);
        }
    }
}

if (ejecucion == 1) {
    contarFilas2()
}


var dropdownCell = document.querySelectorAll('.dropdownUnidad');

dropdownCell.forEach(function(cell) {
    var dropdown = cell.querySelector('.myDropdownUnidad');

    if (dropdown.attributes[1] === undefined) {
            // Crea las opciones del dropdown basado en el array
            console.log(dropdown.attributes);
    arrayUnidades.forEach(function(value, index) {
        var option = document.createElement('option');
        option.value = index;
        option.text = value;
  
        // Si el valor actual es el valor predeterminado, establecer como seleccionado
  
        dropdown.appendChild(option);
      });
  
    } else {
        let valorPredeterminado = dropdown.attributes[1].value
        arrayUnidades.forEach(function(value, index) {
            var option = document.createElement('option');
            option.value = index;
            option.text = value;
      
            if (index === parseInt(valorPredeterminado)) {
                console.log('son iguales');
                option.selected = true;
            }

            // Si el valor actual es el valor predeterminado, establecer como seleccionado
      
            dropdown.appendChild(option);
          });
    }

    dropdown.onchange = function() {
        console.log(dropdown.value);
        let valor = arrayUnidades[dropdown.value]
        //valor = arrayUnidades[dropdown.innerHTML];
        console.log(valor);
    }
    dropdown.style.maxHeight = '100px';
})

/* const agregarFila = (event) => {
    if (event.target.classList.contains('agregar') )//=== 'agregar')
    {
    
    console.log(event.srcElement.id);
    let table = event.srcElement.id.toString()
    let id_loc = table.replace('a_bttn','tabla')
    table = document.getElementById(`${id_loc}`)
    var rowCount = table.rows.length;
    console.log(rowCount);
    console.log(table);
    var row = table.insertRow(-1);

    if (id_loc === 'tabla_participacion_comunitaria') {
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        cell1.innerHTML = `<span contenteditable="true" class="textInput" id=participacion_comunitaria_actor_${rowCount}></span>`
        cell2.innerHTML = `<span contenteditable="true" class="textInput" id=participacion_comunitaria_vinculacion_${rowCount}></span>`
        console.log(cell1);
        console.log(cell2);
    } else if (id_loc === 'tabla_estrategias_vinculacion') {
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);
        cell1.innerHTML = `<span contenteditable="true" class="textInput" id="estrategias_vinculacion_actor_${rowCount}"></span>`
        cell2.innerHTML = `<span contenteditable="true" class="textInput" id="estrategias_vinculacion_roles_${rowCount}"></span>`
        cell3.innerHTML = `<span contenteditable="true" class="textInput" id="estrategias_vinculacion_proyecto_${rowCount}"></span>` 
        
    } else {
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);
        cell1.innerHTML = `<span contenteditable="true" class="textInput" id="identificacion_interes_actor_${rowCount}"></span>`
        cell2.innerHTML = `<span contenteditable="true" class="textInput" id="identificacion_interes_problema_${rowCount}"></span>`
        cell3.innerHTML = `<span contenteditable="true" class="textInput" id="identificacion_interes_propuesta_${rowCount}"></span>`
    }

    }
} */
function sumaPeriodo(params) {
    
}

/* function par(e) {
    let campo = e.srcElement.id.toString()
    if (campo.startsWith('categoria')) {
        let input = document.getElementById(campo)
        campo = campo.replace('categoria','factorSocial')
        let modifical = document.getElementById(campo)
    
        arrayFactores.find((el)=>{
            if(el.name === input.value){
                modifical.innerHTML = el.factor
            }
        }
        )

    }
} */

var dropdownCells = document.querySelectorAll('.dropdown-cell');

// Para cada celda que contiene un dropdown
dropdownCells.forEach(function(cell) {
  // Encuentra el dropdown dentro de la celda
  var dropdown = cell.querySelector('.my-dropdown');

  if (dropdown.attributes[1] === undefined) {
      
  // Crea las opciones del dropdown basado en el array
  arrayFactores.forEach(function(value, index) {

    var option = document.createElement('option');
    option.value = index;
    option.text = value.name;
    
/*     if (value === valorPredeterminado) {
        option.selected = true;
    } */
    
    dropdown.appendChild(option);
  });

  // Envuelve el dropdown en un contenedor
  var dropdownContainer = document.createElement('div');
  dropdownContainer.className = 'dropdown-container';
  dropdown.parentNode.insertBefore(dropdownContainer, dropdown);
  dropdownContainer.appendChild(dropdown);

  // Establece la altura máxima del contenedor
  dropdownContainer.style.maxHeight = '100px';

  // Agrega un evento onchange al dropdown
  dropdown.onchange = function() {
    // Encuentra la celda donde deseas mostrar el valor seleccionado
    var resultCell = cell.nextElementSibling;

    // Encuentra el valor seleccionado en el arrayFactores
    var value = arrayFactores[dropdown.value];

    // Actualiza el contenido de la celda correspondiente
    resultCell.innerHTML = `<span style="text-align:right" class="textInput" contenteditable="false">${value.factor}</span>`
  };
  } else {
    let valorPredeterminado = dropdown.attributes[1].value
  // Crea las opciones del dropdown basado en el array
    arrayFactores.forEach(function(value, index) {
    var option = document.createElement('option');
    option.value = index;
    option.text = value.name;

    if (index === parseInt(valorPredeterminado)) {
        console.log('son iguales');
        option.selected = true;
    }
    
    dropdown.appendChild(option);
  });

  // Envuelve el dropdown en un contenedor
  var dropdownContainer = document.createElement('div');
  dropdownContainer.className = 'dropdown-container';
  dropdown.parentNode.insertBefore(dropdownContainer, dropdown);
  dropdownContainer.appendChild(dropdown);

  // Establece la altura máxima del contenedor
  dropdownContainer.style.maxHeight = '100px';

  // Agrega un evento onchange al dropdown
  dropdown.onchange = function() {
    // Encuentra la celda donde deseas mostrar el valor seleccionado
    var resultCell = cell.nextElementSibling;

    // Encuentra el valor seleccionado en el arrayFactores
    var value = arrayFactores[dropdown.value];

    // Actualiza el contenido de la celda correspondiente
    resultCell.innerHTML = `<span style="text-align:right" class="textInput" contenteditable="false">${value.factor}</span>`
  };
  }

});

function crearOpcionesUnidad(fila) {

    
// Encuentra el dropdown en la celda
var dropdownCell = fila.querySelector('.dropdownUnidad');
var dropdown = dropdownCell.querySelector('.myDropdownUnidad');
console.log(dropdown);
// Crea las opciones del dropdown basado en el array
arrayUnidades.forEach(function(value, index) {
  var option = document.createElement('option');
  option.value = index;
  option.text = value;

  // Si el valor actual es el valor predeterminado, establecer como seleccionado

  dropdown.appendChild(option);
});

dropdown.onchange = function() {
    console.log(dropdown.value);
    let valor = arrayUnidades[dropdown.value]
    //valor = arrayUnidades[dropdown.innerHTML];
    console.log(valor);

}


// Establece la altura máxima del dropdown
dropdown.style.maxHeight = '100px';

}

function crearOpcionesDetalle(fila) {

var dropdownCell = fila.querySelector('.dropdown-cell');
var dropdown = dropdownCell.querySelector('.my-dropdown');


  if (dropdown.attributes[1] === undefined) {
      
  // Crea las opciones del dropdown basado en el array
  arrayFactores.forEach(function(value, index) {

    var option = document.createElement('option');
    option.value = index;
    option.text = value.name;
    
/*     if (value === valorPredeterminado) {
        option.selected = true;
    } */
    
    dropdown.appendChild(option);
  });

  // Envuelve el dropdown en un contenedor
  var dropdownContainer = document.createElement('div');
  dropdownContainer.className = 'dropdown-container';
  dropdown.parentNode.insertBefore(dropdownContainer, dropdown);
  dropdownContainer.appendChild(dropdown);

  // Establece la altura máxima del contenedor
  dropdownContainer.style.maxHeight = '100px';

  // Agrega un evento onchange al dropdown
  dropdown.onchange = function() {
    // Encuentra la celda donde deseas mostrar el valor seleccionado
    var resultCell = dropdownCell.nextElementSibling;

    console.log(dropdown);
    // Encuentra el valor seleccionado en el arrayFactores
    var value = arrayFactores[dropdown.value];


    // Actualiza el contenido de la celda correspondiente
    resultCell.innerHTML = `<span style="text-align:right" class="textInput" contenteditable="false">${value.factor}</span>`
  };
  } else {
    let valorPredeterminado = dropdown.attributes[1].value
  // Crea las opciones del dropdown basado en el array
    arrayFactores.forEach(function(value, index) {
    var option = document.createElement('option');
    option.value = index;
    option.text = value.name;

    if (index === parseInt(valorPredeterminado)) {
        console.log('son iguales');
        option.selected = true;
    }
    
    dropdown.appendChild(option);
  });

  // Envuelve el dropdown en un contenedor
  var dropdownContainer = document.createElement('div');
  dropdownContainer.className = 'dropdown-container';
  dropdown.parentNode.insertBefore(dropdownContainer, dropdown);
  dropdownContainer.appendChild(dropdown);

  // Establece la altura máxima del contenedor
  dropdownContainer.style.maxHeight = '100px';

  // Agrega un evento onchange al dropdown
  dropdown.onchange = function() {
    // Encuentra la celda donde deseas mostrar el valor seleccionado
    var resultCell = dropdownCell.nextElementSibling;

    // Encuentra el valor seleccionado en el arrayFactores
    var value = arrayFactores[dropdown.value];

    // Actualiza el contenido de la celda correspondiente
    resultCell.innerHTML = `<span style="text-align:right" class="textInput" contenteditable="false">${value.factor}</span>`
  };
  }

    }

    window.addEventListener('DOMContentLoaded', function () {
        var dropdownCell = document.querySelectorAll('.celdaUnidades');
    
        dropdownCell.forEach(function(cell) {
        var dropdown = cell.querySelector('.dropdownUnidades');
    
    
        if (dropdown.attributes['value'] === undefined) {
                // Crea las opciones del dropdown basado en el array
        arrayUnidades.forEach(function(value, index) {
            var option = document.createElement('option');
            option.value = index;
            option.text = value;
      
            // Si el valor actual es el valor predeterminado, establecer como seleccionado
      
            dropdown.appendChild(option);
          });
      
        } else {
            let valorPredeterminado = dropdown.attributes['value'].value
            console.log(valorPredeterminado);
            arrayUnidades.forEach(function(value, index) {
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
            let valor = arrayUnidades[dropdown.value]
            //valor = arrayUnidades[dropdown.innerHTML];
            console.log(valor);
        }
        dropdown.style.maxHeight = '100px';
    })
    })


    //PARA MANO DE OBRA
    window.addEventListener('DOMContentLoaded', function () {
        var dropdownCell = document.querySelectorAll('.celdaManoObra');
    
        dropdownCell.forEach(function(cell) {
        var dropdown = cell.querySelector('.dropdownManoObra');
    
    
        if (dropdown.attributes['value'] === undefined) {
                // Crea las opciones del dropdown basado en el array
        arrayManoObra.forEach(function(value, index) {
            var option = document.createElement('option');
            option.value = index;
            option.text = value.name;

            // Si el valor actual es el valor predeterminado, establecer como seleccionado
      
            dropdown.appendChild(option);

          });
      
        } else {
            let valorPredeterminado = dropdown.attributes['value'].value
            console.log(valorPredeterminado);
            arrayManoObra.forEach(function(value, index) {
                var option = document.createElement('option');
                option.value = index;
                option.text = value.name;
          
                if (index === parseInt(valorPredeterminado)) {
                    console.log('son iguales');
                    option.selected = true;
                }
    
                dropdown.appendChild(option);
              });
        }
    
        dropdown.onchange = function() {
            console.log(dropdown.value);
            var resultCell = cell.nextElementSibling;

            var value = arrayManoObra[dropdown.value];
            resultCell.innerHTML = `<span style="text-align:right" class="textInput" contenteditable="false">${value.factor}</span>`
        }
        dropdown.style.maxHeight = '100px';
    })
    })



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

        if (tableId.includes('costosOperacion')) {
            skipRows = 2
        }
        for (let j = skipRows; j < rows.length; j++) {
            const rowData = [];
            const cells = rows[j].cells;
    
                for (let k = 0; k < cells.length; k++) {
                if (tableId.includes('costosOperacion')) {
                    if (j===5) {
                    } else if (j>5) {
                        if (k===1) {
                            let celdaId = cells[k].children[1].firstChild
                            console.log(celdaId.value);
                            const cellData = celdaId.value
                            rowData.push(cellData);
                        } else if (k===3){
                            const dropdown = cells[k].querySelector('.myDropdownUnidad');
                            const selectedIndex = dropdown.selectedIndex;
                            console.log(selectedIndex);
                            rowData.push(selectedIndex); 

                        } else if (k>6) {
                            const celdaId = cells[k].childNodes[0].id
                            let input = document.getElementById(celdaId)
                            const cellData = input.value
                            rowData.push(cellData);
                            
                        } else {
                            const cellData = cells[k].innerText.trim();
                            rowData.push(cellData);
                            
                        }
                    } else {
                        if (k===1) {
                            const dropdown = cells[k].querySelector('.dropdownManoObra');
                            const selectedIndex = dropdown.selectedIndex;
                            console.log(selectedIndex);
                            rowData.push(selectedIndex); 
                        } else if (k===3){
                            const dropdown = cells[k].querySelector('.dropdownUnidades');
                            const selectedIndex = dropdown.selectedIndex;
                            console.log(selectedIndex);
                            rowData.push(selectedIndex); 

                        } else {
                            const cellData = cells[k].innerText.trim();
                            rowData.push(cellData);
                            
                        }
                    }
                } else {
                    const cellData = cells[k].innerText.trim();
                    rowData.push(cellData);
                }

            }
            if (rowData.length > 0) {
                tableData.push(rowData);
            }
        }
    
          // Crear un objeto con los datos de la tabla
            const tableObject = {
            rows: tableData
            };

            sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        
    }
    window.location.reload()
    

}

function contarFilas2() {
    
    sessionStorage.setItem('ejecucion',0)
    
    const tables = document.getElementsByTagName('table');

        
    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id

        let skipRows = 1
        tableId = tableId.toString()

        if (tableId.includes('costosOperacion')) {
            skipRows = 2
        }
        for (let j = skipRows; j < rows.length; j++) {
            const rowData = [];
            const cells = rows[j].cells;
    
                for (let k = 0; k < cells.length; k++) {
                if (tableId.includes('costosOperacion')) {
                    if (j===5) {
                    } else if (j>5) {
                        if (k===1) {
                            let celdaId = cells[k].children[1].attributes[1].nodeValue
                            /* let celdaId = cells[k].children[1].firstChild
                            console.log(celdaId.value);
                             */    

                            rowData.push(celdaId);
                        } else if (k===3) {
                            const celdaId = cells[k].childNodes[3].attributes[1].nodeValue
                            //const cellData = input.value
                            rowData.push(celdaId);
                            
                        } else if (k>6) {
                            const celdaId = cells[k].childNodes[0].id
                            let input = document.getElementById(celdaId)
                            const cellData = input.value
                            rowData.push(cellData);
                            
                        } else {
                            const cellData = cells[k].innerText.trim();
                            rowData.push(cellData);
                            
                        }
                    } else {
                        if (k===1) {
                            let celdaId = cells[k].children[1].attributes[1].nodeValue
                            /* let celdaId = cells[k].children[1].firstChild
                            console.log(celdaId.value);
                             */    

                            rowData.push(celdaId);
                        } else if (k===3) {
                            const celdaId = cells[k].childNodes[3].attributes[1].nodeValue
                            //const cellData = input.value
                            rowData.push(celdaId);
                            
                        } else {
                            const cellData = cells[k].innerText.trim();
                            rowData.push(cellData);
                            
                        }
                    }
                } else {
                    const cellData = cells[k].innerText.trim();
                    rowData.push(cellData);
                }

            }
            if (rowData.length > 0) {
                tableData.push(rowData);
            }
        }
    
          // Crear un objeto con los datos de la tabla
            const tableObject = {
            rows: tableData
            };
            
            sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        
    }
    window.location.reload()
}

botonGrabar.addEventListener('click', contarFilas)
window.addEventListener('click',agregarFila)
window.addEventListener('click',eliminarFila)
//window.addEventListener('change', par)
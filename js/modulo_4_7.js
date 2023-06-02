let numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))
let x = 0

let accionesCorrectivas = document.getElementById('accionesCorrectivas')

while (x<numAlternativas) {
    
    let tablaPaso8 = JSON.parse(sessionStorage.getItem(`tablaPaso8_alt${x+1}_A`))
    let nombreAlternativa = JSON.parse(sessionStorage.getItem(`Alt_numero_${x+1}`)).name
    let totalPaso6A = JSON.parse(sessionStorage.getItem(`totalTablaPaso6_alt${x+1}_A`)) 
    let Paso6A = JSON.parse(sessionStorage.getItem(`tablaPaso6_alt${x+1}_A`)) 
    let totalPaso6B = JSON.parse(sessionStorage.getItem(`totalTablaPaso6_alt${x+1}_A`))
    let totalPaso9A = JSON.parse(sessionStorage.getItem(`totaltotalPaso9_alt${x+1}_A`))
    let totalPaso9B = JSON.parse(sessionStorage.getItem(`totaltotalPaso9_alt${x+1}_B`))



    let paso9A = JSON.parse(sessionStorage.getItem(`tablaPaso9frecuente_alt${x+1}_A`))
    let paso9B = JSON.parse(sessionStorage.getItem(`tablaPaso9frecuente_alt${x+1}_B`))
    
    let valor_total_a = 0
    let valor_total_b = 0
    let valor_total_privado = 0

    for (let index = 0; index < Paso6A.rows.length; index++) {
        let valor = Paso6A.rows[index][4];
        let factor_a = paso9A.rows[index][2];
        let factor_b = paso9B.rows[index][2];

        valor_total_a += parseFloat(parseInt(valor)*parseFloat(factor_a))
        valor_total_b += parseFloat(parseInt(valor)*parseFloat(factor_b))
    }

    for (let index = 0; index < Paso6A.rows.length; index++) {
        let valor = Paso6A.rows[index][4];

        valor_total_privado += parseInt(valor)
    }


    console.log(totalPaso6A);
    
    accionesCorrectivas.innerHTML +=
    `
    <p class="paso">
    <span style="width:35cm">ALTERNATIVA DE PROYECTO N°${x+1}: ${nombreAlternativa} </span>
    </p>
    <div id="modulo4Paso11_alt${x+1}">
    <span class="alternativaStilo">AMENAZA 1: "${tablaPaso8.rows[0][1]}"</span>
        <table id="tablaPaso11A">
            <tbody>
                <tr>
                    <th rowspan="2">Descripción</th>
                    <th colspan="2">Montos</th>
                </tr>
                <tr>
                    <th>Precios Privados</th>
                    <th>Precios Sociales</th>
                </tr>
                <tr>
                    <td><span class="respuestaTabla4-7">Costo de la Acción Correctiva</span></td>
                    <td><span style="text-align:right" class="respuestaTabla4-7">${totalPaso9A.rows[0][2]}</span></td>
                    <td><span style="text-align:right" class="respuestaTabla4-7">${totalPaso9A.rows[1][2]}</span></td>
                </tr>
                <tr>
                    <td><span class="respuestaTabla4-7">Dividido por</span></td>
                    <td><span class="respuestaTabla4-7" style="text-align:center">/</span></td>
                    <td><span class="respuestaTabla4-7" style="text-align:center">/</span></td>
                </tr>
                <tr>
                    <td><span class="respuestaTabla4-7">Costo Total del Proyecto</span></td>
                    <td><span style="text-align:right" class="respuestaTabla4-7">${parseFloat(valor_total_privado).toFixed(2)}</span></td>
                    <td><span style="text-align:right" class="respuestaTabla4-7">${parseFloat(valor_total_a).toFixed(2)}</span></td>
                </tr>
                <tr>
                    <td><span class="respuestaTabla4-7">% del Costo de la Acción Correctiva respecto al Costo Total</span></td>
                    <td><span style="text-align:right" class="respuestaTabla4-7">${(parseFloat(totalPaso9A.rows[0][2]/valor_total_privado)*100).toFixed(2)}</span></td>
                    <td><span style="text-align:right" class="respuestaTabla4-7">${(parseFloat(totalPaso9A.rows[1][2]/valor_total_a)*100).toFixed(2)}</span></td>
                </tr>
                <tr>
                    <td><span class="respuestaTabla4-7">¿Los Costos de la Acción Correctiva, son factibles o reconsiderar el proyecto?</span></td>
                    <td><span style="text-align:right;background-color:yellow;font-weight:bold" class="respuestaTabla4-7">${((parseFloat(totalPaso9A.rows[0][2]/valor_total_privado)*100).toFixed(2))<=15?"FACTIBLE":"NO FACTIBLE"}</span></td>
                    <td><span style="text-align:right;background-color:yellow;font-weight:bold" class="respuestaTabla4-7">${((parseFloat(totalPaso9A.rows[1][2]/valor_total_a)*100).toFixed(2))<=15?"FACTIBLE":"NO FACTIBLE"}</span></td>
                </tr>
            </tbody>
        </table>
        <span class="alternativaStilo">AMENAZA 2: "${tablaPaso8.rows[1][1]}"</span>
        <table id="tablaPaso11B">
            <tbody>
                <tr>
                    <th rowspan="2">Descripción</th>
                    <th colspan="2">Montos</th>
                </tr>
                <tr>
                    <th>Precios Privados</th>
                    <th>Precios Sociales</th>
                </tr>
                <tr>
                    <td><span class="respuestaTabla4-7">Costo de la Acción Correctiva</span></td>
                    <td><span style="text-align:right" class="respuestaTabla4-7">${totalPaso9B.rows[0][2]}</span></td>
                    <td><span style="text-align:right" class="respuestaTabla4-7">${totalPaso9B.rows[1][2]}</span></td>
                </tr>
                <tr>
                    <td><span class="respuestaTabla4-7">Dividido por</span></td>
                    <td><span class="respuestaTabla4-7" style="text-align:center">/</span></td>
                    <td><span class="respuestaTabla4-7" style="text-align:center">/</span></td>
                </tr>
                <tr>
                    <td><span class="respuestaTabla4-7">Costo Total del Proyecto</span></td>
                    <td><span style="text-align:right" class="respuestaTabla4-7">${parseFloat(valor_total_privado).toFixed(2)}</span></td>
                    <td><span style="text-align:right" class="respuestaTabla4-7">${parseFloat(valor_total_b).toFixed(2)}</span></td>
                </tr>
                <tr>
                    <td><span class="respuestaTabla4-7">% del Costo de la Acción Correctiva respecto al Costo Total</span></td>
                    <td><span style="text-align:right" class="respuestaTabla4-7">${(parseFloat(totalPaso9B.rows[0][2]/valor_total_privado)*100).toFixed(2)}</span></td>
                    <td><span style="text-align:right" class="respuestaTabla4-7">${(parseFloat(totalPaso9B.rows[1][2]/valor_total_b)*100).toFixed(2)}</span></td>
                </tr>
                <tr>
                    <td><span class="respuestaTabla4-7">¿Los Costos de la Acción Correctiva, son factibles o reconsiderar el proyecto?</span></td>
                    <td><span style="text-align:right;background-color:yellow;font-weight:bold" class="respuestaTabla4-7">${((parseFloat(totalPaso9B.rows[0][2]/valor_total_privado)*100).toFixed(2))<=15?"FACTIBLE":"NO FACTIBLE"}</span></td>
                    <td><span style="text-align:right;background-color:yellow;font-weight:bold" class="respuestaTabla4-7">${((parseFloat(totalPaso9B.rows[1][2]/valor_total_b)*100).toFixed(2))<=15?"FACTIBLE":"NO FACTIBLE"}</span></td>
                </tr>
            </tbody>
        </table>
    `

    x++
}



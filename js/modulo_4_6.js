let numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))
let x = 0

let riesgoDesastre = document.getElementById('riesgoDesastre')

while (x<numAlternativas) {
    
    let tablaPaso8 = JSON.parse(sessionStorage.getItem(`tablaPaso8_alt${x+1}_A`))
    let nombreAlternativa = JSON.parse(sessionStorage.getItem(`Alt_numero_${x+1}`)).name
    let totalPaso9A = JSON.parse(sessionStorage.getItem(`totaltotalPaso9_alt${x+1}_A`))
    let totalPaso9B = JSON.parse(sessionStorage.getItem(`totaltotalPaso9_alt${x+1}_B`))

    riesgoDesastre.innerHTML +=
    `
    <p class="paso">
    <span style="width:35cm">ALTERNATIVA DE PROYECTO N°${x+1}: ${nombreAlternativa} </span>
    </p>
    <div id="modulo4Paso10_alt${x+1}">
    <span class="alternativaStilo">AMENAZA 1: "${tablaPaso8.rows[0][1]}"</span>
        <table id="tablaPaso10A">
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
                    <td><span class="textInput" editablecontent="false">Costo aproximado de las pérdidas antes de las acciones correctivas</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${totalPaso9A.rows[0][1]}</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${totalPaso9A.rows[1][1]}</span></td>
                </tr>
                <tr>
                    <td><span class="textInput" editablecontent="false">Menos</span></td>
                    <td><span class="textInput" editablecontent="false">-</span></td>
                    <td><span class="textInput" editablecontent="false">-</span></td>
                </tr>
                <tr>
                    <td><span class="textInput" editablecontent="false">Costo aproximado de las pérdidas después de las acciones correctivas</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${totalPaso9A.rows[0][3]}</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${totalPaso9A.rows[1][3]}</span></td>
                </tr>
                <tr>
                    <td><span class="textInput" editablecontent="false">Igual</span></td>
                    <td><span class="textInput" editablecontent="false">=</span></td>
                    <td><span class="textInput" editablecontent="false">=</span></td>
                </tr>
                <tr>
                    <td><span class="textInput" editablecontent="false">Reducción neta de las pérdidas</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(totalPaso9A.rows[0][1])-parseInt(totalPaso9A.rows[0][3])}</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(totalPaso9A.rows[1][1])-parseInt(totalPaso9A.rows[1][3])}</span></td>
                </tr>
                <tr>
                    <td><span class="textInput" editablecontent="false">Costo de la Acción Correctiva</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(totalPaso9A.rows[0][2])}</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(totalPaso9A.rows[1][2])}</span></td>
                </tr>
                <tr>
                    <td><span class="textInput" editablecontent="false">Costo- Beneficio = Reducción Neta de Pérdidas/ Costo de Acciones Correctivas</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseFloat((parseInt(totalPaso9A.rows[0][1])-parseInt(totalPaso9A.rows[0][3]))/parseInt(totalPaso9A.rows[0][2])).toFixed(2)}</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseFloat((parseInt(totalPaso9A.rows[1][1])-parseInt(totalPaso9A.rows[1][3]))/parseInt(totalPaso9A.rows[1][2])).toFixed(2)}</span></td>
                </tr>
                <tr>
                    <td><span class="textInput" editablecontent="false">¿El Blindaje del Proyecto es factible (C-B >4) o No Factible (C-B <= 4) ?</span></td>
                    <td><span style="text-align:right; background-color:yellow ;font-weight:bold" class="textInput" editablecontent="false">${parseInt((parseInt(totalPaso9A.rows[0][1])-parseInt(totalPaso9A.rows[0][3]))/parseInt(totalPaso9A.rows[0][2]))>4 ? "FACTIBLE":"NO FACTIBLE"}</span></td>
                    <td><span style="text-align:right; background-color:yellow ;font-weight:bold" class="textInput" editablecontent="false">${parseInt((parseInt(totalPaso9A.rows[1][1])-parseInt(totalPaso9A.rows[1][3]))/parseInt(totalPaso9A.rows[1][2]))>4 ? "FACTIBLE":"NO FACTIBLE"}</span></td>
                </tr>
            </tbody>
        </table>;
        <span class="alternativaStilo">AMENAZA 2: "${tablaPaso8.rows[1][1]}"</span>
        <table id="tablaPaso10B">
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
                <td><span class="textInput" editablecontent="false">Costo aproximado de las pérdidas antes de las acciones correctivas</span></td>
                <td><span style="text-align:right" class="textInput" editablecontent="false">${totalPaso9B.rows[0][1]}</span></td>
                <td><span style="text-align:right" class="textInput" editablecontent="false">${totalPaso9B.rows[1][1]}</span></td>
            </tr>
            <tr>
                <td><span class="textInput" editablecontent="false">Menos</span></td>
                <td><span class="textInput" editablecontent="false">-</span></td>
                <td><span class="textInput" editablecontent="false">-</span></td>
            </tr>
            <tr>
                <td><span class="textInput" editablecontent="false">Costo aproximado de las pérdidas después de las acciones correctivas</span></td>
                <td><span style="text-align:right" class="textInput" editablecontent="false">${totalPaso9B.rows[0][3]}</span></td>
                <td><span style="text-align:right" class="textInput" editablecontent="false">${totalPaso9B.rows[1][3]}</span></td>
            </tr>
            <tr>
                <td><span class="textInput" editablecontent="false">Igual</span></td>
                <td><span class="textInput" editablecontent="false">=</span></td>
                <td><span class="textInput" editablecontent="false">=</span></td>
            </tr>
            <tr>
                <td><span class="textInput" editablecontent="false">Reducción neta de las pérdidas</span></td>
                <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(totalPaso9B.rows[0][1])-parseInt(totalPaso9B.rows[0][3])}</span></td>
                <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(totalPaso9B.rows[1][1])-parseInt(totalPaso9B.rows[1][3])}</span></td>
            </tr>
            <tr>
                <td><span class="textInput" editablecontent="false">Costo de la Acción Correctiva</span></td>
                <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(totalPaso9B.rows[0][2])}</span></td>
                <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(totalPaso9B.rows[1][2])}</span></td>
            </tr>
            <tr>
                <td><span class="textInput" editablecontent="false">Costo- Beneficio = Reducción Neta de Pérdidas/ Costo de Acciones Correctivas</span></td>
                <td><span style="text-align:right" class="textInput" editablecontent="false">${(parseFloat((parseInt(totalPaso9B.rows[0][1])-parseInt(totalPaso9B.rows[0][3]))/parseInt(totalPaso9B.rows[0][2]))).toFixed(2)}</span></td>
                <td><span style="text-align:right" class="textInput" editablecontent="false">${(parseFloat((parseInt(totalPaso9B.rows[1][1])-parseInt(totalPaso9B.rows[1][3]))/parseInt(totalPaso9B.rows[1][2]))).toFixed(2)}</span></td>
            </tr>
            <tr>
                <td><span class="textInput" editablecontent="false">¿El Blindaje del Proyecto es factible (C-B >4) o No Factible (C-B <= 4) ?</span></td>
                <td><span style="text-align:right;background:yellow;font-weight:bold" class="textInput" editablecontent="false">${parseInt((parseInt(totalPaso9B.rows[0][1])-parseInt(totalPaso9B.rows[0][3]))/parseInt(totalPaso9B.rows[0][2]))>4 ? "FACTIBLE":"NO FACTIBLE"}</span></td>
                <td><span style="text-align:right;background:yellow;font-weight:bold" class="textInput" editablecontent="false">${parseInt((parseInt(totalPaso9B.rows[1][1])-parseInt(totalPaso9B.rows[1][3]))/parseInt(totalPaso9B.rows[1][2]))>4 ? "FACTIBLE":"NO FACTIBLE"}</span></td>
            </tr>
        </tbody>
    </table>
    </div>
    `

    x++
}
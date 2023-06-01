let ejecucion = sessionStorage.getItem('ejecucion')
const botonGrabar = document.getElementById('grabar')
let horizonteEvaluacion = document.getElementById('horizonteEvaluacion')
let eventosFrecuentes = document.getElementById('eventosFrecuentes')
let eventosExtranos = document.getElementById('eventosExtranos') 

let numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))
let x = 0

let horizonte = parseInt(sessionStorage.getItem('horizonteEvaluacion'))

let riesgoDesastre = document.getElementById('riesgoDesastre')
let arrayFactores = [
    {name:'---',
    factor:0},
    {name:'Obra Física: Comunicaciones y Energía: Carreteras',
    factor:0.969},
    {name:'Obra Física: Comunicaciones y Energía: Comunicaciones',
    factor:1},
    {name:'Obra Física: Comunicaciones y Energía: Energía',
    factor:1},
    {name:'Obra Física: Comunicaciones y Energía: Transporte y Obras Públicas',
    factor:0.969},
    {name:'Obra Física: Promoción y Protección Humana: Protección Social',
    factor:0.788},
    {name:'Obra Física: Promoción y Protección Humana: Salud',
    factor:0.691},
    {name:'Obra Física: Promoción y Protección Humana: Educación',
    factor:0.691},
    {name:'Obra Física: Promoción y Protección Humana: Vivienda',
    factor:1},
    {name:'Obra Física: Promoción y Protección Humana: Agua y Saneamiento',
    factor:1},
    {name:'Obra Física: Agroforestal y Turismo: Desarrollo Productivo',
    factor:1},
    {name:'Obra Física: Agroforestal y Turismo: Recursos Forestal y Ambiente',
    factor:1},
    {name:'Obra Física: Agroforestal y Turismo: Actividad Turística',
    factor:1},
    {name:'Obra Física: Agroforestal y Turismo: Riego',
    factor:1},
    {name:'Obra Física: Agroforestal y Turismo: Mitigación de Desastres',
    factor:1},
    {name:'Obra Física: Fortalecimiento Institucional: Modernización del Estado',
    factor:1},
    {name:'Obra Física: Fortalecimiento Institucional: Competitividad y Mipymes',
    factor:1},
    {name:'Obra Física: Fortalecimiento Institucional: Seguridad y Defensa',
    factor:1},
    {name:'Obra Física: Fortalecimiento Institucional: Descentralización',
    factor:1},
    {name:'Equipamiento',
    factor:0.788},
]


horizonteEvaluacion.innerHTML = horizonte
eventosExtranos.innerHTML = (parseInt(horizonte)/10)
eventosFrecuentes.innerHTML = (horizonte - eventosExtranos.innerHTML)

while (x<numAlternativas) {

    let tablaPaso8 = JSON.parse(sessionStorage.getItem(`tablaPaso8_alt${x+1}_A`))
    
    
    let tablaPaso6A = JSON.parse(sessionStorage.getItem(`tablaPaso6_alt${x+1}_A`))
    let tablaPaso6B = JSON.parse(sessionStorage.getItem(`tablaPaso6_alt${x+1}_A`))
    let numElementsA = JSON.parse(sessionStorage.getItem(`tablaPaso6_alt${x+1}_A`)).rows.length
    let numElementsB = JSON.parse(sessionStorage.getItem(`tablaPaso6_alt${x+1}_A`)).rows.length
    
    let tablaPaso9Afrecuente = JSON.parse(sessionStorage.getItem(`tablaPaso9frecuente_alt${x+1}_A`))
    let tablaPaso9Bfrecuente = JSON.parse(sessionStorage.getItem(`tablaPaso9frecuente_alt${x+1}_B`)) 
    let tablaPaso9Aextremo = JSON.parse(sessionStorage.getItem(`tablaPaso9extremo_alt${x+1}_A`))
    let tablaPaso9Bextremo = JSON.parse(sessionStorage.getItem(`tablaPaso9extremo_alt${x+1}_B`)) 
    let totalesTablaPaso9Afrecuente = JSON.parse(sessionStorage.getItem(`totalesTablaPaso9frecuente_alt${x+1}_A`))
    let totalesTablaPaso9Bfrecuente = JSON.parse(sessionStorage.getItem(`totalesTablaPaso9frecuente_alt${x+1}_B`))
    let totalesTablaPaso9Aextremo = JSON.parse(sessionStorage.getItem(`totalesTablaPaso9extremo_alt${x+1}_A`))
    let totalesTablaPaso9Bextremo = JSON.parse(sessionStorage.getItem(`totalesTablaPaso9extremo_alt${x+1}_B`))
    let totaltotalPaso9A = JSON.parse(sessionStorage.getItem(`totaltotalPaso9_alt${x+1}_A`))
    let totaltotalPaso9B = JSON.parse(sessionStorage.getItem(`totaltotalPaso9_alt${x+1}_B`))




    if (tablaPaso9Afrecuente != null) {        
        
        const suma = (arrayTabla) =>{
            let subtotalPrivados = 0
            let subtotalSocial = 0
            let subtotalPrivados2 = 0
            let subtotalSocial2 = 0
            let subtotalPrivados3 = 0
            let subtotalSocial3 = 0

            for (let index = 0; index < arrayTabla.rows.length; index++) {
                let factorSocial1 = arrayTabla.rows[index][2];
                let costoAproximado1 = arrayTabla.rows[index][4];
                let factorSocial2 = arrayTabla.rows[index][8];
                let costoAproximado2 = arrayTabla.rows[index][9];
                let costoAproximado3 = arrayTabla.rows[index][10];

                subtotalPrivados = subtotalPrivados + parseInt(costoAproximado1)
                subtotalSocial = parseInt(subtotalSocial) + (parseFloat(factorSocial1) * parseInt(costoAproximado1))
                subtotalPrivados2 = subtotalPrivados2 + parseInt(costoAproximado2)
                subtotalSocial2 = parseInt(subtotalSocial2) + (parseFloat(factorSocial2) * parseInt(costoAproximado2))
                subtotalPrivados3 = subtotalPrivados3 + parseInt(costoAproximado3)
                subtotalSocial3 = parseInt(subtotalSocial3) +  (parseFloat(factorSocial2) * parseInt(costoAproximado3))
            }

            let array = []
            array = [subtotalPrivados,
                subtotalSocial,
                subtotalPrivados2,
                subtotalSocial2,
                subtotalPrivados3,
                subtotalSocial3]

            return array
        }

        let sum9Af =suma(tablaPaso9Afrecuente)
        let sum9Bf =suma(tablaPaso9Bfrecuente)
        let sum9Ae =suma(tablaPaso9Aextremo)
        let sum9Be =suma(tablaPaso9Bextremo)
        
        riesgoDesastre.innerHTML +=
        `
        <div id="modulo4Paso9_alt${x+1}">
        <span class="alternativaStilo">Alternativa N° ${x+1} Amenaza "${tablaPaso8.rows[0][1]}": Frecuente cada año</span>
            <div>
                <table class="tablaModulo4" id="tablaPaso9frecuente_alt${x+1}_A">
                    <tbody id="bodyPaso9frecuente_alt${x+1}_A">
                        <tr>
                            <th style="padding:0px ; min-width:200px" >Elementos Dañados</th>
                            <th style="padding:0px ; min-width:100px" >Tipo de Componente por sector y subsector</th>
                            <th style="padding:0px ; min-width:200px" >Factor Social</th>
                            <th style="padding:0px ; min-width:300px" >% de Daños o Pérdidas</th>
                            <th style="padding:0px ; min-width:500px" >Costo aproximado de las pérdidas antes (Lps.)</th>
                            <th style="padding:0px ; min-width:600px" >Acción correctiva ¿Qué hago para reducir las afectaciones?</th>
                            <th style="padding:0px ; min-width:200px" >Efectos Colaterales</th>
                            <th style="padding:0px ; min-width:100px" >Tipo de Componente por sector y subsector</th>
                            <th style="padding:0px ; min-width:200px" >Factor Social</th>
                            <th style="padding:0px ; min-width:500px" class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                            <th style="padding:0px ; min-width:700px" >Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                        </tr>
                    </tbody>
                </table>
                <table class="tablaModulo4" id="totalesTablaPaso9frecuente_alt${x+1}_A">
                    <tbody>
                        <tr>
                            <th></th>
                            <th style="padding:0px ; min-width:450px" >Costo aproximado de las pérdidas antes (Lps.)</th>
                            <th style="padding:0px ; min-width:450px" class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                            <th style="padding:0px ; min-width:650px" >Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                        </tr>
                        <tr>
                            <td class="bajada"><span>Sub totales a Precios Privados</span></td>
                            <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Af[0]}</span></td>
                            <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Af[2]}</span></td>
                            <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Af[4]}</span></td>
                        </tr>
                        <tr>
                            <td class="bajada"><span>Sub totales a Precios Sociales</span></td>
                            <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Af[1]}</span></td>
                            <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Af[3]}</span></td>
                            <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Af[5]}</span></td>
                        </tr>
                        <tr>
                            <td class="bajada"><span>Totales escenario frecuente Precios Privados</span></td>
                            <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Af[0]*parseInt(eventosFrecuentes.innerHTML)}</span></td>
                            <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Af[2]}</span></td>
                            <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Af[4]*parseInt(eventosFrecuentes.innerHTML)}</span></td>
                        </tr>
                        <tr>
                            <td class="bajada"><span>Totales escenario frecuente Precios Sociales</span></td>
                            <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Af[1]*parseInt(eventosFrecuentes.innerHTML)}</span></td>
                            <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Af[3]}</span></td>
                            <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Af[5]*parseInt(eventosFrecuentes.innerHTML)}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        <span class="alternativaStilo">Alternativa N° ${x+1} Amenaza "${tablaPaso8.rows[0][1]}": Extremo cada 10 años</span>
            <div>
                <table class="tablaModulo4" id="tablaPaso9extremo_alt${x+1}_A">
                    <tbody id="bodyPaso9extremo_alt${x+1}_A">
                        <tr>
                            <th style="padding:0px ; min-width:200px">Elementos Dañados</th>
                            <th style="padding:0px ; min-width:100px">Tipo de Componente por sector y subsector</th>
                            <th style="padding:0px ; min-width:200px">Factor Social</th>
                            <th style="padding:0px ; min-width:300px">% de Daños o Pérdidas</th>
                            <th style="padding:0px ; min-width:500px">Costo aproximado de las pérdidas antes (Lps.)</th>
                            <th style="padding:0px ; min-width:600px">Acción correctiva ¿Qué hago para reducir las afectaciones?</th>
                            <th style="padding:0px ; min-width:200px">Efectos Colaterales</th>
                            <th style="padding:0px ; min-width:100px">Tipo de Componente por sector y subsector</th>
                            <th style="padding:0px ; min-width:200px">Factor Social</th>
                            <th style="padding:0px ; min-width:500px" class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                            <th style="padding:0px ; min-width:700px">Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                        </tr>
                    </tbody>
                </table>
                <table class="tablaModulo4" id="totalesTablaPaso9extremo_alt${x+1}_A">
                <tbody>
                    <tr>
                        <th></th>
                        <th style="padding:0px ; min-width:450px">Costo aproximado de las pérdidas antes (Lps.)</th>
                        <th style="padding:0px ; min-width:450px" class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                        <th style="padding:0px ; min-width:450px">Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Sub totales a Precios Privados</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Ae[0]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Ae[2]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Ae[4]}</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Sub totales a Precios Sociales</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Ae[1]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Ae[3]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Ae[5]}</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Totales escenario extremo Precios Privados</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Ae[0]*parseInt(eventosExtranos.innerHTML)}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Ae[2]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Ae[4]*parseInt(eventosExtranos.innerHTML)}</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Totales escenario extremo Precios Sociales</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Ae[1]*parseInt(eventosExtranos.innerHTML)}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Ae[3]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Ae[5]*parseInt(eventosExtranos.innerHTML)}</span></td>
                    </tr>
                </tbody>
            </table>
            <table class="tablaModulo4" id="totaltotalPaso9_alt${x+1}_A">
            <tbody>
                <tr>
                    <th></th>
                    <th style="padding:0px ; min-width:450px">Costo aproximado de las pérdidas antes (Lps.)</th>
                    <th style="padding:0px ; min-width:450px" class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                    <th style="padding:0px ; min-width:450px">Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                </tr>
                <tr>
                    <td class="bajada"><span>Total Escenario Frecuente más Extremo a Precios Privados</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(sum9Af[0]*parseInt(eventosFrecuentes.innerHTML))+parseInt(sum9Ae[0]*parseInt(eventosExtranos.innerHTML))}</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(sum9Af[2]+sum9Ae[2])}</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(sum9Af[4]*parseInt(eventosFrecuentes.innerHTML))+parseInt(sum9Ae[4]*parseInt(eventosExtranos.innerHTML))}</span></td>
                </tr>
                <tr>
                    <td class="bajada"><span>Total Escenario Frecuente más Extremo a Precios Sociales</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(sum9Af[1]*parseInt(eventosFrecuentes.innerHTML))+parseInt(sum9Ae[1]*parseInt(eventosExtranos.innerHTML))}</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(sum9Af[3]+sum9Ae[3])}</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(sum9Af[5]*parseInt(eventosFrecuentes.innerHTML))+parseInt(sum9Ae[5]*parseInt(eventosExtranos.innerHTML))}</span></td>
                </tr>
            </tbody>
        </table>
            </div>
            <span class="alternativaStilo">Alternativa N° ${x+1} Amenaza "${tablaPaso8.rows[1][1]}": Frecuente cada año</span>
            <div>
                <table class="tablaModulo4" id="tablaPaso9frecuente_alt${x+1}_B">
                    <tbody id="bodyPaso9frecuente_alt${x+1}_B">
                        <tr>
                            <th style="padding:0px ; min-width:200px">Elementos Dañados</th>
                            <th style="padding:0px ; min-width:100px">Tipo de Componente por sector y subsector</th>
                            <th style="padding:0px ; min-width:200px">Factor Social</th>
                            <th style="padding:0px ; min-width:300px">% de Daños o Pérdidas</th>
                            <th style="padding:0px ; min-width:500px">Costo aproximado de las pérdidas antes (Lps.)</th>
                            <th style="padding:0px ; min-width:600px">Acción correctiva ¿Qué hago para reducir las afectaciones?</th>
                            <th style="padding:0px ; min-width:200px">Efectos Colaterales</th>
                            <th style="padding:0px ; min-width:100px">Tipo de Componente por sector y subsector</th>
                            <th style="padding:0px ; min-width:200px">Factor Social</th>
                            <th style="padding:0px ; min-width:500px" class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                            <th style="padding:0px ; min-width:700px">Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                        </tr>
                    </tbody>
                </table>
                <table class="tablaModulo4" id="totalesTablaPaso9frecuente_alt${x+1}_B">
                <tbody>
                    <tr>
                        <th></th>
                        <th style="padding:0px ; min-width:450px">Costo aproximado de las pérdidas antes (Lps.)</th>
                        <th style="padding:0px ; min-width:450px" class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                        <th style="padding:0px ; min-width:450px">Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Sub totales a Precios Privados</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Bf[0]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Bf[2]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Bf[4]}</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Sub totales a Precios Sociales</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Bf[1]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Bf[3]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Bf[5]}</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Totales escenario frecuente Precios Privados</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Bf[0]*parseInt(eventosFrecuentes.innerHTML)}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Bf[2]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Bf[4]*parseInt(eventosFrecuentes.innerHTML)}</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Totales escenario frecuente Precios Sociales</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Bf[1]*parseInt(eventosFrecuentes.innerHTML)}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Bf[3]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Bf[5]*parseInt(eventosFrecuentes.innerHTML)}</span></td>
                    </tr>
                </tbody>
            </table>
            </div>
            <span class="alternativaStilo">Alternativa N° ${x+1} Amenaza "${tablaPaso8.rows[1][1]}": Extremo cada 10 años</span>
            <div>
                <table class="tablaModulo4" id="tablaPaso9extremo_alt${x+1}_B">
                    <tbody id="bodyPaso9extremo_alt${x+1}_B">
                        <tr>
                            <th style="padding:0px ; min-width:200px">Elementos Dañados</th>
                            <th style="padding:0px ; min-width:100px">Tipo de Componente por sector y subsector</th>
                            <th style="padding:0px ; min-width:200px">Factor Social</th>
                            <th style="padding:0px ; min-width:300px">% de Daños o Pérdidas</th>
                            <th style="padding:0px ; min-width:500px">Costo aproximado de las pérdidas antes (Lps.)</th>
                            <th style="padding:0px ; min-width:600px">Acción correctiva ¿Qué hago para reducir las afectaciones?</th>
                            <th style="padding:0px ; min-width:200px">Efectos Colaterales</th>
                            <th style="padding:0px ; min-width:100px">Tipo de Componente por sector y subsector</th>
                            <th style="padding:0px ; min-width:200px">Factor Social</th>
                            <th style="padding:0px ; min-width:500px" class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                            <th style="padding:0px ; min-width:700px">Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                        </tr>
                    </tbody>
                </table>
                <table class="tablaModulo4" id="totalesTablaPaso9extremo_alt${x+1}_B">
                <tbody>
                    <tr>
                        <th></th>
                        <th style="padding:0px ; min-width:450px">Costo aproximado de las pérdidas antes (Lps.)</th>
                        <th style="padding:0px ; min-width:450px" class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                        <th style="padding:0px ; min-width:450px">Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Sub totales a Precios Privados</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Be[0]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Be[2]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Be[4]}</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Sub totales a Precios Sociales</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Be[1]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Be[3]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Be[5]}</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Totales escenario extremo Precios Privados</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Be[0]*parseInt(eventosFrecuentes.innerHTML)}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Be[2]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Be[4]*parseInt(eventosFrecuentes.innerHTML)}</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Totales escenario extremo Precios Sociales</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Be[1]*parseInt(eventosFrecuentes.innerHTML)}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Be[3]}</span></td>
                        <td><span style="text-align:right" class="textInput" editablecontent="false">${sum9Be[5]*parseInt(eventosFrecuentes.innerHTML)}</span></td>
                    </tr>
                </tbody>
            </table>
            <table class="tablaModulo4" id="totaltotalPaso9_alt${x+1}_B">
            <tbody>
                <tr>
                    <th></th>
                    <th style="padding:0px ; min-width:450px">Costo aproximado de las pérdidas antes (Lps.)</th>
                    <th style="padding:0px ; min-width:450px" class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                    <th style="padding:0px ; min-width:450px">Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                </tr>
                <tr>
                    <td class="bajada"><span>Total Escenario Frecuente más Extremo a Precios Privados</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(sum9Bf[0]*parseInt(eventosFrecuentes.innerHTML))+parseInt(sum9Be[0]*parseInt(eventosExtranos.innerHTML))}</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(sum9Bf[2]+sum9Be[2])}</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(sum9Bf[4]*parseInt(eventosFrecuentes.innerHTML))+parseInt(sum9Be[4]*parseInt(eventosExtranos.innerHTML))}</span></td>
                </tr>
                <tr>
                    <td class="bajada"><span>Total Escenario Frecuente más Extremo a Precios Sociales</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(sum9Bf[1]*parseInt(eventosFrecuentes.innerHTML))+parseInt(sum9Be[1]*parseInt(eventosExtranos.innerHTML))}</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(sum9Bf[3]+sum9Be[3])}</span></td>
                    <td><span style="text-align:right" class="textInput" editablecontent="false">${parseInt(sum9Bf[5]*parseInt(eventosFrecuentes.innerHTML))+parseInt(sum9Be[5]*parseInt(eventosExtranos.innerHTML))}</span></td>
                </tr>
            </tbody>
            </table>
            </div>
        </div>
        `
    
        let bodyPaso9frecuente_A = document.getElementById(`bodyPaso9frecuente_alt${x+1}_A`)
        let bodyPaso9frecuente_B = document.getElementById(`bodyPaso9frecuente_alt${x+1}_B`)
        let bodyPaso9extremo_A = document.getElementById(`bodyPaso9extremo_alt${x+1}_A`)
        let bodyPaso9extremo_B = document.getElementById(`bodyPaso9extremo_alt${x+1}_B`)
        

        let y_a = 0
        let y_b = 0
        while (y_a<numElementsA) {
            bodyPaso9frecuente_A.innerHTML+=
            `
            <tr>
                <td><span class="textInput" contenteditable="false">${tablaPaso6A.rows[y_a][0]}</span></td>
                <td class="dropdown-cell">
                    <span style="display: none;"></span>
                    <select class="my-dropdown" value="${tablaPaso9Afrecuente.rows[y_a][1]}"></select>
                </td>
                <td><span style="text-align:right" id="respuestainputc2_alt${x+1}_f${y_a}A" class="textInput" contenteditable="false">${tablaPaso9Afrecuente.rows[y_a][2]}</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">${tablaPaso9Afrecuente.rows[y_a][3]}</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="false">${parseInt(parseFloat(tablaPaso9Afrecuente.rows[y_a][3]/100)*tablaPaso6A.rows[y_a][4])}</span></td>
                <td><span class="textInput" contenteditable="true">${tablaPaso9Afrecuente.rows[y_a][5]}</span></td>
                <td><span class="textInput" contenteditable="true">${tablaPaso9Afrecuente.rows[y_a][6]}</span></td>
                <td class="dropdown-cell">
                    <span style="display: none;"></span>
                    <select class="my-dropdown" value="${tablaPaso9Afrecuente.rows[y_a][7]}"></select>
                </td>
                <td><span style="text-align:right" id="respuestainputc8_alt${x+1}_f${y_a}A" class="textInput" contenteditable="false">${tablaPaso9Afrecuente.rows[y_a][8]}</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">${tablaPaso9Afrecuente.rows[y_a][9]}</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">${tablaPaso9Afrecuente.rows[y_a][10]}</span></td>
            </tr>
            `
            bodyPaso9extremo_A.innerHTML+=
            `
            <tr>
                <td><span class="textInput" contenteditable="false">${tablaPaso9Aextremo.rows[y_a][0]}</span></td>
                <td class="dropdown-cell">
                    <span style="display: none;"></span>
                    <select class="my-dropdown" value="${tablaPaso9Aextremo.rows[y_a][1]}"></select>
                </td>
                <td><span style="text-align:right" id="respuestainputc2_alt${x+1}_e${y_a}A" class="textInput" contenteditable="false">${tablaPaso9Aextremo.rows[y_a][2]}</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">${tablaPaso9Aextremo.rows[y_a][3]}</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="false">${parseInt(parseFloat(tablaPaso9Aextremo.rows[y_a][3]/100)*tablaPaso6A.rows[y_a][4])}</span></td>
                <td><span class="textInput" contenteditable="true">${tablaPaso9Aextremo.rows[y_a][5]}</span></td>
                <td><span class="textInput" contenteditable="true">${tablaPaso9Aextremo.rows[y_a][6]}</span></td>
                <td class="dropdown-cell">
                    <span style="display: none;"></span>
                    <select class="my-dropdown" value="${tablaPaso9Aextremo.rows[y_a][7]}"></select>
                </td>
                <td><span style="text-align:right" id="respuestainputc8_alt${x+1}_e${y_a}A" class="textInput" contenteditable="false">${tablaPaso9Aextremo.rows[y_a][8]}</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">${tablaPaso9Aextremo.rows[y_a][9]}</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">${tablaPaso9Aextremo.rows[y_a][10]}</span></td>
            </tr>
            `
            y_a++
        }
        while (y_b<numElementsB) {
            bodyPaso9frecuente_B.innerHTML+=
            `
            <tr>
                <td><span class="textInput" contenteditable="false">${tablaPaso9Bfrecuente.rows[y_b][0]}</span></td>
                                        <td class="dropdown-cell">
                            <span style="display: none;"></span>
                            <select class="my-dropdown" value="${tablaPaso9Bfrecuente.rows[y_b][1]}"></select>
                          </td>
                <td><span style="text-align:right" class="textInput" contenteditable="false">${tablaPaso9Bfrecuente.rows[y_b][2]}</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">${tablaPaso9Bfrecuente.rows[y_b][3]}</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="false">${parseInt(parseFloat(tablaPaso9Bfrecuente.rows[y_b][3]/100)*tablaPaso6B.rows[y_b][4])}</span></td>
                <td><span class="textInput" contenteditable="true">${tablaPaso9Bfrecuente.rows[y_b][5]}</span></td>
                <td><span class="textInput" contenteditable="true">${tablaPaso9Bfrecuente.rows[y_b][6]}</span></td>
                                        <td class="dropdown-cell">
                            <span style="display: none;"></span>
                            <select class="my-dropdown" value="${tablaPaso9Bfrecuente.rows[y_b][7]}"></select>
                <td><span style="text-align:right" class="textInput" contenteditable="false">${tablaPaso9Bfrecuente.rows[y_b][8]}</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">${tablaPaso9Bfrecuente.rows[y_b][9]}</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">${tablaPaso9Bfrecuente.rows[y_b][10]}</span></td>
            </tr>
            `
            
            bodyPaso9extremo_B.innerHTML+=
            `
            <tr>
                <td><span class="textInput" contenteditable="false">${tablaPaso9Bextremo.rows[y_b][0]}</span></td>
                                        <td class="dropdown-cell">
                            <span style="display: none;"></span>
                            <select class="my-dropdown" value="${tablaPaso9Bextremo.rows[y_b][1]}"></select>
                          </td>
                <td><span style="text-align:right" class="textInput" contenteditable="false">${tablaPaso9Bextremo.rows[y_b][2]}</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">${tablaPaso9Bextremo.rows[y_b][3]}</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="false">${parseInt(parseFloat(tablaPaso9Bextremo.rows[y_b][3]/100)*tablaPaso6B.rows[y_b][4])}</span></td>
                <td><span class="textInput" contenteditable="true">${tablaPaso9Bextremo.rows[y_b][5]}</span></td>
                <td><span class="textInput" contenteditable="true">${tablaPaso9Bextremo.rows[y_b][6]}</span></td>
                                        <td class="dropdown-cell">
                            <span style="display: none;"></span>
                            <select class="my-dropdown" value="${tablaPaso9Bextremo.rows[y_b][7]}"></select>
                          </td>
                <td><span style="text-align:right" class="textInput" contenteditable="false">${tablaPaso9Bextremo.rows[y_b][8]}</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">${tablaPaso9Bextremo.rows[y_b][9]}</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">${tablaPaso9Bextremo.rows[y_b][10]}</span></td>
            </tr>
            `

            y_b++
        }
    } else {
        riesgoDesastre.innerHTML +=
        `
        <div id="modulo4Paso9_alt${x+1}">
        <span class="alternativaStilo">Alternativa N° ${x+1} Amenaza "${tablaPaso8.rows[0][1]}": Frecuente cada año</span>
            <div>
                <table class="tablaModulo4" id="tablaPaso9frecuente_alt${x+1}_A">
                    <tbody id="bodyPaso9frecuente_alt${x+1}_A">
                        <tr>
                            <th style="padding:0px ; min-width:200px" >Elementos Dañados</th>
                            <th style="padding:0px ; min-width:100px" >Tipo de Componente por sector y subsector</th>
                            <th style="padding:0px ; min-width:200px" >Factor Social</th>
                            <th style="padding:0px ; min-width:300px" >% de Daños o Pérdidas</th>
                            <th style="padding:0px ; min-width:500px" >Costo aproximado de las pérdidas antes (Lps.)</th>
                            <th style="padding:0px ; min-width:600px" >Acción correctiva ¿Qué hago para reducir las afectaciones?</th>
                            <th style="padding:0px ; min-width:200px" >Efectos Colaterales</th>
                            <th style="padding:0px ; min-width:100px" >Tipo de Componente por sector y subsector</th>
                            <th style="padding:0px ; min-width:200px" >Factor Social</th>
                            <th style="padding:0px ; min-width:500px"  class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                            <th style="padding:0px ; min-width:700px" >Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                        </tr>
                    </tbody>
                </table>
                <table class="tablaModulo4" id="totalesTablaPaso9frecuente_alt${x+1}_A">
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Costo aproximado de las pérdidas antes (Lps.)</th>
                            <th class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                            <th>Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                        </tr>
                        <tr>
                            <td class="bajada"><span>Sub totales a Precios Privados</span></td>
                            <td><span class="textInput" editablecontent="false">0</span></td>
                            <td><span class="textInput" editablecontent="false">0</span></td>
                            <td><span class="textInput" editablecontent="false">0</span></td>
                        </tr>
                        <tr>
                            <td class="bajada"><span>Sub totales a Precios Sociales</span></td>
                            <td><span class="textInput" editablecontent="false">0</span></td>
                            <td><span class="textInput" editablecontent="false">0</span></td>
                            <td><span class="textInput" editablecontent="false">0</span></td>
                        </tr>
                        <tr>
                            <td class="bajada"><span>Totales escenario frecuente Precios Privados</span></td>
                            <td><span class="textInput" editablecontent="false">0</span></td>
                            <td><span class="textInput" editablecontent="false">0</span></td>
                            <td><span class="textInput" editablecontent="false">0</span></td>
                        </tr>
                        <tr>
                            <td class="bajada"><span>Totales escenario frecuente Precios Sociales</span></td>
                            <td><span class="textInput" editablecontent="false">0</span></td>
                            <td><span class="textInput" editablecontent="false">0</span></td>
                            <td><span class="textInput" editablecontent="false">0</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        <span class="alternativaStilo">Alternativa N° ${x+1} Amenaza "${tablaPaso8.rows[0][1]}": Extremo cada 10 años</span>
            <div>
                <table class="tablaModulo4" id="tablaPaso9extremo_alt${x+1}_A">
                    <tbody id="bodyPaso9extremo_alt${x+1}_A">
                        <tr>
                            <th style="padding:0px ; min-width:200px">Elementos Dañados</th>
                            <th style="padding:0px ; min-width:100px">Tipo de Componente por sector y subsector</th>
                            <th style="padding:0px ; min-width:200px">Factor Social</th>
                            <th style="padding:0px ; min-width:300px">% de Daños o Pérdidas</th>
                            <th style="padding:0px ; min-width:500px">Costo aproximado de las pérdidas antes (Lps.)</th>
                            <th style="padding:0px ; min-width:600px">Acción correctiva ¿Qué hago para reducir las afectaciones?</th>
                            <th style="padding:0px ; min-width:200px">Efectos Colaterales</th>
                            <th style="padding:0px ; min-width:100px">Tipo de Componente por sector y subsector</th>
                            <th style="padding:0px ; min-width:200px">Factor Social</th>
                            <th style="padding:0px ; min-width:500px" class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                            <th style="padding:0px ; min-width:700px">Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                        </tr>
                    </tbody>
                </table>
                <table class="tablaModulo4" id="totalesTablaPaso9extremo_alt${x+1}_A">
                <tbody>
                    <tr>
                        <th></th>
                        <th>Costo aproximado de las pérdidas antes (Lps.)</th>
                        <th class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                        <th>Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Sub totales a Precios Privados</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Sub totales a Precios Sociales</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Totales escenario extremo Precios Privados</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Totales escenario extremo Precios Sociales</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                    </tr>
                </tbody>
            </table>
            <table class="tablaModulo4" id="totaltotalPaso9_alt${x+1}_A">
            <tbody>
                <tr>
                    <th></th>
                    <th>Costo aproximado de las pérdidas antes (Lps.)</th>
                    <th class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                    <th>Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                </tr>
                <tr>
                    <td class="bajada"><span>Total Escenario Frecuente más Extremo a Precios Privados</span></td>
                    <td><span class="textInput" editablecontent="false">0</span></td>
                    <td><span class="textInput" editablecontent="false">0</span></td>
                    <td><span class="textInput" editablecontent="false">0</span></td>
                </tr>
                <tr>
                    <td class="bajada"><span>Total Escenario Frecuente más Extremo a Precios Sociales</span></td>
                    <td><span class="textInput" editablecontent="false">0</span></td>
                    <td><span class="textInput" editablecontent="false">0</span></td>
                    <td><span class="textInput" editablecontent="false">0</span></td>
                </tr>
            </tbody>
        </table>
            </div>
            <span class="alternativaStilo">Alternativa N° ${x+1} Amenaza "${tablaPaso8.rows[1][1]}": Frecuente cada año</span>
            <div>
                <table class="tablaModulo4" id="tablaPaso9frecuente_alt${x+1}_B">
                    <tbody id="bodyPaso9frecuente_alt${x+1}_B">
                        <tr>
                            <th style="padding:0px ; min-width:200px">Elementos Dañados</th>
                            <th style="padding:0px ; min-width:100px">Tipo de Componente por sector y subsector</th>
                            <th style="padding:0px ; min-width:200px">Factor Social</th>
                            <th style="padding:0px ; min-width:300px">% de Daños o Pérdidas</th>
                            <th style="padding:0px ; min-width:500px">Costo aproximado de las pérdidas antes (Lps.)</th>
                            <th style="padding:0px ; min-width:600px">Acción correctiva ¿Qué hago para reducir las afectaciones?</th>
                            <th style="padding:0px ; min-width:200px">Efectos Colaterales</th>
                            <th style="padding:0px ; min-width:100px">Tipo de Componente por sector y subsector</th>
                            <th style="padding:0px ; min-width:200px">Factor Social</th>
                            <th style="padding:0px ; min-width:500px" class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                            <th style="padding:0px ; min-width:700px">Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                        </tr>
                    </tbody>
                </table>
                <table class="tablaModulo4" id="totalesTablaPaso9frecuente_alt${x+1}_B">
                <tbody>
                    <tr>
                        <th></th>
                        <th>Costo aproximado de las pérdidas antes (Lps.)</th>
                        <th class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                        <th>Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Sub totales a Precios Privados</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Sub totales a Precios Sociales</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Totales escenario frecuente Precios Privados</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Totales escenario frecuente Precios Sociales</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                    </tr>
                </tbody>
            </table>
            </div>
            <span class="alternativaStilo">Alternativa N° ${x+1} Amenaza "${tablaPaso8.rows[1][1]}": Extremo cada 10 años</span>
            <div>
                <table class="tablaModulo4" id="tablaPaso9extremo_alt${x+1}_B">
                    <tbody id="bodyPaso9extremo_alt${x+1}_B">
                        <tr>
                            <th style="padding:0px ; min-width:200px">Elementos Dañados</th>
                            <th style="padding:0px ; min-width:100px">Tipo de Componente por sector y subsector</th>
                            <th style="padding:0px ; min-width:200px">Factor Social</th>
                            <th style="padding:0px ; min-width:300px">% de Daños o Pérdidas</th>
                            <th style="padding:0px ; min-width:500px">Costo aproximado de las pérdidas antes (Lps.)</th>
                            <th style="padding:0px ; min-width:600px">Acción correctiva ¿Qué hago para reducir las afectaciones?</th>
                            <th style="padding:0px ; min-width:200px">Efectos Colaterales</th>
                            <th style="padding:0px ; min-width:100px">Tipo de Componente por sector y subsector</th>
                            <th style="padding:0px ; min-width:200px">Factor Social</th>
                            <th style="padding:0px ; min-width:500px" class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                            <th style="padding:0px ; min-width:700px">Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                        </tr>
                    </tbody>
                </table>
                <table class="tablaModulo4" id="totalesTablaPaso9extremo_alt${x+1}_B">
                <tbody>
                    <tr>
                        <th></th>
                        <th>Costo aproximado de las pérdidas antes (Lps.)</th>
                        <th class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                        <th>Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Sub totales a Precios Privados</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Sub totales a Precios Sociales</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Totales escenario extremo Precios Privados</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                    </tr>
                    <tr>
                        <td class="bajada"><span>Totales escenario extremo Precios Sociales</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                        <td><span class="textInput" editablecontent="false">0</span></td>
                    </tr>
                </tbody>
            </table>
            <table class="tablaModulo4" id="totaltotalPaso9_alt${x+1}_B">
            <tbody>
                <tr>
                    <th></th>
                    <th>Costo aproximado de las pérdidas antes (Lps.)</th>
                    <th class="accionNota">Costo Aproximado de la acción correctiva (Lps.)</th>
                    <th>Costo aproximado de las pérdidas despúes de la acción correctiva (Lps.)</th>
                </tr>
                <tr>
                    <td class="bajada"><span>Total Escenario Frecuente más Extremo a Precios Privados</span></td>
                    <td><span class="textInput" editablecontent="false">0</span></td>
                    <td><span class="textInput" editablecontent="false">0</span></td>
                    <td><span class="textInput" editablecontent="false">0</span></td>
                </tr>
                <tr>
                    <td class="bajada"><span>Total Escenario Frecuente más Extremo a Precios Sociales</span></td>
                    <td><span class="textInput" editablecontent="false">0</span></td>
                    <td><span class="textInput" editablecontent="false">0</span></td>
                    <td><span class="textInput" editablecontent="false">0</span></td>
                </tr>
            </tbody>
            </table>
            </div>
        </div>
        `
    
        let bodyPaso9frecuente_A = document.getElementById(`bodyPaso9frecuente_alt${x+1}_A`)
        let bodyPaso9frecuente_B = document.getElementById(`bodyPaso9frecuente_alt${x+1}_B`)
        let bodyPaso9extremo_A = document.getElementById(`bodyPaso9extremo_alt${x+1}_A`)
        let bodyPaso9extremo_B = document.getElementById(`bodyPaso9extremo_alt${x+1}_B`)
        
        let y_a = 0
        let y_b = 0
        while (y_a<numElementsA) {
            bodyPaso9frecuente_A.innerHTML+=
            `
            <tr>
                <td><span class="textInput" contenteditable="false">${tablaPaso6A.rows[y_a][0]}</span></td>
                                        <td class="dropdown-cell">
                            <span style="display: none;"></span>
                            <select class="my-dropdown"></select>
                          </td>
                <td><span style="text-align:right" id="respuestainputc2_alt${x+1}_f${y_a}A" class="textInput" contenteditable="false">0</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">0</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="false">0</span></td>
                <td><span class="textInput" contenteditable="true"></span></td>
                <td><span class="textInput" contenteditable="true"></span></td>
                                        <td class="dropdown-cell">
                            <span style="display: none;"></span>
                            <select class="my-dropdown"></select>
                          </td>
                <td><span style="text-align:right" id="respuestainputc8_alt${x+1}_f${y_a}A" class="textInput" contenteditable="false">0</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">0</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">0</span></td>
            </tr>
            `
            bodyPaso9extremo_A.innerHTML+=
            `
            <tr>
                <td><span class="textInput" contenteditable="false">${tablaPaso6A.rows[y_a][0]}</span></td>
                                        <td class="dropdown-cell">
                            <span style="display: none;"></span>
                            <select class="my-dropdown"></select>
                          </td>
                <td><span style="text-align:right" id="respuestainputc2_alt${x+1}_e${y_a}A" class="textInput" contenteditable="false">0</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">0</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="false">0</span></td>
                <td><span class="textInput" contenteditable="true"></span></td>
                <td><span class="textInput" contenteditable="true"></span></td>
                                        <td class="dropdown-cell">
                            <span style="display: none;"></span>
                            <select class="my-dropdown"></select>
                          </td>
                <td><span style="text-align:right" id="respuestainputc8_alt${x+1}_e${y_a}A" class="textInput" contenteditable="false">0</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">0</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">0</span></td>
            </tr>
            `


            y_a++
        }
        while (y_b<numElementsB) {
            bodyPaso9frecuente_B.innerHTML+=
            `
            <tr>
                <td><span class="textInput" contenteditable="false">${tablaPaso6B.rows[y_b][0]}</span></td>
                                        <td class="dropdown-cell">
                            <span style="display: none;"></span>
                            <select class="my-dropdown"></select>
                          </td>
                <td><span style="text-align:right" id="respuestainputc2_alt${x+1}_f${y_b}B" class="textInput" contenteditable="false">0</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">0</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="false">0</span></td>
                <td><span class="textInput" contenteditable="true"></span></td>
                <td><span class="textInput" contenteditable="true"></span></td>
                                        <td class="dropdown-cell">
                            <span style="display: none;"></span>
                            <select class="my-dropdown"></select>
                          </td>
                <td><span style="text-align:right" id="respuestainputc8_alt${x+1}_f${y_b}B" class="textInput" contenteditable="false">0</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">0</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">0</span></td>
            </tr>
            `
            bodyPaso9extremo_B.innerHTML+=
            `
            <tr>
                <td><span class="textInput" contenteditable="false">${tablaPaso6B.rows[y_b][0]}</span></td>
                                        <td class="dropdown-cell">
                            <span style="display: none;"></span>
                            <select class="my-dropdown"></select>
                          </td>
                <td><span style="text-align:right" id="respuestainputc2_alt${x+1}_e${y_b}B" class="textInput" contenteditable="false">0</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">0</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="false">0</span></td>
                <td><span class="textInput" contenteditable="true"></span></td>
                <td><span class="textInput" contenteditable="true"></span></td>
                                        <td class="dropdown-cell">
                            <span style="display: none;"></span>
                            <select class="my-dropdown"></select>
                          </td>
                <td><span style="text-align:right" id="respuestainputc8_alt${x+1}_e${y_b}B" class="textInput" contenteditable="false">0</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">0</span></td>
                <td><span style="text-align:right" class="textInput" contenteditable="true">0</span></td>
            </tr>
            `

            y_b++
        }
    }

    x++
}

if (ejecucion == 1) {
    window.addEventListener('DOMContentLoaded',contarFilas2())
} 
if (ejecucion == 2) {
    window.addEventListener('DOMContentLoaded',contarFilas3())
} 
if (ejecucion == 3) {
    window.addEventListener('DOMContentLoaded',contarFilas4())

}

// Obtén todas las celdas que contienen un dropdown
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


function contarFilas() {

    sessionStorage.setItem('ejecucion', 1)
    const tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id

        let skipRows = 1
        tableId = tableId.toString()
        if (tableId.includes('totaltotal')) {
            
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
        } else if (tableId.includes('totales')) {
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
    
        } else {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
    
                for (let k = 0; k < cells.length; k++) {
                    if (k === 1 || k === 7) {
                        
                        if (tableId === '') {
                            
                        } else {
                            let celdaId = cells[k].children[1].firstChild
                            console.log(celdaId.value);
                                
                            const cellData = celdaId.value
                            rowData.push(cellData);
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
    
            const tableObject = {
            rows: tableData
            };
        
            console.log(tableObject);
            sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        }
    }
    window.location.reload()
}

function contarFilas2() {

    sessionStorage.setItem('ejecucion', 2)
    const tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id

        let skipRows = 1
        tableId = tableId.toString()
        if (tableId.includes('totaltotal')) {
            
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
        } else if (tableId.includes('totales')) {
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
    
        } else {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
    
                for (let k = 0; k < cells.length; k++) {
                    if (k === 1 || k === 7) {
                        
                        if (tableId === '') {
                            
                        } else {
                            let celdaId = cells[k].children[1].attributes[1].nodeValue
                            /* let celdaId = cells[k].children[1].firstChild
                            console.log(celdaId.value);
                             */    

                            rowData.push(celdaId);
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
    
            const tableObject = {
            rows: tableData
            };
        
            console.log(tableObject);
            sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        }
    }
    window.location.reload()
}

function contarFilas3() {

    sessionStorage.setItem('ejecucion', 3)
    const tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id

        let skipRows = 1
        tableId = tableId.toString()
        if (tableId.includes('totaltotal')) {
            
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
        } else if (tableId.includes('totales')) {
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
    
        } else {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
    
                for (let k = 0; k < cells.length; k++) {
                    if (k === 1 || k === 7) {
                        
                        if (tableId === '') {
                            
                        } else {
                            let celdaId = cells[k].children[1].attributes[1].nodeValue
                            console.log('ejecucion 2');
                            console.log(celdaId);
                            /* let celdaId = cells[k].children[1].firstChild
                            console.log(celdaId.value);
                             */    
                            rowData.push(celdaId);
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
    
            const tableObject = {
            rows: tableData
            };
        
            console.log(tableObject);
            sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        }
    }
    window.location.reload()
}

function contarFilas4() {

    sessionStorage.setItem('ejecucion', 0)
    const tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id

        let skipRows = 1
        tableId = tableId.toString()
        if (tableId.includes('totaltotal')) {
            
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
        } else if (tableId.includes('totales')) {
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
    
        } else {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
    
                for (let k = 0; k < cells.length; k++) {
                    if (k === 1 || k === 7) {
                        
                        if (tableId === '') {
                            
                        } else {
                            let celdaId = cells[k].children[1].attributes[1].nodeValue
                            console.log('ejecucion 2');
                            console.log(celdaId);
                            /* let celdaId = cells[k].children[1].firstChild
                            console.log(celdaId.value);
                             */    
                            rowData.push(celdaId);
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
    
            const tableObject = {
            rows: tableData
            };
        
            console.log(tableObject);
            sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        }
    }
    window.location.reload()
}

function par(e) {
    let campo = e.srcElement.id.toString()
    if (campo.startsWith('inputc')) {
        let input = document.getElementById(campo)
        let respuesta = 'respuesta'+campo
        let campoRespuesta = document.getElementById(respuesta)
        
        
        arrayFactores.find((el) => {
            if (el.name === input.value) {
                campoRespuesta.innerHTML = el.factor
            }
        })
    }
}





function impar(e) {
    let campo = e.srcElement.id.toString()
    if (campo.startsWith('inputc')) {
        let input = document.getElementById(campo)
        let respuesta = 'respuesta'+campo
        let campoRespuesta = document.getElementById(respuesta)
        
        
        arrayFactores.find((el) => {
            if (el.name === input.value) {
                campoRespuesta.innerHTML = el.factor
            }
        })
    }
}

botonGrabar.addEventListener('click', contarFilas)
window.addEventListener('change', par)

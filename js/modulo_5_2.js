const flujoCosto = document.getElementById('flujoCosto')
const numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))
const grabarPrueba = document.getElementById('grabar_prueba')
const ejecucion = sessionStorage.getItem('ejecucion')

let arrayFactores = [
    {name:'---',
    factor:0},
    {name:'Estudios de Preinversión',
    factor:0.8084},
    {name:'Diseño de Obras',
    factor:0.8084},
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
    {name:'Gastos Administrativos',
    factor:1}
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
    let numComp = sessionStorage.getItem(`Alt_numero_${x+1}`)
    let y = 0
    flujoCosto.innerHTML +=
    `
    <div id=flujoCostoAlt${x+1}>
    <span class="alternativaStilo">Alternativa N° ${x+1}: ${JSON.parse(numComp).name}</span>
        <div id=flujoCostoComp${x+1}>
        </div>
    </div>
    <div>
        <table id="sumTodoAlt${x+1}" class="sumTodoMod5">
            <tbody>
                <tr id=sumHeader_alt${x+1}>
                    <th></th>
                    <th style="min-width:2.5cm">TOTAL</th>
                </tr>
                <tr id=sumPrivados_alt${x+1}>
                    <td class="bajada" style="width:10cm">TOTAL COSTOS INVERSIÓN Y REINVERSIÓN Precios Privados</td>
                    <td><span id=valorTotalPrivados_alt${x+1} class="respuestaTabla5-2" style="text-align:right">0</span></td>
                </tr>
                <tr id=sumSociales_alt${x+1}>
                    <td class="bajada" style="width:10cm">TOTAL COSTOS INVERSIÓN Y REINVERSIÓN Precios Sociales</td>
                    <td><span id=valorTotalSociales_alt${x+1} class="respuestaTabla5-2" style="text-align:right">0</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    `
    
    let componente = document.getElementById(`flujoCostoComp${x+1}`)
    let horizonteSuma = sessionStorage.getItem('horizonteEvaluacion')
    let periodosHeader = document.getElementById(`sumHeader_alt${x+1}`)
    let periodosSumPrivados = document.getElementById(`sumPrivados_alt${x+1}`)
    let periodosSumSociales = document.getElementById(`sumSociales_alt${x+1}`)
    let alternativa = JSON.parse(sessionStorage.getItem(`horizonteCosto_alt${x+1}_com1`))

    if (alternativa != null) {
        for (let index = 0; index <= horizonteSuma; index++) {
            let zzz = 0
            let SumTotalPrivado = 0
            let SumTotalSocial = 0

            while (zzz < JSON.parse(numComp).numeroCom) {
                let dato = JSON.parse(sessionStorage.getItem(`horizonteCosto_alt${x+1}_com${zzz+1}`));
                if (dato != null) {
                    let datoLargo = dato.rows.length;

                    SumTotalPrivado = parseFloat((parseInt(SumTotalPrivado) + parseInt(dato.rows[datoLargo-2][index]))).toFixed(2);
                    SumTotalSocial = parseFloat(parseInt(SumTotalSocial) + parseInt(dato.rows[datoLargo-1][index])).toFixed(2)
                } else {

                }


                zzz++
            }

            periodosHeader.innerHTML+=
            `
            <th style="min-width:2.5cm">${index}</th>
            `
            periodosSumPrivados.innerHTML +=
            `
            <td><span id=sumPrivados_alt${x+1}_hor${index} class="respuestaTabla5-2"  style="text-align:right">${SumTotalPrivado}</span></td>
            `
        
            periodosSumSociales.innerHTML +=
            `
            <td><span id=sumSociales_alt${x+1}_hor${index} class="respuestaTabla5-2"  style="text-align:right">${SumTotalSocial}</span></td>
            `
        }
        
    } else {
        for (let index = 0; index <= horizonteSuma; index++) {
            
            periodosHeader.innerHTML+=
            `
            <th style="min-width:2.5cm">${index}</th>
            `

            periodosSumPrivados.innerHTML +=
            `
            <td><span id=sumPrivados_alt${x+1}_hor${index} class="respuestaTabla" style="text-align:right">0</span></td>
            `
        
            periodosSumSociales.innerHTML +=
            `
            <td><span id=sumSociales_alt${x+1}_hor${index} class="respuestaTabla" style="text-align:right">0</span></td>
            `
        }
    }


    while (y <parseInt(JSON.parse(numComp).numeroCom)) {
        let alternativas = JSON.parse(sessionStorage.getItem(`alt${x+1}_com${y+1}`))
        var z = 0

        componente.innerHTML +=
        `
        <span class="componenteStilo">Componente N° ${y+1}</span>
        <div class=flexFlujo>
            <table id=flujoCosto_alt${x+1}_com${y+1} class="costoComp">
                <tbody>
                    <tr>
                        <th style="font-size:12px; width:15px; padding:0%">TIPO DE COSTO</th>
                        <th style="font-size:12px; width:15px; padding:0%">Tipo de Componente/sector</th>
                        <th style="font-size:12px; width:15px; padding:0%">Factor Social</th>
                        <th style="font-size:12px; width:15px; padding:0%">UNIDAD DE MEDIDA</th>
                        <th style="font-size:12px; width:15px; padding:0%">CANTIDAD REQUERIDA </th>
                        <th style="font-size:12px; width:15px; padding:0%">VALOR UNITARIO (L.)</th>
                        <th style="font-size:12px; width:15px; padding:0%">VALOR TOTAL (L.)</th>
                    </tr>
                </tbody>
            </table>
            <table class="tablaHorizonte" id="horizonteCosto_alt${x+1}_com${y+1}">
                <tbody>
                    <tr id="periodos_alt${x+1}_com${y+1}">
                    </tr>
                </tbody>
            </table>
        </div>

        `

        let periodos = document.getElementById(`periodos_alt${x+1}_com${y+1}`)
        let horizonte = sessionStorage.getItem('horizonteEvaluacion')
        var tabla = document.getElementById(`horizonteCosto_alt${x+1}_com${y+1}`); 
        let tablaHorizonte = JSON.parse(sessionStorage.getItem(`horizonteCosto_alt${x+1}_com${y+1}`))

        let i = 0
        let j = 0

        if (tablaHorizonte===null) {
            while (i<=horizonte) {

                periodos.innerHTML +=
                `
                <th style="width:5cm">${i}</th>
                `
                
                
                while (j<=alternativas.rows.length+1) {
                    const altHor = document.getElementById(`horizonteCosto_alt${x+1}_com${y+1}`)
                    
                    var rowCountHor = altHor.rows.length;
                    var rowHor = altHor.insertRow(rowCountHor);
                    var periodo0 = rowHor.insertCell(0)
                    if (j<alternativas.rows.length) {
                        periodo0.innerHTML=`<input id=input_alt${x+1}_com${y+1}_act${j+1}_hor${i} value=0 style="text-align:right">`
                        let array_periodos = []
                        for (let index = 1; index <= horizonte; index++) {
                            array_periodos[index] = rowHor.insertCell(-1)
                            array_periodos[index].innerHTML = `<input id=input_alt${x+1}_com${y+1}_act${j+1}_hor${index} value=0 style="text-align:right">`
                            
                        }
                    } else if (j===alternativas.rows.length){
                        periodo0.innerHTML=`<input id=totalPrivado_alt${x+1}_com${y+1}_act${j+1}_hor${i} value=0 contenteditable=false style="text-align:right">`
                        let array_periodos = []
    
                        for (let index = 1; index <= horizonte; index++) {
                            array_periodos[index] = rowHor.insertCell(-1)
                            array_periodos[index].innerHTML = `<input id=total_alt${x+1}_com${y+1}_act${j+1}_hor${index} value=0 contenteditable=false style="text-align:right">`
                        }
    
                    }   else {
                        periodo0.innerHTML=`<input id=totalSocial_alt${x+1}_com${y+1}_act${j+1}_hor${i} value=0 contenteditable=false style="text-align:right">`
                        let array_periodos = []
    
                        for (let index = 1; index <= horizonte; index++) {
                            array_periodos[index] = rowHor.insertCell(-1)
                            array_periodos[index].innerHTML = `<input id=totalSocial_alt${x+1}_com${y+1}_act${j+1}_hor${index} value=0 contenteditable=false style="text-align:right">`
                        }
                    
                    }
                    
    
                    j++
    
                }
                i++
    
            }
        } else {

            if (alternativas.rows.length <= tablaHorizonte.rows.length-2) {
                while (i<=horizonte) {

                    periodos.innerHTML +=
                    `
                    <th style="height:35px">${i}</th>
                    `
                    
                    
                    while (j<=alternativas.rows.length+1) {
                        const altHor = document.getElementById(`horizonteCosto_alt${x+1}_com${y+1}`)
                        var rowCountHor = altHor.rows.length;
                        var rowHor = altHor.insertRow(rowCountHor);
                        var periodo0 = rowHor.insertCell(0)
                        if (j<alternativas.rows.length) {
                            periodo0.innerHTML=`<input id=input_alt${x+1}_com${y+1}_act${j+1}_hor${i} value=${parseFloat(tablaHorizonte.rows[j][i]).toFixed(2)} style="text-align:right">`
                            let array_periodos = []
                            for (let index = 1; index <= horizonte; index++) {
                                var sumValTotalSocial = 0;
    
                                let jz = 0
                                while (jz<tablaHorizonte.rows.length-2) {
                                    if (tablaHorizonte.rows[jz] === "") {
    
                                    } else {
                                        let flujoCosto = JSON.parse(sessionStorage.getItem(`flujoCosto_alt${x+1}_com${y+1}`))
                                        sumValTotalSocial += parseInt(tablaHorizonte.rows[jz][index]*flujoCosto.rows[jz][2])
                                    }
                                    jz++
                                }
    
                                if (tablaHorizonte.rows[j][index] === undefined) {
                                    array_periodos[index] = rowHor.insertCell(-1)
                                    array_periodos[index].innerHTML = `<input id=input_alt${x+1}_com${y+1}_act${j+1}_hor${index} value=0.00 style="text-align:right">`
                                } else {
                                    array_periodos[index] = rowHor.insertCell(-1)
                                    array_periodos[index].innerHTML = `<input id=input_alt${x+1}_com${y+1}_act${j+1}_hor${index} value=${parseFloat(tablaHorizonte.rows[j][index]).toFixed(2)} style="text-align:right">`
                                }
    
                            }
    
                        } else if (j===alternativas.rows.length){
                            
                            let array_periodos = []
                            var sumValTotal = 0;
    
                            let jz = 0
                            while (jz<tablaHorizonte.rows.length-2) {
                                if (tablaHorizonte.rows[jz] === "") {
                                    
                                } else {
                                    sumValTotal += parseInt(tablaHorizonte.rows[jz])
                                    periodo0.innerHTML=`<input id=totalPrivado_alt${x+1}_com${y+1}_act${j+1}_hor${i} value=${parseFloat(sumValTotal).toFixed(2)} readonly="true" style="text-align:right">`
                                }
                                jz++
                            }
                            for (let index = 1; index <= horizonte; index++) {
                                var sumValPrivado = 0;
    
                                let jz = 0
                                while (jz<tablaHorizonte.rows.length -2) {
                                    if (tablaHorizonte.rows[jz] === "") {
                                        
                                    } else {
                                        sumValPrivado += parseInt(tablaHorizonte.rows[jz][index])
                                    }
                                    jz++
                                }
                                array_periodos[index] = rowHor.insertCell(-1)
                                array_periodos[index].innerHTML = `<input id=totalPrivado_alt${x+1}_com${y+1}_act${j+1}_hor${index} value=${parseFloat(sumValPrivado).toFixed(2)} readonly="true" style="text-align:right">`
                            }
                        }   else {
                            let array_periodos = []
                            var sumValTotal = 0;
    
                            let jz = 0
                            while (jz<tablaHorizonte.rows.length-2) {
                                if (tablaHorizonte.rows[jz] === "") {
                                    
                                } else {
                                    let flujoCosto = JSON.parse(sessionStorage.getItem(`flujoCosto_alt${x+1}_com${y+1}`))
                                    
                                    sumValTotal += parseInt(tablaHorizonte.rows[jz][0]*flujoCosto.rows[jz][2])
                                    periodo0.innerHTML=`<input id=totalSocial_alt${x+1}_com${y+1}_act${j+1}_hor${i} value=${parseFloat(sumValTotal).toFixed(2)} readonly="true" style="text-align:right">`
                                }
                                jz++
                            }
        
                            for (let index = 1; index <= horizonte; index++) {
                                var sumValSocial = 0;
    
                                let jz = 0
                                while (jz<tablaHorizonte.rows.length -2) {
                                    if (tablaHorizonte.rows[jz] === "") {
                                        
                                    } else {
                                        let flujoCosto = JSON.parse(sessionStorage.getItem(`flujoCosto_alt${x+1}_com${y+1}`))
                                        sumValSocial += parseInt(tablaHorizonte.rows[jz][index]*flujoCosto.rows[jz][2])
                                    }
                                    jz++
                                }
    
                                array_periodos[index] = rowHor.insertCell(-1)
                                array_periodos[index].innerHTML = `<input id=totalSocual_alt${x+1}_com${y+1}_act${j+1}_hor${index} value=${parseFloat(sumValSocial).toFixed(2)} contenteditable=false style="text-align:right">`
                            }
                        
                        }
        
                        j++
        
                    }
                    i++
        
                }
            } else {
                while (i<=horizonte) {

                    periodos.innerHTML +=
                    `
                    <th style="height:35px">${i}</th>
                    `

                    while (j<=alternativas.rows.length+1) {
                        const altHor = document.getElementById(`horizonteCosto_alt${x+1}_com${y+1}`)
                        var rowCountHor = altHor.rows.length;
                        var rowHor = altHor.insertRow(rowCountHor);
                        var periodo0 = rowHor.insertCell(0)
                        if (j<tablaHorizonte.rows.length-2) {
                            console.log('j'+j);
                            periodo0.innerHTML=`<input id=input_alt${x+1}_com${y+1}_act${j+1}_hor${i} value=${parseFloat(tablaHorizonte.rows[j][i]).toFixed(2)} style="text-align:right">`
                            let array_periodos = []
                            for (let index = 1; index <= horizonte; index++) {
                                var sumValTotalSocial = 0;
    
                                let jz = 0
                                while (jz<tablaHorizonte.rows.length-2) {
                                    if (tablaHorizonte.rows[jz] === "") {
    
                                    } else {
                                        let flujoCosto = JSON.parse(sessionStorage.getItem(`flujoCosto_alt${x+1}_com${y+1}`))
                                        sumValTotalSocial += parseInt(tablaHorizonte.rows[jz][index]*flujoCosto.rows[jz][2])
                                    }
                                    jz++
                                }
    
                                if (tablaHorizonte.rows[j][index] === undefined) {
                                    array_periodos[index] = rowHor.insertCell(-1)
                                    array_periodos[index].innerHTML = `<input id=input_alt${x+1}_com${y+1}_act${j+1}_hor${index} value=0.00 style="text-align:right">`
                                } else {
                                    array_periodos[index] = rowHor.insertCell(-1)
                                    array_periodos[index].innerHTML = `<input id=input_alt${x+1}_com${y+1}_act${j+1}_hor${index} value=${parseFloat(tablaHorizonte.rows[j][index]).toFixed(2)} style="text-align:right">`
                                }
    
                            }
    
                        } else if (j===alternativas.rows.length){
                            console.log('j' + j);
                            let array_periodos = []
                            var sumValTotal = 0;
    
                            let jz = 0
                            while (jz<tablaHorizonte.rows.length-2) {
                                if (tablaHorizonte.rows[jz] === "") {
                                    
                                } else {
                                    sumValTotal += parseInt(tablaHorizonte.rows[jz])
                                    periodo0.innerHTML=`<input id=totalPrivado_alt${x+1}_com${y+1}_act${j+1}_hor${i} value=${parseFloat(sumValTotal).toFixed(2)} readonly="true" style="text-align:right">`
                                }
                                jz++
                            }
                            for (let index = 1; index <= horizonte; index++) {
                                var sumValPrivado = 0;
    
                                let jz = 0
                                while (jz<tablaHorizonte.rows.length -2) {
                                    if (tablaHorizonte.rows[jz] === "") {
                                        
                                    } else {
                                        sumValPrivado += parseInt(tablaHorizonte.rows[jz][index])
                                    }
                                    jz++
                                }
                                array_periodos[index] = rowHor.insertCell(-1)
                                array_periodos[index].innerHTML = `<input id=totalPrivado_alt${x+1}_com${y+1}_act${j+1}_hor${index} value=${parseFloat(sumValPrivado).toFixed(2)} readonly="true" style="text-align:right">`
                            }
                        } else if (j===alternativas.rows.length+1){
                            let array_periodos = []
                            var sumValTotal = 0;
    
                            let jz = 0
                            while (jz<tablaHorizonte.rows.length-2) {
                                if (tablaHorizonte.rows[jz] === "") {
                                    
                                } else {
                                    let flujoCosto = JSON.parse(sessionStorage.getItem(`flujoCosto_alt${x+1}_com${y+1}`))
                                    
                                    sumValTotal += parseInt(tablaHorizonte.rows[jz][0]*flujoCosto.rows[jz][2])
                                    periodo0.innerHTML=`<input id=totalSocial_alt${x+1}_com${y+1}_act${j+1}_hor${i} value=${parseFloat(sumValTotal).toFixed(2)} readonly="true" style="text-align:right">`
                                }
                                jz++
                            }
        
                            for (let index = 1; index <= horizonte; index++) {
                                var sumValSocial = 0;
    
                                let jz = 0
                                while (jz<tablaHorizonte.rows.length -2) {
                                    if (tablaHorizonte.rows[jz] === "") {
                                        
                                    } else {
                                        let flujoCosto = JSON.parse(sessionStorage.getItem(`flujoCosto_alt${x+1}_com${y+1}`))
                                        sumValSocial += parseInt(tablaHorizonte.rows[jz][index]*flujoCosto.rows[jz][2])
                                    }
                                    jz++
                                }
    
                                array_periodos[index] = rowHor.insertCell(-1)
                                array_periodos[index].innerHTML = `<input id=totalSocual_alt${x+1}_com${y+1}_act${j+1}_hor${index} value=${parseFloat(sumValSocial).toFixed(2)} contenteditable=false style="text-align:right">`
                            }
                        } else {
                            periodo0.innerHTML=`<input id=input_alt${x+1}_com${y+1}_act${j+1}_hor${i} value=0.00 style="text-align:right">`
                            let array_periodos = []
                            for (let index = 1; index <= horizonte; index++) {
                                array_periodos[index] = rowHor.insertCell(-1)
                                array_periodos[index].innerHTML = `<input id=input_alt${x+1}_com${y+1}_act${j+1}_hor${index} value=0.00 style="text-align:right">`
                                
                            }
                        }
        
                        j++
        
                    }
                    i++
        
                }
            }
        }
        
        
        const altID = document.getElementById(`flujoCosto_alt${x+1}_com${y+1}`)

        while (z<=alternativas.rows.length+1) {
            let flujoCosto = JSON.parse(sessionStorage.getItem(`flujoCosto_alt${x+1}_com${y+1}`))

            if (alternativas.rows.length <= flujoCosto.rows.length-2) {
                console.log('normal');
                if (z<alternativas.rows.length) {
                    var rowCount = altID.rows.length;
                    var row = altID.insertRow(rowCount);
                    var cell1 = row.insertCell(0)
                    var cell2 = row.insertCell(-1)
                    var cell3 = row.insertCell(-1)
                    var cell4 = row.insertCell(-1)
                    var cell5 = row.insertCell(-1)
                    var cell6 = row.insertCell(-1)
                    var cell7 = row.insertCell(-1)
                    
                    cell1.innerHTML=`<span class="respuestaTabla" style="font-size:75%;width:97%">${alternativas.rows[z][0]}</span>`;
                    //cell2.innerHTML=`<input id=inputComponenteSocial_alt${x+1}_com${y+1}_act${z+1} list=factorSocial_alt${x+1}_com${y+1}_act${z+1}><datalist class=selectorFactorSocial id=factorSocial_alt${x+1}_com${y+1}_act${z+1} style="overflow-y: auto"></datalist>`
                    if (flujoCosto === null) {
                        cell2.className = "dropdown-cell"
                        cell2.innerHTML = 
                        `
                            <span style="display: none;"></span>
                            <select class="my-dropdown" ></select>
                        `
                        cell3.innerHTML=`<span class="respuestaTabla5-2" id=valorFactorSocial_alt${x+1}_com${y+1}_act${z+1}></span>`
                    } else {
                        cell2.className = "dropdown-cell"
                        cell2.innerHTML = 
                        `
                            <span style="display: none;"></span>
                            <select class="my-dropdown" value="${flujoCosto.rows[z][1]}"></select>
                        `
                        cell3.innerHTML=`<span class="respuestaTabla5-2" id=valorFactorSocial_alt${x+1}_com${y+1}_act${z+1}>${flujoCosto.rows[z][2]}</span>`
                    }
    
                    cell4.innerHTML=`<span class="respuestaTabla5-2">${arrayUnidades[alternativas.rows[z][1]]}</span>`;
                    cell5.innerHTML=`<span class="respuestaTabla5-2" style="text-align:right">${alternativas.rows[z][2]}</span>`;
                    cell6.innerHTML=`<span class="respuestaTabla5-2" style="text-align:right">${alternativas.rows[z][3]}</span>`;
                    cell7.innerHTML=`<span class="respuestaTabla5-2" style="text-align:right">${alternativas.rows[z][4]}</span>`;
                    
    /*                 let datalist = document.getElementById(`factorSocial_alt${x+1}_com${y+1}_act${z+1}`)
                    let input = document.getElementById(`inputComponenteSocial_alt${x+1}_com${y+1}_act${z+1}`)
                    arrayFactores.forEach(el => {
                        datalist.innerHTML += 
                        `   
                        <option value="${el.name}">
                        `
                        
                    }); */
        
                    
                } else if (z===alternativas.rows.length) 
                {
                    var rowCount = altID.rows.length;
                    var row = altID.insertRow(rowCount);
                    var cell1 = row.insertCell(0)
                    var cell2 = row.insertCell(-1)
                    var cell3 = row.insertCell(-1)
                    var cell4 = row.insertCell(-1)
                    var cell5 = row.insertCell(-1)
                    var cell6 = row.insertCell(-1)
                    var cell7 = row.insertCell(-1)
                    
                    if (flujoCosto === null) {
                        cell1.innerHTML=`<span class="respuestaTabla5-2">TOTAL COMP a Precios Privados</span>`;
                        cell2.innerHTML=''
                        cell3.innerHTML=''
                        cell4.innerHTML=''
                        cell5.innerHTML=''
                        cell6.innerHTML=''
                        cell7.innerHTML=`<span class="respuestaTabla5-2" id='resultadoPrivado_alt${x+1}_com${y+1}' style="text-align:right"></span>`
                    } else {
                        cell1.innerHTML=`<span class="respuestaTabla5-2">TOTAL COMP a Precios Privados</span>`;
                        cell2.innerHTML=''
                        cell3.innerHTML=''
                        cell4.innerHTML=''
                        cell5.innerHTML=''
                        cell6.innerHTML=''
                        cell7.innerHTML=`<span class="respuestaTabla5-2" id='resultadoPrivado_alt${x+1}_com${y+1}' style="text-align:right">${parseFloat(flujoCosto.rows[z][6]).toFixed(2)}</span>`
                    }
                    
                    var sumValTotal = 0;
                    alternativas.rows.forEach(el => {
                        if (el[4] === "") {
                            
                        } else {
                            sumValTotal += parseInt(el[4])
                            let resultadoPrivado = document.getElementById(`resultadoPrivado_alt${x+1}_com${y+1}`)
                            resultadoPrivado.innerHTML = `
                            ${parseFloat(sumValTotal).toFixed(2)}`
                        }
                    });
                } else {
                    var rowCount = altID.rows.length;
                    var row = altID.insertRow(rowCount);
                    var cell1 = row.insertCell(0)
                    var cell2 = row.insertCell(-1)
                    var cell3 = row.insertCell(-1)
                    var cell4 = row.insertCell(-1)
                    var cell5 = row.insertCell(-1)
                    var cell6 = row.insertCell(-1)
                    var cell7 = row.insertCell(-1)
                    cell1.innerHTML=`<span class="respuestaTabla5-2">TOTAL COMP a Precios Sociales</span>`;
                    cell2.innerHTML=''
                    cell3.innerHTML=''
                    cell4.innerHTML=''
                    cell5.innerHTML=''
                    cell6.innerHTML=''
                    cell7.innerHTML=`<span class="respuestaTabla5-2" id="resultadoSocial_alt${x+1}_com${y+1}" style="text-align:right"></span>`
    
                    if (flujoCosto === null) {
                        let resultadoSocial = document.getElementById(`resultadoSocial_alt${x+1}_com${y+1}`)
                        resultadoSocial.innerHTML = "0"
                    } else {
                        var sumValTotal = 0;
                        flujoCosto.rows.forEach(el => {
                            if (el[2] === "") {
                                
                            } else {
                                sumValTotal += (parseInt(el[6])*parseFloat(el[2]))
                                let resultadoSocial = document.getElementById(`resultadoSocial_alt${x+1}_com${y+1}`)
                                resultadoSocial.innerHTML = `
                                ${parseFloat(sumValTotal).toFixed(2)}`
                            }
                        });
                    }
                }
            } else {

                if (z<alternativas.rows.length) {
                    var rowCount = altID.rows.length;
                    var row = altID.insertRow(rowCount);
                    var cell1 = row.insertCell(0)
                    var cell2 = row.insertCell(-1)
                    var cell3 = row.insertCell(-1)
                    var cell4 = row.insertCell(-1)
                    var cell5 = row.insertCell(-1)
                    var cell6 = row.insertCell(-1)
                    var cell7 = row.insertCell(-1)
                    
                    cell1.innerHTML=`<span class="respuestaTabla" style="font-size:75%;width:97%">${alternativas.rows[z][0]}</span>`;
                    //cell2.innerHTML=`<input id=inputComponenteSocial_alt${x+1}_com${y+1}_act${z+1} list=factorSocial_alt${x+1}_com${y+1}_act${z+1}><datalist class=selectorFactorSocial id=factorSocial_alt${x+1}_com${y+1}_act${z+1} style="overflow-y: auto"></datalist>`
                    if (flujoCosto === null || z>=(flujoCosto.rows.length-2)) {

                        cell2.className = "dropdown-cell"
                        cell2.innerHTML = 
                        `
                            <span style="display: none;"></span>
                            <select class="my-dropdown" ></select>
                        `
                        cell3.innerHTML=`<span class="respuestaTabla5-2" id=valorFactorSocial_alt${x+1}_com${y+1}_act${z+1}></span>`
                    } else {

                        cell2.className = "dropdown-cell"
                        cell2.innerHTML = 
                        `
                            <span style="display: none;"></span>
                            <select class="my-dropdown" value="${flujoCosto.rows[z][1]}"></select>
                        `
                        cell3.innerHTML=`<span class="respuestaTabla5-2" id=valorFactorSocial_alt${x+1}_com${y+1}_act${z+1}>${flujoCosto.rows[z][2]}</span>`
                    }
    
                    cell4.innerHTML=`<span class="respuestaTabla5-2">${arrayUnidades[alternativas.rows[z][1]]}</span>`;
                    cell5.innerHTML=`<span class="respuestaTabla5-2" style="text-align:right">${alternativas.rows[z][2]}</span>`;
                    cell6.innerHTML=`<span class="respuestaTabla5-2" style="text-align:right">${alternativas.rows[z][3]}</span>`;
                    cell7.innerHTML=`<span class="respuestaTabla5-2" style="text-align:right">${alternativas.rows[z][4]}</span>`;
                    
    /*                 let datalist = document.getElementById(`factorSocial_alt${x+1}_com${y+1}_act${z+1}`)
                    let input = document.getElementById(`inputComponenteSocial_alt${x+1}_com${y+1}_act${z+1}`)
                    arrayFactores.forEach(el => {
                        datalist.innerHTML += 
                        `   
                        <option value="${el.name}">
                        `
                        
                    }); */
        
                    
                } else if (z===alternativas.rows.length) 
                {
                    var rowCount = altID.rows.length;
                    var row = altID.insertRow(rowCount);
                    var cell1 = row.insertCell(0)
                    var cell2 = row.insertCell(-1)
                    var cell3 = row.insertCell(-1)
                    var cell4 = row.insertCell(-1)
                    var cell5 = row.insertCell(-1)
                    var cell6 = row.insertCell(-1)
                    var cell7 = row.insertCell(-1)
                    
                    if (flujoCosto === null || z>=(flujoCosto.rows.length-2)) {
                        cell1.innerHTML=`<span class="respuestaTabla5-2">TOTAL COMP a Precios Privados</span>`;
                        cell2.innerHTML=''
                        cell3.innerHTML=''
                        cell4.innerHTML=''
                        cell5.innerHTML=''
                        cell6.innerHTML=''
                        cell7.innerHTML=`<span class="respuestaTabla5-2" id='resultadoPrivado_alt${x+1}_com${y+1}' style="text-align:right"></span>`
                    } else {

                        cell1.innerHTML=`<span class="respuestaTabla5-2">TOTAL COMP a Precios Privados</span>`;
                        cell2.innerHTML=''
                        cell3.innerHTML=''
                        cell4.innerHTML=''
                        cell5.innerHTML=''
                        cell6.innerHTML=''
                        cell7.innerHTML=`<span class="respuestaTabla5-2" id='resultadoPrivado_alt${x+1}_com${y+1}' style="text-align:right">${parseFloat(flujoCosto.rows[z-1][6]).toFixed(2)}</span>`
                    }
                    
                    var sumValTotal = 0;
                    alternativas.rows.forEach(el => {
                        if (el[4] === "") {
                            
                        } else {
                            sumValTotal += parseInt(el[4])
                            let resultadoPrivado = document.getElementById(`resultadoPrivado_alt${x+1}_com${y+1}`)
                            resultadoPrivado.innerHTML = `
                            ${parseFloat(sumValTotal).toFixed(2)}`
                        }
                    });
                } else if (z===alternativas.rows.length+1) {
                    var rowCount = altID.rows.length;
                    var row = altID.insertRow(rowCount);
                    var cell1 = row.insertCell(0)
                    var cell2 = row.insertCell(-1)
                    var cell3 = row.insertCell(-1)
                    var cell4 = row.insertCell(-1)
                    var cell5 = row.insertCell(-1)
                    var cell6 = row.insertCell(-1)
                    var cell7 = row.insertCell(-1)
                    cell1.innerHTML=`<span class="respuestaTabla5-2">TOTAL COMP a Precios Sociales</span>`;
                    cell2.innerHTML=''
                    cell3.innerHTML=''
                    cell4.innerHTML=''
                    cell5.innerHTML=''
                    cell6.innerHTML=''
                    cell7.innerHTML=`<span class="respuestaTabla5-2" id="resultadoSocial_alt${x+1}_com${y+1}" style="text-align:right"></span>`
    
                    if (flujoCosto === null) {
                        let resultadoSocial = document.getElementById(`resultadoSocial_alt${x+1}_com${y+1}`)
                        resultadoSocial.innerHTML = "0"
                    } else {
                        var sumValTotal = 0;
                        flujoCosto.rows.forEach(el => {
                            if (el[2] === "") {
                                
                            } else {
                                sumValTotal += (parseInt(el[6])*parseFloat(el[2]))
                                let resultadoSocial = document.getElementById(`resultadoSocial_alt${x+1}_com${y+1}`)
                                resultadoSocial.innerHTML = `
                                ${parseFloat(sumValTotal).toFixed(2)}`
                            }
                        });
                    }
                } else {

                }
            }
            z++
        }


        let tabla1 = document.getElementById(`flujoCosto_alt${x+1}_com${y+1}`)
        let tabla2 = document.getElementById(`horizonteCosto_alt${x+1}_com${y+1}`)

        tabla1.style.width = "74%";
        tabla2.style.width = "26%";
        
        
        ;
        var fila1 = tabla1.rows
        var fila2 = tabla2.rows
        
        
        
        var altura = Math.max(fila1[0].offsetHeight, fila2[0].offsetHeight);

        
        
        
        fila1[0].style.height = altura + "px"
        fila2[0].style.height = altura + "px"
        
    
        y++
    }


    x++
}





let ultimoWhile = 0
while (ultimoWhile<numAlternativas) {
    let ultimoComponente = 0    
    let numComp = JSON.parse(sessionStorage.getItem(`Alt_numero_${ultimoWhile+1}`)).numeroCom

    let valorTotalPrivados = document.getElementById(`valorTotalPrivados_alt${ultimoWhile+1}`)
    let valorTotalSociales = document.getElementById(`valorTotalSociales_alt${ultimoWhile+1}`)
    let valPrivadoFinal = 0
    let valSocialFinal = 0

    while (ultimoComponente<numComp) {
        
        let tablacostos = JSON.parse(sessionStorage.getItem(`flujoCosto_alt${ultimoWhile+1}_com${ultimoComponente+1}`))

        if (tablacostos === null) {

        } else {
            let largo = parseInt(tablacostos.rows.length)

            valPrivadoFinal  =  valPrivadoFinal + parseInt(tablacostos.rows[largo-2][6]);
            valSocialFinal  =  valSocialFinal + parseFloat(tablacostos.rows[largo-1][6])
        }

        ultimoComponente++
    }

    valorTotalPrivados.innerHTML = parseFloat(valPrivadoFinal).toFixed(2)
    valorTotalSociales.innerHTML = parseFloat(valSocialFinal).toFixed(2)

    ultimoWhile++
}


if (ejecucion == 1) {
    contarFilas2()
} else if (ejecucion == 2) {
    contarFilas3()
}  else {
}







function grabar() {
    let x = 0
    while (x<numAlternativas) {
        let numComp = sessionStorage.getItem(`Alt_numero_${x+1}`)
        let y = 0
        while (y <parseInt(JSON.parse(numComp).numeroCom)) {
            let alternativas = JSON.parse(sessionStorage.getItem(`alt${x+1}_com${y+1}`))
            let horizonte = sessionStorage.getItem('horizonteEvaluacion')
            
            var z = 0
            let j = 0
            
            
                while (j<=alternativas.rows.length+1) {
                    i = 0
                    
                    let array_nuevo = []
                    while (i<=horizonte) {
                        

                        
                        
                        var clave = 'periodo' + i
                        if (j<alternativas.rows.length) {
                            let input = document.getElementById(`input_alt${x+1}_com${y+1}_act${j+1}_hor${i}`).value
                            
                            
                            let meter_en = alternativas.rows.length - 1 - j
                            let objetoInterno = alternativas[meter_en]
                            
                            objetoInterno[clave] = input
                            
                            var objetoStrActualizado = JSON.stringify(alternativas);
                            sessionStorage.setItem(`alt${x+1}_com${y+1}`, objetoStrActualizado);
                        } else if (j===alternativas.rows.length) {
                            let input = document.getElementById(`total_alt${x+1}_com${y+1}_act${j+1}_hor${i}`).value
                            
                            
                            array_nuevo.push({totalPrivado:input})
                        } else {
                            let input = document.getElementById(`totalSocial_alt${x+1}_com${y+1}_act${j+1}_hor${i}`).value
                            
                            
                            array_nuevo.push({totalSocial:input})
                        }
                    
                    i++

                }
                j++

                
            }


            y++
        }
        x++
    }
    
    
}

function grabarCostosOperacionPrivado() {
    let x = 0
    while (x<numAlternativas) {
        let numComp = sessionStorage.getItem(`Alt_numero_${x+1}`)
        let horizonte = sessionStorage.getItem('horizonteEvaluacion')
        i = 0

        while (i<=horizonte){
            let periodoCambiar = document.getElementById(`sumPrivados_alt${x+1}_hor${i}`)
            let y = 0
            let suma = 0
                while (y <parseInt(JSON.parse(numComp).numeroCom)) {
                    let largo = JSON.parse(sessionStorage.getItem(`alt${x+1}_com${y+1}`)).length
                    let j = 0
                    while (j<largo) {
                    let string_periodo = `periodo${i}`
                    let session = JSON.parse(sessionStorage.getItem(`alt${x+1}_com${y+1}`))
                    
                    suma = suma + (parseInt(session[j][string_periodo]))
                    
                    periodoCambiar.innerHTML = suma

                    j++
                }
                
                y++
            }
            i++
        }
        
        x++
    }
}

function grabarCostosOperacionSocial() {
    let x = 0
    while (x<numAlternativas) {
        let numComp = sessionStorage.getItem(`Alt_numero_${x+1}`)
        let horizonte = sessionStorage.getItem('horizonteEvaluacion')
        i = 0

        while (i<=(horizonte)){
            let periodoCambiar = document.getElementById(`sumSociales_alt${x+1}_hor${i}`)
            let y = 0
            let suma = 0
                while (y <parseInt(JSON.parse(numComp).numeroCom)) {
                    let largo = JSON.parse(sessionStorage.getItem(`alt${x+1}_com${y+1}`)).length
                    let j = 0
                    while (j<largo) {
                    let string_periodo = `periodo${i}`
                    let session = JSON.parse(sessionStorage.getItem(`alt${x+1}_com${y+1}`))
                    
                    suma = suma + ((parseInt(session[j][string_periodo]))*(session[j].factorSocial))
                    periodoCambiar.innerHTML = suma
                    j++
                }
                
                y++
            }
            i++
        }
        x++
    }
}

/* function par(e) {
    let campo = e.srcElement.id.toString()
    if (campo.startsWith('inputComponenteSocial')) {
        let input = document.getElementById(campo)
        campo = campo.replace('inputComponenteSocial','valorFactorSocial')
        let modifical = document.getElementById(campo)
        let array_split = campo.split('_')
        let buscar = array_split[1]+'_'+array_split[2]
        let array = JSON.parse(sessionStorage.getItem(buscar))
        let largo = array.length
        let act = parseInt(array_split[3].replace('act',''))
        
        arrayFactores.find((el)=>{
            if(el.name === input.value){
                modifical.innerHTML = el.factor
            }
        }
        )

    }
} */

function sumaPeriodo(e) {
    let campo = e.srcElement.id.toString()
    if (campo.startsWith('input')) {
        let input = document.getElementById(campo)

        campo = campo.replace('input','total')
        
        let array_split = campo.split('_')
        
        let buscar = array_split[1]+'_'+array_split[2]
        let largo = JSON.parse(sessionStorage.getItem(buscar)).length
        
        let comodin = 1
        let pozoAcumulado = 0
        let pozoAcumuladoSocial = 0
        while (comodin<=largo+2) {
            let string_completo = array_split[0]+'_'+array_split[1]+'_'+array_split[2]+'_act'+comodin+'_'+array_split[4]
            
            
            if (comodin<largo+1) {
                
                let stringFactorSocial = string_completo.replace('total', 'valorFactorSocial').split('_'+array_split[4])[0]
                
                string_completo = string_completo.replace('total','input')
                
                let valor = document.getElementById(string_completo)
                let factorSocial = parseFloat(document.getElementById(stringFactorSocial).innerHTML)
                
                
                pozoAcumulado = pozoAcumulado+parseInt(valor.value)
                
                
                
                if (isNaN(factorSocial)) {

                } else {
                    
                    pozoAcumuladoSocial = pozoAcumuladoSocial+(parseInt(valor.value)*factorSocial)

                }
            } else if(comodin===largo+1){
                
                
                let suma = document.getElementById(string_completo)
                suma.value = pozoAcumulado
                
            } else {
                string_completo = string_completo.replace('total','totalSocial')
                
                
                let suma = document.getElementById(string_completo)
                suma.value = pozoAcumuladoSocial
                
            }
            
            comodin++
        }

        
    }
}


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

        if (tableId.includes('sumTodo')) {
            skipRows = 0
        }

        if (tableId.includes('flujo')) {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
    
                if (j >= rows.length-2) {
                    for (let k = 0; k < cells.length; k++) {
                    const cellData = cells[k].innerText.trim();
                    rowData.push(cellData);
                    
                    }
                } else {
                    for (let k = 0; k < cells.length; k++) {
                        if (k===1) {
                            let celdaId = cells[k].children[1].firstChild
                            console.log(celdaId.value);
                                
                            const cellData = celdaId.value
                            rowData.push(cellData);
                            
                        } else {
                            const cellData = cells[k].innerText.trim();
                            rowData.push(cellData);
                            
                        }
                }
                
            



                }
    
            
                if (rowData.length > 0) {
                    tableData.push(rowData);
                }
            }
    
          
            const tableObject = {
            rows: tableData
            };
            
            sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        } else if (tableId.includes('horizonte')) {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
                
                for (let k = 0; k < cells.length; k++) {
                    const celdaId = cells[k].childNodes[0].id
                    let input = document.getElementById(celdaId)
                    const cellData = input.value
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
        } else if (tableId.includes('sumTodo')) {
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
        }
    }
    window.location.reload()

}

function contarFilas2() {

    sessionStorage.setItem('ejecucion',2)
    const tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id

        let skipRows = 1
        tableId = tableId.toString()

        if (tableId.includes('sumTodo')) {
            skipRows = 0
        }

        if (tableId.includes('flujo')) {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
    
                if (j >= rows.length-2) {
                    for (let k = 0; k < cells.length; k++) {
                    const cellData = cells[k].innerText.trim();
                    rowData.push(cellData);
                    
                    }
                } else {
                    for (let k = 0; k < cells.length; k++) {
                        if (k===1) {
                            let celdaId = cells[k].children[1].attributes[1].nodeValue
                            /* let celdaId = cells[k].children[1].firstChild
                            console.log(celdaId.value);
                             */    

                            rowData.push(celdaId);
                            
                        } else {
                            const cellData = cells[k].innerText.trim();
                            rowData.push(cellData);
                            
                        }
                }
                
            



                }
    
            
                if (rowData.length > 0) {
                    tableData.push(rowData);
                }
            }
    
          
            const tableObject = {
            rows: tableData
            };
            
            sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        } else if (tableId.includes('horizonte')) {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
                
                for (let k = 0; k < cells.length; k++) {
                    const celdaId = cells[k].childNodes[0].id
                    let input = document.getElementById(celdaId)
                    const cellData = input.value
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
        } else if (tableId.includes('sumTodo')) {
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
        }
    }
    window.location.reload()

}

function contarFilas3() {

    sessionStorage.setItem('ejecucion',0)
    const tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = [];

        let tableId = table.id

        let skipRows = 1
        tableId = tableId.toString()

        if (tableId.includes('sumTodo')) {
            skipRows = 0
        }

        if (tableId.includes('flujo')) {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
    
                if (j >= rows.length-2) {
                    for (let k = 0; k < cells.length; k++) {
                    const cellData = cells[k].innerText.trim();
                    rowData.push(cellData);
                    
                    }
                } else {
                    for (let k = 0; k < cells.length; k++) {
                        if (k===1) {
                            let celdaId = cells[k].children[1].attributes[1].nodeValue
                            /* let celdaId = cells[k].children[1].firstChild
                            console.log(celdaId.value);
                             */    

                            rowData.push(celdaId);
                            
                        } else {
                            const cellData = cells[k].innerText.trim();
                            rowData.push(cellData);
                            
                        }
                }
                
            



                }
    
            
                if (rowData.length > 0) {
                    tableData.push(rowData);
                }
            }
    
          
            const tableObject = {
            rows: tableData
            };
            
            sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject));
        } else if (tableId.includes('horizonte')) {
            for (let j = skipRows; j < rows.length; j++) {
                const rowData = [];
                const cells = rows[j].cells;
                
                for (let k = 0; k < cells.length; k++) {
                    const celdaId = cells[k].childNodes[0].id
                    let input = document.getElementById(celdaId)
                    const cellData = input.value
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
        } else if (tableId.includes('sumTodo')) {
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
        }
    }
    window.location.reload()

}

grabarPrueba.addEventListener('click',contarFilas)

window.addEventListener('DOMContentLoaded', function () {
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
})
//window.addEventListener('change', par)




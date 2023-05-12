const botonGrabar = document.getElementById('botonGrabar')
const tablaActual = JSON.parse(sessionStorage.getItem('infoModulo10'))


function contarFilas() {
    
    const tables = document.getElementsByTagName('table');

    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const rows = table.rows;
        const tableData = []
        
        let tableId = table.id
  
        let skipRows = 1
        tableId = tableId.toString()

        for (let j = skipRows; j < rows.length; j++) {
            const rowData = [];
            const cells = rows[j].cells;
            
            for (let k = 0; k < cells.length; k++) {
                const cellData = cells[k].childNodes[0]

                if (j===1 || j===5 || j===9 || j===13 || j===17 || j===21 || j===25 || j===29) {
                    if (k===5) {
                        const cellData = cells[k].innerText.trim();
                        rowData.push(cellData)
                    } else {
                        if (cellData === undefined) {
                            rowData.push('skip')
                        } else {
                            rowData.push(cellData.checked)
                        }
                    }
                } else {
                    if (k===4) {
                        const cellData = cells[k].innerText.trim();
                        rowData.push(cellData)
                    } else {
                        if (cellData === undefined) {
                            rowData.push('skip')
                        } else {
                            rowData.push(cellData.checked)
                        }
                    }
                }


            }
            if (rowData.length > 0) {
                tableData.push(rowData);
            }
        }
        const tableObject = {
            rows: tableData
          }
        sessionStorage.setItem(`${tableId}`, JSON.stringify(tableObject))
    }
}

function cambiarEleccion(e) {
    let eId = (e.srcElement.id).toString()

    if (eId.slice(-4) === "_cmp") {
        let eId_remplazar = eId.replace('_cmp','_ncp')
        let eId_remplazar2 = eId.replace('_cmp','_nap')
        let cambiar = document.getElementById(eId_remplazar)
        let cambiar2 = document.getElementById(eId_remplazar2)
        cambiar.checked = false
        cambiar2.checked = false
    }

    if (eId.slice(-4) === "_ncp") {
        let eId_remplazar = eId.replace('_ncp','_cmp')
        let eId_remplazar2 = eId.replace('_ncp','_nap')
        let cambiar = document.getElementById(eId_remplazar)
        let cambiar2 = document.getElementById(eId_remplazar2)
        cambiar.checked = false
        cambiar2.checked = false
    }

    if (eId.slice(-4) === "_nap") {
        let eId_remplazar = eId.replace('_nap','_ncp')
        let eId_remplazar2 = eId.replace('_nap','_cmp')
        let cambiar = document.getElementById(eId_remplazar)
        let cambiar2 = document.getElementById(eId_remplazar2)
        cambiar.checked = false
        cambiar2.checked = false
    }
}


window.addEventListener('click', cambiarEleccion)
botonGrabar.addEventListener('click', contarFilas)
window.addEventListener('DOMContentLoaded', function () {
    
    if (tablaActual != null) {
        let cmp1 = document.getElementById('1_cmp') 
        let ncp1 = document.getElementById('1_ncp') 
        let nap1 = document.getElementById('1_nap')
        let texto1 = document.getElementById('texto1')
        cmp1.checked = tablaActual.rows[0][2]
        ncp1.checked = tablaActual.rows[0][3]
        nap1.checked = tablaActual.rows[0][4]
        texto1.innerHTML = tablaActual.rows[0][5]
        let cmp2 = document.getElementById('2_cmp') 
        let ncp2 = document.getElementById('2_ncp') 
        let nap2 = document.getElementById('2_nap')
        let texto2 = document.getElementById('texto2')
        cmp2.checked = tablaActual.rows[1][1]
        ncp2.checked = tablaActual.rows[1][2]
        nap2.checked = tablaActual.rows[1][3]
        texto2.innerHTML = tablaActual.rows[1][4]
        let cmp3 = document.getElementById('3_cmp') 
        let ncp3 = document.getElementById('3_ncp') 
        let nap3 = document.getElementById('3_nap')
        let texto3 = document.getElementById('texto3')
        cmp3.checked = tablaActual.rows[2][1]
        ncp3.checked = tablaActual.rows[2][2]
        nap3.checked = tablaActual.rows[2][3]
        texto3.innerHTML = tablaActual.rows[2][4]
        let cmp4 = document.getElementById('4_cmp') 
        let ncp4 = document.getElementById('4_ncp') 
        let nap4 = document.getElementById('4_nap')
        let texto4 = document.getElementById('texto4')
        cmp4.checked = tablaActual.rows[3][1]
        ncp4.checked = tablaActual.rows[3][2]
        nap4.checked = tablaActual.rows[3][3]
        texto4.innerHTML = tablaActual.rows[3][4]
        let cmp5 = document.getElementById('5_cmp') 
        let ncp5 = document.getElementById('5_ncp') 
        let nap5 = document.getElementById('5_nap')
        let texto5 = document.getElementById('texto5')
        cmp5.checked = tablaActual.rows[4][2]
        ncp5.checked = tablaActual.rows[4][3]
        nap5.checked = tablaActual.rows[4][4]
        texto5.innerHTML = tablaActual.rows[4][5]
        let cmp6 = document.getElementById('6_cmp') 
        let ncp6 = document.getElementById('6_ncp') 
        let nap6 = document.getElementById('6_nap')
        let texto6 = document.getElementById('texto6')
        cmp6.checked = tablaActual.rows[5][1]
        ncp6.checked = tablaActual.rows[5][2]
        nap6.checked = tablaActual.rows[5][3]
        texto6.innerHTML = tablaActual.rows[5][4]
        let cmp7 = document.getElementById('7_cmp') 
        let ncp7 = document.getElementById('7_ncp') 
        let nap7 = document.getElementById('7_nap')
        let texto7 = document.getElementById('texto7')
        cmp7.checked = tablaActual.rows[6][1]
        ncp7.checked = tablaActual.rows[6][2]
        nap7.checked = tablaActual.rows[6][3]
        texto7.innerHTML = tablaActual.rows[6][4]
        let cmp8 = document.getElementById('8_cmp') 
        let ncp8 = document.getElementById('8_ncp') 
        let nap8 = document.getElementById('8_nap')
        let texto8 = document.getElementById('texto8')
        cmp8.checked = tablaActual.rows[7][1]
        ncp8.checked = tablaActual.rows[7][2]
        nap8.checked = tablaActual.rows[7][3]
        texto8.innerHTML = tablaActual.rows[7][4]
        let cmp9 = document.getElementById('9_cmp') 
        let ncp9 = document.getElementById('9_ncp') 
        let nap9 = document.getElementById('9_nap')
        let texto9 = document.getElementById('texto9')
        cmp9.checked = tablaActual.rows[8][2]
        ncp9.checked = tablaActual.rows[8][3]
        nap9.checked = tablaActual.rows[8][4]
        texto9.innerHTML = tablaActual.rows[8][5]
        let cmp10 = document.getElementById('10_cmp') 
        let ncp10 = document.getElementById('10_ncp') 
        let nap10 = document.getElementById('10_nap')
        let texto10 = document.getElementById('texto10')
        cmp10.checked = tablaActual.rows[9][1]
        ncp10.checked = tablaActual.rows[9][2]
        nap10.checked = tablaActual.rows[9][3]
        texto10.innerHTML = tablaActual.rows[9][4]
        let cmp11 = document.getElementById('11_cmp') 
        let ncp11 = document.getElementById('11_ncp') 
        let nap11 = document.getElementById('11_nap')
        let texto11 = document.getElementById('texto11')
        cmp11.checked = tablaActual.rows[10][1]
        ncp11.checked = tablaActual.rows[10][2]
        nap11.checked = tablaActual.rows[10][3]
        texto11.innerHTML = tablaActual.rows[10][4]
        let cmp12 = document.getElementById('12_cmp') 
        let ncp12 = document.getElementById('12_ncp') 
        let nap12 = document.getElementById('12_nap')
        let texto12 = document.getElementById('texto12')
        cmp12.checked = tablaActual.rows[11][1]
        ncp12.checked = tablaActual.rows[11][2]
        nap12.checked = tablaActual.rows[11][3]
        texto12.innerHTML = tablaActual.rows[11][4]
        let cmp13 = document.getElementById('13_cmp') 
        let ncp13 = document.getElementById('13_ncp') 
        let nap13 = document.getElementById('13_nap')
        let texto13 = document.getElementById('texto13')
        cmp13.checked = tablaActual.rows[12][2]
        ncp13.checked = tablaActual.rows[12][3]
        nap13.checked = tablaActual.rows[12][4]
        texto13.innerHTML = tablaActual.rows[12][5]
        let cmp14 = document.getElementById('14_cmp') 
        let ncp14 = document.getElementById('14_ncp') 
        let nap14 = document.getElementById('14_nap')
        let texto14 = document.getElementById('texto14')
        cmp14.checked = tablaActual.rows[13][1]
        ncp14.checked = tablaActual.rows[13][2]
        nap14.checked = tablaActual.rows[13][3]
        texto14.innerHTML = tablaActual.rows[13][4]
        let cmp15 = document.getElementById('15_cmp') 
        let ncp15 = document.getElementById('15_ncp') 
        let nap15 = document.getElementById('15_nap')
        let texto15 = document.getElementById('texto15')
        cmp15.checked = tablaActual.rows[14][1]
        ncp15.checked = tablaActual.rows[14][2]
        nap15.checked = tablaActual.rows[14][3]
        texto15.innerHTML = tablaActual.rows[14][4]
        let cmp16 = document.getElementById('16_cmp') 
        let ncp16 = document.getElementById('16_ncp') 
        let nap16 = document.getElementById('16_nap')
        let texto16 = document.getElementById('texto16')
        cmp16.checked = tablaActual.rows[15][1]
        ncp16.checked = tablaActual.rows[15][2]
        nap16.checked = tablaActual.rows[15][3]
        texto16.innerHTML = tablaActual.rows[15][4]
        let cmp17 = document.getElementById('17_cmp') 
        let ncp17 = document.getElementById('17_ncp') 
        let nap17 = document.getElementById('17_nap')
        let texto17 = document.getElementById('texto17')
        cmp17.checked = tablaActual.rows[16][2]
        ncp17.checked = tablaActual.rows[16][3]
        nap17.checked = tablaActual.rows[16][4]
        texto17.innerHTML = tablaActual.rows[16][5]
        let cmp18 = document.getElementById('18_cmp') 
        let ncp18 = document.getElementById('18_ncp') 
        let nap18 = document.getElementById('18_nap')
        let texto18 = document.getElementById('texto18')
        cmp18.checked = tablaActual.rows[17][1]
        ncp18.checked = tablaActual.rows[17][2]
        nap18.checked = tablaActual.rows[17][3]
        texto18.innerHTML = tablaActual.rows[17][4]
        let cmp19 = document.getElementById('19_cmp') 
        let ncp19 = document.getElementById('19_ncp') 
        let nap19 = document.getElementById('19_nap')
        let texto19 = document.getElementById('texto19')
        cmp19.checked = tablaActual.rows[18][1]
        ncp19.checked = tablaActual.rows[18][2]
        nap19.checked = tablaActual.rows[18][3]
        texto19.innerHTML = tablaActual.rows[18][4]
        let cmp20 = document.getElementById('20_cmp') 
        let ncp20 = document.getElementById('20_ncp') 
        let nap20 = document.getElementById('20_nap')
        let texto20 = document.getElementById('texto20')
        cmp20.checked = tablaActual.rows[19][1]
        ncp20.checked = tablaActual.rows[19][2]
        nap20.checked = tablaActual.rows[19][3]
        texto20.innerHTML = tablaActual.rows[19][4]
        let cmp21 = document.getElementById('21_cmp') 
        let ncp21 = document.getElementById('21_ncp') 
        let nap21 = document.getElementById('21_nap')
        let texto21 = document.getElementById('texto21')
        cmp21.checked = tablaActual.rows[20][2]
        ncp21.checked = tablaActual.rows[20][3]
        nap21.checked = tablaActual.rows[20][4]
        texto21.innerHTML = tablaActual.rows[20][5]
        let cmp22 = document.getElementById('22_cmp') 
        let ncp22 = document.getElementById('22_ncp') 
        let nap22 = document.getElementById('22_nap')
        let texto22 = document.getElementById('texto22')
        cmp22.checked = tablaActual.rows[21][1]
        ncp22.checked = tablaActual.rows[21][2]
        nap22.checked = tablaActual.rows[21][3]
        texto22.innerHTML = tablaActual.rows[21][4]
        let cmp23 = document.getElementById('23_cmp') 
        let ncp23 = document.getElementById('23_ncp') 
        let nap23 = document.getElementById('23_nap')
        let texto23 = document.getElementById('texto23')
        cmp23.checked = tablaActual.rows[22][1]
        ncp23.checked = tablaActual.rows[22][2]
        nap23.checked = tablaActual.rows[22][3]
        texto23.innerHTML = tablaActual.rows[22][4]
        let cmp24 = document.getElementById('24_cmp') 
        let ncp24 = document.getElementById('24_ncp') 
        let nap24 = document.getElementById('24_nap')
        let texto24 = document.getElementById('texto24')
        cmp24.checked = tablaActual.rows[23][1]
        ncp24.checked = tablaActual.rows[23][2]
        nap24.checked = tablaActual.rows[23][3]
        texto24.innerHTML = tablaActual.rows[23][4]
        let cmp25 = document.getElementById('25_cmp') 
        let ncp25 = document.getElementById('25_ncp') 
        let nap25 = document.getElementById('25_nap')
        let texto25 = document.getElementById('texto25')
        cmp25.checked = tablaActual.rows[24][2]
        ncp25.checked = tablaActual.rows[24][3]
        nap25.checked = tablaActual.rows[24][4]
        texto25.innerHTML = tablaActual.rows[24][5]
        let cmp26 = document.getElementById('26_cmp') 
        let ncp26 = document.getElementById('26_ncp') 
        let nap26 = document.getElementById('26_nap')
        let texto26 = document.getElementById('texto26')
        cmp26.checked = tablaActual.rows[25][1]
        ncp26.checked = tablaActual.rows[25][2]
        nap26.checked = tablaActual.rows[25][3]
        texto26.innerHTML = tablaActual.rows[25][4]
        let cmp27 = document.getElementById('27_cmp') 
        let ncp27 = document.getElementById('27_ncp') 
        let nap27 = document.getElementById('27_nap')
        let texto27 = document.getElementById('texto27')
        cmp27.checked = tablaActual.rows[26][1]
        ncp27.checked = tablaActual.rows[26][2]
        nap27.checked = tablaActual.rows[26][3]
        texto27.innerHTML = tablaActual.rows[26][4]
        let cmp28 = document.getElementById('28_cmp') 
        let ncp28 = document.getElementById('28_ncp') 
        let nap28 = document.getElementById('28_nap')
        let texto28 = document.getElementById('texto28')
        cmp28.checked = tablaActual.rows[27][1]
        ncp28.checked = tablaActual.rows[27][2]
        nap28.checked = tablaActual.rows[27][3]
        texto28.innerHTML = tablaActual.rows[27][4]
        let cmp29 = document.getElementById('29_cmp') 
        let ncp29 = document.getElementById('29_ncp') 
        let nap29 = document.getElementById('29_nap')
        let texto29 = document.getElementById('texto29')
        cmp29.checked = tablaActual.rows[28][2]
        ncp29.checked = tablaActual.rows[28][3]
        nap29.checked = tablaActual.rows[28][4]
        texto29.innerHTML = tablaActual.rows[28][5]
        let cmp30 = document.getElementById('30_cmp') 
        let ncp30 = document.getElementById('30_ncp') 
        let nap30 = document.getElementById('30_nap')
        let texto30 = document.getElementById('texto30')
        cmp30.checked = tablaActual.rows[29][1]
        ncp30.checked = tablaActual.rows[29][2]
        nap30.checked = tablaActual.rows[29][3]
        texto30.innerHTML = tablaActual.rows[29][4]
        let cmp31 = document.getElementById('31_cmp') 
        let ncp31 = document.getElementById('31_ncp') 
        let nap31 = document.getElementById('31_nap')
        let texto31 = document.getElementById('texto31')
        cmp31.checked = tablaActual.rows[30][1]
        ncp31.checked = tablaActual.rows[30][2]
        nap31.checked = tablaActual.rows[30][3]
        texto31.innerHTML = tablaActual.rows[30][4]
        let cmp32 = document.getElementById('32_cmp') 
        let ncp32 = document.getElementById('32_ncp') 
        let nap32 = document.getElementById('32_nap')
        let texto32 = document.getElementById('texto32')
        cmp32.checked = tablaActual.rows[31][1]
        ncp32.checked = tablaActual.rows[31][2]
        nap32.checked = tablaActual.rows[31][3]
        texto32.innerHTML = tablaActual.rows[31][4]
    }
})
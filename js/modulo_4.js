const botonGrabar = document.getElementById('grabar')
const actividades = document.getElementById('descripcionAlternativas')

let numAlternativas = parseInt(sessionStorage.getItem('numAlternativas'))

let x = 0

while (x<numAlternativas) {
    let infoSession = JSON.parse(sessionStorage.getItem(`tablaPaso0_alt${x+1}`))
    let respuestaTabla = JSON.parse(sessionStorage.getItem(`descripcionAlt_${x+1}`))

    if (infoSession != null) {
        actividades.innerHTML +=
        `
        <div id=Alt${x+1} class="segmentos">
            <span class="alternativaStilo">Alternativa N° ${x+1}: ${respuestaTabla.rows[0][1]}</span>
            <span class="bajada">PREPARACION DE LA ALTERNATIVA N° ${x+1}</span>
            <span id="preparacion_alt${x+1}" class="textInput" contenteditable="true">${infoSession[0].preparacionAlt}</span>
            <span class="bajada">DESCRIPCIÓN BÁSICA DE LA ALTERNATIVA ${x+1}</span>
            <span id="descripcion_alt${x+1}" class="textInput" contenteditable="true">${infoSession[0].descripcionAlt}</span>
        </div>
        `
    } else if (respuestaTabla != null) {
        actividades.innerHTML +=
        `
        <div id=Alt${x+1} class="segmentos">
            <span class="alternativaStilo">Alternativa N° ${x+1}</span>
            <span class="bajada">PREPARACION DE LA ALTERNATIVA N° ${x+1}</span>
            <span id="preparacion_alt${x+1}" class="textInput" contenteditable="true">${respuestaTabla.rows[0][1]}</span>
            <span class="bajada">DESCRIPCIÓN BÁSICA DE LA ALTERNATIVA ${x+1}</span>
            <span id="descripcion_alt${x+1}" class="textInput" contenteditable="true">${respuestaTabla.rows[0][2]}</span>
        </div>
        `
    } else {
        actividades.innerHTML +=
        `
        <div id=Alt${x+1} class="segmentos">
            <span class="alternativaStilo">Alternativa N° ${x+1}</span>
            <span class="bajada">PREPARACION DE LA ALTERNATIVA N° ${x+1}</span>
            <span id="preparacion_alt${x+1}" class="textInput" contenteditable="true"></span>
            <span class="bajada">DESCRIPCIÓN BÁSICA DE LA ALTERNATIVA ${x+1}</span>
            <span id="descripcion_alt${x+1}" class="textInput" contenteditable="true"></span>
        </div>
        `
    }
    x++
}

function grabar() {
    let y = 0
    while (y<numAlternativas) {
        let preparacionAlt = document.getElementById(`preparacion_alt${y+1}`)
        let descripcionAlt = document.getElementById(`descripcion_alt${y+1}`)
    
        let modulo4Nuevo = [
            {
                preparacionAlt:preparacionAlt.innerHTML,
                descripcionAlt:descripcionAlt.innerHTML
            }
        ]
        let objetoStrActualizado  = JSON.stringify(modulo4Nuevo);
        sessionStorage.setItem(`tablaPaso0_alt${y+1}`, objetoStrActualizado)
        y++
    }

}

botonGrabar.addEventListener('click', grabar)


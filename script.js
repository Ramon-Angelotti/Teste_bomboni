const formulario = document.querySelector(".formulario-orcamento")
const mascara = document.querySelector(".mascara-formulario")



function PedirOrçamento() {
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm() {
    formulario.style.left = "-300px"
    formulario.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}
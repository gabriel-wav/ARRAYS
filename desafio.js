// let ingredientes = ["Arroz" , "Feijão" , "Batata-doce" , "Espaguete" , "Frango" ]

const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const botoesSelecionadosBtn = document.getElementById('botoesSelecionados')
const resultado = document.getElementById('selecionados')

botoesSelecionadosBtn.addEventListener ('click', () => {
    const ingredientesSelecionados = []

    function verificarCheckbox(checkbox) {
if (checkbox.checked) {
    ingredientesSelecionados.push(checkbox.nextSibling.textContent.trim())
}
    }

    checkboxes.forEach(verificarCheckbox)

    if (ingredientesSelecionados.length > 0) {
        resultado.textContent = `Ingredientes selecioandos: ${ingredientesSelecionados.join(', ')}`
    }  else {
        resultado.textContent = `Nenhum ingrediente selecionado`
    }

})
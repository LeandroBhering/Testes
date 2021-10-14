const texto = document.getElementById('texto')
const rei = document.getElementById('rei')
const rainha = document.getElementById('rainha')

rei.style.visibility = 'visible'
rainha.style.visibility ='visible'

function esconder() {
    if((rei.style.visibility == 'visible') && (rainha.style.visibility == 'visible')){
        rei.style.visibility = 'hidden'
        rainha.style.visibility = 'hidden'
    } else {
        rei.style.visibility = 'visible'
        rainha.style.visibility = 'visible'
    }
}

function mudarCor() {
    texto.style.color = gerarCorAleatoria()
    rei.style.color = gerarCorAleatoria()
    rainha.style.color = gerarCorAleatoria()
}

function gerarCorAleatoria() {
    let r = parseInt(Math.random() * 255)
    let g = parseInt(Math.random() * 255)
    let b = parseInt(Math.random() * 255)
   return `rgba(${r}, ${g}, ${b}, 1)`
}

setInterval(() => mudarCor(), 100)


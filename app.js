const tiempoFaltante = document.getElementById('tiempo-falta')

// mes / dia / año
const cumple = new Date('02/23/2023')

const segundo = 1000
const minuto = segundo * 60
const hora = minuto * 60
const dia = hora * 24
let temporizadorId

const cuentaRegresiva = () => {
  const hoy = new Date()
  const espacioTiempo = cumple - hoy

  if (espacioTiempo <= -dia) {
    tiempoFaltante.innerHTML = 'Hope you had a nice Birthday!!'
    clearInterval(temporizadorId)
    return
  }

  if (espacioTiempo <= 0) {
    tiempoFaltante.innerHTML = 'Happy Birthday!!'
    clearInterval(temporizadorId)
    return
  }


  const dias = Math.floor(espacioTiempo / dia)
  const horas = Math.floor((espacioTiempo % dia) / hora)
  const minutos = Math.floor((espacioTiempo % hora) / minuto)
  const segundos = Math.floor((espacioTiempo % minuto) / segundo)

  tiempoFaltante.innerHTML = dias + 'dias ' + horas + 'horas ' + minutos + 'minutos ' + segundos + 'segundos'

}

temporizadorId = setInterval(cuentaRegresiva, segundo)
const readline = require('readline-sync');

const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERAS = "tijeras";

function obtenerJugadaComputadora() {
    const jugadas = [PIEDRA, PAPEL, TIJERAS];
    let indiceAleatorio = Math.floor(Math.random() * 3);
    let jugadaComputadora = jugadas[indiceAleatorio];
    return jugadaComputadora;
}
function obtenerJugadaUsuario() {
    let jugadaUsuario;
    // ESTO ES PARA QUE EL USUARIO NO PUEDA INGRESAR ALGO QUE NO SEA "piedra", "papel" o "tijeras"
    while (true) {
        jugadaUsuario = readline.question("Ingresa tu eleccion: piedra, papel o tijeras: ");
        if (jugadaUsuario === PIEDRA || jugadaUsuario === PAPEL || jugadaUsuario === TIJERAS) {
            break;
        } else {
            console.log("Por favor, ingresa una jugada valida.");
        }
    }
    return jugadaUsuario;
}
function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (jugadaComputadora === jugadaUsuario) {
        return "Empate";
    } else if (
        (jugadaComputadora === PIEDRA && jugadaUsuario === TIJERAS) ||
        (jugadaComputadora === PAPEL && jugadaUsuario === PIEDRA) ||
        (jugadaComputadora === TIJERAS && jugadaUsuario === PAPEL)
    ) {
        return "Gana la computadora";
    } else {
        return "Gana el usuario";
    }
}
let jugadaComputadora = obtenerJugadaComputadora();
let jugadaUsuario = obtenerJugadaUsuario();
let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);
console.log("La computadora eligio: " + jugadaComputadora);
console.log("El usuario eligio: " + jugadaUsuario);
console.log("El resultado fue: " + resultado);
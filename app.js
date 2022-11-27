// VARIABLES //
let nombre = prompt("Ingrese su nombre de pila")
let apellido = prompt("Ingrese su apellido")
let cliente = nombre + " " + apellido



//FUNCIONES//
function bienvenida(){alert("Bienvenido a la pagina de RomaChic "+ nombre + " " + apellido)}
bienvenida()

//CONDICONALES//
let prenda = prompt("Elija su prenda")

switch (prenda.toLowerCase()) {
    case "vestido":
        alert ( cliente + " " +"Usted selecciono Vestido");
        break;
    case "bikini":
        alert (cliente + " " +"Usted selecciono Bikini");
        break;
    case "pantalon":
        alert (cliente + " " +"Usted selecciono Pantalon");
        break;
    case "chaleco":
        alert (cliente + " " +"Usted selecciono Chaleco");
        break;
    default:
        alert ("por favor elija una prenda correcta")
        break;
}



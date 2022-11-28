// VARIABLES //
let nombre = prompt("Ingrese su nombre de pila")
let apellido = prompt("Ingrese su apellido")
let cliente = nombre + " " + apellido



//FUNCIONES//
function bienvenida(){alert("Bienvenido a la pagina de RomaChic "+ nombre + " " + apellido)}
bienvenida()

//CONDICONALES//
let prenda = prompt("Elija su prenda (Vestido, Bikini, Pantalon, Chaleco")


switch (prenda.toLowerCase()) {
    case "vestido":
        alert ( cliente + " " +"Usted selecciono Vestido ($6.000)");
        break;
    case "bikini":
        alert (cliente + " " +"Usted selecciono Bikini ($.3000)");
        break;
    case "pantalon":
        alert (cliente + " " +"Usted selecciono Pantalon ($5.000)");
        break;
    case "chaleco":
        alert (cliente + " " +"Usted selecciono Chaleco ($4.000)");
        break;
    default:
        alert ("por favor elija una prenda correcta")
        break;
}
let Precio = Number(prompt("ingrese el precio correcto"))

if (Precio === 6000){
    alert ("Gracias por comprar Vestido")
} else if(Precio === 3000){
    alert("Gracias por comprar Bikini")}
  else if (Precio === 5000){
    alert ("Gracias por comprar Pantalon")
} else if (Precio === 4000){
    alert("Gracias por comprar Chaleco")
    
} else{ alert("Por favor, ingrese precio correcto")}

function Cierre(){alert("Muchas gracias por visitar nuestra pagina, lo esperamos pronto!!! " + nombre + " " + apellido)}
Cierre()
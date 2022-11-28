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
        alert ( cliente + " " +"Usted selecciono Vestido ($6.000)");
        break;
    case "bikini":
        alert (cliente + " " +"Usted selecciono Bikini ($.3000)");
        break;
    case "pantalon":
        alert (cliente + " " +"Usted selecciono Pantalon ($5.000)");
        break;
    case "chaleco":
        alert (cliente + " " +"Usted selecciono Chaleco ($4.000");
        break;
    default:
        alert ("por favor elija una prenda correcta")
        break;
}

let vestido = Number(prompt("ingrese su Saldo"))

if (vestido >= 6000){
    alert ("Gracias por su compra")
} else{
    alert("Su saldo no es suficiente")
};

let bikini = Number(prompt("ingrese su Saldo"))

if (vestido >= 3000){
    alert ("Gracias por su compra")
} else{
    alert("Su saldo no es suficiente")
};

let pantalon = Number(prompt("ingrese su Saldo"))

if (vestido >= 5000){
    alert ("Gracias por su compra")
} else{
    alert("Su saldo no es suficiente")
};
let chaleco = Number(prompt("ingrese su Saldo"))

if (chaleco >= 2000){
    alert ("Gracias por su compra")
} else{
    alert("Su saldo no es suficiente")
};

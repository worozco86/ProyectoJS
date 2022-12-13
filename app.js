// VARIABLES //
let nombre = prompt("Ingrese su nombre de pila")
let apellido = prompt("Ingrese su apellido")
let cliente = nombre + " " + apellido
const talles = ["S", "M", "L", "XL"]
class Producto {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        }
    }
const producto1 = new Producto("Vestido", 6000 )
const producto2 = new Producto("Bikini", 3000)
const producto3 = new Producto("Pantalon", 5000)
const producto4 = new Producto("Chaleco", 4000)

const carrito =[]
//FUNCIONES//
function bienvenida(){alert("Bienvenido a la pagina de RomaChic "+ nombre + " " + apellido)}
bienvenida()
let InProducto = prompt (`Ingrese el nombre del producto que desea comprar:
* Vestido
* Bikini
* Pantalon
* Chaleco`)
switch (InProducto.toLowerCase()) {
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
if (InProducto == "vestido"){
   carrito.push (producto1);
   alert ("se agrego Vestido al carrito");}
else if (InProducto == "bikini"){
    carrito.push (producto2);
    alert ("se agrego Bikini al carrito");}
else if (InProducto == "pantalon"){
    carrito.push (producto3);
    alert ("se agrego Pantalon al carrito")}
else if (InProducto == "chaleco"){
        carrito.push (producto4);
        alert ("se agrego Chaleco al carrito")}
 else {
    alert("Muchas gracias"); }
let ingTalle = prompt(`elija su talle
* S
* M
* L
* XL `)
let elecccion = talles.find(talles => talles.ingTalle)
console.log(ingTalle)
function Cierre(){alert("Muchas gracias por visitar nuestra pagina, lo esperamos pronto!!! " + nombre + " " + apellido)}
Cierre()
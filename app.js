// VARIABLES //
let nombreForm = document.querySelector("#nombre");
let correoForm = document.querySelector("#correo");
const carrito = []


// Archivos LocalStorage //

localStorage.setItem("carrito", JSON.stringify(carrito))

nombreForm.addEventListener("input", function () {
    if (nombreForm.value === "") {
      console.log("Ingrese un nombre válido");
    }
  })
  
  correoForm.addEventListener("input", function () {
    if (correoForm.value === "") {
      console.log("Ingrese un correo electrónico válido");
    }
  });
  
  let formulario = document.querySelector("#formulario");
  let datosCliente = document.querySelector(".datosCliente");

  
  const pintarInfo = formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    datosCliente.innerHTML = `<h5> Muchas gracias ${nombreForm.value} por loguearte en nuestra pagina!!!, te enviaremos un mail a ${correoForm.value} para coordinar los detalles de tu compra.</h5></div>`;});

    // SYNC Y AWAIT //

    const lista = document.querySelector('#listado')
    
    const mostrarProd = async () => {
    const resp = await fetch("./data.json")
    const data = await resp.json()
    
    data.forEach((producto) => {
      const card = document.createElement("card")
            card.innerHTML = `
            <div class="card m-2 mt-2 mb-2 g-3 align-items-center" style="width: 25rem;">
            <img src="${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title text-center">${producto.nombre}</h5>
            <p class="card-text text-center">${producto.precio}</p>
            <button id="${producto.id}" class="btn btnComprar btn-primary">AÑADIR AL CARRITO</button>
            </div>
            </div>`

            lista.append(card)
            
          })
        }
          
mostrarProd();

let btnComprar = document.querySelectorAll(".btnComprar")
btnComprar.forEach(el => {
  el.addEventListener("click", (e) => {
    agregarCarrito(e.target.id.data)
  })
})

    
function agregarCarrito(id, data){
  console.log(data)
  console.log(id)

  const prendaElejida = data.find (el => el.id === parseInt(id));
  console.log(prendaElejida)
  carrito.push(prendaElejida)
}



            
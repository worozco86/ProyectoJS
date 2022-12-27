// VARIABLES //
let nombreForm = document.querySelector("#nombre");
let correoForm = document.querySelector("#correo");

nombreForm.addEventListener("input", function () {
    if (nombreForm.value === "") {
      console.log("Ingrese un nombre válido");
    }
  });
  
  correoForm.addEventListener("input", function () {
    if (correoForm.value === "") {
      console.log("Ingrese un correo electrónico válido");
    }
  });
  
  let formulario = document.querySelector("#formulario");
  let datosCliente = document.querySelector(".datosCliente");

  
  const pintarInfo = formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    datosCliente.innerHTML = `<h5> Muchas gracias ${nombreForm.value} por tu compra!!!, te enviaremos un mail a ${correoForm.value} para coordinar los detalles de tu compra.</h5></div>`;});
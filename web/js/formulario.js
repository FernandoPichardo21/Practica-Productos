/* Validar nombre,correo y celular */
var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var regexCelular = /^\d{10}$/;

/* variable para envir datos */
var enviarDatos=0;

var nombre=document.getElementById("nombre"); /* el ("nombre")es el valor del id del input*/ 
var mensajeNombre=document.getElementsByClassName("mensajeNombre")[0]
var circleCrossNombre=document.getElementsByClassName("circleCrossNombre")[0] /* el getElementsByClassName manda a llamar la clase en este caso circleCrossNombre*/
var circleCheckNombre=document.getElementsByClassName("circleCheckNombre")[0]

/* Variables para celular  */

var celular=document.getElementById("celular"); /* el ("celular")es el valor del id del input*/ 
var mensajeCelular=document.getElementsByClassName("mensajeCelular")[0]
var circleCrossCelular=document.getElementsByClassName("circleCrossCelular")[0]
var circleCheckCelular=document.getElementsByClassName("circleCheckCelular")[0]


/* Variavbles para el correo */

var correo=document.getElementById("correo"); /* el ("correo")es el valor del id del input*/
var mensajeCorreo=document.getElementsByClassName("mensajeCorreo")[0]
var circleCrossCorreo=document.getElementsByClassName("circleCrossCorreo")[0]
var circleCheckCorreo=document.getElementsByClassName("circleCheckCorreo")[0]



/* codigo para el nombre */
nombre.addEventListener("blur", ()=>{
    if (!regexNombre.test(nombre.value)) {
        mensajeNombre.classList.remove("ocultar")
        nombre.classList.add("Error")
        nombre.classList.remove("correcto")
        alert("Por favor, introduce un nombre válido.");
        circleCrossNombre.classList.remove("ocultar")
        circleCheckNombre.classList.add("ocultar")
  }
  else{
    mensajeNombre.classList.add("ocultar");
    nombre.classList.add("Error");
    nombre.classList.remove("Error")
    circleCheckNombre.classList.remove("ocultar")
    circleCrossNombre.classList.add("ocultar")


  }
});


/* Codigo para el celular */
celular.addEventListener("blur", ()=>{
    if (!regexCelular.test(celular.value)) {
        mensajeCelular.classList.remove("ocultar")
        celular.classList.add("Error")
        celular.classList.remove("correcto")
        alert("Por favor, introduce un número de celular válido.");
        circleCrossCelular.classList.remove("ocultar")
        circleCheckCelular.classList.add("ocultar")
  }
  else{
    mensajeCelular.classList.add("ocultar");
    celular.classList.add("Error");
    celular.classList.remove("Error")
    circleCheckCelular.classList.remove("ocultar")
    circleCrossCelular.classList.add("ocultar")


  }
});


/* codigo para el correo*/
correo.addEventListener("blur", ()=>{
    if (!regexCorreo.test(correo.value)) {
        mensajeCorreo.classList.remove("ocultar")
        correo.classList.add("Error")
        correo.classList.remove("correcto")
        alert("Por favor, introduce un correo válido.");
        circleCrossCorreo.classList.remove("ocultar")
        circleCheckCorreo.classList.add("ocultar")
  }
  else{
    mensajeCorreo.classList.add("ocultar");
    correo.classList.add("Error");
    correo.classList.remove("Error")
    circleCheckCorreo.classList.remove("ocultar")
    circleCrossCorreo.classList.add("ocultar")


  }
});


var formulario=document.getElementById("formulario")
formulario.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log(enviarDatos)
  if(!regexNombre.test(nombre.value)){

  }else {
    formulario.submit();
  }
});

var formulario=getElementById("formulario");

formulario.addEventListener("submit", (e)=>{
  e.preventDefault();
  var avanzar=0;
  if (!regexNombre.test(nombre.value)) {
    mensajeNombre.classList.remove("ocultar")
    nombre.classList.add("Error")
    nombre.classList.remove("correcto")
    alert("Por favor, introduce un nombre válido.");
    circleCrossNombre.classList.remove("ocultar")
    circleCheckNombre.classList.add("ocultar")
}
else{
mensajeNombre.classList.add("ocultar");
nombre.classList.add("Error");
nombre.classList.remove("Error")
circleCheckNombre.classList.remove("ocultar")
circleCrossNombre.classList.add("ocultar")

}
if (avanzar==1) {
  formulario.submit();
} else{
  if (!regexCelular.test(celular.value)) {
    mensajeCelular.classList.remove("ocultar")
    celular.classList.add("Error")
    celular.classList.remove("correcto")
    alert("Por favor, introduce un número de celular válido.");
    circleCrossCelular.classList.remove("ocultar")
    circleCheckCelular.classList.add("ocultar")
}
else{
mensajeCelular.classList.add("ocultar");
celular.classList.add("Error");
celular.classList.remove("Error")
circleCheckCelular.classList.remove("ocultar")
circleCrossCelular.classList.add("ocultar")


}if (avanzar==1) {
  formulario.submit();
} else{
  if (!regexCorreo.test(correo.value)) {
    mensajeCorreo.classList.remove("ocultar")
    correo.classList.add("Error")
    correo.classList.remove("correcto")
    alert("Por favor, introduce un correo válido.");
    circleCrossCorreo.classList.remove("ocultar")
    circleCheckCorreo.classList.add("ocultar")
}
else{
mensajeCorreo.classList.add("ocultar");
correo.classList.add("Error");
correo.classList.remove("Error")
circleCheckCorreo.classList.remove("ocultar")
circleCrossCorreo.classList.add("ocultar")


}}if (avanzar==1) {
  formulario.submit();
}
}
});

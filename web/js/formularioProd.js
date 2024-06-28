/* Validar nombre,precio, descripcion, cantidad */
var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexPrecio = /^\d+(\.\d{1,2})?$/;
var regexDesc = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexCant = /^\d+$/;

/* variable para enviar datos */
var enviarDatos=0;

var nombre=document.getElementById("nombre"); /* el ("nombre")es el valor del id del input*/ 
var mensajeNombre=document.getElementsByClassName("mensajeNombre")[0]
var circleCrossNombre=document.getElementsByClassName("circleCrossNombre")[0] /* el getElementsByClassName manda a llamar la clase en este caso circleCrossNombre*/
var circleCheckNombre=document.getElementsByClassName("circleCheckNombre")[0]

/* Variables para Precio  */

var precio=document.getElementById("precio"); /* el ("precio")es el valor del id del input*/ 
var mensajePrecio=document.getElementsByClassName("mensajePrecio")[0]
var circleCrossPrecio=document.getElementsByClassName("circleCrossPrecio")[0]
var circleCheckPrecio=document.getElementsByClassName("circleCheckPrecio")[0]


/* Variables para la descripción */

var desc=document.getElementById("desc"); /* el ("desc")es el valor del id del input*/
var mensajeDesc=document.getElementsByClassName("mensajeDesc")[0]
var circleCrossDesc=document.getElementsByClassName("circleCrossDesc")[0]
var circleCheckDesc=document.getElementsByClassName("circleCheckDesc")[0]


/* Variables para la cantidad */

var cant=document.getElementById("cant"); /* el ("cant")es el valor del id del input*/
var mensajeCant=document.getElementsByClassName("mensajeCant")[0]
var circleCrossCant=document.getElementsByClassName("circleCrossCant")[0]
var circleCheckCant=document.getElementsByClassName("circleCheckCant")[0]


/* codigo para el nombre */
nombre.addEventListener("blur", ()=>{
    if (!regexNombre.test(nombre.value)) {
        mensajeNombre.classList.remove("ocultar")
        nombre.classList.add("Error")
        nombre.classList.remove("correcto")
        //alert("Por favor, introduce un nombre válido.");
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


/* Codigo para el precio */
precio.addEventListener("blur", ()=>{
    if (!regexPrecio.test(precio.value)) {
        mensajePrecio.classList.remove("ocultar")
        precio.classList.add("Error")
        precio.classList.remove("correcto")
        //alert("Por favor, introduce un Precio válido.");
        circleCrossPrecio.classList.remove("ocultar")
        circleCheckPrecio.classList.add("ocultar")
  }
  else{
    mensajePrecio.classList.add("ocultar");
    precio.classList.add("Error");
    precio.classList.remove("Error")
    circleCheckPrecio.classList.remove("ocultar")
    circleCrossPrecio.classList.add("ocultar")


  }
});


/* codigo para la descipcion*/
desc.addEventListener("blur", ()=>{
    if (!regexDesc.test(desc.value)) {
        mensajeDesc.classList.remove("ocultar")
        desc.classList.add("Error")
        desc.classList.remove("correcto")
        //alert("Por favor, introduce una descripcion válida.");
        circleCrossDesc.classList.remove("ocultar")
        circleCheckDesc.classList.add("ocultar")
  }
  else{
    mensajeDesc.classList.add("ocultar");
    desc.classList.add("Error");
    desc.classList.remove("Error")
    circleCheckDesc.classList.remove("ocultar")
    circleCrossDesc.classList.add("ocultar")


  }
});



/* codigo para la cantidad*/
cant.addEventListener("blur", ()=>{
    if (!regexCant.test(cant.value)) {
        mensajeCant.classList.remove("ocultar")
        cant.classList.add("Error")
        cant.classList.remove("correcto")
        //alert("Por favor, introduce una cantidad válido.");
        circleCrossCant.classList.remove("ocultar")
        circleCheckCant.classList.add("ocultar")
  }
  else{
    mensajeCant.classList.add("ocultar");
    cant.classList.add("Error");
    cant.classList.remove("Error")
    circleCheckCant.classList.remove("ocultar")
    circleCrossCant.classList.add("ocultar")


  }
});



var formulariopr=document.getElementById("formulariopr")
formulariopr.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log(enviarDatos)
  if(!regexNombre.test(nombre.value)){

  }else {
    formulariopr.submit();
  }
});

var formulariopr=getElementById("formulariopr");

formulariopr.addEventListener("submit", (e)=>{
  e.preventDefault();
  var avanzar=0;
  if (!regexNombre.test(nombre.value)) {
    mensajeNombre.classList.remove("ocultar")
    nombre.classList.add("Error")
    nombre.classList.remove("correcto")
    //alert("Por favor, introduce un nombre válido.");
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
  formulariopr.submit();
} else{
  if (!regexPrecio.test(precio.value)) {
    mensajePrecio.classList.remove("ocultar")
    precio.classList.add("Error")
    precio.classList.remove("correcto")
    //alert("Por favor, introduce un número de celular válido.");
    circleCrossPrecio.classList.remove("ocultar")
    circleCheckPrecio.classList.add("ocultar")
}
else{
mensajePrecio.classList.add("ocultar");
precio.classList.add("Error");
precio.classList.remove("Error")
circleCheckPrecio.classList.remove("ocultar")
circleCrossPrecio.classList.add("ocultar")


}if (avanzar==1) {
  formulariopr.submit();
} else{
  if (!regexDesc.test(desc.value)) {
    mensajeDesc.classList.remove("ocultar")
    desc.classList.add("Error")
    desc.classList.remove("correcto")
    //alert("Por favor, introduce un correo válido.");
    circleCrossDesc.classList.remove("ocultar")
    circleCheckDesc.classList.add("ocultar")
}
else{
mensajeDesc.classList.add("ocultar");
desc.classList.add("Error");
desc.classList.remove("Error")
circleCheckDesc.classList.remove("ocultar")
circleCrossDesc.classList.add("ocultar")


}}
if (avanzar==1) {
    formulariopr.submit();
  } else{
    if (!regexCant.test(cant.value)) {
      mensajeCant.classList.remove("ocultar")
      cant.classList.add("Error")
      cant.classList.remove("correcto")
      //alert("Por favor, introduce un correo válido.");
      circleCrossCant.classList.remove("ocultar")
      circleCheckCant.classList.add("ocultar")
  }
  else{
  mensajeCant.classList.add("ocultar");
  cant.classList.add("Error");
  cant.classList.remove("Error")
  circleCheckCant.classList.remove("ocultar")
  circleCrossCant.classList.add("ocultar")
  
  

}
  }}
if (avanzar==1) {
  formulariopr.submit();
}
}
);

const ruta=require("express").Router(); //para crear rutas a partir de la funcion de express porque no necesitamos todas las funciones de express
const UsuarioClase=require("../clases/UsuarioClase");// se usa el .. para salir de la carpeta local en este caso route
const UsuarioBD=require("../bd/UsuariosBD") //aqui se graba la informacion


ruta.get("/", async(req, res)=>{//aqui tengo que validar los datos que entran a mi aplicacion
    const usuariobd= new UsuarioBD();
    const UsuariosMySql=await usuariobd.mostrarUsuarios();  //con esto se llama a ejecutar mostrar usuarios del archivo UsuariosBD
    var usuariosCorrectos=[];
    UsuariosMySql.forEach(usuario => {
        var usuario1= new UsuarioClase(usuario);
        if(usuario1.nombre!=undefined && usuario1.celular!=undefined && usuario1.correo!=undefined){
            usuariosCorrectos.push(usuario);
        } 
    });
    console.log(usuariosCorrectos);
    res.render("mostrarUsuarios", {usuariosCorrectos} );
    });
   

ruta.post("/agregarUsuario",(req, res)=>{ //el objetivo de esta clase es validar todo lo que entra a la aplicacion en este caso validar de msql a la applicacion
    var usuario1=new UsuarioClase(req.body);
    if(usuario1.nombre!=undefined && usuario1.celular!=undefined && usuario1.correo!=undefined){
        const usuariobd=new UsuarioBD();
        usuariobd.nuevoUsuario(usuario1.mostrarDatos);
        //console.log(usuario1.mostrarDatos);
        res.render("inicio", usuario1.mostrarDatos);
    }
    else{
        res.render("error"); //para convertir la extencion ejs a html para verse en el navegador
    }
})

ruta.get("/agregarUsuario",(req,res)=>{
    res.render("formulario");

});



ruta.get("/editarUsuario/:idUsuario",async(req,res)=>{
    
    try {
        const usuariobd= new UsuarioBD();
        const usuario= await usuariobd.usuarioId(req.params.idUsuario);
        console.log(usuario);
        res.render("editarUsuario", usuario)
    } catch (error) {
        
    }
   // res.end();
    //res.render("editar usuario",);  //body para el formulario params para hipervinculo

});


ruta.post("/editar",async(req,res)=>{
    try {
        const usuariobd=new UsuarioBD();
        await usuariobd.EditarUsuario(req.body);  // se utiliza el body porque se esta actualizando los datos del formulario
        console.log("Usuario editado correctamente");
        res.redirect("/"); //se usa el res.redirect para que se dirija en automatico a la raiz
    } catch (error) {
        console.log("Error al editar el usuario");
    }
})

ruta.get("/BorrarUsuario/:id",async(req,res)=>{
    try {
        const usuariobd=new UsuarioBD();
         await usuariobd.BorrarUsuario(req.params.id);
         res.redirect("/");
    } catch (error) {
        console.log(error);
    }
});


//
//
//
//
//
//
//
//
//
//
//
//
//De aqui hacia abajo son rutas de productos
//



const ProductoClase=require("../clases/ProductoClase");// se usa el .. para salir de la carpeta local en este caso route
const ProductosBD=require("../bd/ProductosBD") //aqui se graba la informacion


ruta.get("/prod", async(req, res)=>{//aqui tengo que validar los datos que entran a mi aplicacion
    const productobd= new ProductosBD();
    const ProductosMySql=await productobd.mostrarProductos();  //con esto se llama a ejecutar mostrar usuarios del archivo ProductosBD
    var productosCorrectos=[];
    ProductosMySql.forEach(producto => {
        var producto1= new ProductoClase(producto);
        if(producto1.nombre!=undefined && producto1.precio!=undefined && producto1.desc!=undefined && producto1.cant!=undefined){
            productosCorrectos.push(producto);
        } 
    });
    console.log(productosCorrectos);
    res.render("mostrarProductos", {productosCorrectos} );
    });
   

ruta.post("/agregarProducto",(req, res)=>{ //el objetivo de esta clase es validar todo lo que entra a la aplicación en este caso validar de msql a la aplicación
    var producto1=new ProductoClase(req.body);
    if(producto1.nombre!=undefined && producto1.precio!=undefined && producto1.desc!=undefined && producto1.cant!=undefined){
        const productobd=new ProductosBD();
        productobd.nuevoProducto(producto1.mostrarDatos);
        //console.log(usuario1.mostrarDatos);
        res.render("iniciopr", producto1.mostrarDatos);
    }
    else{
        res.render("errorpr"); //para convertir la extencion ejs a html para verse en el navegador
    }
})

ruta.get("/agregarProducto",(req,res)=>{
    res.render("formulariopr");

})



ruta.get("/editarprod/:idprod",async(req,res)=>{
    
    try {
        const productobd= new ProductosBD();
        const producto= await productobd.productoId(req.params.idprod);
        console.log(producto);
        res.render("editarpr", producto)
    } catch (error) {
        
    }
   // res.end();
    //res.render("editar usuario",);  //body para el formulario params para hipervinculo

});


ruta.post("/editarpr",async(req,res)=>{
    try {
        const productobd=new ProductosBD();
        await productobd.EditarProducto(req.body);  // se utiliza el body porque se esta actualizando los datos del formulario
        console.log("Producto editado correctamente");
        res.redirect("/prod"); //se usa el res.redirect para que se dirija en automatico a la tabla
    } catch (error) {
        console.log("Error al editar el usuario");
    }
})

ruta.get("/borrarprod/:id",async(req,res)=>{
    try {
        const productobd=new ProductosBD();
         await productobd.BorrarProducto(req.params.id);
         res.redirect("/prod");
    } catch (error) {
        console.log(error);
    }
});







module.exports=ruta;//exportar una variable en este caso ruta.
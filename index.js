const express=require("express");
const path=require("path"); 
const usuariosRutas=require("./routes/usuariosRutas")

const app=express();
app.use("/",express.static(path.join(__dirname,"web")));
app.set("view engine","ejs"); //motor de vistas
app.use(express.urlencoded({extended:true})); //para la parte de formulario
app.use("/",usuariosRutas); //para jalar o exportar las rutas 




const port=process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Servidor en http://127.0.0.1:" + port);
});
const ConectarBD=require("./ConectarBD");

class ProductoBD extends ConectarBD{
    constructor(){
        super();//con super inicias las variables del constructor heredado en este caso conectarBD
    }
    async nuevoProducto(producto1){
        const sql="insert into producto values(null,'"+producto1.nombre+"','"+producto1.precio+"','"+producto1.desc+"','"+producto1.cant+"' );";
        try {
            await this.conectarMySql(); //intentar y esperar a que conecte mysql
            await this.conexion.execute(sql);
        console.log("Crea un nuevo producto");
        await this.cerrarConexion();
    }catch (error) {
        console.log("Error al agregar un producto "+error);
        console.error(sql);    
        }
    }
    async mostrarProductos() {
        const sql="SELECT * FROM producto;";
        try {
            await this.conectarMySql();
            const [ProductosMySql]=await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Los datos se obtuvieron correctamente");
            console.log(ProductosMySql);
            return(ProductosMySql);
        } catch (error) {
            console.error("Error al obtener los datos de los productos" + error);
            console.error(sql);
        }
    }
    async productoId(id){
        const sql="select * from producto where idprod="+id+";";
        try {
            await this.conectarMySql();
            const [[producto]]=await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Consulta correcta por id");
            return producto;
            
        } catch (error) {
          console.log("Error al consultar por id"+error);
          console.log(sql);  
        }
    }
    async EditarProducto(producto) {
        const sql="update producto set nombre='"+producto.nombre+"' , precio= '"+producto.precio+"' ,  `desc`= '"+producto.desc+"' , cant= '"+producto.cant+"'  where idprod='"+producto.idprod+"' ;";
        const sql2=`update producto set nombre='${producto.nombre}' , precio='${producto.precio}' ,  desc='${producto.desc}' , cant='${producto.cant}' ;" `
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Actualización de productos exitosa");
        } catch (error) {
            console.error("Error al actualizar los datos de los productos " + error);
            console.error(sql);
        }
    }

    async BorrarProducto(idprod){
        const sql="delete from producto where idprod="+idprod+ ";";
    
    try {
        await this.conectarMySql();
        await this.conexion.execute(sql);
        console.log("Producto borrado");
        alert("Producto Borrado");
        
    } catch (error) {
        console.log("Error al borrar usuario"+error);
        console.log(sql);
    } 
    }
}



module.exports=ProductoBD//exportar la clase ProductoBD
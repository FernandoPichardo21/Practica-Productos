const ConectarBD=require("./ConectarBD");

class UsuarioBD extends ConectarBD{
    constructor(){
        super();//con super inicias las variables del constructor heredado en este caso conectarBD
    }
    async nuevoUsuario(usuario1){
        const sql="insert into usuarios values(null,'"+usuario1.nombre+"','"+usuario1.celular+"','"+usuario1.correo+"');";
        try {
            await this.conectarMySql(); //intentar y esperar a que conecte mysql
            await this.conexion.execute(sql);
        console.log("Crea un nuevo usuario");
        await this.cerrarConexion();
    }catch (error) {
        console.log("Error al agregar usuario "+error);
        console.error(sql);    
        }
    }
    async mostrarUsuarios() {
        const sql="SELECT * FROM usuarios;";
        try {
            await this.conectarMySql();
            const [UsuariosMySql]=await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Los datos se obtuvieron correctamente");
            console.log(UsuariosMySql);
            return(UsuariosMySql);
        } catch (error) {
            console.error("Error al obtener los datos de los usuarios" + error);
            console.error(sql);
        }
    }
    async usuarioId(id){
        const sql="select * from usuarios where idUsuario="+id+";";
        try {
            await this.conectarMySql();
            const [[usuario]]=await this.conexion.execute(sql);
            await this.cerrarConexion();
            return usuario;
            console.log("Consulta correcta por id");
        } catch (error) {
          console.log("Error al consultar por id"+error);
          console.log(sql);  
        }
    }
    async EditarUsuario(usuario) {
        const sql="update usuarios set nombre='"+usuario.nombre+"' , celular= '"+usuario.celular+"' ,  correo='"+usuario.correo+"' where idUsuario='"+usuario.idUsuario+"' ;";
        const sql2=`update usuarios set nombre='${usuario.nombre}' , celular='${usuario.celular}' ,  correo='${usuario.correo}' ;" ` 
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Actualización de usuario exitosa");
        } catch (error) {
            console.error("Error al actualizar los datos de los usuarios" + error);
            console.error(sql);
        }
    }

    async BorrarUsuario(idUsuario){
        const sql="delete from usuarios where idUsuario="+idUsuario+ ";";
    
    try {
        await this.conectarMySql();
        await this.conexion.execute(sql);
        console.log("Usuario borrado");
        
    } catch (error) {
        console.log("Error al borrar usuario"+error);
        console.log(sql);
    } 
    }
}



module.exports=UsuarioBD//exportar la clase usuarioBD
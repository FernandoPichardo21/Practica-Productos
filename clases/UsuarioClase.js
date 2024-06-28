class Usuario{
    constructor(usuario1){
        
        this.id=usuario1.idUsuario,
        this.nombre=usuario1.nombre;
        this.celular=usuario1.celular;
        this.correo=usuario1.correo
    }
    set id(id){
        this._id=id;
    }
    set nombre(nombre){ //mi funcion nombre recibe ubna variable que es nombre
        var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if(regexNombre.test(nombre)){
            this._nombre=nombre;
        }
        
    }
    set celular(celular){ //mi funcion nombre recibe ubna variable que es nombre
        var regexCelular = /^\d{10}$/;
        if(regexCelular.test(celular)){
            this._celular=celular;
        }
    }
    set correo(correo){ //mi funcion nombre recibe ubna variable que es nombre
        var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(regexCorreo.test(correo)){
            this._correo=correo;
        }
    
    }
    get id(){
        return this._id;
    }
    get nombre(){ //aqui retornas las variables para que se muestren
        return this._nombre;
    }
    get celular(){ //aqui retornas las variables para que se muestren
        return this._celular;
    }
    get correo(){ //aqui retornas las variables para que se muestren
        return this._correo;
    }
    get mostrarDatos(){  //regresa un objeto que tiene entre llaves
        return{
            id:this.id,
            nombre:this.nombre,
            celular:this.celular,
            correo:this.correo
        }
    }
}

module.exports=Usuario;
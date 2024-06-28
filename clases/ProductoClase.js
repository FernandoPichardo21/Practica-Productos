class Producto{
    constructor(producto1){
        
        this.id=producto1.idprod,
        this.nombre=producto1.nombre;
        this.precio=producto1.precio;
        this.desc=producto1.desc;
        this.cant=producto1.cant;
    }
    set id(id){
        this._id=id;
    }
    set nombre(nombre){ //mi funcion nombre recibe una variable llamada nombre
        var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if(regexNombre.test(nombre)){
            this._nombre=nombre;
        }
        
    }
    set precio(precio){ //mi funcion precio recibe una variable llamada precio
        var regexPrecio = /^\d+(\.\d{1,2})?$/;
        if(regexPrecio.test(precio)){
            this._precio=precio;
        }
    }
    set desc(desc){ //mi funcion desc recibe ubna variable llamada desc
        var regexDesc = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if(regexDesc.test(desc)){
            this._desc=desc;
        }
    
    }
    set cant(cant){ //mi funcion cant recibe ubna variable llamada cant
        var regexCant = /^\d+$/;
        if(regexCant.test(cant)){
            this._cant=cant;
        }
    
    }







    get id(){
        return this._id;
    }
    get nombre(){ //aqui retornas las variables para que se muestren
        return this._nombre;
    }
    get precio(){ //aqui retornas las variables para que se muestren
        return this._precio;
    }
    get desc(){ //aqui retornas las variables para que se muestren
        return this._desc;
    }
    get cant(){ //aqui retornas las variables para que se muestren
        return this._cant;
    }


    get mostrarDatos(){  //regresa un objeto que tiene entre llaves
        return{
            id:this.id,
            nombre:this.nombre,
            precio:this.precio,
            desc:this.desc,
            cant:this.cant,
        }
    }
}

module.exports=Producto;
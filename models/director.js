const mongooose = require('mongoose');

// Schema representa coleccion que se encuentra en la base de datos 
const schema = mongooose.Schema({
    _name:String,
    _lastName:String
});

// Clase

class Director {
    constructor(name, lastName){
        this._name = name;
        this._lastName = lastName;
    }

    get name(){
        return this._name;
    }

    set name(v){
        this._name = v;
    }

    get lastNameame(){
        return this._lastName;
    }
    
    /**
     * @param {any} v
     */
    set lastName(v){
        this._lastName = v;
    }
}

schema.loadClass(Director);
module.exports = mongooose.model('Director', schema);



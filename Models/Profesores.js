import mongoose from "mongoose";

const ProfShcema= new mongoose.Schema({
     nombre:{
        type: String, 
        require: true 
    }, 
    apellidoP:{
        type: String, 
        require: true 
    }, 
    apellidoM:{
        type: String, 
        require: true 
    }, 
    contraseña:{
        type: String,
        require: true
    }, 
    correo: {
        type: String,
        require: true
    },
    especialidad: {type: String},
    TipodeUsuario: {type: String}
    }); 

const ProfModelo = mongoose.model ("Profesores", ProfShcema);
export default ProfModelo; 
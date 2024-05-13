import mongoose from "mongoose";

const EstudianteShcema= new mongoose.Schema({
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
    semestre: {type: Number},
    intereses:{type: String}
})

const EstudianteModelo = mongoose.model ("Estudiantes", EstudianteShcema);
export default EstudianteModelo; 
import mongoose from "mongoose";

const ApuntesShcema= new mongoose.Schema({
    titulo :{
        type: String,
        require: true 
    },
    descripcion:{type: String},
    materia:{
        type:String,
        require: true
    },
    universidad:{
        type: String, 
        require : true
    },
    urldescraga: {
        type: String, 
        require: true
    },
    Fechacreacion:{type: String}
}); 

const ApuntesModelo = mongoose.model ("Apuntes", ApuntesShcema);
export default ApuntesModelo;
 
import mongoose from "mongoose";

const LibrosShcema= new mongoose.Schema({
    titulo :{
        type: String,
        require: true 
    },
    autor:{
        type: String,
        require: true
    },
    editorial:{
        type: String,
        require: true 
    },
    edicion:{type:String},
    tema:{
        type:String,
        require: true
    },
    descripcion:{type:String},

    urldescraga:{
        type: String,
        require: true
    }
    
});

const  LibrosModelo = mongoose.model ("Libros", LibrosShcema);
export default LibrosModelo;
 
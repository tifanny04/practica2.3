import mongoose from "mongoose";

const VideoShcema= new mongoose.Schema({
    titulo :{
        type: String,
        require: true
    },
    descripcion: {type: String},
    url: {
        type: String,
        require: true 
    },
    tema: {
        type: String, 
        require: true
    }
});

const VideoModelo = mongoose.model ("Videos", VideoShcema);
export default VideoModelo; 
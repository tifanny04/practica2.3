import mongoose from "mongoose";

export default class DB{
    static async connectDB(DB_URL){
        try{
            mongoose.connect(DB_URL)
        } catch (error){
            console.error(error.message);
        }
    


    const dbConnection = mongoose.connection;
    dbConnection.once("open",(_)=>{
        console.log(`conexion exitos con: ${DB_URL}`)
    }); 

    dbConnection.on("error", (error)=>{
            console.log(`No se conecto por ${error}`)
        }); 

    }

}; 
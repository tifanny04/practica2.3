import express from "express";
import dotenv from "dotenv"; 
import BD from "./Config/db.js"; 
import estudiantesroutes from "./Routes/estudaintesroutes.js";
import profesoresroutes from "./Routes/profesoresroutes.js";
import librosroutes from "./Routes/librosroutes.js";
import apuntesroutes from "./Routes/apuntesroutes.js";
import videosroutes from "./Routes/videosroutes.js";

dotenv.config();

const app = express(); 
const port = process.env.PORT || 7000; 

app.use(express.json())
app.use(express.urlencoded({extend: true})); 

app.use("/Estudiantes", estudiantesroutes);
app.use("/Apuntes", apuntesroutes); 
app.use("/Libros", librosroutes); 
app.use("/Profesores", profesoresroutes); 
app.use("/Videos", videosroutes);

BD.connectDB(process.env.DB_URL); 

app.listen(port, () =>{
    console.log(`Conectate aqui http:localhost:${port}`)
}); 



import express from "express";
import LibrosModel from "../Models/Libros.js";

const router = express.Router() 

router.get("/libros", async(req, res)=>{
    try{
        const libros =await LibrosModel.find({});
        res.send(libros);
    } catch (error){
        res.status(500).send({error})
    }
}); 

router.post("/libros", async(req, res)=>{
    const libros = new LibrosModel(req.body);
    try{
        await libros.save();
        res.send(libros);
    } catch (error){
        res.status(500).send({error})
    }
}); 

router.get("/libros/:id", async(req, res)=>{
    try{
        const libros =await LibrosModel.findOne({_id: req.params.id});
        res.send(libros);
    } catch (error){
        res.status(500).send({error})
    }
}); 

export default router;
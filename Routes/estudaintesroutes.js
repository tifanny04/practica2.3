import express from "express";
import EstudianteModel from "../Models/Estudiantes.js";

const router = express.Router() 

router.get("/estudiante", async(req, res)=>{
    try{
        const estudiante =await EstudianteModel.find({});
        res.send(estudiante);
    } catch (error){
        res.status(500).send({error})
    }
}); 

router.post("/estudiante", async(req, res)=>{
    const estudiante = new EstudianteModel(req.body);
    try{
        await estudiante.save();
        res.send(estudiante);
    } catch (error){
        res.status(500).send({error})
    }
}); 

router.get("/estudiante/:id", async(req, res)=>{
    try{
        const estudiante =await EstudianteModel.findOne({_id: req.params.id});
        res.send(estudiante);
    } catch (error){
        res.status(500).send({error})
    }
}); 

export default router;


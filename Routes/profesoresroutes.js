import express from "express";
import ProfModel from "../Models/Profesores.js";

const router = express.Router() 

router.get("/profes", async(req, res)=>{
    try{
        const profes =await EstudianteModel.find({});
        res.send(profes);
    } catch (error){
        res.status(500).send({error})
    }
}); 

router.post("/profes", async(req, res)=>{
    const profes = new ProfModel(req.body);
    try{
        await profes.save();
        res.send(profes);
    } catch (error){
        res.status(500).send({error})
    }
}); 

router.get("/profes/:id", async(req, res)=>{
    try{
        const profes =await ProfModel.findOne({_id: req.params.id});
        res.send(profes);
    } catch (error){
        res.status(500).send({error})
    }
}); 

export default router;
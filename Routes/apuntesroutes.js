import express from "express";
import ApuntesModel from "../Models/Apuntes.js";

const router = express.Router() 

router.get("/apunte", async(req, res)=>{
    try{
        const apunte =await ApuntesModel.find({});
        res.send(apunte);
    } catch (error){
        res.status(500).send({error})
    }
}); 

router.post("/apunte", async(req, res)=>{
    const apunte = new ApuntesModelModel(req.body);
    try{
        await apunte.save();
        res.send(apunte);
    } catch (error){
        res.status(500).send({error})
    }
}); 

router.get("/apunte/:id", async(req, res)=>{
    try{
        const apunte =await ApuntesModel.findOne({_id: req.params.id});
        res.send(apunte);
    } catch (error){
        res.status(500).send({error})
    }
}); 

export default router;
import express from "express";
import VideosModel from "../Models/Videos.js";

const router = express.Router() 

router.get("/videos", async(req, res)=>{
    try{
        const videos =await VideosModel.find({});
        res.send(videos);
    } catch (error){
        res.status(500).send({error})
    }
}); 

router.post("/videos", async(req, res)=>{
    const videos = new VideosModel(req.body);
    try{
        await videos.save();
        res.send(videos);
    } catch (error){
        res.status(500).send({error})
    }
}); 

router.get("/videos/:id", async(req, res)=>{
    try{
        const videos =await VideosModel.findOne({_id: req.params.id});
        res.send(videos);
    } catch (error){
        res.status(500).send({error})
    }
}); 

export default router;
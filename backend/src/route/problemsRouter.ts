//@ts-nocheck
import { Router } from "express";
import { Problem } from "../db/db";
export const problemRouter = Router()

problemRouter.get('/solve/:problemId',async (req,res)=>{
    console.log("hello")
    const objectId = req.params.problemId; 
    console.log(objectId);
    try{
    const data = await Problem.findById(objectId)
    res.status(200).json({
        msg:data
    })
    }
    catch(error){
        console.log("error at fetching problem")
        res.json({
            msg:"error occured"
        })

    }
})

problemRouter.get('/',async(req,res)=>{
    const problems = await Problem.find({}).select('title description tag');
    res.json({problems})
    return
})


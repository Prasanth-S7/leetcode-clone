import { Router } from "express";
import { Problem } from "../db/db";
import { title } from "process";
export const problemRouter = Router()
problemRouter.get('/',async(req,res)=>{
    const problems = await Problem.find({}).select('title description tag');
    res.json({problems})
    return
})

import { Router } from "express";
export const userRouter = Router();
userRouter.get('/hi',(req,res)=>{
    res.json({
        msg:"hi there from mars"
    })
})
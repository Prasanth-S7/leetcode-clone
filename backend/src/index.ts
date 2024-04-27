import express, { Express, Request, Response,Router } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { userRouter } from "./route/userRouter";
import { problemRouter } from "./route/problemsRouter";
import { createConnection } from "./db/db";
dotenv.config();
const connectToDB = async()=>{
    await createConnection();
}
connectToDB();

const app: Express = express();
const port = process.env.PORT ;
app.use(express.json())
app.use(cors());
app.use('/user',userRouter)
app.use('/problems',problemRouter)

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
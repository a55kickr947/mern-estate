import express from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO).then(() => {
     console.log("connected to mongo")
}).catch((err) => {
     console.log(err)
});

app.use(express.json());


app.use("/api/user",userRouter);
app.use("/api/auth",authRouter)

app.listen(3000,() => {
     console.log("server is running");
});
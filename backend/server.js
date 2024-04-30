import express from "express"
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
const app=express()
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use("/api/auth",authRoutes);
const PORT=process.env.port||5000;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
    connectMongoDB();
});
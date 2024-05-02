import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from "cloudinary";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import notificationRoutes from "./routes/notification.route.js";

import connectMongoDB from "./db/connectMongoDB.js";
const app=express()
dotenv.config()
cloudinary.config({
   cloud_name:process.env.CLODINARY_CLOUD_NAME,
   api_key:process.env.CLODINARY_API_KEY,
   api_secret:process.env.CLODINARY_API_SECRET,
});
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/posts",postRoutes);
app.use("/api/notifications",notificationRoutes);
const PORT=process.env.port||5000;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
    connectMongoDB();
});
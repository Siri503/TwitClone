import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { commentOnPost, createPost,deletePost } from "../controllers/post.controller.js";
const router=express.Router();

router.post("/create",protectRoute,createPost);
router.delete("/:id",protectRoute,deletePost);
router.post("/comment/:id",protectRoute,commentOnPost);

export default router;
import express from "express";
import { createPost, getPosts } from "../controllers";

export const postRouter = express.Router();

/**
 * @swagger
 * /post/create-post:
 *   post:
 *     summary: Create a new post
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *             properties:
 *               id:
 *                 type: number
 *                 description: The auto-generated id of the post
 *               message:
 *                 type: string
 *                 description: The pot body
 *             example:
 *               message: Hello team
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 */
postRouter.post("/create-post", createPost);

/**
 * @swagger
 * /post/get-posts:
 *   get:
 *     summary: Returns the list of all posts
 *     tags: [Posts]
 *     responses:
 *       304:
 *         description: The list of posts
 */
postRouter.get("/get-posts", getPosts);

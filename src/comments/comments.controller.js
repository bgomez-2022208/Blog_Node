import { response, request } from 'express';
import bcryptjs from 'bcryptjs';
import Comment from './comments.model.js';

export const createComentary = async (req, res) => {
    const { comentary, autor } = req.body;
    const com = new Comment({comentary, autor});
    await com.save();
    res.status(200).json({
        com
    })
}
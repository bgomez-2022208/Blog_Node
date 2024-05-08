import { Router } from "express";
import { check } from "express-validator";
import {
    createBlog
} from "./comments.controller"

import {
    existenteBlog,    
} from "../helpers/db-validators";


import { validarCampos } from "../middlewares/validar-campos";

const router = Router();


    router.post(
        "/"
        [
            check("comentary", "El comentario es obligatorio").not().isEmpty(),
            check("comentary").custom(existenteBlog),
            validarCampos
        ] ,
        createBlog
    );


export default router;
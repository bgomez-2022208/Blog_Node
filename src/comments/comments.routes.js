import { Router } from "express";
import { check } from "express-validator";

import { createComentary} from "./comments.controller.js";

import { validarCampos } from "../middlewares/validar-campos.js"

const router = Router();

router.post(
    "/",
    [
        check('autor', 'This autor is void').not().isEmpty(),
        check('comentary','This comentary is void').not().isEmpty(),
        validarCampos,
    ],
    createComentary
);

export default router;
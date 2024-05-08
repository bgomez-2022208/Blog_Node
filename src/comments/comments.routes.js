import { Router } from "express";
import { check } from "express-validator";

import {
    //createComentary
} from "./comments.controller.js";

import {
    ExistenteBlog
} from "../helpers/db-validators.js"

import { validarCampos } from "../middlewares/validar-campos.js"

const router = Router();

router.post(
    "/",
    [
        check("")
    ],
    createComments
);
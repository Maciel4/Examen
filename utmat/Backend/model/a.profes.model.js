import { model } from "mongoose";
import { esquemaAlumnos } from "./a.model";

export const modeloProfes = new model('Profes', esquemaAlumnos)
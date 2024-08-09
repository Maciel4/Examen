import { model } from "mongoose";
import { esquemaLab_Com } from "./b.laboratorio.computo";

export const modeloLab = new model('Laboratorio', esquemaLab_Com)
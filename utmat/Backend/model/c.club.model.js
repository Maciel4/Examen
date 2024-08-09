import { model } from "mongoose";
import { esquemacursos } from "./c.cursos.model";

export const modeloclub = new model('Club', esquemacursos)